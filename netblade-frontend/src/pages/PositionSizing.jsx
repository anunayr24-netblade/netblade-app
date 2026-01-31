import { Link } from 'react-router-dom';

export default function PositionSizing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/risk-management"
            className="inline-flex items-center text-red-600 hover:text-red-700 mb-4"
          >
            ← Back to Risk Management
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">⚖️</span>
            <h1 className="text-4xl font-bold text-slate-900">
              Position Sizing
            </h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed">
            Position sizing is the <strong>most important skill</strong> in trading. It determines how much capital you risk on each trade and is the difference between steady growth and catastrophic loss.
          </p>
        </div>

        {/* Why Position Sizing is Critical */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Why Position Sizing Matters More Than Your Strategy
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-slate-700">
              You can have the best trading strategy in the world, but if you risk too much on a single trade, <strong>you will blow up your account.</strong>
            </p>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Real Example:</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="text-slate-700 mb-2">
                    <strong className="text-red-600">Bad Position Sizing:</strong>
                  </p>
                  <p className="text-slate-600">
                    Trader A has a 60% win rate (very good!), but risks 20% per trade. 
                    After 3 consecutive losses (which will happen), account is down 51%. 
                    Now needs 104% gain to recover. <strong>Most traders quit here.</strong>
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-slate-700 mb-2">
                    <strong className="text-green-600">Good Position Sizing:</strong>
                  </p>
                  <p className="text-slate-600">
                    Trader B has only a 50% win rate (mediocre), but risks 2% per trade. 
                    After 10 consecutive losses (unlikely but possible), account is down 18%. 
                    Needs only 22% gain to recover. <strong>Stays in the game and profits long-term.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What % to Risk Per Trade */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            What % of Capital Should You Risk Per Trade?
          </h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <div className="text-center mb-4">
                  <span className="text-4xl">❌</span>
                </div>
                <h3 className="text-xl font-bold text-red-700 text-center mb-3">
                  5-10% or More
                </h3>
                <p className="text-slate-600 text-center text-sm">
                  <strong>Extremely Risky</strong><br />
                  Gambling, not trading. Can blow up account in days.
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-300">
                <div className="text-center mb-4">
                  <span className="text-4xl">⚠️</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-700 text-center mb-3">
                  3-5%
                </h3>
                <p className="text-slate-600 text-center text-sm">
                  <strong>Aggressive</strong><br />
                  For experienced traders with proven edge. Still risky.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-300">
                <div className="text-center mb-4">
                  <span className="text-4xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-green-700 text-center mb-3">
                  1-2%
                </h3>
                <p className="text-slate-600 text-center text-sm">
                  <strong>Recommended</strong><br />
                  Industry standard. Protects capital, allows for losses, ensures survival.
                </p>
              </div>
            </div>

            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Why 1-2% is the Sweet Spot:
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>• <strong>Psychological comfort:</strong> Losing 2% doesn't hurt. Losing 10% creates panic.</li>
                <li>• <strong>Survivability:</strong> Can withstand 20+ consecutive losses without catastrophic damage.</li>
                <li>• <strong>Consistency:</strong> Removes temptation to "go big" on "sure thing" trades.</li>
                <li>• <strong>Long-term compounding:</strong> Small, consistent gains compound better than wild swings.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fixed Risk vs Variable Risk */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Fixed Risk vs Variable Risk
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-teal-200 rounded-xl p-6 bg-teal-50">
              <h3 className="text-xl font-bold text-teal-700 mb-4 flex items-center gap-2">
                <span>🔒</span> Fixed Risk (Recommended)
              </h3>
              <p className="text-slate-700 mb-4">
                Risk the <strong>same % of capital</strong> on every trade, regardless of confidence level.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm text-slate-600 mb-2"><strong>Example:</strong></p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Account: ₹1,00,000</li>
                  <li>• Risk per trade: 2%</li>
                  <li>• Amount at risk: ₹2,000</li>
                </ul>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Eliminates emotional bias</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Forces discipline</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Easy to calculate</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-slate-600">Consistent results over time</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-slate-300 rounded-xl p-6 bg-slate-50">
              <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                <span>🔄</span> Variable Risk
              </h3>
              <p className="text-slate-700 mb-4">
                Risk <strong>more on "high confidence"</strong> trades, less on "low confidence" trades.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm text-slate-600 mb-2"><strong>Example:</strong></p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• High confidence trade: 3%</li>
                  <li>• Medium confidence: 2%</li>
                  <li>• Low confidence: 1%</li>
                </ul>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-slate-600">Introduces emotional bias</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-slate-600">"Sure things" often fail</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-slate-600">Harder to maintain discipline</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">⚠</span>
                  <span className="text-slate-600">Only for very experienced traders</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 bg-teal-50 rounded-xl border-2 border-teal-200">
            <p className="text-slate-700">
              <strong>Our Recommendation:</strong> Start with fixed risk (2%). Once you have 200+ trades logged and proven profitability, you can experiment with variable risk—but most professional traders stick with fixed risk for consistency.
            </p>
          </div>
        </div>

        {/* Example Calculations */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-blue-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Position Sizing: Step-by-Step Examples
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Example 1: Intraday Equity Trade
              </h3>
              <div className="space-y-3 text-slate-700">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-600 mb-2"><strong>Given:</strong></p>
                    <ul className="text-sm space-y-1">
                      <li>• Capital: ₹1,00,000</li>
                      <li>• Risk per trade: 2%</li>
                      <li>• Stock: Reliance @ ₹2,500</li>
                      <li>• Entry: ₹2,500</li>
                      <li>• Stop Loss: ₹2,450</li>
                      <li>• Risk per share: ₹50</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-2"><strong>Calculation:</strong></p>
                    <ul className="text-sm space-y-1 bg-slate-50 p-4 rounded">
                      <li>• Max risk: 2% of ₹1,00,000 = ₹2,000</li>
                      <li>• Risk per share = ₹50</li>
                      <li>• <strong>Position Size = ₹2,000 ÷ ₹50 = 40 shares</strong></li>
                      <li>• Total investment: 40 × ₹2,500 = ₹1,00,000</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Example 2: Options Trade (Call Option)
              </h3>
              <div className="space-y-3 text-slate-700">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-600 mb-2"><strong>Given:</strong></p>
                    <ul className="text-sm space-y-1">
                      <li>• Capital: ₹1,00,000</li>
                      <li>• Risk per trade: 2%</li>
                      <li>• Nifty Call Option premium: ₹100</li>
                      <li>• Stop Loss: Exit if premium hits ₹80</li>
                      <li>• Risk per lot: ₹20 per option × 50 (lot size) = ₹1,000</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-2"><strong>Calculation:</strong></p>
                    <ul className="text-sm space-y-1 bg-slate-50 p-4 rounded">
                      <li>• Max risk: 2% of ₹1,00,000 = ₹2,000</li>
                      <li>• Risk per lot = ₹1,000</li>
                      <li>• <strong>Position Size = ₹2,000 ÷ ₹1,000 = 2 lots</strong></li>
                      <li>• Total premium paid: 2 lots × ₹5,000 = ₹10,000</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Example 3: Swing Trade (Multi-Day Hold)
              </h3>
              <div className="space-y-3 text-slate-700">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-600 mb-2"><strong>Given:</strong></p>
                    <ul className="text-sm space-y-1">
                      <li>• Capital: ₹5,00,000</li>
                      <li>• Risk per trade: 1.5%</li>
                      <li>• Stock: HDFC Bank @ ₹1,600</li>
                      <li>• Entry: ₹1,600</li>
                      <li>• Stop Loss: ₹1,520 (5% below entry)</li>
                      <li>• Risk per share: ₹80</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-2"><strong>Calculation:</strong></p>
                    <ul className="text-sm space-y-1 bg-slate-50 p-4 rounded">
                      <li>• Max risk: 1.5% of ₹5,00,000 = ₹7,500</li>
                      <li>• Risk per share = ₹80</li>
                      <li>• <strong>Position Size = ₹7,500 ÷ ₹80 = 93 shares</strong></li>
                      <li>• Total investment: 93 × ₹1,600 = ₹1,48,800</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Common Position Sizing Mistakes
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                1. "I'm confident, so I'll risk more"
              </h3>
              <p className="text-slate-600">
                Overconfidence kills accounts. Even "sure thing" trades fail. Stick to your predefined risk %.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                2. Risking fixed rupee amount instead of %
              </h3>
              <p className="text-slate-600">
                Always risk % of current capital, not a fixed amount. As account grows, risk grows proportionally.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                3. Averaging down without plan
              </h3>
              <p className="text-slate-600">
                Adding to a losing position without proper risk calculation multiplies losses. Only average down if it's part of your original plan.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                4. Ignoring correlation
              </h3>
              <p className="text-slate-600">
                Taking 5 trades in 5 different bank stocks = one big bet on banking sector. Diversify across sectors to manage real risk.
              </p>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 shadow-lg mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Key Takeaways</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <p className="text-lg">Position sizing is <strong>more important than your trading strategy.</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg">Risk <strong>1-2% of capital per trade</strong>—no exceptions.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg">Use <strong>fixed risk</strong> to eliminate emotional bias.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg">Calculate position size based on <strong>entry, stop loss, and risk %.</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg">Never increase risk because you're "confident"—<strong>that's gambling.</strong></p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Next Module: Stop Loss
          </h2>
          <p className="text-slate-600 mb-6">
            Position sizing determines how much you risk. Stop loss determines where you exit. Learn how to use stop losses effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/risk-management/stop-loss"
              className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
            >
              Next: Stop Loss →
            </Link>
            <Link
              to="/risk-management"
              className="px-8 py-3 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition"
            >
              Back to Course Overview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
