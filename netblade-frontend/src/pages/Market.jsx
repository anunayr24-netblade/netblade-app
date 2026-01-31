export default function Market() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4 md:px-8 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 rounded-full text-sm font-semibold border border-blue-500/30">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              Real-Time Market Intelligence
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Market <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Data</span> & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Analytics</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Access comprehensive market data, real-time updates, and advanced analytical tools to stay ahead in your trading journey.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-4 shadow-lg border border-slate-600/50 text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">50+</div>
            <div className="text-xs font-semibold text-slate-400 mt-1">Markets</div>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-4 shadow-lg border border-slate-600/50 text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Real-Time</div>
            <div className="text-xs font-semibold text-slate-400 mt-1">Updates</div>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-4 shadow-lg border border-slate-600/50 text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">24/7</div>
            <div className="text-xs font-semibold text-slate-400 mt-1">Available</div>
          </div>
        </div>

        {/* Main Sections */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {/* Live Prices */}
          <div className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-blue-500/30 transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-blue-500/30">
              <span className="text-2xl">💹</span>
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Live Prices</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-medium mb-4">
              Real-time stock prices, indices, and commodity data with instant updates and price alerts.
            </p>
            <div className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
              <span>Explore</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Market Scanner */}
          <div className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-cyan-500/30 transition-all duration-300 hover:border-cyan-500/50 hover:-translate-y-1">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-cyan-500/30">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Market Scanner</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-medium mb-4">
              Scan for trading opportunities based on volume, price action, and advanced technical indicators.
            </p>
            <div className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
              <span>Scan Now</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Economic Calendar */}
          <div className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-teal-500/30 transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1">
            <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-teal-500/30">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Economic Calendar</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-medium mb-4">
              Upcoming economic events and their potential market impact with expert analysis and predictions.
            </p>
            <div className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
              <span>View Calendar</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl shadow-2xl p-8 md:p-12 text-white text-center border border-cyan-500/30 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Powerful Market Analysis Tools 📊</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">
            Get instant alerts, advanced charting, portfolio tracking, and AI-powered insights to make informed trading decisions.
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            🚀 Start Analyzing Now
          </button>
        </div>
      </div>
    </div>
  );
}