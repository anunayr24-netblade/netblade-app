import { Link } from 'react-router-dom';

export default function Commodities() {
  const modules = [
    {
      id: 1,
      title: "What Are Commodities?",
      description: "Foundation concepts of commodity markets",
      topics: [
        "What are commodities?",
        "Hard vs soft commodities",
        "Why people trade commodities",
        "Global commodity markets",
        "Examples: Gold, Oil, Copper, Wheat"
      ]
    },
    {
      id: 2,
      title: "Types of Commodities",
      description: "Different categories of commodities",
      topics: [
        "Precious Metals (Gold, Silver, Platinum)",
        "Industrial Metals (Copper, Aluminium, Zinc)",
        "Energy Commodities (Crude Oil, Natural Gas)",
        "Agricultural Commodities (Wheat, Corn, Cotton, Sugar)"
      ]
    },
    {
      id: 3,
      title: "Commodity Market Structure",
      description: "How commodity markets are organized",
      topics: [
        "Spot Market vs Futures Market",
        "Global commodity exchanges",
        "MCX / NCDEX in India",
        "Contract specifications"
      ]
    },
    {
      id: 4,
      title: "Factors Affecting Commodity Prices",
      description: "What drives commodity price movements",
      topics: [
        "Supply & demand dynamics",
        "Geopolitical events",
        "Weather conditions",
        "Currency strength (USD)",
        "Inflation & interest rates"
      ]
    },
    {
      id: 5,
      title: "Commodity Trading Instruments",
      description: "Different ways to trade commodities",
      topics: [
        "Spot trading",
        "Futures contracts",
        "Options on commodities",
        "ETFs & commodity-linked funds"
      ]
    },
    {
      id: 6,
      title: "Commodity Trading Strategies",
      description: "Practical trading approaches",
      topics: [
        "Trend following",
        "Breakout trading",
        "Seasonal trading",
        "Spread trading"
      ]
    },
    {
      id: 7,
      title: "Risk Management in Commodities",
      description: "Managing risks in commodity trading",
      topics: [
        "Position sizing",
        "Volatility management",
        "Stop loss strategies",
        "Margin requirements"
      ]
    },
    {
      id: 8,
      title: "Commodity-Specific Analysis",
      description: "Understanding individual commodities",
      topics: [
        "Gold - Safe haven & inflation hedge",
        "Crude Oil - OPEC & geopolitics",
        "Agriculture - Weather & policies",
        "Industrial metals - Economic indicators"
      ]
    },
    {
      id: 9,
      title: "Technical Analysis for Commodities",
      description: "Chart analysis for commodities",
      topics: [
        "Support & resistance levels",
        "Trend analysis",
        "Volume & open interest",
        "Commitment of Traders (COT) data"
      ]
    },
    {
      id: 10,
      title: "Common Mistakes in Commodity Trading",
      description: "Pitfalls to avoid",
      topics: [
        "Over-leverage",
        "Ignoring seasonality",
        "News-based trading without confirmation",
        "Poor risk management"
      ]
    },
    {
      id: 11,
      title: "Beginner-to-Advanced Learning Path",
      description: "Progressive learning journey",
      topics: [
        "Beginner: Basics & market structure",
        "Intermediate: Indicators & futures",
        "Advanced: Spread trading & macro analysis"
      ]
    },
    {
      id: 12,
      title: "Practical Tools & Resources",
      description: "Tools for commodity trading",
      topics: [
        "Commodity calendar",
        "Economic event tracker",
        "Position size calculator",
        "Volatility tracker"
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
            className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-4"
          >
            ← Back to Learn
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">
            Commodities Trading
          </h1>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Master the world of commodities trading including precious metals, energy, agriculture,
            and industrial metals. Learn about global commodity markets, trading strategies, risk
            management, and how to analyze different commodities from gold to crude oil.
          </p>
        </div>

        {/* Course Overview */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Course Overview</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">12</div>
              <div className="text-sm text-slate-600">Modules</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">Intermediate</div>
              <div className="text-sm text-slate-600">Level</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">50+</div>
              <div className="text-sm text-slate-600">Topics</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">Global</div>
              <div className="text-sm text-slate-600">Markets</div>
            </div>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 shadow-sm mb-8 border border-amber-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Key Concepts</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-amber-600 text-sm">🛢️</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Real Assets</h3>
                <p className="text-sm text-slate-600">Physical goods traded globally</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-amber-600 text-sm">🌍</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Global Markets</h3>
                <p className="text-sm text-slate-600">24/7 trading worldwide</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-amber-600 text-sm">📊</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Supply & Demand</h3>
                <p className="text-sm text-slate-600">Fundamental price drivers</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-amber-600 text-sm">🛡️</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Inflation Hedge</h3>
                <p className="text-sm text-slate-600">Protection against inflation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Learning Path</h2>
          <div className="space-y-4">
            {modules.map((module) => (
              <div key={module.id} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-amber-600 font-semibold text-sm">{module.id}</span>
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
                    <button className="px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded-md hover:bg-amber-700 transition">
                      Start Module
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">What You'll Learn</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Commodity Fundamentals</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Types of commodities</li>
                <li>• Market structure</li>
                <li>• Price influencing factors</li>
                <li>• Trading instruments</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Trading & Analysis</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Trading strategies</li>
                <li>• Technical analysis</li>
                <li>• Commodity-specific analysis</li>
                <li>• Risk management</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Practical Skills</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Avoiding common mistakes</li>
                <li>• Progressive learning path</li>
                <li>• Practical tools</li>
                <li>• Market insights</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}