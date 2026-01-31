import { Link } from 'react-router-dom';

export default function RiskMoneyManagementTA() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link to="/technical-analysis" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-4">
            ← Back to Technical Analysis
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🛡️</span>
            <h1 className="text-4xl font-bold text-slate-900">Risk & Money Management in Technical Analysis</h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            You can master candlesticks, chart patterns, indicators, and timeframes—but without proper risk management, you'll blow up your account. This is THE most important lesson: protect capital first, make profits second. Risk management isn't optional; it's survival.
          </p>
          
          {/* Hero Visual */}
          <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🛡️💰⚖️</div>
              <p className="text-lg font-semibold text-slate-700">Protect Capital = Survive to Trade Another Day</p>
              <p className="text-sm text-slate-600 mt-2">The 2% Rule, Position Sizing & Stop Loss Mastery</p>
            </div>
          </div>
        </div>

        {/* Why Most Traders Fail */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Why 90% of Traders Fail (Hint: It's Not the Setups)</h2>
          <p className="text-lg text-slate-700 mb-6">
            Most beginners think they fail because they can't identify chart patterns or pick winning trades. WRONG. They fail because they risk too much, don't use stops, or overtrade. Even with 60% win rate, poor money management = bankruptcy.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-4">❌ Losing Trader Profile</h3>
              <ul className="text-sm text-slate-700 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Risk per trade:</strong> 10-20% of capital ("go big or go home")</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Stop loss:</strong> None, or too wide ("it'll come back")</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Win rate:</strong> 60% (good!)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Average win:</strong> +3% (₹30,000 on ₹10L)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Average loss:</strong> -15% (₹1,50,000 on ₹10L—no stop loss)</span>
                </li>
              </ul>
              <div className="mt-4 bg-white rounded-lg p-4">
                <p className="text-xs font-semibold text-slate-900 mb-2">After 10 Trades:</p>
                <div className="font-mono text-xs text-slate-600">
                  <pre>{`6 wins × ₹30,000 = +₹1,80,000
4 losses × ₹1,50,000 = -₹6,00,000
────────────────────────────
Net: -₹4,20,000 (42% account blown)

Despite 60% win rate!`}</pre>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-4">✅ Winning Trader Profile</h3>
              <ul className="text-sm text-slate-700 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Risk per trade:</strong> 1-2% of capital (disciplined)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Stop loss:</strong> Always placed at technical level</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Win rate:</strong> 50% (average)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Average win:</strong> +6% (₹60,000 on ₹10L, 1:3 R:R)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Average loss:</strong> -2% (₹20,000 on ₹10L, stop hit)</span>
                </li>
              </ul>
              <div className="mt-4 bg-white rounded-lg p-4">
                <p className="text-xs font-semibold text-slate-900 mb-2">After 10 Trades:</p>
                <div className="font-mono text-xs text-slate-600">
                  <pre>{`5 wins × ₹60,000 = +₹3,00,000
5 losses × ₹20,000 = -₹1,00,000
────────────────────────────
Net: +₹2,00,000 (20% account growth)

With just 50% win rate!`}</pre>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <p className="text-sm text-slate-700">
              <strong>💡 The Lesson:</strong> Win rate doesn't matter as much as risk-reward ratio and position sizing. A 50% win rate with 1:3 R:R and proper sizing beats a 60% win rate with no money management. Always.
            </p>
          </div>
        </div>

        {/* The 2% Rule */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The 2% Rule: Never Risk More Than 2% Per Trade</h2>
          <p className="text-lg text-slate-700 mb-6">
            This is THE golden rule of trading. No matter how confident you are in a setup, never risk more than 2% of your trading capital on a single trade. This ensures you can survive 50 consecutive losses (unlikely) before going broke.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200 mb-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Why 2%?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-3">Survivability Analysis</h4>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>• With 2% risk per trade: You can lose 50 trades in a row before account wipes out</li>
                  <li>• With 5% risk per trade: You're broke after 20 consecutive losses</li>
                  <li>• With 10% risk per trade: You're done after 10 losses</li>
                  <li>• With 20% risk per trade: 5 losses and you're finished</li>
                </ul>
                <div className="mt-4 font-mono text-xs bg-slate-100 p-3 rounded">
                  <pre className="text-slate-600">{`Starting: ₹10,00,000
After 10 losses at 2% each:
₹10L → ₹8.17L (81.7% remains)

After 10 losses at 10% each:
₹10L → ₹3.49L (34.9% remains)

Huge difference!`}</pre>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-3">Psychological Benefit</h4>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>• <strong>Low risk = Low stress:</strong> You can think clearly, not emotionally</li>
                  <li>• <strong>No revenge trading:</strong> Small loss doesn't trigger panic to "make it back"</li>
                  <li>• <strong>Sleep at night:</strong> Max loss is ₹20K on ₹10L capital (manageable)</li>
                  <li>• <strong>Confidence to hold:</strong> Not scared out of positions by volatility</li>
                </ul>
                <div className="mt-4 bg-green-100 rounded p-4">
                  <p className="text-sm text-green-900">
                    <strong>Pro Tip:</strong> Conservative traders use 1%. Aggressive traders use 2%. Never go above 3%, even on "sure things" (they don't exist).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
            <h3 className="text-lg font-semibold text-green-900 mb-4">How to Calculate Position Size Using the 2% Rule</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-3">Formula:</h4>
                <div className="bg-blue-100 rounded-lg p-4 mb-4">
                  <p className="text-sm font-mono text-center text-slate-900">
                    Position Size = (Account Size × Risk%) / (Entry - Stop Loss)
                  </p>
                </div>
                <p className="text-xs font-semibold text-slate-900 mb-2">Example Setup:</p>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Trading capital: ₹10,00,000</li>
                  <li>• Risk per trade: 2% = ₹20,000</li>
                  <li>• Stock: XYZ at ₹1,000</li>
                  <li>• Entry: ₹1,000</li>
                  <li>• Stop loss: ₹980 (technical support level)</li>
                  <li>• Risk per share: ₹1,000 - ₹980 = ₹20</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-3">Calculation:</h4>
                <div className="font-mono text-xs bg-slate-100 p-4 rounded">
                  <pre className="text-slate-600">{`Position Size = ₹20,000 / ₹20
              = 1,000 shares

Total investment:
1,000 shares × ₹1,000 = ₹10,00,000

If stop loss hits:
Loss = 1,000 shares × ₹20
     = ₹20,000 (exactly 2%)

If target hits (₹1,060):
Profit = 1,000 shares × ₹60
       = ₹60,000 (6%, or 1:3 R:R)`}</pre>
                </div>
                <div className="mt-4 bg-green-100 rounded p-4">
                  <p className="text-xs text-green-900">
                    <strong>Key Point:</strong> Position size adjusts based on stop distance. Tighter stop = bigger position. Wider stop = smaller position. Risk stays constant at 2%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stop Loss Placement */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Stop Loss Placement Using Technical Levels</h2>
          <p className="text-lg text-slate-700 mb-6">
            Your stop loss should ALWAYS be at a technical level where your trade idea is invalidated—not at an arbitrary percentage or ₹ amount. If that support breaks, if that trendline fails, your analysis was wrong and you exit. Period.
          </p>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Common Technical Stop Placements</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">1. Below Support</h4>
                  <div className="font-mono text-xs bg-slate-100 p-3 rounded mb-3">
                    <pre className="text-slate-600">{`Entry: ₹1,020
  ●   (breakout above)
 ↗
₹1,000 ●─●─●  Support
      Stop: ₹990
(below support + buffer)

If ₹1000 breaks = wrong`}</pre>
                  </div>
                  <p className="text-xs text-slate-700">Place stop 1-2% below support level. If support fails, trade invalid.</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">2. Below Trendline</h4>
                  <div className="font-mono text-xs bg-slate-100 p-3 rounded mb-3">
                    <pre className="text-slate-600">{`Entry: ₹1,040
    ●   (trend continuation)
   ↗╲
  ●  ╲ Trendline
 ↗    ╲
●      ╲
    Stop: ₹1,010
(below trendline)

If trendline breaks = trend over`}</pre>
                  </div>
                  <p className="text-xs text-slate-700">Place stop below rising trendline. Trendline break = trend failure.</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">3. Below Recent Low</h4>
                  <div className="font-mono text-xs bg-slate-100 p-3 rounded mb-3">
                    <pre className="text-slate-600">{`Entry: ₹1,050
      ●   (pullback buy)
     ↗ ╲
    ●   ●
   ↗   ↗
  ●  Recent swing low
Stop: ₹1,015

If swing low breaks = weakness`}</pre>
                  </div>
                  <p className="text-xs text-slate-700">Place stop below last swing low. New lower low = trend reversal.</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">ATR-Based Stops (Dynamic Method)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-slate-700 mb-4">
                    Average True Range (ATR) measures volatility. Use it to set stops that give the trade "breathing room" without being too loose.
                  </p>
                  <div className="bg-purple-100 rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">ATR Stop Formula:</p>
                    <p className="text-xs font-mono text-slate-700 mb-3">
                      Stop Distance = 2 × ATR(14)
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• ATR(14) = 14-day average true range</li>
                      <li>• Low volatility stock: ATR = ₹10 → Stop = 2×₹10 = ₹20 away</li>
                      <li>• High volatility stock: ATR = ₹30 → Stop = 2×₹30 = ₹60 away</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 rounded p-4">
                    <p className="text-xs text-green-900">
                      <strong>Advantage:</strong> Adapts to market conditions. Volatile stocks get wider stops automatically.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3">Example:</h4>
                  <div className="font-mono text-xs bg-slate-100 p-4 rounded">
                    <pre className="text-slate-600">{`Stock: ABC at ₹1,000
ATR(14): ₹25

Stop Distance: 2 × ₹25 = ₹50

Long trade:
Entry: ₹1,000
Stop: ₹950 (₹1,000 - ₹50)
Target: ₹1,150 (1:3 R:R)

Short trade:
Entry: ₹1,000
Stop: ₹1,050 (₹1,000 + ₹50)
Target: ₹850 (1:3 R:R)

ATR adjusts for volatility automatically`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-4">❌ Where NOT to Place Stops</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-3">Common Mistakes</h4>
                  <ul className="text-sm text-slate-700 space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">1.</span>
                      <span><strong>At round numbers (₹1,000, ₹500):</strong> Everyone's stop is there. Stop hunting guaranteed.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">2.</span>
                      <span><strong>Exactly at support:</strong> Price often wicks below support by ₹5-₹10 before bouncing. Add buffer.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">3.</span>
                      <span><strong>Too tight (₹5-₹10 away):</strong> Normal volatility will stop you out.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">4.</span>
                      <span><strong>Too wide (&gt;5% away):</strong> Your position size becomes too small to be meaningful.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">5.</span>
                      <span><strong>Mental stops ("I'll exit if it hits X"):</strong> You won't. Emotions take over. Use actual stop orders.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-3">✅ Best Practices</h4>
                  <ul className="text-sm text-slate-700 space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">1.</span>
                      <span><strong>Below support + 1-2% buffer:</strong> Accounts for wicks, avoids stop hunting.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">2.</span>
                      <span><strong>At invalidation point:</strong> Where your analysis is proven wrong.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">3.</span>
                      <span><strong>Use stop-loss orders:</strong> Not mental stops. Let system execute automatically.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">4.</span>
                      <span><strong>Adjust for volatility:</strong> High VIX days = wider stops.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">5.</span>
                      <span><strong>Trail stops as trade progresses:</strong> Lock in profits as price moves in your favor.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk-Reward Ratio */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Risk-Reward Ratio: The Math That Makes You Profitable</h2>
          <p className="text-lg text-slate-700 mb-6">
            You don't need a 70% win rate to be profitable. With proper R:R, even 40% wins = profits. Here's the math that separates pros from amateurs.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200">
              <h3 className="text-lg font-semibold text-orange-900 mb-4">Minimum R:R Requirements</h3>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-xs font-semibold text-slate-900 mb-3">Break-Even R:R Based on Win Rate:</p>
                <div className="font-mono text-xs text-slate-600 space-y-2">
                  <p>• <strong>70% win rate:</strong> Need 1:0.43 R:R to break even</p>
                  <p>• <strong>60% win rate:</strong> Need 1:0.67 R:R to break even</p>
                  <p>• <strong>50% win rate:</strong> Need 1:1 R:R to break even</p>
                  <p>• <strong>40% win rate:</strong> Need 1:1.5 R:R to break even</p>
                  <p>• <strong>30% win rate:</strong> Need 1:2.33 R:R to break even</p>
                </div>
              </div>
              <div className="bg-orange-100 rounded p-4">
                <p className="text-xs text-orange-900">
                  <strong>Pro Standard:</strong> Always target minimum 1:2 R:R (ideally 1:3+). This gives you buffer even with sub-50% win rate.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Profitability Scenarios (1:3 R:R)</h3>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-xs font-semibold text-slate-900 mb-3">After 100 trades with 1:3 R:R:</p>
                <div className="font-mono text-xs text-slate-600 space-y-3">
                  <div className="border-b pb-2">
                    <p><strong>40% Win Rate:</strong></p>
                    <p>40 wins × 3R = +120R</p>
                    <p>60 losses × 1R = -60R</p>
                    <p className="text-green-700 font-semibold">Net: +60R (60% profit)</p>
                  </div>
                  <div className="border-b pb-2">
                    <p><strong>50% Win Rate:</strong></p>
                    <p>50 wins × 3R = +150R</p>
                    <p>50 losses × 1R = -50R</p>
                    <p className="text-green-700 font-semibold">Net: +100R (100% profit)</p>
                  </div>
                  <div>
                    <p><strong>60% Win Rate:</strong></p>
                    <p>60 wins × 3R = +180R</p>
                    <p>40 losses × 1R = -40R</p>
                    <p className="text-green-700 font-semibold">Net: +140R (140% profit)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">How to Achieve Good R:R in Technical Trading</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-3">Strategy 1: Target Previous Highs/Lows</h4>
                <div className="font-mono text-xs bg-slate-100 p-3 rounded mb-3">
                  <pre className="text-slate-600">{`₹1,150  ● Previous high (TARGET)
       ╱
₹1,100 ● Previous resistance
      ╱
₹1,050 ● Entry (breakout)
      ╱
₹1,030 ● Stop (below breakout)

Risk: ₹20 (₹1,050 - ₹1,030)
Reward: ₹100 (₹1,150 - ₹1,050)
R:R = 1:5`}</pre>
                </div>
                <p className="text-xs text-slate-700">Use historical S/R levels as targets. Clear, objective, and market-proven.</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-3">Strategy 2: Measured Moves</h4>
                <div className="font-mono text-xs bg-slate-100 p-3 rounded mb-3">
                  <pre className="text-slate-600">{`Flag pattern:
₹1,100 ● Pole top
      ╱
₹1,000 ●────● Consolidation
      ╱    ╱ (₹50 range)
₹950  ● Entry
Stop: ₹930

Target: ₹950 + ₹50 = ₹1,000

Risk: ₹20, Reward: ₹50
R:R = 1:2.5`}</pre>
                </div>
                <p className="text-xs text-slate-700">Project the height of consolidation or prior move. Pattern-based targets.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Daily/Weekly Risk Limits */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Daily & Weekly Risk Limits</h2>
          <p className="text-lg text-slate-700 mb-6">
            Even with perfect per-trade risk management, a bad trading day or week can spiral. Set circuit breakers to protect yourself from emotional trading and compounding losses.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-4">Daily Loss Limit</h3>
              <p className="text-sm text-slate-700 mb-4">
                <strong>Rule:</strong> If you lose 4-6% of your capital in one day, STOP TRADING for the day. Walk away. No exceptions.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-xs font-semibold text-slate-900 mb-2">Example with ₹10L Capital:</p>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li>• 2% per trade × 3 losing trades = -6% daily loss</li>
                  <li>• Once you hit -₹60,000 loss in a day, close platform</li>
                  <li>• Come back tomorrow with clear mind</li>
                  <li>• Prevents revenge trading spiral (trying to "make it back")</li>
                </ul>
              </div>
              <div className="bg-red-100 rounded p-4">
                <p className="text-xs text-red-900">
                  <strong>Why it works:</strong> After 3 losses, you're emotional, angry, desperate. Your decision-making is impaired. Stop before you blow up the account.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
              <h3 className="text-lg font-semibold text-orange-900 mb-4">Weekly Loss Limit</h3>
              <p className="text-sm text-slate-700 mb-4">
                <strong>Rule:</strong> If you lose 10% of your capital in one week, take a 1-week break. Your strategy may not be working in current market conditions.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-xs font-semibold text-slate-900 mb-2">Example with ₹10L Capital:</p>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li>• Week 1: -2%, -3%, -2%, -1%, -3% = -11% total</li>
                  <li>• Once you hit -₹1,00,000 weekly loss, stop for the week</li>
                  <li>• Use time off to review what went wrong</li>
                  <li>• Prevents trading through bad streaks</li>
                </ul>
              </div>
              <div className="bg-orange-100 rounded p-4">
                <p className="text-xs text-orange-900">
                  <strong>Why it works:</strong> Losing weeks happen. But continuing to trade when your edge isn't working = throwing good money after bad. Reset.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Win Limits (Yes, These Exist Too)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-2">Daily Win Target</h4>
                <p className="text-xs text-slate-700 mb-3">
                  After you hit +4-6% gain in a day, consider stopping. You're ahead. Protect it. Overtrading on good days often gives back profits.
                </p>
                <div className="bg-green-100 rounded p-3">
                  <p className="text-xs text-green-900">
                    <strong>Strategy:</strong> Hit daily target? Take rest of day off. Go celebrate. Don't risk giving it back.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-2">Weekly Win Target</h4>
                <p className="text-xs text-slate-700 mb-3">
                  After a +15-20% week, take a few days off. Banking consistent gains is more important than pushing for "just one more trade."
                </p>
                <div className="bg-green-100 rounded p-3">
                  <p className="text-xs text-green-900">
                    <strong>Strategy:</strong> Great week? Reduce position sizes or take Friday off. Preserve capital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 shadow-lg mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Key Takeaways</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <p className="text-lg"><strong>The 2% Rule is non-negotiable.</strong> Never risk more than 2% per trade. Period. This ensures survivability through losing streaks.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg"><strong>Position size = Risk% / Stop distance.</strong> Calculate how many shares/lots to trade based on where your stop is. Tighter stop = bigger size.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg"><strong>Stops at technical levels only.</strong> Below support, below trendlines, below swing lows—where your analysis is invalidated. Not arbitrary %.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg"><strong>Target minimum 1:2 R:R (ideally 1:3+).</strong> This lets you profit even with 50% or lower win rate. The math works in your favor.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg"><strong>Daily & weekly loss limits save accounts.</strong> Stop trading at -6% daily or -10% weekly. Prevents emotional spirals and blow-ups.</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Final Module: Putting It All Together</h2>
          <p className="text-slate-600 mb-6">
            You've mastered patterns, indicators, timeframes, and risk management. Now learn complete trading strategies that combine everything into high-probability setups you can trade starting tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/technical-analysis/trading-strategies" className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition">
              Next: Complete Trading Strategies →
            </Link>
            <Link to="/technical-analysis" className="px-8 py-3 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition">
              Back to Course Overview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
