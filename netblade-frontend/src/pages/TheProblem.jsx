import { Link } from "react-router-dom";

export default function TheProblem() {
  return (
    <div className="w-full">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-red-900 via-slate-900 to-slate-800 pt-20 pb-24 animate-fade-in">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-8">⚠️</div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              The Problem
            </h1>
            
            <p className="text-2xl md:text-3xl italic text-white leading-relaxed max-w-3xl mx-auto animate-fade-in-up">
              Most traders don't fail because they lack intelligence. They fail because they're drowning 
              in noise, making emotional decisions, and lacking a structured approach to the markets.
            </p>
          </div>
        </div>
      </section>

      {/* THE CORE ISSUE */}
      <section className="bg-gradient-to-b from-stone-800 to-stone-900 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Why Traders Struggle
            </h2>
            <p className="text-xl italic text-amber-100 leading-relaxed mb-8 animate-fade-in">
              The financial markets are incredibly complex ecosystems filled with conflicting information, 
              emotional triggers, and countless variables. Every day, traders are bombarded with:
            </p>
            <ul className="space-y-4 text-xl italic text-amber-100">
              <li className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <span className="text-red-400 font-bold mt-1">•</span>
                <span><strong>Unverified tips</strong> from social media "gurus" promising quick riches</span>
              </li>
              <li className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <span className="text-red-400 font-bold mt-1">•</span>
                <span><strong>Conflicting predictions</strong> from analysts with opposing views</span>
              </li>
              <li className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <span className="text-red-400 font-bold mt-1">•</span>
                <span><strong>Sensational headlines</strong> designed to trigger fear or greed</span>
              </li>
              <li className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <span className="text-red-400 font-bold mt-1">•</span>
                <span><strong>Complex indicators</strong> that contradict each other</span>
              </li>
              <li className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <span className="text-red-400 font-bold mt-1">•</span>
                <span><strong>Overwhelming data</strong> with no clear framework for interpretation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* THE CONSEQUENCES */}
      <section className="bg-gradient-to-b from-stone-900 to-stone-800 py-20 border-t border-b border-stone-700/50">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            The Consequences of Market Noise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Emotional Decision Making</h3>
              <p className="text-slate-700 leading-relaxed">
                Without a clear framework, traders react emotionally to market movements—chasing rallies out of FOMO, 
                panic-selling during dips, and constantly second-guessing their strategy.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Inconsistent Results</h3>
              <p className="text-slate-700 leading-relaxed">
                One week you're profitable, the next you're down. Without consistency in approach, results become 
                unpredictable, making it impossible to build long-term wealth or confidence.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Capital Erosion</h3>
              <p className="text-slate-700 leading-relaxed">
                Poor risk management combined with emotional trading leads to preventable losses. Many traders 
                blow up accounts not from bad luck, but from bad habits and lack of discipline.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Analysis Paralysis</h3>
              <p className="text-slate-700 leading-relaxed">
                Too much information without a filter leads to overthinking. Traders watch dozens of indicators, 
                read countless opinions, and end up frozen—unable to execute when opportunities arise.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* THE ROOT CAUSE */}
      <section className="bg-gradient-to-b from-stone-800 to-stone-900 py-20 border-t border-b border-stone-700/50">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              The Root Cause: Lack of Structure
            </h2>
            
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
              <p className="text-lg text-amber-100 italic leading-relaxed mb-6">
                The fundamental issue isn't that markets are unpredictable or that information is unavailable. 
                The problem is that <span className="font-bold text-red-400">most traders don't have a systematic framework</span> for:
              </p>
              
              <div className="space-y-4 pl-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <p className="text-amber-100 italic">Filtering signal from noise</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <p className="text-amber-100 italic">Making decisions based on data, not emotion</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <p className="text-amber-100 italic">Managing risk appropriately for their capital</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <p className="text-amber-100 italic">Following a repeatable process regardless of market conditions</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <p className="text-amber-100 italic">Learning from mistakes in a structured way</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION TEASER */}
      <section className="bg-gradient-to-r from-stone-900 to-stone-800 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            We Understand This Problem
          </h2>
          <p className="text-xl italic text-amber-100 max-w-2xl mx-auto mb-10">
            That's why Netblade exists—to replace confusion with clarity, emotion with discipline, 
            and chaos with structure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/our-approach" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-8 py-4 text-white font-semibold hover:bg-teal-500 transition-all duration-300 shadow-lg hover:shadow-xl">
              See Our Approach
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link to="/" className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-white font-semibold hover:bg-white/10 transition-all duration-300">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
