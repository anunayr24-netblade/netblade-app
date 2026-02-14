import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a course title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true
  },
  level: {
    type: String,
    required: [true, 'Please specify the course level'],
    enum: ['Beginner', 'Intermediate', 'Advanced', 'All Levels']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: [
      'Market Foundations',
      'Technical Analysis',
      'Risk Management',
      'Trading Psychology',
      'Derivatives',
      'Cryptocurrency',
      'Bonds',
      'Mutual Funds',
      'Commodities',
      'Options',
      'Other'
    ]
  },
  topics: [{
    type: String
  }],
  lessons: {
    type: Number,
    required: [true, 'Please specify number of lessons'],
    min: [1, 'Course must have at least 1 lesson']
  },
  duration: {
    type: String, // e.g., "6 weeks", "3 months"
    required: [true, 'Please specify course duration']
  },
  color: {
    type: String,
    default: 'teal' // For UI theming
  },
  thumbnail: {
    type: String,
    default: 'default-course-thumbnail.png'
  },
  coursePath: {
    type: String,
    required: true
  },
  
  // Course Content
  modules: [{
    moduleNumber: Number,
    title: String,
    description: String,
    lessons: [{
      lessonNumber: Number,
      title: String,
      description: String,
      content: String, // HTML or Markdown content
      videoUrl: String,
      duration: Number, // in minutes
      resources: [{
        title: String,
        url: String,
        type: String // 'pdf', 'video', 'link', etc.
      }],
      quiz: {
        questions: [{
          question: String,
          options: [String],
          correctAnswer: Number,
          explanation: String
        }]
      }
    }]
  }],

  // Stats
  totalEnrolled: {
    type: Number,
    default: 0
  },
  totalCompleted: {
    type: Number,
    default: 0
  },
  averageRating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  totalReviews: {
    type: Number,
    default: 0
  },

  // Settings
  isPublished: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  isPremium: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number,
    default: 0
  },

  // Metadata
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tags: [String]
}, {
  timestamps: true
});

// Create slug from title before saving
courseSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = this.title.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
  }
  next();
});

// Index for search
courseSchema.index({ title: 'text', description: 'text', topics: 'text' });

const Course = mongoose.model('Course', courseSchema);

export default Course;
