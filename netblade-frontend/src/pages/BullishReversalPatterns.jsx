import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function BullishReversalPatterns() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/bullish-reversal-patterns' } });
    }
  }, [navigate]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link to="/learn" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
            ← Back to Learn
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🟢</span>
            <h1 className="text-4xl font-bold text-green-700">Bullish Reversal Patterns</h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            Master the art of identifying trend reversals with 11 powerful bullish patterns. These formations signal the end of downtrends and the beginning of upward moves, helping you catch market bottoms with confidence.
          </p>
          
          {/* Hero Visual */}
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-8 mb-6">
            <div className="text-center">
              <div className="text-6xl mb-4">📈🟩🔄</div>
              <p className="text-lg font-semibold text-slate-700">From Bears to Bulls</p>
              <p className="text-sm text-slate-600 mt-2">Recognizing the shift in market sentiment</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="bg-slate-50 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 mb-4">📑 Patterns Covered (11 Total)</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <a href="#hammer" className="text-green-600 hover:text-green-700">→ Hammer Candle</a>
              <a href="#inverted-hammer" className="text-green-600 hover:text-green-700">→ Inverted Hammer</a>
              <a href="#morning-star" className="text-green-600 hover:text-green-700">→ Morning Star</a>
              <a href="#bullish-engulfing" className="text-green-600 hover:text-green-700">→ Bullish Engulfing</a>
              <a href="#piercing-line" className="text-green-600 hover:text-green-700">→ Piercing Line</a>
              <a href="#three-white-soldiers" className="text-green-600 hover:text-green-700">→ Three White Soldiers</a>
              <a href="#morning-doji-star" className="text-green-600 hover:text-green-700">→ Morning Doji Star</a>
              <a href="#tweezer-bottom" className="text-green-600 hover:text-green-700">→ Tweezer Bottom</a>
              <a href="#dragonfly-doji" className="text-green-600 hover:text-green-700">→ Dragonfly Doji</a>
              <a href="#bullish-belt-hold" className="text-green-600 hover:text-green-700">→ Bullish Belt Hold</a>
              <a href="#bullish-kicker" className="text-green-600 hover:text-green-700">→ Bullish Kicker</a>
            </div>
          </div>
        </div>

        {/* Pattern 1: Hammer */}
        <div id="hammer" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="border-l-4 border-green-500 pl-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">1. Hammer Candle</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Structure & Significance</h3>
              <p className="text-slate-700 mb-4">
                The Hammer candlestick pattern is one of the most widely recognized and powerful reversal patterns in technical analysis. It is especially useful in identifying potential trend reversals after a downtrend. The Hammer candle signals that the market is beginning to shift, and it offers traders valuable insights into possible buying opportunities.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Components:</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li><strong>Small Body:</strong> Located at the upper end of the candlestick. Opening and closing prices are close to each other. Color (bullish or bearish) is less important than the shape.</li>
                    <li><strong>Long Lower Shadow:</strong> At least twice the length of the body. Shows that price dropped significantly but buyers pushed it back up.</li>
                    <li><strong>Short/No Upper Shadow:</strong> Very short or completely absent, indicating bulls reclaimed control by the close.</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3">The Significance:</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    The Hammer shows that the market reached a low during the session, but the buying pressure at that level was strong enough to reverse the downtrend. This suggests that the selling momentum has stalled and that the market may soon shift to an uptrend.
                  </p>
                  <p className="text-sm text-slate-700">
                    <strong>Key Message:</strong> Sellers initially dominated the session, driving prices lower, but buyers were able to push prices back up by the close, demonstrating strength.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4">How to Interpret the Hammer</h3>
              <p className="text-slate-700 mb-4">
                For the Hammer to be a reliable reversal signal, it is essential that the price action shows signs of a potential change in market direction. A Hammer that appears during a downtrend can be an early indication of a bullish reversal, but traders often look for confirmation before entering a trade.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-green-100 rounded-lg p-4 border-2 border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">✅ Confirmation</h4>
                  <p className="text-sm text-slate-700">
                    The Hammer should ideally be followed by a strong bullish candle on the next trading session. The confirmation candle should close above the high of the Hammer, indicating that buyers have regained control.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">📊 Volume</h4>
                  <p className="text-sm text-slate-700">
                    Higher trading volume during the formation of the Hammer provides additional confirmation. High volume suggests strong participation from buyers, increasing the credibility of the reversal signal.
                  </p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">🎯 Support Levels</h4>
                  <p className="text-sm text-slate-700">
                    The Hammer is especially potent when it forms at or near a key support level—a historical price level, trendline, or moving average that prevents further price decline.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
              <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
              <p className="text-sm text-slate-700 mb-3">
                Imagine a stock has been in a downtrend for several weeks. During one trading session, the price opens lower and drops further, looking like the downtrend will continue. However, the bulls step in, and the price is pushed back up to close near the opening price. This creates a Hammer candle, indicating that despite strong selling pressure, the market was able to recover.
              </p>
              <p className="text-sm text-slate-700">
                <strong>Next Day Action:</strong> If the price opens higher and continues to rise, closing above the Hammer's high, traders interpret this as confirmation of the reversal, and a long trade could be initiated.
              </p>
            </div>
          </div>
        </div>

        {/* Pattern 2: Inverted Hammer */}
        <div id="inverted-hammer" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="border-l-4 border-green-500 pl-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">2. Inverted Hammer</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Structure & Psychology</h3>
              <p className="text-slate-700 mb-4">
                The Inverted Hammer is a significant candlestick pattern used to identify potential reversals in the market. Similar in structure to the Hammer but forms in a downtrend and signals a possible bullish reversal. This pattern is widely followed because of its strong predictive qualities when correctly interpreted.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3">Pattern Structure:</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li><strong>Small Body:</strong> Located at the lower end of the candlestick, near the close or open price. Can be bullish or bearish, but color is less important.</li>
                    <li><strong>Long Upper Shadow:</strong> At least twice the length of the body. Price was pushed significantly higher during the session but retreated back down.</li>
                    <li><strong>Short Lower Shadow:</strong> Very short or completely absent, indicating little downward price movement during the session.</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-3">Market Psychology:</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    The Inverted Hammer shows that buyers were able to momentarily gain control of the market by pushing prices higher, but they were not strong enough to hold onto their gains by the close. This indicates that despite the prevailing bearish trend, there is a potential shift in market sentiment.
                  </p>
                  <p className="text-sm text-slate-700">
                    <strong>Key Insight:</strong> Selling pressure has started to weaken, and the market may be ready for a reversal to the upside.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Interpretation Guidelines</h3>
              <div className="space-y-4">
                <div className="bg-green-100 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Confirmation Required</h4>
                  <p className="text-sm text-slate-700">
                    For the Inverted Hammer to be a reliable reversal signal, it should be followed by a bullish candle. A confirmation candle, such as a long green candle that closes above the high of the Inverted Hammer, confirms that buyers are taking control. Without confirmation, the pattern may not signify a true reversal.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Volume Validation</h4>
                  <p className="text-sm text-slate-700">
                    Volume plays an important role in validating the Inverted Hammer. Higher-than-average volume during the formation indicates strong buying interest behind the pattern, making a reversal more likely.
                  </p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Support Level Context</h4>
                  <p className="text-sm text-slate-700">
                    The Inverted Hammer is more effective when it forms at key support levels—an established price level, trendline, or moving average. This increases the likelihood of a bullish reversal, as buyers often step in at these levels to push the price higher.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining Patterns - Condensed Format */}
        <div className="space-y-8">
          {/* Pattern 3: Morning Star */}
          <div id="morning-star" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-green-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Morning Star</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Structure & Significance</h3>
                <p className="text-slate-700 mb-4">
                  The Morning Star is a powerful three-candle bullish reversal pattern that typically appears after a prolonged downtrend. It begins with a long bearish candle, indicating continued selling pressure. The second candle is smaller, often a doji or spinning top, representing market indecision. The third candle is a long bullish candle that closes well into the body of the first candle, signifying a strong shift in sentiment from sellers to buyers.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Pattern Components:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>First Candle:</strong> Long bearish candle showing strong selling pressure and continuation of downtrend.</li>
                      <li><strong>Second Candle:</strong> Small-bodied candle (doji or spinning top) that gaps down, representing indecision and potential trend exhaustion.</li>
                      <li><strong>Third Candle:</strong> Long bullish candle that gaps up and closes well into the first candle's body, confirming reversal.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">The Significance:</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      This pattern highlights a transition in control from bears to bulls and often signals the beginning of an upward trend. The small middle candle represents a turning point where sellers lose momentum.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>Key Message:</strong> After strong selling, indecision emerges, then buyers decisively take control, pushing prices significantly higher.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">How to Interpret</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-green-100 rounded-lg p-4 border-2 border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2">✅ Gap Analysis</h4>
                    <p className="text-sm text-slate-700">
                      Gaps between candles strengthen the pattern. The gap down after first candle shows continued bearish sentiment. The gap up on third candle confirms bullish takeover. Larger gaps = stronger signal.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📊 Volume Confirmation</h4>
                    <p className="text-sm text-slate-700">
                      Volume should decrease on the second candle (indecision) and surge on the third candle (buyers stepping in). High volume on the third candle validates the reversal strength.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 Support Context</h4>
                    <p className="text-sm text-slate-700">
                      Most reliable when forming at major support levels, previous swing lows, or Fibonacci retracement levels. RSI below 30 adds confirmation of oversold conditions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
                <p className="text-sm text-slate-700 mb-3">
                  A stock has been falling for 3 weeks, dropping from ₹500 to ₹420. On Monday, it closes at ₹418 with a long red candle (sellers dominant). Tuesday opens at ₹415 with a small doji, closing at ₹416 (indecision—neither side wins). Wednesday gaps up, opens at ₹419, and closes at ₹432 with strong volume (buyers take control). This creates a Morning Star pattern.
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Entry:</strong> Buy when Thursday's candle opens and confirms by moving higher, or buy immediately after Wednesday's close at ₹432.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Risk Management:</strong> Stop loss at ₹413 (below Tuesday's low). Target ₹450 (previous resistance), giving 2.5:1 reward-to-risk ratio.
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 4: Bullish Engulfing */}
          <div id="bullish-engulfing" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-green-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Bullish Engulfing</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Structure & Significance</h3>
                <p className="text-slate-700 mb-4">
                  The Bullish Engulfing pattern is a strong two-candle bullish reversal pattern that often occurs after a downtrend. The first candle is small and bearish, while the second is a large bullish candle that completely engulfs the body of the previous one. This formation indicates that buying pressure has overtaken selling pressure, with bulls gaining control of the market.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Pattern Structure:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>First Candle:</strong> Small bearish candle showing weak selling pressure or exhaustion of the downtrend.</li>
                      <li><strong>Second Candle:</strong> Large bullish candle that opens at or below the first candle's close and closes above the first candle's open, completely engulfing it.</li>
                      <li><strong>Body Engulfment:</strong> Only the real bodies need to be engulfed; shadows are less important.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">The Significance:</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      The complete engulfment shows a dramatic shift in market power. Sellers couldn't maintain control even for one session. Bulls came in with overwhelming force and completely reversed the previous day's action.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>Key Message:</strong> The bigger the engulfing candle relative to the first, the more powerful the reversal signal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">How to Interpret</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-green-100 rounded-lg p-4 border-2 border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2">✅ Size Matters</h4>
                    <p className="text-sm text-slate-700">
                      The larger the engulfing candle compared to the first candle, the stronger the reversal signal. Look for engulfing candles that are 2-3x the size of the first candle for best reliability.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📊 Volume Surge</h4>
                    <p className="text-sm text-slate-700">
                      Volume should be significantly higher on the engulfing candle—ideally 1.5-2x average volume. This confirms genuine buyer interest and not just low-volume noise.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 Trend Context</h4>
                    <p className="text-sm text-slate-700">
                      Most effective after clear 3-5 candle downtrend. At major support levels or near 52-week lows. Check that previous trend was definitively bearish for clean reversal signal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
                <p className="text-sm text-slate-700 mb-3">
                  Tech stock XYZ has declined from ₹850 to ₹750 over 2 weeks with consistent red candles. On Day 10, a small bearish candle closes at ₹748 (open ₹752). On Day 11, stock opens at ₹746, appears weak initially, but then buyers surge in. It closes at ₹760 with heavy volume—completely engulfing Day 10's body. The bullish candle is 3x larger than Day 10's candle.
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Entry Signal:</strong> Buy at close of Day 11 (₹760) or on Day 12 if it opens higher and confirms strength.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Risk Management:</strong> Stop loss at ₹742 (below pattern low). First target ₹780 (previous resistance), then ₹800. Risk of ₹18 for potential gain of ₹40+ (2.2:1 minimum ratio).
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 5: Piercing Line */}
          <div id="piercing-line" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-green-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Piercing Line</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Structure & Significance</h3>
                <p className="text-slate-700 mb-4">
                  The Piercing Line is a two-candle bullish reversal pattern that typically appears at the end of a downtrend. It consists of a long bearish candle followed by a bullish candle that opens below the previous day's low (creating a gap down) but closes above the midpoint of the first candle's body. This dramatic recovery from gap-down weakness demonstrates aggressive buyer intervention.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Pattern Components:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>First Candle:</strong> Long bearish candle showing continued selling pressure in the downtrend.</li>
                      <li><strong>Gap Down:</strong> Second candle opens below the first candle's low, suggesting continued weakness.</li>
                      <li><strong>Strong Recovery:</strong> Second candle closes above 50% of first candle's body—minimum requirement for validity.</li>
                      <li><strong>Penetration Depth:</strong> Deeper penetration (60-70%+) indicates stronger reversal signal.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">The Significance:</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      The gap down opening initially appears bearish, triggering fear and capitulation. But buyers step in aggressively, driving price not just back to opening levels, but deep into the previous day's losses.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>Psychology:</strong> Bears are trapped—they sold at gap down expecting further decline, but bulls overwhelm them, forcing short covering and attracting new buyers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">How to Interpret</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-green-100 rounded-lg p-4 border-2 border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2">✅ Penetration Depth</h4>
                    <p className="text-sm text-slate-700">
                      50% penetration = minimum valid signal. 60-70% = strong signal. 80%+ = very strong (almost Bullish Engulfing). Measure from close to close of first candle, not including shadows.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📊 Volume Pattern</h4>
                    <p className="text-sm text-slate-700">
                      Volume should be noticeably higher on second candle, especially in final hours of trading. This confirms genuine buying interest, not just short covering. Look for 1.5-2x normal volume.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 Support Context</h4>
                    <p className="text-sm text-slate-700">
                      Most reliable near major support zones, previous swing lows, or psychological round numbers. Check RSI {'<'} 30 (oversold) for additional confirmation. Best after multi-week downtrend.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
                <p className="text-sm text-slate-700 mb-3">
                  Pharma stock DEF has declined from ₹620 to ₹540 over 10 days with consistent selling. Day 10 closes at ₹538 with long red candle (open ₹548, close ₹538). Day 11 opens at ₹532 (gap down ₹6), triggering stop losses and panic. But buyers emerge—stock rallies throughout day, closes at ₹545. Penetration: ₹7 into ₹10 body = 70% (very strong). Volume is 2.2x average.
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Entry Strategy:</strong> Buy at close of Day 11 (₹545) or wait for Day 12 confirmation. Conservative: Wait for break above Day 10 high (₹548).
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Risk Management:</strong> Stop loss at ₹528 (below Day 11 low). First target ₹565 (previous resistance), then ₹590. Risk ₹17 for ₹45 gain (2.6:1 reward-to-risk ratio).
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 6: Three White Soldiers */}
          <div id="three-white-soldiers" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-green-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Three White Soldiers</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Structure & Significance</h3>
                <p className="text-slate-700 mb-4">
                  The Three White Soldiers pattern is a bullish reversal pattern consisting of three consecutive long-bodied candlesticks. These candles open within or near the previous candle's body and close progressively higher, forming a staircase-like structure. This pattern signifies a strong and sustained shift in market sentiment from bearish to bullish.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Pattern Characteristics:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Three Consecutive Candles:</strong> All three candles must be bullish (green/white) with long real bodies.</li>
                      <li><strong>Progressive Closes:</strong> Each candle closes higher than the previous, showing sustained buying momentum.</li>
                      <li><strong>Opening Within Body:</strong> Each candle opens within or near the middle of the previous candle's body—not at the highs.</li>
                      <li><strong>Minimal Shadows:</strong> Upper and lower shadows should be small or absent, showing buyers in complete control.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">The Significance:</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      This pattern shows sustained, deliberate buying over three consecutive sessions—not a one-day fluke. The staircase structure indicates organized accumulation by smart money.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>Military Analogy:</strong> Like three soldiers marching forward in formation—disciplined, coordinated, unstoppable advance of buyers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">How to Interpret</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-green-100 rounded-lg p-4 border-2 border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2">✅ Candle Uniformity</h4>
                    <p className="text-sm text-slate-700">
                      All three candles should be roughly similar size. If third candle is much smaller than first two (called "Stalling"), it weakens the pattern and may signal exhaustion instead of continuation.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📊 Progressive Volume</h4>
                    <p className="text-sm text-slate-700">
                      Volume should maintain or increase across all three candles. Declining volume on third candle may indicate weakening momentum. Ideal: Volume spike on third candle confirming strength.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 Timing & Context</h4>
                    <p className="text-sm text-slate-700">
                      Most powerful after significant downtrends or at major support. If appears after extended uptrend, can indicate continuation but watch for exhaustion. Best at bottoms, risky at tops.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
                <p className="text-sm text-slate-700 mb-3">
                  Banking stock ABC has corrected from ₹1200 to ₹1050 over 3 weeks. Day 1: Opens at ₹1048, closes at ₹1068 (₹20 gain, small shadows). Day 2: Opens at ₹1065, closes at ₹1088 (₹23 gain, strong body). Day 3: Opens at ₹1086, closes at ₹1110 (₹24 gain, minimal shadows). All three candles show progressively higher closes with good volume—textbook Three White Soldiers.
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Entry Strategy:</strong> Conservative: Buy on Day 4 if it confirms with another green candle. Aggressive: Buy at close of Day 3 at ₹1110.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Risk Management:</strong> Stop loss at ₹1044 (below Day 1 open). Target ₹1150 (previous resistance), then ₹1200 (original high). Risk ₹66 for ₹90 gain (1.4:1 ratio to first target, 1.4:1 to final target).
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 7: Morning Doji Star */}
          <div id="morning-doji-star" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-green-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Morning Doji Star</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Structure & Significance</h3>
                <p className="text-slate-700 mb-4">
                  The Morning Doji Star is a powerful three-candle bullish reversal pattern and a variation of the Morning Star. Instead of a small-bodied middle candle, it features a Doji (open equals close) that gaps down from a long bearish candle. The third candle is a strong bullish candle that gaps up and closes well into the first candle's body. The Doji represents peak indecision and balance before the decisive bullish reversal.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Three-Candle Structure:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>First Candle:</strong> Long bearish candle continuing the existing downtrend—strong selling pressure.</li>
                      <li><strong>Second Candle (Doji):</strong> Gaps down from first candle. Open equals close (or nearly). Shows complete indecision and equilibrium.</li>
                      <li><strong>Third Candle:</strong> Long bullish candle that gaps up and closes above the midpoint of the first candle—decisive buyers take control.</li>
                      <li><strong>Gap Requirements:</strong> Gaps between all three candles strengthen the signal significantly.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">The Significance:</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      The Doji at the bottom represents the exact moment selling exhausts—neither bulls nor bears can push price. This perfect equilibrium is unstable and typically resolves quickly.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>Key Insight:</strong> More reliable than regular Morning Star because Doji shows complete capitulation and neutrality before reversal. The pattern becomes self-fulfilling as technicians recognize it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">How to Interpret</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-green-100 rounded-lg p-4 border-2 border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2">✅ Gap Analysis</h4>
                    <p className="text-sm text-slate-700">
                      Ideal pattern has clear gaps between all three candles. First gap down shows continued selling, second gap up shows decisive buying. Gaps don't need to be huge—even small gaps add reliability.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📊 Volume Sequence</h4>
                    <p className="text-sm text-slate-700">
                      Classic volume pattern: High on first candle (selling climax), Low on Doji (indecision), Very High on third candle (buyers flood in). This V-shaped volume confirms the reversal psychology.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 Location Matters</h4>
                    <p className="text-sm text-slate-700">
                      Most effective at major support zones, round numbers (₹100, ₹500), or 52-week lows. Check for RSI divergence (price lower lows, RSI higher lows). Fibonacci 61.8% retracement levels ideal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
                <p className="text-sm text-slate-700 mb-3">
                  Auto stock GHI drops from ₹890 to ₹780 over 2 weeks. Day 13: Long red candle closes at ₹778 (open ₹790, heavy selling). Day 14: Gaps down to ₹774, trades in tiny range, closes at ₹774 (perfect Doji—complete indecision). Day 15: Gaps up to ₹778, surges all day, closes at ₹802 with volume 3x average. Clear three-candle Morning Doji Star with gaps.
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Entry Strategy:</strong> Aggressive: Buy at close of Day 15 (₹802). Conservative: Wait for Day 16 to confirm above ₹805.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Risk Management:</strong> Stop loss at ₹770 (below Doji low). First target ₹830 (previous resistance), then ₹860. Risk ₹32 for ₹58 gain (1.8:1 ratio to final target).
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 8: Tweezer Bottom */}
          <div id="tweezer-bottom" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-green-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">8. Tweezer Bottom</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Structure & Significance</h3>
                <p className="text-slate-700 mb-4">
                  A Tweezer Bottom is a bullish reversal pattern consisting of two or more consecutive candlesticks with matching or nearly matching lows. The pattern typically shows a bearish first candle followed by a bullish second candle, both testing the same support level. This double-test of support demonstrates that sellers cannot push prices any lower, suggesting exhaustion of selling pressure.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Pattern Characteristics:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Matching Lows:</strong> Two (or more) consecutive candles with identical or near-identical low prices—precision matters.</li>
                      <li><strong>First Candle:</strong> Usually bearish, showing selling pressure as downtrend continues.</li>
                      <li><strong>Second Candle:</strong> Typically bullish—tests same low but closes higher, showing buyers defending level.</li>
                      <li><strong>Shadow Length:</strong> Longer lower shadows strengthen the signal—shows strong rejection of lower prices.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">The Significance:</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      Like a vice or pliers testing strength—the support level holds firm under repeated pressure. Sellers throw everything at this level twice and fail both times.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>Market Psychology:</strong> First test traps aggressive bears who sell at lows expecting further decline. Second test confirms bottom—trapped bears cover, new buyers enter, creating reversal momentum.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">How to Interpret</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-green-100 rounded-lg p-4 border-2 border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2">✅ Precision Check</h4>
                    <p className="text-sm text-slate-700">
                      Lows should match within ₹1-2 for stocks, 0.01-0.02 for indices. Exact matching is ideal but not required. The closer the match, the stronger the support confirmation. Three or more matching lows = very strong.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📊 Volume Confirmation</h4>
                    <p className="text-sm text-slate-700">
                      Volume should spike on second candle as buyers defend the level. If second candle has lower volume, pattern is weaker—may indicate lack of conviction. Look for 1.5x+ volume increase.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 Support Context</h4>
                    <p className="text-sm text-slate-700">
                      Most reliable at major support zones: previous swing lows, 200-day MA, psychological round numbers, Fibonacci levels. After multi-day/week downtrends. Check for bullish RSI divergence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
                <p className="text-sm text-slate-700 mb-3">
                  Telecom stock JKL declines from ₹325 to ₹280 over 8 trading days. Day 8: Bearish candle opens ₹284, sells off to low of ₹278, closes ₹279 (long lower shadow). Day 9: Opens ₹281, drops to ₹278.50 (same low!), but buyers emerge strong—closes at ₹287 with volume 1.8x average. Perfect Tweezer Bottom at ₹278 support.
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Entry Strategy:</strong> Buy at close of Day 9 (₹287) or wait for Day 10 confirmation above Day 9 high (₹289).
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Risk Management:</strong> Stop loss at ₹275 (below tweezer low with buffer). First target ₹300 (previous resistance), then ₹315. Risk ₹12 for ₹28 gain (2.3:1 reward-to-risk).
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 9: Dragonfly Doji */}
          <div id="dragonfly-doji" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-green-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">9. Dragonfly Doji</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Structure & Significance</h3>
                <p className="text-slate-700 mb-4">
                  The Dragonfly Doji is a single-candle pattern that occurs when the open, close, and high prices are identical or very close together, while the low price creates a long lower shadow. This forms a "T" shape. The pattern demonstrates that although sellers drove prices significantly lower during the session, buyers regained complete control and pushed prices all the way back to the opening level by the close.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Pattern Structure:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Open = Close = High:</strong> All three prices at same level (or within few paise), forming flat top.</li>
                      <li><strong>Long Lower Shadow:</strong> Shows significant intraday decline—sellers pushed hard but failed.</li>
                      <li><strong>Shadow Length:</strong> Longer shadow = stronger reversal. Ideal ratio: shadow 2-3x the body (which is zero).</li>
                      <li><strong>Body Absence:</strong> Zero or near-zero body shows perfect equilibrium at session end despite volatility.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">The Significance:</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      Named for its dragonfly shape with wings at top and body extending down. The complete recovery from lows shows powerful buying pressure and seller exhaustion.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>Psychology:</strong> Sellers test new lows, triggering stops and creating panic. But all those sellers get absorbed by aggressive buyers who push price back to open—trapping bears completely.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">How to Interpret</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-green-100 rounded-lg p-4 border-2 border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2">✅ Shadow Length</h4>
                    <p className="text-sm text-slate-700">
                      The longer the lower shadow relative to recent candles, the more significant the pattern. Shadow should be at least 2x average candle body size. Very long shadows (3-4x) indicate extreme reversal potential.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📊 Volume Analysis</h4>
                    <p className="text-sm text-slate-700">
                      High volume on Dragonfly Doji day confirms genuine battle between bulls and bears with bulls winning. Low volume reduces reliability—may just be indecision. Look for 1.5-2x average volume.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 Location Critical</h4>
                    <p className="text-sm text-slate-700">
                      Most powerful at major support: 200-day MA, previous swing lows, Fibonacci levels, psychological round numbers. After extended downtrends (5+ bearish candles). Near oversold RSI {'<'} 30.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
                <p className="text-sm text-slate-700 mb-3">
                  Energy stock MNO falls from ₹450 to ₹395 over 12 days. Day 12: Opens at ₹396, sellers attack—stock drops to ₹382 (intraday low). But buyers step in aggressively throughout afternoon. By closing bell, stock recovers completely to close at ₹396 (same as open). Creates perfect Dragonfly Doji with ₹14 lower shadow. Volume is 2.3x average—confirming intense battle with buyers victorious.
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Entry Strategy:</strong> Buy at close of Day 12 (₹396) or wait for Day 13 confirmation above ₹398. Place buy stop at ₹399 for conservative entry.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Risk Management:</strong> Stop loss at ₹380 (below Dragonfly low). First target ₹415 (previous resistance), then ₹435. Risk ₹16 for ₹39 gain (2.4:1 reward-to-risk ratio).
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 10: Bullish Belt Hold */}
          <div id="bullish-belt-hold" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-green-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">10. Bullish Belt Hold</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Structure & Significance</h3>
                <p className="text-slate-700 mb-4">
                  The Bullish Belt Hold (also called Opening White Marubozu) is a strong single-candle bullish reversal pattern that appears at the end of a downtrend. It's characterized by a long bullish candle that opens at or very near the low of the session and closes near the high, with little to no lower shadow. This structure shows buyers took immediate control from market open and maintained dominance throughout the entire session.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Characteristics:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Open = Low:</strong> Session opens at or very near the low—no lower shadow or tiny shadow only.</li>
                      <li><strong>Strong Close:</strong> Closes near the session high, demonstrating sustained buying throughout day.</li>
                      <li><strong>Long Body:</strong> Long real body showing significant price gain—ideally 2-3% or more.</li>
                      <li><strong>Minimal Upper Shadow:</strong> Small upper shadow acceptable, but shorter is better (shows buying into close).</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">The Significance:</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      The absence of lower shadow demonstrates bulls seized control immediately at open—no sellers could push price even slightly lower. This instant and sustained dominance signals powerful sentiment shift.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>"Belt Hold" Name:</strong> Bulls "hold" their position firmly from open to close like a belt holding firm—no give, no weakness, pure strength.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">How to Interpret</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-green-100 rounded-lg p-4 border-2 border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2">✅ Gap Down Opening</h4>
                    <p className="text-sm text-slate-700">
                      Pattern is even stronger if it opens with gap down from previous close—suggests initial fear/panic that instantly reversed. Shows buyers overwhelming sellers from the very start.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📊 Volume Confirmation</h4>
                    <p className="text-sm text-slate-700">
                      Higher than average volume critical—confirms broad participation and genuine conviction. Volume should be 1.5-2x+ recent average. Low volume Belt Hold is much less reliable.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 Context Matters</h4>
                    <p className="text-sm text-slate-700">
                      Most effective after extended downtrend (8-10+ days), near major support levels, or at oversold conditions (RSI {'<'} 30). Less reliable in sideways markets or after short corrections.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
                <p className="text-sm text-slate-700 mb-3">
                  FMCG stock PQR drops from ₹680 to ₹615 over 10 trading sessions with consistent red candles. Day 11: Opens at ₹616 (small gap down from Day 10 close of ₹618). Buyers immediately step in—no lower prices all day. Stock rallies steadily, closes at ₹638 (₹22 gain, 3.6%). Perfect Bullish Belt Hold: open = low (₹616), close near high (₹638), tiny upper shadow. Volume 2.1x average.
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Entry Strategy:</strong> Aggressive: Buy at close of Day 11 (₹638). Conservative: Buy on Day 12 if opens higher and confirms.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Risk Management:</strong> Stop loss at ₹612 (below Belt Hold open). First target ₹660 (previous resistance), then ₹680 (recent high). Risk ₹26 for ₹42 gain (1.6:1 ratio minimum).
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 11: Bullish Kicker */}
          <div id="bullish-kicker" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-green-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">11. Bullish Kicker</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Structure & Significance</h3>
                <p className="text-slate-700 mb-4">
                  The Bullish Kicker is one of the most powerful two-candle reversal patterns in candlestick analysis. It begins with a strong bearish candle showing seller dominance. The second candle opens with a dramatic gap up above the first candle's body (no overlap) and closes as a strong bullish candle. This violent "kick" in sentiment is usually triggered by major news, earnings surprises, or fundamental catalysts that completely reverse market psychology.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Pattern Requirements:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>First Candle:</strong> Strong bearish candle (preferably Marubozu) showing complete seller control.</li>
                      <li><strong>Gap Up:</strong> Second candle opens above first candle's body with clear gap—no price overlap between bodies.</li>
                      <li><strong>Second Candle:</strong> Strong bullish candle (ideally Marubozu) showing complete buyer takeover.</li>
                      <li><strong>Opposite Sentiment:</strong> Both candles should have minimal shadows—shows one-sided control each day.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">The Significance:</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      The pattern name comes from the violent "kick" in market direction—like a door kicked open. Day 1: Bears totally dominant. Day 2: Bulls completely take over with zero transition period.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>Extreme Reversal:</strong> One of strongest patterns because gap shows previous trend utterly rejected. Often follows major fundamental news that changes entire investment thesis.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">How to Interpret</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-green-100 rounded-lg p-4 border-2 border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2">✅ Gap Integrity</h4>
                    <p className="text-sm text-slate-700">
                      Gap must remain unfilled in subsequent sessions to maintain pattern validity. If price falls back into gap quickly, pattern fails. Larger gap = stronger signal. Ideal gap: 2-5% or more.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📊 Explosive Volume</h4>
                    <p className="text-sm text-slate-700">
                      Volume on second candle should be massive—3-5x+ average. This confirms institutional participation and major sentiment shift. Low volume Kicker pattern lacks credibility and often fails.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 News Catalyst</h4>
                    <p className="text-sm text-slate-700">
                      Almost always accompanied by fundamental news: earnings beat, new contract, regulatory approval, merger announcement. Verify the catalyst. Pure technical Kickers without news are rare and less reliable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
                <p className="text-sm text-slate-700 mb-3">
                  Pharma stock STU declines from ₹850 to ₹720 over 3 weeks on drug trial concerns. Day 20: Long bearish candle closes at ₹715 (open ₹725, close ₹715, bears dominant). Evening: Company announces drug trial exceeded expectations—FDA approval likely. Day 21: Stock gaps up, opens at ₹745 (gap of ₹30, 4.2%), rallies all day, closes at ₹768. Perfect Bullish Kicker with ₹53 gain and volume 6x average.
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Entry Strategy:</strong> Aggressive: Buy at market open Day 21 (₹745). Moderate: Buy mid-day if sustains. Conservative: Buy on Day 22 if holds above gap.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Risk Management:</strong> Stop loss at ₹735 (if fills gap, pattern fails). Target ₹810 (previous resistance), then ₹850 (pre-decline high). Risk ₹10 for ₹75+ gain (7.5:1+ reward-to-risk).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trading Guidelines */}
        <div className="bg-gradient-to-r from-green-700 to-emerald-700 rounded-2xl p-8 shadow-lg mt-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-6">🎯 Trading Guidelines for Bullish Patterns</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-200 mb-4">✅ Best Practices</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-300">•</span>
                  <span><strong>Wait for Confirmation:</strong> Never enter on the pattern candle itself. Wait for the next candle to close higher.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300">•</span>
                  <span><strong>Check the Trend:</strong> Bullish patterns work best after clear downtrends, not in sideways markets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300">•</span>
                  <span><strong>Volume Validation:</strong> High volume on pattern formation = stronger signal. Low volume = be cautious.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300">•</span>
                  <span><strong>Support Levels:</strong> Patterns at key support zones have highest success rates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300">•</span>
                  <span><strong>Use Stop Losses:</strong> Always place stops below the pattern low to protect capital.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-200 mb-4">❌ Common Mistakes</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-300">•</span>
                  <span><strong>Ignoring Context:</strong> A bullish pattern in a strong downtrend without support nearby often fails.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">•</span>
                  <span><strong>No Confirmation:</strong> Jumping in immediately without waiting for next candle = higher risk.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">•</span>
                  <span><strong>Overtrading:</strong> Not every pattern is a trade. Only take high-probability setups.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">•</span>
                  <span><strong>Ignoring Volume:</strong> Patterns with weak volume often result in false signals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">•</span>
                  <span><strong>Poor Risk Management:</strong> Not setting stops or risking too much per trade.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-green-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🎓 Key Takeaways</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <p className="text-lg text-slate-700"><strong>Pattern Recognition:</strong> All 11 bullish patterns signal potential trend reversals from bearish to bullish.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg text-slate-700"><strong>Context Matters:</strong> These patterns are most effective after clear downtrends and near support levels.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg text-slate-700"><strong>Volume Confirms:</strong> High trading volume during pattern formation significantly increases reliability.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg text-slate-700"><strong>Multi-Candle Patterns:</strong> Patterns like Morning Star and Three White Soldiers are generally stronger than single-candle patterns.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg text-slate-700"><strong>Always Confirm:</strong> Wait for the next candle to validate the pattern before entering trades.</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Continue Learning</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/learn" className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
              ← Back to Courses
            </Link>
            <Link to="/bearish-reversal-patterns" className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
              Next: Bearish Patterns →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
