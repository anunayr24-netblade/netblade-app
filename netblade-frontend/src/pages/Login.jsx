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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="w-full max-w-md bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8 animate-fade-in">

        {/* Brand */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            Net<span className="text-teal-600">blade</span>
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Smarter market insights, built for traders
          </p>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-slate-900">
          Welcome back
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          Login to continue
        </p>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </div>
        )}
         {/* Social Login */}
<div className="space-y-3 mb-6">
  <button
    type="button"
    className="w-full flex items-center justify-center gap-3 rounded-md border border-slate-300 bg-white py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
  >
    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
    Continue with Google
  </button>

  <button
    type="button"
    className="w-full flex items-center justify-center gap-3 rounded-md border border-slate-300 bg-white py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
  >
    <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="h-5 w-5" />
    Continue with Facebook
  </button>

  <button
    type="button"
    className="w-full flex items-center justify-center gap-3 rounded-md border border-slate-300 bg-white py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
  >
    <img src="https://www.svgrepo.com/show/475655/apple-color.svg" alt="Apple" className="h-5 w-5" />
    Continue with Apple
  </button>
</div>

{/* Divider */}
<div className="relative my-6">
  <div className="absolute inset-0 flex items-center">
    <div className="w-full border-t border-slate-200"></div>
  </div>
  <div className="relative flex justify-center text-xs text-slate-500 bg-white px-2">
    or continue with email
  </div>
</div>
        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          {/* Forgot */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-teal-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-teal-600 py-2.5 text-sm font-semibold text-white
                       hover:bg-teal-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-slate-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-teal-600 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}