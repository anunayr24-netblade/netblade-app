import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Target, Shield, TrendingUp, AlertCircle } from 'lucide-react';

export default function SupportResistance() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/technical-analysis/support-resistance' } });
    }
  }, [navigate]);

  const topics = [
    { id: 'fundamentals', title: 'Support & Resistance Fundamentals', icon: Target },
    { id: 'identification', title: 'Identifying Key Levels', icon: Shield },
    { id: 'role-reversal', title: 'Role Reversal Concept', icon: TrendingUp },
    { id: 'trading-strategies', title: 'Trading S/R Strategies', icon: AlertCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <Link to="/technical-analysis" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 mb-6 sm:mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Back to Technical Analysis
        </Link>

        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Support & Resistance
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl">
            Support and resistance are the foundations of technical analysis. Master these, and you'll know exactly where to enter, exit, and place stops. Miss these, and you'll struggle forever. They represent price levels where supply and demand create turning points.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Quick Navigation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <a
                  key={topic.id}
                  href={`#${topic.id}`}
                  className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg hover:from-cyan-100 hover:to-blue-100 transition-all group"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-base font-medium text-slate-800">{topic.title}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 sm:space-y-12">

        {/* Core Concepts */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Fundamentals</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Support</h3>
              <p className="text-sm text-slate-700 mb-4">
                A price level where buying interest is strong enough to overcome selling pressure, preventing price from falling further. Think of it as a "floor" that price bounces off repeatedly.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-xs font-semibold text-slate-900 mb-2">Why Support Forms:</p>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li>• <strong>Previous lows:</strong> Traders remember these prices as "good value"</li>
                  <li>• <strong>Round numbers:</strong> Psychological levels (₹1000, ₹500, ₹100)</li>
                  <li>• <strong>Moving averages:</strong> Dynamic support (50 EMA, 200 EMA)</li>
                  <li>• <strong>Trendlines:</strong> Connecting higher lows in uptrends</li>
                  <li>• <strong>Fibonacci levels:</strong> 38.2%, 50%, 61.8% retracements</li>
                </ul>
              </div>
              <div className="font-mono text-xs bg-slate-100 p-3 rounded">
                <pre className="text-slate-600">{`Price bounces off support:
₹1100      ●
          ↗
₹1050    ●
        ↗
₹1000  ●───●───●  SUPPORT
       ↑   ↑   ↑
     Buyers defend this level

Each bounce = Support strengthens`}</pre>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-xl font-semibold text-red-900 mb-4">Resistance</h3>
              <p className="text-sm text-slate-700 mb-4">
                A price level where selling pressure is strong enough to overcome buying interest, preventing price from rising further. Think of it as a "ceiling" that price rejects repeatedly.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-xs font-semibold text-slate-900 mb-2">Why Resistance Forms:</p>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li>• <strong>Previous highs:</strong> Traders remember these as "expensive"</li>
                  <li>• <strong>Round numbers:</strong> Same psychological levels</li>
                  <li>• <strong>Moving averages:</strong> In downtrends, MAs become resistance</li>
                  <li>• <strong>Trendlines:</strong> Connecting lower highs in downtrends</li>
                  <li>• <strong>Breakout failures:</strong> Failed attempts create strong resistance</li>
                </ul>
              </div>
              <div className="font-mono text-xs bg-slate-100 p-3 rounded">
                <pre className="text-slate-600">{`Price rejects at resistance:
₹1100  ●───●───●  RESISTANCE
       ↓   ↓   ↓
     Sellers defend this level
₹1050    ●
          ↘
₹1000      ●

Each rejection = Resistance strengthens`}</pre>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <p className="text-sm text-slate-700">
              <strong>💡 Key Principle:</strong> Support and resistance are not exact prices—they're ZONES. Allow for ±1-2% wiggle room. A stock with support at ₹1000 might dip to ₹990 before bouncing. It's still valid support.
            </p>
          </div>
        </div>

        {/* Role Reversal */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Role Reversal: The Most Important Concept</h2>
          <p className="text-lg text-slate-700 mb-6">
            Once broken, support becomes resistance, and resistance becomes support. This "polarity principle" is the backbone of breakout trading and explains why false breakouts fail so spectacularly.
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Scenario 1: Resistance Becomes Support (Bullish)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-slate-700 mb-4">
                    When price breaks above resistance and holds, that level flips to become support. Why? Previous sellers (who missed the breakout) now become buyers on any pullback to that level.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Psychology Behind the Flip:</p>
                    <ul className="text-xs text-slate-600 space-y-2">
                      <li>• <strong>Before breakout:</strong> Sellers at ₹1100 (resistance) happy to exit</li>
                      <li>• <strong>After breakout:</strong> Those same sellers regret selling, want back in</li>
                      <li>• <strong>Pullback occurs:</strong> Former sellers now aggressively buy at ₹1100</li>
                      <li>• <strong>Result:</strong> Old resistance = New support</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 rounded p-4">
                    <p className="text-xs font-semibold text-green-900 mb-2">Trading Strategy:</p>
                    <p className="text-xs text-slate-700">
                      After breakout, wait for pullback to old resistance. Buy when price holds above it with bullish candle. This is THE highest-probability trade setup in technical analysis.
                    </p>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <div className="font-mono text-xs">
                    <pre className="text-slate-600">{`BEFORE BREAKOUT:
₹1150
₹1100  ●───●───●  Resistance
       ↓   ↓   ↓  (sellers active)
₹1050    ●
        ↗
₹1000  ●

AFTER BREAKOUT:
₹1200        ●
            ↗
₹1150      ●    Breakout!
          ↗ ↘
₹1100  ●─────●  Old resistance
   ↑ Pullback ↑ = NEW SUPPORT
   Former sellers now buyers!

₹1050          ●  Next leg up
              ↗

This pullback entry has 70%+ win rate`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Scenario 2: Support Becomes Resistance (Bearish)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-slate-700 mb-4">
                    When price breaks below support and stays down, that level flips to become resistance. Why? Previous buyers (now trapped with losses) desperately sell on any rally back to that level to "break even."
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Psychology Behind the Flip:</p>
                    <ul className="text-xs text-slate-600 space-y-2">
                      <li>• <strong>Before breakdown:</strong> Buyers at ₹1000 (support) accumulated</li>
                      <li>• <strong>After breakdown:</strong> Those buyers are trapped, underwater</li>
                      <li>• <strong>Rally back occurs:</strong> Trapped buyers sell to "get out even"</li>
                      <li>• <strong>Result:</strong> Old support = New resistance</li>
                    </ul>
                  </div>
                  <div className="bg-red-100 rounded p-4">
                    <p className="text-xs font-semibold text-red-900 mb-2">Trading Strategy:</p>
                    <p className="text-xs text-slate-700">
                      After breakdown, wait for rally back to old support. Short when price fails below it with bearish candle. Trapped longs will panic sell, accelerating decline.
                    </p>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <div className="font-mono text-xs">
                    <pre className="text-slate-600">{`BEFORE BREAKDOWN:
₹1050      ●
          ↗
₹1000  ●───●───●  Support
        ↑   ↑   ↑ (buyers active)
₹950     ●
        ↗
₹900   ●

AFTER BREAKDOWN:
₹1000  ●─────●  Old support
   ↓ Rally  ↓  = NEW RESISTANCE
   Trapped buyers sell!
₹950      ●    ↘
          ↘     ●  Breakdown!
₹900       ●
        
₹850          ●  Next leg down
             ↘

This short entry catches panic selling`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Trading the Role Reversal</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Bullish Role Reversal Setup</h4>
                  <ol className="text-xs text-slate-700 space-y-2">
                    <li><strong>1. Identify resistance:</strong> Level rejected 2-3 times</li>
                    <li><strong>2. Breakout:</strong> Price closes above resistance + volume</li>
                    <li><strong>3. Wait for pullback:</strong> Price returns to old resistance (now support)</li>
                    <li><strong>4. Entry signal:</strong> Bullish candle pattern + hold above level</li>
                    <li><strong>5. Stop loss:</strong> 2-3% below the flipped level</li>
                    <li><strong>6. Target:</strong> Next resistance or measured move</li>
                  </ol>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-2">Bearish Role Reversal Setup</h4>
                  <ol className="text-xs text-slate-700 space-y-2">
                    <li><strong>1. Identify support:</strong> Level defended 2-3 times</li>
                    <li><strong>2. Breakdown:</strong> Price closes below support + volume</li>
                    <li><strong>3. Wait for bounce:</strong> Price rallies back to old support (now resistance)</li>
                    <li><strong>4. Entry signal:</strong> Bearish candle pattern + rejection</li>
                    <li><strong>5. Stop loss:</strong> 2-3% above the flipped level</li>
                    <li><strong>6. Target:</strong> Next support or measured move</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Support & Resistance */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Types of Support & Resistance</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">1. Horizontal Support/Resistance (Static)</h3>
              <p className="text-sm text-slate-700 mb-4">
                The most obvious and reliable. Price levels where historical turning points occurred. Simple concept: price has memory.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-xs font-semibold text-slate-900 mb-2">How to Identify:</p>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li>• Mark swing highs (resistance) & swing lows (support)</li>
                    <li>• Look for 2+ touches of same level</li>
                    <li>• More touches = stronger level</li>
                    <li>• Draw horizontal lines across these points</li>
                    <li>• Use zones, not exact prices</li>
                  </ul>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <div className="font-mono text-xs">
                    <pre className="text-slate-600">{`₹1100  ●───●───●───●  Strong resistance
       ↓   ↓   ↓   ↓  (4 touches)
₹1050    ●   ●   ●
        ↗   ↗   ↗
₹1000  ●───●───●───●  Strong support
       ↑   ↑   ↑   ↑  (4 touches)

More touches = More reliable
When broken = Big move likely`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-4">2. Trendline Support/Resistance (Dynamic)</h3>
              <p className="text-sm text-slate-700 mb-4">
                Diagonal lines connecting swing points. They move with price, providing dynamic support/resistance as trend progresses.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-xs font-semibold text-slate-900 mb-2">Rules for Drawing:</p>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li>• <strong>Uptrend:</strong> Connect 2+ rising lows (creates support line)</li>
                    <li>• <strong>Downtrend:</strong> Connect 2+ falling highs (creates resistance line)</li>
                    <li>• Need minimum 2 touches to draw, 3rd touch validates</li>
                    <li>• More touches = more significant trendline</li>
                    <li>• Break of trendline = warning of trend change</li>
                  </ul>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <div className="font-mono text-xs">
                    <pre className="text-slate-600">{`UPTREND LINE (Support):
        ●
       ↗╲
      ●  ●  Touch 3
     ↗    ╲
    ●      ●  Touch 2
   ↗
  ●  Touch 1 (origin)

Buy when price touches line

DOWNTREND LINE (Resistance):
  ●  Touch 1
   ╲
    ●  Touch 2
     ╲    ╱
      ●  ●  Touch 3
       ╲↙
        ●

Sell when price touches line`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">3. Moving Average Support/Resistance (Dynamic)</h3>
              <p className="text-sm text-slate-700 mb-4">
                MAs act as moving support (in uptrends) or resistance (in downtrends). The 50 and 200 EMAs are most watched.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-xs font-semibold text-slate-900 mb-2">Common MA Levels:</p>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li>• <strong>20 EMA:</strong> Short-term support/resistance</li>
                    <li>• <strong>50 EMA:</strong> Medium-term, most popular for pullback entries</li>
                    <li>• <strong>200 EMA:</strong> Long-term, major support/resistance</li>
                    <li>• In uptrend: Price bounces off MAs (support)</li>
                    <li>• In downtrend: Price rejects at MAs (resistance)</li>
                  </ul>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <div className="font-mono text-xs">
                    <pre className="text-slate-600">{`UPTREND - MA as Support:
      ●      
     ↗╲      Bounces off 50 EMA
    ●  ●     repeatedly
   ↗    ╲    
  ●──────●═══  50 EMA (rising)

Strategy: Buy pullbacks to MA

DOWNTREND - MA as Resistance:
  ●──────●═══  50 EMA (falling)
   ╲    ╱     Rejects at 50 EMA
    ●  ●      repeatedly
     ╲↙
      ●

Strategy: Sell rallies to MA`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">4. Psychological Levels (Round Numbers)</h3>
              <p className="text-sm text-slate-700 mb-4">
                Human psychology creates natural support/resistance at round numbers. Traders place orders at "nice" numbers like ₹1000, ₹500, ₹100.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-xs font-semibold text-slate-900 mb-2">Key Psychological Levels:</p>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li>• Major rounds: ₹1000, ₹500, ₹100 (strongest)</li>
                    <li>• Minor rounds: ₹1050, ₹950, ₹550</li>
                    <li>• Index levels: Nifty 20,000, 19,500, etc.</li>
                    <li>• All-time highs/lows (ATH/ATL)</li>
                    <li>• 52-week highs/lows</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-xs font-semibold text-slate-900 mb-2">Why They Work:</p>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li>• Option strikes cluster at round numbers</li>
                    <li>• Stop losses concentrated at these levels</li>
                    <li>• Limit orders placed at round numbers</li>
                    <li>• Media headlines at milestone levels</li>
                    <li>• Self-fulfilling prophecy (everyone watches)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strength of Levels */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">What Makes Support/Resistance Strong?</h2>
          <p className="text-lg text-slate-700 mb-6">
            Not all S/R levels are equal. Some are minor speed bumps; others are brick walls. Here's how to gauge strength:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Strong S/R Characteristics</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">1.</span>
                  <span><strong>Multiple touches (3+):</strong> More tests without breaking = stronger level. Price respects it.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">2.</span>
                  <span><strong>High volume at level:</strong> Means many participants involved. Institutional activity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">3.</span>
                  <span><strong>Long consolidation time:</strong> Level held for months/years = deeply ingrained in traders' minds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">4.</span>
                  <span><strong>Round numbers:</strong> ₹1000, ₹500 = Psychological significance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">5.</span>
                  <span><strong>Failed breakout history:</strong> Previous attempts to break failed = level reinforced.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">6.</span>
                  <span><strong>Multiple timeframe confluence:</strong> Level significant on daily, weekly, monthly charts.</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-4">Weak S/R Characteristics</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">1.</span>
                  <span><strong>Single touch:</strong> Only tested once = untested, unreliable.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">2.</span>
                  <span><strong>Low volume at level:</strong> Few participants = easy to break.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">3.</span>
                  <span><strong>Recent formation:</strong> Level only days/weeks old = not established.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">4.</span>
                  <span><strong>Arbitrary number:</strong> ₹1,037 has no significance vs ₹1,000.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">5.</span>
                  <span><strong>Already broken recently:</strong> If broken last week, less reliable now.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">6.</span>
                  <span><strong>Only significant on one timeframe:</strong> If only 5-min chart shows it, ignore.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 border-2 border-cyan-200">
            <h4 className="font-semibold text-slate-900 mb-4">Scoring System Example</h4>
            <div className="bg-white rounded-lg p-6">
              <p className="text-sm font-semibold text-slate-900 mb-4">Support at ₹1000 - Strength Analysis:</p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>✅ Round number: +2 points</li>
                <li>✅ Tested 4 times without breaking: +3 points</li>
                <li>✅ High volume at each test: +2 points</li>
                <li>✅ Held for 6 months: +2 points</li>
                <li>✅ Visible on daily & weekly charts: +2 points</li>
                <li>✅ Previous breakout attempt failed: +1 point</li>
              </ul>
              <p className="text-lg font-bold text-green-700 mt-4">
                Total: 12/12 points → VERY STRONG SUPPORT. High-probability buying opportunity if price pulls back here.
              </p>
            </div>
          </div>
        </div>

        {/* Trading Strategies */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Practical Trading Strategies</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Strategy 1: Bounce Trading (Range-Bound)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-semibold text-slate-900 mb-3">Setup:</p>
                  <ul className="text-xs text-slate-700 space-y-2">
                    <li>• Stock ranging between clear S/R for 3+ weeks</li>
                    <li>• Low volatility (tight Bollinger Bands)</li>
                    <li>• Multiple touches of support & resistance</li>
                  </ul>
                  <p className="text-sm font-semibold text-slate-900 mt-4 mb-2">Execution:</p>
                  <ul className="text-xs text-slate-700 space-y-2">
                    <li>• <strong>Buy:</strong> Near support + bullish candlestick (hammer, engulfing)</li>
                    <li>• <strong>Sell:</strong> Near resistance (take profit)</li>
                    <li>• <strong>Stop:</strong> 2% below support</li>
                    <li>• <strong>Target:</strong> Resistance (opposite side of range)</li>
                    <li>• <strong>Exit plan:</strong> If range breaks, exit ALL trades immediately</li>
                  </ul>
                </div>
                <div className="bg-slate-100 rounded-lg p-4 font-mono text-xs">
                  <pre className="text-slate-600">{`₹1100 ●──●──●──●  Resistance
      ╲╱  ╲╱  ╲╱  (SELL zone)
      ●    ●    ●
     ╱    ╱    ╱
₹1000 ●──●──●──●  Support
                  (BUY zone)

Trade the range:
Buy at ₹1000-₹1010
Sell at ₹1090-₹1100
Repeat until breakout

Risk: 2%
Reward: 8-9%
R:R = 1:4+`}</pre>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Strategy 2: Breakout Trading</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-semibold text-slate-900 mb-3">Setup:</p>
                  <ul className="text-xs text-slate-700 space-y-2">
                    <li>• Strong resistance tested multiple times</li>
                    <li>• Consolidation near resistance (coiling)</li>
                    <li>• Volume declining during consolidation</li>
                  </ul>
                  <p className="text-sm font-semibold text-slate-900 mt-4 mb-2">Execution:</p>
                  <ul className="text-xs text-slate-700 space-y-2">
                    <li>• <strong>Entry:</strong> Close above resistance + volume 50%+ above average</li>
                    <li>• <strong>Confirmation:</strong> Next day stays above breakout level</li>
                    <li>• <strong>Stop:</strong> Just below breakout candle low (or old resistance)</li>
                    <li>• <strong>Target:</strong> Height of consolidation added to breakout point</li>
                    <li>• <strong>Best practice:</strong> Scale in—half position on breakout, half on pullback</li>
                  </ul>
                </div>
                <div className="bg-slate-100 rounded-lg p-4 font-mono text-xs">
                  <pre className="text-slate-600">{`BEFORE:
₹1100  ●───●───●  Resistance
       ↓   ↓   ↓  (tested 4 times)
       ●   ●   ●
      ╱   ╱   ╱  Consolidation
     ●───●───●   (building energy)

BREAKOUT:
₹1150        ●  Target
            ↗
₹1120      ●    Breakout candle
          ↗     (high volume!)
₹1100  ●───────  Old resistance
   Stop below   = NEW SUPPORT

Entry: ₹1105
Stop: ₹1090
Target: ₹1150
Risk: ₹15, Reward: ₹45 (1:3)`}</pre>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">Strategy 3: False Breakout Trap (Advanced)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-semibold text-slate-900 mb-3">Setup:</p>
                  <ul className="text-xs text-slate-700 space-y-2">
                    <li>• Price breaks resistance but on LOW volume</li>
                    <li>• Fails to hold above resistance (closes back below)</li>
                    <li>• Creates "bull trap" (retail chasing, smart money selling)</li>
                  </ul>
                  <p className="text-sm font-semibold text-slate-900 mt-4 mb-2">Execution:</p>
                  <ul className="text-xs text-slate-700 space-y-2">
                    <li>• <strong>Entry:</strong> Short when price closes back below resistance</li>
                    <li>• <strong>Logic:</strong> Trapped longs will panic sell, accelerating decline</li>
                    <li>• <strong>Stop:</strong> Above false breakout high</li>
                    <li>• <strong>Target:</strong> Previous support or measured move down</li>
                    <li>• <strong>Risk:</strong> High-skill trade. Don't attempt until experienced.</li>
                  </ul>
                </div>
                <div className="bg-slate-100 rounded-lg p-4 font-mono text-xs">
                  <pre className="text-slate-600">{`₹1120  ●  False breakout
       ╱ ↘ (low volume)
₹1100 ●───●●  Resistance
      ↓   ╲╲
₹1080      ●  Close below
            ╲ = TRAP!
₹1060       ●
             ╲ Trapped longs
₹1040        ● panic sell
              ↘
₹1020          ● Target

Entry: ₹1095 (below resistance)
Stop: ₹1125
Target: ₹1020
Risk: ₹30, Reward: ₹75 (1:2.5)`}</pre>
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
              <p className="text-lg"><strong>Support = Buying pressure, Resistance = Selling pressure.</strong> Price levels where supply/demand imbalances occur.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg"><strong>Role reversal is key:</strong> Broken resistance becomes support. Broken support becomes resistance. Trade the flip.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg"><strong>Strength matters:</strong> Multiple touches + high volume + time = strong S/R. Single touch = weak, unreliable.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg"><strong>Zones, not lines:</strong> Allow ±1-2% wiggle room. Exact prices are myths.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg"><strong>Volume confirms breakouts.</strong> No volume = fake breakout (trap). High volume = real move.</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Master Timeframes Next</h2>
          <p className="text-slate-600 mb-6">
            You know WHERE price turns (S/R). Now learn WHEN to trade by mastering multiple timeframes and choosing the right one for your style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/technical-analysis/timeframes" className="px-8 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition">
              Next: Timeframes & Multi-Timeframe Analysis →
            </Link>
            <Link to="/technical-analysis" className="px-8 py-3 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition">
              Back to Course Overview
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
