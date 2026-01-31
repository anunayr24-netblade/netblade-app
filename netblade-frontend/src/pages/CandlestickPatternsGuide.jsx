import { Link } from 'react-router-dom';

export default function CandlestickPatternsGuide() {
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
            <span className="text-4xl">🕯️</span>
            <h1 className="text-4xl font-bold text-slate-900">Complete Candlestick Patterns Guide</h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            Master every essential candlestick pattern with detailed explanations, psychology, structure, and trading strategies. From basic single-candle formations to complex multi-candle reversal and continuation patterns.
          </p>
          
          {/* Hero Visual */}
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-8 mb-6">
            <div className="text-center">
              <div className="text-6xl mb-4">🟩🟥📊</div>
              <p className="text-lg font-semibold text-slate-700">Japanese Wisdom Meets Modern Trading</p>
              <p className="text-sm text-slate-600 mt-2">300+ Years of Price Action Psychology</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="bg-slate-50 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 mb-4">📑 Quick Navigation</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <a href="#bullish-reversal" className="text-green-600 hover:text-green-700">→ Bullish Reversal Patterns (11 patterns)</a>
              <a href="#bearish-reversal" className="text-red-600 hover:text-red-700">→ Bearish Reversal Patterns (10 patterns)</a>
              <a href="#continuation" className="text-blue-600 hover:text-blue-700">→ Continuation Patterns (10 patterns)</a>
              <a href="#special" className="text-purple-600 hover:text-purple-700">→ Special & Advanced Patterns (10+ patterns)</a>
            </div>
          </div>
        </div>

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

          {/* More Bullish Patterns - Condensed Format */}
          <div className="space-y-6">
            {/* 3. Morning Star */}
            <div className="border-l-4 border-green-400 pl-6 py-4 bg-green-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Morning Star</h3>
              <p className="text-slate-700 mb-3">
                The Morning Star is a powerful three-candle bullish reversal pattern that typically appears after a prolonged downtrend. It begins with a long bearish candle, indicating continued selling pressure. The second candle is smaller, often a doji or spinning top, representing market indecision. The third candle is a long bullish candle that closes well into the body of the first candle, signifying a strong shift in sentiment from sellers to buyers.
              </p>
              <p className="text-slate-700 mb-3">
                This pattern highlights a transition in control from bears to bulls and often signals the beginning of an upward trend. The Morning Star gains more reliability when it appears near key support levels or is confirmed by increased trading volume. Traders often use additional technical indicators, such as RSI or MACD, to further validate the strength of the reversal. This pattern is widely regarded as one of the most reliable bullish reversal signals in candlestick analysis.
              </p>
            </div>

            {/* 4. Bullish Engulfing */}
            <div className="border-l-4 border-green-400 pl-6 py-4 bg-green-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">4. Bullish Engulfing</h3>
              <p className="text-slate-700 mb-3">
                The Bullish Engulfing pattern is a strong two-candle bullish reversal pattern that often occurs after a downtrend. The first candle is small and bearish, while the second is a large bullish candle that completely engulfs the body of the previous one. This formation indicates that buying pressure has overtaken selling pressure, with bulls gaining control of the market.
              </p>
              <p className="text-slate-700 mb-3">
                The pattern becomes even more significant when the engulfing candle closes above key resistance levels or when it appears near support zones. A higher trading volume on the second candle adds further reliability to the signal. Traders interpret this pattern as a sign of a potential trend reversal, especially when supported by other technical indicators. However, patience is key, as confirmation with a subsequent bullish move is essential to validate the shift in market sentiment.
              </p>
            </div>

            {/* 5. Piercing Line */}
            <div className="border-l-4 border-green-400 pl-6 py-4 bg-green-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">5. Piercing Line</h3>
              <p className="text-slate-700 mb-3">
                The Piercing Line is a two-candle bullish reversal pattern that forms after a downtrend, signaling a potential shift in market sentiment. The first candle is a long bearish candle, indicating strong selling pressure. The second candle is bullish and opens below the low of the first candle, suggesting that sellers initially maintained control. However, the second candle closes more than halfway into the body of the first candle, demonstrating a significant change in sentiment as buyers regain control.
              </p>
              <p className="text-slate-700 mb-3">
                This pattern is particularly reliable when it forms near key support levels or after a prolonged downtrend. Confirmation with subsequent bullish candles and higher trading volume strengthens the validity of the signal. The Piercing Line indicates that buyers are stepping in, potentially reversing the trend. Traders often use this pattern in conjunction with other tools, such as moving averages or RSI, to increase confidence in entering long positions.
              </p>
            </div>

            {/* 6. Three White Soldiers */}
            <div className="border-l-4 border-green-400 pl-6 py-4 bg-green-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">6. Three White Soldiers</h3>
              <p className="text-slate-700 mb-3">
                The "Three White Soldiers" pattern is a bullish reversal pattern consisting of three consecutive long-bodied candlesticks. These candles open within or near the previous candle's body and close progressively higher, forming a staircase-like structure. This pattern signifies a strong and sustained shift in market sentiment from bearish to bullish.
              </p>
              <p className="text-slate-700 mb-3">
                Each candle in the pattern should ideally have small or no shadows, indicating consistent buying pressure throughout the session. The Three White Soldiers pattern is highly reliable when it forms after a downtrend or a consolidation phase. Traders often consider this as a strong buy signal, especially when accompanied by rising volume. However, caution is necessary if the pattern appears after an extended uptrend, as it might indicate overbought conditions.
              </p>
            </div>

            {/* 7. Morning Doji Star */}
            <div className="border-l-4 border-green-400 pl-6 py-4 bg-green-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">7. Morning Doji Star</h3>
              <p className="text-slate-700 mb-3">
                The Morning Doji Star is a three-candle bullish reversal pattern that appears at the end of a downtrend. It begins with a long bearish candle, followed by a doji that signals market indecision. The final candle is a large bullish one that closes well into the body of the first candle, confirming the reversal.
              </p>
              <p className="text-slate-700">
                The presence of the doji indicates a balance between buyers and sellers, hinting at a potential change in momentum. The bullish confirmation candle signifies that buyers have taken control, suggesting the start of an upward trend. This pattern is more reliable when accompanied by high trading volume or when it forms near significant support levels. Traders often use additional technical indicators to validate the signal and strengthen their confidence in entering long positions.
              </p>
            </div>

            {/* 8. Tweezer Bottom */}
            <div className="border-l-4 border-green-400 pl-6 py-4 bg-green-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">8. Tweezer Bottom</h3>
              <p className="text-slate-700 mb-3">
                The Tweezer Bottom is a two-candle bullish reversal pattern that forms after a downtrend. It consists of two consecutive candles with nearly identical lows, signaling strong support at that price level. The first candle is bearish, indicating selling pressure, while the second candle is bullish, showing that buyers have stepped in to halt the decline.
              </p>
              <p className="text-slate-700">
                This pattern suggests that the market has found a bottom, and a reversal to the upside is likely. The Tweezer Bottom gains more significance when it appears at key support levels or when confirmed by other technical indicators like RSI divergence. Traders often look for a subsequent bullish candle to confirm the reversal and provide a reliable entry point.
              </p>
            </div>

            {/* 9. Dragonfly Doji */}
            <div className="border-l-4 border-green-400 pl-6 py-4 bg-green-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">9. Dragonfly Doji</h3>
              <p className="text-slate-700 mb-3">
                The Dragonfly Doji is a single-candle pattern that occurs when the open, close, and high prices are very close to each other, while the low price forms a long lower shadow. This creates a "T" shape, with the long lower shadow representing significant selling pressure that was eventually overcome by buyers.
              </p>
              <p className="text-slate-700">
                This pattern typically appears during a downtrend and can signal a potential reversal to the upside, as it indicates that selling pressure has been exhausted and buying interest is growing. The Dragonfly Doji is more reliable when it forms near support levels or after a prolonged downtrend. For confirmation, traders often wait for a subsequent bullish candle or other indicators before entering long positions.
              </p>
            </div>

            {/* 10. Bullish Belt Hold */}
            <div className="border-l-4 border-green-400 pl-6 py-4 bg-green-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">10. Bullish Belt Hold</h3>
              <p className="text-slate-700 mb-3">
                The Bullish Belt Hold is a single-candle bullish pattern that signals a potential upward reversal after a downtrend. It is characterized by a long bullish candle with little to no lower shadow, where the opening price is near or at the low of the session, and the closing price is near the high.
              </p>
              <p className="text-slate-700">
                This structure indicates that buyers took control of the market early in the session and maintained their dominance throughout, pushing the price higher. The Bullish Belt Hold shows strong buying pressure and is often seen as a sign that the downtrend has ended and a new uptrend may begin. The Bullish Belt Hold is considered more reliable when it occurs near support levels or after a prolonged downtrend. Traders often look for confirmation with a follow-up bullish candle or increased volume to validate the reversal.
              </p>
            </div>

            {/* 11. Bullish Kicker */}
            <div className="border-l-4 border-green-400 pl-6 py-4 bg-green-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">11. Bullish Kicker</h3>
              <p className="text-slate-700 mb-3">
                The Bullish Kicker is a powerful two-candle reversal pattern that indicates a sudden and strong shift in market sentiment from bearish to bullish. It begins with a long bearish candle, reflecting significant selling pressure. The second candle, however, opens with a gap above the close of the first candle and forms a long bullish candle, with no overlap between the two. This "kicking" movement suggests a decisive takeover by buyers, often triggered by a major catalyst such as news or an earnings report.
              </p>
              <p className="text-slate-700">
                The absence of lower shadows on the second candle enhances the pattern's reliability. Traders interpret the Bullish Kicker as a signal of strong buying momentum and a potential start of an uptrend. To increase confidence, this pattern should ideally be accompanied by high trading volume and confirmed with subsequent bullish candles.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: BEARISH REVERSAL PATTERNS */}
        <div id="bearish-reversal" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🔴</span>
            <h2 className="text-3xl font-bold text-red-700">Bearish Reversal Patterns</h2>
          </div>
          <p className="text-lg text-slate-700 mb-8">
            These patterns appear after uptrends and signal potential downward reversals. They indicate that buying pressure is weakening and sellers are gaining control.
          </p>

          <div className="space-y-6">
            {/* 1. Shooting Star */}
            <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Shooting Star</h3>
              <p className="text-slate-700 mb-3">
                The Shooting Star is a single-candle bearish reversal pattern that appears after an uptrend, signaling a potential reversal. It is characterized by a small real body near the lower end of the trading range and a long upper shadow at least twice the length of the body. This structure indicates that buyers pushed the price higher during the session, but sellers regained control, driving the price back near the opening level.
              </p>
              <p className="text-slate-700">
                The absence or minimal lower shadow adds to its significance. The Shooting Star reflects weakening bullish momentum and the possibility of a downward reversal. For confirmation, traders often wait for the next candle to close lower, ideally with increased volume. It is more reliable when it forms near resistance levels or after a prolonged uptrend.
              </p>
            </div>

            {/* 2. Evening Star */}
            <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Evening Star</h3>
              <p className="text-slate-700 mb-3">
                The Evening Star is a three-candle bearish reversal pattern that typically appears at the top of an uptrend. The first candle is a long bullish one, indicating continued buying pressure. The second candle is smaller, often a doji or spinning top, reflecting indecision. The third candle is a long bearish candle that closes well into the body of the first candle, signaling a strong reversal.
              </p>
              <p className="text-slate-700">
                The Evening Star signifies a shift in sentiment from bullish to bearish and often leads to a downtrend. This pattern is considered reliable when it forms near resistance levels or is confirmed by increased trading volume. Traders often look for additional bearish confirmation from subsequent candles before taking action.
              </p>
            </div>

            {/* 3. Bearish Engulfing */}
            <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Bearish Engulfing</h3>
              <p className="text-slate-700 mb-3">
                The Bearish Engulfing pattern is a two-candle reversal pattern that occurs after an uptrend. The first candle is a small bullish one, followed by a larger bearish candle that completely engulfs the body of the first candle. This pattern signals strong selling pressure, as bears overpower bulls and take control of the market.
              </p>
              <p className="text-slate-700">
                The Bearish Engulfing pattern becomes more significant when it forms at key resistance levels or after an extended uptrend. High trading volume on the second candle adds to its reliability. Traders view this pattern as a signal to exit long positions or enter short positions, especially when confirmed by subsequent bearish candles or other technical indicators.
              </p>
            </div>

            {/* 4. Dark Cloud Cover */}
            <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">4. Dark Cloud Cover</h3>
              <p className="text-slate-700 mb-3">
                The Dark Cloud Cover is a two-candle bearish reversal pattern that forms after an uptrend. The first candle is a long bullish one, showing strong buying momentum. The second candle opens above the high of the first candle, creating a gap, but closes more than halfway into the body of the first candle, indicating a shift in sentiment.
              </p>
              <p className="text-slate-700">
                This pattern suggests that sellers have taken control, and a downward reversal is likely. The Dark Cloud Cover is more reliable when it forms near resistance levels or is accompanied by high trading volume. Confirmation with a subsequent bearish candle strengthens the signal, prompting traders to consider short positions or exit long positions.
              </p>
            </div>

            {/* 5. Three Black Crows */}
            <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">5. Three Black Crows</h3>
              <p className="text-slate-700 mb-3">
                The Three Black Crows pattern is a bearish reversal signal consisting of three consecutive long bearish candles. Each candle opens within or near the previous candle's body and closes lower, forming a downward staircase-like structure. This pattern indicates consistent selling pressure and a strong shift in market sentiment from bullish to bearish.
              </p>
              <p className="text-slate-700">
                The absence of significant lower shadows on the candles suggests that sellers dominated throughout the sessions. The Three Black Crows pattern is particularly reliable when it forms after an uptrend or at resistance levels. High trading volume on the third candle adds to its significance. Traders interpret this pattern as a signal to initiate short positions or exit long positions, anticipating further downside momentum.
              </p>
            </div>

            {/* 6. Evening Doji Star */}
            <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">6. Evening Doji Star</h3>
              <p className="text-slate-700 mb-3">
                The Evening Doji Star is a three-candle bearish reversal pattern that appears after an uptrend. The first candle is a long bullish one, reflecting strong buying pressure. The second candle is a doji, indicating indecision or balance between buyers and sellers. This doji forms a gap above the first candle, creating a clear separation. The third candle is a long bearish one that closes well into the body of the first candle, confirming the reversal.
              </p>
              <p className="text-slate-700">
                The Evening Doji Star is highly reliable, especially when it forms near resistance levels or after a prolonged uptrend. It signifies that the bulls have lost momentum and bears have taken control. For additional confirmation, traders often look for subsequent bearish candles and increased volume before taking action.
              </p>
            </div>

            {/* 7. Tweezer Top */}
            <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">7. Tweezer Top</h3>
              <p className="text-slate-700 mb-3">
                The Tweezer Top is a two-candle bearish reversal pattern that typically forms at the end of an uptrend. It is characterized by two consecutive candles with nearly identical highs, indicating strong resistance at that level. The first candle is bullish, showing initial buying pressure, while the second candle is bearish, reflecting a reversal as sellers take control.
              </p>
              <p className="text-slate-700">
                This pattern signals that the market has reached a peak, and a downward trend may follow. The Tweezer Top becomes more significant when it appears near resistance levels or is accompanied by other bearish indicators like RSI divergence or high trading volume. Traders often wait for confirmation with a subsequent bearish candle before entering short positions.
              </p>
            </div>

            {/* 8. Gravestone Doji */}
            <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">8. Gravestone Doji</h3>
              <p className="text-slate-700 mb-3">
                The Gravestone Doji is a single-candle bearish reversal pattern that forms after an uptrend. It is characterized by a small or non-existent real body at the lower end of the candle and a long upper shadow, with no lower shadow. This structure indicates that buyers pushed the price significantly higher during the session, but sellers regained control and forced the price back to the opening level.
              </p>
              <p className="text-slate-700">
                The Gravestone Doji reflects strong resistance and suggests that the bullish momentum is weakening. This pattern is highly reliable when it forms at key resistance levels or is accompanied by other bearish signals like high trading volume. Traders often wait for a confirmation candle closing lower to validate the reversal before initiating short positions.
              </p>
            </div>

            {/* 9. Hanging Man */}
            <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">9. Hanging Man</h3>
              <p className="text-slate-700 mb-3">
                The Hanging Man is a single-candle bearish reversal pattern that appears at the top of an uptrend, signaling a potential decline. It has a small real body near the top of the trading range and a long lower shadow that is at least twice the length of the body. This structure indicates that although sellers gained control during the session and drove prices lower, buyers pushed the price back near the opening level.
              </p>
              <p className="text-slate-700">
                However, the long lower shadow reflects selling pressure that could foreshadow a reversal. The Hanging Man is more reliable when it forms near resistance levels or after a prolonged uptrend, and confirmation with a bearish candle is necessary before acting on it. Traders often use additional technical indicators, such as RSI or volume analysis, to strengthen the signal.
              </p>
            </div>

            {/* 10. Bearish Kicker */}
            <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">10. Bearish Kicker</h3>
              <p className="text-slate-700 mb-3">
                The Bearish Kicker is a powerful two-candle reversal pattern that signals a dramatic shift in market sentiment from bullish to bearish. It starts with a long bullish candle, indicating strong buying momentum. The second candle opens with a gap below the previous candle's opening price and forms a long bearish candle, with no overlap between the two. This "kicking" action represents a decisive takeover by sellers, often triggered by significant news or events.
              </p>
              <p className="text-slate-700">
                The absence of upper shadows on the bearish candle strengthens the pattern, suggesting strong selling pressure throughout the session. The Bearish Kicker is highly reliable when it appears after an uptrend or near key resistance levels. Traders interpret this pattern as a clear sell signal, especially when accompanied by high trading volume and confirmed by subsequent bearish candles.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: CONTINUATION PATTERNS */}
        <div id="continuation" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🔵</span>
            <h2 className="text-3xl font-bold text-blue-700">Continuation Patterns</h2>
          </div>
          <p className="text-lg text-slate-700 mb-8">
            Continuation patterns suggest that the prevailing trend will continue after a brief pause or consolidation. These patterns indicate that neither buyers nor sellers have gained definitive control, and the trend is likely to resume.
          </p>

          <div className="space-y-6">
            {/* 1. Doji */}
            <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Doji</h3>
              <p className="text-slate-700 mb-3">
                A Doji is a single-candle pattern that represents market indecision and balance between buyers and sellers. It is characterized by a very small or non-existent real body, where the opening and closing prices are almost the same. The candle may have upper and lower shadows of varying lengths, reflecting price movement during the session. A Doji often signals a potential reversal or a pause in the trend, depending on its context within the market.
              </p>
              <p className="text-slate-700 mb-3">
                For instance, a Doji appearing after a prolonged uptrend may indicate weakening buying pressure and a possible bearish reversal, while a Doji after a downtrend might suggest seller exhaustion and a potential bullish reversal. Different variations, like Gravestone Doji or Dragonfly Doji, provide specific insights into market sentiment. The reliability of the pattern increases when combined with other indicators, such as volume or support and resistance levels.
              </p>
            </div>

            {/* 2. Spinning Top */}
            <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Spinning Top</h3>
              <p className="text-slate-700 mb-3">
                The Spinning Top is another single-candle pattern that represents indecision in the market. It has a small real body located near the middle of the trading range and upper and lower shadows of approximately equal lengths. This structure suggests that buyers and sellers are evenly matched, with neither gaining significant control during the session.
              </p>
              <p className="text-slate-700">
                A Spinning Top often appears during periods of consolidation and can indicate a potential reversal or continuation, depending on the preceding trend. After an uptrend, it may signal weakening bullish momentum and the possibility of a reversal to the downside. Similarly, after a downtrend, it could suggest that selling pressure is diminishing, paving the way for a bullish reversal. Traders often wait for confirmation with subsequent candles before making decisions.
              </p>
            </div>

            {/* 3. Rising Three Methods */}
            <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Rising Three Methods (Bullish)</h3>
              <p className="text-slate-700 mb-3">
                The Rising Three Methods is a bullish continuation pattern that occurs during an uptrend, signifying a brief consolidation before the trend resumes. It consists of five candles. The first is a long bullish candle, reflecting strong buying momentum. The next three candles are smaller bearish ones that move downward but remain within the range of the first candle, indicating a controlled pullback. The fifth candle is another long bullish candle that closes above the high of the first candle, confirming the continuation of the uptrend.
              </p>
              <p className="text-slate-700">
                This pattern demonstrates that the bulls remain in control despite temporary selling pressure. Traders often view the Rising Three Methods as a signal to hold or add to their long positions, expecting the uptrend to persist.
              </p>
            </div>

            {/* 4. Falling Three Methods */}
            <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">4. Falling Three Methods (Bearish)</h3>
              <p className="text-slate-700 mb-3">
                The Falling Three Methods is the bearish counterpart of the Rising Three Methods. It is a continuation pattern that appears during a downtrend, indicating a pause before the trend resumes. The pattern consists of five candles. The first is a long bearish candle, showing strong selling momentum. The next three candles are smaller bullish ones that move upward but stay within the range of the first candle, reflecting a temporary consolidation. The fifth candle is another long bearish candle that closes below the low of the first candle, confirming the continuation of the downtrend.
              </p>
              <p className="text-slate-700">
                This pattern signifies that bears remain dominant despite a brief period of buying pressure. Traders interpret the Falling Three Methods as a signal to hold or add to their short positions, anticipating further downside movement.
              </p>
            </div>

            {/* 5. Mat Hold (Bullish) */}
            <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">5. Mat Hold (Bullish)</h3>
              <p className="text-slate-700 mb-3">
                The Mat Hold (Bullish) is a bullish continuation pattern that signals a brief consolidation or pullback before the prevailing uptrend resumes. It typically occurs after a strong upward price movement and suggests that the bulls are still in control, despite the temporary pause. This pattern consists of five candles: a long bullish candle, three smaller candles moving slightly downward or sideways within the first candle's range, and a final long bullish candle that closes above the high of the first candle.
              </p>
              <p className="text-slate-700">
                The Mat Hold pattern demonstrates that the price has temporarily paused but that the market sentiment remains bullish. The consolidation phase reflects a healthy market correction or profit-taking, not a reversal. The pattern is particularly reliable when accompanied by increased volume during the breakout candle (the fifth one), which confirms the strength of the continuing trend. Traders often use the Mat Hold (Bullish) pattern to hold or add to their long positions.
              </p>
            </div>

            {/* 6. Rising Window */}
            <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">6. Rising Window (Breakaway Gap)</h3>
              <p className="text-slate-700 mb-3">
                The Rising Window, also known as a Breakaway Gap, is a bullish pattern that signifies strong upward momentum in the market. This pattern occurs when the opening price of a new session is significantly higher than the previous session's high, creating a gap between the two candles. The Rising Window reflects the market's enthusiasm, as buyers are in control and willing to pay a higher price to enter the market.
              </p>
              <p className="text-slate-700">
                This gap can signal the start of a strong bullish trend, typically forming at the beginning of an uptrend or after a period of consolidation. The pattern is considered more reliable when it occurs with high trading volume, indicating strong buyer interest. Traders often use this pattern as a signal to enter long positions, expecting the trend to continue. A Rising Window can also act as a support level, as the gap may provide price stability.
              </p>
            </div>

            {/* 7. Falling Window */}
            <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">7. Falling Window (Breakaway Gap)</h3>
              <p className="text-slate-700 mb-3">
                The Falling Window, also known as a Breakaway Gap, is the bearish counterpart to the Rising Window. It occurs when the opening price of a new session is significantly lower than the previous session's low, creating a gap between the two candles. The Falling Window signals that sellers have taken control of the market, with an abrupt downward movement that reflects increasing pessimism.
              </p>
              <p className="text-slate-700">
                This pattern typically forms at the start of a downtrend or after a period of consolidation, indicating a potential continuation of the bearish trend. The Falling Window is considered more reliable when it is accompanied by high trading volume, which confirms the strength of the selling pressure. Traders often use this pattern to enter short positions, anticipating that the downtrend will persist. Additionally, the gap may act as a resistance level.
              </p>
            </div>

            {/* 8. Harami Cross */}
            <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">8. Harami Cross (Continuation or Reversal)</h3>
              <p className="text-slate-700 mb-3">
                The Harami Cross is a candlestick pattern that can signal either a continuation or a reversal of the prevailing trend, depending on the market context. It consists of two candles: a large bullish or bearish candle indicating the strength of the current trend, followed by a Doji representing indecision in the market. The Doji is contained within the body of the first candle, forming a "Harami" pattern.
              </p>
              <p className="text-slate-700">
                The Harami Cross pattern is versatile. If the pattern forms after a strong trend and the Doji is followed by a candle in the direction of the prevailing trend, it signals continuation. However, if the Doji is followed by a strong candle in the opposite direction, the Harami Cross signals a potential reversal. Traders typically wait for confirmation with a follow-up candle before making trading decisions. The pattern is more reliable when it appears at key support or resistance levels.
              </p>
            </div>

            {/* 9. Three Line Strike (Bullish) */}
            <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">9. Three Line Strike (Bullish)</h3>
              <p className="text-slate-700 mb-3">
                The Three Line Strike is a rare but strong bullish continuation pattern. It appears during an uptrend and consists of three consecutive bullish candles, each closing higher than the previous one, followed by a fourth bearish candle that opens higher but closes below the first candle in the pattern.
              </p>
              <p className="text-slate-700">
                While the fourth candle may initially seem bearish, it often marks a temporary correction or "shakeout" before the uptrend resumes. This pattern indicates that bulls are in control despite short-term profit-taking. The Three Line Strike is considered highly reliable when accompanied by high trading volume on the fourth candle, as it often signals a strong continuation of the bullish trend. Traders typically wait for confirmation with a new bullish candle before taking action.
              </p>
            </div>

            {/* 10. Three Line Strike (Bearish) */}
            <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">10. Three Line Strike (Bearish)</h3>
              <p className="text-slate-700 mb-3">
                The Three Line Strike (Bearish) is a rare but significant bearish continuation pattern that forms during a downtrend. It consists of three consecutive bearish candles, each closing lower than the previous one, showing steady selling pressure. The fourth candle is a long bullish one that opens lower but closes above the first candle in the pattern, temporarily challenging the bearish momentum.
              </p>
              <p className="text-slate-700">
                While this bullish candle might suggest a reversal at first glance, the pattern usually signals a continuation of the downtrend, with sellers regaining control shortly afterward. Traders often wait for additional confirmation of the bearish trend before acting, such as a new bearish candle or validation from other technical indicators. The pattern is more reliable when it appears after a strong downtrend.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4: SPECIAL & ADVANCED PATTERNS */}
        <div id="special" className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">⭐</span>
            <h2 className="text-3xl font-bold text-purple-700">Special & Advanced Patterns</h2>
          </div>
          <p className="text-lg text-slate-700 mb-8">
            These are rare but highly significant patterns that often indicate strong market moves. They require careful analysis and confirmation before trading.
          </p>

          <div className="space-y-6">
            {/* 1. Abandoned Baby */}
            <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Abandoned Baby (Bullish/Bearish)</h3>
              <p className="text-slate-700 mb-3">
                The Abandoned Baby is a rare and powerful reversal pattern that can appear either bullish or bearish, depending on the direction of the trend. It consists of three candles, and the pattern occurs when a gap forms between the first and second candles, as well as between the second and third candles. The Abandoned Baby signals a significant shift in market sentiment, often due to a major change in the news or economic conditions.
              </p>
              <p className="text-slate-700">
                <strong>Bullish Abandoned Baby:</strong> This pattern appears during a downtrend. The first candle is a long bearish candle, followed by a Doji or a small candle (the "baby") that has a gap between the first and second candle. The third candle is a long bullish candle that gaps upward, completing the reversal pattern. It signals the exhaustion of selling pressure and the start of a new bullish trend. <strong>Bearish Abandoned Baby:</strong> This pattern appears during an uptrend, with the structure reversed, indicating a reversal from bullish to bearish sentiment. The pattern is rare and considered strong, especially near significant support or resistance levels.
              </p>
            </div>

            {/* 2. Island Reversal */}
            <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Island Reversal</h3>
              <p className="text-slate-700 mb-3">
                The Island Reversal is a rare but highly significant reversal pattern that signals a potential trend reversal, either bullish or bearish, after a strong price move. The pattern is called "Island" because the candles that form it are isolated from the surrounding price action, resembling an island on the chart. It consists of: a gap in the direction of the current trend, a period of consolidation or sideways movement, and a second gap in the opposite direction of the first gap.
              </p>
              <p className="text-slate-700">
                <strong>Bullish Island Reversal:</strong> Appears after a downtrend with a gap down, consolidation, then an upward gap with a bullish candle confirming reversal. <strong>Bearish Island Reversal:</strong> Appears after an uptrend with a gap up, consolidation, then a downward gap with a bearish candle confirming reversal. The Island Reversal is considered a strong reversal signal, as the price gaps in both directions indicate that market sentiment has shifted. Traders often wait for confirmation before acting on this pattern.
              </p>
            </div>

            {/* 3. Tri-Star */}
            <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Tri-Star</h3>
              <p className="text-slate-700 mb-3">
                The Tri-Star is a rare and significant candlestick pattern that appears at the end of an established trend, signaling a potential reversal. It consists of three candles: a long bearish or bullish candle indicating the strength of the current trend, a Doji representing indecision and indicating momentum is weakening, and another long bearish or bullish candle moving in the opposite direction of the first candle, confirming the reversal.
              </p>
              <p className="text-slate-700">
                <strong>Bullish Tri-Star:</strong> Occurs after a downtrend (bearish candle → Doji → bullish candle), suggesting a shift from bearish to bullish. <strong>Bearish Tri-Star:</strong> Occurs after an uptrend (bullish candle → Doji → bearish candle), indicating reversal from bullish to bearish. The Tri-Star pattern is rare and considered a strong signal of trend reversal. Traders typically wait for a follow-up candle in the direction of the reversal for confirmation.
              </p>
            </div>

            {/* 4. Marubozu */}
            <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">4. Marubozu</h3>
              <p className="text-slate-700 mb-3">
                The Marubozu is a powerful candlestick pattern characterized by a long body and little to no shadow on either side. It indicates strong momentum and clear market sentiment in one direction. The Marubozu can be either bullish or bearish, depending on the trend.
              </p>
              <p className="text-slate-700">
                <strong>Bullish Marubozu:</strong> Opens at the low and closes at the high, with no significant shadows. Indicates buyers controlled the entire session, driving prices up—a strong signal of upward momentum. <strong>Bearish Marubozu:</strong> Opens at the high and closes at the low, with little to no shadow. Suggests sellers dominated the session and pushed the price down throughout—a strong indication of downward momentum. The Marubozu pattern reflects strong buyer or seller control and can be used to confirm trends or anticipate shifts in market direction. Traders typically look for Marubozu candles at key support or resistance levels.
              </p>
            </div>

            {/* 5. Long-Legged Doji */}
            <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">5. Long-Legged Doji</h3>
              <p className="text-slate-700 mb-3">
                The Long-Legged Doji is a type of Doji candlestick with long upper and lower shadows, indicating significant price movement within the trading session. However, the open and close prices are almost the same, meaning that neither buyers nor sellers gained control over the market during the session. The result is a small body positioned near the center of the candlestick, with long shadows extending both above and below it.
              </p>
              <p className="text-slate-700">
                The Long-Legged Doji suggests indecision in the market. The long shadows represent significant price swings, but the fact that the open and close are close to each other shows that neither side managed to dominate. When this pattern appears at the top of an uptrend or at the bottom of a downtrend, it may signal a potential reversal. However, confirmation from subsequent price action is essential.
              </p>
            </div>

            {/* 6. Stalled Pattern */}
            <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">6. Stalled Pattern</h3>
              <p className="text-slate-700 mb-3">
                The Stalled Pattern is a bearish reversal pattern that appears after an uptrend, signaling that the bullish momentum is slowing down and that a potential reversal to the downside may occur. It typically consists of two candles: a long bullish candle showing strong buying pressure, followed by a smaller candle (either bullish or bearish) that forms near the high of the first candle but does not move much higher.
              </p>
              <p className="text-slate-700">
                This second candle suggests that the buyers' strength is weakening and that selling pressure is starting to build. The Stalled Pattern indicates indecision in the market, as buyers were initially in control but have lost momentum. The pattern is more reliable when it appears at or near a resistance level. Traders often look for confirmation with a subsequent bearish candle before entering short positions.
              </p>
            </div>

            {/* 7. Tweezer Tops and Bottoms */}
            <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">7. Tweezer Tops and Bottoms</h3>
              <p className="text-slate-700 mb-3">
                The Tweezer Tops and Tweezer Bottoms are reversal patterns that occur when two candles have matching highs or lows, signaling potential trend changes. These patterns typically appear at the end of an uptrend (Tweezer Tops) or a downtrend (Tweezer Bottoms).
              </p>
              <p className="text-slate-700">
                <strong>Tweezer Tops:</strong> Occurs after an uptrend. Two candles with matching highs indicate strong resistance—the first candle is bullish, the second bearish, showing sellers are taking control and signaling potential downward reversal. <strong>Tweezer Bottoms:</strong> Occurs after a downtrend. Two candles with matching lows indicate strong support—the first candle is bearish, the second bullish, showing buyers are stepping in and signaling potential upward reversal. Both patterns highlight equilibrium points where price fails to move beyond a certain level, suggesting the trend is losing momentum. Confirmation with subsequent candles is essential.
              </p>
            </div>

            {/* 8. Matching Highs and Lows */}
            <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">8. Matching Highs and Lows</h3>
              <p className="text-slate-700 mb-3">
                The Matching Highs and Lows pattern consists of two candlesticks with identical highs or lows. This pattern is considered a sign of market indecision and often occurs at the top or bottom of a trend, suggesting that the price is unable to move beyond a certain point.
              </p>
              <p className="text-slate-700">
                <strong>Matching Highs:</strong> When two candles have the same high, it shows that sellers are preventing the price from moving higher. Could signal that resistance is strong and the upward trend is losing steam. If at the top of an uptrend, may signal reversal or pause. <strong>Matching Lows:</strong> When two candles have the same low, it indicates buyers are defending the level. Despite attempts to push lower, the market cannot break through. If at the bottom of a downtrend, suggests support is holding and the market may reverse upward. The pattern shows consolidation or indecision. Confirmation with subsequent candles is important.
              </p>
            </div>

            {/* 9. Bullish Harami Cross */}
            <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">9. Bullish Harami Cross</h3>
              <p className="text-slate-700 mb-3">
                The Bullish Harami Cross is a two-candle reversal pattern that occurs during a downtrend, signaling a potential shift in market sentiment from bearish to bullish. The pattern consists of a long bearish candle indicating the downtrend is strong and sellers are in control, followed by a Doji representing indecision in the market. The Doji's body is contained entirely within the body of the first candle, forming a "Harami" pattern.
              </p>
              <p className="text-slate-700">
                The Bullish Harami Cross signals that although the market has been in a downtrend, there is a shift in sentiment as the price struggles to move lower. The appearance of the Doji represents a moment of indecision, and the potential for a reversal becomes more likely. This pattern suggests that selling pressure is waning, and buyers may be starting to take control. Traders often wait for confirmation before entering long positions.
              </p>
            </div>

            {/* 10. Bearish Harami Cross */}
            <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">10. Bearish Harami Cross</h3>
              <p className="text-slate-700 mb-3">
                The Bearish Harami Cross is the opposite of the Bullish Harami Cross and occurs during an uptrend, signaling a potential reversal from bullish to bearish. The pattern consists of a long bullish candle indicating the uptrend is strong and buyers are in control, followed by a Doji indicating indecision. The Doji's body is entirely contained within the body of the first candle, forming the "Harami" pattern.
              </p>
              <p className="text-slate-700">
                The Bearish Harami Cross suggests that despite the prevailing uptrend, market sentiment is beginning to shift. The Doji reflects a battle between buyers and sellers where neither side can establish control. This creates uncertainty, and when it appears at the top of an uptrend, it signals that the bullish momentum is weakening and a reversal to the downside may occur. Traders typically wait for confirmation with a bearish candle following the pattern before entering short positions.
              </p>
            </div>

            {/* 11. Deliberation (Doji or Spinning Top) */}
            <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">11. Deliberation (Doji or Spinning Top)</h3>
              <p className="text-slate-700 mb-3">
                The Deliberation pattern refers to candles like the Doji or Spinning Top, where the market appears to be in a state of indecision. Both patterns are characterized by small bodies and long upper and lower shadows, which indicate that the price moved in both directions during the trading session, but neither the bulls nor the bears were able to gain control.
              </p>
              <p className="text-slate-700">
                <strong>Doji:</strong> Has a very small body with open and close at or near the same level, and long shadows above and below—reflects complete balance between buyers and sellers, with no clear winner in the session. <strong>Spinning Top:</strong> Has a small body with longer shadows, showing similar indecision but with slightly larger body than Doji. Both patterns signal that the market is in uncertainty and a reversal or continuation could be expected. These patterns are more significant when they appear after an established trend, especially at key support or resistance levels. Traders usually wait for a confirming candle.
              </p>
            </div>
          </div>
        </div>

        {/* Practical Trading Guidelines */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 shadow-lg mb-8 text-white">
          <h2 className="text-3xl font-bold mb-6">🎯 Practical Trading Guidelines</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-400 mb-4">✅ Best Practices</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span><strong>Always Wait for Confirmation:</strong> Never trade on the pattern candle itself. Wait for the next candle to confirm direction.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span><strong>Context is King:</strong> Same pattern means different things at support vs resistance, uptrend vs downtrend.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span><strong>Volume Validates:</strong> High volume confirms pattern strength. Low volume = weak, unreliable signal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span><strong>Combine with Levels:</strong> Patterns at key support/resistance levels have highest probability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span><strong>Set Stop Losses:</strong> Always protect capital. Place stops below/above the pattern formation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span><strong>Use Multiple Timeframes:</strong> Confirm patterns on higher timeframes for stronger signals.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-400 mb-4">❌ Common Mistakes</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span><strong>Trading in Isolation:</strong> Don't rely only on candlesticks. Use with RSI, moving averages, trendlines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span><strong>Ignoring the Trend:</strong> Reversal patterns against strong trends often fail. Trend is king.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span><strong>Overtrading:</strong> Not every pattern is a trade. Be selective—only high-probability setups.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span><strong>Skipping Confirmation:</strong> Jumping in without confirmation leads to losses. Patience pays.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span><strong>Low Liquidity Stocks:</strong> Patterns work best on liquid stocks with genuine supply/demand.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span><strong>Forgetting Risk Management:</strong> No pattern is 100% reliable. Always manage risk per trade.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">💡 Pro Tips</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Pattern Reliability</h4>
                <ul className="space-y-1">
                  <li>⭐⭐⭐ Engulfing Patterns</li>
                  <li>⭐⭐⭐ Morning/Evening Star</li>
                  <li>⭐⭐ Hammer/Shooting Star</li>
                  <li>⭐⭐ Doji (context-dependent)</li>
                  <li>⭐ Spinning Top (weaker)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Timeframe Selection</h4>
                <ul className="space-y-1">
                  <li>• Daily charts: Most reliable</li>
                  <li>• 4-hour: Good for swing trading</li>
                  <li>• 1-hour: Day trading setups</li>
                  <li>• &lt;15-min: Too much noise</li>
                  <li>• Weekly: Long-term positions</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Risk Management</h4>
                <ul className="space-y-1">
                  <li>• Risk max 1-2% per trade</li>
                  <li>• Stop loss: Below/above pattern</li>
                  <li>• Target: 2:1 or 3:1 risk/reward</li>
                  <li>• Scale in on confirmation</li>
                  <li>• Trail stops on winners</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-green-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">🎓 Key Takeaways</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <p className="text-lg text-slate-700"><strong>Market Psychology:</strong> Candlesticks reveal the battle between buyers and sellers—every pattern tells a story.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg text-slate-700"><strong>Bullish Reversal Patterns:</strong> 11 patterns (Hammer, Morning Star, Bullish Engulfing) appear after downtrends signaling upward reversals.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg text-slate-700"><strong>Bearish Reversal Patterns:</strong> 10 patterns (Shooting Star, Evening Star, Bearish Engulfing) appear after uptrends signaling downward reversals.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg text-slate-700"><strong>Continuation Patterns:</strong> 10 patterns (Rising/Falling Three Methods, Doji, Windows) indicate the prevailing trend will continue after brief pause.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg text-slate-700"><strong>Special Patterns:</strong> Rare but powerful (Abandoned Baby, Island Reversal, Tri-Star) often indicate major market shifts.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">6️⃣</span>
              <p className="text-lg text-slate-700"><strong>Context is Everything:</strong> Same pattern at support vs resistance, with vs against trend = completely different meanings.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">7️⃣</span>
              <p className="text-lg text-slate-700"><strong>Always Confirm:</strong> Never trade on the pattern candle itself. The next candle validates or invalidates the signal.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">8️⃣</span>
              <p className="text-lg text-slate-700"><strong>Volume is Validator:</strong> High volume on pattern formation significantly increases reliability and probability of success.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">9️⃣</span>
              <p className="text-lg text-slate-700"><strong>Combine Tools:</strong> Use candlesticks with support/resistance, trendlines, indicators (RSI, MACD) for highest-probability setups.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔟</span>
              <p className="text-lg text-slate-700"><strong>Master Over Time:</strong> Study patterns in real charts, paper trade them first, then gradually trade with real capital.</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">🚀 Continue Your Journey</h2>
          <p className="text-lg text-slate-600 mb-6">
            You've mastered all essential candlestick patterns—the foundation of price action analysis. Continue learning advanced trading concepts and strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/learn" className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition text-lg">
              Explore More Courses →
            </Link>
            <Link to="/" className="px-8 py-4 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition text-lg">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
