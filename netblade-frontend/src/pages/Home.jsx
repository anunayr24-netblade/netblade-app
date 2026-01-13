export default function Home() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="bg-slate-50 pt-24 pb-32 animate-fade-in">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-slate-900 leading-tight">
            Smarter market insights,<br /> built for traders
          </h1>

          <p className="mt-6 max-w-xl text-2xl text-slate-600">
            Learn, analyze, and grow with expert-backed financial education
            and practical market tools.
          </p>

          <button className="mt-8 inline-flex items-center rounded-md bg-teal-600 px-6 py-3 text-white font-medium hover:bg-teal-700 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* WHAT NETBLADE HELPS YOU DO */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-2xl font-semibold text-slate-900">
            What Netblade Helps You Do
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Market Education
              </h3>
              <p className="mt-3 text-slate-600 text-sm">
                Learn trading concepts, strategies, and risk management
                through structured content.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Market Insights
              </h3>
              <p className="mt-3 text-slate-600 text-sm">
                Understand trends, indices, and stock behavior using
                simplified analysis.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Community Driven
              </h3>
              <p className="mt-3 text-slate-600 text-sm">
                Engage with experts and traders to share knowledge and
                improve decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET INSIGHTS */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-6xl mx-auto px-6">
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