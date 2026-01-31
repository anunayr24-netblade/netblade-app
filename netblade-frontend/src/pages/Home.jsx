import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-20 pb-24 animate-fade-in">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Smarter market insights,<br />
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">built for traders</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-slate-300 leading-relaxed">
                Learn, analyze, and grow with expert-backed financial education
                and practical market tools designed for modern traders.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 px-8 py-4 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Started Free
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button className="inline-flex items-center rounded-lg border-2 border-teal-500/50 px-8 py-4 text-teal-300 font-semibold hover:bg-teal-600/20 hover:border-teal-400 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-2xl p-6 border border-slate-600/50 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm text-slate-400">Live Market</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                      <span className="font-semibold text-white">NIFTY 50</span>
                      <span className="text-green-400 font-bold">22,450.75</span>
                      <span className="text-green-400 text-sm">+1.25%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-500/20 rounded-lg border border-red-500/30">
                      <span className="font-semibold text-white">SENSEX</span>
                      <span className="text-red-400 font-bold">73,890.45</span>
                      <span className="text-red-400 text-sm">-0.85%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                      <span className="font-semibold text-white">BANK NIFTY</span>
                      <span className="text-blue-400 font-bold">47,250.30</span>
                      <span className="text-blue-400 text-sm">+0.95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT NETBLADE HELPS YOU DO */}
      <section className="bg-white py-24">
        <div className="w-full mx-auto px-8 lg:px-16">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What Netblade Helps You Do
            </h2>
            <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive tools and education to transform your trading journey
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <Link to="/market-education" className="rounded-2xl border border-slate-200 p-8 hover-lift animate-scale-in animate-delay-100 bg-gradient-to-br from-white to-slate-50 group">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Market Education
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Learn trading concepts, strategies, and risk management
                through structured content designed for all skill levels.
              </p>
              <span className="text-teal-600 font-semibold flex items-center group-hover:gap-2 transition-all">
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link to="/market-insights-page" className="rounded-2xl border border-slate-200 p-8 hover-lift animate-scale-in animate-delay-200 bg-gradient-to-br from-white to-slate-50 group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Market Insights
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Understand trends, indices, and stock behavior using
                simplified analysis tools and expert insights.
              </p>
              <span className="text-blue-600 font-semibold flex items-center group-hover:gap-2 transition-all">
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link to="/community-driven" className="rounded-2xl border border-slate-200 p-8 hover-lift animate-scale-in animate-delay-300 bg-gradient-to-br from-white to-slate-50 group">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Community Driven
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Engage with experts and traders to share knowledge,
                discuss strategies, and improve your decisions.
              </p>
              <span className="text-purple-600 font-semibold flex items-center group-hover:gap-2 transition-all">
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* MARKET INSIGHTS */}
      <section className="bg-slate-900 py-24">
        <div className="w-full mx-auto px-8 lg:px-16">
          <h2 className="text-center text-2xl font-semibold text-white">
            Market Insights
          </h2>

          <p className="mt-4 text-center text-slate-300 max-w-2xl mx-auto">
            Actionable data, real-time trends, and expert-backed insights
            to help you trade smarter.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-slate-800 p-6">
              <h3 className="text-white font-semibold">
                NIFTY Analysis
              </h3>
              <p className="mt-2 text-slate-400 text-sm">
                Trend, support & resistance levels updated daily.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6">
              <h3 className="text-white font-semibold">
                Options Data
              </h3>
              <p className="mt-2 text-slate-400 text-sm">
                OI buildup, PCR, and smart money movement.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6">
              <h3 className="text-white font-semibold">
                Market Breadth
              </h3>
              <p className="mt-2 text-slate-400 text-sm">
                Advance/decline ratio and sector strength.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}