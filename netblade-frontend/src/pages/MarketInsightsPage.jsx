import { Link } from "react-router-dom";

export default function MarketInsightsPage() {
  return (
    <div className="w-full">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-900 to-slate-800 pt-20 pb-24 animate-fade-in">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Market Insights
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Stay ahead with data-driven insights, real-time analysis, and expert perspectives. 
              We simplify complex market movements so you can make informed trading decisions with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* WHY INSIGHTS MATTER */}
      <section className="bg-white py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              Why Market Insights Are Critical
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Financial markets generate massive amounts of data every second—price movements, volume spikes, economic indicators, 
              news events, and sentiment shifts. <span className="font-semibold text-blue-600">Raw data alone is overwhelming</span>. 
              What traders truly need is <span className="font-semibold text-blue-600">actionable intelligence</span>—curated, 
              analyzed, and presented in a way that supports smarter decision-making.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              At Netblade, we transform market noise into clarity. Our insights help you understand trends, identify opportunities, 
              spot risks early, and align your trades with market momentum rather than fighting against it.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="bg-slate-50 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            What We Provide
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Insight 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover-lift border border-slate-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Index Analysis</h3>
              <p className="text-slate-600 leading-relaxed">
                Daily breakdowns of NIFTY 50, SENSEX, Bank NIFTY with support/resistance levels, trend direction, 
                and key zones to watch for potential reversals or breakouts.
              </p>
            </div>

            {/* Insight 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover-lift border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Options Chain Data</h3>
              <p className="text-slate-600 leading-relaxed">
                Track Open Interest changes, Put-Call Ratio (PCR), max pain levels, and option Greeks to understand 
                institutional positioning and predict short-term market direction.
              </p>
            </div>

            {/* Insight 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover-lift border border-slate-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sector Performance</h3>
              <p className="text-slate-600 leading-relaxed">
                Monitor which sectors are outperforming or underperforming. Identify rotation trends and understand 
                where institutional money is flowing for better portfolio allocation.
              </p>
            </div>

            {/* Insight 4 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover-lift border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Market Breadth</h3>
              <p className="text-slate-600 leading-relaxed">
                Analyze advance/decline ratios, new highs/lows, and volume trends to gauge overall market health 
                and confirm whether rallies or declines have broad participation.
              </p>
            </div>

            {/* Insight 5 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover-lift border border-slate-200">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">News & Events</h3>
              <p className="text-slate-600 leading-relaxed">
                Stay updated on earnings releases, policy announcements, economic data, and global events that 
                could trigger volatility or create trading opportunities.
              </p>
            </div>

            {/* Insight 6 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover-lift border border-slate-200">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Technical Setups</h3>
              <p className="text-slate-600 leading-relaxed">
                Curated chart patterns, breakout candidates, and key technical levels identified by our research team 
                to help you spot high-probability trade opportunities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* HOW WE DELIVER INSIGHTS */}
      <section className="bg-white py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              How We Deliver Insights
            </h2>
            
            <div className="space-y-8">
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Real-Time Updates</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Market conditions change quickly. Our insights are updated throughout the trading session so you're 
                    always working with the most current information, not yesterday's analysis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Visual Clarity</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We believe insights should be digestible at a glance. Charts, heatmaps, indicators, and infographics 
                    make complex data easy to understand and act upon without analysis paralysis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Commentary</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Numbers tell part of the story. Our research analysts provide context, interpretation, and actionable 
                    takeaways so you understand not just <em>what</em> is happening, but <em>why</em> it matters.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Personalized Alerts</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Set custom alerts for price levels, indicator signals, or specific market conditions. Get notified 
                    when opportunities align with your trading strategy so you never miss a setup.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="bg-slate-50 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              The Netblade Advantage
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Cut Through Noise</h3>
                  <p className="text-slate-600">Focus on what matters without drowning in irrelevant data.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Save Time</h3>
                  <p className="text-slate-600">Get hours of analysis delivered in minutes so you can act faster.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Reduce Bias</h3>
                  <p className="text-slate-600">Data-driven insights help you stay objective and avoid emotional decisions.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Increase Confidence</h3>
                  <p className="text-slate-600">Trade with conviction backed by solid research and analysis.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Access Premium Market Insights
          </h2>
          <p className="text-xl text-blue-50 max-w-2xl mx-auto mb-10">
            Join traders who rely on Netblade for clarity, speed, and actionable intelligence every trading day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/market" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-blue-600 font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore Market Data
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link to="/insights" className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-white font-semibold hover:bg-white/10 transition-all duration-300">
              View Today's Insights
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
