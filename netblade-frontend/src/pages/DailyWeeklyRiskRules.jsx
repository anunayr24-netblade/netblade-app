import { Link } from 'react-router-dom';

export default function DailyWeeklyRiskRules() {
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
            <span className="text-4xl">🚨</span>
            <h1 className="text-4xl font-bold text-slate-900">Daily & Weekly Risk Limits</h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed">
            Setting daily and weekly loss limits protects you from emotional spirals and catastrophic drawdowns. Know when to stop trading.
          </p>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Max Loss Per Day Rule</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 text-center">
              <p className="text-5xl font-bold text-red-600 mb-2">2%</p>
              <p className="text-xl text-slate-700">Maximum Loss Per Day</p>
              <p className="text-slate-600 mt-2">Once you hit this limit, stop trading for the day. No exceptions.</p>
            </div>
            <p className="text-lg text-slate-700">
              <strong>Why 2%?</strong> Because losing more than 2% in a day means you're emotionally compromised. Continuing to trade will only make things worse through revenge trading.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Implement Daily Loss Limit</h2>
          <div className="space-y-6">
            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Example: ₹2,00,000 Trading Capital</h3>
              <div className="space-y-3 text-slate-700">
                <p>• Daily Loss Limit: 2% of ₹2,00,000 = <strong>₹4,000</strong></p>
                <p>• You take 3 trades, all hit stop loss: -₹1,500, -₹1,200, -₹1,400 = <strong>-₹4,100 total</strong></p>
                <p>• <strong className="text-red-600">STOP TRADING IMMEDIATELY.</strong> Turn off your terminal. Walk away.</p>
                <p>• Tomorrow is a new day with fresh opportunities.</p>
              </div>
            </div>
            <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">What to Do When You Hit Daily Limit:</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">1.</span>
                  <span><strong>Close all positions</strong> (if any open)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">2.</span>
                  <span><strong>Log off trading platform</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">3.</span>
                  <span><strong>Journal what went wrong</strong> (not emotions, just facts)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">4.</span>
                  <span><strong>Do something else</strong> (exercise, hobby, family time)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">5.</span>
                  <span><strong>Return fresh tomorrow</strong> with clear mind</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Stop Trading After Consecutive Losses</h2>
          <div className="space-y-6">
            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">The 3-Strike Rule</h3>
              <p className="text-slate-700 mb-4">
                After <strong>3 consecutive losses</strong> in a day, stop trading—even if you haven't hit your 2% daily limit.
              </p>
              <div className="border-l-4 border-red-500 pl-4">
                <p className="text-slate-600">
                  <strong>Why?</strong> 3 losses in a row indicates you're out of sync with the market today. Your strategy isn't working in current conditions. Forcing more trades = more losses.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h3 className="font-semibold text-red-700 mb-3">❌ Without 3-Strike Rule</h3>
                <p className="text-sm text-slate-600 mb-2">Trader hits 3 losses, thinks "next one will work"...</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Loss 1: -₹1,000</li>
                  <li>• Loss 2: -₹1,000</li>
                  <li>• Loss 3: -₹1,000</li>
                  <li>• Loss 4: -₹1,500 (bigger size, panic)</li>
                  <li>• Loss 5: -₹2,000 (revenge trade)</li>
                  <li>• <strong>Total: -₹6,500 (3.25% down)</strong></li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                <h3 className="font-semibold text-green-700 mb-3">✓ With 3-Strike Rule</h3>
                <p className="text-sm text-slate-600 mb-2">Trader hits 3 losses, stops immediately...</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Loss 1: -₹1,000</li>
                  <li>• Loss 2: -₹1,000</li>
                  <li>• Loss 3: -₹1,000</li>
                  <li>• <strong>STOPS TRADING</strong></li>
                  <li>• Returns tomorrow fresh</li>
                  <li>• <strong>Total: -₹3,000 (1.5% down)</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-blue-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Weekly Drawdown Limits</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 text-center">
              <p className="text-5xl font-bold text-blue-600 mb-2">6-8%</p>
              <p className="text-xl text-slate-700">Maximum Loss Per Week</p>
              <p className="text-slate-600 mt-2">If you lose 6-8% in a week, take the rest of the week off.</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Why Weekly Limits Matter:</h3>
              <p className="text-slate-700 mb-4">
                A bad week happens. Market conditions change, your strategy stops working temporarily. Forcing trades during these periods destroys capital.
              </p>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-slate-600">
                  <strong>Action:</strong> If you hit -6% by Wednesday, stop trading. Use the rest of the week to review your trades, refine your strategy, and return next Monday fresh.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Preventing Emotional Trading</h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-700">
              Loss limits aren't just about capital—they're about <strong>protecting your psychology.</strong>
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-red-200 rounded-xl p-6 bg-red-50">
                <h3 className="text-xl font-bold text-red-700 mb-4">🔥 Emotional Trading Triggers</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span><strong>Revenge Trading:</strong> "I need to win back that loss NOW"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span><strong>Overtrading:</strong> Taking more trades to "make up" for losses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span><strong>Increased Position Size:</strong> "This one will recover everything"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span><strong>Abandoning Stop Loss:</strong> "I can't afford another loss"</span>
                  </li>
                </ul>
              </div>
              <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
                <h3 className="text-xl font-bold text-green-700 mb-4">✅ Loss Limit Benefits</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span><strong>Prevents Spirals:</strong> Can't lose more than X% per day/week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span><strong>Forces Breaks:</strong> Reset mentally and emotionally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span><strong>Objective Exit:</strong> Decision made before emotions take over</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span><strong>Preserves Capital:</strong> Live to trade another day</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Real-World Example: How Loss Limits Save Accounts</h2>
          <div className="space-y-6">
            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Trader A: No Loss Limits</h3>
              <div className="space-y-2 text-slate-700">
                <p>• Monday: -₹3,000, keeps trading, ends -₹7,000</p>
                <p>• Tuesday: Revenge trading, -₹12,000</p>
                <p>• Wednesday: Panic, abandons stop loss, -₹18,000</p>
                <p>• <strong className="text-red-600">Week total: -₹37,000 (18.5% of ₹2L capital)</strong></p>
                <p>• Emotionally devastated, quits trading</p>
              </div>
            </div>
            <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Trader B: Uses Loss Limits</h3>
              <div className="space-y-2 text-slate-700">
                <p>• Monday: -₹3,000, hits 3-strike rule, stops</p>
                <p>• Tuesday: -₹2,500, hits daily limit, stops</p>
                <p>• Wednesday: -₹1,500, totals -₹7,000 (3.5%), takes break</p>
                <p>• <strong className="text-green-600">Week total: -₹7,000 (3.5% of ₹2L capital)</strong></p>
                <p>• Returns next week calm, focused, profitable</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 shadow-lg mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Key Takeaways</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <p className="text-lg">Set <strong>max 2% daily loss limit</strong>—stop trading when hit.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg">Use <strong>3-strike rule</strong>—stop after 3 consecutive losses in a day.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg">Weekly limit: <strong>6-8% max drawdown</strong>—take rest of week off if hit.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg">Loss limits <strong>protect psychology,</strong> not just capital.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg">Prevent emotional spirals—<strong>revenge trading destroys accounts.</strong></p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Continue Learning</h2>
          <p className="text-slate-600 mb-6">Next, dive deep into the psychological aspects of risk management and how to control your emotions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/risk-management/psychological-risk" className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
              Next: Psychological Risk Management →
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
