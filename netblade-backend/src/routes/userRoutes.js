import express from 'express';
import {
  getUserProfile,
  updateUserProfile,
  uploadAvatar,
  getUserByUsername,
  followUser,
  unfollowUser,
  getUserFollowers,
  getUserFollowing,
  updateNotificationPreferences,
  searchUsers
} from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';
import upload from '../config/multer.js';

const router = express.Router();

// Public routes
router.get('/search', searchUsers);
router.get('/:username', getUserByUsername);
router.get('/:id/followers', getUserFollowers);
router.get('/:id/following', getUserFollowing);

// Protected routes
router.get('/profile/me', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.put('/avatar', protect, upload.single('avatar'), uploadAvatar);
router.put('/notifications', protect, updateNotificationPreferences);
router.post('/:id/follow', protect, followUser);
router.delete('/:id/unfollow', protect, unfollowUser);

export default router;
