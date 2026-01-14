export default function Learn() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-slate-900">
            Learn
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Structured learning content to help you understand markets, trading,
            and investing from basics to advanced concepts.
          </p>
        </div>

        {/* Sections */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Market Basics</h3>
            <p className="mt-2 text-sm text-slate-600">
              Learn fundamentals like stocks, indices, futures, and options.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Technical Analysis</h3>
            <p className="mt-2 text-sm text-slate-600">
              Candlesticks, indicators, support & resistance, and chart patterns.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Risk & Psychology</h3>
            <p className="mt-2 text-sm text-slate-600">
              Risk management, position sizing, and trader mindset.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}