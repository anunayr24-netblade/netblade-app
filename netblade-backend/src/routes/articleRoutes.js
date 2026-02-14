import express from 'express';
import {
  getArticles,
  getArticle,
  getArticleBySlug,
  likeArticle,
  bookmarkArticle,
  commentOnArticle,
  getArticlesByCategory,
  getFeaturedArticles
} from '../controllers/articleController.js';
import { protect, optionalAuth } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getArticles);
router.get('/featured', getFeaturedArticles);
router.get('/category/:category', getArticlesByCategory);
router.get('/slug/:slug', getArticleBySlug);
router.get('/:id', getArticle);

// Protected routes
router.post('/:id/like', protect, likeArticle);
router.post('/:id/bookmark', protect, bookmarkArticle);
router.post('/:id/comment', protect, commentOnArticle);

export default router;
