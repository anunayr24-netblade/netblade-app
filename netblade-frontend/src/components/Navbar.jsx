import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  const handleAuthClick = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-slate-950 to-slate-900 border-b border-slate-800 z-50 animate-fade-in">
      <div className="w-full mx-auto px-4 lg:px-10">

        {/* NAVBAR ROW */}
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <h2 className="text-2xl font-serif font-bold text-white">
              Net<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">blade</span>
            </h2>
          </Link>

          {/* NAV LINKS – DESKTOP */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300 ml-auto">
            {[
              { to: "/", label: "Home" },
              { to: "/market", label: "Market" },
              { to: "/learn", label: "Learn" },
              { to: "/community", label: "Community" },
              { to: "/articles", label: "Articles" },
            ].map(({ to, label }) => (
              <Link
                key={label}
                to={to}
                className="relative transition hover:text-teal-400
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-gradient-to-r after:from-teal-400 after:to-blue-400
                after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </Link>
            ))}
            
            {/* Dashboard - Only show when authenticated */}
            {isAuthenticated && (
              <Link
                to="/dashboard"
                className="relative transition hover:text-teal-400
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-gradient-to-r after:from-teal-400 after:to-blue-400
                after:transition-all after:duration-300 hover:after:w-full"
              >
                Dashboard
              </Link>
            )}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-3 ml-6">

            {!isAuthenticated ? (
              <>
                {/* LOGIN */}
                <button
                  onClick={() => handleAuthClick("login")}
                  className="hidden sm:inline-flex px-4 py-2 text-sm font-medium
                  text-teal-400 border border-teal-500/30 hover:border-teal-500/50
                  rounded-md hover:bg-slate-800/50 transition-all duration-300"
                >
                  Login
                </button>

                {/* SIGN UP */}
                <button
                  onClick={() => handleAuthClick("signup")}
                  className="px-4 py-2 text-sm font-semibold text-white rounded-md
                  bg-gradient-to-r from-teal-600 to-cyan-600
                  hover:from-teal-500 hover:to-cyan-500 transition-all shadow-lg hover:shadow-xl"
                >
                  Sign up
                </button>
              </>
            ) : (
              /* LOGOUT */
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium
                text-red-400 border border-red-500/30 hover:border-red-500/50
                rounded-md hover:bg-slate-800/50 transition-all duration-300"
              >
                Logout
              </button>
            )}

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-slate-800 transition"
            >
              <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 shadow-md">
            <div className="px-4 py-3 space-y-1">
              {[
                ["/home", "Home"],
                ["/market", "Market"],
                ["/learn", "Learn"],
                ["/community", "Community"],
                ["/articles", "Articles"],
              ].map(([to, label]) => (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-slate-300
                  hover:text-teal-400 hover:bg-slate-800/50 transition"
                >
                  {label}
                </Link>
              ))}

              {/* Conditional Dashboard for Mobile */}
              {isAuthenticated && (
                <Link
                  to="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-slate-300
                  hover:text-teal-400 hover:bg-slate-800/50 transition"
                >
                  Dashboard
                </Link>
              )}

              <div className="pt-3 border-t border-slate-800">
                {!isAuthenticated ? (
                  <>
                    <button
                      onClick={() => {
                        handleAuthClick("login");
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-teal-400
                      hover:bg-slate-800/50 rounded-md transition"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {
                        handleAuthClick("signup");
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-white
                      hover:bg-slate-800/50 rounded-md transition mt-1"
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-red-400
                    hover:bg-slate-800/50 rounded-md transition"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* AUTH MODAL */}
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          initialMode={authMode}
          onLoginSuccess={handleLoginSuccess}
        />

      </div>
    </header>
  );
}