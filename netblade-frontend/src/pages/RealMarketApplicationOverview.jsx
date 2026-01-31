import { Link } from 'react-router-dom';
import { Target, TrendingUp, Wrench, AlertTriangle, Zap, BookOpen } from 'lucide-react';

export default function RealMarketApplicationOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="text-5xl sm:text-6xl mb-6">⚙️</div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
            Real Market Application
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Apply everything you've learned to real-world scenarios with case studies and live examples. Bridge the gap between theory and execution.
          </p>
        </div>

        {/* Why This Matters Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 p-6 sm:p-8 bg-indigo-500/10 border-2 border-indigo-500/30 rounded-2xl animate-slide-in-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-3">
            <Zap className="w-8 h-8 text-indigo-400" />
            Why This Matters
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
            Theory without practice is useless. This is where everything clicks. You'll see exactly how professionals apply concepts in live markets:
          </p>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold text-xl">•</span>
              <span><strong>See real trades:</strong> Winners, losers, breakeven trades — full transparency with entry/exit reasoning</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold text-xl">•</span>
              <span><strong>Live chart analysis:</strong> Watch how to analyze charts in real-time, not just perfect textbook examples</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold text-xl">•</span>
              <span><strong>Build your strategy:</strong> Take concepts and mold them into a personalized trading system</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold text-xl">•</span>
              <span><strong>Avoid common mistakes:</strong> Learn from others' errors without losing your own money</span>
            </li>
          </ul>
        </div>

        {/* What You'll Learn Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <BookOpen className="w-8 h-8 text-indigo-400" />
            What You'll Cover
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Topic 1 */}
            <div className="bg-slate-800/50 border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Real Trade Breakdowns</h3>
                  <p className="text-slate-400 text-sm">Winners and losers analyzed in detail — why trades worked or failed, what could've been done better.</p>
                </div>
              </div>
            </div>

            {/* Topic 2 */}
            <div className="bg-slate-800/50 border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/50 transition-all">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Chart Analysis on Live Markets</h3>
                  <p className="text-slate-400 text-sm">Walk through current market conditions, identify setups, and make trade decisions in real-time.</p>
                </div>
              </div>
            </div>

            {/* Topic 3 */}
            <div className="bg-slate-800/50 border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Wrench className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Strategy Building</h3>
                  <p className="text-slate-400 text-sm">Combine technical analysis, risk management, and psychology into a complete, backtestable trading system.</p>
                </div>
              </div>
            </div>

            {/* Topic 4 */}
            <div className="bg-slate-800/50 border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/50 transition-all">
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Backtesting & Journaling</h3>
                  <p className="text-slate-400 text-sm">Test strategies on historical data, keep trade journals, and measure performance objectively.</p>
                </div>
              </div>
            </div>

            {/* Topic 5 */}
            <div className="bg-slate-800/50 border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/50 transition-all">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Common Mistakes</h3>
                  <p className="text-slate-400 text-sm">Overtrading, revenge trading, ignoring stops, overleveraging — see these mistakes and how to avoid them.</p>
                </div>
              </div>
            </div>

            {/* Topic 6 */}
            <div className="bg-slate-800/50 border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">From Theory to Execution</h3>
                  <p className="text-slate-400 text-sm">The step-by-step process: analysis → plan → execute → review. Build muscle memory for trading.</p>
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
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-indigo-500/20">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-lg font-bold mb-2">Clarity</h3>
              <p className="text-slate-400 text-sm">Finally understand how to apply concepts to actual trades.</p>
            </div>

            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-indigo-500/20">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-lg font-bold mb-2">Practical Skills</h3>
              <p className="text-slate-400 text-sm">Build your own strategy and execute it with confidence.</p>
            </div>

            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-indigo-500/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-bold mb-2">Faster Learning</h3>
              <p className="text-slate-400 text-sm">Learn from others' mistakes instead of making them yourself.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 sm:p-12 rounded-2xl shadow-2xl animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Apply What You Learn?
          </h2>
          <p className="text-indigo-100 mb-6 sm:mb-8 text-base sm:text-lg">
            Stop consuming theory and start executing. Join now to see how professionals turn knowledge into profitable trades.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-white text-indigo-600 font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-lg hover:bg-slate-100 transition-all text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Sign Up to Learn →
          </Link>
          <p className="text-indigo-200 text-sm mt-4">
            Already have an account? <Link to="/login" className="underline font-semibold hover:text-white">Log in here</Link>
          </p>
        </div>

      </div>
    </div>
  );
}
