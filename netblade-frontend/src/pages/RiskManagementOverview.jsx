import { Link } from 'react-router-dom';
import { Shield, TrendingDown, DollarSign, AlertTriangle, Target, BookOpen } from 'lucide-react';

export default function RiskManagementOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="text-5xl sm:text-6xl mb-6">🛡️</div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
            Risk Management
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Protect your capital and survive in markets long enough to become consistently profitable. Risk management is the single most important skill for traders.
          </p>
        </div>

        {/* Why This Matters Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 p-6 sm:p-8 bg-purple-500/10 border-2 border-purple-500/30 rounded-2xl animate-slide-in-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-purple-400" />
            Why This Matters
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
            Risk management is the #1 difference between traders who blow accounts and those who compound wealth steadily. Here's why it's non-negotiable:
          </p>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold text-xl">•</span>
              <span><strong>Survival first:</strong> You can't make money if you're out of capital. Risk management keeps you in the game.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold text-xl">•</span>
              <span><strong>Compound gains:</strong> Small, consistent wins with controlled losses = exponential growth over time</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold text-xl">•</span>
              <span><strong>Psychological safety:</strong> Knowing your max loss in advance eliminates fear and panic during trades</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold text-xl">•</span>
              <span><strong>Professional edge:</strong> Institutional traders obsess over risk. You should too.</span>
            </li>
          </ul>
        </div>

        {/* What You'll Learn Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <BookOpen className="w-8 h-8 text-purple-400" />
            What You'll Cover
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Topic 1 */}
            <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="flex items-start gap-4">
                <DollarSign className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Position Sizing (1%-2% Rule)</h3>
                  <p className="text-slate-400 text-sm">Calculate exactly how much to risk per trade based on account size — never blow your account on one bad trade.</p>
                </div>
              </div>
            </div>

            {/* Topic 2 */}
            <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="flex items-start gap-4">
                <TrendingDown className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Stop-Loss Placement</h3>
                  <p className="text-slate-400 text-sm">Where to place stops for maximum protection without getting prematurely stopped out by noise.</p>
                </div>
              </div>
            </div>

            {/* Topic 3 */}
            <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Risk-Reward Ratios</h3>
                  <p className="text-slate-400 text-sm">Why you need 1:2 or better R:R to be profitable, and how to calculate it for every trade.</p>
                </div>
              </div>
            </div>

            {/* Topic 4 */}
            <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Diversification Rules</h3>
                  <p className="text-slate-400 text-sm">Spread risk across assets, sectors, and strategies — don't put all eggs in one basket.</p>
                </div>
              </div>
            </div>

            {/* Topic 5 */}
            <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Drawdown Management</h3>
                  <p className="text-slate-400 text-sm">What to do when you hit a losing streak — reduce size, take a break, or adjust strategy.</p>
                </div>
              </div>
            </div>

            {/* Topic 6 */}
            <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Capital Protection Rules</h3>
                  <p className="text-slate-400 text-sm">Hard limits on daily losses, max open trades, and risk exposure — professional safety nets.</p>
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
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-purple-500/20">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-bold mb-2">Protect Capital</h3>
              <p className="text-slate-400 text-sm">Sleep peacefully knowing your account is safe from catastrophic losses.</p>
            </div>

            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-purple-500/20">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-lg font-bold mb-2">Steady Growth</h3>
              <p className="text-slate-400 text-sm">Small wins compound into massive gains when losses are controlled.</p>
            </div>

            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-purple-500/20">
              <div className="text-4xl mb-4">😌</div>
              <h3 className="text-lg font-bold mb-2">Mental Peace</h3>
              <p className="text-slate-400 text-sm">Trade without fear or stress. You know your max loss before clicking "buy."</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-purple-600 to-purple-700 p-8 sm:p-12 rounded-2xl shadow-2xl animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Protect Your Capital?
          </h2>
          <p className="text-purple-100 mb-6 sm:mb-8 text-base sm:text-lg">
            Learn the risk management strategies professionals use to survive and thrive in volatile markets. Sign up now to access the complete course.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-white text-purple-600 font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-lg hover:bg-slate-100 transition-all text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Sign Up to Learn →
          </Link>
          <p className="text-purple-200 text-sm mt-4">
            Already have an account? <Link to="/login" className="underline font-semibold hover:text-white">Log in here</Link>
          </p>
        </div>

      </div>
    </div>
  );
}
