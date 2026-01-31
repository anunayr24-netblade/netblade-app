import { Link } from "react-router-dom";

export default function RealMarketApplication() {
  return (
    <div className="w-full">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-800 pt-20 pb-24 animate-fade-in">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-8">⚙️</div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Real Market Application
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Theory is useless without practice. Learn how to apply concepts in real trading scenarios 
              through case studies, live examples, and actionable frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* WHY REAL APPLICATION MATTERS */}
      <section className="bg-white py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              From Knowledge to Action
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              You can memorize every technical indicator, read every book, and watch hundreds of videos—but 
              <span className="font-semibold text-indigo-600"> if you can't apply that knowledge in real market conditions</span>, 
              it's worthless.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Real market application bridges the gap between theory and execution. It teaches you:
            </p>
            <ul className="space-y-3 text-lg text-slate-700 pl-6">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold mt-1">✓</span>
                <span>How to spot high-probability setups in live charts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold mt-1">✓</span>
                <span>When to enter, exit, and manage trades dynamically</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold mt-1">✓</span>
                <span>How to adapt strategies to changing market conditions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold mt-1">✓</span>
                <span>How to think like a professional trader, not a textbook student</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="bg-slate-50 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            What Real Application Includes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Live Chart Analysis</h3>
              <p className="text-slate-600 leading-relaxed">
                Walk through real charts step-by-step with expert commentary on what to look for, how to interpret signals, 
                and where mistakes commonly happen.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trade Simulation & Paper Trading</h3>
              <p className="text-slate-600 leading-relaxed">
                Practice executing strategies risk-free in simulated environments. Test your decision-making without 
                risking real capital until you're consistent.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Case Study Reviews</h3>
              <p className="text-slate-600 leading-relaxed">
                Examine historical trades—winners and losers. Understand what went right, what went wrong, and 
                what could have been done differently.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Market Scenario Analysis</h3>
              <p className="text-slate-600 leading-relaxed">
                Learn how to adapt strategies across different market conditions—trending, ranging, volatile, and quiet markets.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trade Journaling Templates</h3>
              <p className="text-slate-600 leading-relaxed">
                Use structured templates to document trades, reflect on decisions, and track performance metrics 
                that lead to continuous improvement.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Decision-Making Frameworks</h3>
              <p className="text-slate-600 leading-relaxed">
                Checklists and mental models that guide you through pre-trade analysis, execution, and post-trade review systematically.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* THE GOAL */}
      <section className="bg-white py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Our Goal: Make You Market-Ready
            </h2>
            
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border-l-4 border-indigo-600">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                By the end of this module, you won't just understand concepts—you'll know how to <strong>execute them under pressure</strong>, 
                adapt when conditions change, and improve through deliberate practice.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                You'll think in terms of probabilities, manage risk proactively, and approach every trade with a clear plan. 
                That's what separates informed traders from gamblers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Apply What You Learn?
          </h2>
          <p className="text-xl text-indigo-50 max-w-2xl mx-auto mb-10">
            Join Netblade and bridge the gap between theory and real-world trading with practical, actionable training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-indigo-600 font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Free
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link to="/learn" className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-white font-semibold hover:bg-white/10 transition-all duration-300">
              Explore All Courses
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
