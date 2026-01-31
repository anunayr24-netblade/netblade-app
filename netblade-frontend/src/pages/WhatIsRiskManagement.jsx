import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Shield, AlertTriangle, TrendingDown, Target } from 'lucide-react';

export default function WhatIsRiskManagement() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/risk-management/what-is-risk-management' } });
    }
  }, [navigate]);

  const topics = [
    { id: 'why-traders-lose', title: 'Why Traders Lose Money', icon: TrendingDown },
    { id: 'survival-over-profit', title: 'Survival Over Profit', icon: Shield },
    { id: 'trading-vs-gambling', title: 'Trading vs Gambling', icon: AlertTriangle },
    { id: 'capital-protection', title: 'Protect Capital First', icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <Link to="/risk-management" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6 sm:mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Back to Risk Management
        </Link>

        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            What is Risk Management?
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl">
            Risk management is the foundation of successful trading. It's not about predicting the market perfectly—it's about protecting your capital so you can survive long enough to profit.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Quick Navigation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <a
                  key={topic.id}
                  href={`#${topic.id}`}
                  className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg hover:from-red-100 hover:to-orange-100 transition-all group"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-base font-medium text-slate-800">{topic.title}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 sm:space-y-12">

        {/* Why Traders Lose Money */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Why 90% of Traders Lose Money
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                1. No Risk Management Plan
              </h3>
              <p className="text-slate-600">
                Most traders enter the market without a clear plan for how much they can afford to lose. They risk too much on a single trade, hoping for a big win, but one bad trade wipes out weeks of profits.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                2. Emotional Decision Making
              </h3>
              <p className="text-slate-600">
                Fear and greed drive decisions instead of logic. After a loss, traders revenge trade to "win back" money. After a win, they become overconfident and increase position sizes recklessly.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                3. Over-Leveraging
              </h3>
              <p className="text-slate-600">
                Using excessive leverage magnifies losses. A 2% market move against you can wipe out 20% of your capital if you're over-leveraged. Most retail traders fail because they take on positions far larger than their capital can handle.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                4. No Stop Loss Strategy
              </h3>
              <p className="text-slate-600">
                "I'll just wait for it to come back" is the most expensive lie traders tell themselves. Without stop losses, small losses become catastrophic ones. Hope is not a trading strategy.
              </p>
            </div>
          </div>
        </div>

        {/* Survival Over Profit */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Why Profit is Secondary to Survival
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-slate-700">
              <strong>You can't profit if you're not in the game.</strong>
            </p>
            <p className="text-slate-600 leading-relaxed">
              Trading is a long-term game. The goal isn't to make money on every trade—it's to stay in the market long enough for your edge to play out over hundreds of trades. One catastrophic loss can end your trading career permanently.
            </p>

            <div className="bg-white rounded-xl p-6 mt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Real Example: The Death Spiral
              </h3>
              <div className="space-y-3 text-slate-600">
                <div className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">❌</span>
                  <div>
                    <strong>Account: ₹1,00,000</strong><br />
                    Trader risks 20% on one trade (₹20,000) → Trade fails → Account down to ₹80,000
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">❌</span>
                  <div>
                    Panics, tries to "recover" by risking 25% (₹20,000) → Trade fails again → Account down to ₹60,000
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">❌</span>
                  <div>
                    Now needs 67% gain to break even. Most traders quit or blow up completely at this point.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 mt-4">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Proper Approach: The Survival Game
              </h3>
              <div className="space-y-3 text-slate-600">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Account: ₹1,00,000</strong><br />
                    Trader risks 2% per trade (₹2,000) → Trade fails → Account down to ₹98,000
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    Sticks to plan, risks another 2% → Trade fails → Account down to ₹96,040
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <div>
                    <strong>Can afford 50 consecutive losses and still have capital left.</strong> Stays calm, executes strategy, eventually finds winning trades.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trading vs Gambling */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Trading vs Gambling: What's the Difference?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-red-200 rounded-xl p-6 bg-red-50">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <span>🎰</span> Gambling Mindset
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span>No stop loss—"hoping" it comes back</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span>Risking 10-20% or more on one trade</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span>Revenge trading after a loss</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span>Chasing tips, "hot stocks," FOMO trades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span>No trading journal or performance tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✗</span>
                  <span>Emotional highs and lows dominate decisions</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
              <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                <span>📊</span> Trading Mindset
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Always uses stop loss—controls max loss</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Risks 1-2% of capital per trade</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Follows a written trading plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Accepts losses as part of the process</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Maintains detailed trading journal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Emotionally detached from individual outcomes</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-6 bg-slate-100 rounded-xl">
            <p className="text-lg text-slate-800">
              <strong>Key Insight:</strong> Gambling focuses on winning the next bet. Trading focuses on long-term profitability across hundreds of bets. Risk management is what separates the two.
            </p>
          </div>
        </div>

        {/* Protect Capital First */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-teal-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Protect Capital First, Everything Else Second
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                The Iron Law of Trading
              </h3>
              <div className="text-lg text-slate-700 space-y-4">
                <p>
                  <strong className="text-red-600">Rule #1:</strong> Don't lose money.<br />
                  <strong className="text-red-600">Rule #2:</strong> Don't forget Rule #1.
                </p>
                <p className="text-slate-600">
                  This isn't a joke. Capital preservation is the single most important principle in trading. Without capital, you can't trade. Without trading, you can't profit.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">-50%</div>
                <div className="text-sm text-slate-600 mb-2">Loss</div>
                <div className="text-2xl font-bold text-green-600 mb-2">+100%</div>
                <div className="text-sm text-slate-600">Gain Needed to Recover</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">-75%</div>
                <div className="text-sm text-slate-600 mb-2">Loss</div>
                <div className="text-2xl font-bold text-green-600 mb-2">+300%</div>
                <div className="text-sm text-slate-600">Gain Needed to Recover</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">-90%</div>
                <div className="text-sm text-slate-600 mb-2">Loss</div>
                <div className="text-2xl font-bold text-green-600 mb-2">+900%</div>
                <div className="text-sm text-slate-600">Gain Needed to Recover</div>
              </div>
            </div>

            <p className="text-slate-600 text-center">
              <strong>Notice the pattern?</strong> The deeper your drawdown, the harder it is to recover. This is why protecting capital is paramount.
            </p>
          </div>
        </div>

        {/* Discipline Over Strategy */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Discipline Over Strategy
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-700">
              A mediocre strategy executed with perfect discipline beats a perfect strategy executed with poor discipline every time.
            </p>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                What Discipline in Risk Management Looks Like:
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <div>
                    <strong>Following your stop loss—always.</strong> No exceptions, no "just this once."
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <div>
                    <strong>Never risking more than your predefined %.</strong> Even when you're "sure" about a trade.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <div>
                    <strong>Walking away after daily loss limit.</strong> Protecting yourself from revenge trading.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <div>
                    <strong>Not increasing position size after wins.</strong> Consistency matters more than capitalizing on "hot streaks."
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">✓</span>
                  <div>
                    <strong>Journaling every trade.</strong> Learning from both wins and losses systematically.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <p className="text-slate-700">
                <strong>Remember:</strong> The market doesn't care about your feelings, your mortgage, or your need to "make back" yesterday's loss. The market is indifferent. Your discipline is the only thing protecting you.
              </p>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 shadow-lg mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Key Takeaways</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <p className="text-lg">Risk management is about <strong>survival first, profit second.</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg">90% of traders fail due to <strong>poor risk management,</strong> not poor strategy.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg">Trading without risk management is <strong>gambling.</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg">Protecting capital is paramount—<strong>deep losses are nearly impossible to recover from.</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg"><strong>Discipline beats strategy</strong> every time.</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Ready for the Next Module?
          </h2>
          <p className="text-slate-600 mb-6">
            Now that you understand why risk management matters, learn the single most important skill in trading: Position Sizing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/risk-management/position-sizing"
              className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
            >
              Next: Position Sizing →
            </Link>
            <Link
              to="/risk-management"
              className="px-8 py-3 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition"
            >
              Back to Course Overview
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
