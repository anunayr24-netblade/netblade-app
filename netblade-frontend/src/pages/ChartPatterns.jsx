import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, TrendingUp, TrendingDown, Minus, Triangle } from 'lucide-react';

export default function ChartPatterns() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/technical-analysis/chart-patterns' } });
    }
  }, [navigate]);

  const topics = [
    { id: 'why-patterns-work', title: 'Why Chart Patterns Work', icon: Triangle },
    { id: 'reversal-patterns', title: 'Reversal Patterns', icon: TrendingDown },
    { id: 'continuation-patterns', title: 'Continuation Patterns', icon: TrendingUp },
    { id: 'bilateral-patterns', title: 'Bilateral Patterns', icon: Minus }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <Link to="/technical-analysis" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6 sm:mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Back to Technical Analysis
        </Link>

        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Chart Patterns
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl">
            Chart patterns are formations created by the price movement of a security on a chart. These visual patterns represent the psychology of market participants and can predict future price movements with remarkable accuracy when identified correctly.
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
                  className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:from-purple-100 hover:to-pink-100 transition-all group"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-base font-medium text-slate-800">{topic.title}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 sm:space-y-12">

          {/* Understanding Chart Patterns */}
          <div id="why-patterns-work" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <div className="border-l-4 border-purple-500 pl-4 sm:pl-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Understanding Chart Patterns</h2>
              <div className="space-y-6">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  While candlestick patterns focus on 1-3 candles, chart patterns form over days, weeks, or even months. They represent the cumulative decision-making of thousands of traders and reveal where supply and demand will likely shift dramatically.
                </p>
            
            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Why Chart Patterns Work</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">1. Market Memory</h4>
                  <p className="text-sm text-slate-600">
                    Traders remember previous support/resistance levels. When price returns to these levels, similar behavior repeats. This creates predictable patterns.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">2. Self-Fulfilling Prophecy</h4>
                  <p className="text-sm text-slate-600">
                    Millions of traders study the same patterns. When everyone sees a "Head and Shoulders" forming, they act on it, making the pattern work.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">3. Human Psychology is Constant</h4>
                  <p className="text-sm text-slate-600">
                    Fear, greed, hope, panic—these emotions drive markets. Patterns capture these emotions visually. What worked in 1920 still works today.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Pattern Categories</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Continuation Patterns</h4>
                  <p className="text-sm text-slate-600 mb-2">Brief pauses before trend resumes</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Flags</li>
                    <li>• Pennants</li>
                    <li>• Triangles (some)</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-2">Reversal Patterns</h4>
                  <p className="text-sm text-slate-600 mb-2">Trend changes direction</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Head & Shoulders</li>
                    <li>• Double Top/Bottom</li>
                    <li>• Triangles (some)</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Bilateral Patterns</h4>
                  <p className="text-sm text-slate-600 mb-2">Could break either way</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Symmetrical Triangles</li>
                    <li>• Rectangles</li>
                    <li>• Ranges</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </div>

        {/* Support & Resistance */}
        <div id="reversal-patterns" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
          <div className="border-l-4 border-green-500 pl-4 sm:pl-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6">Support & Resistance: The Foundation</h2>
            <p className="text-sm sm:text-base text-slate-700 mb-6">
            Before understanding patterns, you must master support and resistance—the most important concepts in technical analysis. Every pattern revolves around these levels.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-l-4 border-green-500 bg-green-50 pl-6 pr-6 py-4 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Support</h3>
              <p className="text-slate-700 mb-4">
                A price level where demand (buying pressure) is strong enough to prevent price from falling further. Think of it as a "floor."
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-slate-900 mb-2">Why Support Forms:</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• <strong>Psychological levels:</strong> Round numbers (₹1000, ₹500)</li>
                  <li>• <strong>Previous lows:</strong> Buyers remember these prices</li>
                  <li>• <strong>Moving averages:</strong> 50-day, 200-day MAs act as support</li>
                  <li>• <strong>Trendlines:</strong> Connecting higher lows in uptrend</li>
                </ul>
              </div>
              <div className="bg-slate-100 rounded-lg p-4 font-mono text-xs">
                <pre className="text-slate-600">{`Price Chart:
₹1100  |     ●
       |    ● ●
₹1050  |   ●   ●
       |  ●     ●
₹1000  | ●───────●───────●  ← Support
       | ↑       ↑       ↑
       | Buyers  Buyers  Buyers
       | defend  defend  defend
       
Support = Floor where demand exceeds supply`}</pre>
              </div>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 pl-6 pr-6 py-4 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Resistance</h3>
              <p className="text-slate-700 mb-4">
                A price level where supply (selling pressure) is strong enough to prevent price from rising further. Think of it as a "ceiling."
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-slate-900 mb-2">Why Resistance Forms:</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• <strong>Psychological levels:</strong> Round numbers</li>
                  <li>• <strong>Previous highs:</strong> Sellers remember these prices</li>
                  <li>• <strong>Moving averages:</strong> In downtrends, MAs become resistance</li>
                  <li>• <strong>Trendlines:</strong> Connecting lower highs in downtrend</li>
                </ul>
              </div>
              <div className="bg-slate-100 rounded-lg p-4 font-mono text-xs">
                <pre className="text-slate-600">{`Price Chart:
₹1100  | ●───────●───────●  ← Resistance
       | ↓       ↓       ↓
       | Sellers Sellers Sellers
       | defend  defend  defend
₹1050  |  ●     ●
       |   ●   ●
₹1000  |    ● ●
       |     ●
       
Resistance = Ceiling where supply exceeds demand`}</pre>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Role Reversal: The Most Important Concept</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-2">Resistance Becomes Support</h4>
                <p className="text-sm text-slate-600 mb-3">
                  When price breaks above resistance and holds, that level flips to become support. Previous sellers (who missed the breakout) now become buyers on the pullback.
                </p>
                <div className="font-mono text-xs bg-slate-50 p-3 rounded">
                  <pre className="text-slate-600">{`₹1150  |       ●──●
       |      ●    ● Breakout!
₹1100  | ●──●          ● ← Pullback
       | ↑ Resistance  ↓ to old
       | became        resistance
       | support!      = support now`}</pre>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-red-700 mb-2">Support Becomes Resistance</h4>
                <p className="text-sm text-slate-600 mb-3">
                  When price breaks below support and stays down, that level flips to become resistance. Previous buyers (now trapped with losses) sell on rallies back to that level.
                </p>
                <div className="font-mono text-xs bg-slate-50 p-3 rounded">
                  <pre className="text-slate-600">{`₹1000  | ●──●          ● ← Rally back
       | ↓ Support     ↑ to old
       | became        support
       | resistance!   = resistance now
₹950   |      ●    ● Breakdown!
       |       ●──●`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trendlines */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Trendlines & Channels</h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-700">
              Trendlines are diagonal support/resistance levels. They connect swing lows (in uptrends) or swing highs (in downtrends) and act as dynamic support/resistance as the trend progresses.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Uptrend Line</h3>
                <p className="text-sm text-slate-700 mb-4">
                  Drawn by connecting two or more swing lows. Each time price touches the line and bounces, the trendline strengthens.
                </p>
                <div className="bg-white rounded-lg p-4 mb-4 font-mono text-xs">
                  <pre className="text-slate-600">{`        ●
       ●↑
      ● ↑
₹1100 ●  ↑ Higher Highs
     ↗   ↑
    ●    ↑
   ↗     ↑
  ●───────●───────● Trendline (Support)
 ↗ Higher Lows
●

Buy on pullback to trendline`}</pre>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                  <p className="text-xs text-slate-700">
                    <strong>Trading Rule:</strong> Buy when price touches trendline + bullish candlestick pattern. Stop loss just below trendline. Trend is intact until line breaks.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h3 className="text-xl font-semibold text-red-900 mb-4">Downtrend Line</h3>
                <p className="text-sm text-slate-700 mb-4">
                  Drawn by connecting two or more swing highs. Each touch acts as resistance where sellers enter.
                </p>
                <div className="bg-white rounded-lg p-4 mb-4 font-mono text-xs">
                  <pre className="text-slate-600">{`●
 ↘ Lower Highs
  ●───────●───────● Trendline (Resistance)
   ↘     ↓
    ●    ↓
     ↘   ↓
₹950  ●  ↓
       ● ↓
        ●↓ Lower Lows
        
Sell on rally to trendline`}</pre>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                  <p className="text-xs text-slate-700">
                    <strong>Trading Rule:</strong> Sell/short when price touches trendline + bearish candlestick pattern. Stop loss just above trendline. Trend is intact until line breaks.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Channels (Parallel Lines)</h3>
              <p className="text-slate-700 mb-4">
                A channel is formed by drawing a parallel line to the trendline. The parallel line connects the opposite swing points (highs in uptrend, lows in downtrend).
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Ascending Channel (Bullish)</h4>
                  <div className="font-mono text-xs bg-slate-50 p-3 rounded mb-3">
                    <pre className="text-slate-600">{`     ●──●──●  Upper trendline (Resistance)
    ↗
   ●      Uptrend
  ↗
 ●──●──●  Lower trendline (Support)

Strategy: Buy at lower line, sell at upper line`}</pre>
                  </div>
                  <p className="text-xs text-slate-600">
                    Works until one of the lines breaks. Breakout direction determines next move.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-2">Descending Channel (Bearish)</h4>
                  <div className="font-mono text-xs bg-slate-50 p-3 rounded mb-3">
                    <pre className="text-slate-600">{` ●──●──●  Upper trendline (Resistance)
  ↘
   ●      Downtrend
    ↘
     ●──●──●  Lower trendline (Support)

Strategy: Sell at upper line, cover at lower line`}</pre>
                  </div>
                  <p className="text-xs text-slate-600">
                    Channel trading is high-probability. Risk-reward is excellent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reversal Patterns */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Reversal Patterns</h2>
          <p className="text-lg text-slate-700 mb-6">
            These patterns signal that the current trend is losing steam and likely to reverse. They form at market tops or bottoms and offer high-reward trading opportunities if caught early.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-red-500 bg-red-50 pl-6 pr-6 py-4 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">1. Head and Shoulders (Bearish Reversal)</h3>
              <p className="text-slate-700 mb-4">
                The most reliable reversal pattern. Forms at market tops after extended uptrends. Represents transition from bullish to bearish control.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-sm font-semibold text-slate-900 mb-2">Pattern Components:</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• <strong>Left Shoulder:</strong> New high in uptrend, then pullback</li>
                      <li>• <strong>Head:</strong> Price rallies to even higher high, then falls</li>
                      <li>• <strong>Right Shoulder:</strong> Weaker rally (doesn't reach Head), falls again</li>
                      <li>• <strong>Neckline:</strong> Support drawn connecting the two lows</li>
                      <li>• <strong>Breakdown:</strong> When price breaks neckline, pattern completes</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <p className="text-sm text-slate-700 mb-2">
                      <strong>Trading Strategy:</strong>
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Entry: Neckline break + close below</li>
                      <li>• Stop Loss: Above right shoulder</li>
                      <li>• Target: Height of pattern measured from neckline</li>
                      <li>• Volume should increase on breakdown</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <p className="text-xs font-semibold mb-2">Chart Structure:</p>
                  <div className="font-mono text-xs">
                    <pre className="text-slate-600">{`              HEAD
               ●
              ↗ ↘
             ●   ●
LEFT        ↗     ↘        RIGHT
SHOULDER   ●       ●      SHOULDER
          ↗         ↘    ↗
    ●────●───────────●──●  NECKLINE
   ↗                    ↘
  ●                      ●  Breakdown!
                          ↘
                           ● Target

Psychology:
- Left Shoulder: Bulls strong
- Head: Bulls make final push (exhaustion)
- Right Shoulder: Bulls weak (can't reach Head)
- Breakdown: Bears take control`}</pre>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-slate-900 mb-2">Why It Works:</p>
                <p className="text-sm text-slate-600">
                  The pattern shows <strong>diminishing buying power</strong>. Each peak requires more effort, and the failure to reach new highs (right shoulder lower than head) signals exhaustion. When neckline breaks, trapped longs panic sell, accelerating the decline.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 bg-green-50 pl-6 pr-6 py-4 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">2. Inverse Head and Shoulders (Bullish Reversal)</h3>
              <p className="text-slate-700 mb-4">
                Mirror image of Head & Shoulders. Forms at market bottoms after extended downtrends. One of the most powerful bullish reversal patterns.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-sm font-semibold text-slate-900 mb-2">Pattern Components:</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• <strong>Left Shoulder:</strong> New low in downtrend, then bounce</li>
                      <li>• <strong>Head:</strong> Price falls to even lower low, then rallies</li>
                      <li>• <strong>Right Shoulder:</strong> Weaker decline (doesn't reach Head), rallies again</li>
                      <li>• <strong>Neckline:</strong> Resistance drawn connecting the two highs</li>
                      <li>• <strong>Breakout:</strong> When price breaks neckline, pattern completes</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <p className="text-sm text-slate-700 mb-2">
                      <strong>Trading Strategy:</strong>
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Entry: Neckline break + close above</li>
                      <li>• Stop Loss: Below right shoulder</li>
                      <li>• Target: Height of pattern measured from neckline</li>
                      <li>• Volume crucial—must increase on breakout</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <p className="text-xs font-semibold mb-2">Chart Structure:</p>
                  <div className="font-mono text-xs">
                    <pre className="text-slate-600">{`                           ● Breakout!
                          ↗
    ●────●───────────●──●  NECKLINE
   ↘                    ↗
  ●                      ●
          ↘         ↗    ↘
LEFT        ↘       ↗      RIGHT
SHOULDER     ●     ●      SHOULDER
              ↘   ↗
               ● 
              HEAD

Psychology:
- Left Shoulder: Bears strong
- Head: Bears make final push (exhaustion)
- Right Shoulder: Bears weak
- Breakout: Bulls take control`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 bg-purple-50 pl-6 pr-6 py-4 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">3. Double Top & Double Bottom</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-700 mb-3">Double Top (Bearish)</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    Two peaks at approximately the same level with a valley between them. Shows price tested resistance twice and failed both times.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-3">
                    <p className="text-xs font-semibold mb-2">Rules:</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Two peaks within 3-5% of each other</li>
                      <li>• Valley (support) between peaks</li>
                      <li>• Breaks on close below support</li>
                      <li>• Target = height from peak to support</li>
                    </ul>
                  </div>
                  <div className="font-mono text-xs bg-slate-100 p-3 rounded">
                    <pre className="text-slate-600">{`     ●       ●  Two peaks (Resistance)
    ↗ ↘     ↗ ↘
   ●   ●───●   ●  Support (Neckline)
            ↘
             ● Breakdown → Sell`}</pre>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-3">Double Bottom (Bullish)</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    Two troughs at approximately the same level with a peak between them. Shows price tested support twice and held both times.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-3">
                    <p className="text-xs font-semibold mb-2">Rules:</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Two troughs within 3-5% of each other</li>
                      <li>• Peak (resistance) between troughs</li>
                      <li>• Breaks on close above resistance</li>
                      <li>• Target = height from trough to resistance</li>
                    </ul>
                  </div>
                  <div className="font-mono text-xs bg-slate-100 p-3 rounded">
                    <pre className="text-slate-600">{`             ● Breakout → Buy
            ↗
   ●   ●───●   ●  Resistance (Neckline)
    ↘ ↗     ↘ ↗
     ●       ●  Two troughs (Support)`}</pre>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-white rounded-lg p-4">
                <p className="text-sm text-slate-700">
                  <strong>Key Difference from H&S:</strong> Double tops/bottoms have only 2 peaks/troughs instead of 3. They're faster-forming and slightly less reliable but still high-probability patterns.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Continuation Patterns */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Continuation Patterns</h2>
          <p className="text-lg text-slate-700 mb-6">
            These patterns indicate brief pauses in the existing trend. After consolidation, the trend resumes in the same direction. Think of them as "pit stops" in a race—the vehicle (trend) refuels before continuing.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 bg-blue-50 pl-6 pr-6 py-4 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">1. Flags & Pennants</h3>
              <p className="text-slate-700 mb-4">
                Short-term continuation patterns that form after strong price moves. They look like small parallelograms (flags) or small triangles (pennants) sloping against the trend.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-3">Bull Flag</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    Forms after sharp rally. Price consolidates in a slight downward channel before breaking out to new highs.
                  </p>
                  <div className="font-mono text-xs bg-slate-50 p-3 rounded mb-3">
                    <pre className="text-slate-600">{`        ● Breakout!
       ↗
      ●╱╲  Flag (pause)
₹1050 ●  ╲
     ╱    ╲
    ╱      ●
   ╱
  ●  Flagpole (strong rally)
 ╱
●

Entry: Breakout above flag top
Target: Flagpole height added to breakout`}</pre>
                  </div>
                  <p className="text-xs text-slate-600 italic">
                    Volume should dry up during flag, then surge on breakout.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-3">Bear Flag</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    Forms after sharp decline. Price bounces slightly in upward channel before breaking down to new lows.
                  </p>
                  <div className="font-mono text-xs bg-slate-50 p-3 rounded mb-3">
                    <pre className="text-slate-600">{`●
 ╲
  ●  Flagpole (strong decline)
   ╲
    ╲      ●
₹950 ╲    ╱
      ●╲╱  Flag (pause)
       ╲
        ● Breakdown!

Entry: Breakdown below flag bottom
Target: Flagpole height subtracted from breakdown`}</pre>
                  </div>
                  <p className="text-xs text-slate-600 italic">
                    Bears use the bounce to add shorts. Strong decline resumes.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 pl-6 pr-6 py-4 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">2. Triangles</h3>
              <p className="text-slate-700 mb-4">
                Triangles form when price consolidates within converging trendlines. There are three types: ascending (bullish), descending (bearish), and symmetrical (neutral).
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Ascending Triangle</h4>
                  <p className="text-xs text-slate-700 mb-3">
                    Flat top (resistance), rising bottom (higher lows). Bullish—buyers getting stronger.
                  </p>
                  <div className="font-mono text-xs bg-slate-50 p-3 rounded">
                    <pre className="text-slate-600">{`    ●───●───●  Flat resistance
   ╱   ╱   ╱
  ●───●───●  Rising support
 ╱
●      Breakout up →`}</pre>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-2">Descending Triangle</h4>
                  <p className="text-xs text-slate-700 mb-3">
                    Flat bottom (support), declining top (lower highs). Bearish—sellers getting stronger.
                  </p>
                  <div className="font-mono text-xs bg-slate-50 p-3 rounded">
                    <pre className="text-slate-600">{`●      Breakdown down →
 ╲
  ●───●───●  Declining resistance
   ╲   ╲   ╲
    ●───●───●  Flat support`}</pre>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Symmetrical Triangle</h4>
                  <p className="text-xs text-slate-700 mb-3">
                    Both lines converge. Neutral—could break either way. Follow the trend.
                  </p>
                  <div className="font-mono text-xs bg-slate-50 p-3 rounded">
                    <pre className="text-slate-600">{`   ●
  ╱ ╲
 ●───●  Converging lines
  ╲ ╱   Wait for breakout
   ●    to pick direction`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trading Rules */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-purple-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Pattern Trading Rules</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-700 mb-4">Essential Do's ✅</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">1.</span>
                  <span><strong>Wait for confirmation:</strong> Never trade until pattern completes and price breaks key level with strong volume.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">2.</span>
                  <span><strong>Measure targets properly:</strong> Use pattern height to calculate profit targets. This provides realistic expectations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">3.</span>
                  <span><strong>Check multiple timeframes:</strong> Confirm pattern on higher timeframe (daily if you're trading hourly).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">4.</span>
                  <span><strong>Volume is critical:</strong> Breakouts without volume often fail. Look for 50%+ increase in volume.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">5.</span>
                  <span><strong>Use stop losses:</strong> Place stops just outside the pattern. Don't give "breathing room."</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-4">Critical Don'ts ❌</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">1.</span>
                  <span><strong>Don't anticipate:</strong> Entering before breakout/breakdown means you're guessing. Let the pattern complete.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">2.</span>
                  <span><strong>Don't force patterns:</strong> If you have to squint to see it, it's not there. Patterns should be obvious.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">3.</span>
                  <span><strong>Don't ignore failed patterns:</strong> If pattern breaks the "wrong way," exit immediately. Pattern failure is a signal too.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">4.</span>
                  <span><strong>Don't trade against trend:</strong> Reversal patterns work best at extremes. Don't short at the start of an uptrend.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">5.</span>
                  <span><strong>Don't ignore news:</strong> Major news can invalidate patterns. Check economic calendar before trading pattern breakouts.</span>
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
              <p className="text-lg"><strong>Support/Resistance are foundations</strong> of all patterns. Master these before trading patterns.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg"><strong>Reversal patterns:</strong> Head & Shoulders, Double Tops/Bottoms signal trend changes at extremes.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg"><strong>Continuation patterns:</strong> Flags, Pennants, Triangles indicate brief pauses before trend resumes.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg"><strong>Volume confirms breakouts.</strong> No volume = fake breakout (bull trap/bear trap).</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg"><strong>Wait for confirmation.</strong> Patience prevents 80% of pattern trading losses.</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Level Up Your Analysis</h2>
          <p className="text-slate-600 mb-6">
            You've mastered patterns. Now let's add technical indicators to fine-tune entries, exits, and trend confirmation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/technical-analysis/indicators-oscillators" className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
              Next: Indicators & Oscillators →
            </Link>
            <Link to="/technical-analysis" className="px-8 py-3 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition">
              Back to Course Overview
            </Link>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}
