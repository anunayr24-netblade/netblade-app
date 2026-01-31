import { Link } from 'react-router-dom';
import { TrendingUp, BarChart3, Activity, Target, Clock, BookOpen } from 'lucide-react';

export default function TechnicalAnalysisOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="text-5xl sm:text-6xl mb-6">📊</div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
            Technical Analysis
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Read charts like a professional and identify high-probability trading opportunities using proven technical analysis methods.
          </p>
        </div>

        {/* Why This Matters Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 p-6 sm:p-8 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-2xl animate-slide-in-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-3">
            <Target className="w-8 h-8 text-cyan-400" />
            Why This Matters
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
            Technical analysis helps you spot trends, time entries, and avoid emotional decisions based solely on news or gut feelings. It gives you:
          </p>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold text-xl">•</span>
              <span><strong>Visual clarity:</strong> See exactly where price is going and where it's been rejected historically</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold text-xl">•</span>
              <span><strong>Entry/exit precision:</strong> Time trades with accuracy instead of guessing when to buy or sell</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold text-xl">•</span>
              <span><strong>Trend confirmation:</strong> Know if a move is genuine or just noise using volume and indicators</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold text-xl">•</span>
              <span><strong>Risk control:</strong> Place stop-losses at logical levels, not arbitrary prices</span>
            </li>
          </ul>
        </div>

        {/* What You'll Learn Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <BookOpen className="w-8 h-8 text-cyan-400" />
            What You'll Cover
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Topic 1 */}
            <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Chart Patterns & Trends</h3>
                  <p className="text-slate-400 text-sm">Head & Shoulders, double tops/bottoms, triangles, flags, wedges — and how to identify trend direction.</p>
                </div>
              </div>
            </div>

            {/* Topic 2 */}
            <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Support & Resistance</h3>
                  <p className="text-slate-400 text-sm">Identify key price levels where buyers and sellers battle, and how to trade breakouts and reversals.</p>
                </div>
              </div>
            </div>

            {/* Topic 3 */}
            <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Activity className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Moving Averages</h3>
                  <p className="text-slate-400 text-sm">Simple (SMA), Exponential (EMA), and weighted MAs — how to use them for trend identification and entries.</p>
                </div>
              </div>
            </div>

            {/* Topic 4 */}
            <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Volume Analysis</h3>
                  <p className="text-slate-400 text-sm">How volume confirms trends, spots reversals, and validates breakouts (high volume = conviction).</p>
                </div>
              </div>
            </div>

            {/* Topic 5 */}
            <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Entry & Exit Timing</h3>
                  <p className="text-slate-400 text-sm">When to enter trades, when to take profits, when to cut losses — timing strategies for every setup.</p>
                </div>
              </div>
            </div>

            {/* Topic 6 */}
            <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Price Action Basics</h3>
                  <p className="text-slate-400 text-sm">Read raw price movement without indicators — higher highs/lows, swing points, and momentum shifts.</p>
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
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-cyan-500/20">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-lg font-bold mb-2">Spot Trends Early</h3>
              <p className="text-slate-400 text-sm">Catch moves before they're obvious to everyone else.</p>
            </div>

            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-cyan-500/20">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-lg font-bold mb-2">Perfect Timing</h3>
              <p className="text-slate-400 text-sm">Enter at optimal prices and exit before reversals hit.</p>
            </div>

            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-cyan-500/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold mb-2">High Probability</h3>
              <p className="text-slate-400 text-sm">Focus on setups with proven statistical edges.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-cyan-600 to-cyan-700 p-8 sm:p-12 rounded-2xl shadow-2xl animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Master Charts?
          </h2>
          <p className="text-cyan-100 mb-6 sm:mb-8 text-base sm:text-lg">
            Learn technical analysis from scratch and start reading price movements like a pro. Sign up now to access the complete course.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-white text-cyan-600 font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-lg hover:bg-slate-100 transition-all text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Sign Up to Learn →
          </Link>
          <p className="text-cyan-200 text-sm mt-4">
            Already have an account? <Link to="/login" className="underline font-semibold hover:text-white">Log in here</Link>
          </p>
        </div>

      </div>
    </div>
  );
}
