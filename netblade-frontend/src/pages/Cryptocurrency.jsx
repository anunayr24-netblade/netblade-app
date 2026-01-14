import { Link } from 'react-router-dom';

export default function Cryptocurrency() {
  const modules = [
    {
      id: 1,
      title: "What is Cryptocurrency?",
      description: "Foundation concepts of digital currencies",
      topics: [
        "Blockchain basics",
        "Decentralization explained",
        "How crypto transactions work",
        "Digital vs traditional money"
      ]
    },
    {
      id: 2,
      title: "Types of Cryptocurrencies",
      description: "Understanding different crypto categories",
      topics: [
        "Bitcoin - The original cryptocurrency",
        "Ethereum - Smart contracts platform",
        "Altcoins and their purposes",
        "Stablecoins and price stability"
      ]
    },
    {
      id: 3,
      title: "Crypto Market Mechanics",
      description: "How the crypto ecosystem operates",
      topics: [
        "Cryptocurrency exchanges",
        "Digital wallets explained",
        "Private keys and security",
        "Gas fees and transaction costs"
      ]
    },
    {
      id: 4,
      title: "How to Buy & Store Crypto",
      description: "Practical guide to crypto ownership",
      topics: [
        "Using centralized exchanges",
        "Setting up decentralized wallets",
        "Hot wallets vs Cold wallets",
        "Best practices for storage"
      ]
    },
    {
      id: 5,
      title: "Risks in Crypto Trading",
      description: "Understanding crypto-specific risks",
      topics: [
        "Extreme price volatility",
        "Regulatory and legal risks",
        "Hacks, scams, and fraud",
        "Liquidity and market risks"
      ]
    },
    {
      id: 6,
      title: "Crypto Investment Strategies",
      description: "Different approaches to crypto investing",
      topics: [
        "Long-term holding (HODL) strategy",
        "Swing trading techniques",
        "Dollar cost averaging",
        "Portfolio diversification"
      ]
    },
    {
      id: 7,
      title: "Security Best Practices",
      description: "Protecting your crypto assets",
      topics: [
        "Hardware wallet security",
        "Two-factor authentication",
        "Avoiding common scams",
        "Safe trading habits"
      ]
    },
    {
      id: 8,
      title: "Crypto Regulations (India Focus)",
      description: "Legal and tax considerations",
      topics: [
        "Indian crypto tax rules",
        "Government regulations",
        "Legal compliance requirements",
        "Future regulatory outlook"
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
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            ← Back to Learn
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">
            Cryptocurrency Trading
          </h1>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Master the world of digital currencies and blockchain technology. Learn about Bitcoin,
            Ethereum, altcoins, and the crypto market mechanics. Understand the risks, security
            practices, and investment strategies in this emerging asset class.
          </p>
        </div>

        {/* Course Overview */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Course Overview</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">8</div>
              <div className="text-sm text-slate-600">Modules</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">Beginner</div>
              <div className="text-sm text-slate-600">Level</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">30+</div>
              <div className="text-sm text-slate-600">Topics</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">Crypto</div>
              <div className="text-sm text-slate-600">Focus</div>
            </div>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 shadow-sm mb-8 border border-orange-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Key Concepts</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-orange-600 text-sm">⛓️</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Blockchain</h3>
                <p className="text-sm text-slate-600">Distributed ledger technology</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-orange-600 text-sm">🏦</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Decentralized</h3>
                <p className="text-sm text-slate-600">No central authority</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-orange-600 text-sm">🔐</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Private Keys</h3>
                <p className="text-sm text-slate-600">Your digital ownership</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-orange-600 text-sm">📈</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Volatility</h3>
                <p className="text-sm text-slate-600">High risk, high reward</p>
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
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-semibold text-sm">{module.id}</span>
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
                    <button className="px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-orange-700 transition">
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
              <h3 className="font-semibold text-slate-900 mb-3">Crypto Fundamentals</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Blockchain technology</li>
                <li>• Different crypto types</li>
                <li>• Market mechanics</li>
                <li>• Buying and storing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Risk & Security</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Crypto-specific risks</li>
                <li>• Security best practices</li>
                <li>• Avoiding scams</li>
                <li>• Regulatory compliance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Investment Strategies</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• HODL strategy</li>
                <li>• Trading approaches</li>
                <li>• Portfolio management</li>
                <li>• Indian market focus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}