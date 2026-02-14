import express from 'express';
import {
  getLivePrices,
  getMarketScanner,
  getEconomicCalendar,
  createAlert,
  getUserAlerts,
  deleteAlert,
  getMarketInsights
} from '../controllers/marketController.js';
import { protect, optionalAuth } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/live-prices', getLivePrices);
router.get('/scanner', getMarketScanner);
router.get('/calendar', getEconomicCalendar);
router.get('/insights', getMarketInsights);

// Protected routes
router.post('/alerts', protect, createAlert);
router.get('/alerts', protect, getUserAlerts);
router.delete('/alerts/:id', protect, deleteAlert);

export default router;
