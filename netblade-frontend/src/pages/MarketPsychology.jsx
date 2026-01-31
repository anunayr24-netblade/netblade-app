import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function MarketPsychology() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/market-psychology' } });
    }
  }, [navigate]);
  const modules = [
    {
      id: 1,
      title: "What Is Market Psychology?",
      description: "Understanding the human element in markets",
      topics: [
        "Study of emotions, crowd behavior, and human thinking",
        "Markets move because of people, not just charts",
        "Fear & greed drive most price movements",
        "Price often moves before news comes"
      ]
    },
    {
      id: 2,
      title: "Emotions That Control Traders",
      description: "The primary emotions affecting trading decisions",
      topics: [
        "Fear - losing money, FOMO, holding losing trades",
        "Greed - overtrading, overleveraging, holding too long",
        "Hope & Regret - hoping for recovery, revenge trading",
        "How emotions destroy discipline and strategy"
      ]
    },
    {
      id: 3,
      title: "Common Psychological Traps",
      description: "Mental pitfalls that trap traders",
      topics: [
        "Overconfidence after winning trades",
        "Revenge trading to recover losses",
        "Confirmation bias - seeking supporting information",
        "Herd mentality - following the crowd blindly"
      ]
    },
    {
      id: 4,
      title: "Psychology vs Strategy",
      description: "Why mindset matters more than methods",
      topics: [
        "Bad strategy with good psychology can survive",
        "Good strategy with bad psychology will fail",
        "Discipline beats intelligence",
        "Consistency beats prediction"
      ]
    },
    {
      id: 5,
      title: "Emotional Cycle of a Trader",
      description: "The psychological journey of trading",
      topics: [
        "Optimism → Excitement → Euphoria",
        "Anxiety → Denial → Fear",
        "Desperation → Panic → Depression → Hope",
        "Where most traders lose money in the cycle"
      ]
    },
    {
      id: 6,
      title: "Building Strong Trading Psychology",
      description: "Developing mental resilience",
      topics: [
        "Rules-based trading - predefined entries/exits",
        "Risk control - fixed risk per trade",
        "Journaling - write every trade, learn from mistakes",
        "Discipline over emotions - follow system, not feelings"
      ]
    },
    {
      id: 7,
      title: "Psychology of Winning Traders",
      description: "Habits and mindset of successful traders",
      topics: [
        "Patience in waiting for setups",
        "Consistency in following the process",
        "Detachment from money - focus on process",
        "Long-term thinking over short-term gains"
      ]
    },
    {
      id: 8,
      title: "Practical Exercises",
      description: "Hands-on psychology development tools",
      topics: [
        "Emotion journal - track feelings during trades",
        "Loss acceptance exercise - embracing losses",
        "Risk simulation examples",
        "Mindfulness and meditation for traders"
      ]
    },
    {
      id: 9,
      title: "Common Myths to Break",
      description: "Debunking harmful trading beliefs",
      topics: [
        "More trades = more profit (myth)",
        "One big trade can change everything (myth)",
        "Experts never lose (myth)",
        "Trading is gambling (clarification)"
      ]
    },
    {
      id: 10,
      title: "Educational Disclaimer",
      description: "Important legal and educational notices",
      topics: [
        "Content for educational purposes only",
        "Not financial advice",
        "Individual results may vary",
        "Consult professionals for personal advice"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/learn"
            className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-4"
          >
            ← Back to Learn
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">
            Market Psychology
          </h1>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Master the most neglected yet crucial aspect of trading success. Learn how emotions,
            crowd behavior, and human psychology affect market movements. Develop the mental
            resilience needed to become a consistently profitable trader.
          </p>
        </div>

        {/* Course Overview */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Course Overview</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">10</div>
              <div className="text-sm text-slate-600">Modules</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">Essential</div>
              <div className="text-sm text-slate-600">Level</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">40+</div>
              <div className="text-sm text-slate-600">Topics</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">Mindset</div>
              <div className="text-sm text-slate-600">Focus</div>
            </div>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 shadow-sm mb-8 border border-pink-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Why Psychology Matters</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-pink-600 text-sm">🧠</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Human Factor</h3>
                <p className="text-sm text-slate-600">Markets are driven by people</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-pink-600 text-sm">🎭</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Emotional Control</h3>
                <p className="text-sm text-slate-600">Master fear and greed</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-pink-600 text-sm">🎯</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Discipline</h3>
                <p className="text-sm text-slate-600">Consistency over prediction</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-pink-600 text-sm">📈</span>
              </div>
              <div>
                <h3 className="font-medium text-slate-900">Long-term Success</h3>
                <p className="text-sm text-slate-600">Psychology enables profitability</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emotional Cycle */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">The Trader's Emotional Cycle</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {[
              "Optimism", "Excitement", "Euphoria", "Anxiety", "Denial",
              "Fear", "Desperation", "Panic", "Depression", "Hope"
            ].map((emotion, index) => (
              <div key={emotion} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  index < 3 ? 'bg-green-100 text-green-700' :
                  index < 6 ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {index + 1}
                </div>
                <span className="text-sm font-medium text-slate-700">{emotion}</span>
                {index < 9 && <span className="text-slate-400">→</span>}
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-center">
            Most traders lose money between stages 6-9. Learning to recognize and break this cycle is key to success.
          </p>
        </div>

        {/* Learning Path */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Psychology Mastery Path</h2>
          <div className="space-y-4">
            {modules.map((module) => (
              <div key={module.id} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-semibold text-sm">{module.id}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-slate-600 mb-3">{module.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="px-4 py-2 bg-pink-600 text-white text-sm font-medium rounded-md hover:bg-pink-700 transition">
                      Start Module
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">What You'll Achieve</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Emotional Intelligence</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Recognize emotional triggers</li>
                <li>• Control fear and greed</li>
                <li>• Break psychological traps</li>
                <li>• Develop mental resilience</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Trading Discipline</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Follow trading rules consistently</li>
                <li>• Accept losses without revenge</li>
                <li>• Maintain position sizing</li>
                <li>• Process over outcome focus</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Long-term Success</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Break the emotional cycle</li>
                <li>• Build winning trader habits</li>
                <li>• Journal and review trades</li>
                <li>• Sustainable trading mindset</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}