import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function MutualFunds() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/mutual-funds' } });
    }
  }, [navigate]);
  const modules = [
    {
      id: 1,
      title: "What Are Mutual Funds?",
      description: "Foundation concepts of mutual fund investing",
      topics: [
        "Meaning & concept",
        "How mutual funds work",
        "Role of fund manager",
        "Benefits of pooled investing"
      ]
    },
    {
      id: 2,
      title: "Types of Mutual Funds",
      description: "Different categories of mutual funds",
      topics: [
        "Equity Funds (Large Cap, Mid Cap, Small Cap)",
        "Sectoral Funds",
        "Debt Funds (Liquid, Short-term, Corporate Bond)",
        "Hybrid Funds (Balanced, Aggressive Hybrid)"
      ]
    },
    {
      id: 3,
      title: "Mutual Fund Terms",
      description: "Essential terminology in mutual funds",
      topics: [
        "NAV (Net Asset Value)",
        "AUM (Assets Under Management)",
        "Expense ratio",
        "Exit load"
      ]
    },
    {
      id: 4,
      title: "SIP vs Lumpsum",
      description: "Investment methods comparison",
      topics: [
        "Benefits of SIP",
        "When to choose lump sum",
        "Power of compounding",
        "Rupee cost averaging"
      ]
    },
    {
      id: 5,
      title: "How to Choose a Mutual Fund",
      description: "Fund selection criteria",
      topics: [
        "Fund performance analysis",
        "Fund manager track record",
        "Expense ratio evaluation",
        "Risk level assessment"
      ]
    },
    {
      id: 6,
      title: "Taxation of Mutual Funds",
      description: "Tax implications of mutual fund investments",
      topics: [
        "Equity fund taxation",
        "Debt fund taxation",
        "LTCG vs STCG rules",
        "Indexation benefits"
      ]
    },
    {
      id: 7,
      title: "Mutual Fund Mistakes",
      description: "Common pitfalls to avoid",
      topics: [
        "Chasing past returns",
        "Frequent switching",
        "Over-diversification",
        "Timing the market"
      ]
    },
    {
      id: 8,
      title: "Portfolio Building with Mutual Funds",
      description: "Creating balanced portfolios",
      topics: [
        "Beginner portfolio",
        "Moderate risk portfolio",
        "Aggressive portfolio",
        "Asset allocation strategies"
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
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-4"
          >
            ← Back to Learn
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">
            Mutual Funds
          </h1>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Master the world of mutual fund investing and portfolio management. Learn about
            different types of funds, investment strategies, taxation rules, and how to build
            a diversified portfolio. Understand SIP, lumpsum investing, and fund selection criteria.
          </p>
        </div>

        {/* Course Overview */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Course Overview</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">8</div>
              <div className="text-sm text-slate-600">Modules</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">Beginner</div>
              <div className="text-sm text-slate-600">Level</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">30+</div>
              <div className="text-sm text-slate-600">Topics</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">Portfolio</div>
              <div className="text-sm text-slate-600">Focus</div>
            </div>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 shadow-sm mb-8 border border-green-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Key Concepts</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-600 text-sm">👥</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Pooled Investing</h3>
                <p className="text-sm text-slate-600">Collective investment vehicle</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-600 text-sm">📊</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Professional Management</h3>
                <p className="text-sm text-slate-600">Expert fund managers</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-600 text-sm">💰</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">SIP Power</h3>
                <p className="text-sm text-slate-600">Systematic investment plan</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-600 text-sm">📈</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Diversification</h3>
                <p className="text-sm text-slate-600">Risk reduction through variety</p>
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
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold text-sm">{module.id}</span>
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
                    <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition">
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
              <h3 className="font-semibold text-slate-900 mb-3">Fund Fundamentals</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Types of mutual funds</li>
                <li>• Key terminology</li>
                <li>• Fund mechanics</li>
                <li>• Investment options</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Investment Strategies</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• SIP vs lumpsum</li>
                <li>• Fund selection</li>
                <li>• Portfolio building</li>
                <li>• Risk assessment</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Tax & Legal</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Taxation rules</li>
                <li>• Common mistakes</li>
                <li>• Regulatory compliance</li>
                <li>• Long-term planning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}