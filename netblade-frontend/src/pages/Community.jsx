import { useState } from "react";
import { Link } from "react-router-dom";

export default function Community() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Netblade Admin",
      content:
        "Welcome to the Netblade Community 🚀 Share insights, ask questions, and grow together.",
      time: "2 hrs ago",
    },
    {
      id: 2,
      author: "Trader A",
      content:
        "What’s your view on NIFTY expiry tomorrow? Looks like strong support near 21500.",
      time: "5 hrs ago",
    },
  ]);

  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (!newPost.trim()) return;

    setPosts([
      {
        id: Date.now(),
        author: "You",
        content: newPost,
        time: "Just now",
      },
      ...posts,
    ]);
    setNewPost("");
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* LEFT SIDEBAR */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm p-5 space-y-4">
            <h3 className="font-semibold text-slate-900">Topics</h3>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="hover:text-teal-600 cursor-pointer">
                📊 Market Discussion
              </li>
              <li className="hover:text-teal-600 cursor-pointer">
                📉 Options & Futures
              </li>
              <li className="hover:text-teal-600 cursor-pointer">
                🧠 Trading Psychology
              </li>
              <li className="hover:text-teal-600 cursor-pointer">
                📚 Learning & Doubts
              </li>
            </ul>
          </div>
        </aside>

        {/* FEED */}
        <main className="lg:col-span-6 space-y-6">

          {/* Dashboard Link */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-md hover:bg-teal-700 transition"
            >
              View My Dashboard →
            </Link>
          </div>

          {/* CREATE POST */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <textarea
              rows="3"
              placeholder="What's on your mind?"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <div className="flex justify-end mt-3">
              <button
                onClick={handlePost}
                className="rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white
                           hover:bg-teal-700 transition"
              >
                Post
              </button>
            </div>
          </div>

          {/* POSTS */}
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-sm p-5"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-900">
                  {post.author}
                </h4>
                <span className="text-xs text-slate-500">
                  {post.time}
                </span>
              </div>

              <p className="mt-3 text-slate-700 text-sm">
                {post.content}
              </p>

              <div className="mt-4 flex gap-6 text-sm text-slate-600">
                <button className="hover:text-teal-600">👍 Like</button>
                <button className="hover:text-teal-600">💬 Comment</button>
                <button className="hover:text-teal-600">↗ Share</button>
              </div>
            </div>
          ))}
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm p-5 space-y-4">
            <h3 className="font-semibold text-slate-900">Community Info</h3>

            <p className="text-sm text-slate-600">
              This is a learning-focused community. No tips or paid calls.
              Respect everyone’s views.
            </p>

            <div className="pt-3 border-t">
              <h4 className="text-sm font-semibold text-slate-900">
                Online Now
              </h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li>🟢 Trader A</li>
                <li>🟢 Market Learner</li>
                <li>🟢 Options Pro</li>
              </ul>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}