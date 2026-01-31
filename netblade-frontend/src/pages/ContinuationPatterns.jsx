import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function ContinuationPatterns() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/continuation-patterns' } });
    }
  }, [navigate]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link to="/learn" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            ← Back to Learn
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🔵</span>
            <h1 className="text-4xl font-bold text-blue-700">Continuation Patterns</h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            Master patterns that signal trend persistence with 10 essential continuation formations. These patterns indicate that after a brief pause or consolidation, the prevailing trend will resume its original direction.
          </p>
          
          {/* Hero Visual */}
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-8 mb-6">
            <div className="text-center">
              <div className="text-6xl mb-4">➡️🔵⏸️</div>
              <p className="text-lg font-semibold text-slate-700">The Pause That Refreshes</p>
              <p className="text-sm text-slate-600 mt-2">Consolidation before continuation</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="bg-slate-50 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 mb-4">📑 Patterns Covered (10 Total)</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <a href="#doji" className="text-blue-600 hover:text-blue-700">→ Doji</a>
              <a href="#spinning-top" className="text-blue-600 hover:text-blue-700">→ Spinning Top</a>
              <a href="#rising-three" className="text-blue-600 hover:text-blue-700">→ Rising Three Methods</a>
              <a href="#falling-three" className="text-blue-600 hover:text-blue-700">→ Falling Three Methods</a>
              <a href="#mat-hold" className="text-blue-600 hover:text-blue-700">→ Mat Hold (Bullish)</a>
              <a href="#rising-window" className="text-blue-600 hover:text-blue-700">→ Rising Window</a>
              <a href="#falling-window" className="text-blue-600 hover:text-blue-700">→ Falling Window</a>
              <a href="#harami-cross" className="text-blue-600 hover:text-blue-700">→ Harami Cross</a>
              <a href="#three-line-bullish" className="text-blue-600 hover:text-blue-700">→ Three Line Strike (Bullish)</a>
              <a href="#three-line-bearish" className="text-blue-600 hover:text-blue-700">→ Three Line Strike (Bearish)</a>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Pattern 1: Doji */}
          <div id="doji" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Doji</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Structure & Significance</h3>
                <p className="text-slate-700 mb-4">
                  Doji is candlestick where opening and closing prices virtually equal, creating tiny or nonexistent body. Represents market equilibrium—neither bulls nor bears prevail. Context determines meaning: within trend signals pause/consolidation, after prolonged move suggests exhaustion/reversal potential.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Characteristics:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Open = Close:</strong> Body virtually nonexistent (within ₹0.50-₹1).</li>
                      <li><strong>Shadows Vary:</strong> Upper/lower shadows can be long, short, or absent.</li>
                      <li><strong>Types:</strong> Standard, Long-Legged, Dragonfly, Gravestone.</li>
                      <li><strong>Indecision:</strong> Perfect balance between buyers and sellers.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">The Significance:</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      Doji shows equilibrium—open intraday battle ends in draw. Shadow lengths reveal volatility intensity but no decisive winner.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>Psychology:</strong> After price movement, market pauses—participants uncertain of next direction. Needs confirmation candle to determine outcome.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">How to Interpret</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-red-100 rounded-lg p-4 border-2 border-red-200">
                    <h4 className="font-semibold text-red-900 mb-2">⚠️ Weak Alone</h4>
                    <p className="text-sm text-slate-700">
                      Doji alone unreliable—requires next candle confirmation. Bullish breakout after Doji = continuation. Bearish breakdown = reversal. Never trade Doji in isolation.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📊 Volume Analysis</h4>
                    <p className="text-sm text-slate-700">
                      High volume Doji more significant—major indecision. Low volume Doji less meaningful. Volume spike on confirmation candle validates breakout direction.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 Context Critical</h4>
                    <p className="text-slate-700 text-sm">
                      In uptrend: potential pause or reversal. In downtrend: potential bottom. At support/resistance: decision point. Always consider trend and location.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
                <p className="text-sm text-slate-700 mb-3">
                  Banking stock in uptrend ₹890→₹945 over 8 days. Day 8: Opens ₹943, ranges ₹938-₹948, closes ₹943.50—perfect Doji (₹0.50 body). Shows indecision at resistance. Day 9: Gaps up, closes ₹952—bullish confirmation. Doji was consolidation, not reversal.
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Entry:</strong> Buy Day 9 breakout above ₹948 (₹950) or Day 10 pullback to ₹948.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Risk Management:</strong> Stop ₹938 (below Doji low). Target ₹968, then ₹985. Risk ₹12 for ₹35 gain (2.9:1).
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 2: Spinning Top */}
          <div id="spinning-top" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Spinning Top</h2>
              <p className="text-slate-700 mb-3">
                The Spinning Top is another single-candle pattern that represents indecision in the market. It has a small real body located near the middle of the trading range and upper and lower shadows of approximately equal lengths. This structure suggests that buyers and sellers are evenly matched, with neither gaining significant control during the session.
              </p>
              <p className="text-slate-700 mb-4">
                A Spinning Top often appears during periods of consolidation and can indicate a potential reversal or continuation, depending on the preceding trend. After an uptrend, it may signal weakening bullish momentum and the possibility of a reversal to the downside. Similarly, after a downtrend, it could suggest that selling pressure is diminishing, paving the way for a bullish reversal. Traders often wait for confirmation with subsequent candles before making decisions.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Trading Approach</h4>
                <p className="text-sm text-slate-700">
                  Spinning Top shows battle between bulls and bears is equal. Not a strong signal on its own—requires context and confirmation. In strong trends, often signals brief pause before continuation. At key support/resistance, can signal reversal. Always wait for next candle to show direction.
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 3: Rising Three Methods */}
          <div id="rising-three" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Rising Three Methods (Bullish)</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Structure & Significance</h3>
                <p className="text-slate-700 mb-4">
                  Rising Three Methods is a bullish continuation pattern signaling brief consolidation within uptrend before resumption. Five-candle formation: long bullish first candle, three small bearish candles contained within first's range (profit-taking), then fifth long bullish candle closes above first's high. Shows bulls maintain control despite temporary pullback—healthy consolidation, not reversal.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Five-Candle Pattern:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Candle 1:</strong> Long bullish—strong momentum establishing trend.</li>
                      <li><strong>Candles 2-4:</strong> Three small bearish candles within first's range—controlled pullback/consolidation.</li>
                      <li><strong>Candle 5:</strong> Long bullish closes above first's high—trend continuation confirmed.</li>
                      <li><strong>Key:</strong> Middle three MUST stay within first candle's body.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">The Significance:</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      Pattern shows healthy profit-taking without breaking trend structure. Three methods = three ways bears try to reverse but fail. Bulls absorb all selling.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>Psychology:</strong> After rally, profit-takers exit (candles 2-4), but buying pressure absorbs all selling. New buyers enter on breakout (candle 5).
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">How to Interpret</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-green-100 rounded-lg p-4 border-2 border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2">✅ Range Containment</h4>
                    <p className="text-sm text-slate-700">
                      Three middle candles MUST stay within first candle's high-low range. If break below first's low, pattern fails. Tighter containment = stronger pattern.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📊 Volume Pattern</h4>
                    <p className="text-sm text-slate-700">
                      High volume on candles 1 and 5. Lower volume on middle three (consolidation). Volume surge on fifth candle critical—confirms breakout strength.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 Trend Context</h4>
                    <p className="text-slate-700 text-sm">
                      ONLY valid in established uptrend. After 5-8+ bullish sessions. Pattern shows pause, not reversal. Best in strong trends with momentum.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
                <p className="text-sm text-slate-700 mb-3">
                  Tech stock rallies ₹560→₹620 over 6 days. Day 6: Long green +₹12 closes ₹620 (candle 1). Days 7-9: Three small red candles: ₹618, ₹616, ₹617—all within Day 6 range (candles 2-4). Day 10: Opens ₹618, rallies, closes ₹628 breaking above ₹620 (candle 5). Perfect Rising Three Methods.
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Entry:</strong> Buy on Day 10 close (₹628) or Day 11 pullback to ₹625.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Risk Management:</strong> Stop ₹612 (below consolidation). Target ₹650, then ₹665. Risk ₹16 for ₹37 gain (2.3:1).
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 4: Falling Three Methods */}
          <div id="falling-three" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Falling Three Methods (Bearish)</h2>
              <p className="text-slate-700 mb-3">
                The Falling Three Methods is the bearish counterpart of the Rising Three Methods. It is a continuation pattern that appears during a downtrend, indicating a pause before the trend resumes. The pattern consists of five candles. The first is a long bearish candle, showing strong selling momentum. The next three candles are smaller bullish ones that move upward but stay within the range of the first candle, reflecting a temporary consolidation. The fifth candle is another long bearish candle that closes below the low of the first candle, confirming the continuation of the downtrend.
              </p>
              <p className="text-slate-700 mb-4">
                This pattern signifies that bears remain dominant despite a brief period of buying pressure. Traders interpret the Falling Three Methods as a signal to hold or add to their short positions, anticipating further downside movement.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Bearish Continuation Signal</h4>
                <p className="text-sm text-slate-700">
                  First candle must be long bearish. Three middle candles are small rallies contained within first candle's body. Fifth candle closes below first candle's low, confirming sellers still in control. Pattern shows temporary short-covering that doesn't reverse downtrend. Good opportunity to add to short positions.
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 5: Mat Hold */}
          <div id="mat-hold" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Mat Hold (Bullish)</h2>
              <p className="text-slate-700 mb-3">
                The Mat Hold (Bullish) is a bullish continuation pattern that signals a brief consolidation or pullback before the prevailing uptrend resumes. It typically occurs after a strong upward price movement and suggests that the bulls are still in control, despite the temporary pause. This pattern consists of five candles: a long bullish candle, three smaller candles moving slightly downward or sideways within the first candle's range, and a final long bullish candle that closes above the high of the first candle.
              </p>
              <p className="text-slate-700 mb-4">
                The Mat Hold pattern demonstrates that the price has temporarily paused but that the market sentiment remains bullish. The consolidation phase reflects a healthy market correction or profit-taking, not a reversal. The pattern is particularly reliable when accompanied by increased volume during the breakout candle (the fifth one), which confirms the strength of the continuing trend.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Trading Strategy</h4>
                <p className="text-sm text-slate-700">
                  Similar to Rising Three Methods but can have slight gaps between candles. The middle three candles show brief hesitation but don't break trend structure. Fifth candle breakout confirms continuation. Enter when fifth candle breaks above first candle's high. Stop loss below middle candles' low.
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 6: Rising Window */}
          <div id="rising-window" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Rising Window (Breakaway Gap)</h2>
              <p className="text-slate-700 mb-3">
                The Rising Window, also known as a Breakaway Gap, is a bullish pattern that signifies strong upward momentum in the market. This pattern occurs when the opening price of a new session is significantly higher than the previous session's high, creating a gap between the two candles. The Rising Window reflects the market's enthusiasm, as buyers are in control and willing to pay a higher price to enter the market.
              </p>
              <p className="text-slate-700 mb-4">
                This gap can signal the start of a strong bullish trend, typically forming at the beginning of an uptrend or after a period of consolidation. The pattern is considered more reliable when it occurs with high trading volume, indicating strong buyer interest. Traders often use this pattern as a signal to enter long positions, expecting the trend to continue. A Rising Window can also act as a support level, as the gap may provide price stability.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Gap Significance</h4>
                <p className="text-sm text-slate-700">
                  The gap represents a complete absence of trading at those price levels. Shows very strong buying conviction. Gap often acts as future support—price rarely fills gap in strong trends. Volume should be high on gap day. If gap gets filled quickly, pattern fails. Use gap as stop loss level for long positions.
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 7: Falling Window */}
          <div id="falling-window" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Falling Window (Breakaway Gap)</h2>
              <p className="text-slate-700 mb-3">
                The Falling Window, also known as a Breakaway Gap, is the bearish counterpart to the Rising Window. It occurs when the opening price of a new session is significantly lower than the previous session's low, creating a gap between the two candles. The Falling Window signals that sellers have taken control of the market, with an abrupt downward movement that reflects increasing pessimism.
              </p>
              <p className="text-slate-700 mb-4">
                This pattern typically forms at the start of a downtrend or after a period of consolidation, indicating a potential continuation of the bearish trend. The Falling Window is considered more reliable when it is accompanied by high trading volume, which confirms the strength of the selling pressure. Traders often use this pattern to enter short positions, anticipating that the downtrend will persist. Additionally, the gap may act as a resistance level.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Bearish Gap Trading</h4>
                <p className="text-sm text-slate-700">
                  Gap down shows panic selling or major negative news. No buyers willing to step in at higher prices. Gap often becomes resistance if price tries to rally. Volume should be elevated. Unfilled gaps in strong downtrends are very bearish. Use gap as stop loss level for short positions.
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 8: Harami Cross */}
          <div id="harami-cross" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">8. Harami Cross</h2>
              <p className="text-slate-700 mb-3">
                The Harami Cross is a candlestick pattern that can signal either a continuation or a reversal of the prevailing trend, depending on the market context. It consists of two candles: a large bullish or bearish candle indicating the strength of the current trend, followed by a Doji representing indecision in the market. The Doji is contained within the body of the first candle, forming a "Harami" pattern.
              </p>
              <p className="text-slate-700 mb-4">
                The Harami Cross pattern is versatile. If the pattern forms after a strong trend and the Doji is followed by a candle in the direction of the prevailing trend, it signals continuation. However, if the Doji is followed by a strong candle in the opposite direction, the Harami Cross signals a potential reversal. Traders typically wait for confirmation with a follow-up candle before making trading decisions. The pattern is more reliable when it appears at key support or resistance levels.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Context-Dependent Pattern</h4>
                <p className="text-sm text-slate-700">
                  Harami means "pregnant" in Japanese—small candle inside large one. The Doji shows complete indecision after strong move. In strong trends, usually signals brief pause before continuation. At key levels, can signal reversal. Direction of third candle determines outcome. Very important to wait for confirmation.
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 9: Three Line Strike (Bullish) */}
          <div id="three-line-bullish" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">9. Three Line Strike (Bullish)</h2>
              <p className="text-slate-700 mb-3">
                The Three Line Strike is a rare but strong bullish continuation pattern. It appears during an uptrend and consists of three consecutive bullish candles, each closing higher than the previous one, followed by a fourth bearish candle that opens higher but closes below the first candle in the pattern.
              </p>
              <p className="text-slate-700 mb-4">
                While the fourth candle may initially seem bearish, it often marks a temporary correction or "shakeout" before the uptrend resumes. This pattern indicates that bulls are in control despite short-term profit-taking. The Three Line Strike is considered highly reliable when accompanied by high trading volume on the fourth candle, as it often signals a strong continuation of the bullish trend. Traders typically wait for confirmation with a new bullish candle before taking action.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Rare but Powerful</h4>
                <p className="text-sm text-slate-700">
                  The fourth bearish candle that engulfs previous three looks scary but is actually very bullish. It shakes out weak hands before trend continues. Pattern has over 80% success rate historically. The bigger the fourth candle, the stronger the subsequent move. Excellent buying opportunity if you understand the pattern.
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 10: Three Line Strike (Bearish) */}
          <div id="three-line-bearish" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">10. Three Line Strike (Bearish)</h2>
              <p className="text-slate-700 mb-3">
                The Three Line Strike (Bearish) is a rare but significant bearish continuation pattern that forms during a downtrend. It consists of three consecutive bearish candles, each closing lower than the previous one, showing steady selling pressure. The fourth candle is a long bullish one that opens lower but closes above the first candle in the pattern, temporarily challenging the bearish momentum.
              </p>
              <p className="text-slate-700 mb-4">
                While this bullish candle might suggest a reversal at first glance, the pattern usually signals a continuation of the downtrend, with sellers regaining control shortly afterward. Traders often wait for additional confirmation of the bearish trend before acting, such as a new bearish candle or validation from other technical indicators. The pattern is more reliable when it appears after a strong downtrend.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Bearish Trap Pattern</h4>
                <p className="text-sm text-slate-700">
                  The fourth bullish candle looks like a reversal but it's a bull trap. Lures in buyers before downtrend resumes. Pattern has high bearish continuation reliability. The larger the bullish "trap" candle, the more aggressive the subsequent decline. Good short entry after confirmation candle. Protects existing short positions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trading Guidelines */}
        <div className="bg-gradient-to-r from-blue-700 to-cyan-700 rounded-2xl p-8 shadow-lg mt-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-6">🎯 Trading Guidelines for Continuation Patterns</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-200 mb-4">✅ Best Practices</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">•</span>
                  <span><strong>Trade With the Trend:</strong> Continuation patterns work best in the direction of the established trend.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">•</span>
                  <span><strong>Wait for Breakout:</strong> Let pattern complete and price break out before entering.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">•</span>
                  <span><strong>Volume Confirms:</strong> Breakout volume should exceed consolidation volume.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">•</span>
                  <span><strong>Respect the Range:</strong> Middle candles should stay within first candle's range.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">•</span>
                  <span><strong>Add to Winners:</strong> Continuation patterns are great for adding to existing positions.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-yellow-200 mb-4">❌ Common Mistakes</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span><strong>Fighting the Trend:</strong> Don't try to reverse trade continuation patterns.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span><strong>Early Entry:</strong> Entering before pattern completes = higher failure rate.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span><strong>Ignoring Volume:</strong> Weak volume breakouts often fail.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span><strong>No Trend Context:</strong> Continuation patterns need an existing trend to continue.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span><strong>Misidentifying Reversals:</strong> Not every pause is continuation—check context.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-blue-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🎓 Key Takeaways</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <p className="text-lg text-slate-700"><strong>Trend is King:</strong> All continuation patterns work best when there's a clear established trend.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg text-slate-700"><strong>Consolidation Phase:</strong> Healthy trends pause to consolidate before resuming—these patterns identify those pauses.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg text-slate-700"><strong>Volume Validation:</strong> Breakout from consolidation should show increased volume.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg text-slate-700"><strong>Position Building:</strong> Continuation patterns offer low-risk opportunities to add to winning positions.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg text-slate-700"><strong>Pattern Completion:</strong> Always wait for complete pattern formation and breakout before entering.</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Continue Learning</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/bearish-reversal-patterns" className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
              ← Previous: Bearish Patterns
            </Link>
            <Link to="/special-advanced-patterns" className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
              Next: Special Patterns →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
