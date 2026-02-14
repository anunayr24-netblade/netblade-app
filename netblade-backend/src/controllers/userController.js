import User from '../models/User.js';
import Post from '../models/Post.js';
import CourseProgress from '../models/CourseProgress.js';
import UserAchievement from '../models/UserAchievement.js';
import cloudinary from '../config/cloudinary.js';

// @desc    Get user profile
// @route   GET /api/v1/users/profile
// @access  Private
export const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id)
      .populate('followers', 'firstName lastName username avatar')
      .populate('following', 'firstName lastName username avatar');

    // Get additional stats
    const postCount = await Post.countDocuments({ author: req.user.id, isDeleted: false });
    const courseProgress = await CourseProgress.countDocuments({ user: req.user.id });
    const achievements = await UserAchievement.find({ user: req.user.id, isCompleted: true })
      .populate('achievement');

    res.status(200).json({
      success: true,
      data: {
        ...user.toObject(),
        stats: {
          posts: postCount,
          coursesEnrolled: courseProgress,
          achievementsEarned: achievements.length
        },
        achievements: achievements
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update user profile
// @route   PUT /api/v1/users/profile
// @access  Private
export const updateUserProfile = async (req, res, next) => {
  try {
    const allowedFields = [
      'firstName', 'lastName', 'bio', 'location', 'website',
      'dateOfBirth', 'gender', 'mobile', 'countryCode',
      'experienceLevel', 'riskTolerance', 'investmentGoals',
      'interests', 'skills', 'preferredLanguage'
    ];

    const updateData = {};
    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) {
        updateData[field] = req.body[field];
      }
    });

    const user = await User.findByIdAndUpdate(
      req.user.id,
      updateData,
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      success: true,
      data: user,
      message: 'Profile updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Upload/Update user avatar
// @route   PUT /api/v1/users/avatar
// @access  Private
export const uploadAvatar = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'Please upload an image file',
        statusCode: 400
      });
    }

    // Upload to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'netblade/avatars',
      width: 300,
      height: 300,
      crop: 'fill'
    });

    // Update user avatar
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { avatar: result.secure_url },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: {
        avatar: user.avatar
      },
      message: 'Avatar updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user by username
// @route   GET /api/v1/users/:username
// @access  Public
export const getUserByUsername = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.params.username })
      .select('-password')
      .populate('followers', 'firstName lastName username avatar')
      .populate('following', 'firstName lastName username avatar');

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
        statusCode: 404
      });
    }

    // Get public stats
    const postCount = await Post.countDocuments({ author: user._id, isDeleted: false });
    const achievements = await UserAchievement.countDocuments({ 
      user: user._id, 
      isCompleted: true 
    });

    res.status(200).json({
      success: true,
      data: {
        ...user.toObject(),
        stats: {
          posts: postCount,
          achievementsEarned: achievements
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Follow user
// @route   POST /api/v1/users/:id/follow
// @access  Private
export const followUser = async (req, res, next) => {
  try {
    const userToFollow = await User.findById(req.params.id);

    if (!userToFollow) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
        statusCode: 404
      });
    }

    // Can't follow yourself
    if (req.user.id === req.params.id) {
      return res.status(400).json({
        success: false,
        error: 'You cannot follow yourself',
        statusCode: 400
      });
    }

    // Check if already following
    if (req.user.following.includes(req.params.id)) {
      return res.status(400).json({
        success: false,
        error: 'You are already following this user',
        statusCode: 400
      });
    }

    // Add to following list
    await User.findByIdAndUpdate(req.user.id, {
      $push: { following: req.params.id }
    });

    // Add to followers list
    await User.findByIdAndUpdate(req.params.id, {
      $push: { followers: req.user.id }
    });

    res.status(200).json({
      success: true,
      message: `You are now following ${userToFollow.username}`
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Unfollow user
// @route   DELETE /api/v1/users/:id/unfollow
// @access  Private
export const unfollowUser = async (req, res, next) => {
  try {
    const userToUnfollow = await User.findById(req.params.id);

    if (!userToUnfollow) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
        statusCode: 404
      });
    }

    // Check if following
    if (!req.user.following.includes(req.params.id)) {
      return res.status(400).json({
        success: false,
        error: 'You are not following this user',
        statusCode: 400
      });
    }

    // Remove from following list
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { following: req.params.id }
    });

    // Remove from followers list
    await User.findByIdAndUpdate(req.params.id, {
      $pull: { followers: req.user.id }
    });

    res.status(200).json({
      success: true,
      message: `You have unfollowed ${userToUnfollow.username}`
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user followers
// @route   GET /api/v1/users/:id/followers
// @access  Public
export const getUserFollowers = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
      .populate('followers', 'firstName lastName username avatar bio');

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
        statusCode: 404
      });
    }

    res.status(200).json({
      success: true,
      count: user.followers.length,
      data: user.followers
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user following
// @route   GET /api/v1/users/:id/following
// @access  Public
export const getUserFollowing = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
      .populate('following', 'firstName lastName username avatar bio');

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
        statusCode: 404
      });
    }

    res.status(200).json({
      success: true,
      count: user.following.length,
      data: user.following
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update notification preferences
// @route   PUT /api/v1/users/notifications
// @access  Private
export const updateNotificationPreferences = async (req, res, next) => {
  try {
    const { emailUpdates, marketAlerts, communityMentions, weeklyDigest, pushNotifications } = req.body;

    const updateData = { notifications: {} };
    
    if (emailUpdates !== undefined) updateData.notifications.emailUpdates = emailUpdates;
    if (marketAlerts !== undefined) updateData.notifications.marketAlerts = marketAlerts;
    if (communityMentions !== undefined) updateData.notifications.communityMentions = communityMentions;
    if (weeklyDigest !== undefined) updateData.notifications.weeklyDigest = weeklyDigest;
    if (pushNotifications !== undefined) updateData.notifications.pushNotifications = pushNotifications;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      updateData,
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: user.notifications,
      message: 'Notification preferences updated'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Search users
// @route   GET /api/v1/users/search
// @access  Public
export const searchUsers = async (req, res, next) => {
  try {
    const { q, limit = 10 } = req.query;

    if (!q) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a search query',
        statusCode: 400
      });
    }

    const users = await User.find({
      $or: [
        { username: { $regex: q, $options: 'i' } },
        { firstName: { $regex: q, $options: 'i' } },
        { lastName: { $regex: q, $options: 'i' } }
      ]
    })
    .select('firstName lastName username avatar bio')
    .limit(parseInt(limit));

    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    next(error);
  }
};
