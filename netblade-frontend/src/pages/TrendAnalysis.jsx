import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, TrendingUp, TrendingDown, Minus, BarChart3 } from 'lucide-react';

export default function TrendAnalysis() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/technical-analysis/trend-analysis' } });
    }
  }, [navigate]);

  const topics = [
    { id: 'understanding-trends', title: 'Understanding Trends', icon: BarChart3 },
    { id: 'trend-types', title: 'Three Trend Types', icon: Minus },
    { id: 'trend-identification', title: 'Trend Identification', icon: TrendingUp },
    { id: 'trend-strength', title: 'Measuring Trend Strength', icon: TrendingDown }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <Link to="/technical-analysis" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6 sm:mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Back to Technical Analysis
        </Link>

        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Trend Analysis
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl">
            "The trend is your friend until it ends." This timeless wisdom encapsulates the most profitable trading principle: identify the dominant trend and trade with it, not against it. Trend analysis is the skill that separates winning traders from losers.
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
                  className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg hover:from-indigo-100 hover:to-blue-100 transition-all group"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 mr-3 group-hover:scale-110 transition-transform" />
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Understanding Trends</h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              A trend is the general direction in which price moves over time. Markets don't move in straight lines—they zig-zag. But within those zig-zags, there's an underlying direction. Your job is to identify it early and ride it profitably.
            </p>
            
            <div className="bg-indigo-50 rounded-xl p-6 border-2 border-indigo-200">
              <h3 className="text-xl font-semibold text-indigo-900 mb-4">Why Trends Exist</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">1. Market Psychology</h4>
                  <p className="text-sm text-slate-600">
                    Fear and greed drive trends. Once fear/greed takes hold, it feeds on itself. Winners hold winners, losers chase, creating momentum that persists.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">2. Information Flow</h4>
                  <p className="text-sm text-slate-600">
                    Information doesn't hit everyone simultaneously. Smart money acts first, then institutions, then retail. This sequential reaction creates persistent directional movement.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">3. Newton's First Law</h4>
                  <p className="text-sm text-slate-600">
                    A trend in motion tends to stay in motion until acted upon by an opposing force. Markets exhibit inertia—established trends persist longer than most expect.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
              <p className="text-sm text-slate-700">
                <strong>💡 Critical Insight:</strong> 70-80% of the time, markets are trending (up, down, or sideways). Only 20-30% are transitioning between trends. Master trend identification, and you've mastered the majority of trading opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Three Types of Trends */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Three Trend Types</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 bg-green-50 pl-6 pr-6 py-4 rounded-r-xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📈</span>
                <h3 className="text-xl font-semibold text-slate-900">1. Uptrend (Bull Market)</h3>
              </div>
              <p className="text-sm text-slate-700 mb-4">
                Characterized by higher highs and higher lows. Each rally takes price to a new peak, and each pullback finds support above the previous low. Buyers are in control.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Uptrend Rules:</p>
                    <ul className="text-xs text-slate-600 space-y-2">
                      <li>• Each high exceeds the previous high</li>
                      <li>• Each low exceeds the previous low</li>
                      <li>• Price consistently above rising MAs</li>
                      <li>• Volume higher on rallies than pullbacks</li>
                      <li>• RSI/MACD remain positive</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 rounded p-4">
                    <p className="text-xs font-semibold text-green-900 mb-2">Trading Strategy:</p>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>• <strong>Buy:</strong> Pullbacks to support/MAs</li>
                      <li>• <strong>Never short</strong> an uptrend</li>
                      <li>• Hold until trend breaks (lower low)</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <div className="font-mono text-xs">
                    <pre className="text-slate-600">{`           Higher High
              ●
             ╱╲
Higher High ●  ●
           ╱    ╲
          ●      ● Higher Low
         ╱        
Higher  ●   Each peak & trough
Low    ╱    rises progressively
      ●      
     ╱       
    ●  Lower starting point

Trendline: Connect rising lows
Price stays above trendline = Uptrend intact

Break below trendline + lower low
= Trend over`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 pl-6 pr-6 py-4 rounded-r-xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📉</span>
                <h3 className="text-xl font-semibold text-slate-900">2. Downtrend (Bear Market)</h3>
              </div>
              <p className="text-sm text-slate-700 mb-4">
                Characterized by lower highs and lower lows. Each rally fails at a lower level, and each decline breaks below the previous low. Sellers are in control.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Downtrend Rules:</p>
                    <ul className="text-xs text-slate-600 space-y-2">
                      <li>• Each high falls below the previous high</li>
                      <li>• Each low falls below the previous low</li>
                      <li>• Price consistently below falling MAs</li>
                      <li>• Volume higher on declines than rallies</li>
                      <li>• RSI/MACD remain negative</li>
                    </ul>
                  </div>
                  <div className="bg-red-100 rounded p-4">
                    <p className="text-xs font-semibold text-red-900 mb-2">Trading Strategy:</p>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>• <strong>Sell/Short:</strong> Rallies to resistance/MAs</li>
                      <li>• <strong>Never buy</strong> a downtrend</li>
                      <li>• Cover/exit when trend breaks (higher high)</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <div className="font-mono text-xs">
                    <pre className="text-slate-600">{`    ●  Higher starting point
     ╲       
      ●  Lower High
       ╲        
Lower   ●      ● Lower High
High     ╲    ╱
          ●  ●
           ╲╱
            ● Lower Low
             
Each peak & trough
declines progressively

Trendline: Connect falling highs
Price stays below trendline = Downtrend intact

Break above trendline + higher high
= Trend over`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 pl-6 pr-6 py-4 rounded-r-xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">↔️</span>
                <h3 className="text-xl font-semibold text-slate-900">3. Sideways/Range-Bound (Consolidation)</h3>
              </div>
              <p className="text-sm text-slate-700 mb-4">
                Price oscillates between horizontal support and resistance levels. Neither buyers nor sellers dominate. Often occurs after major moves as market "digests" gains/losses.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Range Characteristics:</p>
                    <ul className="text-xs text-slate-600 space-y-2">
                      <li>• Clear horizontal support & resistance</li>
                      <li>• Price bounces between levels repeatedly</li>
                      <li>• MAs flatten (no slope)</li>
                      <li>• Volume typically low</li>
                      <li>• Oscillators work best here</li>
                    </ul>
                  </div>
                  <div className="bg-blue-100 rounded p-4">
                    <p className="text-xs font-semibold text-blue-900 mb-2">Trading Strategy:</p>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>• <strong>Buy:</strong> At support (bottom of range)</li>
                      <li>• <strong>Sell:</strong> At resistance (top of range)</li>
                      <li>• Exit immediately if range breaks</li>
                      <li>• Use oscillators (RSI, Stochastic)</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <div className="font-mono text-xs">
                    <pre className="text-slate-600">{`₹1100 ●──●──●──●  Resistance
       ╲╱  ╲╱  ╲╱  (Sell zone)
       ●    ●    ●
      ╱    ╱    ╱
₹1000 ●──●──●──●  Support
                  (Buy zone)

Price oscillates between
fixed levels. No trend.

Breakout signals:
• Above resistance + volume = Uptrend
• Below support + volume = Downtrend

Until breakout: Trade the range`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trend Timeframes */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Trend Timeframes & Duration</h2>
          <p className="text-lg text-slate-700 mb-6">
            Dow Theory identified three trend durations. Understanding them prevents conflicting signals and helps choose the right trading strategy.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Primary Trend (Major)</h3>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-xs font-semibold text-slate-900 mb-2">Duration:</p>
                <p className="text-sm text-slate-700 mb-3">1 to 3+ years</p>
                <p className="text-xs font-semibold text-slate-900 mb-2">Magnitude:</p>
                <p className="text-sm text-slate-700">20% or more</p>
              </div>
              <p className="text-xs text-slate-600 mb-3">
                The "big picture" trend. Like an ocean tide—powerful, persistent, unstoppable. Institutions and long-term investors focus here.
              </p>
              <div className="bg-slate-50 rounded p-3">
                <p className="text-xs font-semibold mb-1">Trading:</p>
                <p className="text-xs text-slate-600">Buy & hold, position trading. Ignore minor fluctuations.</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Secondary Trend (Intermediate)</h3>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-xs font-semibold text-slate-900 mb-2">Duration:</p>
                <p className="text-sm text-slate-700 mb-3">3 weeks to 3 months</p>
                <p className="text-xs font-semibold text-slate-900 mb-2">Magnitude:</p>
                <p className="text-sm text-slate-700">10-20% (retraces 33-66% of primary)</p>
              </div>
              <p className="text-xs text-slate-600 mb-3">
                Corrections within the primary trend. Like waves—noticeable movements that eventually succumb to the tide's direction.
              </p>
              <div className="bg-slate-50 rounded p-3">
                <p className="text-xs font-semibold mb-1">Trading:</p>
                <p className="text-xs text-slate-600">Swing trading. Buy dips in primary uptrend, short rallies in primary downtrend.</p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">Minor Trend (Short-term)</h3>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-xs font-semibold text-slate-900 mb-2">Duration:</p>
                <p className="text-sm text-slate-700 mb-3">Hours to 3 weeks</p>
                <p className="text-xs font-semibold text-slate-900 mb-2">Magnitude:</p>
                <p className="text-sm text-slate-700">&lt;10% (often just noise)</p>
              </div>
              <p className="text-xs text-slate-600 mb-3">
                Daily fluctuations. Like ripples on waves—erratic, unpredictable, easily manipulated. Hardest to trade profitably.
              </p>
              <div className="bg-slate-50 rounded p-3">
                <p className="text-xs font-semibold mb-1">Trading:</p>
                <p className="text-xs text-slate-600">Day trading, scalping. High risk. Requires skill, discipline, and fast execution.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border-2 border-indigo-200">
            <h4 className="font-semibold text-slate-900 mb-4">Visual: Trends Within Trends</h4>
            <div className="bg-white rounded-lg p-4 font-mono text-xs">
              <pre className="text-slate-600">{`PRIMARY UPTREND (1-3 years):
                    ●────● Major high
                   ╱      
              ●───●  Secondary correction
             ╱         (3 weeks-3 months)
        ●───●  
       ╱     ╲●╲● Minor fluctuations
  ●───●      (days/weeks - noise)
 ╱
● Starting point

The primary trend persists despite
secondary corrections and minor noise.

Trade WITH the primary trend,
Use secondary pullbacks as entries.`}</pre>
            </div>
          </div>
        </div>

        {/* Identifying Trend Strength */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Measuring Trend Strength</h2>
          <p className="text-lg text-slate-700 mb-6">
            Not all trends are equal. Strong trends offer low-risk, high-reward opportunities. Weak trends chop you up with false signals. Learn to distinguish them.
          </p>

          <div className="space-y-6">
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Strong Uptrend Characteristics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span><strong>Consistent higher highs/lows:</strong> No lower lows for extended period</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span><strong>Price well above key MAs:</strong> 20/50/200 MAs rising and parallel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span><strong>Volume confirmation:</strong> High on rallies, low on pullbacks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span><strong>ADX &gt; 25:</strong> Indicates strong directional movement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span><strong>Shallow pullbacks:</strong> Corrections are 10-15%, not 30%+</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span><strong>Orderly advance:</strong> Steady gains, not vertical spikes</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-xs font-semibold text-slate-900 mb-3">Example: Strong Uptrend</p>
                  <div className="font-mono text-xs bg-slate-50 p-3 rounded">
                    <pre className="text-slate-600">{`₹1200  ●        New high
      ╱╲       
₹1150 ●  ●      Shallow pullback
     ╱    ╲     (only 4%)
₹1100●     ●
    ╱       ╲
₹1050●────────  50 EMA rising
   
Features:
• Price hugs upper edge
• Pullbacks brief & shallow
• Volume surges on rallies
• Indicators positive
• Low-risk buy on pullbacks`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-xl font-semibold text-red-900 mb-4">Weak/Suspect Trend Characteristics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span><strong>Erratic highs/lows:</strong> Inconsistent pattern, frequent violations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span><strong>Price whips around MAs:</strong> Crosses back and forth frequently</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span><strong>Volume inconsistent:</strong> Random volume spikes, no clear pattern</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span><strong>ADX &lt; 20:</strong> No directional conviction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span><strong>Deep pullbacks:</strong> Retraces 50%+ of prior move</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span><strong>Choppy action:</strong> Two steps forward, two steps back</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-xs font-semibold text-slate-900 mb-3">Example: Weak/Choppy Trend</p>
                  <div className="font-mono text-xs bg-slate-50 p-3 rounded">
                    <pre className="text-slate-600">{`₹1100 ●    ●    ● Whipsaws
      ╲╱  ╲╱  ╲╱
₹1050 ●●──●●──●● Crosses MA repeatedly
     ╱╲  ╱╲  ╱╲
₹1000 ●    ●    ●

Features:
• No clear direction
• Crosses MAs constantly
• Random volume
• ADX flat/low
• High-risk environment
• AVOID or trade range`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trend Reversal Signals */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Recognizing Trend Reversals</h2>
          <p className="text-lg text-slate-700 mb-6">
            Knowing when a trend ends is as important as identifying it. Missing reversals = riding profits back down to losses. Here are the warning signs:
          </p>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
                <h3 className="text-lg font-semibold text-orange-900 mb-4">Early Warning Signals</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">1.</span>
                    <span><strong>Volume divergence:</strong> Price makes new high/low but volume declines. Participation waning.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">2.</span>
                    <span><strong>RSI/MACD divergence:</strong> Price and indicator move opposite directions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">3.</span>
                    <span><strong>Slowing momentum:</strong> Gains/losses become smaller despite continued trend.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">4.</span>
                    <span><strong>Increasing volatility:</strong> Wider swings, more erratic behavior.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">5.</span>
                    <span><strong>Failed breakouts:</strong> Can't sustain new highs/lows, quickly reverses.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h3 className="text-lg font-semibold text-red-900 mb-4">Definitive Reversal Confirmation</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">1.</span>
                    <span><strong>Break of trend structure:</strong> Uptrend makes lower low, downtrend makes higher high.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">2.</span>
                    <span><strong>Trendline violation:</strong> Price closes below/above trendline with volume.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">3.</span>
                    <span><strong>MA death/golden cross:</strong> Key MAs cross (e.g., 50 crosses 200).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">4.</span>
                    <span><strong>Reversal pattern completion:</strong> H&S, double top/bottom confirmed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">5.</span>
                    <span><strong>Key level break:</strong> Major support/resistance decisively broken.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200">
              <h4 className="font-semibold text-slate-900 mb-4">Uptrend to Downtrend Reversal Example</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-xs font-semibold text-slate-900 mb-3">Phase-by-Phase Breakdown:</p>
                  <ol className="text-xs text-slate-700 space-y-2">
                    <li><strong>Phase 1:</strong> Healthy uptrend (higher highs, higher lows)</li>
                    <li><strong>Phase 2:</strong> Warning signs (volume dries up, RSI diverges)</li>
                    <li><strong>Phase 3:</strong> Price makes marginal new high, immediately fails</li>
                    <li><strong>Phase 4:</strong> Breaks below previous swing low (structure break)</li>
                    <li><strong>Phase 5:</strong> Rallies back to old support (now resistance), fails</li>
                    <li><strong>Phase 6:</strong> Makes lower low → Downtrend confirmed</li>
                  </ol>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <div className="font-mono text-xs">
                    <pre className="text-slate-600">{`Uptrend ends:
         ●  Phase 3: Weak high
        ╱╲  (volume divergence)
       ●  ●●  Phase 4: Breaks structure
      ╱    ╲╲
     ●      ●  Phase 5: Resistance test
    ╱        ╲
   ●──────────●  Phase 6: Lower low
   Uptrend    
   support    Downtrend confirmed!
   broken     New lower high forming

Action: Exit longs immediately
at Phase 4. Consider shorting
at Phase 5 resistance test.`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Timeframe Trend Analysis */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Multi-Timeframe Trend Analysis</h2>
          <p className="text-lg text-slate-700 mb-6">
            Professional traders don't look at one timeframe. They use top-down analysis—start with the big picture, drill down for entries. This prevents trading against the dominant trend.
          </p>

          <div className="bg-indigo-50 rounded-xl p-6 border-2 border-indigo-200 mb-6">
            <h3 className="text-xl font-semibold text-indigo-900 mb-4">The 3-Timeframe Rule</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">1. Higher Timeframe (HTF)</h4>
                <p className="text-xs text-slate-700 mb-3">
                  <strong>Purpose:</strong> Identify dominant trend direction
                </p>
                <p className="text-xs text-slate-600 mb-2">
                  If you trade daily charts, HTF = Weekly<br/>
                  If you trade 1-hour, HTF = Daily
                </p>
                <p className="text-xs text-slate-600 italic">
                  This tells you the "big picture" and which direction has edge.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-2">2. Trading Timeframe (TTF)</h4>
                <p className="text-xs text-slate-700 mb-3">
                  <strong>Purpose:</strong> Find entry patterns and trade setups
                </p>
                <p className="text-xs text-slate-600 mb-2">
                  Your "home" timeframe where you execute trades
                </p>
                <p className="text-xs text-slate-600 italic">
                  Look for pullbacks, breakouts, patterns that align with HTF trend.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-2">3. Lower Timeframe (LTF)</h4>
                <p className="text-xs text-slate-700 mb-3">
                  <strong>Purpose:</strong> Fine-tune entry timing, reduce risk
                </p>
                <p className="text-xs text-slate-600 mb-2">
                  If you trade daily, LTF = 4-hour or 1-hour
                </p>
                <p className="text-xs text-slate-600 italic">
                  Use for precise entries, stop placement, early warning of reversals.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
            <h4 className="font-semibold text-slate-900 mb-4">Example: Multi-Timeframe Swing Trade Setup</h4>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded p-4">
                <p className="text-sm font-semibold text-blue-700 mb-2">Step 1: Weekly Chart (HTF)</p>
                <p className="text-sm text-slate-700">
                  Stock is in strong uptrend—above all key MAs, making higher highs/lows for 6 months. Currently pulling back to 50-week EMA. <strong>Verdict: Bullish bias confirmed.</strong>
                </p>
              </div>
              <div className="bg-slate-50 rounded p-4">
                <p className="text-sm font-semibold text-green-700 mb-2">Step 2: Daily Chart (TTF)</p>
                <p className="text-sm text-slate-700">
                  Price pulled back 12% from recent high, now forming a bull flag pattern. RSI is 45 (neutral). Awaiting breakout above flag resistance. <strong>Setup: Buy flag breakout.</strong>
                </p>
              </div>
              <div className="bg-slate-50 rounded p-4">
                <p className="text-sm font-semibold text-purple-700 mb-2">Step 3: 4-Hour Chart (LTF)</p>
                <p className="text-sm text-slate-700">
                  Price is consolidating right at flag resistance. Watching for bullish engulfing candle + volume spike. Will enter on 4H close above resistance. <strong>Entry timing: Precise low-risk entry.</strong>
                </p>
              </div>
              <div className="bg-green-50 rounded p-4 border-l-4 border-green-400">
                <p className="text-sm font-semibold text-slate-900 mb-2">Trade Execution:</p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• <strong>HTF Trend:</strong> Bullish (weekly uptrend)</li>
                  <li>• <strong>TTF Setup:</strong> Bull flag (continuation pattern)</li>
                  <li>• <strong>LTF Entry:</strong> 4H breakout candle with volume</li>
                  <li>• <strong>Stop Loss:</strong> Below flag low (using daily chart)</li>
                  <li>• <strong>Target:</strong> Previous high + flag pole height (using weekly resistance)</li>
                  <li>• <strong>Result:</strong> High-probability trade aligned across all timeframes</li>
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
              <p className="text-lg"><strong>Three trend types:</strong> Uptrend (higher highs/lows), Downtrend (lower highs/lows), Sideways (range-bound).</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg"><strong>Trade WITH the trend, not against it.</strong> 80% of traders lose by fighting the dominant direction.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg"><strong>Trend strength matters.</strong> Strong trends = low-risk trades. Weak trends = chop and whipsaws.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg"><strong>Reversals require confirmation.</strong> Don't assume—wait for structure break, trendline violation, pattern completion.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg"><strong>Use multi-timeframe analysis.</strong> HTF for direction, TTF for setup, LTF for entry timing.</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Master Support & Resistance Next</h2>
          <p className="text-slate-600 mb-6">
            Trends tell you direction. Support and resistance tell you WHERE to enter and exit. Let's dive into the most critical price levels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/technical-analysis/support-resistance" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
              Next: Support & Resistance →
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
