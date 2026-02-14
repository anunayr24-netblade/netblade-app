import mongoose from 'mongoose';

const achievementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add an achievement name'],
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [200, 'Description cannot be more than 200 characters']
  },
  icon: {
    type: String,
    required: true,
    default: '🏆'
  },
  category: {
    type: String,
    enum: ['Learning', 'Trading', 'Community', 'Milestone', 'Special'],
    required: true
  },
  criteria: {
    type: String,
    required: true,
    enum: [
      'courses_completed',
      'lessons_completed',
      'stars_earned',
      'coins_earned',
      'posts_created',
      'comments_made',
      'likes_received',
      'followers_gained',
      'login_streak',
      'quiz_score',
      'community_helper',
      'special_event'
    ]
  },
  threshold: {
    type: Number,
    required: true
  },
  points: {
    type: Number,
    default: 10
  },
  coins: {
    type: Number,
    default: 50
  },
  rarity: {
    type: String,
    enum: ['Common', 'Rare', 'Epic', 'Legendary'],
    default: 'Common'
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const Achievement = mongoose.model('Achievement', achievementSchema);

export default Achievement;
