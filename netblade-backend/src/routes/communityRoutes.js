import express from 'express';
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
  commentOnPost,
  getUserPosts
} from '../controllers/communityController.js';
import { protect, optionalAuth } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/posts', optionalAuth, getPosts);
router.get('/posts/:id', getPost);
router.get('/posts/user/:username', getUserPosts);

// Protected routes
router.post('/posts', protect, createPost);
router.put('/posts/:id', protect, updatePost);
router.delete('/posts/:id', protect, deletePost);
router.post('/posts/:id/like', protect, likePost);
router.post('/posts/:id/comment', protect, commentOnPost);

export default router;
