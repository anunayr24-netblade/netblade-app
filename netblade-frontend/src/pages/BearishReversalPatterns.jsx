import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function BearishReversalPatterns() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/bearish-reversal-patterns' } });
    }
  }, [navigate]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link to="/learn" className="inline-flex items-center text-red-600 hover:text-red-700 mb-4">
            ← Back to Learn
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🔴</span>
            <h1 className="text-4xl font-bold text-red-700">Bearish Reversal Patterns</h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            Learn to identify the top of trends with 10 powerful bearish reversal patterns. These formations signal the end of uptrends and the beginning of downward moves, helping you protect profits and catch market tops.
          </p>
          
          {/* Hero Visual */}
          <div className="bg-gradient-to-r from-red-100 to-rose-100 rounded-xl p-8 mb-6">
            <div className="text-center">
              <div className="text-6xl mb-4">📉🔴🔄</div>
              <p className="text-lg font-semibold text-slate-700">From Bulls to Bears</p>
              <p className="text-sm text-slate-600 mt-2">Recognizing when euphoria turns to fear</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="bg-slate-50 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 mb-4">📑 Patterns Covered (10 Total)</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <a href="#shooting-star" className="text-red-600 hover:text-red-700">→ Shooting Star</a>
              <a href="#evening-star" className="text-red-600 hover:text-red-700">→ Evening Star</a>
              <a href="#bearish-engulfing" className="text-red-600 hover:text-red-700">→ Bearish Engulfing</a>
              <a href="#dark-cloud-cover" className="text-red-600 hover:text-red-700">→ Dark Cloud Cover</a>
              <a href="#three-black-crows" className="text-red-600 hover:text-red-700">→ Three Black Crows</a>
              <a href="#evening-doji-star" className="text-red-600 hover:text-red-700">→ Evening Doji Star</a>
              <a href="#tweezer-top" className="text-red-600 hover:text-red-700">→ Tweezer Top</a>
              <a href="#gravestone-doji" className="text-red-600 hover:text-red-700">→ Gravestone Doji</a>
              <a href="#hanging-man" className="text-red-600 hover:text-red-700">→ Hanging Man</a>
              <a href="#bearish-kicker" className="text-red-600 hover:text-red-700">→ Bearish Kicker</a>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Pattern 1: Shooting Star */}
          <div id="shooting-star" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-red-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Shooting Star</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Structure & Significance</h3>
                <p className="text-slate-700 mb-4">
                  The Shooting Star is a single-candle bearish reversal pattern that forms after an uptrend. It features a small real body at the lower end of the trading range, with a long upper shadow (at least 2x the body length) and little to no lower shadow. The pattern shows that buyers pushed prices significantly higher during the session, but sellers overwhelmed them and drove prices back down near the opening level.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Pattern Structure:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Small Real Body:</strong> Body located at or near the bottom of the candle—can be bullish or bearish, color less important.</li>
                      <li><strong>Long Upper Shadow:</strong> Should be at least 2-3x the body length—shows rejection of higher prices.</li>
                      <li><strong>No/Tiny Lower Shadow:</strong> Minimal or absent lower shadow indicates session low near open/close.</li>
                      <li><strong>Gap Up Opening:</strong> Often gaps up from previous close, making rejection even more dramatic.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">The Significance:</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      Like a shooting star that briefly ascends then falls—bulls push up enthusiastically but fail to hold gains. The complete rejection of higher prices within single session signals trend exhaustion.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>Market Psychology:</strong> Early buyers get trapped at highs. Sellers take control afternoon, pushing price down. Trapped bulls panic—creates downward momentum.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">How to Interpret</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-red-100 rounded-lg p-4 border-2 border-red-200">
                    <h4 className="font-semibold text-red-900 mb-2">✅ Gap & Rejection</h4>
                    <p className="text-sm text-slate-700">
                      Pattern strongest when gaps up from previous close then fails. Gap shows initial enthusiasm that completely reverses—very bearish. Shadow length critical: longer shadow = stronger rejection.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📊 Volume Spike</h4>
                    <p className="text-sm text-slate-700">
                      High volume on Shooting Star day confirms distribution—smart money selling into retail enthusiasm. Volume 1.5-2x+ average validates pattern. Low volume reduces reliability significantly.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 Location Critical</h4>
                    <p className="text-slate-700 text-sm">
                      Most effective at major resistance: previous highs, round numbers, Fibonacci extensions, overbought RSI {'>'} 70. After extended uptrends (10+ days). Near 52-week highs especially powerful.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
                <p className="text-sm text-slate-700 mb-3">
                  Tech stock rallies from ₹420 to ₹510 over 12 days. Day 12 closes ₹508. Day 13: Gaps up to ₹515, surges to ₹528 intraday (new high), but sellers emerge. By close, stock retreats to ₹516. Creates Shooting Star: small ₹8 body, ₹12 upper shadow (1.5x body), minimal lower shadow. Volume 2.2x average—distribution pattern.
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Entry Strategy:</strong> Short after Day 14 confirmation below ₹515 (Shooting Star close). Aggressive: Short at ₹514, Conservative: Wait for break below ₹505.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Risk Management:</strong> Stop loss ₹530 (above Shooting Star high). Target ₹490 (support), then ₹475. Risk ₹16 for ₹33 gain (2:1 reward-to-risk ratio).
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 2: Evening Star */}
          <div id="evening-star" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-red-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Evening Star</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Structure & Significance</h3>
                <p className="text-slate-700 mb-4">
                  The Evening Star is a powerful three-candle bearish reversal pattern that appears at the end of an uptrend. It consists of a long bullish candle, followed by a small-bodied candle (often a doji or spinning top) that gaps up, and concludes with a long bearish candle that closes well into the first candle's body. This pattern mirrors the Morning Star but signals a bearish reversal instead.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Three-Candle Formation:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>First Candle:</strong> Long bullish candle showing continuation of uptrend with strong buying pressure.</li>
                      <li><strong>Second Candle:</strong> Small body (spinning top/doji) that gaps up—shows indecision at highs, momentum waning.</li>
                      <li><strong>Third Candle:</strong> Long bearish candle that gaps down and closes deep into first candle's body—sellers dominate.</li>
                      <li><strong>Gap Significance:</strong> Gaps between all three candles strengthen pattern dramatically.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">The Significance:</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      Named after evening star that appears as sun sets—signals end of bullish "day" and beginning of bearish "night." The small middle candle represents exhaustion before reversal.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>Transition Pattern:</strong> Day 1 bulls in control, Day 2 indecision/equilibrium, Day 3 bears take over decisively. Three-day story of sentiment shift.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">How to Interpret</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-red-100 rounded-lg p-4 border-2 border-red-200">
                    <h4 className="font-semibold text-red-900 mb-2">✅ Penetration Depth</h4>
                    <p className="text-sm text-slate-700">
                      Third candle should close at least 50% into first candle's body—minimum requirement. 60-70%+ = very strong. Deeper penetration = more convincing reversal. Measure body-to-body, ignore shadows.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📊 Volume Pattern</h4>
                    <p className="text-sm text-slate-700">
                      Ideal volume: High on Day 1 (buying climax), Low on Day 2 (exhaustion), Very High on Day 3 (distribution/panic selling). This U-shaped volume confirms psychology shift.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 Context Critical</h4>
                    <p className="text-sm text-slate-700">
                      Most powerful at major resistance zones, previous highs, overbought RSI {'>'} 70, after extended rallies (10+ days). Check for bearish divergence on indicators for added confirmation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
                <p className="text-sm text-slate-700 mb-3">
                  Banking stock rallies from ₹1200 to ₹1380 over 15 days. Day 15: Long green candle closes ₹1378 (₹18 gain). Day 16: Gaps up to ₹1382, trades in ₹4 range, closes ₹1384 (tiny spinning top—indecision). Day 17: Gaps down to ₹1380, sellers dominate, closes ₹1352 (₹28 drop). Perfect Evening Star: third candle penetrates 72% into first candle body.
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Entry Strategy:</strong> Short at ₹1350 after Day 17 close or Day 18 if confirms lower. Conservative: Wait for break below ₹1345.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Risk Management:</strong> Stop loss ₹1390 (above pattern high). Target ₹1320 (support), then ₹1300. Risk ₹40 for ₹52+ gain (1.3:1 minimum ratio).
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 3: Bearish Engulfing */}
          <div id="bearish-engulfing" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-red-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Bearish Engulfing</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Structure & Significance</h3>
                <p className="text-slate-700 mb-4">
                  The Bearish Engulfing is a strong two-candle bearish reversal pattern appearing after an uptrend. The first candle is small and bullish, while the second is a large bearish candle that completely engulfs the entire body of the first candle. This shows sellers overwhelming buyers with decisive force, signaling a potential trend reversal from bullish to bearish.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Pattern Structure:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>First Candle:</strong> Small bullish candle showing weakening buying pressure or exhaustion of uptrend.</li>
                      <li><strong>Second Candle:</strong> Large bearish candle opens at/above first candle's close, closes below first candle's open—completely engulfs it.</li>
                      <li><strong>Body Engulfment:</strong> Only bodies need engulfing; shadows less important. Complete body overlap required.</li>
                      <li><strong>Size Ratio:</strong> Larger engulfing candle (2-3x first candle) = stronger signal.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">The Significance:</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      Complete engulfment shows dramatic shift in market power—buyers couldn't maintain control even one session. Bears overwhelm with crushing force, reversing previous day entirely.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>Power Dynamic:</strong> The bigger the engulfing candle relative to first, the more violent the sentiment shift. Suggests institutional selling/distribution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">How to Interpret</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-red-100 rounded-lg p-4 border-2 border-red-200">
                    <h4 className="font-semibold text-red-900 mb-2">✅ Size Ratio</h4>
                    <p className="text-sm text-slate-700">
                      Engulfing candle should be significantly larger than first—ideally 2-3x. Small engulfing = weak signal. Massive engulfing candle = powerful reversal. Check percentage gain vs loss.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📊 Volume Surge</h4>
                    <p className="text-sm text-slate-700">
                      Volume must be significantly higher on engulfing candle—1.5-2x+ average. Confirms genuine selling pressure, not just profit-taking. Low volume engulfing often fails.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 Trend Prerequisites</h4>
                    <p className="text-sm text-slate-700">
                      Requires clear uptrend first—at least 3-5 bullish candles. At major resistance or overbought levels (RSI {'>'} 70). After parabolic moves especially effective.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
                <p className="text-sm text-slate-700 mb-3">
                  IT stock climbs from ₹2400 to ₹2580 over 8 days with steady green candles. Day 8: Small bullish candle closes ₹2578 (open ₹2572, gain ₹6). Day 9: Opens ₹2580, early strength to ₹2588, then sellers attack—closes ₹2548 (₹32 loss, 1.2%). Bearish candle completely engulfs Day 8's body. Volume 2.4x average—distribution.
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Entry Strategy:</strong> Short at ₹2545 after Day 9 close or Day 10 if confirms weakness below ₹2545.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Risk Management:</strong> Stop loss ₹2592 (above engulfing candle high). Target ₹2520 (support), then ₹2490. Risk ₹47 for ₹58 gain (1.2:1 ratio minimum).
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 4: Dark Cloud Cover */}
          <div id="dark-cloud-cover" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-red-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Dark Cloud Cover</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Structure & Significance</h3>
                <p className="text-slate-700 mb-4">
                  Dark Cloud Cover is a two-candle bearish reversal pattern occurring after an uptrend. A long bullish candle is followed by a bearish candle that opens above the first candle's high (gap up) but closes more than halfway into the first candle's body. This dramatic reversal from gap-up strength to deep penetration demonstrates sellers overpowering initial bullish enthusiasm.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Pattern Components:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>First Candle:</strong> Long bullish candle showing strong uptrend continuation and buyer confidence.</li>
                      <li><strong>Gap Up Open:</strong> Second candle opens above first candle's high—initial euphoria, new highs expected.</li>
                      <li><strong>Bearish Reversal:</strong> Second candle closes below 50% mark of first candle—minimum 50%, deeper better.</li>
                      <li><strong>Penetration Depth:</strong> 60-70% penetration = strong, 80%+ = very strong (nearly Bearish Engulfing).</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">The Significance:</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      Named for dark clouds obscuring bright skies—optimism (gap up) turns to pessimism (deep selloff). Bulls trapped at gap-up open get crushed as price reverses.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>Psychology:</strong> Morning gap-up triggers FOMO buying. Sellers use this strength to distribute. By close, early buyers trapped—creates cascade selling.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">How to Interpret</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-red-100 rounded-lg p-4 border-2 border-red-200">
                    <h4 className="font-semibold text-red-900 mb-2">✅ Penetration Metric</h4>
                    <p className="text-sm text-slate-700">
                      50% = minimum valid. 60-70% = strong. 80%+ = very powerful. Measure from first candle's open to close, mark halfway, second candle must close below. Deeper = more bearish.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📊 Volume Analysis</h4>
                    <p className="text-sm text-slate-700">
                      Volume should spike on second candle—confirms distribution by smart money into retail enthusiasm. 1.5-2x+ average volume validates. Low volume reduces reliability significantly.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 Location Matters</h4>
                    <p className="text-sm text-slate-700">
                      Most effective near major resistance, previous highs, psychological levels (₹500, ₹1000), overbought RSI {'>'} 70. After extended rallies (8-12+ days). Check for bearish divergence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
                <p className="text-sm text-slate-700 mb-3">
                  Pharma stock rallies ₹680→₹745 over 10 days. Day 10: Strong bullish candle closes ₹744 (open ₹732, ₹12 gain). Day 11: Gaps up to ₹748, hits ₹752 (new high), but sellers emerge. Stock reverses hard, closes ₹735. Dark Cloud: penetrates 75% into Day 10 body (₹9 into ₹12 range). Volume 2.1x average.
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Entry Strategy:</strong> Short at ₹732 after Day 11 close. Conservative: Wait for Day 12 break below ₹730.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Risk Management:</strong> Stop loss ₹755 (above Day 11 high). Target ₹710 (support), then ₹695. Risk ₹23 for ₹37+ gain (1.6:1 reward-to-risk).
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 5: Three Black Crows */}
          <div id="three-black-crows" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-red-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Three Black Crows</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Structure & Significance</h3>
                <p className="text-slate-700 mb-4">
                  Three Black Crows is a highly reliable bearish reversal pattern consisting of three consecutive long-bodied bearish candles. Each candle opens within or near the previous candle's body and closes progressively lower, creating a descending staircase formation. This pattern shows sustained, deliberate selling over three sessions—signaling strong shift from bullish to bearish momentum.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Pattern Characteristics:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Three Consecutive Candles:</strong> All bearish (red) with long real bodies showing sustained selling.</li>
                      <li><strong>Progressive Lows:</strong> Each candle closes lower than previous—consistent downward pressure.</li>
                      <li><strong>Opening Within Body:</strong> Each opens within previous candle's body (not at lows)—organized distribution.</li>
                      <li><strong>Minimal Shadows:</strong> Small upper/lower shadows ideal—shows sellers in complete control throughout sessions.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">The Significance:</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      Named for ominous black crows that herald bad tidings. Three days of relentless selling—not panic, but methodical distribution by smart money. Staircase pattern shows organized exit.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>Interpretation:</strong> One of most reliable bearish patterns. Mirrors Three White Soldiers but bearish. Shows institutional selling, not retail panic.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">How to Interpret</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-red-100 rounded-lg p-4 border-2 border-red-200">
                    <h4 className="font-semibold text-red-900 mb-2">✅ Candle Uniformity</h4>
                    <p className="text-sm text-slate-700">
                      All three candles should be similar size. If third candle much smaller ("stalling"), weakens pattern. Uniform candles = sustained selling. Each candle should show 1-2%+ decline.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📊 Volume Consistency</h4>
                    <p className="text-sm text-slate-700">
                      Volume should remain elevated or increase across all three days. Declining volume on third candle may indicate exhaustion. Ideal: increasing volume showing accelerating distribution.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 Context Critical</h4>
                    <p className="text-sm text-slate-700">
                      Most powerful after significant uptrends or at major resistance. If appears after downtrend, it's continuation not reversal. Best at tops, dangerous at bottoms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
                <p className="text-sm text-slate-700 mb-3">
                  Auto stock rallies ₹920→₹1025 over 15 days. Day 1: Opens ₹1022, closes ₹1005 (₹17 drop). Day 2: Opens ₹1008, closes ₹988 (₹20 drop). Day 3: Opens ₹990, closes ₹968 (₹22 drop). Perfect Three Black Crows: three uniform bearish candles, minimal shadows, each opens within previous body, progressive lows. Total ₹57 drop (5.5%) in 3 days.
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Entry Strategy:</strong> Short after Day 3 close at ₹966 or Day 4 if confirms below ₹965.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Risk Management:</strong> Stop loss ₹1028 (above pattern start). Target ₹940 (support), then ₹920. Risk ₹62 for ₹48 gain (adjust size or wider targets for better ratio).
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 6: Evening Doji Star */}
          <div id="evening-doji-star" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-red-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Evening Doji Star</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Structure & Significance</h3>
                <p className="text-slate-700 mb-4">
                  Evening Doji Star is a three-candle bearish reversal pattern and variation of Evening Star. First candle is long bullish, second is Doji (open=close) that gaps up showing extreme indecision at top, third is long bearish closing deep into first candle. The Doji represents perfect equilibrium before collapse—more reliable than regular Evening Star.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Three-Candle Structure:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>First:</strong> Long bullish candle\u2014uptrend continuation.</li>
                      <li><strong>Second (Doji):</strong> Gaps up, open=close\u2014complete indecision/exhaustion at highs.</li>
                      <li><strong>Third:</strong> Long bearish, gaps down, closes deep into first body\u2014bears take over.</li>
                      <li><strong>Gaps:</strong> Both gaps (up then down) strengthen pattern significantly.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Significance:</h4>
                    <p className="text-sm text-slate-700">
                      Doji shows bulls exhausted\u2014can't push higher despite gap up. Perfect balance unstable. Third candle resolves with violent bearish move. Pattern becomes self-fulfilling as technicians recognize it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">How to Interpret</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-red-100 rounded-lg p-4 border-2 border-red-200">
                    <h4 className="font-semibold text-red-900 mb-2">✅ Gap Confirmation</h4>
                    <p className="text-sm text-slate-700">
                      Clear gaps both sides of Doji critical. First gap up shows exhaustion attempt, second gap down confirms failure. Larger gaps = stronger signal.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📊 Volume V-Pattern</h4>
                    <p className="text-sm text-slate-700">
                      High volume Day 1 (climax), Low Day 2 (Doji/exhaustion), Very High Day 3 (panic/distribution). This volume pattern confirms psychology.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 Resistance Context</h4>
                    <p className="text-sm text-slate-700">
                      Most powerful at major resistance, round numbers, RSI {'>'} 70. After extended rallies. Check for bearish divergence on indicators.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
                <p className="text-sm text-slate-700 mb-3">
                  FMCG stock: ₹1550→₹1680 in 12 days. Day 12: Long green ₹1678 (+₹22). Day 13: Gaps to ₹1682, closes ₹1682 (perfect Doji). Day 14: Gaps down ₹1675, plunges to ₹1642. Evening Doji Star complete.
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Entry:</strong> Short at ₹1640 after Day 14 close.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Risk Management:</strong> Stop ₹1690. Target ₹1610, then ₹1585. Risk ₹50 for ₹55+ gain (1.1:1).
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 7: Tweezer Top */}
          <div id="tweezer-top" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-red-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Tweezer Top</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Structure & Significance</h3>
                <p className="text-slate-700 mb-4">
                  Tweezer Top is a two-candle bearish reversal pattern with two consecutive candles showing matching/near-matching highs. First candle typically bullish, second bearish—both test same resistance level. Double rejection demonstrates buyers cannot push higher, suggesting trend exhaustion and potential reversal.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Pattern Characteristics:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Matching Highs:</strong> Two candles with identical/near-identical highs within ₹1-2.</li>
                      <li><strong>First Candle:</strong> Bullish—shows continued buying but stalls at resistance.</li>
                      <li><strong>Second Candle:</strong> Bearish—retests same high, fails, closes lower.</li>
                      <li><strong>Upper Shadows:</strong> Longer upper shadows strengthen signal—shows strong rejection.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">The Significance:</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      Like tweezer/pliers testing ceiling—resistance holds firm under two attempts. Bulls try twice, fail twice. Trapped buyers at highs create selling pressure.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>Psychology:</strong> First test traps bulls. Second test confirms top—bulls give up, bears confident.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">How to Interpret</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-red-100 rounded-lg p-4 border-2 border-red-200">
                    <h4 className="font-semibold text-red-900 mb-2">✅ Precision Match</h4>
                    <p className="text-sm text-slate-700">
                      Highs should match within ₹1-2. Exact match ideal. Closer match = stronger resistance. Three+ matching highs = very powerful signal.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📊 Volume Confirmation</h4>
                    <p className="text-sm text-slate-700">
                      Volume should spike on second candle as sellers defend level. Higher volume = more conviction. Low volume reduces reliability.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 Resistance Context</h4>
                    <p className="text-sm text-slate-700">
                      Best at major resistance: previous highs, round numbers, Fibonacci levels. RSI {'>'} 70. Check for bearish divergence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
                <p className="text-sm text-slate-700 mb-3">
                  Energy stock: ₹345→₹398 over 10 days. Day 10: Bullish, high ₹398.50, close ₹397. Day 11: Gaps up, hits ₹398.80 (same high!), reverses, closes ₹392. Perfect Tweezer Top at ₹398-399.
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Entry:</strong> Short at ₹390 after Day 11 or Day 12 confirmation.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Risk:</strong> Stop ₹402. Target ₹375, then ₹360. Risk ₹12 for ₹30 (2.5:1).
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 8: Gravestone Doji */}
          <div id="gravestone-doji" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-red-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">8. Gravestone Doji</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Structure & Significance</h3>
                <p className="text-slate-700 mb-4">
                  Gravestone Doji is a single-candle bearish reversal pattern where open, close, and low are identical (or very close), creating long upper shadow with no lower shadow. Forms inverted "T" shape. Shows buyers pushed high intraday but sellers crushed them completely, driving price back to opening level—dramatic rejection of higher prices.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Pattern Structure:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Open = Close = Low:</strong> All three at bottom, forming flat base of inverted T.</li>
                      <li><strong>Long Upper Shadow:</strong> Shows significant intraday rally that completely failed—buyers trapped.</li>
                      <li><strong>No Lower Shadow:</strong> Absence critical—price never went below open/close.</li>
                      <li><strong>Shadow Length:</strong> Longer shadow = stronger reversal. Ideal 2-3x typical candle body.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">The Significance:</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      Named for gravestone/tombstone shape—ominous signal marking "death" of uptrend. Complete intraday reversal shows sellers overwhelming buyers despite initial strength.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>Psychology:</strong> Morning optimism turns to evening despair. All buyers who bought near highs trapped—creates panic selling next session.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">How to Interpret</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-red-100 rounded-lg p-4 border-2 border-red-200">
                    <h4 className="font-semibold text-red-900 mb-2">✅ Shadow Analysis</h4>
                    <p className="text-sm text-slate-700">
                      Upper shadow should be very long—minimum 2x average candle. Longer = more powerful rejection. Tiny/no lower shadow critical for pattern validity.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📊 Volume Confirmation</h4>
                    <p className="text-sm text-slate-700">
                      High volume confirms battle with sellers winning. Shows genuine distribution, not just indecision. 1.5-2x+ average volume validates.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 Location Critical</h4>
                    <p className="text-sm text-slate-700">
                      Most powerful at major resistance, after parabolic moves, RSI {'>'} 70. Near round numbers. Requires next-day bearish confirmation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
                <p className="text-sm text-slate-700 mb-3">
                  Pharma stock: ₹890→₹965 in 9 days. Day 9: Opens ₹963, surges to ₹982 (new high), but sellers attack—closes ₹963 (same as open). Perfect Gravestone: ₹19 upper shadow, zero body, no lower shadow. Volume 2.5x.
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Entry:</strong> Short after Day 10 confirms below ₹960.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Risk Management:</strong> Stop ₹985. Target ₹935, then ₹915. Risk ₹25 for ₹48 gain (1.9:1).
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 9: Hanging Man */}
          <div id="hanging-man" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-red-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">9. Hanging Man</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Structure & Significance</h3>
                <p className="text-slate-700 mb-4">
                  Hanging Man is single-candle bearish reversal pattern appearing at top of uptrend. Has small body near top of range with long lower shadow (2x+ body length) and little/no upper shadow. Identical structure to Hammer but context opposite—bullish at bottom (Hammer), bearish at top (Hanging Man). Shows sellers tested lower but buyers recovered—yet hints at weakness.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Pattern Characteristics:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Small Body:</strong> Near top of candle—color less important (red/green both valid).</li>
                      <li><strong>Long Lower Shadow:</strong> At least 2x body—shows intraday selling pressure.</li>
                      <li><strong>Minimal Upper Shadow:</strong> Short/absent upper shadow ideal.</li>
                      <li><strong>Confirmation Required:</strong> MUST have bearish follow-through next day—otherwise pattern fails.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">The Significance:</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      Named for hanging man on gallows—ominous. Long lower shadow at top of rally shows sellers testing, creating fear despite recovery. Buyers exhausted—couldn't push to new highs.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>Key Difference:</strong> Context is everything. Same shape as Hammer but location determines meaning. At top = warning sign.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">How to Interpret</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-red-100 rounded-lg p-4 border-2 border-red-200">
                    <h4 className="font-semibold text-red-900 mb-2">✅ Confirmation Essential</h4>
                    <p className="text-sm text-slate-700">
                      Pattern REQUIRES bearish candle next day closing below Hanging Man. Without confirmation, pattern invalid—may continue up. Never trade without confirmation.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📊 Volume Pattern</h4>
                    <p className="text-sm text-slate-700">
                      Higher volume on Hanging Man day confirms distribution. Low volume reduces reliability significantly. Confirmation candle should also have strong volume.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 Context Requirements</h4>
                    <p className="text-sm text-slate-700">
                      ONLY valid at top of uptrend. After 8-10+ bullish days. Near resistance, RSI {'>'} 70. At bottoms, same shape is Hammer (bullish)—location critical.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
                <p className="text-sm text-slate-700 mb-3">
                  IT stock: ₹1820→₹1945 in 11 days. Day 11: Opens ₹1943, drops to ₹1918, closes ₹1940. Hanging Man: small ₹3 body, ₹22 lower shadow. Day 12: Opens ₹1936, closes ₹1920—bearish confirmation!
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Entry:</strong> Short at ₹1918 after Day 12 confirmation.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Risk Management:</strong> Stop ₹1950. Target ₹1890, then ₹1870. Risk ₹32 for ₹48 gain (1.5:1).
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 10: Bearish Kicker */}
          <div id="bearish-kicker" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-red-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">10. Bearish Kicker</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Structure & Significance</h3>
                <p className="text-slate-700 mb-4">
                  Bearish Kicker is one of most powerful two-candle reversal patterns. Starts with strong bullish candle showing buyer control. Second candle gaps down below first candle's body (no overlap) and closes as strong bearish candle. This violent "kick" downward typically triggered by major news—earnings miss, scandal, regulatory action—that completely reverses sentiment.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Pattern Requirements:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>First Candle:</strong> Strong bullish (preferably Marubozu) showing complete buyer control.</li>
                      <li><strong>Gap Down:</strong> Second opens below first's body with clear gap—no price overlap.</li>
                      <li><strong>Second Candle:</strong> Strong bearish (ideally Marubozu) showing complete seller takeover.</li>
                      <li><strong>Opposite Sentiment:</strong> Both candles minimal shadows—one-sided control each day.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">The Significance:</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      Violent "kick" in opposite direction—like door slammed shut on bulls. Day 1: Bulls dominant. Day 2: Bears completely control with zero transition. Usually follows fundamental catalyst changing entire thesis.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>Extreme Power:</strong> One of strongest patterns. Gap shows previous trend utterly rejected. Often accompanies major news that changes everything.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">How to Interpret</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-red-100 rounded-lg p-4 border-2 border-red-200">
                    <h4 className="font-semibold text-red-900 mb-2">✅ Gap Integrity</h4>
                    <p className="text-sm text-slate-700">
                      Gap must stay unfilled in following sessions. If price rallies back into gap, pattern fails. Larger gap (3-5%+) = stronger signal. Gap shows complete rejection.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">📊 Explosive Volume</h4>
                    <p className="text-sm text-slate-700">
                      Volume on second candle should be massive—3-5x+ average. Confirms institutional selling and major shift. Low volume Kicker lacks credibility.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">🎯 News Catalyst</h4>
                    <p className="text-sm text-slate-700">
                      Almost always has fundamental trigger: earnings miss, lawsuit, product failure, regulatory penalty. Verify catalyst. Pure technical Kickers rare and less reliable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📝 Trading Example</h4>
                <p className="text-sm text-slate-700 mb-3">
                  Banking stock: ₹1650→₹1780 in 2 weeks on strong results. Day 14: Long green closes ₹1778 (+₹18). Evening: Fraud allegations surface. Day 15: Gaps down to ₹1720 (₹58 gap, 3.3%), plunges to ₹1685. Perfect Bearish Kicker. Volume 8x average.
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Entry:</strong> Short at market open Day 15 (₹1720) or intraday if holds below gap.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Risk Management:</strong> Stop ₹1730 (if gap fills, pattern fails). Target ₹1650, then ₹1620. Risk ₹10 for ₹65+ gain (6.5:1+ ratio).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trading Guidelines */}
        <div className="bg-gradient-to-r from-red-700 to-rose-700 rounded-2xl p-8 shadow-lg mt-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-6">🎯 Trading Guidelines for Bearish Patterns</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-200 mb-4">✅ Best Practices</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-300">•</span>
                  <span><strong>Wait for Confirmation:</strong> Never short on the pattern candle itself. Wait for next candle to close lower.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">•</span>
                  <span><strong>Check the Trend:</strong> Bearish patterns work best after clear uptrends and near resistance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">•</span>
                  <span><strong>Volume Validation:</strong> High volume on pattern = stronger signal. Low volume = be skeptical.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">•</span>
                  <span><strong>Resistance Levels:</strong> Patterns at key resistance zones have highest success rates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">•</span>
                  <span><strong>Use Stop Losses:</strong> Always place stops above the pattern high to limit risk.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-yellow-200 mb-4">❌ Common Mistakes</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span><strong>Shorting Strong Uptrends:</strong> Bearish patterns against powerful trends often fail. Don't fight the trend.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span><strong>No Confirmation:</strong> Entering short without waiting for next candle = unnecessary risk.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span><strong>Ignoring Support:</strong> Major support nearby can invalidate bearish patterns quickly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span><strong>Weak Volume:</strong> Bearish patterns with low volume often result in failed reversals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span><strong>Too Aggressive:</strong> Shorting is riskier than buying—manage position sizes carefully.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-red-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🎓 Key Takeaways</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <p className="text-lg text-slate-700"><strong>Top Recognition:</strong> All 10 bearish patterns signal potential trend reversals from bullish to bearish.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg text-slate-700"><strong>Context is Critical:</strong> Most effective after clear uptrends and near resistance levels.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg text-slate-700"><strong>Volume Matters:</strong> High selling volume during pattern formation dramatically increases reliability.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg text-slate-700"><strong>Multi-Candle Power:</strong> Evening Star and Three Black Crows are generally stronger than single-candle patterns.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg text-slate-700"><strong>Confirmation Essential:</strong> Always wait for bearish follow-through before entering short positions.</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Continue Learning</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/bullish-reversal-patterns" className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
              ← Previous: Bullish Patterns
            </Link>
            <Link to="/continuation-patterns" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Next: Continuation Patterns →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
