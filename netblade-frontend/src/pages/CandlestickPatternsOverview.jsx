import { Link } from 'react-router-dom';
import { Flame, TrendingUp, TrendingDown, Activity, BookOpen, Target } from 'lucide-react';

export default function CandlestickPatternsOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="text-5xl sm:text-6xl mb-6">🕯️</div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
            Candlestick Patterns
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Decode market sentiment and predict reversals using proven Japanese candlestick patterns. Master the visual language of price action.
          </p>
        </div>

        {/* Why This Matters Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 p-6 sm:p-8 bg-blue-500/10 border-2 border-blue-500/30 rounded-2xl animate-slide-in-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-3">
            <Flame className="w-8 h-8 text-blue-400" />
            Why This Matters
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
            Candlesticks reveal what buyers and sellers are thinking at every moment. Master this visual language, and you'll never look at charts the same way:
          </p>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold text-xl">•</span>
              <span><strong>Read market psychology:</strong> See fear, greed, indecision, and conviction directly on the chart</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold text-xl">•</span>
              <span><strong>Predict reversals:</strong> Spot when trends are exhausting before they collapse</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold text-xl">•</span>
              <span><strong>Confirm continuations:</strong> Know when a trend is taking a breather vs. ending completely</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold text-xl">•</span>
              <span><strong>Trade with confidence:</strong> Use proven patterns with defined risk and reward zones</span>
            </li>
          </ul>
        </div>

        {/* What You'll Learn Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <BookOpen className="w-8 h-8 text-blue-400" />
            What You'll Cover
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Topic 1 */}
            <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Bullish Reversal Patterns (11)</h3>
                  <p className="text-slate-400 text-sm">Hammer, Bullish Engulfing, Morning Star, Piercing Pattern, and more — signals that downtrends are ending.</p>
                </div>
              </div>
            </div>

            {/* Topic 2 */}
            <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <div className="flex items-start gap-4">
                <TrendingDown className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Bearish Reversal Patterns (10)</h3>
                  <p className="text-slate-400 text-sm">Shooting Star, Bearish Engulfing, Evening Star, Dark Cloud Cover — signals that uptrends are exhausting.</p>
                </div>
              </div>
            </div>

            {/* Topic 3 */}
            <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Activity className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Continuation Patterns (10)</h3>
                  <p className="text-slate-400 text-sm">Doji, Spinning Top, Rising/Falling Three Methods — signals that trends are pausing, not reversing.</p>
                </div>
              </div>
            </div>

            {/* Topic 4 */}
            <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Special & Advanced (11)</h3>
                  <p className="text-slate-400 text-sm">Abandoned Baby, Island Reversal, Tri-Star, Marubozu — rare but powerful high-conviction setups.</p>
                </div>
              </div>
            </div>

            {/* Topic 5 */}
            <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Real Trading Examples</h3>
                  <p className="text-slate-400 text-sm">See each pattern in action with entry, stop-loss, target, and risk:reward calculations on real charts.</p>
                </div>
              </div>
            </div>

            {/* Topic 6 */}
            <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Flame className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Pattern Reliability & Confirmation</h3>
                  <p className="text-slate-400 text-sm">Learn when to trust patterns, when to wait for confirmation, and how to avoid false signals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            How This Helps You
          </h2>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-blue-500/20">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-lg font-bold mb-2">Visual Mastery</h3>
              <p className="text-slate-400 text-sm">Spot patterns instantly without second-guessing yourself.</p>
            </div>

            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-blue-500/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold mb-2">High Win Rate</h3>
              <p className="text-slate-400 text-sm">Trade proven setups with statistical edges and historical reliability.</p>
            </div>

            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-blue-500/20">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-bold mb-2">Defined Risk</h3>
              <p className="text-slate-400 text-sm">Every pattern has clear entry, stop-loss, and target levels.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-blue-600 to-blue-700 p-8 sm:p-12 rounded-2xl shadow-2xl animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Decode Price Action?
          </h2>
          <p className="text-blue-100 mb-6 sm:mb-8 text-base sm:text-lg">
            Master 42+ candlestick patterns and start reading market psychology like a professional trader. Sign up now to access the complete course.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-white text-blue-600 font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-lg hover:bg-slate-100 transition-all text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Sign Up to Learn →
          </Link>
          <p className="text-blue-200 text-sm mt-4">
            Already have an account? <Link to="/login" className="underline font-semibold hover:text-white">Log in here</Link>
          </p>
        </div>

      </div>
    </div>
  );
}
