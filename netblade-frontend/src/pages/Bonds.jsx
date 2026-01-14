import { Link } from 'react-router-dom';

export default function Bonds() {
  const modules = [
    {
      id: 1,
      title: "What Are Bonds?",
      description: "Foundation concepts of bond investing",
      topics: [
        "Meaning of bonds",
        "How bonds work",
        "Bonds vs stocks difference",
        "Bond market basics"
      ]
    },
    {
      id: 2,
      title: "Types of Bonds",
      description: "Different categories of bonds available",
      topics: [
        "Government Bonds",
        "Corporate Bonds",
        "PSU Bonds",
        "Municipal Bonds",
        "Zero Coupon Bonds",
        "Tax-Free Bonds"
      ]
    },
    {
      id: 3,
      title: "Key Bond Concepts",
      description: "Essential terminology in bond investing",
      topics: [
        "Face value explained",
        "Coupon rate",
        "Maturity date",
        "Yield calculations",
        "Yield to Maturity (YTM)"
      ]
    },
    {
      id: 4,
      title: "Bond Pricing & Interest Rates",
      description: "How bonds are priced and valued",
      topics: [
        "Interest rates and bond prices",
        "Inflation impact",
        "Duration concept",
        "Convexity basics"
      ]
    },
    {
      id: 5,
      title: "Risks in Bonds",
      description: "Understanding bond investment risks",
      topics: [
        "Interest rate risk",
        "Credit risk",
        "Inflation risk",
        "Liquidity risk"
      ]
    },
    {
      id: 6,
      title: "Bond Investment Strategies",
      description: "Different approaches to bond investing",
      topics: [
        "Buy & hold strategy",
        "Laddering strategy",
        "Duration matching",
        "Income-focused investing"
      ]
    },
    {
      id: 7,
      title: "Bonds vs Fixed Deposits",
      description: "Comparing bonds with traditional savings",
      topics: [
        "Returns comparison",
        "Safety analysis",
        "Liquidity differences",
        "Taxation aspects"
      ]
    },
    {
      id: 8,
      title: "Who Should Invest in Bonds?",
      description: "Bond investing for different investor types",
      topics: [
        "Conservative investors",
        "Retirees",
        "Portfolio diversification",
        "Risk management"
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
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            ← Back to Learn
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">
            Bonds & Fixed Income
          </h1>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Master the fundamentals of bond investing and fixed income securities. Learn about
            different types of bonds, pricing mechanisms, risk factors, and investment strategies.
            Understand how bonds fit into a diversified investment portfolio.
          </p>
        </div>

        {/* Course Overview */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Course Overview</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">8</div>
              <div className="text-sm text-slate-600">Modules</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Beginner</div>
              <div className="text-sm text-slate-600">Level</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">30+</div>
              <div className="text-sm text-slate-600">Topics</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Fixed Income</div>
              <div className="text-sm text-slate-600">Focus</div>
            </div>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 shadow-sm mb-8 border border-blue-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Key Concepts</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-sm">📈</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Fixed Income</h3>
                <p className="text-sm text-slate-600">Regular interest payments</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-sm">🏛️</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Government Backed</h3>
                <p className="text-sm text-slate-600">Highest safety rating</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-sm">📊</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Yield to Maturity</h3>
                <p className="text-sm text-slate-600">Total return calculation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-sm">🛡️</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Portfolio Diversifier</h3>
                <p className="text-sm text-slate-600">Risk reduction tool</p>
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
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">{module.id}</span>
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
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition">
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
              <h3 className="font-semibold text-slate-900 mb-3">Bond Fundamentals</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Types of bonds</li>
                <li>• Key terminology</li>
                <li>• Pricing mechanics</li>
                <li>• Interest rate relationships</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Risk & Strategy</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Bond-specific risks</li>
                <li>• Investment strategies</li>
                <li>• Portfolio construction</li>
                <li>• Risk management</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Practical Applications</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Bonds vs fixed deposits</li>
                <li>• Investor suitability</li>
                <li>• Diversification benefits</li>
                <li>• Income generation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}