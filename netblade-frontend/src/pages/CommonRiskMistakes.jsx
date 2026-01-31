import { Link } from 'react-router-dom';

export default function CommonRiskMistakes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link to="/risk-management" className="inline-flex items-center text-red-600 hover:text-red-700 mb-4">
            ← Back to Risk Management
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">⚠️</span>
            <h1 className="text-4xl font-bold text-slate-900">Common Risk Management Mistakes</h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed">
            Learn from the mistakes that blow up 90% of trading accounts. These are not theoretical—these are the real errors killing traders every day.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Mistake #1: Trading Without Stop Loss</h2>
          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-lg font-semibold text-red-700 mb-4">The Fatal Error:</h3>
              <p className="text-slate-700 mb-4">
                "I'll just watch it and exit manually if it goes against me."
              </p>
              <div className="space-y-3 text-slate-700 text-sm">
                <p><strong>What actually happens:</strong></p>
                <ul className="space-y-2 ml-6">
                  <li>• Trade goes against you by 3%: "It'll come back"</li>
                  <li>• Down 7%: "Too late to exit now, I'll wait"</li>
                  <li>• Down 15%: "I can't afford to book this loss"</li>
                  <li>• Down 30%: Account destroyed, emotional trauma</li>
                </ul>
              </div>
            </div>
            <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200">
              <h3 className="text-lg font-semibold text-teal-700 mb-4">The Fix:</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span><strong>Always set stop loss before entry</strong>—no exceptions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>Use broker's stop loss order feature—automates exit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>Accept that stop losses will be hit—it's protecting you from catastrophe.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Mistake #2: Over-Leveraging Positions</h2>
          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-lg font-semibold text-red-700 mb-4">The Temptation:</h3>
              <p className="text-slate-700 mb-4">
                "Why use ₹1L capital when I can use 5x leverage and control ₹5L worth of stock?"
              </p>
              <div className="bg-white rounded-lg p-4 mt-4">
                <p className="text-sm text-slate-600 mb-2"><strong>Real Example:</strong></p>
                <div className="space-y-2 text-slate-700 text-sm">
                  <p>• Trader has ₹1,00,000 capital</p>
                  <p>• Uses 5x intraday leverage to buy ₹5,00,000 worth of stock</p>
                  <p>• Stock moves 2% against them</p>
                  <p>• Loss: 2% of ₹5L = ₹10,000 (10% of actual capital!)</p>
                  <p>• <strong className="text-red-600">One bad move = -10% account value</strong></p>
                </div>
              </div>
            </div>
            <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200">
              <h3 className="text-lg font-semibold text-teal-700 mb-4">The Fix:</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span><strong>Calculate position size based on risk %, not available leverage.</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>Risk 2% of capital per trade—regardless of leverage available.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>Leverage is a tool, not a requirement—use sparingly.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Mistake #3: Trading News Without a Plan</h2>
          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-lg font-semibold text-red-700 mb-4">The Chaos:</h3>
              <p className="text-slate-700 mb-4">
                "RBI announces rate cut! Stocks are mooning! Let me buy everything!"
              </p>
              <div className="space-y-3 text-slate-700 text-sm">
                <p><strong>What actually happens:</strong></p>
                <ul className="space-y-2 ml-6">
                  <li>• Market gaps up 2% within seconds</li>
                  <li>• You panic buy at the top</li>
                  <li>• Market reverses after initial spike ("sell the news")</li>
                  <li>• You're stuck holding at day high</li>
                  <li>• <strong className="text-red-600">FOMO + No plan = Buying tops</strong></li>
                </ul>
              </div>
            </div>
            <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200">
              <h3 className="text-lg font-semibold text-teal-700 mb-4">The Fix:</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span><strong>Avoid trading immediately after major news.</strong> Wait for volatility to settle.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>If you must trade news, have a pre-planned strategy (entry, SL, target).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>Remember: "Buy the rumor, sell the news" is real.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>Use wider stop losses during news events (increased volatility).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Mistake #4: Increasing Position Size After Loss</h2>
          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-lg font-semibold text-red-700 mb-4">The Gambler's Fallacy:</h3>
              <p className="text-slate-700 mb-4">
                "I just lost on that trade, so statistically my next trade should win. Let me go bigger to recover faster."
              </p>
              <div className="bg-white rounded-lg p-4 mt-4">
                <p className="text-sm text-slate-600 mb-2"><strong>Death Spiral Example:</strong></p>
                <div className="space-y-2 text-slate-700 text-sm">
                  <p>• Trade 1: Risk ₹2,000 → Loss ₹2,000 (2% down)</p>
                  <p>• Trade 2: "Double up to recover" → Risk ₹4,000 → Loss ₹4,000 (4% more)</p>
                  <p>• Trade 3: "All-in recovery" → Risk ₹8,000 → Loss ₹8,000 (8% more)</p>
                  <p>• <strong className="text-red-600">Total: -₹14,000 (14% account blown)</strong></p>
                </div>
              </div>
            </div>
            <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200">
              <h3 className="text-lg font-semibold text-teal-700 mb-4">The Fix:</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span><strong>Always risk the same % per trade</strong>—win or lose.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>Markets have no memory—previous loss doesn't make next trade more likely to win.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>After loss, keep position size same or even <strong>reduce</strong> temporarily.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Mistake #5: No Trading Journal</h2>
          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-lg font-semibold text-red-700 mb-4">The Invisible Mistake:</h3>
              <p className="text-slate-700 mb-4">
                "I don't need to write things down. I remember my trades."
              </p>
              <p className="text-slate-600 text-sm">
                <strong>Reality:</strong> Without a journal, you can't identify patterns. You repeat the same mistakes endlessly because you can't see them. You have no data to improve strategy.
              </p>
            </div>
            <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200">
              <h3 className="text-lg font-semibold text-teal-700 mb-4">The Fix: What to Journal</h3>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-slate-900 mb-3">Minimum Info Per Trade:</p>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Date, time, instrument</li>
                  <li>• Entry price, stop loss, target</li>
                  <li>• Position size & risk amount</li>
                  <li>• Reason for entry (setup)</li>
                  <li>• Exit price & result (win/loss)</li>
                  <li>• What went right/wrong</li>
                  <li>• Emotional state during trade</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">More Common Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-3">❌ Not Adapting to Market Conditions</h3>
              <p className="text-slate-600 text-sm">
                Using same strategy in trending vs choppy vs volatile markets. What works in bull run fails in bear market.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-3">❌ Ignoring Correlation</h3>
              <p className="text-slate-600 text-sm">
                Taking 5 positions in 5 different bank stocks = one big bet on banking sector. Diversify across sectors.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-3">❌ Trading Too Many Instruments</h3>
              <p className="text-slate-600 text-sm">
                "Master of none" syndrome. Better to deeply understand 5-10 stocks than superficially know 100.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-3">❌ No Risk of Ruin Calculation</h3>
              <p className="text-slate-600 text-sm">
                Not knowing how many consecutive losses you can survive. Calculate this to set proper position sizes.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-3">❌ Confusing Unrealized Profits with Real Money</h3>
              <p className="text-slate-600 text-sm">
                "I'm up ₹50K (unrealized)" → Market reverses → "I'm up ₹5K" → Refuse to exit → End down ₹20K.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-3">❌ Not Accounting for Brokerage Costs</h3>
              <p className="text-slate-600 text-sm">
                Overtrading with 0.5% brokerage per side = 1% cost per trade. 50 trades = -50% just in costs!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Real Account Blow-Up Stories (Learn From Them)</h2>
          <div className="space-y-6">
            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Story 1: The Leveraged Options Trader</h3>
              <div className="text-sm text-slate-700 space-y-2">
                <p><strong>Setup:</strong> ₹5L account, sells Nifty options naked (no hedge)</p>
                <p><strong>First week:</strong> Collects ₹50K premium. "This is easy money!"</p>
                <p><strong>Second week:</strong> Collects ₹60K more. Confidence soaring.</p>
                <p><strong>Third week:</strong> Market gaps down 3% overnight. Options assigned. Loss: ₹3.2L (64% account).</p>
                <p><strong className="text-red-600">Mistake:</strong> No stop loss on options, unlimited risk, over-leveraged.</p>
              </div>
            </div>
            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Story 2: The Averaging Down Disaster</h3>
              <div className="text-sm text-slate-700 space-y-2">
                <p><strong>Setup:</strong> ₹10L account, buys Yes Bank @ ₹300 thinking "value buy"</p>
                <p><strong>Week 1:</strong> Down to ₹250. Buys more. "Average down to ₹275"</p>
                <p><strong>Week 2:</strong> Down to ₹200. Buys more. "Average down to ₹250"</p>
                <p><strong>Week 3:</strong> Down to ₹150. All capital deployed. Can't average anymore.</p>
                <p><strong>Months later:</strong> Yes Bank at ₹15. Account value: ₹1.5L (85% loss).</p>
                <p><strong className="text-red-600">Mistake:</strong> No stop loss, blind averaging, no risk management.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 shadow-lg mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Key Takeaways</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <p className="text-lg"><strong>Always use stop loss</strong>—no exceptions, no excuses.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg">Leverage multiplies losses—<strong>use sparingly.</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg">Avoid trading news without plan—<strong>FOMO kills accounts.</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg"><strong>Never increase position size after loss</strong>—that's gambling.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg">Journal every trade—<strong>you can't improve what you don't measure.</strong></p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">🎉 Risk Management Course Complete!</h2>
          <p className="text-lg text-slate-700 mb-6">
            You've learned the foundation of successful trading. Risk management isn't sexy, but it's what separates professionals from gamblers.
          </p>
          <div className="bg-white rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-4">What You've Mastered:</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-600 text-left">
              <div className="flex items-center gap-2">
                <span className="text-teal-600">✓</span>
                <span>Why traders lose money</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600">✓</span>
                <span>Position sizing strategies</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600">✓</span>
                <span>Stop loss techniques</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600">✓</span>
                <span>Risk-reward ratios</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600">✓</span>
                <span>Capital allocation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600">✓</span>
                <span>Daily/weekly risk limits</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600">✓</span>
                <span>Psychological risk management</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600">✓</span>
                <span>Common mistakes to avoid</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/learn" className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition">
              Explore More Courses
            </Link>
            <Link to="/risk-management" className="px-8 py-3 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition">
              Back to Course Overview
            </Link>
            <Link to="/signup" className="px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-blue-700 transition">
              Start Trading With Discipline →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
