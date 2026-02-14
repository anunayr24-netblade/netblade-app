import express from 'express';
import {
  getDashboardStats,
  getRecentActivity,
  getLearningProgress,
  getCommunityEngagement,
  getWeeklySummary
} from '../controllers/dashboardController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// All dashboard routes are protected
router.get('/stats', protect, getDashboardStats);
router.get('/activity', protect, getRecentActivity);
router.get('/learning', protect, getLearningProgress);
router.get('/community', protect, getCommunityEngagement);
router.get('/weekly', protect, getWeeklySummary);

export default router;
