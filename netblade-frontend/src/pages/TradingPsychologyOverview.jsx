import { Link } from 'react-router-dom';
import { Brain, AlertCircle, Target, Zap, Frown, BookOpen } from 'lucide-react';

export default function TradingPsychologyOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-pink-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="text-5xl sm:text-6xl mb-6">🧠</div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
            Trading Psychology
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Trading psychology is the discipline that helps you stay calm, follow rules, and make consistent decisions under market pressure—because true trading success depends less on the market and more on mastering your emotions, discipline, and mindset before strategy delivers profits.
            
          </p>
        </div>

        {/* Why This Matters Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 p-6 sm:p-8 bg-pink-500/10 border-2 border-pink-500/30 rounded-2xl animate-slide-in-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-3">
            <Brain className="w-8 h-8 text-pink-400" />
            Why This Matters
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
            90% of trading is psychological. You can have the best strategy in the world, but if you can't control your emotions, you'll fail. Here's the brutal truth:
          </p>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-pink-400 font-bold text-xl">•</span>
              <span><strong>Fear kills profits:</strong> You'll exit winners too early and hold losers too long if you don't control fear</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400 font-bold text-xl">•</span>
              <span><strong>Greed destroys accounts:</strong> Overleveraging, revenge trading, and ignoring stops = blown accounts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400 font-bold text-xl">•</span>
              <span><strong>Biases distort reality:</strong> Confirmation bias, recency bias, and FOMO make you see what you want, not what's real</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400 font-bold text-xl">•</span>
              <span><strong>Discipline = edge:</strong> Following your plan consistently is the real edge in trading</span>
            </li>
          </ul>
        </div>

        {/* What You'll Learn Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <BookOpen className="w-8 h-8 text-pink-400" />
            What You'll Cover
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Topic 1 */}
            <div className="bg-slate-800/50 border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Frown className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Fear, Greed & Emotional Triggers</h3>
                  <p className="text-slate-400 text-sm">Identify the emotions that hijack your decisions and learn techniques to neutralize them.</p>
                </div>
              </div>
            </div>

            {/* Topic 2 */}
            <div className="bg-slate-800/50 border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/50 transition-all">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Cognitive Biases</h3>
                  <p className="text-slate-400 text-sm">Confirmation bias, recency bias, anchoring, FOMO — learn how your brain tricks you and how to override it.</p>
                </div>
              </div>
            </div>

            {/* Topic 3 */}
            <div className="bg-slate-800/50 border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Discipline & Routine Development</h3>
                  <p className="text-slate-400 text-sm">Build a pre-market routine, trading checklist, and post-trade review process for consistency.</p>
                </div>
              </div>
            </div>

            {/* Topic 4 */}
            <div className="bg-slate-800/50 border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Handling Losses & Winning Streaks</h3>
                  <p className="text-slate-400 text-sm">What to do after big losses (don't revenge trade) and big wins (don't get overconfident).</p>
                </div>
              </div>
            </div>

            {/* Topic 5 */}
            <div className="bg-slate-800/50 border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Brain className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Building Mental Resilience</h3>
                  <p className="text-slate-400 text-sm">Develop a trader's mindset — detachment from outcomes, process over results, long-term thinking.</p>
                </div>
              </div>
            </div>

            {/* Topic 6 */}
            <div className="bg-slate-800/50 border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/50 transition-all">
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Decision-Making Under Pressure</h3>
                  <p className="text-slate-400 text-sm">Stay calm during volatility, avoid impulsive trades, and stick to your plan when markets go crazy.</p>
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
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-pink-500/20">
              <div className="text-4xl mb-4">😌</div>
              <h3 className="text-lg font-bold mb-2">Emotional Control</h3>
              <p className="text-slate-400 text-sm">Stay calm and rational even when positions go against you.</p>
            </div>

            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-pink-500/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold mb-2">Consistent Discipline</h3>
              <p className="text-slate-400 text-sm">Follow your plan every single trade, no exceptions.</p>
            </div>

            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-pink-500/20">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-lg font-bold mb-2">Mental Resilience</h3>
              <p className="text-slate-400 text-sm">Bounce back from losses faster and avoid tilt.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-pink-600 to-pink-700 p-8 sm:p-12 rounded-2xl shadow-2xl animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Master Your Mind?
          </h2>
          <p className="text-pink-100 mb-6 sm:mb-8 text-base sm:text-lg">
            Develop the psychological edge that separates professional traders from amateurs. Sign up now to access the complete Trading Psychology course.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-white text-pink-600 font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-lg hover:bg-slate-100 transition-all text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Sign Up to Learn →
          </Link>
          <p className="text-pink-200 text-sm mt-4">
            Already have an account? <Link to="/login" className="underline font-semibold hover:text-white">Log in here</Link>
          </p>
        </div>

      </div>
    </div>
  );
}
