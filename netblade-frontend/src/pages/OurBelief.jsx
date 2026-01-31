import { Link } from "react-router-dom";

export default function OurBelief() {
  return (
    <div className="w-full">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-800 pt-20 pb-24 animate-fade-in">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-8">🎯</div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Our Belief
            </h1>
            
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
              Consistency comes from process, not prediction. With the right framework, anyone can approach 
              markets logically and responsibly.
            </p>
          </div>
        </div>
      </section>

      {/* CORE BELIEF */}
      <section className="bg-gradient-to-b from-stone-800 to-stone-900 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Trading Success Is Not About Being Right
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              Most people think successful traders are experts at predicting the future. They imagine gurus who 
              call every market move, never lose, and have some secret formula for guaranteed profits.
            </p>
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              <span className="font-bold text-indigo-600">That's a myth.</span>
            </p>
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              In reality, even the best traders are wrong 40-50% of the time. What separates winners from losers 
              isn't their prediction accuracy—it's their <span className="font-semibold">process discipline</span>.
            </p>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border-l-4 border-indigo-600 mt-8">
              <p className="text-xl font-semibold text-white mb-4">
                We Believe:
              </p>
              <p className="text-xl text-slate-700 leading-relaxed italic">
                "Anyone—regardless of background, education, or starting capital—can become a disciplined, 
                profitable trader if they commit to learning the right principles and following a systematic approach."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE IN */}
      <section className="bg-gradient-to-b from-stone-900 to-stone-800 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Our Core Principles
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Knowledge Is Power</h3>
              <p className="text-slate-700 leading-relaxed">
                The more you understand about market mechanics, technical analysis, risk management, and psychology, 
                the better decisions you'll make. Education is the foundation of every successful trader.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Process Beats Prediction</h3>
              <p className="text-slate-700 leading-relaxed">
                You don't need to predict the future to profit. You need a repeatable process that manages risk, 
                captures opportunities, and adapts to changing conditions—win or lose.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Risk Management First</h3>
              <p className="text-slate-700 leading-relaxed">
                Capital preservation is more important than profit maximization. Traders who protect their downside 
                stay in the game long enough to benefit from the upside.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Psychology Matters</h3>
              <p className="text-slate-700 leading-relaxed">
                Understanding your own biases, emotions, and triggers is as important as understanding charts. 
                Mental discipline separates consistent traders from emotional gamblers.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Data Over Opinions</h3>
              <p className="text-slate-700 leading-relaxed">
                Markets are driven by supply and demand, not by tips or predictions. Trust objective data, 
                price action, and evidence—not hype, rumors, or gut feelings.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Community Accelerates Growth</h3>
              <p className="text-slate-700 leading-relaxed">
                Learning from others' experiences, sharing knowledge, and having accountability partners 
                dramatically shortens your learning curve and improves decision quality.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* THE MINDSET SHIFT */}
      <section className="bg-gradient-to-b from-stone-800 to-stone-900 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              The Mindset Shift We Advocate
            </h2>
            
            <div className="space-y-6">
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-red-100 rounded-lg p-3">
                    <span className="text-2xl">❌</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-slate-400 line-through mb-2">I need to predict every market move perfectly.</p>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="flex items-start gap-2">
                      <span className="text-green-600 text-xl">✓</span>
                      <p className="text-slate-800 font-medium">I follow a process that protects me when I'm wrong and rewards me when I'm right.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-red-100 rounded-lg p-3">
                    <span className="text-2xl">❌</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-slate-400 line-through mb-2">I need to win every trade to be successful.</p>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="flex items-start gap-2">
                      <span className="text-green-600 text-xl">✓</span>
                      <p className="text-slate-800 font-medium">I manage risk so that my winners are bigger than my losers over time.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-red-100 rounded-lg p-3">
                    <span className="text-2xl">❌</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-slate-400 line-through mb-2">Markets are random and unpredictable.</p>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="flex items-start gap-2">
                      <span className="text-green-600 text-xl">✓</span>
                      <p className="text-slate-800 font-medium">Markets have patterns and behaviors I can learn to recognize and respond to logically.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-red-100 rounded-lg p-3">
                    <span className="text-2xl">❌</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-slate-400 line-through mb-2">I need to trade constantly to make money.</p>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="flex items-start gap-2">
                      <span className="text-green-600 text-xl">✓</span>
                      <p className="text-slate-800 font-medium">I wait patiently for high-probability setups that align with my strategy.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* THE PROMISE */}
      <section className="bg-gradient-to-b from-stone-900 to-stone-800 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              What We Promise
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-slate-200">
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                We won't promise you overnight riches. We won't guarantee 100% win rates. We won't sell you magic indicators.
              </p>
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                <span className="font-bold text-indigo-600">What we will do:</span>
              </p>
              <ul className="text-left space-y-4 text-xl text-slate-700 max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">•</span>
                  <span>Teach you how markets actually work</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">•</span>
                  <span>Give you a proven framework for decision-making</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">•</span>
                  <span>Show you how to manage risk like a professional</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">•</span>
                  <span>Help you build the discipline to execute consistently</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold mt-1">•</span>
                  <span>Support you with a community of serious traders</span>
                </li>
              </ul>
              <p className="text-xl text-slate-700 leading-relaxed mt-8 font-semibold">
                If you're willing to learn, practice, and commit to the process, success will follow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Traders Who Believe in Process
          </h2>
          <p className="text-xl text-indigo-50 max-w-2xl mx-auto mb-10">
            Replace hope with strategy. Replace luck with discipline. Replace confusion with clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-indigo-600 font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Your Journey
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link to="/learn" className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-white font-semibold hover:bg-white/10 transition-all duration-300">
              Explore Education
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
