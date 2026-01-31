import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Users, Shield, Layers, FileText } from 'lucide-react';

export default function MarketFoundationsOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="text-5xl sm:text-6xl mb-6">📘</div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
            Market Foundations
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Build a solid understanding of how financial markets operate from the ground up. Without these fundamentals, you're navigating blind.
          </p>
        </div>

        {/* Why This Matters Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 p-6 sm:p-8 bg-teal-500/10 border-2 border-teal-500/30 rounded-2xl animate-slide-in-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-3">
            <Shield className="w-8 h-8 text-teal-400" />
            Why This Matters
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
            Without understanding market basics, you're navigating blind. This knowledge transforms confusion into clarity and helps you:
          </p>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-teal-400 font-bold text-xl">•</span>
              <span><strong>Understand where you're trading:</strong> Know the difference between primary & secondary markets, exchanges vs. OTC</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-400 font-bold text-xl">•</span>
              <span><strong>Recognize market participants:</strong> Identify who's moving prices and why (institutions, market makers, retail traders)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-400 font-bold text-xl">•</span>
              <span><strong>Navigate regulations safely:</strong> Understand SEBI, RBI rules to avoid penalties and trade legally</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-400 font-bold text-xl">•</span>
              <span><strong>Make informed decisions:</strong> Choose the right asset class and order type for your strategy</span>
            </li>
          </ul>
        </div>

        {/* What You'll Learn Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <BookOpen className="w-8 h-8 text-teal-400" />
            What You'll Cover
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Topic 1 */}
            <div className="bg-slate-800/50 border border-teal-500/20 rounded-xl p-6 hover:border-teal-500/50 transition-all">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Market Structure & Types</h3>
                  <p className="text-slate-400 text-sm">Primary vs. Secondary markets, stock exchanges (NSE, BSE), OTC markets, and how each functions.</p>
                </div>
              </div>
            </div>

            {/* Topic 2 */}
            <div className="bg-slate-800/50 border border-teal-500/20 rounded-xl p-6 hover:border-teal-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Market Participants</h3>
                  <p className="text-slate-400 text-sm">Retail investors, institutional players, market makers, hedgers, speculators, and their impact on price.</p>
                </div>
              </div>
            </div>

            {/* Topic 3 */}
            <div className="bg-slate-800/50 border border-teal-500/20 rounded-xl p-6 hover:border-teal-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Regulatory Bodies</h3>
                  <p className="text-slate-400 text-sm">SEBI, RBI, IRDAI, PFRDA — their roles, rules, and how they protect investors and maintain market integrity.</p>
                </div>
              </div>
            </div>

            {/* Topic 4 */}
            <div className="bg-slate-800/50 border border-teal-500/20 rounded-xl p-6 hover:border-teal-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Layers className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Supply & Demand</h3>
                  <p className="text-slate-400 text-sm">Order books, bid-ask spreads, liquidity, price discovery, and how supply-demand imbalances move markets.</p>
                </div>
              </div>
            </div>

            {/* Topic 5 */}
            <div className="bg-slate-800/50 border border-teal-500/20 rounded-xl p-6 hover:border-teal-500/50 transition-all">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Asset Classes</h3>
                  <p className="text-slate-400 text-sm">Equities, bonds, commodities, real estate, cryptocurrencies, derivatives — characteristics and use cases for each.</p>
                </div>
              </div>
            </div>

            {/* Topic 6 */}
            <div className="bg-slate-800/50 border border-teal-500/20 rounded-xl p-6 hover:border-teal-500/50 transition-all">
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Order Types & Trading Sessions</h3>
                  <p className="text-slate-400 text-sm">Market, limit, stop-loss, bracket orders, trading hours, pre-market, post-market, and T+1 settlement cycles.</p>
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
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-teal-500/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold mb-2">Clarity</h3>
              <p className="text-slate-400 text-sm">No more confusion about how markets work or where your money goes.</p>
            </div>

            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-teal-500/20">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-lg font-bold mb-2">Confidence</h3>
              <p className="text-slate-400 text-sm">Trade with understanding, not guesswork. Know your environment.</p>
            </div>

            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-teal-500/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-bold mb-2">Foundation</h3>
              <p className="text-slate-400 text-sm">Build a rock-solid base for all advanced strategies and concepts.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-teal-600 to-teal-700 p-8 sm:p-12 rounded-2xl shadow-2xl animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Build Your Foundation?
          </h2>
          <p className="text-teal-100 mb-6 sm:mb-8 text-base sm:text-lg">
            Join thousands of traders who started with the basics and built lasting success. Sign up now to access the complete Market Foundations course.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-white text-teal-600 font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-lg hover:bg-slate-100 transition-all text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Sign Up to Learn →
          </Link>
          <p className="text-teal-200 text-sm mt-4">
            Already have an account? <Link to="/login" className="underline font-semibold hover:text-white">Log in here</Link>
          </p>
        </div>

      </div>
    </div>
  );
}
