export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-teal-400">Netblade</h3>
            <p className="mt-2 text-sm text-slate-400">
              Smarter market insights, built for traders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-300">Quick Links</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-400">
              <li><a href="/" className="hover:text-teal-400 transition">Home</a></li>
              <li><a href="/about" className="hover:text-teal-400 transition">About</a></li>
              <li><a href="/learn" className="hover:text-teal-400 transition">Learn</a></li>
              <li><a href="/insights" className="hover:text-teal-400 transition">Insights</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-slate-300">Resources</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-400">
              <li><a href="/market" className="hover:text-teal-400 transition">Market Data</a></li>
              <li><a href="/community" className="hover:text-teal-400 transition">Community</a></li>
              <li><a href="/articles" className="hover:text-teal-400 transition">Articles</a></li>
              <li><a href="/help-center" className="hover:text-teal-400 transition">Help Center</a></li>
            </ul>
          </div>

          {/* Articles */}
          <div>
            <h4 className="font-semibold text-slate-300">Articles</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-400">
              <li><a href="/articles" className="hover:text-teal-400 transition">Market Analysis</a></li>
              <li><a href="/articles" className="hover:text-teal-400 transition">Trading Strategies</a></li>
              <li><a href="/articles" className="hover:text-teal-400 transition">Risk Management</a></li>
              <li><a href="/articles" className="hover:text-teal-400 transition">Market Psychology</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-slate-300">Legal</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-400">
              <li><a href="/privacy-policy" className="hover:text-teal-400 transition">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-teal-400 transition">Terms of Service</a></li>
              <li><a href="/disclaimer" className="hover:text-teal-400 transition">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; 2026 Netblade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}