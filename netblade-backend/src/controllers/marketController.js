import axios from 'axios';
import MarketAlert from '../models/MarketAlert.js';

// Sample market data (In production, integrate with real APIs)
const mockMarketData = {
  'NIFTY50': { symbol: 'NIFTY50', price: 22450.75, change: 2.35, changePercent: 0.11, volume: 1234567 },
  'SENSEX': { symbol: 'SENSEX', price: 73890.45, change: -0.85, changePercent: -0.01, volume: 2345678 },
  'BANKNIFTY': { symbol: 'BANKNIFTY', price: 47250.30, change: 1.50, changePercent: 0.32, volume: 987654 },
  'BTCUSD': { symbol: 'BTCUSD', price: 51234.56, change: 523.45, changePercent: 1.03, volume: 15678 },
  'ETHUSD': { symbol: 'ETHUSD', price: 2987.34, change: 45.67, changePercent: 1.55, volume: 45678 }
};

// @desc    Get live market prices
// @route   GET /api/v1/market/live-prices
// @access  Public
export const getLivePrices = async (req, res, next) => {
  try {
    const { symbols } = req.query;

    let data;

    if (symbols) {
      const symbolArray = symbols.split(',').map(s => s.toUpperCase());
      data = symbolArray.map(symbol => 
        mockMarketData[symbol] || { symbol, error: 'Symbol not found' }
      );
    } else {
      data = Object.values(mockMarketData);
    }

    res.status(200).json({
      success: true,
      data,
      timestamp: new Date().toISOString(),
      message: 'Note: This is mock data. Integrate with real market data API in production.'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get market scanner data
// @route   GET /api/v1/market/scanner
// @access  Public
export const getMarketScanner = async (req, res, next) => {
  try {
    // Mock scanner data
    const scannerData = {
      topGainers: [
        { symbol: 'TCS', price: 3456.78, change: 4.56, changePercent: 2.34 },
        { symbol: 'INFY', price: 1567.89, change: 3.45, changePercent: 1.89 },
        { symbol: 'RELIANCE', price: 2345.67, change: 2.89, changePercent: 1.45 }
      ],
      topLosers: [
        { symbol: 'HDFCBANK', price: 1678.90, change: -3.45, changePercent: -1.23 },
        { symbol: 'ICICIBANK', price: 987.65, change: -2.34, changePercent: -0.89 },
        { symbol: 'SBIN', price: 567.89, change: -1.23, changePercent: -0.67 }
      ],
      mostActive: [
        { symbol: 'NIFTY50', volume: 1234567, price: 22450.75 },
        { symbol: 'BANKNIFTY', volume: 987654, price: 47250.30 }
      ]
    };

    res.status(200).json({
      success: true,
      data: scannerData,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get economic calendar
// @route   GET /api/v1/market/calendar
// @access  Public
export const getEconomicCalendar = async (req, res, next) => {
  try {
    // Mock calendar data
    const calendarEvents = [
      {
        date: new Date('2026-02-15'),
        time: '09:30',
        event: 'GDP Growth Rate',
        country: 'India',
        impact: 'High',
        forecast: '6.5%',
        previous: '6.3%'
      },
      {
        date: new Date('2026-02-16'),
        time: '14:00',
        event: 'RBI Policy Meeting',
        country: 'India',
        impact: 'High',
        forecast: '6.50%',
        previous: '6.50%'
      },
      {
        date: new Date('2026-02-18'),
        time: '10:00',
        event: 'Inflation Rate',
        country: 'India',
        impact: 'Medium',
        forecast: '5.2%',
        previous: '5.5%'
      }
    ];

    res.status(200).json({
      success: true,
      count: calendarEvents.length,
      data: calendarEvents
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create market alert
// @route   POST /api/v1/market/alerts
// @access  Private
export const createAlert = async (req, res, next) => {
  try {
    const { symbol, alertType, targetValue, message, expiresAt } = req.body;

    const alert = await MarketAlert.create({
      user: req.user.id,
      symbol: symbol.toUpperCase(),
      alertType,
      targetValue,
      message,
      expiresAt
    });

    res.status(201).json({
      success: true,
      data: alert,
      message: 'Market alert created successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user's market alerts
// @route   GET /api/v1/market/alerts
// @access  Private
export const getUserAlerts = async (req, res, next) => {
  try {
    const { active } = req.query;

    const query = { user: req.user.id };
    if (active === 'true') {
      query.isActive = true;
      query.isTriggered = false;
    }

    const alerts = await MarketAlert.find(query).sort('-createdAt');

    res.status(200).json({
      success: true,
      count: alerts.length,
      data: alerts
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete market alert
// @route   DELETE /api/v1/market/alerts/:id
// @access  Private
export const deleteAlert = async (req, res, next) => {
  try {
    const alert = await MarketAlert.findById(req.params.id);

    if (!alert) {
      return res.status(404).json({
        success: false,
        error: 'Alert not found',
        statusCode: 404
      });
    }

    // Make sure user owns the alert
    if (alert.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to delete this alert',
        statusCode: 403
      });
    }

    await alert.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Alert deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get market insights
// @route   GET /api/v1/market/insights
// @access  Public
export const getMarketInsights = async (req, res, next) => {
  try {
    const insights = {
      marketSentiment: 'Bullish',
      trend: 'Uptrend',
      keyLevels: {
        support: [22100, 21950, 21800],
        resistance: [22600, 22750, 22900]
      },
      technicalIndicators: {
        rsi: 62.5,
        macd: 'Bullish Crossover',
        movingAverages: {
          ma50: 22150,
          ma200: 21800
        }
      },
      analysis: 'Market showing strong bullish momentum with healthy volume. Watch for resistance near 22600 levels.'
    };

    res.status(200).json({
      success: true,
      data: insights,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};
