import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import frameworkImage from "../assets/framework-education.jpg";

export default function OurApproach() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "It's Repeatable",
      description: "A clear process can be followed consistently, leading to predictable behavior and measurable improvement over time. When you have a structured framework, you don't need to reinvent your approach daily—you simply execute the same proven steps with discipline. This consistency allows you to track what works, refine your edge, and build confidence through repetition. Over months and years, a repeatable process compounds into mastery, turning trading from a gamble into a craft."
    },
    {
      title: "It's Objective",
      description: "Data-driven decisions remove emotional bias, helping you stay rational during volatile market conditions. Markets trigger powerful emotions—fear during crashes, greed during rallies. But objective analysis based on price action, volume, and technical indicators keeps you grounded. You follow signals, not sentiments. This objectivity protects you from impulsive trades and helps you maintain discipline when others panic. Logic beats emotion every time in the long run."
    },
    {
      title: "It's Scalable",
      description: "Whether you're trading ₹10,000 or ₹10,00,000, the principles remain the same. Good habits scale with capital. Risk management rules, position sizing formulas, and entry/exit criteria work at every account size. As your capital grows, your strategy adapts proportionally without needing fundamental changes. This scalability means you can start small, prove your method, and confidently increase size as you gain experience—knowing your foundation is solid."
    },
    {
      title: "It's Proven",
      description: "Our approach is based on decades of market research, behavioral finance studies, and input from successful traders worldwide. We don't teach unverified theories or trendy hacks—our framework combines timeless principles tested across bull markets, bear markets, and everything in between. Technical analysis, risk management, and trading psychology have been refined by professionals for generations. You benefit from this collective wisdom without having to learn every lesson the hard way."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-teal-900 via-slate-900 to-slate-800 pt-20 pb-24 animate-fade-in">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-8">🧭</div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Our Approach
            </h1>
            
            <p className="text-2xl md:text-3xl italic text-white leading-relaxed max-w-3xl mx-auto animate-fade-in-up">
              We focus on how markets behave, how risk should be controlled, and how decisions should be 
              structured—not on shortcuts, tips, or predictions.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-gradient-to-b from-stone-800 to-stone-900 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Process Over Prediction
            </h2>
            <p className="text-xl italic text-amber-100 leading-relaxed mb-8 animate-fade-in">
              At Netblade, we don't promise to predict the market. We don't sell magic indicators or guaranteed 
              strategies. Instead, we focus on building <span className="font-semibold text-teal-400">sustainable trading habits</span> rooted in:
            </p>
            <ul className="space-y-4 text-xl italic text-amber-100">
              <li className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <span className="text-teal-400 font-bold mt-1">✓</span>
                <span><strong>Understanding market structure</strong> and how price moves in different conditions</span>
              </li>
              <li className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <span className="text-teal-400 font-bold mt-1">✓</span>
                <span><strong>Risk management principles</strong> that protect capital first and grow it second</span>
              </li>
              <li className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <span className="text-teal-400 font-bold mt-1">✓</span>
                <span><strong>Systematic decision-making</strong> that removes emotion from the equation</span>
              </li>
              <li className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <span className="text-teal-400 font-bold mt-1">✓</span>
                <span><strong>Evidence-based strategies</strong> backed by data, not hype</span>
              </li>
              <li className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <span className="text-teal-400 font-bold mt-1">✓</span>
                <span><strong>Continuous learning</strong> and adapting to changing market conditions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* OUR FRAMEWORK */}
      <section className="bg-gradient-to-b from-stone-900 to-stone-800 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            The Netblade Framework
          </h2>
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            
            {/* LEFT - Framework Steps */}
            <div className="space-y-8">
            
            {/* Step 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-teal-600">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-teal-600">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Education First</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Before placing a single trade, we ensure you understand the fundamentals: how markets work, 
                    what drives price movements, common patterns, and the psychology behind winning and losing trades.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    We provide structured courses, video tutorials, and detailed articles that build knowledge 
                    progressively—from beginner concepts to advanced strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-600">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Data-Driven Analysis</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We deliver actionable market insights based on real data: index trends, options chain analysis, 
                    sector rotation, volatility metrics, and technical setups—all presented in a clear, digestible format.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Our research team filters the noise so you can focus on what matters. No sensational headlines, 
                    just objective analysis backed by evidence.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-purple-600">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-purple-600">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Risk-First Mentality</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Every strategy we teach prioritizes capital preservation. You'll learn position sizing, 
                    stop-loss placement, portfolio diversification, and how to calculate risk-reward ratios before entering any trade.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Profitable traders manage risk first and chase profits second. We instill this discipline from day one.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-orange-600">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-orange-600">4</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Systematic Execution</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We help you develop a repeatable trading process: identifying setups, confirming signals, 
                    managing positions, and reviewing outcomes. Consistency comes from following a system, not from luck.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    With structured checklists, journaling templates, and performance tracking, you'll know exactly 
                    what to do in every market scenario.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-green-600">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-green-600">5</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Community Support</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Trading can be isolating. Our community connects you with like-minded traders, mentors, and 
                    experts who share insights, challenge assumptions, and provide accountability.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Learn from others' successes and mistakes, discuss strategies, and build confidence through 
                    collective knowledge and mutual support.
                  </p>
                </div>
              </div>
            </div>

            </div>

            {/* RIGHT - Image */}
            <div className="lg:sticky lg:top-24">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-stone-600/50 hover:shadow-3xl transition-all duration-300">
                <img
                  src={frameworkImage}
                  alt="Education and Learning - Netblade Framework"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY IT WORKS */}
      <section className="bg-gradient-to-b from-stone-900 to-stone-800 py-20 border-t border-b border-stone-700/50">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Why This Approach Works
            </h2>
            
            {/* Carousel Container */}
            <div className="relative">
              
              {/* Slide */}
              <div className="bg-slate-900 rounded-2xl p-12 border border-slate-700 shadow-2xl min-h-[400px] flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-white mb-6 animate-fade-in">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-xl text-slate-300 leading-relaxed animate-fade-in">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-3 mt-8">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-teal-500 w-8' 
                        : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrow Navigation */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Trade with Structure?
          </h2>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-10">
            Join traders who have replaced guesswork with discipline, emotion with strategy, and confusion with clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/our-belief" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-teal-600 font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              See Our Belief
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link to="/learn" className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-white font-semibold hover:bg-white/10 transition-all duration-300">
              Start Learning
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
