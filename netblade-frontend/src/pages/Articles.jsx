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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4 md:px-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Articles
          </h1>
          <p className="mt-3 text-slate-400 max-w-2xl leading-relaxed">
            In-depth articles, insights, and educational content to help you become a better trader
            and investor. Stay informed with the latest market analysis and trading strategies.
          </p>
        </div>

        {/* Featured Article */}
        {articles.find(article => article.featured) && (
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 md:p-8 shadow-2xl border border-teal-500/30 backdrop-blur-sm hover:shadow-2xl hover:border-teal-500/50 transition-all duration-300">
              {(() => {
                const featured = articles.find(article => article.featured);
                return (
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-300 text-xs font-bold rounded-full border border-teal-500/30">
                          {featured.category}
                        </span>
                        <span className="text-xs text-slate-400">{featured.readTime}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {featured.title}
                      </h3>
                      <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <span className="text-sm text-slate-400">{featured.date}</span>
                        <button className="px-6 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                          Read More →
                        </button>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                      <div className="w-40 h-40 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-2xl border border-teal-500/30 flex items-center justify-center text-6xl">
                        📰
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Categories */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-bold text-white mb-6">Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-slate-800 border border-slate-600/50 text-slate-300 text-sm font-medium rounded-lg hover:bg-slate-700 hover:border-teal-500/50 hover:text-teal-300 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-2xl font-bold text-white mb-6">Latest Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.filter(article => !article.featured).map((article, idx) => (
              <article 
                key={article.id} 
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 shadow-xl border border-slate-600/50 hover:shadow-2xl hover:border-teal-500/30 transition-all duration-300 group"
                style={{ animationDelay: `${0.3 + idx * 0.05}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-300 text-xs font-bold rounded-full border border-teal-500/20">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-teal-300 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-600/30">
                  <span className="text-xs text-slate-500">{article.date}</span>
                  <button className="text-teal-400 hover:text-teal-300 text-sm font-bold transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-teal-600/20 to-blue-600/20 rounded-2xl p-8 text-white text-center border border-teal-500/30 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">Stay Updated</h2>
          <p className="mb-6 text-slate-300 max-w-xl mx-auto">
            Get the latest articles and market insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-600/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}