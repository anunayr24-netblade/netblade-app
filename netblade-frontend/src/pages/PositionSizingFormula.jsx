import { Link } from 'react-router-dom';

export default function PositionSizingFormula() {
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
            <span className="text-4xl">🧮</span>
            <h1 className="text-4xl font-bold text-slate-900">Position Sizing Formula</h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed">
            Master the mathematical formula that tells you exactly how many shares or contracts to buy based on your risk tolerance and stop loss.
          </p>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-teal-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">The Universal Position Sizing Formula</h2>
          <div className="bg-white rounded-xl p-8 text-center">
            <p className="text-3xl font-mono font-bold text-slate-900 mb-4">
              Position Size = Risk Amount ÷ (Entry Price - Stop Loss)
            </p>
            <p className="text-slate-600">This formula works for stocks, options, futures, and all instruments</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Example 1: Equity Intraday Trade</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Given:</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Trading Capital: ₹2,00,000</li>
                <li>• Risk per trade: 2%</li>
                <li>• Stock: TCS</li>
                <li>• Entry Price: ₹3,500</li>
                <li>• Stop Loss: ₹3,450</li>
              </ul>
            </div>
            <div className="bg-teal-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Calculation:</h3>
              <div className="space-y-2 text-slate-700 font-mono text-sm">
                <p>Step 1: Risk Amount</p>
                <p>= 2% of ₹2,00,000 = ₹4,000</p>
                <p className="mt-3">Step 2: Risk Per Share</p>
                <p>= ₹3,500 - ₹3,450 = ₹50</p>
                <p className="mt-3">Step 3: Position Size</p>
                <p>= ₹4,000 ÷ ₹50</p>
                <p className="text-xl font-bold text-teal-600">= 80 shares</p>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-slate-100 rounded-xl p-6">
            <p className="text-slate-700">
              <strong>Result:</strong> Buy 80 shares of TCS at ₹3,500. If stop loss hits at ₹3,450, you lose exactly ₹4,000 (2% of capital).
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Example 2: Options Trading (Nifty Call)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Given:</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Trading Capital: ₹1,00,000</li>
                <li>• Risk per trade: 2%</li>
                <li>• Nifty Call Option Premium: ₹150</li>
                <li>• Stop Loss Premium: ₹120</li>
                <li>• Lot Size: 50</li>
              </ul>
            </div>
            <div className="bg-teal-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Calculation:</h3>
              <div className="space-y-2 text-slate-700 font-mono text-sm">
                <p>Step 1: Risk Amount</p>
                <p>= 2% of ₹1,00,000 = ₹2,000</p>
                <p className="mt-3">Step 2: Risk Per Option</p>
                <p>= ₹150 - ₹120 = ₹30</p>
                <p className="mt-3">Step 3: Risk Per Lot</p>
                <p>= ₹30 × 50 = ₹1,500</p>
                <p className="mt-3">Step 4: Number of Lots</p>
                <p>= ₹2,000 ÷ ₹1,500</p>
                <p className="text-xl font-bold text-teal-600">= 1.33 ≈ 1 lot</p>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-slate-100 rounded-xl p-6">
            <p className="text-slate-700">
              <strong>Result:</strong> Buy 1 lot (50 options) at ₹150 premium. Total investment: ₹7,500. Max loss if SL hits: ₹1,500 (1.5% of capital).
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Example 3: Swing Trading (Multi-Day Hold)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Given:</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Trading Capital: ₹5,00,000</li>
                <li>• Risk per trade: 1.5%</li>
                <li>• Stock: Infosys</li>
                <li>• Entry Price: ₹1,400</li>
                <li>• Stop Loss: ₹1,330 (5% below)</li>
              </ul>
            </div>
            <div className="bg-teal-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Calculation:</h3>
              <div className="space-y-2 text-slate-700 font-mono text-sm">
                <p>Step 1: Risk Amount</p>
                <p>= 1.5% of ₹5,00,000 = ₹7,500</p>
                <p className="mt-3">Step 2: Risk Per Share</p>
                <p>= ₹1,400 - ₹1,330 = ₹70</p>
                <p className="mt-3">Step 3: Position Size</p>
                <p>= ₹7,500 ÷ ₹70</p>
                <p className="text-xl font-bold text-teal-600">= 107 shares</p>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-slate-100 rounded-xl p-6">
            <p className="text-slate-700">
              <strong>Result:</strong> Buy 107 shares at ₹1,400. Total investment: ₹1,49,800 (30% of capital). If SL hits, max loss: ₹7,490 (1.5% of capital).
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Intraday vs Swing Trading Applications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Intraday Trading</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>Tighter stop losses</strong> (0.5-2% from entry)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>Higher leverage</strong> possible (lower margin)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>Multiple trades</strong> per day</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span><strong>Time-based SL</strong> (exit by 3:15 PM)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-700 mb-4">Swing Trading</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Wider stop losses</strong> (3-10% from entry)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Full margin</strong> required (delivery)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Hold for days/weeks</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Support-based SL</strong> (technical levels)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Position Sizing Errors</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Using Fixed Number of Shares</h3>
              <p className="text-slate-600">"I always buy 100 shares" ignores varying stop loss distances and capital. Calculate fresh for each trade.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Not Accounting for Lot Size (Options/Futures)</h3>
              <p className="text-slate-600">Options trade in lots, not individual contracts. Adjust position size to whole lots only.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Ignoring Brokerage & Taxes</h3>
              <p className="text-slate-600">Factor in ~0.5-1% for brokerage, STT, taxes when calculating real risk.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">4. Rounding Up Aggressively</h3>
              <p className="text-slate-600">If formula says 1.3 lots, buy 1, not 2. Rounding up increases risk beyond your plan.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 shadow-lg mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Key Takeaways</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <p className="text-lg"><strong>Position Size = Risk Amount ÷ (Entry - Stop Loss)</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg">Calculate <strong>fresh for every trade</strong>—no fixed share quantities.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg">For options/futures, <strong>account for lot sizes.</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg">Intraday: tight SL, higher leverage. Swing: wide SL, full margin.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg">Never exceed your predefined risk % to "maximize gains."</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Continue Learning</h2>
          <p className="text-slate-600 mb-6">Next, learn how to properly allocate your total capital across trading, investing, and emergency funds.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/risk-management/capital-allocation" className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
              Next: Capital Allocation Strategy →
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
