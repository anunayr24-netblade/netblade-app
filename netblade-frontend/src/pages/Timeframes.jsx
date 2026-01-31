import { Link } from 'react-router-dom';

export default function Timeframes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link to="/technical-analysis" className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-4">
            ← Back to Technical Analysis
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">⏱️</span>
            <h1 className="text-4xl font-bold text-slate-900">Timeframes & Multi-Timeframe Analysis</h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            The same stock can look bullish on one timeframe and bearish on another. Master timeframe analysis, and you'll avoid getting chopped up in noise while positioning for high-probability trades. Wrong timeframe = wrong trades.
          </p>
          
          {/* Hero Visual */}
          <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">⏰📊🔍</div>
              <p className="text-lg font-semibold text-slate-700">Zoom In, Zoom Out: The Power of Perspective</p>
              <p className="text-sm text-slate-600 mt-2">Scalping to Position Trading—Find Your Perfect Timeframe</p>
            </div>
          </div>
        </div>

        {/* Why Timeframes Matter */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Timeframes Are Critical</h2>
          <p className="text-lg text-slate-700 mb-6">
            Every trader is analyzing the same stocks, but through different timeframe lenses. A swing trader sees an uptrend; a scalper sees consolidation. Who's right? Both. The timeframe determines the perspective—and the trade.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200 mb-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">The Same Chart, Four Different Views</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-2">Monthly Chart (Position Trader)</h4>
                <div className="font-mono text-xs bg-slate-100 p-3 rounded mb-3">
                  <pre className="text-slate-600">{`Clear uptrend
   ●
  ↗
 ●
↗
●

"Buy and hold for months"`}</pre>
                </div>
                <p className="text-xs text-slate-700">Sees: Strong uptrend, buying dip at moving average support.</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">Daily Chart (Swing Trader)</h4>
                <div className="font-mono text-xs bg-slate-100 p-3 rounded mb-3">
                  <pre className="text-slate-600">{`Pullback in uptrend
 ●
  ╲ ↗●
   ●
  ↗
 ●

"Buy the dip, hold 1-2 weeks"`}</pre>
                </div>
                <p className="text-xs text-slate-700">Sees: Healthy pullback to support in overall uptrend, buying opportunity.</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-orange-700 mb-2">1-Hour Chart (Intraday Trader)</h4>
                <div className="font-mono text-xs bg-slate-100 p-3 rounded mb-3">
                  <pre className="text-slate-600">{`Range-bound
●──●
╲╱
●──●

"Trade the range, scalp bounces"`}</pre>
                </div>
                <p className="text-xs text-slate-700">Sees: Sideways consolidation, trading between support & resistance intraday.</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-red-700 mb-2">5-Minute Chart (Scalper)</h4>
                <div className="font-mono text-xs bg-slate-100 p-3 rounded mb-3">
                  <pre className="text-slate-600">{`Choppy, unclear
●╲ ╱●
 ●●
╱ ●╲

"Wait for clear signal"`}</pre>
                </div>
                <p className="text-xs text-slate-700">Sees: Noise, whipsaws, no clear direction. Difficult to trade profitably.</p>
              </div>
            </div>
            <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-sm text-slate-700">
                <strong>💡 Key Insight:</strong> Same stock, same moment in time, FOUR DIFFERENT PERSPECTIVES. The timeframe you choose dictates your trading strategy, holding period, and profit potential. Pick the wrong one, and you'll trade against yourself.
              </p>
            </div>
          </div>
        </div>

        {/* Trading Timeframes */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Four Main Trading Timeframes</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">⚡</span>
                <h3 className="text-xl font-semibold text-red-900">1. Scalping (1-5 Minute Charts)</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-slate-700 mb-4">
                    Ultra-short-term trading. Hold positions for seconds to minutes. Goal: capture tiny 0.1-0.5% moves repeatedly. High frequency, high stress.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Characteristics:</p>
                    <ul className="text-xs text-slate-600 space-y-2">
                      <li>• <strong>Holding time:</strong> 30 seconds to 5 minutes</li>
                      <li>• <strong>Target:</strong> ₹5-₹20 per lot (0.1-0.5%)</li>
                      <li>• <strong>Trades/day:</strong> 20-100+ trades</li>
                      <li>• <strong>Charts used:</strong> 1-min, 3-min, 5-min</li>
                      <li>• <strong>Tools:</strong> Level 2 data, order flow, time & sales</li>
                      <li>• <strong>Markets:</strong> High-volume stocks, Nifty/BankNifty futures</li>
                    </ul>
                  </div>
                  <div className="bg-red-100 rounded-lg p-4">
                    <p className="text-xs font-semibold text-red-900 mb-2">Pros & Cons:</p>
                    <p className="text-xs text-green-700 mb-2"><strong>Pros:</strong> Quick profits, no overnight risk, many opportunities</p>
                    <p className="text-xs text-red-700"><strong>Cons:</strong> Extreme stress, high brokerage costs, requires full-time focus, low per-trade profit</p>
                  </div>
                </div>
                <div>
                  <div className="bg-slate-100 rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Typical Scalping Setup:</p>
                    <div className="font-mono text-xs">
                      <pre className="text-slate-600">{`5-MINUTE CHART:
10:15  ₹1005 ● Entry (breakout)
10:20  ₹1012 ● Exit (+₹7)
       ──────
Duration: 5 minutes
Profit: 0.7% = ₹350/lot

Repeat 30x per day
Daily target: ₹10,000

Need: High focus, fast execution,
      low brokerage plan`}</pre>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Who Should Scalp:</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>✅ Full-time traders with discipline</li>
                      <li>✅ Fast decision-makers (no hesitation)</li>
                      <li>✅ High capital (₹5L+ to make worthwhile)</li>
                      <li>✅ Access to direct market access (DMA)</li>
                      <li>❌ Part-time traders or beginners</li>
                      <li>❌ Emotional traders (will overtrade)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📊</span>
                <h3 className="text-xl font-semibold text-orange-900">2. Intraday Trading (15-Minute to 1-Hour Charts)</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-slate-700 mb-4">
                    Most popular style in India. Hold positions for 1-6 hours within market hours. All positions squared off by 3:15 PM. Balance between opportunity and manageability.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Characteristics:</p>
                    <ul className="text-xs text-slate-600 space-y-2">
                      <li>• <strong>Holding time:</strong> 1-6 hours</li>
                      <li>• <strong>Target:</strong> 1-3% per trade (₹50-₹150/lot)</li>
                      <li>• <strong>Trades/day:</strong> 2-8 trades</li>
                      <li>• <strong>Charts used:</strong> 15-min, 30-min, 1-hour</li>
                      <li>• <strong>Tools:</strong> Indicators (VWAP, RSI, MACD), volume profile</li>
                      <li>• <strong>Markets:</strong> Liquid stocks, index futures, options</li>
                    </ul>
                  </div>
                  <div className="bg-orange-100 rounded-lg p-4">
                    <p className="text-xs font-semibold text-orange-900 mb-2">Pros & Cons:</p>
                    <p className="text-xs text-green-700 mb-2"><strong>Pros:</strong> No overnight risk, good profit potential, manageable pace, works part-time</p>
                    <p className="text-xs text-red-700"><strong>Cons:</strong> Requires market hours availability, moderate brokerage, pressure to close by day-end</p>
                  </div>
                </div>
                <div>
                  <div className="bg-slate-100 rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Typical Intraday Setup:</p>
                    <div className="font-mono text-xs">
                      <pre className="text-slate-600">{`15-MINUTE CHART:
10:00  Open at ₹1000
11:30  Entry ₹1015 (breakout)
       Stop: ₹1005
       Target: ₹1045
2:45   Exit ₹1042 (+₹27)
       ──────
Duration: 3.25 hours
Profit: 2.7% = ₹1,350/lot

1-2 trades per day
Daily target: ₹2,000-₹3,000

Need: Morning analysis,
      active monitoring`}</pre>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Who Should Trade Intraday:</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>✅ Part-time traders (available during market hours)</li>
                      <li>✅ Balanced risk-reward seekers</li>
                      <li>✅ Moderate capital (₹1L-₹5L)</li>
                      <li>✅ Beginners learning technical analysis</li>
                      <li>✅ Those who can't handle overnight stress</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📈</span>
                <h3 className="text-xl font-semibold text-green-900">3. Swing Trading (Daily Charts)</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-slate-700 mb-4">
                    Ideal for working professionals. Hold positions for 2-10 days, capturing larger price swings. Only need to check charts once daily after market close.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Characteristics:</p>
                    <ul className="text-xs text-slate-600 space-y-2">
                      <li>• <strong>Holding time:</strong> 2-10 days</li>
                      <li>• <strong>Target:</strong> 5-15% per trade</li>
                      <li>• <strong>Trades/month:</strong> 5-15 trades</li>
                      <li>• <strong>Charts used:</strong> Daily, 4-hour</li>
                      <li>• <strong>Tools:</strong> Chart patterns, trendlines, moving averages</li>
                      <li>• <strong>Markets:</strong> Stocks, futures, positional options</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 rounded-lg p-4">
                    <p className="text-xs font-semibold text-green-900 mb-2">Pros & Cons:</p>
                    <p className="text-xs text-green-700 mb-2"><strong>Pros:</strong> Suits working professionals, lower stress, bigger per-trade profit, minimal time commitment</p>
                    <p className="text-xs text-red-700"><strong>Cons:</strong> Overnight risk (gap ups/downs), requires patience, fewer opportunities</p>
                  </div>
                </div>
                <div>
                  <div className="bg-slate-100 rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Typical Swing Trade:</p>
                    <div className="font-mono text-xs">
                      <pre className="text-slate-600">{`DAILY CHART:
Day 1:  Entry ₹1000 (breakout)
        Stop: ₹950
        Target: ₹1150
Day 5:  Hold through consolidation
Day 7:  Exit ₹1135 (+₹135)
        ──────
Duration: 7 days
Profit: 13.5% = ₹6,750/lot

2-3 trades per month
Monthly target: ₹20,000-₹30,000

Need: Daily EOD chart check,
      patience to hold`}</pre>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Who Should Swing Trade:</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>✅ Working professionals (9-6 job)</li>
                      <li>✅ Patient traders (can hold 1 week+)</li>
                      <li>✅ Moderate to high capital (₹2L+)</li>
                      <li>✅ Those who want better R:R ratios</li>
                      <li>✅ Comfortable with overnight exposure</li>
                      <li>❌ Impatient traders who check hourly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📉</span>
                <h3 className="text-xl font-semibold text-blue-900">4. Position Trading (Weekly/Monthly Charts)</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-slate-700 mb-4">
                    Long-term technical trading. Hold positions for weeks to months, riding major trends. Closest to investing, but with technical entry/exit rules.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Characteristics:</p>
                    <ul className="text-xs text-slate-600 space-y-2">
                      <li>• <strong>Holding time:</strong> 4 weeks to 6 months</li>
                      <li>• <strong>Target:</strong> 30-100%+ per trade</li>
                      <li>• <strong>Trades/year:</strong> 10-30 trades</li>
                      <li>• <strong>Charts used:</strong> Weekly, monthly</li>
                      <li>• <strong>Tools:</strong> Major S/R, long-term MAs, fundamentals</li>
                      <li>• <strong>Markets:</strong> Stocks (equity delivery), leaps</li>
                    </ul>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-4">
                    <p className="text-xs font-semibold text-blue-900 mb-2">Pros & Cons:</p>
                    <p className="text-xs text-green-700 mb-2"><strong>Pros:</strong> Least stressful, huge profit potential, minimal time needed, tax-efficient (LTCG)</p>
                    <p className="text-xs text-red-700"><strong>Cons:</strong> Requires large capital, high drawdowns, very few trades, need conviction</p>
                  </div>
                </div>
                <div>
                  <div className="bg-slate-100 rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Typical Position Trade:</p>
                    <div className="font-mono text-xs">
                      <pre className="text-slate-600">{`WEEKLY CHART:
Jan:    Entry ₹1000 (trend start)
        Stop: ₹850
        Target: ₹1500
Feb-Mar: Hold through volatility
Apr:    Exit ₹1420 (+₹420)
        ──────
Duration: 12 weeks
Profit: 42% = ₹42,000/lot

1-2 trades per quarter
Yearly target: ₹2,00,000+

Need: Strong conviction,
      ability to ignore noise`}</pre>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Who Should Position Trade:</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>✅ Long-term investors with TA edge</li>
                      <li>✅ High capital (₹10L+)</li>
                      <li>✅ Very patient (can hold 6 months)</li>
                      <li>✅ Don't need frequent action</li>
                      <li>✅ Combine fundamentals + technicals</li>
                      <li>❌ Active traders who need excitement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Timeframe Analysis */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Multi-Timeframe Analysis: The Pro's Secret</h2>
          <p className="text-lg text-slate-700 mb-6">
            Never trade off a single timeframe. Always analyze at least THREE timeframes: higher (trend), trading (entry), lower (precision). This "top-down" approach dramatically increases win rate.
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 mb-6">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">The 3-Timeframe Rule</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-2">1. Higher Timeframe (Trend)</h4>
                <p className="text-xs text-slate-700 mb-3">Determines overall market direction. Trade WITH this trend, not against it.</p>
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-xs font-semibold text-slate-900 mb-1">If you trade:</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• 15-min → Check daily</li>
                    <li>• 1-hour → Check weekly</li>
                    <li>• Daily → Check monthly</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-pink-700 mb-2">2. Trading Timeframe (Entry)</h4>
                <p className="text-xs text-slate-700 mb-3">Your main chart. Identifies setups, entry signals, and immediate support/resistance.</p>
                <div className="bg-pink-50 rounded p-3">
                  <p className="text-xs font-semibold text-slate-900 mb-1">Your primary chart:</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Intraday: 15-30 min</li>
                    <li>• Swing: Daily</li>
                    <li>• Position: Weekly</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">3. Lower Timeframe (Precision)</h4>
                <p className="text-xs text-slate-700 mb-3">Fine-tunes exact entry, stop loss placement. Improves risk-reward by getting better fills.</p>
                <div className="bg-blue-50 rounded p-3">
                  <p className="text-xs font-semibold text-slate-900 mb-1">If you trade:</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• 15-min → Check 5-min</li>
                    <li>• Daily → Check 1-hour</li>
                    <li>• Weekly → Check daily</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Example: Swing Trade Setup (Top-Down Analysis)</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3">Step 1: Weekly Chart (Trend)</h4>
                  <div className="font-mono text-xs bg-slate-100 p-3 rounded mb-3">
                    <pre className="text-slate-600">{`      ●
     ↗
    ●    Clear
   ↗     UPTREND
  ●
 ↗
●

Above 200 MA
Higher highs/lows`}</pre>
                  </div>
                  <p className="text-xs text-green-700 font-semibold">✅ DECISION: Only look for LONG setups</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3">Step 2: Daily Chart (Entry)</h4>
                  <div className="font-mono text-xs bg-slate-100 p-3 rounded mb-3">
                    <pre className="text-slate-600">{`  ●   Breakout!
 ↗ ╲
●   ● Pullback
     ↗ to 50 EMA
    ●
   ↗
  ●

Bullish engulfing`}</pre>
                  </div>
                  <p className="text-xs text-green-700 font-semibold">✅ DECISION: Setup valid, wait for precise entry</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3">Step 3: 1-Hour Chart (Precision)</h4>
                  <div className="font-mono text-xs bg-slate-100 p-3 rounded mb-3">
                    <pre className="text-slate-600">{`    ● Entry
   ↗  ₹1015
  ●
 ↗
●─── 50 EMA
Stop: ₹995
Target: ₹1075

R:R = 1:3`}</pre>
                  </div>
                  <p className="text-xs text-green-700 font-semibold">✅ DECISION: Enter at ₹1015, stop ₹995</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Complete Trade Logic:</h4>
                <ol className="text-sm text-slate-700 space-y-2">
                  <li><strong>1. Weekly uptrend</strong> confirms ONLY take long trades (no shorts).</li>
                  <li><strong>2. Daily pullback to 50 EMA</strong> + bullish engulfing = Entry setup forms.</li>
                  <li><strong>3. 1-hour chart shows exact bounce</strong> off support = Precise entry at ₹1015.</li>
                  <li><strong>4. Stop below hourly low</strong> (₹995) = Tight 2% risk.</li>
                  <li><strong>5. Target daily resistance</strong> (₹1075) = 6% reward, 1:3 R:R.</li>
                </ol>
                <div className="mt-4 bg-green-100 rounded p-4">
                  <p className="text-sm font-semibold text-green-900">
                    This is a HIGH-PROBABILITY TRADE: All three timeframes aligned (weekly trend + daily setup + hourly entry = 70%+ win rate).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-4">Example: Conflicting Timeframes (NO TRADE)</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3">Weekly Chart (Trend)</h4>
                  <div className="font-mono text-xs bg-slate-100 p-3 rounded mb-3">
                    <pre className="text-slate-600">{`●
 ╲
  ●    Clear
   ╲   DOWNTREND
    ●
     ╲
      ●

Below 200 MA`}</pre>
                  </div>
                  <p className="text-xs text-red-700 font-semibold">Bearish trend</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3">Daily Chart (Entry)</h4>
                  <div className="font-mono text-xs bg-slate-100 p-3 rounded mb-3">
                    <pre className="text-slate-600">{`    ●
   ↗  Bullish
  ●   candle?
 ↗
●

Looks bullish`}</pre>
                  </div>
                  <p className="text-xs text-green-700 font-semibold">Bullish signal appears</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3">Analysis</h4>
                  <div className="font-mono text-xs bg-slate-100 p-3 rounded mb-3">
                    <pre className="text-slate-600">{`Weekly: DOWN
Daily: UP
───────
CONFLICT!

Counter-trend
trade`}</pre>
                  </div>
                  <p className="text-xs text-red-700 font-semibold">❌ NO TRADE: Timeframes conflict</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Why NO TRADE:</h4>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>• <strong>Weekly downtrend</strong> = Overall bearish pressure.</li>
                  <li>• <strong>Daily bullish signal</strong> = Short-term bounce (dead cat bounce).</li>
                  <li>• <strong>Conflict = Counter-trend trade</strong> = Low probability, high risk.</li>
                  <li>• <strong>Professional rule:</strong> Never fight the higher timeframe trend.</li>
                  <li>• <strong>Better strategy:</strong> Wait for weekly to flip bullish, OR take short on daily rejection.</li>
                </ul>
                <div className="mt-4 bg-red-100 rounded p-4">
                  <p className="text-sm font-semibold text-red-900">
                    This is a LOW-PROBABILITY TRADE: Timeframes misaligned = 40-50% win rate at best. Skip it and wait for alignment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Choosing Your Timeframe */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Choose Your Trading Timeframe</h2>
          <p className="text-lg text-slate-700 mb-6">
            Your timeframe should match your: (1) Available time, (2) Capital size, (3) Personality, (4) Risk tolerance. Wrong match = guaranteed failure.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Decision Matrix</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-slate-200">
                    <th className="p-3 text-left">Factor</th>
                    <th className="p-3 text-left">Scalping</th>
                    <th className="p-3 text-left">Intraday</th>
                    <th className="p-3 text-left">Swing</th>
                    <th className="p-3 text-left">Position</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Time Needed</td>
                    <td className="p-3">6-8 hrs/day</td>
                    <td className="p-3">3-4 hrs/day</td>
                    <td className="p-3">30 min/day</td>
                    <td className="p-3">1 hr/week</td>
                  </tr>
                  <tr className="border-b bg-slate-50">
                    <td className="p-3 font-semibold">Min Capital</td>
                    <td className="p-3">₹5L+</td>
                    <td className="p-3">₹1L-₹5L</td>
                    <td className="p-3">₹2L-₹10L</td>
                    <td className="p-3">₹10L+</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Stress Level</td>
                    <td className="p-3 text-red-600">Very High</td>
                    <td className="p-3 text-orange-600">High</td>
                    <td className="p-3 text-yellow-600">Moderate</td>
                    <td className="p-3 text-green-600">Low</td>
                  </tr>
                  <tr className="border-b bg-slate-50">
                    <td className="p-3 font-semibold">Win Rate</td>
                    <td className="p-3">45-55%</td>
                    <td className="p-3">50-60%</td>
                    <td className="p-3">55-65%</td>
                    <td className="p-3">40-50%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Avg R:R</td>
                    <td className="p-3">1:1 to 1:1.5</td>
                    <td className="p-3">1:2 to 1:3</td>
                    <td className="p-3">1:3 to 1:5</td>
                    <td className="p-3">1:5 to 1:10+</td>
                  </tr>
                  <tr className="border-b bg-slate-50">
                    <td className="p-3 font-semibold">Best For</td>
                    <td className="p-3">Full-time pros</td>
                    <td className="p-3">Active traders</td>
                    <td className="p-3">Working professionals</td>
                    <td className="p-3">Patient investors</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Personality</td>
                    <td className="p-3">Fast, disciplined</td>
                    <td className="p-3">Active, focused</td>
                    <td className="p-3">Patient, analytical</td>
                    <td className="p-3">Very patient, conviction-driven</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-300">
              <h4 className="font-semibold text-yellow-900 mb-3">⚠️ Common Mistakes</h4>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• Trading intraday charts while having a full-time job = Disaster</li>
                <li>• Swing trading with small capital (₹50K) = Poor returns</li>
                <li>• Scalping without full attention = Account blown</li>
                <li>• Choosing timeframe based on "what looks easiest" = Wrong fit</li>
                <li>• Switching timeframes mid-trade because you're losing = Recipe for ruin</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-300">
              <h4 className="font-semibold text-green-900 mb-3">✅ Pro Tips</h4>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• Start with swing trading (daily charts) = Easiest to learn</li>
                <li>• Match timeframe to your lifestyle, not the other way around</li>
                <li>• Use paper trading to test timeframe before going live</li>
                <li>• Can trade multiple timeframes, but keep them separate (different accounts/strategies)</li>
                <li>• Stick to ONE timeframe for 6 months before trying others</li>
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
              <p className="text-lg"><strong>Same stock, different timeframes = different perspectives.</strong> Choose the timeframe that fits YOUR lifestyle and capital.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg"><strong>Always use 3 timeframes:</strong> Higher (trend direction), Trading (entry setup), Lower (precision entry).</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg"><strong>Never fight the higher timeframe.</strong> Weekly downtrend? Don't long on daily. Weekly uptrend? Don't short on daily.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg"><strong>Best for beginners:</strong> Swing trading (daily charts). Manageable pace, good R:R, suits part-time schedule.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg"><strong>Timeframe alignment = high probability.</strong> All three timeframes agree? Take the trade. Conflict? Skip it.</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Apply Risk Management to Your Timeframe</h2>
          <p className="text-slate-600 mb-6">
            You know WHEN to trade (timeframes). Now learn HOW MUCH to risk per trade, where to place stops, and how to size positions properly—critical for survival.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/technical-analysis/risk-money-management" className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition">
              Next: Risk & Money Management in TA →
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
