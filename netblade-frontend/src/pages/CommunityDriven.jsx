import { Link } from "react-router-dom";

export default function CommunityDriven() {
  return (
    <div className="w-full">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-purple-900 via-slate-900 to-slate-800 pt-20 pb-24 animate-fade-in">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Community Driven
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Trading doesn't have to be a lonely journey. Join a thriving community of traders, 
              analysts, and educators who share knowledge, strategies, and support each other's growth.
            </p>
          </div>
        </div>
      </section>

      {/* WHY COMMUNITY MATTERS */}
      <section className="bg-white py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              Why Community Matters in Trading
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Trading can feel isolating. You're making decisions that affect your capital, often under stress and uncertainty. 
              Having access to a <span className="font-semibold text-purple-600">supportive, knowledgeable community</span> transforms 
              your experience—offering perspective when emotions run high, insights when you're uncertain, and validation when you're 
              on the right track.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              At Netblade, our community isn't just a forum—it's a collaborative ecosystem where traders of all levels share ideas, 
              challenge assumptions, learn from mistakes, and celebrate wins together. Knowledge grows exponentially when shared.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT OUR COMMUNITY OFFERS */}
      <section className="bg-slate-50 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            What Our Community Offers
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover-lift border border-slate-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Discussion Forums</h3>
              <p className="text-slate-600 leading-relaxed">
                Ask questions, share trade ideas, discuss market trends, and get feedback from experienced traders 
                in a moderated, respectful environment.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover-lift border border-slate-200">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Live Webinars</h3>
              <p className="text-slate-600 leading-relaxed">
                Join weekly live sessions with expert traders and analysts covering current market conditions, 
                trade setups, and strategy discussions with Q&A.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover-lift border border-slate-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Strategy Sharing</h3>
              <p className="text-slate-600 leading-relaxed">
                Learn from others' approaches. Members share their trading systems, backtesting results, and 
                lessons learned—accelerating everyone's growth.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover-lift border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trade Journals & Reviews</h3>
              <p className="text-slate-600 leading-relaxed">
                Document your trades, reflect on decisions, and get constructive peer feedback. Public accountability 
                improves discipline and decision quality.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover-lift border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mentorship Programs</h3>
              <p className="text-slate-600 leading-relaxed">
                Connect with experienced traders willing to mentor newcomers. Personalized guidance accelerates 
                learning and helps avoid costly beginner mistakes.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover-lift border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Market Alerts & News</h3>
              <p className="text-slate-600 leading-relaxed">
                Members share breaking news, price alerts, and important market events in real time so everyone 
                stays informed and can react quickly.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* COMMUNITY GUIDELINES */}
      <section className="bg-white py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Our Community Values
            </h2>
            
            <div className="space-y-8">
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Respect & Support</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Everyone is at a different stage of their trading journey. We celebrate questions, encourage learning, 
                    and treat every member with kindness and professionalism.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Knowledge Sharing</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We believe in generosity. Share what you know, help others understand, and contribute to collective growth. 
                    The more we give, the more everyone gains.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Transparency & Honesty</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Share real experiences—wins and losses. Honest discussion about mistakes and setbacks is more valuable 
                    than showcasing only successes. Authenticity builds trust.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">No Pump & Dump</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our community is about education and collaboration, not market manipulation. Stock tips and promotional 
                    content are prohibited. Discussions focus on analysis and learning.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="bg-slate-50 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Community Impact
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">5,000+</div>
              <p className="text-slate-600 font-semibold">Active Members</p>
              <p className="text-sm text-slate-500 mt-2">Traders from diverse backgrounds sharing insights daily</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <p className="text-slate-600 font-semibold">Weekly Discussions</p>
              <p className="text-sm text-slate-500 mt-2">Active threads covering strategies, analysis, and market events</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
              <p className="text-slate-600 font-semibold">Expert Contributors</p>
              <p className="text-sm text-slate-500 mt-2">Experienced traders and analysts actively helping members</p>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the Netblade Community Today
          </h2>
          <p className="text-xl text-purple-50 max-w-2xl mx-auto mb-10">
            Connect with traders who share your passion, learn from collective wisdom, and accelerate your journey to trading success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/community" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-purple-600 font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore Community
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
