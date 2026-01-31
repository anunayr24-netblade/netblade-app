import { Link } from 'react-router-dom';

export default function IndicatorsOscillators() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link to="/technical-analysis" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4">
            ← Back to Technical Analysis
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">📊</span>
            <h1 className="text-4xl font-bold text-slate-900">Technical Indicators & Oscillators</h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            Indicators are mathematical calculations based on price, volume, or open interest that help traders confirm trends, identify reversals, and time entries/exits. They transform raw data into actionable insights.
          </p>
          
          {/* Hero Visual */}
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">📉📊🎯</div>
              <p className="text-lg font-semibold text-slate-700">Mathematical Edge in Market Analysis</p>
              <p className="text-sm text-slate-600 mt-2">From Moving Averages to RSI: Your Trading Toolkit</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Understanding Indicators</h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Technical indicators don't predict the future—they interpret the present and recent past. They help answer critical questions: Is this trend strong? Is it losing momentum? Are we overbought or oversold? When used correctly, they significantly improve trading accuracy.
            </p>
            
            <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Two Main Types</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-blue-700 mb-3">1. Leading Indicators (Oscillators)</h4>
                  <p className="text-sm text-slate-700 mb-4">
                    Attempt to predict future price movements by identifying overbought/oversold conditions before reversals occur.
                  </p>
                  <div className="bg-slate-50 rounded p-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Examples:</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• RSI (Relative Strength Index)</li>
                      <li>• Stochastic Oscillator</li>
                      <li>• Williams %R</li>
                      <li>• CCI (Commodity Channel Index)</li>
                    </ul>
                    <p className="text-xs text-slate-600 mt-3 italic">
                      <strong>Advantage:</strong> Catches reversals early<br/>
                      <strong>Disadvantage:</strong> Gives false signals in strong trends
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-green-700 mb-3">2. Lagging Indicators (Trend-Following)</h4>
                  <p className="text-sm text-slate-700 mb-4">
                    Confirm what has already happened. They smooth out price action to identify and confirm trends.
                  </p>
                  <div className="bg-slate-50 rounded p-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Examples:</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Moving Averages (SMA, EMA)</li>
                      <li>• MACD (Moving Average Convergence Divergence)</li>
                      <li>• Bollinger Bands</li>
                      <li>• Parabolic SAR</li>
                    </ul>
                    <p className="text-xs text-slate-600 mt-3 italic">
                      <strong>Advantage:</strong> Reliable, fewer false signals<br/>
                      <strong>Disadvantage:</strong> Late entries, gives back profit in reversals
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
              <p className="text-sm text-slate-700">
                <strong>⚠️ Golden Rule:</strong> Never use indicators in isolation. Price action is king—indicators are servants. Always combine 2-3 indicators from different categories (trend + momentum + volume) for confirmation.
              </p>
            </div>
          </div>
        </div>

        {/* Moving Averages */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Moving Averages (MA) - The Foundation</h2>
          <p className="text-lg text-slate-700 mb-6">
            Moving averages smooth out price data by creating a constantly updated average price. They're the most widely used indicator because they're simple, versatile, and effective.
          </p>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Simple Moving Average (SMA)</h3>
                <p className="text-sm text-slate-700 mb-4">
                  Arithmetic average of prices over N periods. All data points equally weighted.
                </p>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="text-xs font-semibold text-slate-900 mb-2">Formula:</p>
                  <p className="text-sm font-mono text-slate-700 mb-3">
                    SMA = (P₁ + P₂ + P₃ + ... + Pₙ) / N
                  </p>
                  <p className="text-xs text-slate-600 italic">
                    Example: 10-day SMA = Sum of last 10 closes ÷ 10
                  </p>
                </div>
                <div className="bg-slate-100 rounded p-4">
                  <p className="text-xs font-semibold mb-2">Advantages:</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Simple, easy to understand</li>
                    <li>• Smooth, reduces noise</li>
                    <li>• Reliable for long-term trends</li>
                  </ul>
                  <p className="text-xs font-semibold mt-3 mb-2">Disadvantages:</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Slow to react to price changes</li>
                    <li>• All data points equal weight</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Exponential Moving Average (EMA)</h3>
                <p className="text-sm text-slate-700 mb-4">
                  Gives more weight to recent prices. More responsive to new information than SMA.
                </p>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="text-xs font-semibold text-slate-900 mb-2">Formula:</p>
                  <p className="text-sm font-mono text-slate-700 mb-3">
                    EMA = (Close × K) + (EMA(prev) × (1 - K))<br/>
                    K = 2 / (N + 1)
                  </p>
                  <p className="text-xs text-slate-600 italic">
                    Recent prices have higher weight
                  </p>
                </div>
                <div className="bg-slate-100 rounded p-4">
                  <p className="text-xs font-semibold mb-2">Advantages:</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Faster response to price changes</li>
                    <li>• Better for short-term trading</li>
                    <li>• Preferred by most traders</li>
                  </ul>
                  <p className="text-xs font-semibold mt-3 mb-2">Disadvantages:</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• More sensitive = more false signals</li>
                    <li>• Complex calculation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Common MA Periods & Uses</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="p-3 text-left">Period</th>
                      <th className="p-3 text-left">Timeframe</th>
                      <th className="p-3 text-left">Trading Style</th>
                      <th className="p-3 text-left">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-b">
                      <td className="p-3 font-semibold">9 / 20 EMA</td>
                      <td className="p-3">Short-term</td>
                      <td className="p-3">Intraday/Scalping</td>
                      <td className="p-3">Quick trend, entry timing</td>
                    </tr>
                    <tr className="border-b bg-slate-50">
                      <td className="p-3 font-semibold">50 SMA/EMA</td>
                      <td className="p-3">Medium-term</td>
                      <td className="p-3">Swing Trading</td>
                      <td className="p-3">Primary trend, support/resistance</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">200 SMA/EMA</td>
                      <td className="p-3">Long-term</td>
                      <td className="p-3">Position Trading</td>
                      <td className="p-3">Major trend, bull/bear divider</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3 font-semibold">Multiple MAs</td>
                      <td className="p-3">All timeframes</td>
                      <td className="p-3">All styles</td>
                      <td className="p-3">Crossover signals, dynamic S/R</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-4">Trading Strategies with Moving Averages</h4>
              <div className="space-y-4">
                <div className="bg-slate-50 rounded p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">1. Golden Cross / Death Cross</h5>
                  <p className="text-sm text-slate-700 mb-3">
                    <strong className="text-green-600">Golden Cross:</strong> 50 MA crosses above 200 MA → Strong bullish signal (major uptrend starting)<br/>
                    <strong className="text-red-600">Death Cross:</strong> 50 MA crosses below 200 MA → Strong bearish signal (major downtrend starting)
                  </p>
                  <p className="text-xs text-slate-600 italic">Used by institutional investors for long-term positioning.</p>
                </div>

                <div className="bg-slate-50 rounded p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">2. Price & MA Relationship</h5>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• <strong>Price above MA:</strong> Bullish trend. Buy pullbacks to MA.</li>
                    <li>• <strong>Price below MA:</strong> Bearish trend. Sell rallies to MA.</li>
                    <li>• <strong>Price crosses MA:</strong> Potential trend change. Wait for confirmation.</li>
                    <li>• <strong>MA acts as support:</strong> Multiple bounces confirm strong uptrend.</li>
                    <li>• <strong>MA acts as resistance:</strong> Multiple rejections confirm strong downtrend.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">3. Multiple MA System (3-MA Setup)</h5>
                  <p className="text-sm text-slate-700 mb-3">
                    Use three MAs: 9 EMA (fast), 21 EMA (medium), 50 EMA (slow)
                  </p>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• <strong>Strong Uptrend:</strong> 9 &gt; 21 &gt; 50, all sloping up, price above all</li>
                    <li>• <strong>Strong Downtrend:</strong> 9 &lt; 21 &lt; 50, all sloping down, price below all</li>
                    <li>• <strong>Buy Signal:</strong> Price pullback to 21 EMA, 9 crosses back above 21</li>
                    <li>• <strong>Sell Signal:</strong> Price rally to 21 EMA, 9 crosses back below 21</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RSI */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">2. RSI (Relative Strength Index) - Momentum Oscillator</h2>
          <p className="text-lg text-slate-700 mb-6">
            RSI measures the speed and magnitude of recent price changes to identify overbought and oversold conditions. Ranges from 0 to 100. Most popular oscillator worldwide.
          </p>

          <div className="space-y-6">
            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">How RSI Works</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Formula:</p>
                    <p className="text-sm font-mono text-slate-700 mb-3">
                      RSI = 100 - [100 / (1 + RS)]<br/>
                      RS = Average Gain / Average Loss<br/>
                      (over 14 periods - default)
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Standard Interpretation:</p>
                    <ul className="text-sm text-slate-700 space-y-2">
                      <li>• <strong className="text-red-600">RSI &gt; 70:</strong> Overbought (potential sell)</li>
                      <li>• <strong className="text-slate-600">RSI 30-70:</strong> Neutral zone</li>
                      <li>• <strong className="text-green-600">RSI &lt; 30:</strong> Oversold (potential buy)</li>
                      <li>• <strong className="text-blue-600">RSI = 50:</strong> Equilibrium (no advantage)</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <p className="text-xs font-semibold mb-3">Visual Example:</p>
                  <div className="font-mono text-xs">
                    <pre className="text-slate-600">{`RSI Chart:
100 ├─────●────  Overbought zone
 80 │    ╱ ↘
 70 ├───●───●─  Overbought threshold
 60 │  ╱     ╲
 50 ├─●───────●  Neutral line
 40 │          ╲
 30 ├───────────●  Oversold threshold
 20 │            ╲
  0 ├─────────────●  Oversold zone

When RSI hits extremes + divergence
= High-probability reversal setup`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-4">RSI Trading Strategies</h4>
              <div className="space-y-4">
                <div className="bg-slate-50 rounded p-4">
                  <h5 className="font-semibold text-green-700 mb-2">1. Overbought/Oversold (Range-Bound Markets)</h5>
                  <p className="text-sm text-slate-700 mb-3">
                    Works best when price is ranging (no strong trend).
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• <strong>Buy:</strong> When RSI &lt; 30, wait for it to cross back above 30 (shows oversold condition ending)</li>
                    <li>• <strong>Sell:</strong> When RSI &gt; 70, wait for it to cross back below 70 (shows overbought condition ending)</li>
                    <li>• <strong>Stop Loss:</strong> Below recent swing low (buy) or above recent swing high (sell)</li>
                  </ul>
                  <p className="text-xs text-slate-600 mt-3 italic bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                    <strong>Warning:</strong> In strong trends, RSI can stay overbought/oversold for extended periods. Don't fight the trend!
                  </p>
                </div>

                <div className="bg-slate-50 rounded p-4">
                  <h5 className="font-semibold text-blue-700 mb-2">2. RSI Divergence (Most Powerful Signal)</h5>
                  <p className="text-sm text-slate-700 mb-3">
                    When price and RSI move in opposite directions—warns of trend weakness and potential reversal.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded p-3">
                      <p className="text-xs font-semibold text-green-700 mb-2">Bullish Divergence:</p>
                      <p className="text-xs text-slate-600 mb-2">
                        Price makes lower low, RSI makes higher low → Selling pressure weakening, reversal likely.
                      </p>
                      <div className="font-mono text-xs bg-slate-50 p-2 rounded">
                        <pre className="text-slate-600">{`Price:  ●   ●
         ↘ ↗ ↘
          ●   ●  Lower Low

RSI:       ●
          ↗ ↘ ↗
         ●   ●  Higher Low

Divergence = Buy Signal!`}</pre>
                      </div>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="text-xs font-semibold text-red-700 mb-2">Bearish Divergence:</p>
                      <p className="text-xs text-slate-600 mb-2">
                        Price makes higher high, RSI makes lower high → Buying pressure weakening, reversal likely.
                      </p>
                      <div className="font-mono text-xs bg-slate-50 p-2 rounded">
                        <pre className="text-slate-600">{`Price:  ●     ●  Higher High
         ↗ ↘   ↗
        ●   ●

RSI:    ●        Lower High
         ↗ ↘   ↗
            ● ●

Divergence = Sell Signal!`}</pre>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded p-4">
                  <h5 className="font-semibold text-purple-700 mb-2">3. RSI Trendline Breaks</h5>
                  <p className="text-sm text-slate-700 mb-2">
                    Draw trendlines on RSI itself (connect RSI highs or lows). When RSI breaks its trendline, price often follows.
                  </p>
                  <p className="text-xs text-slate-600 italic">
                    Example: RSI in downtrend (lower highs). When RSI breaks above its descending trendline, it often signals price reversal to upside.
                  </p>
                </div>

                <div className="bg-slate-50 rounded p-4">
                  <h5 className="font-semibold text-orange-700 mb-2">4. RSI as Trend Confirmation (Trending Markets)</h5>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• <strong>Uptrend:</strong> RSI stays mostly above 40, rarely below 30. Buy when RSI dips to 40-50.</li>
                    <li>• <strong>Downtrend:</strong> RSI stays mostly below 60, rarely above 70. Sell when RSI rallies to 50-60.</li>
                    <li>• <strong>Adjust levels in trends:</strong> In bull market, "oversold" might be 40, not 30. In bear market, "overbought" might be 60, not 70.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MACD */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">3. MACD - Trend & Momentum Combined</h2>
          <p className="text-lg text-slate-700 mb-6">
            MACD (Moving Average Convergence Divergence) shows the relationship between two moving averages. It's both a trend-following and momentum indicator, making it incredibly versatile.
          </p>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">MACD Components</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Calculation:</p>
                    <ul className="text-sm text-slate-700 space-y-2">
                      <li>• <strong>MACD Line:</strong> 12 EMA - 26 EMA</li>
                      <li>• <strong>Signal Line:</strong> 9 EMA of MACD Line</li>
                      <li>• <strong>Histogram:</strong> MACD Line - Signal Line</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">What Each Component Shows:</p>
                    <ul className="text-xs text-slate-600 space-y-2">
                      <li>• <strong>MACD Line:</strong> Momentum (difference between fast & slow MA)</li>
                      <li>• <strong>Signal Line:</strong> Trigger for buy/sell signals</li>
                      <li>• <strong>Histogram:</strong> Distance between MACD & Signal (momentum strength)</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <p className="text-xs font-semibold mb-3">Visual Structure:</p>
                  <div className="font-mono text-xs">
                    <pre className="text-slate-600">{`       Price Chart
₹1100  ────●────
              ↗
₹1050  ●──●

      MACD Panel
  2.0  ●─────  MACD Line (blue)
       ╱╲
  0.0 ●──●────  Zero Line
   ╱    ╲
 -2.0    ●─────  Signal Line (red)

      Bars = Histogram
      (MACD - Signal)
       ▂▄█▇▅▂
      ─────────  Zero Line`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-green-200">
              <h4 className="font-semibold text-green-700 mb-4">MACD Trading Signals</h4>
              <div className="space-y-4">
                <div className="bg-slate-50 rounded p-4">
                  <h5 className="font-semibold text-green-700 mb-2">1. MACD Crossovers (Primary Signal)</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded p-3">
                      <p className="text-xs font-semibold text-green-600 mb-2">Bullish Crossover (Buy Signal):</p>
                      <p className="text-xs text-slate-700 mb-2">
                        MACD line crosses above Signal line → Momentum shifting bullish
                      </p>
                      <p className="text-xs text-slate-600 italic">
                        Best when crossover happens below zero line (means you're catching early uptrend from oversold).
                      </p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="text-xs font-semibold text-red-600 mb-2">Bearish Crossover (Sell Signal):</p>
                      <p className="text-xs text-slate-700 mb-2">
                        MACD line crosses below Signal line → Momentum shifting bearish
                      </p>
                      <p className="text-xs text-slate-600 italic">
                        Best when crossover happens above zero line (means you're catching early downtrend from overbought).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded p-4">
                  <h5 className="font-semibold text-blue-700 mb-2">2. Zero Line Crossovers (Trend Confirmation)</h5>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• <strong>MACD crosses above 0:</strong> Confirms uptrend (12 EMA &gt; 26 EMA). Strong bull signal.</li>
                    <li>• <strong>MACD crosses below 0:</strong> Confirms downtrend (12 EMA &lt; 26 EMA). Strong bear signal.</li>
                    <li>• <strong>Above zero:</strong> Bulls in control. Buy dips.</li>
                    <li>• <strong>Below zero:</strong> Bears in control. Sell rallies.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded p-4">
                  <h5 className="font-semibold text-purple-700 mb-2">3. MACD Divergence (Reversal Warning)</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded p-3">
                      <p className="text-xs font-semibold text-green-600 mb-2">Bullish Divergence:</p>
                      <p className="text-xs text-slate-700">
                        Price: Lower lows<br/>
                        MACD: Higher lows<br/>
                        → Downtrend losing steam, reversal likely
                      </p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="text-xs font-semibold text-red-600 mb-2">Bearish Divergence:</p>
                      <p className="text-xs text-slate-700">
                        Price: Higher highs<br/>
                        MACD: Lower highs<br/>
                        → Uptrend losing steam, reversal likely
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded p-4">
                  <h5 className="font-semibold text-orange-700 mb-2">4. Histogram Analysis (Momentum Strength)</h5>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li>• <strong>Growing histogram (bars getting taller):</strong> Momentum accelerating in that direction</li>
                    <li>• <strong>Shrinking histogram (bars getting shorter):</strong> Momentum decelerating, potential reversal coming</li>
                    <li>• <strong>Histogram crosses zero:</strong> Same as MACD/Signal crossover</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bollinger Bands */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Bollinger Bands - Volatility Indicator</h2>
          <p className="text-lg text-slate-700 mb-6">
            Bollinger Bands consist of a moving average with upper and lower bands based on standard deviation. They expand during high volatility and contract during low volatility, helping identify overbought/oversold levels and potential breakouts.
          </p>

          <div className="space-y-6">
            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">How Bollinger Bands Work</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Calculation:</p>
                    <ul className="text-sm text-slate-700 space-y-2">
                      <li>• <strong>Middle Band:</strong> 20-period SMA</li>
                      <li>• <strong>Upper Band:</strong> Middle Band + (2 × Std Dev)</li>
                      <li>• <strong>Lower Band:</strong> Middle Band - (2 × Std Dev)</li>
                    </ul>
                    <p className="text-xs text-slate-600 mt-3 italic">
                      95% of price action occurs within the bands (statistically).
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-xs font-semibold text-slate-900 mb-2">Band Width Meaning:</p>
                    <ul className="text-xs text-slate-600 space-y-2">
                      <li>• <strong>Wide bands:</strong> High volatility, big price swings</li>
                      <li>• <strong>Narrow bands:</strong> Low volatility, consolidation (squeeze)</li>
                      <li>• <strong>Squeeze → Expansion:</strong> Breakout imminent</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-lg p-4">
                  <p className="text-xs font-semibold mb-3">Visual Example:</p>
                  <div className="font-mono text-xs">
                    <pre className="text-slate-600">{`Price touches upper band
         ●───●  Upper Band (Overbought)
        ╱ ╲ ╱
       ●───●  Middle Band (20 SMA)
      ╱     ╲
     ●───────●  Lower Band (Oversold)
    Price touches lower band

Bands expand during volatility
Bands contract during consolidation

The Squeeze:
═══●═══  Narrow bands
    ↓    (Low volatility)
───●───  Breakout!
  ╱   ╲  (Volatility returns)`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
              <h4 className="font-semibold text-blue-700 mb-4">Bollinger Band Strategies</h4>
              <div className="space-y-4">
                <div className="bg-slate-50 rounded p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">1. Bollinger Bounce (Range Trading)</h5>
                  <p className="text-sm text-slate-700 mb-3">
                    Price tends to return to the middle band after touching upper or lower band.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• <strong>Buy Signal:</strong> Price touches lower band + bullish candlestick (e.g., hammer). Target: middle band.</li>
                    <li>• <strong>Sell Signal:</strong> Price touches upper band + bearish candlestick (e.g., shooting star). Target: middle band.</li>
                    <li>• <strong>Best in:</strong> Sideways/ranging markets. Stop loss just outside the band.</li>
                  </ul>
                  <p className="text-xs text-slate-600 mt-3 italic bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                    <strong>Warning:</strong> Don't use in strong trends! In trends, price can "walk the band" for extended periods.
                  </p>
                </div>

                <div className="bg-slate-50 rounded p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">2. Bollinger Squeeze (Breakout Trading)</h5>
                  <p className="text-sm text-slate-700 mb-3">
                    When bands narrow significantly (squeeze), it signals low volatility. A large move is coming—you just don't know which direction yet.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• <strong>Setup:</strong> Identify squeeze (bands very narrow, histogram low on BB Width indicator)</li>
                    <li>• <strong>Entry:</strong> Wait for breakout (price closes outside band with volume)</li>
                    <li>• <strong>Direction:</strong> Trade in direction of breakout (above upper = buy, below lower = sell)</li>
                    <li>• <strong>Stop:</strong> Opposite band or below/above breakout candle</li>
                  </ul>
                  <p className="text-xs text-slate-600 mt-2 italic">
                    High-probability setup. Tight squeeze → explosive move. Professional traders love this.
                  </p>
                </div>

                <div className="bg-slate-50 rounded p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">3. Walking the Band (Strong Trend)</h5>
                  <p className="text-sm text-slate-700 mb-3">
                    In strong trends, price can hug one band for extended periods without reverting to middle.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• <strong>Uptrend:</strong> Price stays near upper band. Don't short! Buy pullbacks to middle band.</li>
                    <li>• <strong>Downtrend:</strong> Price stays near lower band. Don't buy! Sell rallies to middle band.</li>
                    <li>• <strong>Signal strength:</strong> Multiple closes outside band = very strong trend.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Indicators Quick Reference */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">5. Additional Key Indicators</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Stochastic Oscillator</h3>
              <p className="text-sm text-slate-700 mb-4">
                Compares closing price to price range over N periods. Ranges 0-100. Similar to RSI but more sensitive.
              </p>
              <div className="bg-white rounded p-4 mb-3">
                <p className="text-xs font-semibold mb-2">Settings:</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Default: 14, 3, 3 (K, D, smoothing)</li>
                  <li>• Overbought: &gt; 80</li>
                  <li>• Oversold: &lt; 20</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded p-3">
                <p className="text-xs font-semibold mb-2">Trading:</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Buy: %K crosses above %D below 20</li>
                  <li>• Sell: %K crosses below %D above 80</li>
                  <li>• Divergence: Price vs Stochastic mismatch</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">VWAP (Volume Weighted Average Price)</h3>
              <p className="text-sm text-slate-700 mb-4">
                Intraday indicator showing average price weighted by volume. Resets daily. Used by institutions for execution.
              </p>
              <div className="bg-white rounded p-4 mb-3">
                <p className="text-xs font-semibold mb-2">Key Levels:</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Price above VWAP = Bullish (buyers winning)</li>
                  <li>• Price below VWAP = Bearish (sellers winning)</li>
                  <li>• VWAP acts as dynamic S/R</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded p-3">
                <p className="text-xs font-semibold mb-2">Trading:</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Buy: Pullback to VWAP in uptrend</li>
                  <li>• Sell: Rally to VWAP in downtrend</li>
                  <li>• Institutions fill orders near VWAP</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">ATR (Average True Range)</h3>
              <p className="text-sm text-slate-700 mb-4">
                Measures market volatility. Doesn't show direction—only how much price is moving. Essential for position sizing.
              </p>
              <div className="bg-white rounded p-4 mb-3">
                <p className="text-xs font-semibold mb-2">What It Shows:</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• High ATR = High volatility (big swings)</li>
                  <li>• Low ATR = Low volatility (small moves)</li>
                  <li>• Expanding ATR = Volatility increasing</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded p-3">
                <p className="text-xs font-semibold mb-2">Uses:</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Stop loss placement (e.g., 2× ATR)</li>
                  <li>• Position sizing (risk per ATR)</li>
                  <li>• Target setting (3× ATR profit)</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-xl font-semibold text-red-900 mb-4">ADX (Average Directional Index)</h3>
              <p className="text-sm text-slate-700 mb-4">
                Measures trend strength (not direction). Ranges 0-100. Helps decide whether to use trend or range strategy.
              </p>
              <div className="bg-white rounded p-4 mb-3">
                <p className="text-xs font-semibold mb-2">Readings:</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• ADX &lt; 20: Weak/no trend (range strategy)</li>
                  <li>• ADX 20-40: Moderate trend (emerging)</li>
                  <li>• ADX &gt; 40: Strong trend (trend strategy)</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded p-3">
                <p className="text-xs font-semibold mb-2">Trading:</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Use trend indicators when ADX &gt; 25</li>
                  <li>• Use oscillators when ADX &lt; 20</li>
                  <li>• ADX rising = Trend strengthening</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Combining Indicators */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-orange-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Combining Indicators: Multi-Confirmation Strategy</h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-700">
              Professional traders never rely on one indicator. The best approach combines indicators from different categories to filter false signals and confirm high-probability setups.
            </p>

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">The 3-Confirmation System</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">1. Trend Confirmation (Lagging)</h4>
                  <p className="text-sm text-slate-700 mb-2">Use: MA, MACD, ADX</p>
                  <p className="text-xs text-slate-600">
                    <strong>Example:</strong> Price above 50 EMA + MACD above zero + ADX &gt; 25 = Confirmed uptrend
                  </p>
                </div>
                <div className="bg-green-50 rounded p-4">
                  <h4 className="font-semibold text-green-700 mb-2">2. Momentum Confirmation (Leading)</h4>
                  <p className="text-sm text-slate-700 mb-2">Use: RSI, Stochastic</p>
                  <p className="text-xs text-slate-600">
                    <strong>Example:</strong> RSI oversold (&lt;30) + Stochastic bullish crossover = Reversal likely
                  </p>
                </div>
                <div className="bg-purple-50 rounded p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">3. Volume/Volatility Confirmation</h4>
                  <p className="text-sm text-slate-700 mb-2">Use: Volume, VWAP, Bollinger Bands</p>
                  <p className="text-xs text-slate-600">
                    <strong>Example:</strong> Breakout above resistance + Volume surge + Bollinger squeeze = High-probability move
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h4 className="font-semibold text-orange-700 mb-4">Sample Trade Setup (All Confirmations)</h4>
              <div className="bg-slate-50 rounded p-4">
                <p className="text-sm font-semibold text-slate-900 mb-3">Buy Signal Example:</p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>✅ <strong>Trend:</strong> Price above 50 EMA (uptrend confirmed)</li>
                  <li>✅ <strong>Pattern:</strong> Bullish flag breakout (continuation pattern)</li>
                  <li>✅ <strong>RSI:</strong> RSI &gt; 50 (momentum bullish)</li>
                  <li>✅ <strong>MACD:</strong> MACD line above Signal line (bullish crossover)</li>
                  <li>✅ <strong>Volume:</strong> Breakout volume 50%+ above average</li>
                </ul>
                <p className="text-sm text-green-700 font-semibold mt-4">
                  → All 5 confirmations = Enter long. Stop below flag low. Target: previous resistance.
                </p>
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
              <p className="text-lg"><strong>Moving Averages</strong> identify trends and dynamic support/resistance. 50 & 200 MAs are most important.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg"><strong>RSI</strong> shows overbought/oversold. Divergence is its most powerful signal (warns of reversals).</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg"><strong>MACD</strong> combines trend + momentum. Crossovers and divergence are primary signals.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg"><strong>Bollinger Bands</strong> measure volatility. Squeeze → breakout setups are high-probability trades.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg"><strong>Combine 3+ indicators</strong> from different categories for confirmation. Never trade on one indicator alone.</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Decode Volume?</h2>
          <p className="text-slate-600 mb-6">
            Indicators analyze price and momentum, but volume reveals the truth behind the moves. Let's master volume analysis next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/technical-analysis/volume-analysis" className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition">
              Next: Volume Analysis →
            </Link>
            <Link to="/technical-analysis" className="px-8 py-3 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition">
              Back to Course Overview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
