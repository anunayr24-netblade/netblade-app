export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 border-t border-slate-800">
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="grid gap-12 md:grid-cols-5 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold">
              Net<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">blade</span>
            </h3>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Smarter market insights, built for traders worldwide.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                <span className="text-xl">f</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                <span className="text-xl">𝕏</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                <span className="text-xl">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-100 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="/" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-medium">🏠 Home</a></li>
              <li><a href="/about" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-medium">ℹ️ About</a></li>
              <li><a href="/learn" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-medium">📚 Learn</a></li>
              <li><a href="/insights" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-medium">💡 Insights</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-slate-100 text-sm uppercase tracking-widest">Resources</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="/market" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-medium">📊 Market Data</a></li>
              <li><a href="/community" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-medium">👥 Community</a></li>
              <li><a href="/articles" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-medium">📰 Articles</a></li>
              <li><a href="/help-center" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-medium">🆘 Help Center</a></li>
            </ul>
          </div>

          {/* Learning */}
          <div>
            <h4 className="font-bold text-slate-100 text-sm uppercase tracking-widest">Learning</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="/articles" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-medium">📈 Market Analysis</a></li>
              <li><a href="/articles" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-medium">💹 Trading Strategies</a></li>
              <li><a href="/articles" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-medium">🛡️ Risk Management</a></li>
              <li><a href="/articles" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-medium">🧠 Market Psychology</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-slate-100 text-sm uppercase tracking-widest">Legal</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="/glossary" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-medium">📖 Glossary</a></li>
              <li><a href="/privacy-policy" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-medium">🔒 Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-medium">📜 Terms of Service</a></li>
              <li><a href="/disclaimer" className="text-slate-400 hover:text-teal-400 transition-colors duration-300 font-medium">⚠️ Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

        {/* Disclaimer */}
        <div className="text-center mb-6">
          <p className="text-base font-bold text-slate-300 leading-relaxed">
            ⚠️ Educational content only. Not investment advice. Market investments are subject to risk.
          </p>
        </div>

        {/* Bottom */}
        <div className="text-center text-sm text-slate-400">
          <p>© 2026 Netblade. All rights reserved. | Empowering traders with smart insights.</p>
        </div>
      </div>
    </footer>
  );
}