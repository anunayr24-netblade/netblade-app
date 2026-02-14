import mongoose from 'mongoose';

const marketAlertSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  symbol: {
    type: String,
    required: [true, 'Please add a symbol'],
    uppercase: true,
    trim: true
  },
  alertType: {
    type: String,
    required: true,
    enum: ['price_above', 'price_below', 'percentage_change', 'volume_spike']
  },
  targetValue: {
    type: Number,
    required: true
  },
  currentValue: {
    type: Number
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isTriggered: {
    type: Boolean,
    default: false
  },
  triggeredAt: {
    type: Date
  },
  message: {
    type: String
  },
  notificationSent: {
    type: Boolean,
    default: false
  },
  expiresAt: {
    type: Date
  }
}, {
  timestamps: true
});

// Index for efficient querying
marketAlertSchema.index({ user: 1, isActive: 1 });
marketAlertSchema.index({ symbol: 1, isActive: 1 });

const MarketAlert = mongoose.model('MarketAlert', marketAlertSchema);

export default MarketAlert;
