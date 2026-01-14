import { Link } from 'react-router-dom';

export default function Learn() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white px-8 lg:px-16 py-16">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Learn Trading & Investing
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Structured learning content to help you understand markets, trading,
            and investing from basics to advanced concepts. Master the skills you need to succeed.
          </p>
          <div className="mt-8">
            <Link
              to="/dashboard"
              className="inline-flex items-center px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-xl hover:bg-teal-700 hover-lift transition-all duration-300 shadow-lg"
            >
              View My Progress
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Learning Modules Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Market Basics */}
          <div className="rounded-2xl bg-white p-8 shadow-lg hover-lift animate-scale-in animate-delay-100 border border-slate-100">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Market Basics</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Learn fundamentals like stocks, indices, commodities, and market structure.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">Beginner</span>
              <span className="text-sm font-medium text-blue-600">5 lessons</span>
            </div>
          </div>

          {/* Technical Analysis */}
          <div className="rounded-2xl bg-white p-8 shadow-lg hover-lift animate-scale-in animate-delay-200 border border-slate-100">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Technical Analysis</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Master chart reading, patterns, indicators, and trading strategies.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-slate-500">Intermediate</span>
              <span className="text-sm font-medium text-green-600">12 lessons</span>
            </div>
            <Link
              to="/technical-analysis"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors"
            >
              Start Learning →
            </Link>
          </div>

          {/* Risk Management */}
          <div className="rounded-2xl bg-white p-8 shadow-lg hover-lift animate-scale-in animate-delay-300 border border-slate-100">
            <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Risk Management</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Risk management, position sizing, and trader mindset.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-slate-500">All Levels</span>
              <span className="text-sm font-medium text-red-600">8 lessons</span>
            </div>
            <Link
              to="/risk-management"
              className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors"
            >
              Start Learning →
            </Link>
          </div>

          {/* Derivatives Trading */}
          <div className="rounded-2xl bg-white p-8 shadow-lg hover-lift animate-scale-in animate-delay-400 border border-slate-100">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Derivatives Trading</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Futures and options trading - F&O complete guide with strategies.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-slate-500">Advanced</span>
              <span className="text-sm font-medium text-purple-600">15 lessons</span>
            </div>
            <Link
              to="/derivatives"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors"
            >
              Start Learning →
            </Link>
          </div>

          {/* Cryptocurrency */}
          <div className="rounded-2xl bg-white p-8 shadow-lg hover-lift animate-scale-in animate-delay-500 border border-slate-100">
            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Cryptocurrency</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Digital currencies, blockchain, Bitcoin, Ethereum, and crypto trading.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-slate-500">Intermediate</span>
              <span className="text-sm font-medium text-orange-600">10 lessons</span>
            </div>
            <Link
              to="/cryptocurrency"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors"
            >
              Start Learning →
            </Link>
          </div>

          {/* Market Psychology */}
          <div className="rounded-2xl bg-white p-8 shadow-lg hover-lift animate-scale-in border border-slate-100">
            <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Market Psychology</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Emotions, fear & greed, discipline, and trader mindset development.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-slate-500">All Levels</span>
              <span className="text-sm font-medium text-pink-600">9 lessons</span>
            </div>
            <Link
              to="/market-psychology"
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold transition-colors"
            >
              Start Learning →
            </Link>
          </div>

          {/* Bonds & Fixed Income */}
          <div className="rounded-2xl bg-white p-8 shadow-lg hover-lift animate-scale-in animate-delay-100 border border-slate-100">
            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Bonds & Fixed Income</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Government bonds, corporate bonds, yields, and fixed income investing.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-slate-500">Beginner</span>
              <span className="text-sm font-medium text-indigo-600">7 lessons</span>
            </div>
            <Link
              to="/bonds"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
            >
              Start Learning →
            </Link>
          </div>

          {/* Mutual Funds */}
          <div className="rounded-2xl bg-white p-8 shadow-lg hover-lift animate-scale-in animate-delay-200 border border-slate-100">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Mutual Funds</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              SIP, equity funds, debt funds, portfolio building, and fund selection.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-slate-500">Beginner</span>
              <span className="text-sm font-medium text-emerald-600">11 lessons</span>
            </div>
            <Link
              to="/mutual-funds"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
            >
              Start Learning →
            </Link>
          </div>

          {/* Commodities Trading */}
          <div className="rounded-2xl bg-white p-8 shadow-lg hover-lift animate-scale-in animate-delay-300 border border-slate-100">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Commodities Trading</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Gold, oil, metals, agriculture - global commodity markets and trading.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-slate-500">Intermediate</span>
              <span className="text-sm font-medium text-amber-600">8 lessons</span>
            </div>
            <Link
              to="/commodities"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold transition-colors"
            >
              Start Learning →
            </Link>
          </div>

          {/* Technical Indicators */}
          <div className="rounded-2xl bg-white p-8 shadow-lg hover-lift animate-scale-in animate-delay-400 border border-slate-100">
            <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Technical Indicators</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              MACD, RSI, Bollinger Bands, Ichimoku - complete indicator guide.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-slate-500">Intermediate</span>
              <span className="text-sm font-medium text-cyan-600">14 lessons</span>
            </div>
            <Link
              to="/technical-indicators"
              className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold transition-colors"
            >
              Start Learning →
            </Link>
          </div>

          {/* Advanced Strategies */}
          <div className="rounded-2xl bg-white p-8 shadow-lg hover-lift animate-scale-in animate-delay-500 border border-slate-100">
            <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Advanced Strategies</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Complex trading strategies, arbitrage, and portfolio management.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">Advanced</span>
              <span className="text-sm font-medium text-slate-600">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}