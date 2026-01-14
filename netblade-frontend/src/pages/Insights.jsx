export default function Insights() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-slate-900">
            Market Insights
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Actionable market analysis, trends, and expert insights to help you make informed trading decisions.
          </p>
        </div>

        {/* Sections */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">NIFTY Analysis</h3>
            <p className="mt-2 text-sm text-slate-600">
              Real-time trends, support/resistance levels, and key indicators for NIFTY.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Options Data</h3>
            <p className="mt-2 text-sm text-slate-600">
              OI buildup, PCR ratios, and smart money movements in options.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Market Breadth</h3>
            <p className="mt-2 text-sm text-slate-600">
              Advance/decline ratios and sector strength analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}