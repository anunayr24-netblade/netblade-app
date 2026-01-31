import { Link } from 'react-router-dom';

export default function StopLoss() {
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
            <span className="text-4xl">🛟</span>
            <h1 className="text-4xl font-bold text-slate-900">
              Stop Loss – The Lifeline
            </h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed">
            A stop loss is your <strong>insurance policy</strong> in trading. It's a predefined exit point that limits your loss if the trade moves against you. Without it, you're gambling.
          </p>
        </div>

        {/* What is Stop Loss */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            What is a Stop Loss?
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-700">
              A stop loss is a <strong>predefined price level</strong> where you exit a losing trade to prevent further losses. It's set at the time of entry and protects you from catastrophic drawdowns.
            </p>

            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Simple Example:</h3>
              <div className="space-y-3 text-slate-700">
                <p>• You buy a stock at <strong>₹1,000</strong></p>
                <p>• You set your stop loss at <strong>₹950</strong> (5% below entry)</p>
                <p>• If the stock falls to ₹950, you <strong>automatically exit</strong></p>
                <p>• Maximum loss: <strong>₹50 per share</strong> (no surprises, no panic)</p>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <p className="text-slate-700">
                <strong>The Golden Rule:</strong> Your stop loss is non-negotiable. Once set, it's carved in stone. No "let me give it one more candle" nonsense. The market doesn't care about your hopes.
              </p>
            </div>
          </div>
        </div>

        {/* Types of Stop Loss */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Types of Stop Loss Strategies
          </h2>
          <div className="space-y-6">
            <div className="border-2 border-teal-200 rounded-xl p-6 bg-teal-50">
              <h3 className="text-xl font-bold text-teal-700 mb-4 flex items-center gap-2">
                <span>📊</span> 1. Percentage-Based Stop Loss
              </h3>
              <p className="text-slate-700 mb-4">
                Set stop loss at a fixed percentage below entry (e.g., 3%, 5%, 10%).
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-slate-600 mb-2"><strong>Example:</strong></p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Entry: ₹1,000</li>
                  <li>• Stop Loss: 5% = ₹950</li>
                  <li>• Works well for intraday and swing trades</li>
                </ul>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span className="text-slate-600">Easy to calculate</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span className="text-slate-600">Consistent across all trades</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span className="text-slate-600">Ignores market structure/support levels</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-blue-200 rounded-xl p-6 bg-blue-50">
              <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                <span>📈</span> 2. Support/Resistance-Based Stop Loss
              </h3>
              <p className="text-slate-700 mb-4">
                Place stop loss just below key support (long) or above resistance (short).
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-slate-600 mb-2"><strong>Example:</strong></p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Stock trading at ₹1,020</li>
                  <li>• Strong support at ₹1,000</li>
                  <li>• Stop Loss: ₹995 (just below support)</li>
                  <li>• If support breaks, trend invalidated</li>
                </ul>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span className="text-slate-600">Respects market structure</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span className="text-slate-600">Gives trade room to breathe</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span className="text-slate-600">Requires chart reading skills</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-purple-200 rounded-xl p-6 bg-purple-50">
              <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                <span>🎯</span> 3. ATR (Average True Range) Stop Loss
              </h3>
              <p className="text-slate-700 mb-4">
                Use ATR indicator to set stop loss based on stock's volatility.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-slate-600 mb-2"><strong>Example:</strong></p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Stock trading at ₹1,000</li>
                  <li>• ATR (14) = ₹30</li>
                  <li>• Stop Loss: Entry - (2 × ATR) = ₹1,000 - ₹60 = ₹940</li>
                </ul>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span className="text-slate-600">Adapts to volatility</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span className="text-slate-600">Prevents premature stop-outs</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span className="text-slate-600">Requires indicator knowledge</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
              <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                <span>⏱️</span> 4. Time-Based Stop Loss
              </h3>
              <p className="text-slate-700 mb-4">
                Exit trade after a certain time period, regardless of profit/loss.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-slate-600 mb-2"><strong>Example:</strong></p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Intraday: Exit all positions by 3:15 PM</li>
                  <li>• Swing: Exit if no movement in 5 days</li>
                  <li>• Prevents capital being tied up in dead trades</li>
                </ul>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-slate-600">Frees up capital</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-slate-600">Reduces overnight risk (intraday)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span className="text-slate-600">May exit winning trades early</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-orange-200 rounded-xl p-6 bg-orange-50">
              <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
                <span>📉</span> 5. Trailing Stop Loss
              </h3>
              <p className="text-slate-700 mb-4">
                Stop loss that moves up as price moves up, locking in profits.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-slate-600 mb-2"><strong>Example:</strong></p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Buy at ₹1,000, Stop Loss at ₹950</li>
                  <li>• Price moves to ₹1,100 → Trailing SL moves to ₹1,050</li>
                  <li>• Price moves to ₹1,200 → Trailing SL moves to ₹1,150</li>
                  <li>• If price reverses, you exit with profit locked in</li>
                </ul>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-orange-600">✓</span>
                  <span className="text-slate-600">Protects profits automatically</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-600">✓</span>
                  <span className="text-slate-600">Lets winners run</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span className="text-slate-600">Can get stopped out on normal pullbacks</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Examples */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-blue-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Visual Chart Examples
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Scenario 1: Support-Based Stop Loss (Long)
              </h3>
              <div className="bg-slate-100 p-6 rounded-lg font-mono text-sm">
                <pre className="text-slate-700">
{`Price Chart (Uptrend):
                    
    ₹1,100 |           ● (Current Price)
           |          /
    ₹1,050 |         /
           |        /
    ₹1,000 |-------●------------- (Support Level)
           |      /
    ₹950   |     /
           |    /
    ₹900   |===========================
           
    ✓ Entry: ₹1,050
    ✓ Stop Loss: ₹990 (just below support at ₹1,000)
    
    Logic: If support breaks, uptrend invalidated.`}
                </pre>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Scenario 2: Percentage Stop Loss (Short-Term Trade)
              </h3>
              <div className="bg-slate-100 p-6 rounded-lg font-mono text-sm">
                <pre className="text-slate-700">
{`Price Movement:
                    
    ₹1,050 |
           |           ● (Peak)
    ₹1,000 |========●========== (Entry Price)
           |         \\
    ₹950   |----------●-------- (5% Stop Loss)
           |           \\
    ₹900   |            ● (Would hit SL here)
           
    ✓ Entry: ₹1,000
    ✓ Stop Loss: ₹950 (5% below entry)
    ✓ Max Loss: ₹50 per share`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Common Stop Loss Mistakes (And How to Avoid Them)
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                1. Moving Stop Loss Further Away When Losing
              </h3>
              <p className="text-slate-600 mb-3">
                <strong>The Trap:</strong> "Let me give it more room, it will come back."
              </p>
              <p className="text-slate-700">
                <strong>Reality:</strong> This is how small losses become catastrophic. Your stop loss is there for a reason—price action invalidated your thesis. Accept the loss and move on.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                2. Not Using Stop Loss At All
              </h3>
              <p className="text-slate-600 mb-3">
                <strong>The Trap:</strong> "I'll just watch it and exit manually if needed."
              </p>
              <p className="text-slate-700">
                <strong>Reality:</strong> You'll freeze during losses, hope it comes back, and watch a 5% loss become a 50% disaster. Set the stop loss and honor it.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                3. Setting Stop Loss Too Tight
              </h3>
              <p className="text-slate-600 mb-3">
                <strong>The Trap:</strong> "I'll risk only 0.5% so I can take more trades."
              </p>
              <p className="text-slate-700">
                <strong>Reality:</strong> Price naturally fluctuates. Too-tight stop losses get triggered by normal volatility (noise), not genuine trend reversals. Give your trade breathing room.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                4. Setting Stop Loss at Round Numbers
              </h3>
              <p className="text-slate-600 mb-3">
                <strong>The Trap:</strong> Placing stop loss exactly at ₹1,000, ₹1,500, etc.
              </p>
              <p className="text-slate-700">
                <strong>Reality:</strong> Many traders cluster stops at round numbers. Market makers know this and often trigger these levels before reversing. Place your stop loss slightly beyond round numbers (e.g., ₹997 instead of ₹1,000).
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                5. Removing Stop Loss After Entry
              </h3>
              <p className="text-slate-600 mb-3">
                <strong>The Trap:</strong> "It's going my way, I don't need the stop loss anymore."
              </p>
              <p className="text-slate-700">
                <strong>Reality:</strong> Markets can reverse instantly. Flash crashes, news events, gaps—all can destroy your account if unprotected. Use trailing stop loss to protect profits, but never remove protection entirely.
              </p>
            </div>
          </div>
        </div>

        {/* Psychological Aspects */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            The Psychology of Stop Loss
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-700">
              The hardest part of using stop losses isn't technical—it's <strong>psychological.</strong> Here's why traders struggle:
            </p>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Why Stop Loss Feels Painful
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">😔</span>
                  <div>
                    <strong className="text-slate-900">Loss Aversion:</strong>
                    <p className="text-slate-600">Humans feel losses 2x more intensely than gains. Taking a stop loss = admitting you were wrong = emotional pain.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎰</span>
                  <div>
                    <strong className="text-slate-900">False Hope:</strong>
                    <p className="text-slate-600">"It might come back" keeps you glued to losing positions. Sometimes it does (reinforcing bad behavior), but when it doesn't, you're wiped out.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">😡</span>
                  <div>
                    <strong className="text-slate-900">Ego Protection:</strong>
                    <p className="text-slate-600">Taking a stop loss feels like failure. But professional traders get stopped out constantly—it's part of the game.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                How to Overcome Stop Loss Anxiety
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <div>
                    <strong>Reframe the narrative:</strong> Stop loss isn't "losing"—it's <strong>protecting capital</strong> for the next opportunity.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <div>
                    <strong>Accept losses as cost of business:</strong> Stop losses are like insurance premiums—you pay small costs to avoid catastrophic ones.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <div>
                    <strong>Use automation:</strong> Set stop loss orders with your broker so emotions can't interfere.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <div>
                    <strong>Journal your stops:</strong> Track stop loss hits. You'll see most were correct decisions that saved you from bigger losses.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 shadow-lg mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Key Takeaways</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <p className="text-lg">Stop loss is <strong>non-negotiable</strong>—it's your lifeline in trading.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg">Choose stop loss type based on your strategy: <strong>percentage, support/resistance, ATR, time-based, or trailing.</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg"><strong>Never move stop loss further away</strong> when losing—that's gambling.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg">Avoid common mistakes: <strong>too tight stops, round number stops, removing stops.</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg">Stop loss pain is psychological—<strong>reframe it as capital protection,</strong> not failure.</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Next Module: Risk-Reward Ratio
          </h2>
          <p className="text-slate-600 mb-6">
            Now that you know how to limit losses with stop loss, learn how to ensure your wins are bigger than your losses with risk-reward ratios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/risk-management/risk-reward-ratio"
              className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
            >
              Next: Risk-Reward Ratio →
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
