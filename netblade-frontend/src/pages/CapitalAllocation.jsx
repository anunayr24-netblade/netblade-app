import { Link } from 'react-router-dom';

export default function CapitalAllocation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link to="/risk-management" className="inline-flex items-center text-red-600 hover:text-red-700 mb-4">
            ← Back to Risk Management
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">💰</span>
            <h1 className="text-4xl font-bold text-slate-900">Capital Allocation Strategy</h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed">
            How you divide your total money determines your survival and growth. Never put all your eggs in one basket—or one market.
          </p>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-teal-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The 3-Bucket System</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6">
              <div className="text-center mb-4">
                <span className="text-4xl">🏦</span>
              </div>
              <h3 className="text-xl font-bold text-teal-700 text-center mb-3">Emergency Fund</h3>
              <p className="text-center text-2xl font-bold text-slate-900 mb-3">30-40%</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• 6-12 months expenses</li>
                <li>• Liquid savings account</li>
                <li>• Never touch for trading</li>
                <li>• Life safety net</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-center mb-4">
                <span className="text-4xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 text-center mb-3">Long-Term Investment</h3>
              <p className="text-center text-2xl font-bold text-slate-900 mb-3">40-50%</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Index funds, ETFs</li>
                <li>• Blue-chip stocks</li>
                <li>• SIP investments</li>
                <li>• 10+ year horizon</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-center mb-4">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-red-700 text-center mb-3">Active Trading</h3>
              <p className="text-center text-2xl font-bold text-slate-900 mb-3">10-30%</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Intraday & swing trades</li>
                <li>• High-risk capital</li>
                <li>• Can afford to lose</li>
                <li>• Skill-building money</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Example: ₹10 Lakh Total Savings</h2>
          <div className="space-y-6">
            <div className="bg-slate-100 rounded-xl p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-sm text-slate-600 mb-2">Emergency Fund</p>
                  <p className="text-3xl font-bold text-teal-600">₹3L</p>
                  <p className="text-xs text-slate-500 mt-1">30% - FD/Savings</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-slate-600 mb-2">Long-Term Investment</p>
                  <p className="text-3xl font-bold text-blue-600">₹5L</p>
                  <p className="text-xs text-slate-500 mt-1">50% - Index Funds</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-slate-600 mb-2">Active Trading</p>
                  <p className="text-3xl font-bold text-red-600">₹2L</p>
                  <p className="text-xs text-slate-500 mt-1">20% - Trading Capital</p>
                </div>
              </div>
            </div>
            <p className="text-slate-600 text-center">
              Only the ₹2L trading capital is used for active trading. Risk 2% per trade = ₹4,000 max risk.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Trading Capital: Never Use Full Capital in One Trade</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">❌ Wrong Approach</h3>
              <p className="text-slate-600">
                Trader has ₹2L trading capital. Finds "sure thing" stock. Uses entire ₹2L on one trade. Stock gaps down 10% overnight. Account down to ₹1.8L. Panic, depression, revenge trading follows.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">✓ Right Approach</h3>
              <p className="text-slate-600">
                Trader has ₹2L capital. Risks only 2% (₹4,000) per trade. Can deploy max 30-40% capital in open positions at once. Even if 5 trades fail, only down ₹20K (10%). Stays calm, keeps trading.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Avoid Averaging Losses Blindly</h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-700">
              <strong>"Averaging down"</strong> = Buying more of a losing stock to lower average cost. Dangerous without a plan.
            </p>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">The Death Trap:</h3>
              <div className="space-y-3 text-slate-700">
                <p>• Buy 100 shares @ ₹1,000 = ₹1,00,000 invested</p>
                <p>• Stock drops to ₹900 → "Good opportunity!" → Buy 100 more = ₹90,000 invested</p>
                <p>• Stock drops to ₹800 → "Even better deal!" → Buy 100 more = ₹80,000 invested</p>
                <p>• <strong className="text-red-600">Total invested: ₹2,70,000. Current value: ₹2,40,000. Loss: ₹30,000.</strong></p>
                <p>• You're now stuck in a massive losing position, bleeding capital.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 mt-4">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">When Averaging Down Works:</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Planned <strong>before entry</strong> as part of strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Pre-allocated capital for each level</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Clear stop loss for entire position</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Strong fundamental conviction (long-term investment, not speculation)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Maximum Open Positions Rule</h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-700">
              Don't deploy all trading capital at once. Maintain liquidity for new opportunities.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Intraday Trading</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Max 3-5 open positions</li>
                  <li>• Max 30-40% capital deployed</li>
                  <li>• Keep 60% liquid for opportunities</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Swing Trading</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Max 5-8 open positions</li>
                  <li>• Max 50-60% capital deployed</li>
                  <li>• Diversify across sectors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 shadow-lg mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Key Takeaways</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <p className="text-lg">Use <strong>3-bucket system:</strong> Emergency Fund, Long-Term Investment, Active Trading.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg">Only <strong>10-30% of total wealth</strong> should be trading capital.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg"><strong>Never use full capital</strong> on one trade—max 30-50% deployed at once.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg">Avoid averaging down losses <strong>unless pre-planned.</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg">Maintain liquidity for <strong>new opportunities.</strong></p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Continue Learning</h2>
          <p className="text-slate-600 mb-6">Next, learn how to set daily and weekly risk limits to prevent catastrophic drawdowns.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/risk-management/daily-weekly-risk-rules" className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
              Next: Daily/Weekly Risk Rules →
            </Link>
            <Link to="/risk-management" className="px-8 py-3 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition">
              Back to Course Overview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
