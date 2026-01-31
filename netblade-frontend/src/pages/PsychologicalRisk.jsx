import { Link } from 'react-router-dom';

export default function PsychologicalRisk() {
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
            <span className="text-4xl">🧠</span>
            <h1 className="text-4xl font-bold text-slate-900">Psychological Risk Management</h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed">
            The hardest part of trading isn't technical—it's psychological. Learn to recognize and control the emotional traps that destroy trading accounts.
          </p>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The 4 Deadly Sins of Trading Psychology</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-3">😠</div>
              <h3 className="text-xl font-bold text-red-700 mb-3">1. Revenge Trading</h3>
              <p className="text-slate-700 mb-3">Taking impulsive trades to "win back" losses immediately after a losing trade.</p>
              <div className="border-l-4 border-red-500 pl-4 text-sm text-slate-600">
                <p><strong>Trigger:</strong> "I can't end the day red. One more trade will fix it."</p>
                <p className="mt-2"><strong>Result:</strong> Bigger losses, emotional spiral, account destruction.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-3">😱</div>
              <h3 className="text-xl font-bold text-orange-700 mb-3">2. FOMO (Fear of Missing Out)</h3>
              <p className="text-slate-700 mb-3">Jumping into trades late because "everyone else is making money."</p>
              <div className="border-l-4 border-orange-500 pl-4 text-sm text-slate-600">
                <p><strong>Trigger:</strong> "Stock up 10% today, I need to get in NOW!"</p>
                <p className="mt-2"><strong>Result:</strong> Buying tops, getting trapped, panic selling at bottom.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="text-xl font-bold text-purple-700 mb-3">3. Overconfidence After Wins</h3>
              <p className="text-slate-700 mb-3">Increasing position sizes or taking reckless trades after a winning streak.</p>
              <div className="border-l-4 border-purple-500 pl-4 text-sm text-slate-600">
                <p><strong>Trigger:</strong> "I'm on a hot streak, can't lose. Let me go bigger."</p>
                <p className="mt-2"><strong>Result:</strong> One big loss wipes out weeks of profits.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-4xl mb-3">🔁</div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">4. Overtrading</h3>
              <p className="text-slate-700 mb-3">Taking too many trades out of boredom, anxiety, or need for action.</p>
              <div className="border-l-4 border-blue-500 pl-4 text-sm text-slate-600">
                <p><strong>Trigger:</strong> "Market is moving, I should be doing something."</p>
                <p className="mt-2"><strong>Result:</strong> Death by 1000 cuts—brokerage eats profits, emotional exhaustion.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Deep Dive: Revenge Trading</h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-700">
              <strong>Revenge trading is the #1 account killer.</strong> It happens after a loss triggers emotional pain, and you desperately try to "get even" with the market.
            </p>
            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">The Revenge Trading Cycle:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded">1</span>
                  <div>
                    <strong className="text-slate-900">Loss Occurs:</strong>
                    <p className="text-slate-600">You take a normal loss (2% risk). Stop loss triggers. Account down ₹2,000.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded">2</span>
                  <div>
                    <strong className="text-slate-900">Emotional Reaction:</strong>
                    <p className="text-slate-600">Anger, frustration, ego hurt. "I can't be wrong!" Brain hijacked by limbic system.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded">3</span>
                  <div>
                    <strong className="text-slate-900">Impulsive Action:</strong>
                    <p className="text-slate-600">Immediately enter another trade—no analysis, just emotion. Often increase position size "to recover faster."</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded">4</span>
                  <div>
                    <strong className="text-slate-900">Worse Outcome:</strong>
                    <p className="text-slate-600">Trade fails (worse decisions = worse results). Now down ₹5,000. Panic intensifies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded">5</span>
                  <div>
                    <strong className="text-slate-900">Death Spiral:</strong>
                    <p className="text-slate-600">Repeat cycle. Each loss triggers bigger revenge trade. End result: 10-20% down in one day. Account destroyed, confidence shattered.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">How to Stop Revenge Trading:</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Use daily loss limits:</strong> Hit 2% down? Close terminal. No more trades today.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Wait 30 minutes after loss:</strong> Force a cooling-off period before next trade.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Journal immediately:</strong> Write down what happened (facts only, no emotion).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Physical break:</strong> Walk, exercise, step away from screens.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Remind yourself:</strong> "Losses are part of the game. No single trade matters."</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">FOMO Management</h2>
          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">The FOMO Trap:</h3>
              <div className="space-y-3 text-slate-700">
                <p>• You see Adani stocks up 15% today</p>
                <p>• Everyone on Twitter celebrating profits</p>
                <p>• You panic: "I'm missing out!"</p>
                <p>• You buy at day high (₹2,500)</p>
                <p>• Stock reverses, closes at ₹2,300</p>
                <p>• <strong className="text-red-600">Result: -8% loss, bought the top</strong></p>
              </div>
            </div>
            <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">How to Beat FOMO:</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Accept it:</strong> You will miss 90% of moves. That's OK. Focus on your strategy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Opportunities repeat:</strong> Markets cycle. Another setup will come.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Wait for pullback:</strong> Never chase parabolic moves. Wait for retracement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Avoid social media:</strong> Twitter/forums create false urgency. Turn off during trading hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Stick to watchlist:</strong> Only trade pre-planned setups, not random hot stocks.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Overconfidence After Profits</h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-700">
              <strong>Winning streaks are dangerous.</strong> They make you feel invincible, leading to reckless decisions.
            </p>
            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">The Overconfidence Trap:</h3>
              <div className="space-y-3 text-slate-700">
                <p>• You have 5 winning trades in a row</p>
                <p>• Account up 10% this week</p>
                <p>• Brain releases dopamine—you feel like a genius</p>
                <p>• "I can't lose right now. Let me double my position size."</p>
                <p>• You risk 5% on next trade (normal is 2%)</p>
                <p>• Trade fails—<strong className="text-red-600">wipes out entire week's profits in one loss</strong></p>
              </div>
            </div>
            <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200 mt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">How to Stay Grounded:</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Never increase position size after wins:</strong> Consistency &gt; capitalizing on "hot streaks."</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Review losses, not wins:</strong> Wins teach nothing. Losses teach everything.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Remember: Markets are random short-term:</strong> 5 wins could be luck, not skill.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span><strong>Take profit breaks:</strong> After big win week, take a day off. Reset mentally.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Overtrading Prevention</h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-700">
              <strong>Overtrading kills accounts slowly.</strong> It's not one catastrophic loss—it's death by 1000 small cuts (brokerage, slippage, emotional exhaustion).
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h3 className="font-semibold text-red-700 mb-3">Signs of Overtrading:</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Taking 10+ trades per day</li>
                  <li>• Trading out of boredom</li>
                  <li>• "Scalping" for small gains constantly</li>
                  <li>• Can't sit still without open positions</li>
                  <li>• Exhausted at end of trading day</li>
                  <li>• Breakeven or negative despite effort</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200">
                <h3 className="font-semibold text-teal-700 mb-3">How to Fix It:</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Set max 3-5 trades per day limit</li>
                  <li>• Trade only A+ setups, not B/C grade</li>
                  <li>• Accept that "doing nothing" is valid</li>
                  <li>• Track brokerage costs—see the damage</li>
                  <li>• Read/learn instead of forcing trades</li>
                  <li>• Quality over quantity mindset</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 shadow-lg mb-8 border-2 border-blue-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Real-World Trading Psychology Examples</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Example 1: The Emotional Rollercoaster</h3>
              <div className="space-y-3 text-slate-700 text-sm">
                <p><strong>Trader Raj, Monday morning:</strong> Enters Reliance long, confident. Stock gaps down, stop loss triggered. Down ₹3,000. Angry.</p>
                <p><strong>Immediate reaction:</strong> "I knew this would happen! Market is rigged!" Enters TCS immediately (revenge trade), no analysis. Down another ₹2,500.</p>
                <p><strong>Midday:</strong> Sees Adani up 12% on Twitter. FOMO kicks in. Buys at peak. Reverses instantly. Down ₹4,000 more.</p>
                <p><strong>End of day:</strong> Total loss: ₹9,500 (4.75% of capital). Emotionally destroyed. Quits trading for a month.</p>
                <p><strong className="text-red-600">Problem:</strong> Every psychological trap in one day—revenge, FOMO, no loss limits.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Example 2: The Disciplined Trader</h3>
              <div className="space-y-3 text-slate-700 text-sm">
                <p><strong>Trader Priya, Monday morning:</strong> Enters Reliance long per plan. Stop loss triggered. Down ₹2,000. Accepts it.</p>
                <p><strong>Immediate reaction:</strong> Logs trade in journal. "SL hit, trend invalidated. Move on." Takes 30-minute walk.</p>
                <p><strong>Midday:</strong> Sees Adani up 12%. Checks watchlist—Adani not on it. "Not my setup." Ignores FOMO. Keeps studying charts.</p>
                <p><strong>End of day:</strong> Took one more trade (planned setup), won ₹2,500. Net: +₹500. Calm, focused.</p>
                <p><strong className="text-green-600">Success:</strong> Used loss limits, avoided revenge trading, ignored FOMO, stuck to plan.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 shadow-lg mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Key Takeaways</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <p className="text-lg"><strong>Revenge trading</strong> is the #1 account killer—use loss limits to stop it.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <p className="text-lg"><strong>FOMO</strong> makes you buy tops—stick to your watchlist and strategy.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <p className="text-lg"><strong>Overconfidence</strong> after wins leads to reckless trades—never increase risk.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <p className="text-lg"><strong>Overtrading</strong> drains capital and energy—quality over quantity.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <p className="text-lg">Psychological discipline separates <strong>consistent traders from gamblers.</strong></p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Final Module: Common Mistakes</h2>
          <p className="text-slate-600 mb-6">You've learned the psychological traps. Now learn from the most common risk management mistakes traders make.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/risk-management/common-mistakes" className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
              Next: Common Risk Mistakes →
            </Link>
            <Link to="/risk-management" className="px-8 py-3 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition">
              Back to Course Overview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
