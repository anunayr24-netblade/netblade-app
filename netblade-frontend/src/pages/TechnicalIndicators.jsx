import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function TechnicalIndicators() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/technical-indicators' } });
    }
  }, [navigate]);
  const modules = [
    {
      id: 1,
      title: "Beginner Indicators",
      description: "Essential indicators for new traders",
      topics: [
        "Moving Averages - Trend identification",
        "RSI (Relative Strength Index) - Overbought/Oversold",
        "Support & Resistance - Price levels"
      ]
    },
    {
      id: 2,
      title: "MACD (Moving Average Convergence Divergence)",
      description: "Momentum and trend direction indicator",
      topics: [
        "Shows momentum and trend direction",
        "Buy/sell signal identification",
        "Perfect for swing and positional trading",
        "Signal line crossovers and histogram"
      ]
    },
    {
      id: 3,
      title: "RSI (Relative Strength Index)",
      description: "Momentum oscillator for overbought/oversold conditions",
      topics: [
        "Measures overbought & oversold conditions",
        "Range: 0–100 scale",
        "Common levels: 30 (oversold), 70 (overbought)",
        "Divergence signals"
      ]
    },
    {
      id: 4,
      title: "ADX (Average Directional Index)",
      description: "Trend strength measurement",
      topics: [
        "Measures trend strength, not direction",
        "ADX > 25 indicates strong trend",
        "ADX < 20 indicates sideways market",
        "DI+ and DI- lines for direction"
      ]
    },
    {
      id: 5,
      title: "Stochastic Oscillator",
      description: "Momentum indicator for trend reversals",
      topics: [
        "Popular momentum indicator",
        "Excellent in sideways markets",
        "Signals trend reversal zones",
        "%K and %D lines"
      ]
    },
    {
      id: 6,
      title: "Bollinger Bands",
      description: "Volatility-based indicator",
      topics: [
        "Shows price volatility",
        "Price expansion = volatility increase",
        "Identifies breakouts & reversals",
        "Mean reversion signals"
      ]
    },
    {
      id: 7,
      title: "VWAP (Volume Weighted Average Price)",
      description: "Institutional benchmark for intraday trading",
      topics: [
        "Heavily used in intraday trading",
        "Acts as dynamic support/resistance",
        "Institutional benchmark price",
        "Volume-weighted calculations"
      ]
    },
    {
      id: 8,
      title: "Ichimoku Cloud",
      description: "Complete trading system",
      topics: [
        "Complete trading system",
        "Shows trend, momentum & support/resistance",
        "Best for swing trading",
        "Multiple components (Kumo, Tenkan, Kijun)"
      ]
    },
    {
      id: 9,
      title: "Fibonacci Retracement",
      description: "Mathematical retracement levels",
      topics: [
        "Measures pullback levels",
        "Common levels: 38.2%, 50%, 61.8%",
        "Used for entries & targets",
        "Golden ratio based"
      ]
    },
    {
      id: 10,
      title: "Volume Profile",
      description: "Volume analysis at price levels",
      topics: [
        "Shows price levels with high volume",
        "Identifies demand/supply zones",
        "Point of Control (POC)",
        "Value Area identification"
      ]
    },
    {
      id: 11,
      title: "Pivot Points",
      description: "Intraday support and resistance levels",
      topics: [
        "Intraday support & resistance",
        "Common among day traders",
        "Calculated from previous day's data",
        "Multiple pivot levels"
      ]
    },
    {
      id: 12,
      title: "On-Balance Volume (OBV)",
      description: "Volume-based trend confirmation",
      topics: [
        "Measures buying/selling pressure",
        "Confirms price trend",
        "Accumulation/distribution indicator",
        "Volume flow analysis"
      ]
    },
    {
      id: 13,
      title: "Average True Range (ATR)",
      description: "Volatility measurement indicator",
      topics: [
        "Measures price volatility",
        "Helps set stop-loss distance",
        "True range calculations",
        "Volatility-based position sizing"
      ]
    },
    {
      id: 14,
      title: "SuperTrend & Keltner Channels",
      description: "Trend-following and channel indicators",
      topics: [
        "SuperTrend - Popular trend-following",
        "Easy for beginners to use",
        "Keltner Channels - ATR-based bands",
        "Similar to Bollinger Bands"
      ]
    },
    {
      id: 15,
      title: "Market Breadth Indicators",
      description: "Market sentiment and breadth analysis",
      topics: [
        "Advance-Decline Line",
        "Put-Call Ratio",
        "New Highs vs New Lows",
        "Market sentiment measurement"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/learn"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-4"
          >
            ← Back to Learn
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">
            Technical Indicators
          </h1>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Master the most important technical indicators used by professional traders worldwide.
            Learn from basic indicators like RSI and MACD to advanced tools like Ichimoku Cloud
            and Volume Profile. Understand how to combine indicators for better trading decisions.
          </p>
        </div>

        {/* Course Overview */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Course Overview</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">15</div>
              <div className="text-sm text-slate-600">Indicators</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">All Levels</div>
              <div className="text-sm text-slate-600">Beginner to Advanced</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">60+</div>
              <div className="text-sm text-slate-600">Topics</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">Essential</div>
              <div className="text-sm text-slate-600">Trading Tools</div>
            </div>
          </div>
        </div>

        {/* Learning Levels */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 shadow-sm mb-8 border border-indigo-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Learning Levels</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-600 font-semibold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Beginner Indicators</h3>
                <p className="text-sm text-slate-600">Moving Averages, RSI, Support & Resistance</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-yellow-600 font-semibold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Intermediate</h3>
                <p className="text-sm text-slate-600">MACD, Bollinger Bands, Fibonacci</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-600 font-semibold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Advanced</h3>
                <p className="text-sm text-slate-600">Ichimoku, VWAP, Market Breadth, Volume Profile</p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Complete Indicator Guide</h2>
          <div className="space-y-4">
            {modules.map((module) => (
              <div key={module.id} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-semibold text-sm">{module.id}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-slate-600 mb-3">{module.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition">
                      Learn Indicator
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">What You'll Master</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Indicator Fundamentals</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• How each indicator works</li>
                <li>• Calculation methods</li>
                <li>• Signal interpretation</li>
                <li>• Common applications</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Trading Applications</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Entry and exit signals</li>
                <li>• Trend identification</li>
                <li>• Risk management</li>
                <li>• Multi-timeframe analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Advanced Techniques</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Indicator combinations</li>
                <li>• Custom settings</li>
                <li>• Market-specific applications</li>
                <li>• Avoiding common mistakes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}