import { Link } from 'react-router-dom';

export default function Derivatives() {
  const modules = [
    {
      id: 1,
      title: "Introduction to Derivatives",
      description: "Foundation concepts of derivatives trading",
      topics: [
        "What Are Derivatives?",
        "Why they exist",
        "Cash market vs derivatives",
        "Types of Derivatives (Futures, Options, Forwards, Swaps)"
      ]
    },
    {
      id: 2,
      title: "Futures Trading Basics",
      description: "Understanding futures contracts",
      topics: [
        "What Are Futures?",
        "How futures contracts work",
        "Lot size, expiry, margin",
        "Types of Futures (Index, Stock, Commodity)"
      ]
    },
    {
      id: 3,
      title: "Futures Pricing",
      description: "How futures are priced",
      topics: [
        "Spot price vs Futures price",
        "Cost of carry",
        "Contango & Backwardation"
      ]
    },
    {
      id: 4,
      title: "Futures Trading Strategies",
      description: "Practical futures trading approaches",
      topics: [
        "Long Futures",
        "Short Futures",
        "Hedging using Futures",
        "Trend following with Futures"
      ]
    },
    {
      id: 5,
      title: "Risk Management in Futures",
      description: "Managing risks in futures trading",
      topics: [
        "Margin requirements",
        "Mark-to-market (MTM)",
        "Leverage risks",
        "Stop-loss importance"
      ]
    },
    {
      id: 6,
      title: "Futures for Beginners",
      description: "Important warnings for new traders",
      topics: [
        "When NOT to trade futures",
        "Common beginner mistakes",
        "Risk vs reward reality"
      ]
    },
    {
      id: 7,
      title: "Options Trading Fundamentals",
      description: "Core concepts of options",
      topics: [
        "What Are Options?",
        "Call Option (CE) vs Put Option (PE)",
        "Option buyer vs seller"
      ]
    },
    {
      id: 8,
      title: "Option Terminologies",
      description: "Essential options vocabulary",
      topics: [
        "Strike Price",
        "Expiry",
        "Premium",
        "ITM, ATM, OTM explained"
      ]
    },
    {
      id: 9,
      title: "Option Greeks",
      description: "Understanding option sensitivities",
      topics: [
        "Delta - Price sensitivity",
        "Gamma - Delta sensitivity",
        "Theta - Time decay",
        "Vega - Volatility sensitivity"
      ]
    },
    {
      id: 10,
      title: "Basic Option Strategies",
      description: "Simple options trading strategies",
      topics: [
        "Buying Call",
        "Buying Put",
        "Covered Call",
        "Protective Put"
      ]
    },
    {
      id: 11,
      title: "Advanced Option Strategies",
      description: "Complex options combinations",
      topics: [
        "Iron Condor",
        "Iron Butterfly",
        "Straddle / Strangle"
      ]
    },
    {
      id: 12,
      title: "Option Buying vs Selling",
      description: "Risk-reward comparison",
      topics: [
        "Risk vs reward analysis",
        "Capital requirements",
        "Who should buy vs sell options"
      ]
    },
    {
      id: 13,
      title: "Option Chain Analysis",
      description: "Reading market sentiment",
      topics: [
        "Open Interest (OI)",
        "Change in OI",
        "PCR ratio",
        "Max Pain"
      ]
    },
    {
      id: 14,
      title: "Implied Volatility",
      description: "Understanding volatility in options",
      topics: [
        "What is IV?",
        "IV crush phenomenon",
        "How IV affects option prices"
      ]
    },
    {
      id: 15,
      title: "Risk Management for Options",
      description: "Managing options trading risks",
      topics: [
        "Position sizing",
        "Stop loss strategies",
        "Avoid overtrading",
        "Volatility risk management"
      ]
    },
    {
      id: 16,
      title: "Practical Examples & Case Studies",
      description: "Real-world options trading examples",
      topics: [
        "NIFTY/Bank Nifty examples",
        "Case studies",
        "What went right / wrong analysis"
      ]
    },
    {
      id: 17,
      title: "Common Mistakes in Options Trading",
      description: "Learn from others' errors",
      topics: [
        "Buying weekly options blindly",
        "Over-leverage",
        "Ignoring Greeks",
        "Emotional trading pitfalls"
      ]
    },
    {
      id: 18,
      title: "Advanced Options Topics",
      description: "Optional advanced concepts",
      topics: [
        "Options Greeks combination",
        "Volatility trading",
        "Calendar spreads",
        "Delta-neutral strategies"
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
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4"
          >
            ← Back to Learn
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">
            Derivatives Trading
          </h1>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Master the world of derivatives including futures and options trading. Learn from basic concepts
            to advanced strategies, risk management, and practical applications in the Indian markets.
            This comprehensive course covers everything you need to know about F&O trading.
          </p>
        </div>

        {/* Course Overview */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Course Overview</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">18</div>
              <div className="text-sm text-slate-600">Modules</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">Intermediate</div>
              <div className="text-sm text-slate-600">Level</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">60+</div>
              <div className="text-sm text-slate-600">Topics</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">F&O</div>
              <div className="text-sm text-slate-600">Focus</div>
            </div>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 shadow-sm mb-8 border border-purple-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Key Concepts</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-600 text-sm">📈</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Futures</h3>
                <p className="text-sm text-slate-600">Obligation to buy/sell</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-600 text-sm">🎯</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Options</h3>
                <p className="text-sm text-slate-600">Right, not obligation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-600 text-sm">⚡</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Leverage</h3>
                <p className="text-sm text-slate-600">High risk, high reward</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-600 text-sm">🛡️</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Hedging</h3>
                <p className="text-sm text-slate-600">Risk management tool</p>
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
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold text-sm">{module.id}</span>
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
                    <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition">
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
              <h3 className="font-semibold text-slate-900 mb-3">Futures Mastery</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Futures contract mechanics</li>
                <li>• Pricing and arbitrage</li>
                <li>• Trading strategies</li>
                <li>• Risk management</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Options Expertise</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Options Greeks understanding</li>
                <li>• Strategy implementation</li>
                <li>• Chain analysis</li>
                <li>• Volatility trading</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Practical Skills</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Real market examples</li>
                <li>• Risk assessment</li>
                <li>• Position management</li>
                <li>• Avoiding common mistakes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}