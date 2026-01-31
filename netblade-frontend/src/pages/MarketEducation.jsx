import { Link } from "react-router-dom";

export default function MarketEducation() {
  return (
    <div className="w-full">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-teal-900 via-slate-900 to-slate-800 pt-20 pb-24 animate-fade-in">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Market Education
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Empower yourself with comprehensive financial knowledge. From basics to advanced strategies, 
              we provide structured learning paths designed to transform beginners into confident traders.
            </p>
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="bg-white py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              Why Market Education Matters
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              The financial markets can be overwhelming for newcomers and even experienced traders face constant challenges. 
              At Netblade, we believe that <span className="font-semibold text-teal-600">informed traders make better decisions</span>. 
              Our mission is to demystify market complexities and provide you with the knowledge foundation you need to navigate 
              trading with confidence and discipline.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Whether you're just starting your trading journey or looking to refine your strategies, our structured educational 
              content covers everything from fundamental concepts to advanced technical analysis, risk management, and market psychology.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="bg-slate-50 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            What You'll Learn
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover-lift border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trading Fundamentals</h3>
              <p className="text-slate-600 leading-relaxed">
                Understand market basics, order types, bid-ask spreads, market structure, and how to place your first trades safely.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover-lift border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Technical Analysis</h3>
              <p className="text-slate-600 leading-relaxed">
                Master chart patterns, candlesticks, trend lines, and technical indicators to identify profitable trading opportunities.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover-lift border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Risk Management</h3>
              <p className="text-slate-600 leading-relaxed">
                Learn position sizing, stop-loss strategies, portfolio diversification, and how to protect your capital.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover-lift border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trading Strategies</h3>
              <p className="text-slate-600 leading-relaxed">
                Explore swing trading, day trading, options strategies, and develop a systematic approach to market entry and exit.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover-lift border border-slate-200">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Market Psychology</h3>
              <p className="text-slate-600 leading-relaxed">
                Understand behavioral biases, emotional discipline, crowd psychology, and develop the mental edge successful traders possess.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover-lift border border-slate-200">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Derivatives & Options</h3>
              <p className="text-slate-600 leading-relaxed">
                Deep dive into futures, options, Greeks, hedging strategies, and advanced derivative instruments.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-white py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Our Educational Approach
            </h2>
            
            <div className="space-y-8">
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-teal-600">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Structured Learning Paths</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our curriculum is organized from beginner to advanced, ensuring you build a solid foundation before 
                    moving to complex concepts. Each module builds upon the previous one, creating a cohesive learning experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-teal-600">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Real-World Examples</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Theory alone isn't enough. We provide practical case studies, real market scenarios, and historical 
                    examples so you can see how concepts apply to actual trading situations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-teal-600">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Interactive Learning</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Engage with quizzes, exercises, and simulations that test your understanding and reinforce key concepts. 
                    Active learning accelerates retention and builds confidence.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-teal-600">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Expert-Backed Content</h3>
                  <p className="text-slate-600 leading-relaxed">
                    All our educational materials are developed by experienced traders and research analysts who have 
                    navigated real market challenges. You're learning from practitioners, not just theorists.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Learning Journey Today
          </h2>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-10">
            Join thousands of traders who have transformed their market understanding through our comprehensive education platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/learn" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-teal-600 font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Browse Courses
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link to="/signup" className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-white font-semibold hover:bg-white/10 transition-all duration-300">
              Create Free Account
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
