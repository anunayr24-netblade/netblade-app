export default function Insights() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4 md:px-8 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Market Insights
          </h1>
          <p className="mt-4 text-slate-400 max-w-2xl leading-relaxed">
            Actionable market analysis, trends, and expert insights to help you make informed trading decisions.
          </p>
        </div>

        {/* Sections */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 p-6 shadow-xl border border-slate-600/50 hover:shadow-2xl hover:border-teal-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-teal-500/30">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="font-bold text-white text-lg">NIFTY Analysis</h3>
            <p className="mt-2 text-sm text-slate-300">
              Real-time trends, support/resistance levels, and key indicators for NIFTY.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 p-6 shadow-xl border border-slate-600/50 hover:shadow-2xl hover:border-cyan-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-cyan-500/30">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="font-bold text-white text-lg">Options Data</h3>
            <p className="mt-2 text-sm text-slate-300">
              OI buildup, PCR ratios, and smart money movements in options.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 p-6 shadow-xl border border-slate-600/50 hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-blue-500/30">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="font-bold text-white text-lg">Market Breadth</h3>
            <p className="mt-2 text-sm text-slate-300">
              Advance/decline ratios and sector strength analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}