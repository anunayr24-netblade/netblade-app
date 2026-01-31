import { Link } from "react-router-dom";
import whoweareimg from "../assets/market-education.png";

export default function Landing() {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="px-4 md:px-8 py-24 md:py-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Unique solutions &{" "}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">innovative approach</span> to trading
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
            Learn, analyze, and trade with structured education, powerful insights,
            and community-driven knowledge.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">

  {/* Primary CTA */}
  <a
    href="/articles"
    className="inline-flex justify-center items-center px-8 py-3
               bg-gradient-to-r from-teal-600 to-cyan-600 
               hover:from-teal-500 hover:to-cyan-500
               text-white rounded-lg font-semibold
               shadow-lg hover:shadow-xl transition-all duration-300"
  >
    Start with Free Articles
  </a>

  {/* Secondary CTA */}
  <a
    href="/signup"
    className="inline-flex justify-center items-center px-8 py-3
               border border-teal-500/30 hover:border-teal-500/50
               rounded-lg font-medium
               text-slate-100 hover:bg-slate-700/50 transition-all duration-300"
  >
    Create Free Account
  </a>

</div>
        </div>

        {/* RIGHT – PLATFORM PREVIEW */}
        <div className="flex items-center justify-center">
  <div className="w-full max-w-lg rounded-3xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600/50 shadow-2xl p-6 hover:shadow-3xl transition-all duration-300">

    {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
      </div>
      <span className="text-xs font-semibold text-teal-300 bg-teal-500/20 border border-teal-500/30 px-3 py-1 rounded-full">
        Platform Preview
      </span>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-3 gap-3 mb-5">
      <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl p-3 text-center border border-slate-600/50">
        <p className="text-xs text-slate-400">NIFTY</p>
        <p className="font-semibold text-emerald-300">22,450</p>
      </div>
      <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl p-3 text-center border border-slate-600/50">
        <p className="text-xs text-slate-400">SENSEX</p>
        <p className="font-semibold text-emerald-300">74,820</p>
      </div>
      <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl p-3 text-center border border-slate-600/50">
        <p className="text-xs text-slate-400">BANK</p>
        <p className="font-semibold text-rose-300">48,120</p>
      </div>
    </div>

    {/* Chart Placeholder */}
    <div className="h-36 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center mb-4">
      <span className="text-sm text-slate-300">
        📈 Live charts & insights
      </span>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-2">
      {["Insights", "Risk Tools", "Research", "Articles"].map(tag => (
        <span
          key={tag}
          className="px-3 py-1 text-xs bg-slate-600/50 text-slate-200 rounded-full border border-slate-500/30"
        >
          {tag}
        </span>
      ))}
    </div>

  </div>
</div>

      </section>

      {/* ================= LIVE MARKET STRIP ================= */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 border-y border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-300">
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent font-bold">Live Market</span>
          <span>NIFTY <span className="text-emerald-400 font-semibold">▲ 22,450</span></span>
          <span>SENSEX <span className="text-emerald-400 font-semibold">▲ 74,820</span></span>
          <span>BANK NIFTY <span className="text-rose-400 font-semibold">▼ 48,120</span></span>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-800 to-slate-900 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <span className="inline-block mb-3 text-sm font-bold text-teal-400 uppercase tracking-wider">
              Who We Are
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Building clarity in <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">complex financial</span> markets
            </h2>

            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Netblade is a market education and research platform designed for traders
              and investors who want structure, discipline, and long-term consistency.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed">
              We simplify technical concepts, risk management, and market psychology
              into actionable knowledge—without noise or hype.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex items-center justify-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-600/50 hover:shadow-3xl transition-all duration-300">
              <img
                src={whoweareimg}
                alt="Who we are - Netblade"
                className="w-full max-w-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= WHY WE ARE HERE ================= */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-800 to-stone-900 border-t border-stone-700/50">
  <div className="max-w-7xl mx-auto px-4 md:px-8">

    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <span className="text-sm font-bold tracking-wider text-amber-400 uppercase">
        Why We Are Here
      </span>
      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
        Markets reward clarity, not confusion
      </h2>
      <p className="mt-6 text-lg text-slate-400 leading-relaxed">
        Most traders don’t lose because they lack intelligence —
        they lose because they lack structure, risk discipline,
        and emotional control.
      </p>
    </div>

    {/* Content Grid */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {/* Problem */}
      <Link to="/the-problem" className="group rounded-2xl bg-gradient-to-br from-stone-700 to-stone-800 p-8 border border-red-500/30 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 block transform hover:-translate-y-1">
        <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">⚠️</div>
        <h3 className="text-xl font-bold text-white mb-3">
          The Problem
        </h3>
        <p className="text-slate-400 leading-relaxed mb-3">
          The market is full of noise — tips, predictions, and
          unverified opinions. This creates emotional decisions
          and inconsistent results.
        </p>
        <span className="text-red-400 font-semibold flex items-center group-hover:gap-2 transition-all">
          Learn more
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>

      {/* Approach */}
      <Link to="/our-approach" className="group rounded-2xl bg-gradient-to-br from-stone-700 to-stone-800 p-8 border border-teal-500/30 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300 block transform hover:-translate-y-1">
        <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🧭</div>
        <h3 className="text-xl font-bold text-white mb-3">
          Our Approach
        </h3>
        <p className="text-slate-400 leading-relaxed mb-3">
          We focus on how markets behave, how risk should be
          controlled, and how decisions should be structured —
          not on shortcuts.
        </p>
        <span className="text-teal-400 font-semibold flex items-center group-hover:gap-2 transition-all">
          Learn more
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>

      {/* Belief */}
      <Link to="/our-belief" className="group rounded-2xl bg-gradient-to-br from-stone-700 to-stone-800 p-8 border border-indigo-500/30 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 block transform hover:-translate-y-1">
        <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
        <h3 className="text-xl font-bold text-white mb-3">
          Our Belief
        </h3>
        <p className="text-slate-400 leading-relaxed mb-3">
          Consistency comes from process, not prediction.
          With the right framework, anyone can approach
          markets logically and responsibly.
        </p>
        <span className="text-indigo-400 font-semibold flex items-center group-hover:gap-2 transition-all">
          Learn more
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>

    </div>
  </div>
</section>

      {/* ================= WHAT YOU LEARN ================= */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-800 to-slate-900 border-t border-slate-700/50">
  <div className="max-w-7xl mx-auto px-4 md:px-8">

    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <span className="text-sm font-bold tracking-wider text-teal-400 uppercase">
        What You Learn
      </span>
      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
        A clear roadmap to <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">market mastery</span>
      </h2>
      <p className="mt-6 text-lg text-slate-400 leading-relaxed">
        We don’t overwhelm you with indicators or tips.  
        We teach markets the way professionals understand them — step by step.
      </p>
    </div>

    {/* Grid */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {/* Card 1 */}
      <Link to="/market-foundations-overview" className="group rounded-2xl bg-gradient-to-br from-slate-700 to-slate-600 p-8 border border-teal-500/30 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300 block transform hover:-translate-y-1">
        <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📘</div>
        <h3 className="text-xl font-bold text-white mb-3">
          Market Foundations
        </h3>
        <p className="text-slate-400 leading-relaxed mb-3">
          Understand how markets actually work — instruments, participants,
          liquidity, and price behavior.
        </p>
        <span className="text-teal-400 font-semibold flex items-center group-hover:gap-2 transition-all">
          Learn more
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>

      {/* Card 2 */}
      <Link to="/technical-analysis-overview" className="group rounded-2xl bg-gradient-to-br from-slate-700 to-slate-600 p-8 border border-cyan-500/30 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 block transform hover:-translate-y-1">
        <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📊</div>
        <h3 className="text-xl font-bold text-white mb-3">
          Technical Analysis
        </h3>
        <p className="text-slate-400 leading-relaxed mb-3">
          Learn charts, trends, support–resistance, and indicators —
          without clutter or confusion.
        </p>
        <span className="text-cyan-400 font-semibold flex items-center group-hover:gap-2 transition-all">
          Learn more
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>

      {/* Card 3 */}
      <Link to="/candlestick-patterns-overview" className="group rounded-2xl bg-gradient-to-br from-slate-700 to-slate-600 p-8 border border-blue-500/30 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 block transform hover:-translate-y-1">
        <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🕯️</div>
        <h3 className="text-xl font-bold text-white mb-3">
          Candlestick Patterns
        </h3>
        <p className="text-slate-400 leading-relaxed mb-3">
          Decode market psychology using single, double, and multi-candle
          formations.
        </p>
        <span className="text-blue-400 font-semibold flex items-center group-hover:gap-2 transition-all">
          Learn more
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>

      {/* Card 4 */}
      <Link to="/risk-management-overview" className="group rounded-2xl bg-gradient-to-br from-slate-700 to-slate-600 p-8 border border-purple-500/30 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 block transform hover:-translate-y-1">
        <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
        <h3 className="text-xl font-bold text-white mb-3">
          Risk Management
        </h3>
        <p className="text-slate-400 leading-relaxed mb-3">
          Position sizing, stop-loss logic, drawdown control,
          and capital protection rules.
        </p>
        <span className="text-purple-400 font-semibold flex items-center group-hover:gap-2 transition-all">
          Learn more
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>

      {/* Card 5 */}
      <Link to="/trading-psychology-overview" className="group rounded-2xl bg-gradient-to-br from-slate-700 to-slate-600 p-8 border border-pink-500/30 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 block transform hover:-translate-y-1">
        <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🧠</div>
        <h3 className="text-xl font-bold text-white mb-3">
          Trading Psychology
        </h3>
        <p className="text-slate-400 leading-relaxed mb-3">
          Master emotions, discipline, bias control, and decision-making
          under pressure.
        </p>
        <span className="text-pink-400 font-semibold flex items-center group-hover:gap-2 transition-all">
          Learn more
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>

      {/* Card 6 */}
      <Link to="/real-market-application-overview" className="group rounded-2xl bg-gradient-to-br from-slate-700 to-slate-600 p-8 border border-indigo-500/30 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 block transform hover:-translate-y-1">
        <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">⚙️</div>
        <h3 className="text-xl font-bold text-white mb-3">
          Real Market Application
        </h3>
        <p className="text-slate-400 leading-relaxed mb-3">
          Case studies, live scenarios, and practical thinking —
          not theoretical noise.
        </p>
        <span className="text-indigo-400 font-semibold flex items-center group-hover:gap-2 transition-all">
          Learn more
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>

    </div>
  </div>
</section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16 md:py-20 text-center border-t border-slate-700/50">
        <h2 className="text-3xl md:text-4xl font-bold">Start learning the right way</h2>
        <p className="mt-4 text-slate-200 text-lg">
          Structured knowledge. Real understanding. No noise.
        </p>
        <a
          href="/articles"
          className="inline-block mt-8 px-8 py-3 bg-white text-teal-600 hover:bg-slate-100 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Read Free Articles
        </a>
      </section>

    </div>
  );
}