import { useState, useEffect } from "react";

export default function AuthModal({ isOpen, onClose, onLoginSuccess, initialMode = "login" }) {
  const [mode, setMode] = useState(initialMode); // 'login' or 'signup'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
    }
  }, [isOpen, initialMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (mode === "login") {
      if (!email || !password) {
        setError("Please enter both email and password");
        return;
      }
    } else {
      if (!email || !password || !confirmPassword) {
        setError("Please fill in all fields");
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
    }

    setLoading(true);

    // TEMP: simulate API call
    setTimeout(() => {
      setLoading(false);
      // Set auth flag and close modal
      localStorage.setItem("isAuthenticated", "true");
      // Clear session flag so disclaimer shows on this new login
      sessionStorage.removeItem("hasSeenDisclaimerThisSession");
      onLoginSuccess?.();
      onClose();
      // Reset form
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setMode("login");
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 min-h-screen flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fade-in overflow-y-auto">
      <div className="w-full max-w-md bg-gradient-to-br from-white via-slate-50 to-white rounded-3xl shadow-2xl p-8 animate-scale-in my-auto border border-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 text-3xl font-light transition-colors"
        >
          ✕
        </button>

        {/* Brand */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif font-bold">
            Net<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">blade</span>
          </h1>
          <p className="mt-2 text-sm text-slate-600 font-medium">
            Smarter market insights, built for traders
          </p>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            {mode === "login" ? "Welcome Back" : "Join Netblade"}
          </h2>
          <p className="text-slate-600 mt-2">
            {mode === "login" ? "Login to continue your learning journey" : "Start mastering trading & investing today"}
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 font-medium flex items-start gap-3">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2.5">
              📧 Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-5 py-3.5 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none bg-white text-slate-900 placeholder-slate-400 transition-all text-sm font-medium"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2.5">
              🔒 Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-5 py-3.5 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none bg-white text-slate-900 placeholder-slate-400 transition-all text-sm font-medium"
              required
            />
          </div>

          {/* Confirm Password (Signup) */}
          {mode === "signup" && (
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2.5">
                ✅ Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-5 py-3.5 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none bg-white text-slate-900 placeholder-slate-400 transition-all text-sm font-medium"
                required
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-7 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 disabled:from-slate-400 disabled:to-slate-400 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg hover:shadow-xl duration-300 flex items-center justify-center gap-2 text-base"
          >
            {loading ? (
              <>
                <div className="animate-spin">⚙️</div>
                {mode === "login" ? "Logging in..." : "Creating account..."}
              </>
            ) : (
              <>
                {mode === "login" ? "🚀 Login" : "✨ Create Account"}
              </>
            )}
          </button>

          {/* Forgot Password Link (Login) */}
          {mode === "login" && (
            <div className="text-center">
              <button
                type="button"
                className="text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors"
              >
                Forgot password?
              </button>
            </div>
          )}
        </form>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent"></div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Or Continue</span>
          <div className="flex-1 h-px bg-gradient-to-l from-slate-200 to-transparent"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <button type="button" className="py-3.5 px-3 rounded-xl border border-slate-300 hover:bg-slate-50 hover:border-teal-200 transition-all flex items-center justify-center text-lg font-bold">
            <span className="text-xl">🔵</span>
          </button>
          <button type="button" className="py-3.5 px-3 rounded-xl border border-slate-300 hover:bg-slate-50 hover:border-teal-200 transition-all flex items-center justify-center text-lg font-bold">
            <span className="text-xl">👥</span>
          </button>
          <button type="button" className="py-3.5 px-3 rounded-xl border border-slate-300 hover:bg-slate-50 hover:border-teal-200 transition-all flex items-center justify-center text-lg font-bold">
            <span className="text-xl">🍎</span>
          </button>
        </div>

        {/* Toggle Mode */}
        <div className="text-center border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-600">
            {mode === "login" ? "Don't have an account?" : "Already have an account?"}
            {" "}
            <button
              type="button"
              onClick={() => {
                setMode(mode === "login" ? "signup" : "login");
                setError("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
              }}
              className="font-bold text-teal-600 hover:text-teal-700 hover:underline transition-colors"
            >
              {mode === "login" ? "Create one" : "Login here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
