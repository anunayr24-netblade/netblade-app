import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Dashboard() {
  const user = {
    name: "John Doe",
    username: "johndoe_trader",
    avatar: "👨‍💼",
  };

  const [expandSection, setExpandSection] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl p-6 shadow-2xl border border-slate-600/50 backdrop-blur-sm mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* NETblade Advisory Logo */}
            <div className="bg-slate-700/30 rounded-xl p-4 flex items-center justify-center border border-slate-600/30">
              <Link to="/" className="text-2xl font-serif font-bold">
                Net<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">blade</span>
              </Link>
            </div>

            {/* Followers and Following */}
            <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
              <p className="text-slate-400 text-xs font-medium mb-2">Community</p>
              <div className="flex gap-4">
                <div>
                  <p className="text-lg font-bold text-white">1,234</p>
                  <p className="text-xs text-slate-400">Followers</p>
                </div>
                <div className="border-l border-slate-600/50 pl-4">
                  <p className="text-lg font-bold text-white">567</p>
                  <p className="text-xs text-slate-400">Following</p>
                </div>
              </div>
            </div>

            {/* Stars Earned */}
            <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
              <p className="text-slate-400 text-xs font-medium mb-2">Stars Earned</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">342</p>
              </div>
            </div>

            {/* Coins */}
            <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
              <p className="text-slate-400 text-xs font-medium mb-2">Coins</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🪙</span>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">1,890</p>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 rounded-xl p-4 mb-6 border border-teal-500/30">
          <h2 className="text-2xl font-bold text-white">Welcome, {user.name}! 👋</h2>
          <p className="text-slate-300 text-sm mt-1">Ready to continue your trading journey?</p>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid gap-6 lg:grid-cols-12">
          
          {/* Left Panel - Profile */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Picture */}
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl p-6 shadow-2xl border border-slate-600/50 backdrop-blur-sm">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center text-white text-5xl font-bold mx-auto mb-4 shadow-lg shadow-teal-500/20">
                  {user.avatar}
                </div>
                <h3 className="font-bold text-white text-xl mb-1">{user.name}</h3>
                <p className="text-sm text-slate-400 mb-3">@{user.username}</p>
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full border border-emerald-500/40 shadow-lg shadow-emerald-500/10">
                  <span>✓</span>
                  <span>Verified</span>
                </span>
              </div>
            </div>

            {/* Profile Details */}
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl p-6 shadow-2xl border border-slate-600/50 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-4">Profile Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Member Since</span>
                  <span className="text-white font-medium">Jan 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Posts</span>
                  <span className="text-white font-medium">48</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Trades</span>
                  <span className="text-white font-medium">156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Win Rate</span>
                  <span className="text-emerald-400 font-medium">67%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Risk Level</span>
                  <span className="text-yellow-400 font-medium">Moderate</span>
                </div>
              </div>
              <Link to="/profile" className="block w-full mt-4 px-4 py-2 text-center text-sm font-semibold text-teal-400 hover:text-teal-300 border border-teal-500/40 hover:border-teal-500/60 hover:bg-teal-500/10 rounded-xl transition-all duration-300">
                Edit Profile
              </Link>
            </div>
          </div>

          {/* Center Panel - Progress & Time Tracker */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Progress Tracker */}
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl p-6 shadow-2xl border border-slate-600/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-6">Learning Progress</h3>
              
              <div className="space-y-4">
                {/* Technical Analysis Progress */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-slate-300 font-medium">Technical Analysis</span>
                    <span className="text-sm text-teal-400 font-bold">75%</span>
                  </div>
                  <div className="w-full bg-slate-700/40 rounded-full h-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full shadow-lg shadow-teal-500/50" style={{width: '75%'}}></div>
                  </div>
                </div>

                {/* Risk Management Progress */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-slate-300 font-medium">Risk Management</span>
                    <span className="text-sm text-emerald-400 font-bold">90%</span>
                  </div>
                  <div className="w-full bg-slate-700/40 rounded-full h-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full shadow-lg shadow-emerald-500/50" style={{width: '90%'}}></div>
                  </div>
                </div>

                {/* Market Psychology Progress */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-slate-300 font-medium">Market Psychology</span>
                    <span className="text-sm text-yellow-400 font-bold">50%</span>
                  </div>
                  <div className="w-full bg-slate-700/40 rounded-full h-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-lg shadow-yellow-500/50" style={{width: '50%'}}></div>
                  </div>
                </div>

                {/* Chart Patterns Progress */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-slate-300 font-medium">Chart Patterns</span>
                    <span className="text-sm text-purple-400 font-bold">65%</span>
                  </div>
                  <div className="w-full bg-slate-700/40 rounded-full h-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50" style={{width: '65%'}}></div>
                  </div>
                </div>
              </div>

              <Link to="/learn" className="block w-full mt-6 px-4 py-3 text-center text-sm font-semibold bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white rounded-xl transition-all duration-300 shadow-lg shadow-teal-500/30">
                Continue Learning →
              </Link>
            </div>

            {/* Time Tracker */}
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl p-6 shadow-2xl border border-slate-600/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-6">Time Tracker</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-slate-700/30 rounded-xl p-4 text-center border border-slate-600/30">
                  <p className="text-3xl font-bold text-white mb-1">8h</p>
                  <p className="text-xs text-slate-400">Today</p>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-4 text-center border border-slate-600/30">
                  <p className="text-3xl font-bold text-white mb-1">42h</p>
                  <p className="text-xs text-slate-400">This Week</p>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-4 text-center border border-slate-600/30">
                  <p className="text-3xl font-bold text-white mb-1">156h</p>
                  <p className="text-xs text-slate-400">This Month</p>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-4 text-center border border-slate-600/30">
                  <p className="text-3xl font-bold text-white mb-1">890h</p>
                  <p className="text-xs text-slate-400">Total</p>
                </div>
              </div>

              {/* Activity Breakdown */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-700/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📚</span>
                    <span className="text-sm text-slate-300">Learning</span>
                  </div>
                  <span className="text-sm font-bold text-white">4.5h</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-700/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📈</span>
                    <span className="text-sm text-slate-300">Trading</span>
                  </div>
                  <span className="text-sm font-bold text-white">2h</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-700/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">💬</span>
                    <span className="text-sm text-slate-300">Community</span>
                  </div>
                  <span className="text-sm font-bold text-white">1.5h</span>
                </div>
              </div>
            </div>

            {/* Expandable Section */}
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl p-6 shadow-2xl border border-slate-600/50 backdrop-blur-sm">
              <button 
                onClick={() => setExpandSection(!expandSection)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Advanced Analytics & Insights
                </h3>
                <span className="text-2xl text-slate-400">{expandSection ? '▼' : '▶'}</span>
              </button>
              
              {expandSection && (
                <div className="mt-6 space-y-4 animate-fade-in">
                  <p className="text-slate-300 text-sm">
                    This section will be populated with detailed market analytics, personalized trading insights, 
                    performance metrics, and AI-driven recommendations to enhance your trading strategy.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                      <h4 className="text-teal-400 font-semibold mb-2">Market Sentiment</h4>
                      <p className="text-slate-300 text-sm">Real-time sentiment analysis across multiple markets</p>
                    </div>
                    <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                      <h4 className="text-cyan-400 font-semibold mb-2">Trade Signals</h4>
                      <p className="text-slate-300 text-sm">AI-powered signals based on your strategy</p>
                    </div>
                    <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                      <h4 className="text-emerald-400 font-semibold mb-2">Risk Alerts</h4>
                      <p className="text-slate-300 text-sm">Automated alerts for portfolio risk management</p>
                    </div>
                    <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                      <h4 className="text-purple-400 font-semibold mb-2">Performance Report</h4>
                      <p className="text-slate-300 text-sm">Comprehensive analysis of your trading history</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Badge, Reputation, Recent Posts */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Badge */}
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl p-6 shadow-2xl border border-slate-600/50 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-4">Achievement Badge</h3>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-3 shadow-lg shadow-yellow-500/30">
                  🏆
                </div>
                <p className="font-bold text-white text-lg mb-1">Master Trader</p>
                <p className="text-xs text-slate-400">Achieved on Jan 15, 2026</p>
              </div>
              <Link to="/profile" className="block w-full mt-4 px-4 py-2 text-center text-sm font-semibold text-teal-400 hover:text-teal-300 border border-teal-500/40 hover:border-teal-500/60 hover:bg-teal-500/10 rounded-xl transition-all duration-300">
                View All Badges
              </Link>
            </div>

            {/* Reputation */}
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl p-6 shadow-2xl border border-slate-600/50 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-4">Reputation Score</h3>
              
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-full h-full" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(148, 163, 184, 0.2)" strokeWidth="8" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="url(#reputationGradient)" strokeWidth="8" strokeDasharray="251 314" strokeLinecap="round" transform="rotate(-90 60 60)" />
                  <defs>
                    <linearGradient id="reputationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: 'rgb(34, 197, 94)'}} />
                      <stop offset="100%" style={{stopColor: 'rgb(6, 182, 212)'}} />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-3xl font-bold text-white">850</p>
                  <p className="text-xs text-slate-400">Expert</p>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Helpful Posts</span>
                  <span className="text-emerald-400 font-medium">+120</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Community Votes</span>
                  <span className="text-teal-400 font-medium">+340</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Verified Trades</span>
                  <span className="text-cyan-400 font-medium">+390</span>
                </div>
              </div>
            </div>

            {/* Recent Posts and Status */}
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl p-6 shadow-2xl border border-slate-600/50 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-4">Recent Posts</h3>
              
              <div className="space-y-3">
                <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30 hover:border-teal-500/40 transition-all duration-300">
                  <p className="text-sm text-slate-300 mb-2">Just completed the Advanced Chart Patterns course! 🎉</p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>2 hours ago</span>
                    <div className="flex items-center gap-2">
                      <span>❤️ 24</span>
                      <span>💬 8</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30 hover:border-teal-500/40 transition-all duration-300">
                  <p className="text-sm text-slate-300 mb-2">Bullish on ETH! Check my analysis in Market section 📈</p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>5 hours ago</span>
                    <div className="flex items-center gap-2">
                      <span>❤️ 45</span>
                      <span>💬 15</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30 hover:border-teal-500/40 transition-all duration-300">
                  <p className="text-sm text-slate-300 mb-2">Risk management saved me today. Always use stop-loss! ✅</p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>1 day ago</span>
                    <div className="flex items-center gap-2">
                      <span>❤️ 67</span>
                      <span>💬 23</span>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/community" className="block w-full mt-4 px-4 py-2 text-center text-sm font-semibold text-teal-400 hover:text-teal-300 border border-teal-500/40 hover:border-teal-500/60 hover:bg-teal-500/10 rounded-xl transition-all duration-300">
                View All Posts
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}