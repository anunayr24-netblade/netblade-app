import { useState } from "react";
import { Link } from "react-router-dom";

export default function Community() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Netblade Admin",
      avatar: "🛡️",
      content: "Welcome to the Netblade Community 🚀 Share insights, ask questions, and grow together.",
      time: "2 hrs ago",
      likes: 24,
      comments: 8,
      shares: 3,
      badge: "Admin"
    },
    {
      id: 2,
      author: "Sarah Trading",
      avatar: "👩‍💼",
      content: "Just completed my first profitable week using the risk management strategies from Netblade! The position sizing formula really works. 📊✅",
      time: "4 hrs ago",
      likes: 45,
      comments: 12,
      shares: 7,
      badge: "Expert"
    },
    {
      id: 3,
      author: "Mike Analyst",
      avatar: "👨‍💻",
      content: "What's your view on NIFTY expiry tomorrow? Looks like strong support near 21500. Anyone else seeing a bullish divergence on the hourly chart?",
      time: "5 hrs ago",
      likes: 32,
      comments: 18,
      shares: 5,
      badge: "Pro Trader"
    },
    {
      id: 4,
      author: "Emma Learning",
      avatar: "📚",
      content: "Can someone explain the difference between RSI and Stochastic oscillators? I'm going through the Technical Indicators course.",
      time: "7 hrs ago",
      likes: 19,
      comments: 24,
      shares: 2,
      badge: "Learner"
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [activeTab, setActiveTab] = useState("feed");

  const handlePost = () => {
    if (!newPost.trim()) return;

    setPosts([
      {
        id: Date.now(),
        author: "You",
        avatar: "👤",
        content: newPost,
        time: "Just now",
        likes: 0,
        comments: 0,
        shares: 0,
        badge: "Member"
      },
      ...posts,
    ]);
    setNewPost("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4 pt-24 pb-12">
      {/* Header */}
      <div className="text-center mb-8 animate-fade-in">
        <div className="inline-block mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-300 rounded-full text-sm font-semibold border border-teal-500/30">
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
            Trader's Community Hub
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
          Connect with 👥 <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Trading Minds</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Share insights, discuss strategies, and learn from fellow traders in our vibrant community.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl p-6 shadow-2xl border border-slate-600/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">2,547</p>
              <p className="text-sm text-slate-400 mt-1">Total Members</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">387</p>
              <p className="text-sm text-slate-400 mt-1">Online Now</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">1,234</p>
              <p className="text-sm text-slate-400 mt-1">Posts Today</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">8,901</p>
              <p className="text-sm text-slate-400 mt-1">Total Discussions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">

        {/* LEFT SIDEBAR */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-xl p-6 space-y-4 border border-slate-600/50 hover:shadow-2xl transition-shadow duration-300 sticky top-24">
            <h3 className="font-bold text-white text-lg flex items-center gap-2">📂 Topics</h3>

            <ul className="space-y-2 text-sm">
              <li className="text-slate-300 hover:text-teal-300 cursor-pointer font-medium transition-colors duration-300 p-2 rounded-lg hover:bg-slate-700/50">
                📊 Market Discussion
              </li>
              <li className="text-slate-300 hover:text-teal-300 cursor-pointer font-medium transition-colors duration-300 p-2 rounded-lg hover:bg-slate-700/50">
                📉 Options & Futures
              </li>
              <li className="text-slate-300 hover:text-teal-300 cursor-pointer font-medium transition-colors duration-300 p-2 rounded-lg hover:bg-slate-700/50">
                🧠 Trading Psychology
              </li>
              <li className="text-slate-300 hover:text-teal-300 cursor-pointer font-medium transition-colors duration-300 p-2 rounded-lg hover:bg-slate-700/50">
                📚 Learning & Doubts
              </li>
            </ul>
          </div>
        </aside>

        {/* FEED */}
        <main className="lg:col-span-6 space-y-6">

          {/* Tabs */}
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl shadow-xl border border-slate-600/50 overflow-hidden">
            <div className="flex">
              <button
                onClick={() => setActiveTab("feed")}
                className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 ${
                  activeTab === "feed"
                    ? "text-teal-400 bg-slate-700/50 border-b-2 border-teal-400"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/30"
                }`}
              >
                🏠 Feed
              </button>
              <button
                onClick={() => setActiveTab("trending")}
                className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 ${
                  activeTab === "trending"
                    ? "text-teal-400 bg-slate-700/50 border-b-2 border-teal-400"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/30"
                }`}
              >
                🔥 Trending
              </button>
              <button
                onClick={() => setActiveTab("following")}
                className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 ${
                  activeTab === "following"
                    ? "text-teal-400 bg-slate-700/50 border-b-2 border-teal-400"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/30"
                }`}
              >
                ⭐ Following
              </button>
            </div>
          </div>

          {/* Dashboard Link */}
          <Link
            to="/dashboard"
            className="block bg-gradient-to-r from-teal-600/20 to-blue-600/20 hover:from-teal-600/30 hover:to-blue-600/30 rounded-2xl shadow-lg p-6 text-white font-bold transition-all duration-300 hover:shadow-xl group border border-teal-500/30 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg">📊 View Your Trading Dashboard</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </div>
            <p className="text-sm text-slate-300 mt-2">Track your progress and view detailed analytics</p>
          </Link>

          {/* CREATE POST */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-lg p-6 border border-slate-600/50">
            <textarea
              rows="3"
              placeholder="💬 What's on your mind? Share your market insights..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="w-full resize-none rounded-xl border border-slate-600/50 px-4 py-3 text-sm bg-slate-700/50
                         focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all
                         placeholder-slate-500 text-white font-medium"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={handlePost}
                className="rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 px-6 py-2.5 text-sm font-bold text-white
                           shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                🚀 Post
              </button>
            </div>
          </div>

          {/* POSTS */}
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-lg p-6 border border-slate-600/50 hover:shadow-xl hover:border-teal-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center text-2xl flex-shrink-0 shadow-lg">
                  {post.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-white text-lg">{post.author}</h4>
                    {post.badge && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                        {post.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-400">{post.time}</span>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed font-medium mb-4">
                {post.content}
              </p>

              <div className="pt-4 border-t border-slate-600/30 flex gap-6">
                <button className="text-slate-400 hover:text-teal-400 font-semibold transition-colors duration-300 flex items-center gap-2">
                  <span>👍</span>
                  <span>{post.likes}</span>
                </button>
                <button className="text-slate-400 hover:text-cyan-400 font-semibold transition-colors duration-300 flex items-center gap-2">
                  <span>💬</span>
                  <span>{post.comments}</span>
                </button>
                <button className="text-slate-400 hover:text-purple-400 font-semibold transition-colors duration-300 flex items-center gap-2">
                  <span>↗</span>
                  <span>{post.shares}</span>
                </button>
              </div>
            </div>
          ))}
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-xl p-6 space-y-6 border border-slate-600/50 hover:shadow-2xl transition-shadow duration-300 sticky top-24">
            <div>
              <h3 className="font-bold text-white text-lg flex items-center gap-2">ℹ️ Community Info</h3>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed font-medium">
                This is a learning-focused community. No tips or paid calls. Respect everyone's views. Let's grow together! 🚀
              </p>
            </div>

            <div className="pt-4 border-t border-slate-600/30">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                🟢 Online Now
              </h4>
              <ul className="mt-3 space-y-2">
                <li className="text-sm text-slate-300 font-medium flex items-center gap-2 p-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-300">🟢 Trader A</li>
                <li className="text-sm text-slate-300 font-medium flex items-center gap-2 p-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-300">🟢 Market Learner</li>
                <li className="text-sm text-slate-300 font-medium flex items-center gap-2 p-2 rounded-lg hover:bg-slate-700/50 transition-colors duration-300">🟢 Options Pro</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-600/30">
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest">📈 Community Stats</p>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-300 font-medium">Total Members</span>
                  <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">2.5K+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-300 font-medium">Active Today</span>
                  <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">387</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-300 font-medium">Posts This Week</span>
                  <span className="text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">1.2K</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}