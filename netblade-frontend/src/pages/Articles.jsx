import { Link } from 'react-router-dom';

export default function Articles() {
  const articles = [
    {
      id: 1,
      title: "Understanding Market Cycles: From Bull to Bear",
      excerpt: "Learn how to identify and navigate different market phases to optimize your trading strategy.",
      category: "Market Analysis",
      readTime: "5 min read",
      date: "Jan 14, 2026",
      featured: true
    },
    {
      id: 2,
      title: "Risk Management: The Foundation of Successful Trading",
      excerpt: "Discover why risk management is more important than finding the perfect trading strategy.",
      category: "Risk Management",
      readTime: "7 min read",
      date: "Jan 12, 2026",
      featured: false
    },
    {
      id: 3,
      title: "Technical Analysis Basics: Reading Price Charts",
      excerpt: "Master the fundamentals of chart reading and technical indicators for better trading decisions.",
      category: "Technical Analysis",
      readTime: "6 min read",
      date: "Jan 10, 2026",
      featured: false
    },
    {
      id: 4,
      title: "Cryptocurrency Trading: Beyond the Hype",
      excerpt: "Navigate the crypto markets with proper risk management and fundamental analysis.",
      category: "Cryptocurrency",
      readTime: "8 min read",
      date: "Jan 8, 2026",
      featured: false
    },
    {
      id: 5,
      title: "Psychology of Trading: Mastering Your Emotions",
      excerpt: "Learn how to control fear, greed, and other emotions that affect trading performance.",
      category: "Psychology",
      readTime: "6 min read",
      date: "Jan 6, 2026",
      featured: false
    },
    {
      id: 6,
      title: "Options Trading Strategies for Beginners",
      excerpt: "Start with basic options strategies and understand the risks involved.",
      category: "Derivatives",
      readTime: "9 min read",
      date: "Jan 4, 2026",
      featured: false
    },
    {
      id: 7,
      title: "Building a Diversified Investment Portfolio",
      excerpt: "Learn how to allocate assets across different investment vehicles for optimal returns.",
      category: "Portfolio Management",
      readTime: "7 min read",
      date: "Jan 2, 2026",
      featured: false
    },
    {
      id: 8,
      title: "Understanding Commodity Markets",
      excerpt: "Explore the world of commodities trading and how global events affect prices.",
      category: "Commodities",
      readTime: "6 min read",
      date: "Dec 30, 2025",
      featured: false
    }
  ];

  const categories = ["All", "Market Analysis", "Technical Analysis", "Risk Management", "Cryptocurrency", "Psychology", "Derivatives", "Portfolio Management", "Commodities"];

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-slate-900">
            Articles
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl">
            In-depth articles, insights, and educational content to help you become a better trader
            and investor. Stay informed with the latest market analysis and trading strategies.
          </p>
        </div>

        {/* Featured Article */}
        {articles.find(article => article.featured) && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">Featured Article</h2>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              {(() => {
                const featured = articles.find(article => article.featured);
                return (
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">
                          {featured.category}
                        </span>
                        <span className="text-sm text-slate-500">{featured.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        {featured.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">{featured.date}</span>
                        <button className="px-6 py-2 bg-teal-600 text-white text-sm font-medium rounded-md hover:bg-teal-700 transition">
                          Read Article
                        </button>
                      </div>
                    </div>
                    <div className="md:w-80 h-48 bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-teal-600 text-6xl">📈</span>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm rounded-md hover:bg-teal-50 hover:border-teal-300 hover:text-teal-700 transition"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Latest Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.filter(article => !article.featured).map((article) => (
              <article key={article.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-500">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{article.date}</span>
                  <button className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6 text-teal-100">
            Get the latest articles and market insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-2 bg-white text-teal-600 font-medium rounded-md hover:bg-slate-50 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}