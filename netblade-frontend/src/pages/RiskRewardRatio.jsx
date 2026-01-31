import { Link } from 'react-router-dom';

export default function RiskRewardRatio() {
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
            <span className="text-4xl">⚖️</span>
            <h1 className="text-4xl font-bold text-slate-900">Risk-Reward Ratio</h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed">
            Risk-reward ratio determines whether your trading strategy is profitable long-term. It's the relationship between how much you risk vs how much you can potentially gain.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Understanding Risk-Reward Ratio</h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-700">
              Risk-Reward Ratio (RR) = Potential Profit ÷ Potential Loss
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h3 className="text-xl font-bold text-red-700 text-center mb-3">1:1 RR</h3>
                <p className="text-slate-600 text-center text-sm mb-4">Risk ₹100 to make ₹100</p>
                <p className="text-red-600 text-center font-semibold">⚠️ Risky - Need 50%+ win rate</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-300">
                <h3 className="text-xl font-bold text-yellow-700 text-center mb-3">1:2 RR</h3>
                <p className="text-slate-600 text-center text-sm mb-4">Risk ₹100 to make ₹200</p>
                <p className="text-green-600 text-center font-semibold">✓ Good - Need 33%+ win rate</p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-300">
                <h3 className="text-xl font-bold text-green-700 text-center mb-3">1:3 RR</h3>
                <p className="text-slate-600 text-center text-sm mb-4">Risk ₹100 to make ₹300</p>
                <p className="text-green-600 text-center font-semibold">✓ Excellent - Need 25%+ win rate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-blue-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Why 1:1 is Dangerous</h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-700">
              With 1:1 risk-reward, you're essentially flipping a coin. You need to win <strong>more than 50%</strong> of trades just to break even (after accounting for brokerage and slippage).
            </p>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Real Example:</h3>
              <div className="space-y-3 text-slate-700">
                <p>10 trades at 1:1 RR, 50% win rate:</p>
                <ul className="space-y-2 ml-6">
                  <li>• 5 wins × ₹1,000 = ₹5,000 profit</li>
                  <li>• 5 losses × ₹1,000 = ₹5,000 loss</li>
                  <li>• Net: ₹0 (Before brokerage!)</li>
                  <li>• After brokerage: <strong className="text-red-600">Negative returns</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Ideal Risk-Reward: 1:2 or 1:3</h2>
          <div className="space-y-6">
            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">1:2 RR Example (Recommended)</h3>
              <div className="space-y-3">
                <p className="text-slate-700">10 trades, 40% win rate (below average!)</p>
                <ul className="space-y-2 ml-6 text-slate-600">
                  <li>• 4 wins × ₹2,000 = ₹8,000 profit</li>
                  <li>• 6 losses × ₹1,000 = ₹6,000 loss</li>
                  <li>• <strong className="text-green-600">Net: +₹2,000 profit</strong></li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">1:3 RR Example (Excellent)</h3>
              <div className="space-y-3">
                <p className="text-slate-700">10 trades, 30% win rate (poor win rate!)</p>
                <ul className="space-y-2 ml-6 text-slate-600">
                  <li>• 3 wins × ₹3,000 = ₹9,000 profit</li>
                  <li>• 7 losses × ₹1,000 = ₹7,000 loss</li>
                  <li>• <strong className="text-green-600">Net: +₹2,000 profit</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Win Rate + RR = Profitability</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-3 text-left">Win Rate</th>
                  <th className="p-3 text-center">1:1 RR</th>
                  <th className="p-3 text-center">1:2 RR</th>
                  <th className="p-3 text-center">1:3 RR</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">30%</td>
                  <td className="p-3 text-center text-red-600">❌ Loss</td>
                  <td className="p-3 text-center text-red-600">❌ Loss</td>
                  <td className="p-3 text-center text-green-600">✓ Profit</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3">40%</td>
                  <td className="p-3 text-center text-red-600">❌ Loss</td>
                  <td className="p-3 text-center text-green-600">✓ Profit</td>
                  <td className="p-3 text-center text-green-600">✓ Profit</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">50%</td>
                  <td className="p-3 text-center text-yellow-600">⚠️ Breakeven</td>
                  <td className="p-3 text-center text-green-600">✓ Profit</td>
                  <td className="p-3 text-center text-green-600">✓ Profit</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3">60%</td>
                  <td className="p-3 text-center text-green-600">✓ Profit</td>
                  <td className="p-3 text-center text-green-600">✓ Profit</td>
                  <td className="p-3 text-center text-green-600">✓ Profit</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-slate-600 text-center">
            <strong>Key Insight:</strong> Better RR = Lower win rate needed to profit
          </p>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-teal-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Expected Value Formula</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <p className="text-lg font-mono text-center mb-4">
                EV = (Win Rate × Avg Win) - (Loss Rate × Avg Loss)
              </p>
              <p className="text-slate-600 text-center">If EV &gt; 0, your strategy is profitable long-term</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Example Calculation:</h3>
              <div className="space-y-3 text-slate-700">
                <p>Strategy: 40% win rate, 1:2 RR, Risk ₹1,000 per trade</p>
                <ul className="space-y-2 ml-6">
                  <li>• Win Rate = 40% (0.4)</li>
                  <li>• Loss Rate = 60% (0.6)</li>
                  <li>• Avg Win = ₹2,000</li>
                  <li>• Avg Loss = ₹1,000</li>
                </ul>
                <p className="font-mono bg-slate-100 p-4 rounded">
                  EV = (0.4 × 2000) - (0.6 × 1000)<br />
                  EV = 800 - 600<br />
                  <strong>EV = +₹200 per trade</strong>
                </p>
                <p className="text-green-600 font-semibold">✓ Profitable strategy!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 shadow-lg mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Key Takeaways</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <p className="text-lg">Risk-reward ratio determines <strong>long-term profitability.</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg">1:1 RR is dangerous—<strong>need 50%+ win rate to break even.</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg">Aim for <strong>1:2 or 1:3 RR</strong>—allows for lower win rates.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg">Better RR = <strong>Lower win rate needed to profit.</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg">Use Expected Value formula to <strong>validate your strategy.</strong></p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Continue Learning</h2>
          <p className="text-slate-600 mb-6">
            Next, learn the practical formula for calculating position size based on your risk and stop loss.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/risk-management/position-sizing-formula" className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
              Next: Position Sizing Formula →
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
