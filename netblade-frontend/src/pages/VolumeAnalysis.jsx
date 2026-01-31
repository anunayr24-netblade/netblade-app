import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Volume2, TrendingUp, AlertTriangle, Activity } from 'lucide-react';

export default function VolumeAnalysis() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/technical-analysis/volume-analysis' } });
    }
  }, [navigate]);

  const topics = [
    { id: 'why-volume-matters', title: 'Why Volume Matters', icon: Volume2 },
    { id: 'volume-price', title: 'Volume & Price Relationship', icon: TrendingUp },
    { id: 'volume-patterns', title: 'Volume Patterns', icon: Activity },
    { id: 'volume-indicators', title: 'Volume Indicators', icon: AlertTriangle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <Link to="/technical-analysis" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6 sm:mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Back to Technical Analysis
        </Link>

        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Volume Analysis
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl">
            Volume is the fuel of price movement. While price tells you what happened, volume tells you how many participants agreed. High conviction moves require high volume; low volume moves are suspect and prone to reversal.
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
                  className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg hover:from-red-100 hover:to-orange-100 transition-all group"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-base font-medium text-slate-800">{topic.title}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 sm:space-y-12">

        {/* Introduction */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Volume Matters</h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Imagine a stock rallying 5% on 100,000 shares versus 5 million shares. Same price move, vastly different implications. The second scenario shows institutional participation and conviction—the move is real. The first might be a trap with few buyers. <strong>Volume validates price action.</strong>
            </p>
            
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-xl font-semibold text-red-900 mb-4">Volume's Core Principles</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">1. Volume Precedes Price</h4>
                  <p className="text-sm text-slate-600">
                    Smart money accumulates/distributes before big moves. Volume spikes often appear before major breakouts or breakdowns. If you see unusual volume at key levels, pay attention—something is brewing.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">2. Volume Confirms Trends</h4>
                  <p className="text-sm text-slate-600">
                    In healthy uptrends, volume should increase on up days and decrease on down days. In healthy downtrends, volume should increase on down days. Divergence warns of potential reversals.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">3. Low Volume = Low Conviction</h4>
                  <p className="text-sm text-slate-600">
                    Moves on low volume are easily reversed. Breakouts on low volume usually fail. Avoid trading stocks with consistently low volume—they're illiquid and manipulation-prone.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
              <p className="text-sm text-slate-700">
                <strong>💡 Pro Insight:</strong> Institutions can't hide their volume footprint. When you see massive volume at support/resistance, it means institutions are positioning. Retail traders can't move that much volume—follow the smart money.
              </p>
            </div>
          </div>
        </div>

        {/* Volume & Price Relationship */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Volume & Price Relationship Matrix</h2>
          <p className="text-lg text-slate-700 mb-6">
            The combination of price direction and volume intensity reveals market sentiment and future price direction. Here are the four critical combinations:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📈</span>
                <h3 className="text-xl font-semibold text-green-900">Price UP + Volume UP</h3>
              </div>
              <p className="text-sm text-slate-700 mb-4">
                <strong className="text-green-700">Interpretation:</strong> Strong bullish signal. Buyers are aggressive and numerous. Trend is healthy.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-xs font-semibold text-slate-900 mb-2">What's Happening:</p>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li>• Heavy buying interest</li>
                  <li>• Institutions accumulating</li>
                  <li>• FOMO kicking in</li>
                  <li>• Shorts covering (adding fuel)</li>
                </ul>
              </div>
              <div className="mt-4 bg-slate-100 rounded p-3 font-mono text-xs">
                <pre className="text-slate-600">{`Price   Volume
  ●       ████
 ●        ███
●         ██

Rising price + Rising volume
= STRONG UPTREND

Action: Hold longs, add on pullbacks`}</pre>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📉</span>
                <h3 className="text-xl font-semibold text-red-900">Price DOWN + Volume UP</h3>
              </div>
              <p className="text-sm text-slate-700 mb-4">
                <strong className="text-red-700">Interpretation:</strong> Strong bearish signal. Sellers are aggressive and numerous. Trend is healthy (for bears).
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-xs font-semibold text-slate-900 mb-2">What's Happening:</p>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li>• Heavy selling interest</li>
                  <li>• Institutions distributing</li>
                  <li>• Panic selling accelerating</li>
                  <li>• Stop losses triggering</li>
                </ul>
              </div>
              <div className="mt-4 bg-slate-100 rounded p-3 font-mono text-xs">
                <pre className="text-slate-600">{`Price   Volume
●         ██
 ●        ███
  ●       ████

Falling price + Rising volume
= STRONG DOWNTREND

Action: Avoid/short, exit longs`}</pre>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">⚠️</span>
                <h3 className="text-xl font-semibold text-orange-900">Price UP + Volume DOWN</h3>
              </div>
              <p className="text-sm text-slate-700 mb-4">
                <strong className="text-orange-700">Interpretation:</strong> Warning signal. Rally lacks conviction. Likely to reverse or stall.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-xs font-semibold text-slate-900 mb-2">What's Happening:</p>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li>• Few buyers participating</li>
                  <li>• Existing longs taking profit</li>
                  <li>• Weak hands chasing</li>
                  <li>• Institutions not interested</li>
                </ul>
              </div>
              <div className="mt-4 bg-slate-100 rounded p-3 font-mono text-xs">
                <pre className="text-slate-600">{`Price   Volume
  ●       ██
 ●        ███
●         ████

Rising price + Falling volume
= WEAK RALLY (suspect)

Action: Take profit, don't chase`}</pre>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">💡</span>
                <h3 className="text-xl font-semibold text-blue-900">Price DOWN + Volume DOWN</h3>
              </div>
              <p className="text-sm text-slate-700 mb-4">
                <strong className="text-blue-700">Interpretation:</strong> Mixed signal. Decline lacks conviction. Selling pressure exhausted. Possible bottom forming.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-xs font-semibold text-slate-900 mb-2">What's Happening:</p>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li>• Weak sellers (no panic)</li>
                  <li>• Few participants overall</li>
                  <li>• Market losing interest</li>
                  <li>• Potential reversal setup</li>
                </ul>
              </div>
              <div className="mt-4 bg-slate-100 rounded p-3 font-mono text-xs">
                <pre className="text-slate-600">{`Price   Volume
●         ████
 ●        ███
  ●       ██

Falling price + Falling volume
= WEAK DECLINE (may reverse)

Action: Watch for reversal signals`}</pre>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Reference Summary</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-3 text-left">Price</th>
                    <th className="p-3 text-left">Volume</th>
                    <th className="p-3 text-left">Signal</th>
                    <th className="p-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b">
                    <td className="p-3 text-green-600 font-semibold">↑ Rising</td>
                    <td className="p-3 text-green-600 font-semibold">↑ Rising</td>
                    <td className="p-3">✅ Strong Bullish</td>
                    <td className="p-3">Buy/Hold</td>
                  </tr>
                  <tr className="border-b bg-slate-50">
                    <td className="p-3 text-red-600 font-semibold">↓ Falling</td>
                    <td className="p-3 text-red-600 font-semibold">↑ Rising</td>
                    <td className="p-3">❌ Strong Bearish</td>
                    <td className="p-3">Sell/Short</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 text-green-600 font-semibold">↑ Rising</td>
                    <td className="p-3 text-orange-600 font-semibold">↓ Falling</td>
                    <td className="p-3">⚠️ Weak Rally</td>
                    <td className="p-3">Take Profit</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 text-red-600 font-semibold">↓ Falling</td>
                    <td className="p-3 text-blue-600 font-semibold">↓ Falling</td>
                    <td className="p-3">💡 Weak Decline</td>
                    <td className="p-3">Watch for Reversal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Volume Patterns */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Critical Volume Patterns</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 bg-green-50 pl-6 pr-6 py-4 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">1. Volume Climax (Exhaustion Move)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-slate-700 mb-4">
                    Massive volume spike accompanied by wide-range candle, often at trend extremes. Signals exhaustion—the final push by one side before reversal.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Characteristics:</p>
                    <ul className="text-xs text-slate-600 space-y-2">
                      <li>• Volume 2-3× average</li>
                      <li>• Wide-range candle (large body)</li>
                      <li>• Often at major S/R levels</li>
                      <li>• Next candle shows reversal</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                    <p className="text-xs text-slate-700">
                      <strong>Psychology:</strong> Everyone who wanted in/out got their wish. No more fuel left. Trend exhausted.
                    </p>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <p className="text-xs font-semibold mb-3">Visual Pattern:</p>
                  <div className="font-mono text-xs">
                    <pre className="text-slate-600">{`Price Chart:
         ●  ← Exhaustion candle
        ╱│╲   (wide range)
       ● │ ●  Reversal starts
      ●  │
     ●   │
    ●    │
   ●     │
Volume:
   ████████  ← Climax volume
   ███       (2-3× normal)
   ██
   ███

After climax: Price reverses,
volume normalizes

Example: Stock at ₹1200 (52-week high)
Huge green candle + 5M volume (avg 500K)
Next day: Red candle, volume 2M
= Buying exhaustion, reversal likely`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 pl-6 pr-6 py-4 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">2. Volume Breakout Confirmation</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-slate-700 mb-4">
                    Breakouts from key levels (resistance, chart patterns) must be accompanied by volume surge. No volume = fake breakout (bull trap).
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Valid Breakout Requirements:</p>
                    <ul className="text-xs text-slate-600 space-y-2">
                      <li>• Volume 50-100%+ above average</li>
                      <li>• Close clearly above/below level</li>
                      <li>• Follow-through next day</li>
                      <li>• Increased participation (not just retail FOMO)</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                    <p className="text-xs text-slate-700">
                      <strong>Rule of Thumb:</strong> Breakout volume should be at minimum 50% higher than the 20-day average. 100%+ is ideal for confidence.
                    </p>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <p className="text-xs font-semibold mb-3">Valid vs Invalid Breakout:</p>
                  <div className="font-mono text-xs">
                    <pre className="text-slate-600">{`✅ VALID BREAKOUT:
₹1100 ────●───  Resistance
         ╱
        ● ← Breakout candle
       ╱
      ●

Volume: ████████  Huge surge!
        ███       50-100%+ avg
        ██

= Real breakout, momentum strong


❌ INVALID BREAKOUT (Bull Trap):
₹1100 ────●───  Resistance
         ╱ ↘
        ●   ● Failed!
       
Volume: ███       Low volume
        ██        (below avg)
        ██

= Fake breakout, will fail`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 bg-purple-50 pl-6 pr-6 py-4 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">3. Volume Divergence</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-slate-700 mb-4">
                    When price makes new highs/lows but volume is declining, it warns that the trend is losing participation and may reverse soon.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <h4 className="text-xs font-semibold text-red-700 mb-2">Bearish Volume Divergence:</h4>
                    <p className="text-xs text-slate-600 mb-3">
                      Price: Higher highs<br/>
                      Volume: Lower highs<br/>
                      → Uptrend losing steam, few buyers left
                    </p>
                    <h4 className="text-xs font-semibold text-green-700 mb-2">Bullish Volume Divergence:</h4>
                    <p className="text-xs text-slate-600">
                      Price: Lower lows<br/>
                      Volume: Lower lows<br/>
                      → Downtrend losing steam, sellers exhausted
                    </p>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <p className="text-xs font-semibold mb-3">Bearish Divergence Example:</p>
                  <div className="font-mono text-xs">
                    <pre className="text-slate-600">{`Price makes higher highs:
         ●    ●
        ╱╲   ╱╲ Higher high
       ●  ● ●  ● but weaker

Volume declining:
████  Lower participation
 ███  each rally
  ██  = Distribution phase
   █  Smart money selling

Result: Reversal coming

Real Example:
Week 1: ₹1050, Volume 2M
Week 2: ₹1080, Volume 1.5M ⚠️
Week 3: ₹1100, Volume 800K ⚠️⚠️
Week 4: Crash to ₹1020`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 pl-6 pr-6 py-4 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">4. Low Volume Pullbacks (Healthy Corrections)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-slate-700 mb-4">
                    In strong trends, pullbacks should occur on declining volume. This shows no real selling pressure—just profit-taking by weak hands. Confirms trend strength.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Healthy Uptrend Signs:</p>
                    <ul className="text-xs text-slate-600 space-y-2">
                      <li>• Rallies on high volume (institutions buying)</li>
                      <li>• Dips on low volume (no panic)</li>
                      <li>• Pattern repeats multiple times</li>
                      <li>• Pullbacks hold at MAs (20/50 EMA)</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <p className="text-xs font-semibold mb-3">Pattern:</p>
                  <div className="font-mono text-xs">
                    <pre className="text-slate-600">{`Price:
      ●      High volume rally
     ╱╲
    ●  ●    Low volume dip
   ╱    ╲   (healthy correction)
  ●      ●
 ╱        ╲
●          ●

Volume:
████       Rally volume high
 ██        Dip volume low ✅
 ███████   Next rally high ✅

This alternating pattern
= Strong, healthy uptrend

Trading: Buy the low-volume dips!`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Volume Indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Volume-Based Indicators</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">On-Balance Volume (OBV)</h3>
              <p className="text-sm text-slate-700 mb-4">
                Cumulative volume indicator. Adds volume on up days, subtracts on down days. Reveals if volume is flowing into or out of a stock.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-xs font-semibold text-slate-900 mb-2">Formula:</p>
                <p className="text-xs text-slate-700 mb-3">
                  • If Close &gt; Previous Close: OBV = OBV(prev) + Volume<br/>
                  • If Close &lt; Previous Close: OBV = OBV(prev) - Volume<br/>
                  • If Close = Previous Close: OBV = OBV(prev)
                </p>
              </div>
              <div className="bg-slate-50 rounded p-3">
                <p className="text-xs font-semibold mb-2">Trading Signals:</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• <strong>OBV rising + Price rising:</strong> Confirmed uptrend</li>
                  <li>• <strong>OBV falling + Price falling:</strong> Confirmed downtrend</li>
                  <li>• <strong>OBV divergence:</strong> Warning of reversal</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Volume Moving Average</h3>
              <p className="text-sm text-slate-700 mb-4">
                Simple moving average of volume (usually 20-day). Helps identify when volume is unusually high or low compared to recent norm.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-xs font-semibold text-slate-900 mb-2">Usage:</p>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li>• Calculate 20-day average volume</li>
                  <li>• Compare today's volume to average</li>
                  <li>• 50%+ above = High volume</li>
                  <li>• 50%+ below = Low volume</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded p-3">
                <p className="text-xs font-semibold mb-2">Significance:</p>
                <p className="text-xs text-slate-600">
                  Breakouts with volume 2× the 20-day average have 80%+ success rate. Volume below average = 70%+ failure rate.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Accumulation/Distribution Line</h3>
              <p className="text-sm text-slate-700 mb-4">
                Measures cumulative flow of money into/out of stock. Considers where price closes within the day's range (not just up/down).
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-xs font-semibold text-slate-900 mb-2">How It Works:</p>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li>• Close near high = Accumulation (multiply by volume)</li>
                  <li>• Close near low = Distribution (multiply by volume)</li>
                  <li>• Cumulative total plotted as line</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded p-3">
                <p className="text-xs font-semibold mb-2">Signals:</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Rising A/D = Smart money buying</li>
                  <li>• Falling A/D = Smart money selling</li>
                  <li>• Divergence = Reversal warning</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Chaikin Money Flow (CMF)</h3>
              <p className="text-sm text-slate-700 mb-4">
                Measures buying/selling pressure over a period (usually 21 days). Oscillates between -1 and +1.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-xs font-semibold text-slate-900 mb-2">Interpretation:</p>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li>• CMF &gt; 0: Buying pressure (accumulation)</li>
                  <li>• CMF &lt; 0: Selling pressure (distribution)</li>
                  <li>• CMF &gt; +0.25: Strong buying</li>
                  <li>• CMF &lt; -0.25: Strong selling</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded p-3">
                <p className="text-xs font-semibold mb-2">Trading:</p>
                <p className="text-xs text-slate-600">
                  Buy when CMF crosses above 0 (sellers to buyers). Sell when CMF crosses below 0 (buyers to sellers).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Volume Trading */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Practical Volume Trading Strategies</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-700 mb-4">Strategy 1: Volume Breakout Trading</h3>
              <div className="bg-slate-50 rounded p-4">
                <p className="text-sm font-semibold text-slate-900 mb-3">Setup:</p>
                <ol className="text-sm text-slate-700 space-y-2">
                  <li>1. Stock consolidating near resistance for 3+ weeks</li>
                  <li>2. Volume declining during consolidation (low participation = coiling)</li>
                  <li>3. Stock breaks resistance + volume 2× average</li>
                  <li>4. Close above resistance (not just intraday spike)</li>
                </ol>
                <p className="text-sm font-semibold text-slate-900 mt-4 mb-2">Entry & Management:</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• <strong>Entry:</strong> On breakout candle close OR next day pullback</li>
                  <li>• <strong>Stop Loss:</strong> Just below breakout level</li>
                  <li>• <strong>Target:</strong> Previous consolidation width added to breakout</li>
                  <li>• <strong>Exit:</strong> If volume dries up significantly within 3 days</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-4">Strategy 2: Volume Climax Reversal</h3>
              <div className="bg-slate-50 rounded p-4">
                <p className="text-sm font-semibold text-slate-900 mb-3">Setup:</p>
                <ol className="text-sm text-slate-700 space-y-2">
                  <li>1. Stock in strong trend (up or down)</li>
                  <li>2. Parabolic move (accelerating gains/losses)</li>
                  <li>3. Massive volume spike (3-5× average)</li>
                  <li>4. Wide-range candle + reversal pattern next day</li>
                </ol>
                <p className="text-sm font-semibold text-slate-900 mt-4 mb-2">Entry & Management:</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• <strong>Entry:</strong> On reversal candle confirmation (e.g., after climax top, wait for bearish engulfing)</li>
                  <li>• <strong>Stop Loss:</strong> Beyond climax candle high/low</li>
                  <li>• <strong>Target:</strong> 50% retracement of climax move minimum</li>
                  <li>• <strong>Risk:</strong> Catching falling knives—requires patience for confirmation</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-700 mb-4">Strategy 3: Low Volume Trend Continuation</h3>
              <div className="bg-slate-50 rounded p-4">
                <p className="text-sm font-semibold text-slate-900 mb-3">Setup:</p>
                <ol className="text-sm text-slate-700 space-y-2">
                  <li>1. Stock in established uptrend (above rising 50 EMA)</li>
                  <li>2. Price pulls back to 20 or 50 EMA</li>
                  <li>3. Pullback occurs on declining volume (no panic)</li>
                  <li>4. Bullish reversal candle at MA + volume pickup</li>
                </ol>
                <p className="text-sm font-semibold text-slate-900 mt-4 mb-2">Entry & Management:</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• <strong>Entry:</strong> On bounce from MA with volume surge</li>
                  <li>• <strong>Stop Loss:</strong> Below pullback low (usually 5-8% from entry)</li>
                  <li>• <strong>Target:</strong> Previous high + measured move</li>
                  <li>• <strong>Success Rate:</strong> 70%+ in strong trends</li>
                </ul>
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
              <p className="text-lg"><strong>Volume validates price action.</strong> Price up + Volume up = Real move. Price up + Volume down = Fake move.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg"><strong>Breakouts need volume.</strong> Minimum 50% above average, ideally 100%+. No volume = bull/bear trap.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg"><strong>Volume climax = Exhaustion.</strong> Massive spike at trend extremes warns of reversal. Everyone's in—no one left to buy/sell.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg"><strong>Healthy trends: High volume rallies, low volume pullbacks.</strong> Opposite pattern = Trouble ahead.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg"><strong>Volume precedes price.</strong> Unusual volume at support/resistance = Institutions positioning. Follow smart money.</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Master Trend Identification Next</h2>
          <p className="text-slate-600 mb-6">
            You understand volume's role. Now let's systematically identify, classify, and trade trends—the bread and butter of profitable trading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/technical-analysis/trend-analysis" className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
              Next: Trend Analysis →
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
