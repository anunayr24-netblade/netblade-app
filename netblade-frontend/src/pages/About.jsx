export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-slate-900">
            About Netblade
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Netblade is your trusted platform for smarter market insights and trading education.
            We empower traders and investors with data-driven tools and comprehensive learning resources.
          </p>
        </div>

        {/* Sections */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Our Mission</h3>
            <p className="mt-2 text-sm text-slate-600">
              To democratize market knowledge and provide accessible tools for informed trading decisions.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Expert Team</h3>
            <p className="mt-2 text-sm text-slate-600">
              Led by experienced traders and analysts with decades of market experience.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Community Focus</h3>
            <p className="mt-2 text-sm text-slate-600">
              Building a supportive community where traders learn, share, and grow together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}