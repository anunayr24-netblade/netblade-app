import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, TrendingUp, TrendingDown, Minus, Sparkles } from 'lucide-react';

export default function CandlestickPatternsTA() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/technical-analysis/candlestick-patterns-ta' } });
    }
  }, [navigate]);

  const topics = [
    { id: 'bullish-reversal', title: 'Bullish Reversal Patterns', icon: TrendingUp },
    { id: 'bearish-reversal', title: 'Bearish Reversal Patterns', icon: TrendingDown },
    { id: 'continuation', title: 'Continuation Patterns', icon: Minus },
    { id: 'special', title: 'Special & Advanced Patterns', icon: Sparkles }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <Link to="/technical-analysis" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6 sm:mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Back to Technical Analysis
        </Link>

        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Candlestick Patterns Masterclass
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl">
            Master the art of reading candlestick patterns—from basic single-candle formations to complex multi-candle reversal and continuation patterns. This comprehensive guide covers every essential pattern with detailed explanations, psychology, and trading strategies.
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
                  className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:from-green-100 hover:to-emerald-100 transition-all group"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-base font-medium text-slate-800">{topic.title}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 sm:space-y-12">

        {/* SECTION 1: BULLISH REVERSAL PATTERNS */}
        <div id="bullish-reversal" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🟢</span>
            <h2 className="text-3xl font-bold text-green-700">Bullish Reversal Patterns</h2>
          </div>
          <p className="text-lg text-slate-700 mb-8">
            These patterns appear after downtrends and signal potential upward reversals. They indicate that selling pressure is weakening and buyers are gaining control.
          </p>

          {/* 1. Hammer Candle */}
          <div className="border-l-4 border-green-500 bg-green-50 pl-6 pr-6 py-6 rounded-r-xl mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Hammer Candle</h3>
            
            <div className="bg-white rounded-xl p-6 mb-6">
              <h4 className="text-xl font-semibold text-green-700 mb-4">Structure & Significance</h4>
              <p className="text-slate-700 mb-4">
                The Hammer candlestick pattern is one of the most widely recognized and powerful reversal patterns in technical analysis. It is especially useful in identifying potential trend reversals after a downtrend. The Hammer candle signals that the market is beginning to shift, and it offers traders valuable insights into possible buying opportunities.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-3">Key Components:</h5>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li><strong>Small Body:</strong> Located at the upper end of the candlestick. Opening and closing prices are close to each other. Color (bullish or bearish) is less important than the shape.</li>
                    <li><strong>Long Lower Shadow:</strong> At least twice the length of the body. Shows that price dropped significantly but buyers pushed it back up.</li>
                    <li><strong>Short/No Upper Shadow:</strong> Very short or completely absent, indicating bulls reclaimed control by the close.</li>
                  </ul>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-3">The Significance:</h5>
                  <p className="text-sm text-slate-700 mb-3">
                    The Hammer shows that the market reached a low during the session, but the buying pressure at that level was strong enough to reverse the downtrend. This suggests that the selling momentum has stalled and that the market may soon shift to an uptrend.
                  </p>
                  <p className="text-sm text-slate-700">
                    <strong>Key Message:</strong> Sellers initially dominated the session, driving prices lower, but buyers were able to push prices back up by the close, demonstrating strength.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 mb-6">
              <h4 className="text-xl font-semibold text-green-700 mb-4">How to Interpret the Hammer</h4>
              <p className="text-slate-700 mb-4">
                For the Hammer to be a reliable reversal signal, it is essential that the price action shows signs of a potential change in market direction. A Hammer that appears during a downtrend can be an early indication of a bullish reversal, but traders often look for confirmation before entering a trade.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                  <h5 className="font-semibold text-green-900 mb-2">✅ Confirmation</h5>
                  <p className="text-sm text-slate-700">
                    The Hammer should ideally be followed by a strong bullish candle on the next trading session. The confirmation candle should close above the high of the Hammer, indicating that buyers have regained control.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                  <h5 className="font-semibold text-blue-900 mb-2">📊 Volume</h5>
                  <p className="text-sm text-slate-700">
                    Higher trading volume during the formation of the Hammer provides additional confirmation. High volume suggests strong participation from buyers, increasing the credibility of the reversal signal.
                  </p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                  <h5 className="font-semibold text-purple-900 mb-2">🎯 Support Levels</h5>
                  <p className="text-sm text-slate-700">
                    The Hammer is especially potent when it forms at or near a key support level—a historical price level, trendline, or moving average that prevents further price decline.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
              <h5 className="font-semibold text-slate-900 mb-2">📝 Example of Hammer Formation</h5>
              <p className="text-sm text-slate-700 mb-3">
                Imagine a stock has been in a downtrend for several weeks. During one trading session, the price opens lower and drops further, looking like the downtrend will continue. However, the bulls step in, and the price is pushed back up to close near the opening price. This creates a Hammer candle, indicating that despite strong selling pressure, the market was able to recover.
              </p>
              <p className="text-sm text-slate-700">
                <strong>Next Day Action:</strong> If the price opens higher and continues to rise, closing above the Hammer's high, traders interpret this as confirmation of the reversal, and a long trade could be initiated.
              </p>
            </div>
          </div>

          {/* 2. Inverted Hammer */}
          <div className="border-l-4 border-green-500 bg-green-50 pl-6 pr-6 py-6 rounded-r-xl mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Inverted Hammer</h3>
            
            <div className="bg-white rounded-xl p-6 mb-6">
              <h4 className="text-xl font-semibold text-green-700 mb-4">Structure & Psychology</h4>
              <p className="text-slate-700 mb-4">
                The Inverted Hammer is a significant candlestick pattern used to identify potential reversals in the market. Similar in structure to the Hammer but forms in a downtrend and signals a possible bullish reversal. This pattern is widely followed because of its strong predictive qualities when correctly interpreted.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-3">Pattern Structure:</h5>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li><strong>Small Body:</strong> Located at the lower end of the candlestick, near the close or open price. Can be bullish or bearish, but color is less important.</li>
                    <li><strong>Long Upper Shadow:</strong> At least twice the length of the body. Price was pushed significantly higher during the session but retreated back down.</li>
                    <li><strong>Short Lower Shadow:</strong> Very short or completely absent, indicating little downward price movement during the session.</li>
                  </ul>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-3">Market Psychology:</h5>
                  <p className="text-sm text-slate-700 mb-3">
                    The Inverted Hammer shows that buyers were able to momentarily gain control of the market by pushing prices higher, but they were not strong enough to hold onto their gains by the close. This indicates that despite the prevailing bearish trend, there is a potential shift in market sentiment.
                  </p>
                  <p className="text-sm text-slate-700">
                    <strong>Key Insight:</strong> Selling pressure has started to weaken, and the market may be ready for a reversal to the upside.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h4 className="text-xl font-semibold text-green-700 mb-4">Interpretation Guidelines</h4>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h5 className="font-semibold text-green-900 mb-2">Confirmation Required</h5>
                  <p className="text-sm text-slate-700">
                    For the Inverted Hammer to be a reliable reversal signal, it should be followed by a bullish candle. A confirmation candle, such as a long green candle that closes above the high of the Inverted Hammer, confirms that buyers are taking control. Without confirmation, the pattern may not signify a true reversal.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-900 mb-2">Volume Validation</h5>
                  <p className="text-sm text-slate-700">
                    Volume plays an important role in validating the Inverted Hammer. Higher-than-average volume during the formation indicates strong buying interest behind the pattern, making a reversal more likely.
                  </p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="font-semibold text-purple-900 mb-2">Support Level Context</h5>
                  <p className="text-sm text-slate-700">
                    The Inverted Hammer is more effective when it forms at key support levels—an established price level, trendline, or moving average. This increases the likelihood of a bullish reversal, as buyers often step in at these levels to push the price higher.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Continue with remaining bullish patterns */}
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Unlike Western bar charts, Japanese candlesticks provide a visual representation of market sentiment. Each candlestick tells a story of the battle between buyers (bulls) and sellers (bears) during that time period.
            </p>
            
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Anatomy of a Candlestick</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-green-700 mb-4">Bullish Candle (Green/White)</h4>
                  <div className="bg-slate-100 p-4 rounded font-mono text-sm mb-4">
                    <pre className="text-slate-700">
{`      High (Upper Wick)
         |
     ┌───────┐
     │       │  Body
     │       │  (Open to Close)
     │       │
     └───────┘
         |
      Low (Lower Wick)

Open: Bottom of body
Close: Top of body
Close > Open = Bullish`}
                    </pre>
                  </div>
                  <p className="text-sm text-slate-600">
                    Green candle shows buying pressure. Buyers pushed price higher from open to close. The longer the body, the stronger the buying momentum.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-red-700 mb-4">Bearish Candle (Red/Black)</h4>
                  <div className="bg-slate-100 p-4 rounded font-mono text-sm mb-4">
                    <pre className="text-slate-700">
{`      High (Upper Wick)
         |
     ┌───────┐
     │▓▓▓▓▓▓▓│  Body
     │▓▓▓▓▓▓▓│  (Open to Close)
     │▓▓▓▓▓▓▓│
     └───────┘
         |
      Low (Lower Wick)

Open: Top of body
Close: Bottom of body
Close < Open = Bearish`}
                    </pre>
                  </div>
                  <p className="text-sm text-slate-600">
                    Red candle shows selling pressure. Sellers pushed price lower from open to close. The longer the body, the stronger the selling momentum.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-white rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-3">Key Components:</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• <strong>Body:</strong> Distance between open and close (shows strength)</li>
                  <li>• <strong>Upper Wick (Shadow):</strong> Rejection of higher prices (selling pressure)</li>
                  <li>• <strong>Lower Wick (Shadow):</strong> Rejection of lower prices (buying pressure)</li>
                  <li>• <strong>Color:</strong> Green = Bulls won, Red = Bears won</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">What Candlesticks Reveal</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Momentum</h4>
                  <p className="text-sm text-slate-600">Large bodies = Strong momentum. Small bodies = Weak momentum or indecision.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">Rejection</h4>
                  <p className="text-sm text-slate-600">Long wicks = Price tested a level but was rejected. Important support/resistance signal.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-orange-700 mb-2">Sentiment</h4>
                  <p className="text-sm text-slate-600">Pattern combinations reveal whether bulls or bears are gaining control.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Single Candlestick Patterns */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Single Candlestick Patterns</h2>
          <p className="text-lg text-slate-700 mb-6">
            These patterns form from a single candle and can indicate reversals or continuations. Context is critical—the same pattern at support means something different than at resistance.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 bg-green-50 pl-6 pr-6 py-4 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">1. Doji</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-slate-700 mb-4">
                    A Doji forms when open and close are virtually the same, creating a very small or no body. It signals <strong>indecision</strong>—bulls and bears fought equally, no winner.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-slate-900 mb-2">When to Trade:</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• After strong uptrend → Possible reversal (top)</li>
                      <li>• After strong downtrend → Possible reversal (bottom)</li>
                      <li>• At support/resistance → Confirms level</li>
                      <li>• In sideways market → Ignore (just noise)</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <p className="text-sm font-semibold mb-3">Doji Types:</p>
                  <div className="space-y-3 font-mono text-xs">
                    <div>
                      <strong className="text-slate-900">Standard Doji:</strong>
                      <pre className="mt-1 text-slate-600">{`     |
     +  ← Open = Close
     |`}</pre>
                    </div>
                    <div>
                      <strong className="text-slate-900">Dragonfly Doji (Bullish):</strong>
                      <pre className="mt-1 text-slate-600">{`     +  ← Open/Close/High
     |
     |  Long lower wick = Strong rejection`}</pre>
                    </div>
                    <div>
                      <strong className="text-slate-900">Gravestone Doji (Bearish):</strong>
                      <pre className="mt-1 text-slate-600">{`     |
     |  Long upper wick = Strong rejection
     +  ← Open/Close/Low`}</pre>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-sm text-slate-700">
                  <strong>⚠️ Important:</strong> A Doji alone is not a trade signal. Wait for confirmation from the next candle. If next candle breaks direction, the trend continues.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 pl-6 pr-6 py-4 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">2. Hammer & Hanging Man</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-slate-700 mb-4">
                    Same shape, different context. Both have small bodies at the top and long lower wicks (2-3x body size). The wick shows sellers pushed price down, but buyers aggressively bought the dip.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-green-700 mb-2">Hammer (Bullish Reversal)</h4>
                    <p className="text-sm text-slate-600 mb-2">
                      Appears after <strong>downtrend</strong>. Shows selling exhaustion and buyer emergence.
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1 ml-4">
                      <li>• Forms at support levels</li>
                      <li>• Color doesn't matter (green preferred)</li>
                      <li>• Look for volume increase</li>
                      <li>• Confirms if next candle closes higher</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-red-700 mb-2">Hanging Man (Bearish Reversal)</h4>
                    <p className="text-sm text-slate-600 mb-2">
                      Appears after <strong>uptrend</strong>. Shows buying exhaustion and seller emergence.
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1 ml-4">
                      <li>• Forms at resistance levels</li>
                      <li>• Red body is stronger signal</li>
                      <li>• Needs bearish confirmation next candle</li>
                      <li>• Often precedes sharp drops</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <p className="text-sm font-semibold mb-3">Visual Comparison:</p>
                  <div className="space-y-4 font-mono text-xs">
                    <div>
                      <strong className="text-green-700">Hammer (After Downtrend):</strong>
                      <pre className="mt-2 text-slate-600">{`     ┌─┐
     └─┘  Small body
      |
      |   Long lower wick
      |   (shows buying pressure)
      
Example: ₹990 → ₹960 → ₹985 close
Buyers defended ₹960 strongly!`}</pre>
                    </div>
                    <div>
                      <strong className="text-red-700">Hanging Man (After Uptrend):</strong>
                      <pre className="mt-2 text-slate-600">{`     ┌─┐
     └─┘  Small body
      |
      |   Long lower wick
      |   (sellers tried pushing down)
      
Example: ₹1050 → ₹1020 → ₹1045 close
Warning: Buyers struggled!`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 bg-purple-50 pl-6 pr-6 py-4 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">3. Shooting Star & Inverted Hammer</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-slate-700 mb-4">
                    Opposite of Hammer/Hanging Man. Small body at the bottom, long upper wick. Shows buyers tried to push higher but sellers aggressively rejected.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-red-700 mb-2">Shooting Star (Bearish Reversal)</h4>
                    <p className="text-sm text-slate-600 mb-2">
                      After uptrend. Gap up open, rally, then sharp selloff to close near lows.
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1 ml-4">
                      <li>• Appears at resistance</li>
                      <li>• Red body stronger than green</li>
                      <li>• Long upper wick = rejection</li>
                      <li>• High probability reversal pattern</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 mb-2">Inverted Hammer (Bullish Reversal)</h4>
                    <p className="text-sm text-slate-600 mb-2">
                      After downtrend. Shows buyers testing higher prices, even if close is low.
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1 ml-4">
                      <li>• Forms at support</li>
                      <li>• Needs bullish confirmation</li>
                      <li>• Less reliable than Hammer</li>
                      <li>• Wait for follow-through</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <p className="text-sm font-semibold mb-3">Visual Structure:</p>
                  <div className="space-y-4 font-mono text-xs">
                    <div>
                      <strong className="text-red-700">Shooting Star:</strong>
                      <pre className="mt-2 text-slate-600">{`      |
      |   Long upper wick
      |   (strong rejection)
     ┌─┐
     └─┘  Small body at bottom
     
Forms after uptrend
₹1050 open → ₹1080 high → ₹1055 close
Bears took control!`}</pre>
                    </div>
                    <div>
                      <strong className="text-green-700">Inverted Hammer:</strong>
                      <pre className="mt-2 text-slate-600">{`      |
      |   Long upper wick
      |   (buyers testing)
     ┌─┐
     └─┘  Small body at bottom
     
Forms after downtrend
Buyers probing higher prices
Needs confirmation candle`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 pl-6 pr-6 py-4 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">4. Spinning Top</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-slate-700 mb-4">
                    Small body (can be green or red) with long upper and lower wicks of similar length. Shows extreme indecision—both bulls and bears tried to control but neither succeeded.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-slate-900 mb-2">Trading Implications:</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• <strong>After strong trend:</strong> Warns of possible reversal</li>
                      <li>• <strong>During consolidation:</strong> Ignore (just noise)</li>
                      <li>• <strong>Multiple spinning tops:</strong> Market is confused, stay out</li>
                      <li>• <strong>Near support/resistance:</strong> Wait for breakout direction</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <div className="font-mono text-xs">
                    <pre className="text-slate-600">{`      |
      |   Upper wick
     ┌─┐
     │ │  Small body
     └─┘
      |   Lower wick
      |
      
Example price action:
Open: ₹1000
High: ₹1015 (rejected)
Low: ₹985 (rejected)
Close: ₹1002

Neither side won = Indecision`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 pl-6 pr-6 py-4 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">5. Marubozu</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-slate-700 mb-4">
                    Long body with little to no wicks. Opens at one extreme, closes at the other. Shows <strong>total dominance</strong> by one side. Most powerful continuation pattern.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 mb-2">Bullish Marubozu</h4>
                    <p className="text-sm text-slate-600 mb-2">
                      Opens at/near low, closes at/near high. No upper wick. Buyers controlled entire session.
                    </p>
                    <p className="text-xs text-slate-600 italic">
                      Signal: Strong bullish continuation. Buy on next candle dip.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 mt-3">
                    <h4 className="font-semibold text-red-700 mb-2">Bearish Marubozu</h4>
                    <p className="text-sm text-slate-600 mb-2">
                      Opens at/near high, closes at/near low. No lower wick. Sellers controlled entire session.
                    </p>
                    <p className="text-xs text-slate-600 italic">
                      Signal: Strong bearish continuation. Sell/short on next candle rise.
                    </p>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <div className="space-y-4 font-mono text-xs">
                    <div>
                      <strong className="text-green-700">Bullish Marubozu:</strong>
                      <pre className="mt-2 text-slate-600">{`     ┌───┐
     │   │
     │   │  Long body
     │   │  No/tiny wicks
     │   │
     └───┘
     
Open = Low = ₹1000
Close = High = ₹1030
Buyers never lost control!`}</pre>
                    </div>
                    <div>
                      <strong className="text-red-700">Bearish Marubozu:</strong>
                      <pre className="mt-2 text-slate-600">{`     ┌───┐
     │▓▓▓│
     │▓▓▓│  Long body
     │▓▓▓│  No/tiny wicks
     │▓▓▓│
     └───┘
     
Open = High = ₹1050
Close = Low = ₹1020
Sellers never lost control!`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multiple Candlestick Patterns */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Multiple Candlestick Patterns</h2>
          <p className="text-lg text-slate-700 mb-6">
            These patterns form from 2-3 candlesticks and are generally more reliable than single-candle patterns. They tell a complete story of sentiment shift.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 bg-green-50 pl-6 pr-6 py-4 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">1. Bullish Engulfing (Strong Buy Signal)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-slate-700 mb-4">
                    Two-candle pattern. Small red candle followed by large green candle that completely "engulfs" the previous red candle's body. Shows dramatic sentiment shift from bearish to bullish.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-slate-900 mb-2">Requirements:</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Must occur after <strong>downtrend</strong></li>
                      <li>• Day 1: Small red candle (seller control)</li>
                      <li>• Day 2: Large green candle (buyer takeover)</li>
                      <li>• Green body must fully engulf red body</li>
                      <li>• Larger the engulfing, stronger the signal</li>
                      <li>• Confirmed if next candle also green</li>
                    </ul>
                  </div>
                  <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <p className="text-sm text-slate-700">
                      <strong>Trading Strategy:</strong> Buy on close of engulfing candle or next candle pullback. Stop loss below engulfing candle's low. Target resistance levels.
                    </p>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <div className="font-mono text-xs">
                    <pre className="text-slate-600">{`Day 1          Day 2
             ┌─────────┐
             │         │
┌─┐         │         │
│▓│ Small   │         │ Large
└─┘ Red     │         │ Green
             │         │
             └─────────┘
             
Price action story:
Day 1: Sellers in control (₹980-₹975)
Gap down or open low on Day 2
Buyers aggressively stepped in
Closed well above Day 1 open (₹995)

This is a power shift!`}</pre>
                  </div>
                  <p className="text-sm text-slate-700 mt-4">
                    <strong>Why it works:</strong> Bears thought they were winning (Day 1), but bulls completely reversed in one session, trapping shorts and triggering covering.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 pl-6 pr-6 py-4 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">2. Bearish Engulfing (Strong Sell Signal)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-slate-700 mb-4">
                    Mirror opposite of Bullish Engulfing. Small green candle followed by large red candle that engulfs it. Shows sentiment flip from bullish to bearish. Often marks tops.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-slate-900 mb-2">Requirements:</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Must occur after <strong>uptrend</strong></li>
                      <li>• Day 1: Small green candle (buyer control)</li>
                      <li>• Day 2: Large red candle (seller takeover)</li>
                      <li>• Red body must fully engulf green body</li>
                      <li>• High volume increases reliability</li>
                      <li>• Especially powerful at resistance</li>
                    </ul>
                  </div>
                  <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <p className="text-sm text-slate-700">
                      <strong>Trading Strategy:</strong> Sell/short on close of engulfing candle. Stop loss above engulfing candle's high. Target support levels. Exit fast if pattern fails.
                    </p>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <div className="font-mono text-xs">
                    <pre className="text-slate-600">{`Day 1          Day 2
             ┌─────────┐
             │▓▓▓▓▓▓▓▓▓│
┌─┐         │▓▓▓▓▓▓▓▓▓│
│ │ Small   │▓▓▓▓▓▓▓▓▓│ Large
└─┘ Green   │▓▓▓▓▓▓▓▓▓│ Red
             │▓▓▓▓▓▓▓▓▓│
             └─────────┘
             
Price action story:
Day 1: Buyers in control (₹1040-₹1045)
Gap up or open high on Day 2
Sellers overwhelmed buyers
Closed well below Day 1 open (₹1025)

Bulls are trapped!`}</pre>
                  </div>
                  <p className="text-sm text-slate-700 mt-4">
                    <strong>Why it works:</strong> Bulls were confident (Day 1), but bears shocked market with strength. Longs panic sell, accelerating the decline.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 pl-6 pr-6 py-4 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">3. Morning Star & Evening Star</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-3">Morning Star (Bullish Reversal - 3 Candles)</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-slate-700 mb-3">
                        One of the most reliable reversal patterns. Three candles showing transition from selling to buying.
                      </p>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-xs font-semibold text-slate-900 mb-2">Pattern Structure:</p>
                        <ul className="space-y-2 text-xs text-slate-600">
                          <li><strong>Candle 1:</strong> Long red (downtrend continues)</li>
                          <li><strong>Candle 2:</strong> Small body (doji or spinning top) - Indecision</li>
                          <li><strong>Candle 3:</strong> Long green (buyers take control)</li>
                          <li>Candle 3 should close above midpoint of Candle 1</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-slate-100 rounded-lg p-4 font-mono text-xs">
                      <pre className="text-slate-600">{`Day 1    Day 2    Day 3
┌───┐            ┌───────┐
│▓▓▓│     ┌─┐    │       │
│▓▓▓│     └─┘    │       │
│▓▓▓│ Long Small │       │ Long
│▓▓▓│ Red   Gap  │       │ Green
└───┘            └───────┘

Story: Selling → Pause → Buying`}</pre>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-red-700 mb-3">Evening Star (Bearish Reversal - 3 Candles)</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-slate-700 mb-3">
                        Opposite of Morning Star. Marks the end of uptrends. Three candles showing transition from buying to selling.
                      </p>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-xs font-semibold text-slate-900 mb-2">Pattern Structure:</p>
                        <ul className="space-y-2 text-xs text-slate-600">
                          <li><strong>Candle 1:</strong> Long green (uptrend continues)</li>
                          <li><strong>Candle 2:</strong> Small body (doji or spinning top) - Indecision</li>
                          <li><strong>Candle 3:</strong> Long red (sellers take control)</li>
                          <li>Candle 3 should close below midpoint of Candle 1</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-slate-100 rounded-lg p-4 font-mono text-xs">
                      <pre className="text-slate-600">{`Day 1    Day 2    Day 3
┌───────┐        ┌───┐
│       │  ┌─┐   │▓▓▓│
│       │  └─┘   │▓▓▓│
│       │ Small  │▓▓▓│ Long
│       │  Gap   │▓▓▓│ Red
└───────┘        └───┘
Long Green

Story: Buying → Pause → Selling`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 bg-purple-50 pl-6 pr-6 py-4 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">4. Piercing Pattern & Dark Cloud Cover</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-3">Piercing Pattern (Bullish)</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    Two-candle pattern. After downtrend, red candle followed by green candle that opens below previous low (gap down) but closes above midpoint of red candle.
                  </p>
                  <div className="bg-white rounded-lg p-4 text-xs text-slate-600">
                    <strong>Psychology:</strong> Bears thought gap down would continue selloff, but bulls aggressively bought, "piercing" into previous day's range. Shows buyer strength.
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-3">Dark Cloud Cover (Bearish)</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    Two-candle pattern. After uptrend, green candle followed by red candle that opens above previous high (gap up) but closes below midpoint of green candle.
                  </p>
                  <div className="bg-white rounded-lg p-4 text-xs text-slate-600">
                    <strong>Psychology:</strong> Bulls thought gap up would continue rally, but bears aggressively sold, covering the green candle like a "dark cloud." Shows seller strength.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Trading Tips */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-green-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Practical Trading Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-700 mb-4">Do's ✅</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Wait for confirmation:</strong> Never trade on the pattern candle itself. Wait for the next candle to confirm direction.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Check context:</strong> Same pattern means different things at support vs resistance, uptrend vs downtrend.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Use volume:</strong> High volume confirms the pattern. Low volume = weak signal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Combine with support/resistance:</strong> Patterns at key levels have highest probability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Set stop losses:</strong> Always protect yourself. Stop below/above the pattern formation.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-4">Don'ts ❌</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Trade in isolation:</strong> Don't rely on candlesticks alone. Use with other tools (RSI, moving averages, etc.).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Ignore the trend:</strong> Reversal patterns against strong trends often fail. Trend is king.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Overtrade:</strong> Not every pattern is a trade. Be selective—only trade high-probability setups.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Skip confirmation:</strong> Jumping in without confirmation leads to losses. Patience pays.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Use on low liquidity stocks:</strong> Patterns work best on liquid stocks with genuine supply/demand dynamics.</span>
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
              <p className="text-lg">Candlesticks show <strong>market psychology</strong>—the battle between buyers and sellers.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg">Single-candle patterns: <strong>Doji (indecision), Hammer/Hanging Man (reversal), Marubozu (continuation)</strong>.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg">Multi-candle patterns are <strong>more reliable</strong>: Engulfing, Morning/Evening Star.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg"><strong>Context is everything</strong>—same pattern at support vs resistance = different meaning.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg">Always wait for <strong>confirmation candle</strong> before trading. Never rush.</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Master Price Action!</h2>
          <p className="text-slate-600 mb-6">
            You've learned individual candlesticks. Next, we'll combine multiple candles to form chart patterns—the bigger picture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/technical-analysis/chart-patterns" className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
              Next: Chart Patterns →
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
