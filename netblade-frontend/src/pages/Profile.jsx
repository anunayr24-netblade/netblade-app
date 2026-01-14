import { Link } from 'react-router-dom';

export default function Profile() {
  // Mock user data - in a real app, this would come from API/user state
  const user = {
    name: "John Doe",
    username: "johndoe_trader",
    email: "john.doe@example.com",
    avatar: "JD",
    level: "Advanced User",
    joinDate: "January 2024",
    bio: "Passionate trader with 5+ years of experience in technical analysis and risk management. Love sharing insights about market trends and helping fellow traders.",
    location: "New York, USA",
    website: "https://johndoe-trading.com",
    stats: {
      stars: 1240,
      coins: 320,
      followers: 184,
      following: 92,
      reputation: 82,
      posts: 45,
      replies: 156
    },
    achievements: [
      { name: "Top Contributor", icon: "🏆", description: "Contributed 100+ valuable posts", date: "Dec 2024" },
      { name: "100 Stars Earned", icon: "⭐", description: "Reached 100 star milestone", date: "Nov 2024" },
      { name: "Active Learner", icon: "📚", description: "Completed 20+ learning modules", date: "Oct 2024" },
      { name: "Community Helper", icon: "🤝", description: "Helped 50+ community members", date: "Sep 2024" },
      { name: "Market Expert", icon: "📈", description: "Achieved expert status in market analysis", date: "Aug 2024" }
    ],
    skills: [
      { name: "Technical Analysis", level: 95 },
      { name: "Risk Management", level: 88 },
      { name: "Cryptocurrency Trading", level: 82 },
      { name: "Options Trading", level: 75 },
      { name: "Portfolio Management", level: 70 }
    ],
    recentActivity: [
      { type: "post", title: "My thoughts on current market trends", date: "2 days ago", likes: 24 },
      { type: "comment", title: "Replied to 'Understanding RSI'", date: "1 week ago", likes: 8 },
      { type: "achievement", title: "Earned 'Market Analyst' badge", date: "2 weeks ago", likes: 0 },
      { type: "module", title: "Completed 'Advanced Chart Patterns'", date: "3 weeks ago", likes: 0 }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 px-8 lg:px-16 py-16">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/dashboard"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-6 font-medium transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">Profile</h1>
          <p className="mt-2 text-slate-600">Manage your profile and view your achievements.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold">
                    {user.avatar}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">{user.name}</h2>
                      <p className="text-slate-600">@{user.username}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm font-medium rounded-full">
                          {user.level} ⭐
                        </span>
                        <span className="text-sm text-slate-500">Member since {user.joinDate}</span>
                      </div>
                    </div>
                    <Link
                      to="/account-settings"
                      className="mt-4 md:mt-0 px-6 py-2 bg-teal-600 text-white font-medium rounded-xl hover:bg-teal-700 transition-colors"
                    >
                      Edit Profile
                    </Link>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{user.bio}</p>
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-600">
                    <span>📍 {user.location}</span>
                    <span>🔗 <a href={user.website} className="text-teal-600 hover:underline">{user.website}</a></span>
                    <span>📧 {user.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">⭐</div>
                <div className="text-2xl font-bold text-slate-900">{user.stats.stars.toLocaleString()}</div>
                <div className="text-sm text-slate-600">Stars Earned</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">🪙</div>
                <div className="text-2xl font-bold text-slate-900">{user.stats.coins.toLocaleString()}</div>
                <div className="text-sm text-slate-600">Coins</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">👥</div>
                <div className="text-2xl font-bold text-slate-900">{user.stats.followers.toLocaleString()}</div>
                <div className="text-sm text-slate-600">Followers</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">📊</div>
                <div className="text-2xl font-bold text-slate-900">{user.stats.reputation}%</div>
                <div className="text-sm text-slate-600">Reputation</div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Skills & Expertise</h3>
              <div className="space-y-4">
                {user.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-32 text-sm font-medium text-slate-700">{skill.name}</div>
                    <div className="flex-1">
                      <div className="w-full bg-slate-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-teal-400 to-blue-500 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-12 text-sm text-slate-600 text-right">{skill.level}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {user.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                      {activity.type === 'post' && <span className="text-teal-600">📝</span>}
                      {activity.type === 'comment' && <span className="text-teal-600">💬</span>}
                      {activity.type === 'achievement' && <span className="text-teal-600">🏆</span>}
                      {activity.type === 'module' && <span className="text-teal-600">📚</span>}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{activity.title}</p>
                      <p className="text-sm text-slate-600">{activity.date}</p>
                      {activity.likes > 0 && (
                        <p className="text-sm text-slate-500 mt-1">❤️ {activity.likes} likes</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Achievements & Quick Info */}
          <div className="space-y-6">
            {/* Achievements */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Achievements</h3>
              <div className="space-y-3">
                {user.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div className="flex-1">
                      <p className="font-medium text-slate-900 text-sm">{achievement.name}</p>
                      <p className="text-xs text-slate-600">{achievement.description}</p>
                      <p className="text-xs text-slate-500 mt-1">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Community Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Posts</span>
                  <span className="font-semibold text-slate-900">{user.stats.posts}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Replies</span>
                  <span className="font-semibold text-slate-900">{user.stats.replies}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Following</span>
                  <span className="font-semibold text-slate-900">{user.stats.following}</span>
                </div>
              </div>
            </div>

            {/* Level Progress */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 border border-teal-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Level Progress</h3>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-teal-600 mb-1">{user.level}</div>
                <div className="text-sm text-slate-600">1,240 / 1,500 stars to next level</div>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 mb-2">
                <div className="bg-gradient-to-r from-teal-400 to-blue-500 h-3 rounded-full" style={{ width: '83%' }}></div>
              </div>
              <div className="text-xs text-slate-600 text-center">260 stars to Expert Trader</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}