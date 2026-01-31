import { Link } from "react-router-dom";

export default function CandlestickPatterns() {
  return (
    <div className="w-full">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-900 to-slate-800 pt-20 pb-24 animate-fade-in">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-8">🕯️</div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Candlestick Patterns
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Decode the language of price action. Learn to read candlestick formations that reveal 
              market psychology, turning points, and high-probability trade setups.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CANDLESTICKS MATTER */}
      <section className="bg-white py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              Why Candlestick Patterns Matter
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Candlestick charts aren't just pretty visuals—they're a window into <span className="font-semibold text-blue-600">market psychology</span>. 
              Each candle tells a story about the battle between buyers and sellers during that time period.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              When you understand candlestick patterns, you can identify:
            </p>
            <ul className="space-y-3 text-lg text-slate-700 pl-6">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><strong>Trend reversals</strong> before they fully develop</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><strong>Continuation signals</strong> that confirm the current trend</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><strong>Indecision</strong> zones where momentum is weak</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><strong>Strength or weakness</strong> in price movements</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="bg-slate-50 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Patterns You'll Master
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            
            {/* Single Candle Patterns */}
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">1️⃣</span>
                Single Candle Patterns
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Powerful standalone candles that signal important market sentiment shifts.
              </p>
              <div className="grid md:grid-cols-2 gap-4 pl-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Hammer & Inverted Hammer</h4>
                  <p className="text-sm text-slate-600">Bullish reversal signals after downtrends</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Shooting Star & Hanging Man</h4>
                  <p className="text-sm text-slate-600">Bearish reversal signals after uptrends</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Doji & Long-Legged Doji</h4>
                  <p className="text-sm text-slate-600">Indecision patterns at key levels</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Marubozu</h4>
                  <p className="text-sm text-slate-600">Strong directional momentum signals</p>
                </div>
              </div>
            </div>

            {/* Double Candle Patterns */}
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">2️⃣</span>
                Double Candle Patterns
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Two-candle formations that provide stronger confirmation of market direction.
              </p>
              <div className="grid md:grid-cols-2 gap-4 pl-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Bullish & Bearish Engulfing</h4>
                  <p className="text-sm text-slate-600">Strong reversal patterns with full body overlap</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Piercing Line & Dark Cloud Cover</h4>
                  <p className="text-sm text-slate-600">Reversal patterns with partial overlap</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Tweezer Tops & Bottoms</h4>
                  <p className="text-sm text-slate-600">Support/resistance test patterns</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Inside & Outside Bars</h4>
                  <p className="text-sm text-slate-600">Consolidation and breakout signals</p>
                </div>
              </div>
            </div>

            {/* Multi-Candle Patterns */}
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-teal-600">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">3️⃣</span>
                Multi-Candle Patterns
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Complex formations that reveal evolving market psychology and trend changes.
              </p>
              <div className="grid md:grid-cols-2 gap-4 pl-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Morning Star & Evening Star</h4>
                  <p className="text-sm text-slate-600">Three-candle reversal patterns with gap</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Three White Soldiers & Three Black Crows</h4>
                  <p className="text-sm text-slate-600">Strong trend continuation/reversal signals</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Rising & Falling Three Methods</h4>
                  <p className="text-sm text-slate-600">Continuation patterns within trends</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Abandoned Baby</h4>
                  <p className="text-sm text-slate-600">Rare but powerful reversal pattern</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTEXT MATTERS */}
      <section className="bg-white py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Context Is Everything
            </h2>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border-l-4 border-orange-500 mb-8">
              <p className="text-lg text-slate-800 leading-relaxed mb-4 font-semibold">
                ⚠️ A candlestick pattern alone means nothing.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                The same pattern can signal a reversal in one context and continuation in another. You must consider:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Location
                </h4>
                <p className="text-slate-600 text-sm">Is the pattern at support, resistance, or in the middle of nowhere?</p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Volume
                </h4>
                <p className="text-slate-600 text-sm">Is it backed by strong volume or weak participation?</p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                  Trend
                </h4>
                <p className="text-slate-600 text-sm">Are you trading with the trend or against it?</p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Timeframe
                </h4>
                <p className="text-slate-600 text-sm">Does the pattern appear on daily, hourly, or 5-minute charts?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Master the Language of Charts
          </h2>
          <p className="text-xl text-blue-50 max-w-2xl mx-auto mb-10">
            Join thousands of traders who learned to read candlestick patterns with confidence through Netblade's structured courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-blue-600 font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Learning Free
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link to="/learn" className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-white font-semibold hover:bg-white/10 transition-all duration-300">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
