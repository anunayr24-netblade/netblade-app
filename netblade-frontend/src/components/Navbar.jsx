import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white border-b border-slate-200 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="text-lg font-semibold text-slate-900"
          >
            Netblade
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <Link to="/" className="hover:text-slate-900">Market</Link>
            <Link to="/" className="hover:text-slate-900">Learn</Link>
            <Link to="/" className="hover:text-slate-900">Insights</Link>
            <Link to="/" className="hover:text-slate-900">About</Link>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 transition"
            >
              Sign up
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}