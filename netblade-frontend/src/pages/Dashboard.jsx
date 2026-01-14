import { Link } from 'react-router-dom';

export default function Dashboard() {
  // Mock user data - in a real app, this would come from API/user state
  const user = {
    name: "John Doe",
    username: "johndoe_trader",
    avatar: "JD",
    level: "Advanced User",
    starsEarned: 1240,
    nextLevelProgress: 83, // percentage
    stats: {
      stars: 1240,
      coins: 320,
      followers: 184,
      reputation: 82
    },
    recentActivity: [
      { type: "post", title: "My analysis of current market trends", time: "2 hours ago", icon: "📝" },
      { type: "comment", title: "Replied to 'Understanding RSI indicators'", time: "1 day ago", icon: "💬" },
      { type: "achievement", title: "Earned 'Market Analyst' badge", time: "3 days ago", icon: "🏆" },
      { type: "module", title: "Completed 'Advanced Chart Patterns'", time: "1 week ago", icon: "📚" }
    ],
    learningProgress: {
      completed: 12,
      inProgress: 3,
      total: 20,
      nextTopic: "Options Trading Strategies"
    },
    achievements: [
      "Top Contributor",
      "100 Stars Earned",
      "Active Learner"
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 px-8 lg:px-16 py-16">
      <div className="w-full mx-auto">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-8">
              <nav className="space-y-2">
                <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-teal-50 text-teal-700 rounded-xl font-medium">
                  <span className="text-lg">🏠</span>
                  <span>Dashboard</span>
                </Link>
                <Link to="/learn" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
                  <span className="text-lg">📘</span>
                  <span>Learn</span>
                </Link>
                <Link to="/market" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
                  <span className="text-lg">📊</span>
                  <span>Market Dashboard</span>
                </Link>
                <div className="flex items-center gap-3 px-4 py-3 text-slate-600">
                  <span className="text-lg">⭐</span>
                  <span>Stars & Coins</span>
                </div>
                <Link to="/community" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
                  <span className="text-lg">🧑‍🤝‍🧑</span>
                  <span>Community</span>
                </Link>
                <div className="flex items-center gap-3 px-4 py-3 text-slate-600">
                  <span className="text-lg">📈</span>
                  <span>My Activity</span>
                </div>
                <Link to="/account-settings" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
                  <span className="text-lg">⚙️</span>
                  <span>Settings</span>
                </Link>
              </nav>
            </div>
          </div>

          {/* Main Dashboard */}
          <div className="lg:col-span-7 space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Welcome, {user.name}!</h1>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                      Level: {user.level} ⭐
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Stars earned</span>
                      <span>{user.starsEarned} / 1500</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3">
                      <div
                        className="bg-white h-3 rounded-full transition-all duration-500"
                        style={{ width: `${user.nextLevelProgress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-teal-100">Next level progress: {user.nextLevelProgress}%</p>
                  </div>
                </div>
                <div className="mt-6 md:mt-0">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-3xl font-bold">
                    {user.avatar}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white rounded-xl p-6 shadow-sm text-center hover-lift">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-2xl font-bold text-slate-900">{user.stats.stars.toLocaleString()}</div>
                <div className="text-sm text-slate-600">Stars</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center hover-lift">
                <div className="text-3xl mb-2">🪙</div>
                <div className="text-2xl font-bold text-slate-900">{user.stats.coins.toLocaleString()}</div>
                <div className="text-sm text-slate-600">Coins</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center hover-lift">
                <div className="text-3xl mb-2">👥</div>
                <div className="text-2xl font-bold text-slate-900">{user.stats.followers.toLocaleString()}</div>
                <div className="text-sm text-slate-600">Followers</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center hover-lift">
                <div className="text-3xl mb-2">📊</div>
                <div className="text-2xl font-bold text-slate-900">{user.stats.reputation}%</div>
                <div className="text-sm text-slate-600">Reputation</div>
              </div>
            </div>

            {/* Activity Snapshot */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Activity Snapshot</h2>
              <div className="space-y-4">
                {user.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-xl">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{activity.title}</p>
                      <p className="text-sm text-slate-600">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Progress */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Learning Progress</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Completed modules</span>
                    <span className="font-semibold text-slate-900">{user.learningProgress.completed}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">In-progress lessons</span>
                    <span className="font-semibold text-slate-900">{user.learningProgress.inProgress}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Total modules</span>
                    <span className="font-semibold text-slate-900">{user.learningProgress.total}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-teal-50 rounded-xl">
                    <h4 className="font-medium text-slate-900 mb-2">Recommended Next Topic</h4>
                    <p className="text-sm text-slate-600">{user.learningProgress.nextTopic}</p>
                    <Link
                      to="/learn"
                      className="inline-flex items-center mt-3 px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      Start Learning →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Feed */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="border-b border-slate-200 mb-6">
                <nav className="flex space-x-8">
                  <button className="border-b-2 border-teal-600 text-teal-600 font-medium pb-3">My Posts</button>
                  <button className="text-slate-600 hover:text-slate-900 pb-3">Saved Content</button>
                  <button className="text-slate-600 hover:text-slate-900 pb-3">Community Feed</button>
                </nav>
              </div>
              <div className="space-y-4">
                <div className="p-4 border border-slate-200 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                      <span className="text-teal-600 text-sm font-bold">JD</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-slate-900">John Doe</span>
                        <span className="text-sm text-slate-500">2 hours ago</span>
                      </div>
                      <p className="text-slate-700 mb-3">Just completed the Technical Analysis module! The candlestick patterns section was particularly enlightening. 📈</p>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span>❤️ 12 likes</span>
                        <span>💬 3 replies</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 border border-slate-200 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm font-bold">SA</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-slate-900">Sarah Analyst</span>
                        <span className="text-sm text-slate-500">1 day ago</span>
                      </div>
                      <p className="text-slate-700 mb-3">Great discussion on risk management strategies. Anyone else implementing position sizing techniques?</p>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span>❤️ 8 likes</span>
                        <span>💬 5 replies</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Profile Summary</h3>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                  {user.avatar}
                </div>
                <h4 className="font-semibold text-slate-900">{user.name}</h4>
                <p className="text-sm text-slate-600">@{user.username}</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Role:</span>
                  <span className="font-medium text-slate-900">Pro Trader</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Level:</span>
                  <span className="font-medium text-slate-900">{user.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Verification:</span>
                  <span className="font-medium text-green-600">✓ Verified</span>
                </div>
              </div>
              <Link
                to="/profile"
                className="w-full mt-4 px-4 py-2 bg-teal-600 text-white text-center font-medium rounded-xl hover:bg-teal-700 transition-colors block"
              >
                View Full Profile
              </Link>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Achievements</h3>
              <div className="space-y-3">
                {user.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <span className="text-2xl">
                      {achievement === "Top Contributor" && "🏆"}
                      {achievement === "100 Stars Earned" && "⭐"}
                      {achievement === "Active Learner" && "📚"}
                    </span>
                    <div>
                      <p className="font-medium text-slate-900 text-sm">{achievement}</p>
                      <p className="text-xs text-slate-600">Earned recently</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/learn"
                  className="w-full px-4 py-3 bg-teal-600 text-white text-center font-medium rounded-xl hover:bg-teal-700 transition-colors block"
                >
                  Continue Learning
                </Link>
                <Link
                  to="/community"
                  className="w-full px-4 py-3 bg-slate-100 text-slate-700 text-center font-medium rounded-xl hover:bg-slate-200 transition-colors block"
                >
                  Join Discussion
                </Link>
                <Link
                  to="/market"
                  className="w-full px-4 py-3 bg-slate-100 text-slate-700 text-center font-medium rounded-xl hover:bg-slate-200 transition-colors block"
                >
                  View Market Data
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}