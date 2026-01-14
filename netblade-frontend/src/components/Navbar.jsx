import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-gradient-to-b from-emerald-50 to-white-emerald-100 z-50">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="text-5xl font-bold text-emerald-900 tracking-tight"
          >
            Netblade
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-10 text-lg font-semibold text-red-800 ml-auto">
            <Link to="/about" className="relative 
                        transition-all duration-300 ease-out
                        hover:text-slate-900
                        after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-0 after:bg-teal-600
                        after:transition-all after:duration-300
                        hover:after:w-full">About</Link>
            <Link to="/learn" className="relative 
                        transition-all duration-300 ease-out
                        hover:text-slate-900
                        after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-0 after:bg-teal-600
                        after:transition-all after:duration-300
                        hover:after:w-full">Learn</Link>
            <Link to="/insights" className="relative 
                        transition-all duration-300 ease-out
                        hover:text-slate-900
                        after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-0 after:bg-teal-600
                        after:transition-all after:duration-300
                        hover:after:w-full">Insights</Link>
                        
            <Link to="/market" className="relative 
                        transition-all duration-300 ease-out
                        hover:text-slate-900
                        after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-0 after:bg-teal-600
                        after:transition-all after:duration-300
                        hover:after:w-full">Market</Link>
            <Link to="/community" className="relative 
                        transition-all duration-300 ease-out
                        hover:text-slate-900
                        after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-0 after:bg-teal-600
                        after:transition-all after:duration-300
                        hover:after:w-full">Community</Link>
            <Link to="/contact" className="relative 
                        transition-all duration-300 ease-out
                        hover:text-slate-900
                        after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-0 after:bg-teal-600
                        after:transition-all after:duration-300
                        hover:after:w-full">Contact</Link>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-6 ml-8">
            <Link
              to="/login"
              className="rounded-md px-4 py-2 text-lg font-bold text-emerald-600 
           hover:bg-emerald-100 hover:text-emerald-800 transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="rounded-md bg-teal-600 px-4 py-2 text-lg font-medium text-white hover:bg-teal-700 transition"
            >
              Sign up
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}