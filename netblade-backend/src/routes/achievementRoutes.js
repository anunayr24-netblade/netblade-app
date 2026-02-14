import express from 'express';
import {
  getAchievements,
  getUserAchievements,
  seedAchievements
} from '../controllers/achievementController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getAchievements);

// Protected routes
router.get('/my', protect, getUserAchievements);

// Admin routes
router.post('/seed', protect, authorize('admin'), seedAchievements);

export default router;
