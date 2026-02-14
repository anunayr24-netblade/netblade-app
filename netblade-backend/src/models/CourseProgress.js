import mongoose from 'mongoose';

const courseProgressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  enrolledAt: {
    type: Date,
    default: Date.now
  },
  lastAccessedAt: {
    type: Date,
    default: Date.now
  },
  completedAt: {
    type: Date
  },
  progress: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  completedLessons: [{
    moduleNumber: Number,
    lessonNumber: Number,
    completedAt: Date,
    quizScore: Number
  }],
  currentLesson: {
    moduleNumber: Number,
    lessonNumber: Number
  },
  certificates: [{
    issuedAt: Date,
    certificateUrl: String,
    certificateId: String
  }],
  notes: [{
    moduleNumber: Number,
    lessonNumber: Number,
    content: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  bookmarks: [{
    moduleNumber: Number,
    lessonNumber: Number,
    timestamp: Number, // For video bookmarks
    note: String
  }]
}, {
  timestamps: true
});

// Compound index to ensure one progress record per user per course
courseProgressSchema.index({ user: 1, course: 1 }, { unique: true });

// Update lastAccessedAt on every access
courseProgressSchema.pre('save', function(next) {
  this.lastAccessedAt = new Date();
  next();
});

const CourseProgress = mongoose.model('CourseProgress', courseProgressSchema);

export default CourseProgress;
