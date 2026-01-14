import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gradient-to-b from-white via-slate-50 to-white shadow-sm z-50 animate-fade-in">
      <div className="w-full mx-auto px-6 lg:px-12">
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
            <Link to="/" className="relative transition-all duration-300 ease-out hover:text-teal-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-600 after:transition-all after:duration-300 hover:after:w-full">
              Home
            </Link>
            <Link to="/learn" className="relative transition-all duration-300 ease-out hover:text-teal-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-600 after:transition-all after:duration-300 hover:after:w-full">
              Learn
            </Link>
            <Link to="/market" className="relative transition-all duration-300 ease-out hover:text-teal-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-600 after:transition-all after:duration-300 hover:after:w-full">
              Market
            </Link>
            <Link to="/community" className="relative transition-all duration-300 ease-out hover:text-teal-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-600 after:transition-all after:duration-300 hover:after:w-full">
              Community
            </Link>
            <Link to="/dashboard" className="relative transition-all duration-300 ease-out hover:text-teal-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-600 after:transition-all after:duration-300 hover:after:w-full">
              Dashboard
            </Link>
            <Link to="/research-analyst-dashboard" className="relative transition-all duration-300 ease-out hover:text-teal-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-600 after:transition-all after:duration-300 hover:after:w-full">
              Analyst Dashboard
            </Link>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-4 ml-8">
            {/* Notifications */}
            <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors relative">
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM21 5a2 2 0 00-2-2H5a2 2 0 00-2 2v14l4-4h14a2 2 0 002-2V5z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 transition-colors">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 text-sm font-bold">JD</span>
                </div>
                <span className="hidden md:block text-slate-700 font-medium">Profile</span>
                <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

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
              <Link to="/" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                Home
              </Link>
              <Link to="/learn" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                Learn
              </Link>
              <Link to="/market" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                Market
              </Link>
              <Link to="/community" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                Community
              </Link>
              <Link to="/dashboard" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                Dashboard
              </Link>
              <Link to="/research-analyst-dashboard" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                Analyst Dashboard
              </Link>
              <div className="pt-4 pb-2 border-t border-slate-200">
                <Link to="/profile" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                  Profile
                </Link>
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