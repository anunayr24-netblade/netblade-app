import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setLoading(true);

    // TEMP: simulate API call
    setTimeout(() => {
      setLoading(false);
      console.log("Login attempt:", { email, password });
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4">
      <div className="w-full max-w-md bg-slate-800/50 backdrop-blur-xl border border-teal-500/20 rounded-2xl shadow-2xl shadow-teal-500/10 p-8 animate-fade-in">

        {/* Brand */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Net<span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">blade</span>
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Smarter market insights, built for traders
          </p>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-white">
          Welcome back
        </h2>
        <p className="text-sm text-slate-400 mb-6">
          Login to continue
        </p>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-md bg-red-500/10 border border-red-500/20 px-3 py-2 text-sm text-red-400">
            {error}
          </div>
        )}
         {/* Social Login */}
<div className="space-y-3 mb-6">
  <button
    type="button"
    className="w-full flex items-center justify-center gap-3 rounded-md border border-teal-500/30 bg-slate-700/50 py-2 text-sm font-medium text-slate-200 hover:bg-slate-700 hover:border-teal-500/50 transition"
  >
    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
    Continue with Google
  </button>

  <button
    type="button"
    className="w-full flex items-center justify-center gap-3 rounded-md border border-teal-500/30 bg-slate-700/50 py-2 text-sm font-medium text-slate-200 hover:bg-slate-700 hover:border-teal-500/50 transition"
  >
    <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="h-5 w-5" />
    Continue with Facebook
  </button>

  <button
    type="button"
    className="w-full flex items-center justify-center gap-3 rounded-md border border-teal-500/30 bg-slate-700/50 py-2 text-sm font-medium text-slate-200 hover:bg-slate-700 hover:border-teal-500/50 transition"
  >
    <img src="https://www.svgrepo.com/show/475655/apple-color.svg" alt="Apple" className="h-5 w-5" />
    Continue with Apple
  </button>
</div>

{/* Divider */}
<div className="relative my-6">
  <div className="absolute inset-0 flex items-center">
    <div className="w-full border-t border-teal-500/20"></div>
  </div>
  <div className="relative flex justify-center text-xs text-slate-400 bg-slate-800/50 px-2">
    or continue with email
  </div>
</div>
        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-300">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 w-full rounded-md border border-teal-500/30 bg-slate-700/50 px-3 py-2 text-sm text-white placeholder-slate-400
                         focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-300">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 w-full rounded-md border border-teal-500/30 bg-slate-700/50 px-3 py-2 text-sm text-white placeholder-slate-400
                         focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
            />
          </div>

          {/* Forgot */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-teal-400 hover:text-teal-300 hover:underline transition"
            >
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 py-2.5 text-sm font-semibold text-white
                       shadow-lg hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-teal-400 font-medium hover:text-teal-300 hover:underline transition">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}