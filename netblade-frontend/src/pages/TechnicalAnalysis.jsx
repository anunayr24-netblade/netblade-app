import { Link } from 'react-router-dom';

export default function TechnicalAnalysis() {
  const modules = [
    {
      id: 1,
      title: "Basics of Technical Analysis",
      description: "Foundation concepts of technical analysis",
      topics: [
        "What is Technical Analysis?",
        "Price, Volume & Time concept",
        "Types of charts (Line, Bar, Candlestick)",
        "Dow Theory basics"
      ],
      icon: "📊",
      color: "blue"
    },
    {
      id: 2,
      title: "Candlestick Patterns",
      description: "Master price action through candlestick patterns",
      topics: [
        "Single Candle Patterns: Doji, Hammer/Hanging Man, Spinning Top, Marubozu",
        "Multiple Candle Patterns: Engulfing, Star patterns, Harami"
      ],
      icon: "🕯️",
      color: "green"
    },
    {
      id: 3,
      title: "Chart Patterns",
      description: "Recognize and trade chart formations",
      topics: [
        "Support & Resistance, Trendlines, Channels",
        "Head & Shoulders, Double Top/Bottom",
        "Triangles, Flags & Pennants"
      ],
      icon: "📈",
      color: "purple"
    },
    {
      id: 4,
      title: "Indicators & Oscillators",
      description: "Essential tools for technical analysis",
      topics: [
        "Moving Averages (SMA, EMA)",
        "RSI, MACD, Bollinger Bands",
        "Stochastic, VWAP, ATR",
        "How they work, best settings, when to use"
      ],
      icon: "📉",
      color: "orange"
    },
    {
      id: 5,
      title: "Volume Analysis",
      description: "Understanding market participation",
      topics: [
        "Volume interpretation",
        "Volume + price relationship",
        "Volume spikes and divergence"
      ],
      icon: "📊",
      color: "red"
    },
    {
      id: 6,
      title: "Trend Analysis",
      description: "Identify and follow market trends",
      topics: [
        "Trend direction identification",
        "Higher high & higher low concepts",
        "Trend reversal signals",
        "Trend strength measurement"
      ],
      icon: "↗️",
      color: "indigo"
    },
    {
      id: 7,
      title: "Support & Resistance",
      description: "Key price levels in trading",
      topics: [
        "Static vs Dynamic S/R",
        "Role reversal concept",
        "Psychological price levels"
      ],
      icon: "↔️",
      color: "cyan"
    },
    {
      id: 8,
      title: "Time Frames & Multi-Timeframe Analysis",
      description: "Trading across different time horizons",
      topics: [
        "Scalping vs Intraday vs Swing trading",
        "Top-down analysis approach",
        "Timeframe alignment strategies"
      ],
      icon: "⏰",
      color: "pink"
    },
    {
      id: 9,
      title: "Risk & Money Management",
      description: "Protect your capital while trading",
      topics: [
        "Position sizing techniques",
        "Risk-reward ratio optimization",
        "Stop loss placement",
        "Capital preservation strategies"
      ],
      icon: "🛡️",
      color: "emerald"
    },
    {
      id: 10,
      title: "Trading Strategies",
      description: "Complete trading approaches",
      topics: [
        "Breakout trading strategy",
        "Pullback trading strategy",
        "Trend-following systems",
        "Reversal trading strategy"
      ],
      icon: "🎯",
      color: "amber"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <Link
            to="/learn"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-6 font-medium transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Learn
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Technical Analysis
            <span className="block text-2xl md:text-3xl font-normal text-slate-600 mt-2">
              Master the Art of Chart Reading
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl leading-relaxed">
            Master the art of technical analysis with our comprehensive curriculum.
            Learn to read charts, identify patterns, use indicators, and develop profitable trading strategies.
            This course covers everything from basic concepts to advanced techniques.
          </p>
        </div>

        {/* Course Overview */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12 hover-lift animate-scale-in">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Course Overview</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">10</div>
              <div className="text-lg font-semibold text-blue-800">Modules</div>
              <div className="text-sm text-blue-600 mt-1">Comprehensive Coverage</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">Beginner</div>
              <div className="text-lg font-semibold text-green-800">Level</div>
              <div className="text-sm text-green-600 mt-1">Perfect Starting Point</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">40+</div>
              <div className="text-lg font-semibold text-purple-800">Topics</div>
              <div className="text-sm text-purple-600 mt-1">In-Depth Learning</div>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Learning Path</h2>
          <div className="space-y-6">
            {modules.map((module, index) => (
              <div key={module.id} className={`bg-white rounded-2xl p-8 shadow-lg hover-lift animate-scale-in border-l-4 border-${module.color}-500`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 bg-${module.color}-100 rounded-2xl flex items-center justify-center`}>
                    <span className="text-2xl">{module.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-xl font-bold text-slate-900">
                        {module.title}
                      </h3>
                      <span className={`px-3 py-1 bg-${module.color}-100 text-${module.color}-700 text-sm font-medium rounded-full`}>
                        Module {module.id}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">{module.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {module.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="px-3 py-2 bg-slate-100 text-slate-700 text-sm rounded-lg hover:bg-slate-200 transition-colors"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <button className={`px-6 py-3 bg-${module.color}-600 text-white font-semibold rounded-xl hover:bg-${module.color}-700 hover-lift transition-all duration-300 shadow-lg`}>
                      Start Module
                      <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-8 text-center">What You'll Learn</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Technical Skills
              </h3>
              <ul className="space-y-3 text-teal-100">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Read and interpret price charts
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Identify candlestick patterns
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Use technical indicators effectively
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Analyze volume and market trends
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                Trading Skills
              </h3>
              <ul className="space-y-3 text-teal-100">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Develop trading strategies
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Manage risk and position sizing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Set proper stop losses
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Time entries and exits
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}