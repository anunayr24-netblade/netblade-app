import User from '../models/User.js';
import Post from '../models/Post.js';
import CourseProgress from '../models/CourseProgress.js';
import UserAchievement from '../models/UserAchievement.js';
import MarketAlert from '../models/MarketAlert.js';

// @desc    Get dashboard stats
// @route   GET /api/v1/dashboard/stats
// @access  Private
export const getDashboardStats = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id)
      .populate('followers', 'firstName lastName username avatar')
      .populate('following', 'firstName lastName username avatar');

    // Get various stats
    const [
      totalPosts,
      totalCourses,
      completedCourses,
      activeAlerts,
      recentAchievements
    ] = await Promise.all([
      Post.countDocuments({ author: req.user.id, isDeleted: false }),
      CourseProgress.countDocuments({ user: req.user.id }),
      CourseProgress.countDocuments({ user: req.user.id, isCompleted: true }),
      MarketAlert.countDocuments({ user: req.user.id, isActive: true }),
      UserAchievement.find({ user: req.user.id, isCompleted: true })
        .populate('achievement')
        .sort('-earnedAt')
        .limit(5)
    ]);

    // Calculate course completion rate
    const courseCompletionRate = totalCourses > 0 
      ? Math.round((completedCourses / totalCourses) * 100) 
      : 0;

    res.status(200).json({
      success: true,
      data: {
        user: {
          id: user._id,
          name: user.fullName,
          username: user.username,
          avatar: user.avatar,
          level: user.level,
          isVerified: user.isVerified
        },
        gamification: {
          stars: user.stars,
          coins: user.coins,
          reputation: user.reputation
        },
        social: {
          followers: user.followerCount,
          following: user.followingCount
        },
        activity: {
          totalPosts,
          totalCourses,
          completedCourses,
          courseCompletionRate,
          activeAlerts
        },
        recentAchievements
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get recent activity
// @route   GET /api/v1/dashboard/activity
// @access  Private
export const getRecentActivity = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 10;

    // Get recent posts
    const recentPosts = await Post.find({ author: req.user.id, isDeleted: false })
      .sort('-createdAt')
      .limit(5)
      .select('content createdAt likes comments');

    // Get recent course progress
    const recentProgress = await CourseProgress.find({ user: req.user.id })
      .sort('-lastAccessedAt')
      .limit(5)
      .populate('course', 'title thumbnail');

    // Combine and format activities
    const activities = [];

    recentPosts.forEach(post => {
      activities.push({
        type: 'post',
        title: 'Created a post',
        content: post.content.substring(0, 100) + (post.content.length > 100 ? '...' : ''),
        date: post.createdAt,
        engagement: {
          likes: post.likes.length,
          comments: post.comments.length
        }
      });
    });

    recentProgress.forEach(progress => {
      activities.push({
        type: 'course',
        title: progress.completedAt ? 'Completed course' : 'Learning',
        content: progress.course.title,
        date: progress.lastAccessedAt,
        progress: progress.progress
      });
    });

    // Sort by date
    activities.sort((a, b) => new Date(b.date) - new Date(a.date));

    res.status(200).json({
      success: true,
      count: activities.length,
      data: activities.slice(0, limit)
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get learning progress summary
// @route   GET /api/v1/dashboard/learning
// @access  Private
export const getLearningProgress = async (req, res, next) => {
  try {
    const enrollments = await CourseProgress.find({ user: req.user.id })
      .populate('course', 'title thumbnail category level lessons duration')
      .sort('-lastAccessedAt');

    const summary = {
      totalEnrolled: enrollments.length,
      inProgress: enrollments.filter(e => e.progress > 0 && !e.completedAt).length,
      completed: enrollments.filter(e => e.completedAt).length,
      notStarted: enrollments.filter(e => e.progress === 0).length,
      totalLessonsCompleted: enrollments.reduce((sum, e) => 
        sum + e.completedLessons.length, 0
      ),
      averageProgress: enrollments.length > 0
        ? Math.round(enrollments.reduce((sum, e) => sum + e.progress, 0) / enrollments.length)
        : 0
    };

    res.status(200).json({
      success: true,
      data: {
        summary,
        courses: enrollments
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get community engagement stats
// @route   GET /api/v1/dashboard/community
// @access  Private
export const getCommunityEngagement = async (req, res, next) => {
  try {
    const posts = await Post.find({ author: req.user.id, isDeleted: false });

    const totalLikes = posts.reduce((sum, post) => sum + post.likes.length, 0);
    const totalComments = posts.reduce((sum, post) => sum + post.comments.length, 0);
    const totalViews = posts.reduce((sum, post) => sum + post.views, 0);

    // Get top posts
    const topPosts = posts
      .sort((a, b) => b.likes.length - a.likes.length)
      .slice(0, 5)
      .map(post => ({
        id: post._id,
        content: post.content.substring(0, 100),
        likes: post.likes.length,
        comments: post.comments.length,
        views: post.views,
        createdAt: post.createdAt
      }));

    res.status(200).json({
      success: true,
      data: {
        stats: {
          totalPosts: posts.length,
          totalLikes,
          totalComments,
          totalViews,
          averageLikes: posts.length > 0 ? Math.round(totalLikes / posts.length) : 0
        },
        topPosts
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get weekly summary
// @route   GET /api/v1/dashboard/weekly
// @access  Private
export const getWeeklySummary = async (req, res, next) => {
  try {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const [weeklyPosts, weeklyProgress, weeklyAchievements] = await Promise.all([
      Post.countDocuments({
        author: req.user.id,
        createdAt: { $gte: oneWeekAgo },
        isDeleted: false
      }),
      CourseProgress.countDocuments({
        user: req.user.id,
        lastAccessedAt: { $gte: oneWeekAgo }
      }),
      UserAchievement.countDocuments({
        user: req.user.id,
        earnedAt: { $gte: oneWeekAgo },
        isCompleted: true
      })
    ]);

    res.status(200).json({
      success: true,
      data: {
        period: 'Last 7 days',
        posts: weeklyPosts,
        coursesAccessed: weeklyProgress,
        achievementsEarned: weeklyAchievements
      }
    });
  } catch (error) {
    next(error);
  }
};
