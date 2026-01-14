export default function Market() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-slate-900">
            Market Data
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Comprehensive market data, real-time updates, and analytical tools for traders and investors.
          </p>
        </div>

        {/* Sections */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Live Prices</h3>
            <p className="mt-2 text-sm text-slate-600">
              Real-time stock prices, indices, and commodity data.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Market Scanner</h3>
            <p className="mt-2 text-sm text-slate-600">
              Scan for opportunities based on volume, price action, and technical indicators.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Economic Calendar</h3>
            <p className="mt-2 text-sm text-slate-600">
              Upcoming economic events and their potential market impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}