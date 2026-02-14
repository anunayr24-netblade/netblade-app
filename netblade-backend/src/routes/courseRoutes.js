import express from 'express';
import {
  getCourses,
  getCourse,
  enrollInCourse,
  getMyCourses,
  updateCourseProgress,
  getCourseLessons
} from '../controllers/courseController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getCourses);
router.get('/:id', getCourse);

// Protected routes
router.post('/:id/enroll', protect, enrollInCourse);
router.get('/my/courses', protect, getMyCourses);
router.put('/:id/progress', protect, updateCourseProgress);
router.get('/:id/lessons', protect, getCourseLessons);

export default router;
