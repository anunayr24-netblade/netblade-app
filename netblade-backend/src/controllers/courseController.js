import Course from '../models/Course.js';
import CourseProgress from '../models/CourseProgress.js';

// @desc    Get all courses
// @route   GET /api/v1/courses
// @access  Public
export const getCourses = async (req, res, next) => {
  try {
    const { category, level, search, featured, limit = 20, page = 1 } = req.query;

    // Build query
    const query = { isPublished: true };

    if (category) query.category = category;
    if (level) query.level = level;
    if (featured) query.isFeatured = featured === 'true';
    if (search) {
      query.$text = { $search: search };
    }

    const courses = await Course.find(query)
      .populate('createdBy', 'firstName lastName username')
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit))
      .sort({ isFeatured: -1, createdAt: -1 });

    const total = await Course.countDocuments(query);

    res.status(200).json({
      success: true,
      count: courses.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / parseInt(limit)),
      data: courses
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get course by ID
// @route   GET /api/v1/courses/:id
// @access  Public
export const getCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate('createdBy', 'firstName lastName username avatar');

    if (!course) {
      return res.status(404).json({
        success: false,
        error: 'Course not found',
        statusCode: 404
      });
    }

    res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Enroll in course
// @route   POST /api/v1/courses/:id/enroll
// @access  Private
export const enrollInCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        error: 'Course not found',
        statusCode: 404
      });
    }

    // Check if already enrolled
    const existingProgress = await CourseProgress.findOne({
      user: req.user.id,
      course: req.params.id
    });

    if (existingProgress) {
      return res.status(400).json({
        success: false,
        error: 'Already enrolled in this course',
        statusCode: 400
      });
    }

    // Create course progress record
    const progress = await CourseProgress.create({
      user: req.user.id,
      course: req.params.id
    });

    // Increment total enrolled
    course.totalEnrolled += 1;
    await course.save();

    res.status(201).json({
      success: true,
      data: progress,
      message: 'Successfully enrolled in course'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get my enrolled courses
// @route   GET /api/v1/courses/my-courses
// @access  Private
export const getMyCourses = async (req, res, next) => {
  try {
    const enrollments = await CourseProgress.find({ user: req.user.id })
      .populate('course')
      .sort({ lastAccessedAt: -1 });

    res.status(200).json({
      success: true,
      count: enrollments.length,
      data: enrollments
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update course progress
// @route   PUT /api/v1/courses/:id/progress
// @access  Private
export const updateCourseProgress = async (req, res, next) => {
  try {
    const { moduleNumber, lessonNumber, quizScore, completed } = req.body;

    let progress = await CourseProgress.findOne({
      user: req.user.id,
      course: req.params.id
    });

    if (!progress) {
      return res.status(404).json({
        success: false,
        error: 'You are not enrolled in this course',
        statusCode: 404
      });
    }

    // Update current lesson
    if (moduleNumber !== undefined && lessonNumber !== undefined) {
      progress.currentLesson = { moduleNumber, lessonNumber };
    }

    // Mark lesson as completed
    if (completed) {
      const lessonCompleted = progress.completedLessons.find(
        l => l.moduleNumber === moduleNumber && l.lessonNumber === lessonNumber
      );

      if (!lessonCompleted) {
        progress.completedLessons.push({
          moduleNumber,
          lessonNumber,
          completedAt: new Date(),
          quizScore: quizScore || 0
        });
      }

      // Calculate progress percentage
      const course = await Course.findById(req.params.id);
      const totalLessons = course.modules.reduce((sum, module) => 
        sum + (module.lessons ? module.lessons.length : 0), 0
      );
      
      progress.progress = (progress.completedLessons.length / totalLessons) * 100;

      // Check if course is fully completed
      if (progress.progress >= 100 && !progress.completedAt) {
        progress.completedAt = new Date();
        
        // Update course completion stats
        course.totalCompleted += 1;
        await course.save();
      }
    }

    await progress.save();

    res.status(200).json({
      success: true,
      data: progress,
      message: 'Progress updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get course lessons
// @route   GET /api/v1/courses/:id/lessons
// @access  Private (for enrolled users)
export const getCourseLessons = async (req, res, next) => {
  try {
    // Check if user is enrolled
    const progress = await CourseProgress.findOne({
      user: req.user.id,
      course: req.params.id
    });

    if (!progress) {
      return res.status(403).json({
        success: false,
        error: 'Please enroll in this course to access lessons',
        statusCode: 403
      });
    }

    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        error: 'Course not found',
        statusCode: 404
      });
    }

    res.status(200).json({
      success: true,
      data: {
        modules: course.modules,
        progress: progress
      }
    });
  } catch (error) {
    next(error);
  }
};
