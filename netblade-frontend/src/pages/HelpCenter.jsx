import { Link } from 'react-router-dom';

export default function HelpCenter() {
  const faqs = [
    {
      question: "How do I get started with trading?",
      answer: "Begin with our Learn section to understand market basics, then practice with paper trading before risking real money."
    },
    {
      question: "What is the difference between stocks and derivatives?",
      answer: "Stocks represent ownership in a company, while derivatives derive their value from underlying assets like stocks, commodities, or indices."
    },
    {
      question: "How do I manage risk in trading?",
      answer: "Always use stop-loss orders, never risk more than 1-2% of your capital per trade, and maintain a diversified portfolio."
    },
    {
      question: "What are the trading hours for Indian markets?",
      answer: "Equity markets: 9:15 AM to 3:30 PM IST. Derivatives: 9:15 AM to 3:30 PM IST. Currency derivatives: 9:00 AM to 5:00 PM IST."
    },
    {
      question: "How do I calculate position size?",
      answer: "Position Size = (Risk Amount) / (Entry Price - Stop Loss Price). Never risk more than 1% of your capital per trade."
    },
    {
      question: "What is technical analysis?",
      answer: "Technical analysis studies price movements and trading volume to identify patterns and predict future price movements."
    }
  ];

  const topics = [
    {
      title: "Getting Started",
      icon: "🚀",
      description: "New to trading? Start here with the basics.",
      links: ["Account Setup", "Market Basics", "First Trade"]
    },
    {
      title: "Trading Fundamentals",
      icon: "📊",
      description: "Learn essential trading concepts and strategies.",
      links: ["Technical Analysis", "Risk Management", "Position Sizing"]
    },
    {
      title: "Advanced Topics",
      icon: "🎯",
      description: "Deep dive into complex trading strategies.",
      links: ["Options Trading", "Futures Trading", "Portfolio Management"]
    },
    {
      title: "Market Psychology",
      icon: "🧠",
      description: "Master the mental aspects of trading.",
      links: ["Emotional Control", "Discipline", "Trading Journal"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-slate-900">
            Help Center
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Find answers to common questions and get help with your trading journey.
            Browse our comprehensive guides and tutorials.
          </p>
        </div>

        {/* Search */}
        <div className="mb-12">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-4 py-3 pl-12 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <div className="absolute left-4 top-3.5 text-slate-400">
                🔍
              </div>
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8">Browse by Topic</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
                <div className="text-3xl mb-4">{topic.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{topic.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{topic.description}</p>
                <ul className="space-y-1">
                  {topic.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-teal-600 hover:text-teal-700 text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="mb-6 text-teal-100">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-teal-600 font-medium rounded-md hover:bg-slate-50 transition"
            >
              Contact Support
            </Link>
            <Link
              to="/community"
              className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-teal-600 transition"
            >
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}