import { Link } from 'react-router-dom';

export default function TradingStrategies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link to="/technical-analysis" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-4">
            ← Back to Technical Analysis
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🎯</span>
            <h1 className="text-4xl font-bold text-slate-900">Complete Trading Strategies</h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            You've learned the tools: candlesticks, patterns, indicators, S/R, timeframes, and risk management. Now it's time to combine them into complete, actionable trading strategies you can execute starting today. These are battle-tested setups that work.
          </p>
          
          {/* Hero Visual */}
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🎯📋✅</div>
              <p className="text-lg font-semibold text-slate-700">From Theory to Action: Complete Playbook</p>
              <p className="text-sm text-slate-600 mt-2">Breakouts, Pullbacks, Trends & Reversals Mastered</p>
            </div>
          </div>
        </div>

        {/* Strategy Framework */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Anatomy of a Complete Trading Strategy</h2>
          <p className="text-lg text-slate-700 mb-6">
            Every pro strategy has seven components. Miss one, and you're gambling, not trading. Master all seven, and you have a repeatable edge.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">The 7 Essential Components</h3>
              <ol className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">1.</span>
                  <span><strong>Market context:</strong> What market condition does this work in? (Trending, range-bound, volatile)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">2.</span>
                  <span><strong>Setup criteria:</strong> What technical signals must align? (Pattern + volume + indicator)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">3.</span>
                  <span><strong>Entry trigger:</strong> Exact condition to enter the trade (breakout candle close, pullback to MA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">4.</span>
                  <span><strong>Stop loss:</strong> Where analysis is invalidated (below support, below trendline)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">5.</span>
                  <span><strong>Target(s):</strong> Profit-taking levels (resistance, measured move, trailing stop)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">6.</span>
                  <span><strong>Position sizing:</strong> How much to risk (2% rule, calculate shares)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">7.</span>
                  <span><strong>Exit plan:</strong> When to take profit, trail stops, or exit early</span>
                </li>
              </ol>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Example: All 7 Components</h3>
              <div className="bg-white rounded-lg p-4 text-xs text-slate-700">
                <p className="font-semibold text-slate-900 mb-2">Breakout Strategy:</p>
                <ol className="space-y-2">
                  <li><strong>1. Context:</strong> Uptrend on daily chart (higher highs/lows)</li>
                  <li><strong>2. Setup:</strong> Consolidation for 2+ weeks near resistance + volume declining</li>
                  <li><strong>3. Entry:</strong> Candle closes above resistance on 2× avg volume</li>
                  <li><strong>4. Stop:</strong> Below consolidation low (below breakout level - 2%)</li>
                  <li><strong>5. Target:</strong> Height of consolidation added to breakout point</li>
                  <li><strong>6. Position:</strong> Risk 2% of capital / stop distance = shares</li>
                  <li><strong>7. Exit:</strong> Trail stop to breakeven after +2%, exit at target or if closes below 50 EMA</li>
                </ol>
                <div className="mt-4 bg-green-100 rounded p-3">
                  <p className="text-green-900 font-semibold">
                    This is COMPLETE. You know exactly what to do, when to enter, where to exit, and how much to risk. Repeatable edge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategy 1: Breakout Trading */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Strategy 1: Breakout Trading</h2>
          <p className="text-lg text-slate-700 mb-6">
            Capture explosive moves when price breaks out of consolidation. High win rate when combined with volume confirmation. Best for trending markets.
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Setup & Entry Rules</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3">Ideal Conditions</h4>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• <strong>Market context:</strong> Uptrend on weekly/daily (for long breakouts)</li>
                    <li>• <strong>Pattern:</strong> Consolidation/range for 10+ days near resistance</li>
                    <li>• <strong>Volume:</strong> Declining during consolidation (coiling)</li>
                    <li>• <strong>Attempts:</strong> 2-3 failed breakout attempts (energy building)</li>
                    <li>• <strong>Tightening:</strong> Price range getting narrower (squeeze)</li>
                  </ul>
                  <div className="mt-4 bg-blue-50 rounded p-3">
                    <p className="text-xs text-blue-900">
                      <strong>Pro Tip:</strong> Best breakouts happen after long consolidations (3-8 weeks). Short consolidations often lead to false breaks.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3">Entry Trigger</h4>
                  <ol className="text-sm text-slate-700 space-y-2">
                    <li><strong>1.</strong> Candle closes ABOVE resistance (not just touches)</li>
                    <li><strong>2.</strong> Volume is 50-100%+ above 20-day average</li>
                    <li><strong>3.</strong> Breakout candle is strong (not tiny doji)</li>
                    <li><strong>4.</strong> Enter on close of breakout candle OR next candle if pullback</li>
                  </ol>
                  <div className="mt-4 font-mono text-xs bg-slate-100 p-3 rounded">
                    <pre className="text-slate-600">{`ENTRY EXAMPLE:
₹1,120  ●   Breakout candle
       ↗ ╲  (HIGH VOLUME)
₹1,100 ●──●  Resistance broken
      ╱  ╲
     ●    ●  Consolidation
    ╱      ╲ (3 weeks)
₹1,050 ●────●

Enter: ₹1,120 on close
Stop: ₹1,040 (below range)
Target: ₹1,190 (measured)`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Complete Trade Example</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Setup Phase</h4>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Stock: XYZ Ltd</li>
                    <li>• Weekly trend: Uptrend</li>
                    <li>• Daily: Range ₹1,050-₹1,100 for 4 weeks</li>
                    <li>• Volume: Declining daily</li>
                    <li>• Failed attempts: 3×</li>
                    <li>• Bollinger Bands: Tight squeeze</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Execution</h4>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Day 23: Breakout to ₹1,120</li>
                    <li>• Volume: 180% of avg</li>
                    <li>• Entry: ₹1,120</li>
                    <li>• Stop: ₹1,040 (₹80 risk)</li>
                    <li>• Target: ₹1,190 (₹70 reward)</li>
                    <li>• R:R: 1:2.5 (acceptable for breakout)</li>
                    <li>• Capital: ₹10L, Risk: 2% = ₹20K</li>
                    <li>• Shares: ₹20K / ₹80 = 250 shares</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Management</h4>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Day 24-26: Hold (no action)</li>
                    <li>• Day 27: +5% gain, trail stop to ₹1,100 (breakeven)</li>
                    <li>• Day 30: Hits ₹1,185</li>
                    <li>• Day 31: Exit at ₹1,188</li>
                    <li>• Profit: ₹68 × 250 = ₹17,000</li>
                    <li>• Return: 1.7% on capital</li>
                    <li>• Outcome: ✅ Winner</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-4">Common Breakout Mistakes to Avoid</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-3">❌ Don't Do This:</h4>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• Entering on intraday spike (wait for daily close)</li>
                    <li>• Chasing after breakout already ran 5%+</li>
                    <li>• Trading breakouts on low volume (fake)</li>
                    <li>• No stop loss ("it's a strong breakout")</li>
                    <li>• Buying breakouts against weekly trend</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-3">✅ Best Practices:</h4>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• Wait for candle close above resistance</li>
                    <li>• Confirm with volume (50%+ above avg)</li>
                    <li>• Enter on close OR wait for pullback</li>
                    <li>• Always use stop below consolidation</li>
                    <li>• Trail stops as trade progresses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategy 2: Pullback Trading */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Strategy 2: Pullback Trading (Trend Continuation)</h2>
          <p className="text-lg text-slate-700 mb-6">
            "Buy the dip" in established uptrends. Highest probability setup in technical analysis (70%+ win rate when done right). Buy when others panic.
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Setup & Entry Rules</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3">Ideal Conditions</h4>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• <strong>Market context:</strong> STRONG uptrend (weekly + daily aligned)</li>
                    <li>• <strong>Trend strength:</strong> Above rising 50 & 200 EMAs</li>
                    <li>• <strong>Pullback:</strong> Price retraces to support (MA, trendline, or S/R)</li>
                    <li>• <strong>Depth:</strong> 5-15% pullback (not 30%+ crash)</li>
                    <li>• <strong>Volume:</strong> Low volume on pullback (no panic)</li>
                  </ul>
                  <div className="mt-4 bg-green-50 rounded p-3">
                    <p className="text-xs text-green-900">
                      <strong>Pro Tip:</strong> Best pullbacks touch 50 EMA and bounce. If it breaks 200 EMA, trend is over—don't buy.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3">Entry Trigger</h4>
                  <ol className="text-sm text-slate-700 space-y-2">
                    <li><strong>1.</strong> Price pulls back to 50 EMA or rising trendline</li>
                    <li><strong>2.</strong> Bullish reversal candle forms (hammer, engulfing)</li>
                    <li><strong>3.</strong> Next candle closes above reversal candle high</li>
                    <li><strong>4.</strong> Volume picks up on reversal (buyers stepping in)</li>
                  </ol>
                  <div className="mt-4 font-mono text-xs bg-slate-100 p-3 rounded">
                    <pre className="text-slate-600">{`ENTRY EXAMPLE:
        ●   New high
       ↗ ╲
      ●   ●  Pullback
     ↗     ╲ (to 50 EMA)
    ●       ● Hammer!
   ↗══════════ 50 EMA
  ●

Enter: Above hammer high
Stop: Below hammer low
Target: New high or +10%`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Complete Trade Example</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Setup Phase</h4>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Stock: ABC Ltd</li>
                    <li>• Weekly: Strong uptrend</li>
                    <li>• Daily: Above 50 & 200 EMA</li>
                    <li>• Recent high: ₹1,200</li>
                    <li>• Current: ₹1,120 (-6.7% pullback)</li>
                    <li>• 50 EMA: ₹1,115</li>
                    <li>• Volume: 40% below avg (healthy)</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Execution</h4>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Day 1: Hammer at ₹1,118 (at 50 EMA)</li>
                    <li>• Day 2: Closes at ₹1,135 (above hammer)</li>
                    <li>• Entry: ₹1,135</li>
                    <li>• Stop: ₹1,105 (below hammer low)</li>
                    <li>• Target: ₹1,225 (new high + buffer)</li>
                    <li>• Risk: ₹30, Reward: ₹90</li>
                    <li>• R:R: 1:3 (excellent)</li>
                    <li>• Position: 2% risk = ₹20K / ₹30 = 666 shares</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Management</h4>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Week 1: Grinds higher to ₹1,160</li>
                    <li>• Week 2: Trail stop to ₹1,130 (below recent low)</li>
                    <li>• Week 3: Reaches ₹1,215</li>
                    <li>• Week 4: Take profit at ₹1,220</li>
                    <li>• Profit: ₹85 × 666 = ₹56,610</li>
                    <li>• Return: 5.6% on capital</li>
                    <li>• Outcome: ✅ Winner (trend continuation)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">Multi-Timeframe Confirmation (Critical!)</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">Weekly Chart</h4>
                  <p className="text-xs text-slate-700 mb-2">Confirms overall trend direction:</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>✅ Rising 50 & 200 MA</li>
                    <li>✅ Higher highs + higher lows</li>
                    <li>✅ Above long-term support</li>
                  </ul>
                  <p className="text-xs font-semibold text-green-700 mt-2">→ TREND IS UP</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">Daily Chart</h4>
                  <p className="text-xs text-slate-700 mb-2">Identifies pullback setup:</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>✅ Pullback to 50 EMA</li>
                    <li>✅ Bullish reversal candle</li>
                    <li>✅ Still above 200 EMA</li>
                  </ul>
                  <p className="text-xs font-semibold text-green-700 mt-2">→ SETUP VALID</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">1-Hour Chart</h4>
                  <p className="text-xs text-slate-700 mb-2">Refines entry timing:</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>✅ Bounce confirmed</li>
                    <li>✅ Volume increasing</li>
                    <li>✅ Higher lows forming</li>
                  </ul>
                  <p className="text-xs font-semibold text-green-700 mt-2">→ ENTER NOW</p>
                </div>
              </div>
              <div className="mt-4 bg-white rounded-lg p-4">
                <p className="text-sm text-slate-700">
                  <strong>When all three timeframes agree:</strong> Weekly uptrend + Daily pullback setup + Hourly entry signal = 70%+ win rate. This is HIGH-PROBABILITY trading.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategy 3: Trend-Following */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Strategy 3: Trend-Following (Moving Average Crossovers)</h2>
          <p className="text-lg text-slate-700 mb-6">
            Simple, mechanical, and effective. Ride major trends using MA crossovers. Lower win rate (40-50%) but HUGE winners (1:5+ R:R). Perfect for swing/position trading.
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border-2 border-indigo-200">
              <h3 className="text-xl font-semibold text-indigo-900 mb-4">The Golden Cross / Death Cross System</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-3">Golden Cross (Buy Signal)</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    When 50-day MA crosses ABOVE 200-day MA = Major bullish signal. Buy and hold until Death Cross.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-2">
                    <li>• <strong>Entry:</strong> Day after 50 MA crosses above 200 MA</li>
                    <li>• <strong>Stop:</strong> 10% below entry (wide for trend-following)</li>
                    <li>• <strong>Target:</strong> Trail stop; exit only on Death Cross</li>
                    <li>• <strong>Hold time:</strong> Weeks to months</li>
                    <li>• <strong>Best for:</strong> Bull markets, strong stocks</li>
                  </ul>
                  <div className="mt-4 font-mono text-xs bg-slate-100 p-3 rounded">
                    <pre className="text-slate-600">{`GOLDEN CROSS:
      ●══  50 MA crosses above
     ↗
    ●
   ↗
  ●═══════  200 MA

BUY and hold for months
Trail stop below 50 MA`}</pre>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-3">Death Cross (Sell Signal)</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    When 50-day MA crosses BELOW 200-day MA = Major bearish signal. Exit longs or go short.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-2">
                    <li>• <strong>Entry (short):</strong> Day after 50 MA crosses below 200 MA</li>
                    <li>• <strong>Stop:</strong> 10% above entry</li>
                    <li>• <strong>Target:</strong> Trail stop; exit only on Golden Cross</li>
                    <li>• <strong>Hold time:</strong> Weeks to months</li>
                    <li>• <strong>Best for:</strong> Bear markets, weak stocks</li>
                  </ul>
                  <div className="mt-4 font-mono text-xs bg-slate-100 p-3 rounded">
                    <pre className="text-slate-600">{`DEATH CROSS:
  ●═══════  200 MA
   ╲
    ●
     ╲
      ●══  50 MA crosses below

EXIT or SHORT
Major trend change`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
              <h3 className="text-lg font-semibold text-orange-900 mb-4">Complete Trade Example (Golden Cross)</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Setup Phase</h4>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Stock: DEF Ltd</li>
                    <li>• Jan 2024: 50 MA at ₹980</li>
                    <li>• 200 MA at ₹985</li>
                    <li>• Jan 15: 50 MA crosses above 200 MA</li>
                    <li>• Signal: Golden Cross confirmed</li>
                    <li>• Market: Nifty in uptrend</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Execution</h4>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Jan 16: Enter at ₹1,000</li>
                    <li>• Stop: ₹900 (10% below)</li>
                    <li>• Target: Trail stop, no fixed target</li>
                    <li>• Risk: ₹100, no fixed reward</li>
                    <li>• Position: 2% = ₹20K / ₹100 = 200 shares</li>
                    <li>• Plan: Hold for months, trail below 50 MA</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Management</h4>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Feb: ₹1,050 → Trail stop to ₹950</li>
                    <li>• Mar: ₹1,150 → Trail to ₹1,050</li>
                    <li>• Apr: ₹1,280 → Trail to ₹1,180</li>
                    <li>• May: ₹1,380 → Trail to ₹1,280</li>
                    <li>• Jun: Death Cross at ₹1,350</li>
                    <li>• Exit: ₹1,350</li>
                    <li>• Profit: ₹350 × 200 = ₹70,000 (35%!)</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6">
                <p className="text-sm font-semibold text-slate-900 mb-2">Why This Works:</p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>• <strong>Captures major trends:</strong> Golden/Death crosses identify major market shifts (months-long moves)</li>
                  <li>• <strong>Low effort:</strong> Check once weekly, trail stops monthly. No daily stress.</li>
                  <li>• <strong>Big winners:</strong> Win rate is 40-50%, but winners are 20-50%+ gains. Losers small (10%).</li>
                  <li>• <strong>Avoids chop:</strong> Keeps you OUT of sideways markets (where scalpers/intraday die).</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
              <p className="text-sm text-slate-700">
                <strong>⚠️ Critical:</strong> This strategy requires PATIENCE. You'll have losing trades when trends fail to develop (whipsaws in range-bound markets). But when it works (trending market), one trade pays for 3-4 losses. Net result: Profitable over 100+ trades.
              </p>
            </div>
          </div>
        </div>

        {/* Strategy 4: Reversal Trading */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Strategy 4: Reversal Trading (Divergence + Pattern)</h2>
          <p className="text-lg text-slate-700 mb-6">
            High-risk, high-reward. Catch trend reversals early using RSI divergence + reversal patterns. For advanced traders only. Requires experience and discipline.
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-xl font-semibold text-red-900 mb-4">Setup & Entry Rules</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3">Bearish Reversal (Top)</h4>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• <strong>Context:</strong> Extended uptrend (price overbought)</li>
                    <li>• <strong>Divergence:</strong> Price makes new high, RSI makes lower high</li>
                    <li>• <strong>Pattern:</strong> Evening Star, Bearish Engulfing, or Head & Shoulders</li>
                    <li>• <strong>Entry:</strong> Below pattern confirmation candle</li>
                    <li>• <strong>Stop:</strong> Above pattern high</li>
                    <li>• <strong>Target:</strong> 50 EMA or previous support</li>
                  </ul>
                  <div className="mt-4 font-mono text-xs bg-slate-100 p-3 rounded">
                    <pre className="text-slate-600">{`BEARISH DIVERGENCE:
Price:  ●   New high
       ↗ ╲
      ●   Evening Star!

RSI:   ●  Lower high
      ↗ ╲ (divergence)
     ●

SHORT below confirmation`}</pre>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3">Bullish Reversal (Bottom)</h4>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• <strong>Context:</strong> Extended downtrend (price oversold)</li>
                    <li>• <strong>Divergence:</strong> Price makes new low, RSI makes higher low</li>
                    <li>• <strong>Pattern:</strong> Morning Star, Bullish Engulfing, or Inverse H&S</li>
                    <li>• <strong>Entry:</strong> Above pattern confirmation candle</li>
                    <li>• <strong>Stop:</strong> Below pattern low</li>
                    <li>• <strong>Target:</strong> 50 EMA or previous resistance</li>
                  </ul>
                  <div className="mt-4 font-mono text-xs bg-slate-100 p-3 rounded">
                    <pre className="text-slate-600">{`BULLISH DIVERGENCE:
Price:  ●   Morning Star!
         ╲ ↗
          ● New low

RSI:     ●  Higher low
        ╱ ↗ (divergence)
       ●

BUY above confirmation`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">Complete Trade Example (Bearish Reversal)</h3>
              <div className="bg-white rounded-lg p-6">
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2 text-xs">Setup</h4>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>• Stock: GHI at ₹1,500</li>
                      <li>• Trend: Up 40% in 8 weeks</li>
                      <li>• RSI: 75 (overbought)</li>
                      <li>• Price: New high ₹1,500</li>
                      <li>• RSI: Lower high (68)</li>
                      <li>• Pattern: Evening Star forms</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2 text-xs">Entry</h4>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>• Confirmation: ₹1,470 close</li>
                      <li>• Entry: ₹1,465 (short)</li>
                      <li>• Stop: ₹1,510 (above high)</li>
                      <li>• Risk: ₹45</li>
                      <li>• Target: ₹1,350 (50 EMA)</li>
                      <li>• Reward: ₹115</li>
                      <li>• R:R: 1:2.5</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2 text-xs">Outcome</h4>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>• Week 1: ₹1,420</li>
                      <li>• Week 2: ₹1,380</li>
                      <li>• Week 3: ₹1,355</li>
                      <li>• Exit: ₹1,355</li>
                      <li>• Profit: ₹110 per share</li>
                      <li>• Result: 7.5% gain</li>
                      <li>• ✅ Reversal caught!</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-red-100 rounded p-4">
                  <p className="text-xs text-red-900">
                    <strong>⚠️ Warning:</strong> Reversal trading is HARD. You're fighting the trend. Only attempt after mastering trend-following first. Win rate is 40-50%, but losses are small and winners huge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategy Comparison */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Strategy Comparison: Which One to Use?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-slate-200">
                  <th className="p-3 text-left">Strategy</th>
                  <th className="p-3 text-left">Win Rate</th>
                  <th className="p-3 text-left">Avg R:R</th>
                  <th className="p-3 text-left">Holding Time</th>
                  <th className="p-3 text-left">Difficulty</th>
                  <th className="p-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="border-b">
                  <td className="p-3 font-semibold">Breakout</td>
                  <td className="p-3">55-65%</td>
                  <td className="p-3">1:2 to 1:3</td>
                  <td className="p-3">Days to weeks</td>
                  <td className="p-3 text-yellow-600">Medium</td>
                  <td className="p-3">Trending markets, high volume stocks</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-semibold">Pullback</td>
                  <td className="p-3">65-75%</td>
                  <td className="p-3">1:2 to 1:4</td>
                  <td className="p-3">Weeks</td>
                  <td className="p-3 text-green-600">Easy</td>
                  <td className="p-3">Strong trends, beginners, swing traders</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Trend-Following</td>
                  <td className="p-3">40-50%</td>
                  <td className="p-3">1:5 to 1:10</td>
                  <td className="p-3">Months</td>
                  <td className="p-3 text-green-600">Easy</td>
                  <td className="p-3">Patient traders, position traders</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Reversal</td>
                  <td className="p-3">40-50%</td>
                  <td className="p-3">1:2 to 1:4</td>
                  <td className="p-3">Days to weeks</td>
                  <td className="p-3 text-red-600">Hard</td>
                  <td className="p-3">Advanced traders, contrarians</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="font-semibold text-green-900 mb-3">✅ Beginner Recommendation</h3>
              <p className="text-sm text-slate-700 mb-3">
                <strong>Start with Pullback Trading:</strong>
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• Highest win rate (70%+) builds confidence</li>
                <li>• Clear rules: Wait for pullback to MA, buy bounce</li>
                <li>• Works in most markets (except strong downtrends)</li>
                <li>• Good R:R (1:3+) with reasonable hold times</li>
                <li>• Easy to backtest and practice</li>
              </ul>
              <div className="mt-4 bg-white rounded p-4">
                <p className="text-xs text-green-900">
                  <strong>After 50 pullback trades:</strong> Add Breakout strategy. After 100+ trades total: Consider Trend-Following. Never touch Reversals until you're consistently profitable for 6+ months.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-3">💡 Pro Portfolio Approach</h3>
              <p className="text-sm text-slate-700 mb-3">
                <strong>Use multiple strategies simultaneously:</strong>
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• <strong>50% capital:</strong> Pullback trades (steady income)</li>
                <li>• <strong>30% capital:</strong> Trend-following (big winners)</li>
                <li>• <strong>20% capital:</strong> Breakouts (opportunistic)</li>
                <li>• <strong>0% (yet):</strong> Reversals (add after 1 year)</li>
              </ul>
              <div className="mt-4 bg-white rounded p-4">
                <p className="text-xs text-blue-900">
                  <strong>Benefit:</strong> Diversification smooths returns. Pullbacks work in trends, trend-following catches massive moves, breakouts capture volatility expansions. One strategy always working.
                </p>
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
              <p className="text-lg"><strong>Every strategy needs all 7 components:</strong> Context, setup, entry, stop, target, sizing, exit. Missing one = gambling.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg"><strong>Start with pullback trading (highest win rate 70%+).</strong> Master one strategy before adding others. Consistency over variety.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg"><strong>Multi-timeframe confirmation is critical.</strong> Weekly trend + Daily setup + Hourly entry = 70%+ win rate. Single timeframe = 40-50%.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg"><strong>Win rate doesn't matter as much as R:R.</strong> 40% win rate with 1:5 R:R &gt; 70% win rate with 1:1 R:R.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg"><strong>Backtest every strategy before trading live.</strong> Paper trade 30+ setups. Only go live after proving profitability.</p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <div className="mb-6">
            <span className="text-6xl">🎓</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Congratulations! Technical Analysis Course Complete</h2>
          <p className="text-lg text-slate-700 mb-6">
            You've mastered candlesticks, chart patterns, indicators, volume, trends, S/R, timeframes, risk management, and complete trading strategies. You now have a professional-grade technical analysis toolkit.
          </p>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-8 border-2 border-green-200">
            <h3 className="text-xl font-semibold text-green-900 mb-4">What You've Learned:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-left">
              <ul className="space-y-2 text-slate-700">
                <li>✅ Reading candlestick patterns (single & multiple)</li>
                <li>✅ Identifying chart patterns (reversal & continuation)</li>
                <li>✅ Using indicators & oscillators (MA, RSI, MACD, BB)</li>
                <li>✅ Volume analysis & confirmation</li>
                <li>✅ Trend identification & analysis</li>
              </ul>
              <ul className="space-y-2 text-slate-700">
                <li>✅ Support & resistance mastery</li>
                <li>✅ Multi-timeframe analysis</li>
                <li>✅ Position sizing & risk management</li>
                <li>✅ Stop loss placement strategies</li>
                <li>✅ 4 complete trading strategies</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 mb-8 border-2 border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Next Steps:</h3>
            <ol className="text-sm text-left text-slate-700 space-y-2">
              <li><strong>1.</strong> Backtest pullback strategy on 30 historical charts</li>
              <li><strong>2.</strong> Paper trade for 2 months (minimum 50 trades)</li>
              <li><strong>3.</strong> Start live with small capital (₹50K-₹1L)</li>
              <li><strong>4.</strong> Follow 2% risk rule religiously</li>
              <li><strong>5.</strong> Keep trading journal (entry, exit, mistakes, lessons)</li>
              <li><strong>6.</strong> Review monthly: What worked? What didn't?</li>
              <li><strong>7.</strong> After 6 months profitable: Scale up capital</li>
            </ol>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/learn" className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition">
              Explore More Courses
            </Link>
            <Link to="/technical-analysis" className="px-8 py-3 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition">
              Review Course Overview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
