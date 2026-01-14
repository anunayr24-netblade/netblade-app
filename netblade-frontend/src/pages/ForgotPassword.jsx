import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    // Simulate password reset request
    setError('');
    setMessage('If an account with that email exists, we have sent you a password reset link.');
    // In a real app, make API call here
    console.log('Password reset requested for:', email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white/80 backdrop-blur-xl
                      shadow-xl border border-slate-200 p-8 animate-fade-in">

        {/* Brand */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Net<span className="text-teal-600">blade</span>
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Reset your password
          </p>
        </div>

        {/* Title */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Forgot your password?
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Enter your email address and we'll send you a link to reset your password.
          </p>
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
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm
                         focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {message && <p className="text-green-600 text-sm">{message}</p>}

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-teal-600 py-3 text-sm font-semibold text-white
                       shadow-md shadow-teal-600/30
                       hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600/40
                       transition-all duration-200"
          >
            Send Reset Link
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-slate-600">
          Remember your password?{" "}
          <Link to="/login" className="font-semibold text-teal-600 hover:underline">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}