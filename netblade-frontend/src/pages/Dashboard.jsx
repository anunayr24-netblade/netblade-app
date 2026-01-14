import { Link } from 'react-router-dom';

export default function Dashboard() {
  // Mock data - in a real app, this would come from API/user state
  const lastLogin = new Date().toLocaleDateString();
  const learningProgress = {
    completed: 12,
    total: 20,
    percentage: 60
  };
  const communityStats = {
    posts: 5,
    replies: 23,
    reputation: 150
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Dashboard
          </h1>
          <p className="mt-2 text-slate-600">
            Welcome back! Here's your learning progress and activity overview.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Profile Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 text-2xl font-bold">JD</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">John Doe</h3>
                <p className="text-slate-600">john.doe@example.com</p>
                <p className="text-sm text-slate-500">Member since Jan 2024</p>
              </div>
            </div>
            <Link
              to="/account-settings"
              className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-md hover:bg-slate-200 transition"
            >
              Edit Profile →
            </Link>
          </div>

          {/* Last Login */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Last Login</p>
                <p className="text-2xl font-bold text-slate-900">{lastLogin}</p>
              </div>
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 text-xl">📅</span>
              </div>
            </div>
          </div>

          {/* Learning Progress */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Learning Progress</p>
                <p className="text-2xl font-bold text-slate-900">{learningProgress.percentage}%</p>
                <p className="text-xs text-slate-500">{learningProgress.completed}/{learningProgress.total} modules</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xl">📚</span>
              </div>
            </div>
            <div className="mt-3">
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-teal-600 h-2 rounded-full"
                  style={{ width: `${learningProgress.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Community Posts */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Community Posts</p>
                <p className="text-2xl font-bold text-slate-900">{communityStats.posts}</p>
                <p className="text-xs text-slate-500">{communityStats.replies} replies</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-xl">💬</span>
              </div>
            </div>
          </div>

          {/* Reputation */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Reputation</p>
                <p className="text-2xl font-bold text-slate-900">{communityStats.reputation}</p>
                <p className="text-xs text-slate-500">Community points</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-xl">⭐</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Continue Learning */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Continue Learning</h3>
            <p className="text-slate-600 mb-4">
              Pick up where you left off in your trading education journey.
            </p>
            <Link
              to="/learn"
              className="inline-flex items-center px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-md hover:bg-teal-700 transition"
            >
              Go to Learn
            </Link>
          </div>

          {/* Community Activity */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Community Activity</h3>
            <p className="text-slate-600 mb-4">
              Connect with fellow traders and share your insights.
            </p>
            <Link
              to="/community"
              className="inline-flex items-center px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-md hover:bg-teal-700 transition"
            >
              Go to Community
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 text-sm">📖</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">Completed "Technical Analysis Basics"</p>
                <p className="text-xs text-slate-500">2 days ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">💬</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">Posted in "Market Discussion" forum</p>
                <p className="text-xs text-slate-500">1 week ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm">🎯</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">Achieved 100 reputation points</p>
                <p className="text-xs text-slate-500">2 weeks ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}