import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function SpecialAdvancedPatterns() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/special-advanced-patterns' } });
    }
  }, [navigate]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link to="/learn" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4">
            ← Back to Learn
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">⭐</span>
            <h1 className="text-4xl font-bold text-purple-700">Special & Advanced Patterns</h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            Explore 11 rare but highly significant candlestick patterns that often precede major market moves. These advanced formations require careful analysis and confirmation but offer exceptional trading opportunities when properly identified.
          </p>
          
          {/* Hero Visual */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-8 mb-6">
            <div className="text-center">
              <div className="text-6xl mb-4">⚡⭐🔮</div>
              <p className="text-lg font-semibold text-slate-700">Rare Patterns, Powerful Signals</p>
              <p className="text-sm text-slate-600 mt-2">Master the patterns that separate professionals from beginners</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="bg-slate-50 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 mb-4">📑 Patterns Covered (11 Total)</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <a href="#abandoned-baby" className="text-purple-600 hover:text-purple-700">→ Abandoned Baby</a>
              <a href="#island-reversal" className="text-purple-600 hover:text-purple-700">→ Island Reversal</a>
              <a href="#tri-star" className="text-purple-600 hover:text-purple-700">→ Tri-Star</a>
              <a href="#marubozu" className="text-purple-600 hover:text-purple-700">→ Marubozu</a>
              <a href="#long-legged-doji" className="text-purple-600 hover:text-purple-700">→ Long-Legged Doji</a>
              <a href="#stalled-pattern" className="text-purple-600 hover:text-purple-700">→ Stalled Pattern</a>
              <a href="#tweezer-tops-bottoms" className="text-purple-600 hover:text-purple-700">→ Tweezer Tops & Bottoms</a>
              <a href="#matching-highs-lows" className="text-purple-600 hover:text-purple-700">→ Matching Highs & Lows</a>
              <a href="#bullish-harami-cross" className="text-purple-600 hover:text-purple-700">→ Bullish Harami Cross</a>
              <a href="#bearish-harami-cross" className="text-purple-600 hover:text-purple-700">→ Bearish Harami Cross</a>
              <a href="#deliberation" className="text-purple-600 hover:text-purple-700">→ Deliberation Pattern</a>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Pattern 1: Abandoned Baby */}
          <div id="abandoned-baby" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Abandoned Baby</h2>
              <p className="text-slate-700 mb-3">
                The Abandoned Baby is a rare and powerful reversal pattern that can appear either bullish or bearish, depending on the direction of the trend. It consists of three candles, and the pattern occurs when a gap forms between the first and second candles, as well as between the second and third candles. The Abandoned Baby signals a significant shift in market sentiment, often due to a major change in the news or economic conditions.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>Bullish Abandoned Baby:</strong> This pattern appears during a downtrend. The first candle is a long bearish candle, followed by a Doji or a small candle (the "baby") that has a gap between the first and second candle. The third candle is a long bullish candle that gaps upward, completing the reversal pattern. It signals the exhaustion of selling pressure and the start of a new bullish trend. <strong>Bearish Abandoned Baby:</strong> This pattern appears during an uptrend, with the structure reversed, indicating a reversal from bullish to bearish sentiment. The pattern is rare and considered strong, especially near significant support or resistance levels.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">Why It's Rare & Powerful</h4>
                <p className="text-sm text-slate-700">
                  The gaps on both sides of the doji/small candle create total isolation—the "abandoned" baby. This shows complete sentiment shift. Very few patterns have gaps on both sides. When it appears, it's an extremely strong reversal signal. Best at major support/resistance. Requires high volume confirmation on third candle.
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 2: Island Reversal */}
          <div id="island-reversal" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Island Reversal</h2>
              <p className="text-slate-700 mb-3">
                The Island Reversal is a rare but highly significant reversal pattern that signals a potential trend reversal, either bullish or bearish, after a strong price move. The pattern is called "Island" because the candles that form it are isolated from the surrounding price action, resembling an island on the chart. It consists of: a gap in the direction of the current trend, a period of consolidation or sideways movement, and a second gap in the opposite direction of the first gap.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>Bullish Island Reversal:</strong> Appears after a downtrend with a gap down, consolidation, then an upward gap with a bullish candle confirming reversal. <strong>Bearish Island Reversal:</strong> Appears after an uptrend with a gap up, consolidation, then a downward gap with a bearish candle confirming reversal. The Island Reversal is considered a strong reversal signal, as the price gaps in both directions indicate that market sentiment has shifted. Traders often wait for confirmation before acting on this pattern.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">Island Formation</h4>
                <p className="text-sm text-slate-700">
                  The "island" of candles is completely separated by gaps on both sides. Shows dramatic shift in supply/demand. Often formed by major news or events. The consolidation period on the island can be 1-5 candles. Both gaps must remain unfilled for pattern validity. Extremely reliable when it forms—act decisively with proper risk management.
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 3: Tri-Star */}
          <div id="tri-star" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Tri-Star</h2>
              <p className="text-slate-700 mb-3">
                The Tri-Star is a rare and significant candlestick pattern that appears at the end of an established trend, signaling a potential reversal. It consists of three candles: a long bearish or bullish candle indicating the strength of the current trend, a Doji representing indecision and indicating momentum is weakening, and another long bearish or bullish candle moving in the opposite direction of the first candle, confirming the reversal.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>Bullish Tri-Star:</strong> Occurs after a downtrend (bearish candle → Doji → bullish candle), suggesting a shift from bearish to bullish. <strong>Bearish Tri-Star:</strong> Occurs after an uptrend (bullish candle → Doji → bearish candle), indicating reversal from bullish to bearish. The Tri-Star pattern is rare and considered a strong signal of trend reversal. Traders typically wait for a follow-up candle in the direction of the reversal for confirmation.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">Extremely Rare Pattern</h4>
                <p className="text-sm text-slate-700">
                  Three consecutive Dojis form the Tri-Star. This is exceptionally rare. Shows three sessions of complete indecision—market at critical turning point. When trend resumes after third Doji, it's usually in opposite direction. Pattern has very high accuracy but you may only see it a few times per year. When you spot it, take notice.
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 4: Marubozu */}
          <div id="marubozu" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Marubozu</h2>
              <p className="text-slate-700 mb-3">
                The Marubozu is a powerful candlestick pattern characterized by a long body and little to no shadow on either side. It indicates strong momentum and clear market sentiment in one direction. The Marubozu can be either bullish or bearish, depending on the trend.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>Bullish Marubozu:</strong> Opens at the low and closes at the high, with no significant shadows. Indicates buyers controlled the entire session, driving prices up—a strong signal of upward momentum. <strong>Bearish Marubozu:</strong> Opens at the high and closes at the low, with little to no shadow. Suggests sellers dominated the session and pushed the price down throughout—a strong indication of downward momentum. The Marubozu pattern reflects strong buyer or seller control and can be used to confirm trends or anticipate shifts in market direction. Traders typically look for Marubozu candles at key support or resistance levels.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">Pure Momentum</h4>
                <p className="text-sm text-slate-700">
                  Marubozu means "bald" or "shaven head" in Japanese—no shadows/wicks. Shows one side completely dominated from open to close. Bullish Marubozu: Strong buy signal, especially at support. Bearish Marubozu: Strong sell signal, especially at resistance. Longer the body, stronger the signal. No indecision whatsoever—pure directional conviction.
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 5: Long-Legged Doji */}
          <div id="long-legged-doji" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Long-Legged Doji</h2>
              <p className="text-slate-700 mb-3">
                The Long-Legged Doji is a type of Doji candlestick with long upper and lower shadows, indicating significant price movement within the trading session. However, the open and close prices are almost the same, meaning that neither buyers nor sellers gained control over the market during the session. The result is a small body positioned near the center of the candlestick, with long shadows extending both above and below it.
              </p>
              <p className="text-slate-700 mb-4">
                The Long-Legged Doji suggests indecision in the market. The long shadows represent significant price swings, but the fact that the open and close are close to each other shows that neither side managed to dominate. When this pattern appears at the top of an uptrend or at the bottom of a downtrend, it may signal a potential reversal. However, confirmation from subsequent price action is essential.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">Maximum Indecision</h4>
                <p className="text-sm text-slate-700">
                  Also called "Rickshaw Man" or "High Wave" candlestick. Long shadows both directions show extreme volatility and battle. Neither side won—perfect stalemate. At trend extremes, often precedes reversals. In consolidation, shows continued uncertainty. The longer the shadows relative to body, the more significant the indecision.
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 6: Stalled Pattern */}
          <div id="stalled-pattern" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Stalled Pattern</h2>
              <p className="text-slate-700 mb-3">
                The Stalled Pattern is a bearish reversal pattern that appears after an uptrend, signaling that the bullish momentum is slowing down and that a potential reversal to the downside may occur. It typically consists of two candles: a long bullish candle showing strong buying pressure, followed by a smaller candle (either bullish or bearish) that forms near the high of the first candle but does not move much higher.
              </p>
              <p className="text-slate-700 mb-4">
                This second candle suggests that the buyers' strength is weakening and that selling pressure is starting to build. The Stalled Pattern indicates indecision in the market, as buyers were initially in control but have lost momentum. The pattern is more reliable when it appears at or near a resistance level. Traders often look for confirmation with a subsequent bearish candle before entering short positions.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">Loss of Momentum</h4>
                <p className="text-sm text-slate-700">
                  Also called "Deliberation" or "Advance Block." Shows bullish momentum stalling despite uptrend. Second candle's failure to extend gains is key. Like a car running out of gas. Often precedes Three Black Crows pattern. Most reliable at major resistance or after parabolic moves. Early warning signal for trend exhaustion.
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 7: Tweezer Tops and Bottoms */}
          <div id="tweezer-tops-bottoms" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Tweezer Tops and Bottoms</h2>
              <p className="text-slate-700 mb-3">
                The Tweezer Tops and Tweezer Bottoms are reversal patterns that occur when two candles have matching highs or lows, signaling potential trend changes. These patterns typically appear at the end of an uptrend (Tweezer Tops) or a downtrend (Tweezer Bottoms).
              </p>
              <p className="text-slate-700 mb-4">
                <strong>Tweezer Tops:</strong> Occurs after an uptrend. Two candles with matching highs indicate strong resistance—the first candle is bullish, the second bearish, showing sellers are taking control and signaling potential downward reversal. <strong>Tweezer Bottoms:</strong> Occurs after a downtrend. Two candles with matching lows indicate strong support—the first candle is bearish, the second bullish, showing buyers are stepping in and signaling potential upward reversal. Both patterns highlight equilibrium points where price fails to move beyond a certain level, suggesting the trend is losing momentum. Confirmation with subsequent candles is essential.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">Double Test Signal</h4>
                <p className="text-sm text-slate-700">
                  Like "tweezers" pinching a precise level twice. Shows that level was tested and rejected. At tops: Resistance held twice = bearish. At bottoms: Support held twice = bullish. Matching doesn't need to be exact—within a few ticks acceptable. Stronger when candles are different colors (bullish then bearish for tops, vice versa for bottoms).
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 8: Matching Highs and Lows */}
          <div id="matching-highs-lows" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">8. Matching Highs and Lows</h2>
              <p className="text-slate-700 mb-3">
                The Matching Highs and Lows pattern consists of two candlesticks with identical highs or lows. This pattern is considered a sign of market indecision and often occurs at the top or bottom of a trend, suggesting that the price is unable to move beyond a certain point.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>Matching Highs:</strong> When two candles have the same high, it shows that sellers are preventing the price from moving higher. Could signal that resistance is strong and the upward trend is losing steam. If at the top of an uptrend, may signal reversal or pause. <strong>Matching Lows:</strong> When two candles have the same low, it indicates buyers are defending the level. Despite attempts to push lower, the market cannot break through. If at the bottom of a downtrend, suggests support is holding and the market may reverse upward. The pattern shows consolidation or indecision. Confirmation with subsequent candles is important.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">Level Defense</h4>
                <p className="text-sm text-slate-700">
                  Similar to Tweezers but focuses on exact matching rather than pattern structure. Shows a specific price level is being defended. Matching highs = supply overwhelming at that level. Matching lows = demand overwhelming at that level. More powerful when volume increases on second test. Break of matched level often leads to strong move.
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 9: Bullish Harami Cross */}
          <div id="bullish-harami-cross" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">9. Bullish Harami Cross</h2>
              <p className="text-slate-700 mb-3">
                The Bullish Harami Cross is a two-candle reversal pattern that occurs during a downtrend, signaling a potential shift in market sentiment from bearish to bullish. The pattern consists of a long bearish candle indicating the downtrend is strong and sellers are in control, followed by a Doji representing indecision in the market. The Doji's body is contained entirely within the body of the first candle, forming a "Harami" pattern.
              </p>
              <p className="text-slate-700 mb-4">
                The Bullish Harami Cross signals that although the market has been in a downtrend, there is a shift in sentiment as the price struggles to move lower. The appearance of the Doji represents a moment of indecision, and the potential for a reversal becomes more likely. This pattern suggests that selling pressure is waning, and buyers may be starting to take control. Traders often wait for confirmation before entering long positions.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">Indecision After Decline</h4>
                <p className="text-sm text-slate-700">
                  Harami means "pregnant" in Japanese. The Doji (indecision) inside bearish candle shows sellers losing conviction. More powerful than regular Harami due to perfect balance (Doji). Wait for bullish confirmation candle closing above Doji's high. Best at support levels or after extended declines. Volume should decrease on Doji, increase on confirmation.
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 10: Bearish Harami Cross */}
          <div id="bearish-harami-cross" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">10. Bearish Harami Cross</h2>
              <p className="text-slate-700 mb-3">
                The Bearish Harami Cross is the opposite of the Bullish Harami Cross and occurs during an uptrend, signaling a potential reversal from bullish to bearish. The pattern consists of a long bullish candle indicating the uptrend is strong and buyers are in control, followed by a Doji indicating indecision. The Doji's body is entirely contained within the body of the first candle, forming the "Harami" pattern.
              </p>
              <p className="text-slate-700 mb-4">
                The Bearish Harami Cross suggests that despite the prevailing uptrend, market sentiment is beginning to shift. The Doji reflects a battle between buyers and sellers where neither side can establish control. This creates uncertainty, and when it appears at the top of an uptrend, it signals that the bullish momentum is weakening and a reversal to the downside may occur. Traders typically wait for confirmation with a bearish candle following the pattern before entering short positions.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">Indecision After Rally</h4>
                <p className="text-sm text-slate-700">
                  Doji inside bullish candle shows buyers losing momentum. Perfect balance after rally = warning sign. More significant than regular Bearish Harami. Wait for bearish confirmation candle closing below Doji's low. Most effective at resistance or after extended rallies. Volume patterns same as bullish version (low on Doji, high on confirmation).
                </p>
              </div>
            </div>
          </div>

          {/* Pattern 11: Deliberation */}
          <div id="deliberation" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">11. Deliberation Pattern</h2>
              <p className="text-slate-700 mb-3">
                The Deliberation pattern refers to candles like the Doji or Spinning Top, where the market appears to be in a state of indecision. Both patterns are characterized by small bodies and long upper and lower shadows, which indicate that the price moved in both directions during the trading session, but neither the bulls nor the bears were able to gain control.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>Doji:</strong> Has a very small body with open and close at or near the same level, and long shadows above and below—reflects complete balance between buyers and sellers, with no clear winner in the session. <strong>Spinning Top:</strong> Has a small body with longer shadows, showing similar indecision but with slightly larger body than Doji. Both patterns signal that the market is in uncertainty and a reversal or continuation could be expected. These patterns are more significant when they appear after an established trend, especially at key support or resistance levels. Traders usually wait for a confirming candle.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">Market Contemplation</h4>
                <p className="text-sm text-slate-700">
                  Deliberation shows market "thinking" about what to do next. Neither bulls nor bears convinced. After strong trends, often precedes reversal. In consolidation, shows continued uncertainty. Multiple deliberation candles in a row = very indecisive market. Trade the breakout from the deliberation zone, not the zone itself. Patience required.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trading Guidelines */}
        <div className="bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl p-8 shadow-lg mt-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-6">🎯 Trading Guidelines for Special Patterns</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-200 mb-4">✅ Advanced Trading Rules</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-300">•</span>
                  <span><strong>Rarity = Significance:</strong> These patterns are rare—when you spot one, pay close attention.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-300">•</span>
                  <span><strong>Confirmation Critical:</strong> Never trade rare patterns without strong confirmation from next candles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-300">•</span>
                  <span><strong>Volume Analysis:</strong> Special patterns with high volume are extremely reliable.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-300">•</span>
                  <span><strong>Context is Everything:</strong> Check trend, support/resistance, and overall market conditions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-300">•</span>
                  <span><strong>Larger Position Justified:</strong> When rare patterns confirm, they often lead to significant moves.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-yellow-200 mb-4">⚠️ Advanced Cautions</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span><strong>Don't Force Patterns:</strong> Rare patterns are rare—don't see them where they don't exist.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span><strong>Incomplete Patterns:</strong> Wait for full formation—jumping in early negates reliability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span><strong>Low Liquidity Risk:</strong> Special patterns in illiquid stocks can give false signals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span><strong>News-Driven Gaps:</strong> Understand WHY gaps formed before trading gap-based patterns.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span><strong>Over-Optimism:</strong> Even the best patterns fail sometimes—manage risk appropriately.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-purple-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🎓 Key Takeaways</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <p className="text-lg text-slate-700"><strong>Rarity Equals Power:</strong> These 11 patterns are uncommon but highly significant when they appear.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg text-slate-700"><strong>Gap Patterns:</strong> Abandoned Baby and Island Reversals with gaps both sides are extremely strong signals.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg text-slate-700"><strong>Marubozu Shows Conviction:</strong> No shadows means complete dominance by one side—pure momentum.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg text-slate-700"><strong>Indecision Patterns:</strong> Long-Legged Doji, Harami Cross, Deliberation show market uncertainty—trade breakouts.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg text-slate-700"><strong>Matching Levels:</strong> Tweezer and Matching High/Low patterns show strong support or resistance being tested.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">6️⃣</span>
              <p className="text-lg text-slate-700"><strong>Confirmation is Critical:</strong> Never trade these rare patterns without strong confirmation from subsequent candles.</p>
            </div>
          </div>
        </div>

        {/* Pattern Reliability Chart */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">📊 Pattern Reliability Rankings</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="font-semibold text-slate-700">Abandoned Baby (with gaps)</span>
              <span className="text-purple-700 font-bold">⭐⭐⭐⭐⭐ (95%)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="font-semibold text-slate-700">Island Reversal</span>
              <span className="text-purple-700 font-bold">⭐⭐⭐⭐⭐ (90%)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="font-semibold text-slate-700">Marubozu (at key levels)</span>
              <span className="text-purple-700 font-bold">⭐⭐⭐⭐ (85%)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="font-semibold text-slate-700">Tri-Star</span>
              <span className="text-purple-700 font-bold">⭐⭐⭐⭐ (85%)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="font-semibold text-slate-700">Harami Cross (with confirmation)</span>
              <span className="text-purple-700 font-bold">⭐⭐⭐ (75%)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="font-semibold text-slate-700">Tweezer Tops/Bottoms</span>
              <span className="text-purple-700 font-bold">⭐⭐⭐ (70%)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="font-semibold text-slate-700">Long-Legged Doji</span>
              <span className="text-purple-700 font-bold">⭐⭐⭐ (70%)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-sm text-slate-600 italic">*Percentages based on historical data with proper confirmation and context</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Congratulations! 🎉</h2>
          <p className="text-lg text-slate-600 mb-6">
            You've completed all 4 candlestick pattern modules—42 patterns in total. You now have the knowledge to read market psychology like a professional trader.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/continuation-patterns" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              ← Previous: Continuation
            </Link>
            <Link to="/learn" className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
              Back to All Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
