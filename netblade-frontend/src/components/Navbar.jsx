import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gradient-to-b from-white via-slate-50 to-white shadow-sm z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="text-3xl md:text-4xl font-bold gradient-text tracking-tight hover-scale transition-transform"
          >
            Netblade
          </Link>

          {/* NAV LINKS - Desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-base font-semibold text-slate-700 ml-auto">
            <Link to="/about" className="relative transition-all duration-300 ease-out hover:text-teal-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-600 after:transition-all after:duration-300 hover:after:w-full">
              About
            </Link>
            <Link to="/learn" className="relative transition-all duration-300 ease-out hover:text-teal-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-600 after:transition-all after:duration-300 hover:after:w-full">
              Learn
            </Link>
            <Link to="/insights" className="relative transition-all duration-300 ease-out hover:text-teal-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-600 after:transition-all after:duration-300 hover:after:w-full">
              Insights
            </Link>
            <Link to="/market" className="relative transition-all duration-300 ease-out hover:text-teal-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-600 after:transition-all after:duration-300 hover:after:w-full">
              Market
            </Link>
            <Link to="/community" className="relative transition-all duration-300 ease-out hover:text-teal-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-600 after:transition-all after:duration-300 hover:after:w-full">
              Community
            </Link>
            <Link to="/contact" className="relative transition-all duration-300 ease-out hover:text-teal-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-600 after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </Link>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-4 ml-8">
            <Link
              to="/login"
              className="hidden sm:inline-flex rounded-lg px-4 py-2 text-base font-semibold text-teal-600 hover:bg-teal-50 hover:text-teal-700 transition-all duration-300"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="rounded-lg bg-teal-600 px-4 py-2 text-base font-semibold text-white hover:bg-teal-700 hover-lift transition-all duration-300 shadow-md"
            >
              Sign up
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden animate-slide-in-left">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-200 shadow-lg">
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                About
              </Link>
              <Link to="/learn" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                Learn
              </Link>
              <Link to="/insights" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                Insights
              </Link>
              <Link to="/market" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                Market
              </Link>
              <Link to="/community" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                Community
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                Contact
              </Link>
              <div className="pt-4 pb-2">
                <Link to="/login" className="block px-3 py-2 text-base font-medium text-teal-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-colors">
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}