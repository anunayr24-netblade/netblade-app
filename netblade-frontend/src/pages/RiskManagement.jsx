import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function RiskManagement() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/risk-management' } });
    }
  }, [navigate]);
  const modules = [
    {
      id: 1,
      title: "What is Risk Management?",
      description: "Foundation concepts of risk management",
      link: "/risk-management/what-is-risk-management",
      topics: [
        "Why traders lose money",
        "Why profit is secondary to survival",
        "Difference between trading & gambling",
        "Protect capital first, discipline over strategy"
      ]
    },
    {
      id: 2,
      title: "Position Sizing",
      description: "Most important topic in trading",
      link: "/risk-management/position-sizing",
      topics: [
        "What % of capital to risk per trade",
        "Fixed risk vs variable risk",
        "Example calculations",
        "Risk calculator (future feature)"
      ]
    },
    {
      id: 3,
      title: "Stop Loss – The Lifeline",
      description: "Essential risk control mechanism",
      link: "/risk-management/stop-loss",
      topics: [
        "What is stop loss",
        "Types of stop loss",
        "Chart examples",
        "Common mistakes and psychological issues"
      ]
    },
    {
      id: 4,
      title: "Risk–Reward Ratio",
      description: "Understanding profitable trading ratios",
      link: "/risk-management/risk-reward-ratio",
      topics: [
        "Why 1:1 is risky",
        "Ideal RR (1:2 or 1:3)",
        "How win rate + RR decide profitability",
        "Expected Value formula"
      ]
    },
    {
      id: 5,
      title: "Position Sizing Formula",
      description: "Practical calculations for position sizing",
      link: "/risk-management/position-sizing-formula",
      topics: [
        "Position Size = Risk per trade / (Entry – Stop Loss)",
        "Examples for equity trading",
        "Examples for options trading",
        "Intraday vs swing trading applications"
      ]
    },
    {
      id: 6,
      title: "Capital Allocation Strategy",
      description: "How to divide and manage your capital",
      link: "/risk-management/capital-allocation",
      topics: [
        "Trading capital vs emergency fund",
        "Long-term investment allocation",
        "Never use full capital in one trade",
        "Avoid averaging losses blindly"
      ]
    },
    {
      id: 7,
      title: "Risk Per Day / Week Rules",
      description: "Setting daily and weekly risk limits",
      link: "/risk-management/daily-weekly-risk-rules",
      topics: [
        "Max 2% loss per day",
        "Stop trading after consecutive losses",
        "Weekly drawdown limits",
        "Preventing emotional trading"
      ]
    },
    {
      id: 8,
      title: "Psychological Risk Management",
      description: "Mental aspects of risk control",
      link: "/risk-management/psychological-risk",
      topics: [
        "Overtrading prevention",
        "Revenge trading avoidance",
        "FOMO management",
        "Overconfidence after profits",
        "Real-world examples"
      ]
    },
    {
      id: 9,
      title: "Common Risk Management Mistakes",
      description: "Learn from others' errors",
      link: "/risk-management/common-mistakes",
      topics: [
        "Trading without stop-loss",
        "Over-leveraging positions",
        "Trading news without plan",
        "Increasing lot size after loss"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/learn"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-4"
          >
            ← Back to Learn
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">
            Risk Management
          </h1>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Master the art of capital preservation and risk control. Learn essential risk management principles
            that will help you survive and thrive in the markets. This comprehensive course covers everything
            from position sizing to psychological risk management.
          </p>
        </div>

        {/* Course Overview */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Course Overview</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">10</div>
              <div className="text-sm text-slate-600">Modules</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">Essential</div>
              <div className="text-sm text-slate-600">Level</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">40+</div>
              <div className="text-sm text-slate-600">Topics</div>
            </div>
          </div>
        </div>

        {/* Key Principles */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 shadow-sm mb-8 border border-red-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Key Principles</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-600 text-sm">💰</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Capital Preservation</h3>
                <p className="text-sm text-slate-600">Protect your trading capital above all else</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-600 text-sm">🎯</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Risk First</h3>
                <p className="text-sm text-slate-600">Define risk before seeking reward</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-600 text-sm">🛡️</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Survival Over Profit</h3>
                <p className="text-sm text-slate-600">Live to trade another day</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-600 text-sm">📊</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Quantifiable Risk</h3>
                <p className="text-sm text-slate-600">Always know your maximum loss</p>
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
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-semibold text-sm">{module.id}</span>
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
                    <Link
                      to={module.link}
                      className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition"
                    >
                      Start Module
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">What You'll Learn</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Risk Control Skills</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Position sizing calculations</li>
                <li>• Stop loss placement strategies</li>
                <li>• Risk-reward ratio optimization</li>
                <li>• Capital allocation methods</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Psychological Skills</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Emotional discipline</li>
                <li>• Avoiding revenge trading</li>
                <li>• Managing FOMO and overconfidence</li>
                <li>• Long-term trading mindset</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}