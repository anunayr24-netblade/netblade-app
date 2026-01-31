import { Link } from 'react-router-dom';
import CourseCard from "../components/CourseCard.jsx";

const courseData = [
  {
    title: "Market Foundations",
    description: "Complete guide to market structure, participants, regulatory bodies, supply & demand, asset classes, order types, and trading mechanics.",
    level: "Beginner",
    lessons: 11,
    color: "teal",
    animationDelay: "50",
    coursePath: "/market-foundations",
    topics: ["Market Structure", "Participants", "Regulatory Bodies", "Supply & Demand", "Asset Classes", "Order Types"],
    duration: "6 weeks"
  },
  {
    title: "Market Basics: Principles & Theories",
    description: "Master fundamental principles: Supply & Demand, EMH, Dow Theory, Modern Portfolio Theory, CAPM, Behavioral Finance, and more.",
    level: "Beginner",
    lessons: 12,
    color: "blue",
    animationDelay: "100",
    coursePath: "/market-basics-principles",
    topics: ["Supply & Demand", "Efficient Market Hypothesis", "Dow Theory", "Risk-Return Tradeoff", "Market Cycles", "Behavioral Finance"],
    duration: "5 weeks"
  },
  {
    title: "Technical Analysis",
    description: "Master chart reading, patterns, indicators, and trading strategies.",
    level: "Intermediate",
    lessons: 12,
    color: "green",
    animationDelay: "200",
    coursePath: "/technical-analysis",
    topics: ["Chart patterns", "Support & resistance", "Trend analysis", "Trading strategies"],
    duration: "6 weeks"
  },
  {
    title: "Risk Management",
    description: "Risk management, position sizing, and trader mindset.",
    level: "All Levels",
    lessons: 6,
    color: "red",
    animationDelay: "300",
    coursePath: "/risk-management",
    topics: ["Position sizing", "Risk/reward ratios", "Stop losses", "Portfolio management"],
    duration: "3 weeks"
  },
  {
    title: "Derivatives Trading",
    description: "Futures and options trading - F&O complete guide with strategies.",
    level: "Advanced",
    lessons: 15,
    color: "purple",
    animationDelay: "400",
    coursePath: "/derivatives",
    topics: ["Futures contracts", "Options strategies", "Greeks", "Advanced hedging"],
    duration: "8 weeks"
  },
  {
    title: "Cryptocurrency",
    description: "Digital currencies, blockchain, Bitcoin, Ethereum, and crypto trading.",
    level: "Intermediate",
    lessons: 10,
    color: "orange",
    animationDelay: "500",
    coursePath: "/cryptocurrency",
    topics: ["Blockchain basics", "Bitcoin & Ethereum", "Crypto wallets", "Trading altcoins"],
    duration: "5 weeks"
  },
  {
    title: "Market Psychology",
    description: "Emotions, fear & greed, discipline, and trader mindset development.",
    level: "All Levels",
    lessons: 9,
    color: "pink",
    animationDelay: "100",
    coursePath: "/market-psychology",
    topics: ["Behavioral finance", "Decision making", "Fear and greed", "Discipline"],
    duration: "4 weeks"
  },
  {
    title: "Bonds & Fixed Income",
    description: "Government bonds, corporate bonds, yields, and fixed income investing.",
    level: "Beginner",
    lessons: 7,
    color: "indigo",
    animationDelay: "200",
    coursePath: "/bonds",
    topics: ["Bond types", "Yield calculations", "Credit ratings", "Fixed income strategies"],
    duration: "3 weeks"
  },
  {
    title: "Mutual Funds",
    description: "SIP, equity funds, debt funds, portfolio building, and fund selection.",
    level: "Beginner",
    lessons: 11,
    color: "emerald",
    animationDelay: "300",
    coursePath: "/mutual-funds",
    topics: ["Fund types", "SIP strategy", "NAV calculation", "Fund selection"],
    duration: "5 weeks"
  },
  {
    title: "Commodities Trading",
    description: "Gold, oil, metals, agriculture - global commodity markets and trading.",
    level: "Intermediate",
    lessons: 8,
    color: "amber",
    animationDelay: "400",
    coursePath: "/commodities",
    topics: ["Commodity markets", "Hedging strategies", "Trading instruments", "Market analysis"],
    duration: "4 weeks"
  },
  {
    title: "Technical Indicators",
    description: "MACD, RSI, Bollinger Bands, Ichimoku - complete indicator guide.",
    level: "Intermediate",
    lessons: 14,
    color: "cyan",
    animationDelay: "500",
    coursePath: "/technical-indicators",
    topics: ["Momentum indicators", "Trend indicators", "Oscillators", "Advanced indicators"],
    duration: "7 weeks"
  },
  {
    title: "Bullish Reversal Patterns",
    description: "Master 11 powerful bullish candlestick patterns that signal trend reversals from bearish to bullish.",
    level: "Intermediate",
    lessons: 11,
    color: "green",
    animationDelay: "100",
    coursePath: "/bullish-reversal-patterns",
    topics: ["Hammer", "Morning Star", "Bullish Engulfing", "Three White Soldiers"],
    duration: "2 weeks"
  },
  {
    title: "Bearish Reversal Patterns",
    description: "Learn 10 essential bearish candlestick patterns that identify market tops and downward reversals.",
    level: "Intermediate",
    lessons: 10,
    color: "red",
    animationDelay: "200",
    coursePath: "/bearish-reversal-patterns",
    topics: ["Shooting Star", "Evening Star", "Bearish Engulfing", "Three Black Crows"],
    duration: "2 weeks"
  },
  {
    title: "Continuation Patterns",
    description: "Identify 10 continuation patterns that signal trend persistence after consolidation phases.",
    level: "Intermediate",
    lessons: 10,
    color: "blue",
    animationDelay: "300",
    coursePath: "/continuation-patterns",
    topics: ["Rising Three Methods", "Doji variations", "Windows/Gaps", "Three Line Strike"],
    duration: "2 weeks"
  },
  {
    title: "Special & Advanced Patterns",
    description: "Rare but powerful candlestick patterns including Island Reversals, Kickers, and complex formations.",
    level: "Advanced",
    lessons: 11,
    color: "purple",
    animationDelay: "400",
    coursePath: "/special-advanced-patterns",
    topics: ["Abandoned Baby", "Island Reversal", "Kicking patterns", "Marubozu"],
    duration: "2 weeks"
  },
  {
    title: "Advanced Strategies",
    description: "Complex trading strategies, arbitrage, and portfolio management.",
    level: "Advanced",
    lessons: 0,
    color: "slate",
    animationDelay: "200",
    coursePath: "/advanced-strategies",
    topics: ["Arbitrage", "Spread trading", "Statistical trading", "Portfolio optimization"],
    duration: "Coming Soon"
  }
];
export default function Learn() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4 md:px-8 lg:px-16 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center animate-fade-in">
          {/* Decorative Badge */}
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-300 rounded-full text-sm font-semibold border border-teal-500/30">
              <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
              Master Trading & Investing
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Learn <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Trading</span> & <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Investing</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            Structured learning content to help you understand markets, trading, and investing from basics to advanced concepts. Master the skills you need to succeed in modern financial markets.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto mb-10">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-3 sm:p-4 shadow-lg border border-slate-600/50">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">15</div>
              <div className="text-xs font-semibold text-slate-400 mt-2">Courses</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-3 sm:p-4 shadow-lg border border-slate-600/50">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">100+</div>
              <div className="text-xs font-semibold text-slate-400 mt-2">Topics</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-3 sm:p-4 shadow-lg border border-slate-600/50">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">30+</div>
              <div className="text-xs font-semibold text-slate-400 mt-2">Hours</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>📊</span>
              View My Progress
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Section Title */}
        <div className="mb-12 text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Choose Your Learning Path
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Learning Modules Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courseData.map((course, idx) => (
            <CourseCard
              key={course.title}
              {...course}
              animationDelay={idx * 0.05}
            />
          ))}
        </div>
      </div>
    </div>
  );
}