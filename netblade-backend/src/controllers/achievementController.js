import Achievement from '../models/Achievement.js';
import UserAchievement from '../models/UserAchievement.js';
import User from '../models/User.js';

// @desc    Get all achievements
// @route   GET /api/v1/achievements
// @access  Public
export const getAchievements = async (req, res, next) => {
  try {
    const { category } = req.query;

    const query = { isActive: true };
    if (category) query.category = category;

    const achievements = await Achievement.find(query).sort('threshold');

    res.status(200).json({
      success: true,
      count: achievements.length,
      data: achievements
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user achievements
// @route   GET /api/v1/achievements/my
// @access  Private
export const getUserAchievements = async (req, res, next) => {
  try {
    const userAchievements = await UserAchievement.find({ user: req.user.id })
      .populate('achievement')
      .sort('-earnedAt');

    const completed = userAchievements.filter(ua => ua.isCompleted);
    const inProgress = userAchievements.filter(ua => !ua.isCompleted);

    res.status(200).json({
      success: true,
      data: {
        all: userAchievements,
        completed,
        inProgress,
        stats: {
          total: userAchievements.length,
          completed: completed.length,
          inProgress: inProgress.length
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Check and award achievements
// @route   POST /api/v1/achievements/check
// @access  Private (Internal use - called by other controllers)
export const checkAchievements = async (userId, criteria, value) => {
  try {
    // Find applicable achievements
    const achievements = await Achievement.find({
      criteria,
      threshold: { $lte: value },
      isActive: true
    });

    for (const achievement of achievements) {
      // Check if user already has this achievement
      let userAchievement = await UserAchievement.findOne({
        user: userId,
        achievement: achievement._id
      });

      if (!userAchievement) {
        // Create new user achievement
        userAchievement = await UserAchievement.create({
          user: userId,
          achievement: achievement._id,
          progress: value,
          isCompleted: value >= achievement.threshold
        });

        if (userAchievement.isCompleted) {
          // Award points and coins
          await User.findByIdAndUpdate(userId, {
            $inc: {
              stars: achievement.points,
              coins: achievement.coins,
              reputation: achievement.points
            }
          });
        }
      } else if (!userAchievement.isCompleted && value >= achievement.threshold) {
        // Mark as completed
        userAchievement.isCompleted = true;
        userAchievement.progress = value;
        userAchievement.earnedAt = new Date();
        await userAchievement.save();

        // Award points and coins
        await User.findByIdAndUpdate(userId, {
          $inc: {
            stars: achievement.points,
            coins: achievement.coins,
            reputation: achievement.points
          }
        });
      } else {
        // Update progress
        userAchievement.progress = value;
        await userAchievement.save();
      }
    }
  } catch (error) {
    console.error('Error checking achievements:', error);
  }
};

// @desc    Seed default achievements
// @route   POST /api/v1/achievements/seed
// @access  Private (Admin only)
export const seedAchievements = async (req, res, next) => {
  try {
    const defaultAchievements = [
      // Learning Achievements
      {
        name: 'First Steps',
        description: 'Complete your first lesson',
        icon: '📚',
        category: 'Learning',
        criteria: 'lessons_completed',
        threshold: 1,
        points: 10,
        coins: 50,
        rarity: 'Common'
      },
      {
        name: 'Knowledge Seeker',
        description: 'Complete 10 lessons',
        icon: '🎓',
        category: 'Learning',
        criteria: 'lessons_completed',
        threshold: 10,
        points: 25,
        coins: 100,
        rarity: 'Common'
      },
      {
        name: 'Course Master',
        description: 'Complete your first course',
        icon: '🏅',
        category: 'Learning',
        criteria: 'courses_completed',
        threshold: 1,
        points: 50,
        coins: 200,
        rarity: 'Rare'
      },
      {
        name: 'Active Learner',
        description: 'Complete 5 courses',
        icon: '⭐',
        category: 'Learning',
        criteria: 'courses_completed',
        threshold: 5,
        points: 100,
        coins: 500,
        rarity: 'Epic'
      },

      // Community Achievements
      {
        name: 'Community Member',
        description: 'Create your first post',
        icon: '💬',
        category: 'Community',
        criteria: 'posts_created',
        threshold: 1,
        points: 10,
        coins: 50,
        rarity: 'Common'
      },
      {
        name: 'Active Contributor',
        description: 'Create 10 posts',
        icon: '📝',
        category: 'Community',
        criteria: 'posts_created',
        threshold: 10,
        points: 50,
        coins: 200,
        rarity: 'Rare'
      },
      {
        name: 'Community Helper',
        description: 'Make 50 helpful comments',
        icon: '🤝',
        category: 'Community',
        criteria: 'comments_made',
        threshold: 50,
        points: 75,
        coins: 300,
        rarity: 'Epic'
      },

      // Milestone Achievements
      {
        name: '100 Stars',
        description: 'Earn 100 stars',
        icon: '🌟',
        category: 'Milestone',
        criteria: 'stars_earned',
        threshold: 100,
        points: 50,
        coins: 250,
        rarity: 'Rare'
      },
      {
        name: 'Popular',
        description: 'Get 50 followers',
        icon: '👥',
        category: 'Milestone',
        criteria: 'followers_gained',
        threshold: 50,
        points: 75,
        coins: 300,
        rarity: 'Epic'
      },
      {
        name: 'Legend',
        description: 'Earn 1000 stars',
        icon: '🏆',
        category: 'Milestone',
        criteria: 'stars_earned',
        threshold: 1000,
        points: 500,
        coins: 2000,
        rarity: 'Legendary'
      }
    ];

    // Clear existing achievements (only in development)
    if (process.env.NODE_ENV === 'development') {
      await Achievement.deleteMany({});
    }

    const achievements = await Achievement.insertMany(defaultAchievements);

    res.status(201).json({
      success: true,
      count: achievements.length,
      data: achievements,
      message: 'Default achievements seeded successfully'
    });
  } catch (error) {
    next(error);
  }
};
