import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function MarketBasicsPrinciples() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/market-basics-principles' } });
    }
  }, [navigate]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
              📚 Foundational Knowledge
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Market Basics: Principles & Theories
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Master fundamental market principles, economic theories, and core concepts that drive financial markets worldwide
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg mb-8">
          <h3 className="font-semibold text-slate-900 mb-4">Quick Navigation:</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 text-sm">
            <a href="#supply-demand" className="text-blue-600 hover:text-blue-800 hover:underline">→ Supply & Demand</a>
            <a href="#efficient-market" className="text-blue-600 hover:text-blue-800 hover:underline">→ Efficient Market Hypothesis</a>
            <a href="#dow-theory" className="text-blue-600 hover:text-blue-800 hover:underline">→ Dow Theory</a>
            <a href="#random-walk" className="text-blue-600 hover:text-blue-800 hover:underline">→ Random Walk Theory</a>
            <a href="#modern-portfolio" className="text-blue-600 hover:text-blue-800 hover:underline">→ Modern Portfolio Theory</a>
            <a href="#capital-asset" className="text-blue-600 hover:text-blue-800 hover:underline">→ Capital Asset Pricing Model</a>
            <a href="#behavioral-finance" className="text-blue-600 hover:text-blue-800 hover:underline">→ Behavioral Finance</a>
            <a href="#elliott-wave" className="text-blue-600 hover:text-blue-800 hover:underline">→ Elliott Wave Theory</a>
            <a href="#risk-return" className="text-blue-600 hover:text-blue-800 hover:underline">→ Risk-Return Tradeoff</a>
            <a href="#market-cycles" className="text-blue-600 hover:text-blue-800 hover:underline">→ Market Cycles</a>
            <a href="#arbitrage" className="text-blue-600 hover:text-blue-800 hover:underline">→ Arbitrage Pricing Theory</a>
            <a href="#liquidity" className="text-blue-600 hover:text-blue-800 hover:underline">→ Liquidity Theory</a>
          </div>
        </div>

        <div className="space-y-8">

          {/* 1. Supply and Demand */}
          <div id="supply-demand" className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
            <div className="border-l-4 border-blue-500 pl-4 sm:pl-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">1. Supply and Demand Principle</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Core Concept</h3>
                <p className="text-slate-700 mb-4">
                  The most fundamental principle in economics and markets: <strong>price is determined by the interaction between supply (sellers) and demand (buyers)</strong>. When demand exceeds supply, prices rise. When supply exceeds demand, prices fall. This law governs all free markets—stocks, commodities, currencies, real estate.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-5 border-2 border-green-200">
                    <h4 className="font-semibold text-green-900 mb-3">📈 High Demand Scenario</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>More Buyers Than Sellers:</strong> Competition drives prices up</li>
                      <li><strong>Scarcity Premium:</strong> Limited supply increases value</li>
                      <li><strong>Bull Market:</strong> Rising prices attract more buyers</li>
                      <li><strong>Example:</strong> IPO oversubscription, tech stock rallies</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
                    <h4 className="font-semibold text-red-900 mb-3">📉 High Supply Scenario</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>More Sellers Than Buyers:</strong> Excess supply pressures prices down</li>
                      <li><strong>Oversupply:</strong> Too many sellers, not enough demand</li>
                      <li><strong>Bear Market:</strong> Falling prices trigger panic selling</li>
                      <li><strong>Example:</strong> Market crashes, profit-taking waves</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">🎯 Trading Application</h4>
                <p className="text-sm text-slate-700">
                  <strong>Support zones = high demand areas</strong> where buyers historically step in. <strong>Resistance zones = high supply areas</strong> where sellers dominate. Price moves from one equilibrium to another seeking balance. Volume confirms strength—high volume at support/resistance validates the zone.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Efficient Market Hypothesis (EMH) */}
          <div id="efficient-market" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">2. Efficient Market Hypothesis (EMH)</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-purple-700 mb-3">Core Concept</h3>
                <p className="text-slate-700 mb-4">
                  Developed by Eugene Fama (1970), EMH states: <strong>Asset prices fully reflect all available information</strong>. Markets are "efficient" meaning it's impossible to consistently beat the market because prices instantly incorporate news, earnings, and data. Three forms exist: Weak, Semi-Strong, and Strong.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">Weak Form EMH</h4>
                    <p className="text-sm text-slate-700 mb-2">
                      Prices reflect all <strong>past market data</strong> (historical prices, volume). Technical analysis cannot beat market.
                    </p>
                    <p className="text-xs text-purple-700 font-semibold">Implication: Chart patterns useless</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">Semi-Strong Form</h4>
                    <p className="text-sm text-slate-700 mb-2">
                      Prices reflect all <strong>publicly available information</strong> (news, financials, announcements). Fundamental analysis cannot beat market.
                    </p>
                    <p className="text-xs text-purple-700 font-semibold">Implication: News instantly priced in</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">Strong Form EMH</h4>
                    <p className="text-sm text-slate-700 mb-2">
                      Prices reflect <strong>ALL information</strong> including insider/private data. No one can beat market, even with insider info.
                    </p>
                    <p className="text-xs text-purple-700 font-semibold">Implication: Perfect efficiency</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">⚖️ Reality Check</h4>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Criticism:</strong> EMH challenged by market anomalies (momentum, value premium), behavioral biases, and existence of successful active managers (Warren Buffett). Markets often overreact/underreact to news. <strong>Behavioral Finance</strong> emerged to explain these inefficiencies.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Trading Reality:</strong> Markets are efficient most of the time, but temporary inefficiencies create opportunities. High-frequency trading makes markets more efficient minute-by-minute.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Dow Theory */}
          <div id="dow-theory" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-green-500 pl-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">3. Dow Theory</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-green-700 mb-3">Core Concept</h3>
                <p className="text-slate-700 mb-4">
                  Created by Charles Dow (1900s), founder of Dow Jones & Company. <strong>Foundation of technical analysis</strong>. Six key principles explain market behavior, trends, and confirmation signals. Dow believed markets move in trends and these trends can be identified and confirmed.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-900 mb-2">Principle 1: Markets Discount Everything</h4>
                    <p className="text-sm text-slate-700">
                      All known information (earnings, politics, disasters, sentiment) is already reflected in prices. Price action reflects the sum of all knowledge.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-900 mb-2">Principle 2: Three Trend Types</h4>
                    <p className="text-sm text-slate-700">
                      <strong>Primary Trend</strong> (1+ years, major direction), <strong>Secondary Trend</strong> (3 weeks-3 months, corrections), <strong>Minor Trend</strong> ({'<'} 3 weeks, noise). Focus on primary trend—"the tide."
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-900 mb-2">Principle 3: Primary Trends Have Three Phases</h4>
                    <p className="text-sm text-slate-700">
                      <strong>Bull Market:</strong> Accumulation (smart money), Public Participation (momentum), Excess (euphoria). <strong>Bear Market:</strong> Distribution, Public Participation (panic), Despair.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-900 mb-2">Principle 4: Indices Must Confirm</h4>
                    <p className="text-sm text-slate-700">
                      For trend validity, Dow Jones Industrial and Transportation must confirm each other. Both must make new highs (bull) or lows (bear) together. Divergence = warning.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-900 mb-2">Principle 5: Volume Confirms Trend</h4>
                    <p className="text-sm text-slate-700">
                      Volume should expand in trend direction. Rising prices + rising volume = healthy uptrend. Falling prices + rising volume = strong downtrend. Low volume warnings = weak trend.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-900 mb-2">Principle 6: Trends Persist Until Reversal Signal</h4>
                    <p className="text-sm text-slate-700">
                      Trend in effect until definitive reversal confirmed. Don't fight trend on mere suspicion. Requires clear break of structure (lower highs in uptrend, higher lows in downtrend).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📊 Modern Application</h4>
                <p className="text-sm text-slate-700">
                  Dow Theory remains foundational today. Concepts like trend following, volume analysis, confirmation, and market phases directly influence modern technical analysis and algorithmic trading strategies.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Random Walk Theory */}
          <div id="random-walk" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-orange-500 pl-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">4. Random Walk Theory</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-orange-700 mb-3">Core Concept</h3>
                <p className="text-slate-700 mb-4">
                  Popularized by Burton Malkiel's "A Random Walk Down Wall Street" (1973). Theory states: <strong>Stock price changes are random and unpredictable</strong>. Future prices cannot be predicted from past prices because price movements are independent, like a "random walk." Past performance doesn't predict future returns.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-orange-50 rounded-lg p-5 border-2 border-orange-200">
                    <h4 className="font-semibold text-orange-900 mb-3">Key Arguments</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Independence:</strong> Today's price change unrelated to yesterday's</li>
                      <li><strong>Information Efficiency:</strong> News instantly incorporated</li>
                      <li><strong>No Patterns:</strong> Perceived patterns are coincidence</li>
                      <li><strong>Unpredictability:</strong> Technical/fundamental analysis futile</li>
                      <li><strong>Solution:</strong> Buy-and-hold index funds</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-5 border-2 border-orange-200">
                    <h4 className="font-semibold text-orange-900 mb-3">Evidence Against</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Momentum:</strong> Stocks with strong performance continue</li>
                      <li><strong>Mean Reversion:</strong> Extreme prices return to average</li>
                      <li><strong>Seasonality:</strong> January effect, week-day patterns</li>
                      <li><strong>Anomalies:</strong> Value stocks outperform growth long-term</li>
                      <li><strong>Behavioral Biases:</strong> Predictable human errors</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">🎲 Practical Implication</h4>
                <p className="text-sm text-slate-700">
                  <strong>For Passive Investors:</strong> Random Walk supports index investing—don't try to time market. <strong>For Active Traders:</strong> Short-term inefficiencies and behavioral patterns create exploitable edges despite overall randomness. Market is semi-random, not purely random.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Modern Portfolio Theory (MPT) */}
          <div id="modern-portfolio" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-teal-500 pl-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">5. Modern Portfolio Theory (MPT)</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-teal-700 mb-3">Core Concept</h3>
                <p className="text-slate-700 mb-4">
                  Developed by Harry Markowitz (1952, Nobel Prize 1990). <strong>Investors can construct optimal portfolios to maximize returns for given risk level through diversification</strong>. Key insight: Don't evaluate assets in isolation—evaluate how they interact within portfolio. Correlation between assets reduces overall portfolio risk.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-teal-50 rounded-lg p-5 border-2 border-teal-200">
                    <h4 className="font-semibold text-teal-900 mb-3">Core Principles</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Risk-Return Tradeoff:</strong> Higher returns require accepting higher risk</li>
                      <li><strong>Diversification Benefit:</strong> Portfolio of uncorrelated assets reduces volatility without sacrificing returns</li>
                      <li><strong>Efficient Frontier:</strong> Curve showing optimal portfolios offering maximum return for given risk level</li>
                      <li><strong>Systematic vs Unsystematic Risk:</strong> Diversification eliminates unsystematic (company-specific) risk but not systematic (market) risk</li>
                      <li><strong>Mathematical Optimization:</strong> Uses expected returns, standard deviations, correlations to find optimal weightings</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">✅ MPT Strengths</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Quantifies diversification benefits</li>
                      <li>• Objective portfolio construction framework</li>
                      <li>• Reduces emotional decision-making</li>
                      <li>• Foundation for robo-advisors</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-red-900 mb-2">⚠️ MPT Limitations</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Assumes normal distribution (ignores black swans)</li>
                      <li>• Based on historical data (past ≠ future)</li>
                      <li>• Correlations change during crises (all go to 1)</li>
                      <li>• Doesn't account for transaction costs, taxes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">💼 Practical Application</h4>
                <p className="text-sm text-slate-700">
                  MPT guides asset allocation: mix stocks, bonds, commodities, real estate to optimize returns. Example: 60/40 stock/bond portfolio balances growth and stability. Rebalancing maintains target weightings as markets shift.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Capital Asset Pricing Model (CAPM) */}
          <div id="capital-asset" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-indigo-500 pl-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">6. Capital Asset Pricing Model (CAPM)</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">Core Concept</h3>
                <p className="text-slate-700 mb-4">
                  Developed by William Sharpe, John Lintner, Jack Treynor (1960s). CAPM describes relationship between <strong>systematic risk and expected return</strong>. Formula: <strong>Expected Return = Risk-Free Rate + Beta × (Market Return - Risk-Free Rate)</strong>. Beta measures stock's sensitivity to market movements.
                </p>
                
                <div className="bg-indigo-50 rounded-xl p-6 mb-6 border-2 border-indigo-200">
                  <h4 className="font-semibold text-indigo-900 mb-4 text-lg">CAPM Formula Breakdown</h4>
                  <div className="space-y-3 text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-indigo-700 min-w-[120px]">Risk-Free Rate:</span>
                      <span>Return on government bonds (₹-denominated: Indian G-Sec yields ~7%). Baseline return with zero risk.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-indigo-700 min-w-[120px]">Beta (β):</span>
                      <span>Measures volatility vs market. β = 1 (moves with market), β {' > '} 1 (more volatile), β {'<'} 1 (less volatile). Example: Tech stock β = 1.5.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-indigo-700 min-w-[120px]">Market Return:</span>
                      <span>Expected return of broad market index (Nifty 50, Sensex). Historical average ~12-15% in India.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-indigo-700 min-w-[120px]">Risk Premium:</span>
                      <span>(Market Return - Risk-Free Rate). Compensation for taking market risk. India: ~5-8%.</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded mb-6">
                  <h4 className="font-semibold text-slate-900 mb-2">📐 Example Calculation</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    <strong>Stock X:</strong> Beta = 1.3, Risk-Free Rate = 7%, Market Return = 14%
                  </p>
                  <p className="text-sm text-slate-700 mb-2">
                    <strong>Expected Return = 7% + 1.3 × (14% - 7%) = 7% + 9.1% = 16.1%</strong>
                  </p>
                  <p className="text-sm text-slate-700">
                    Stock X should return 16.1% annually to compensate for its higher volatility (Beta 1.3) vs market.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">⚠️ CAPM Criticism</h4>
                <p className="text-sm text-slate-700">
                  <strong>Assumptions too simplistic:</strong> Single-period model, investors only care about mean and variance, no transaction costs. <strong>Beta instability:</strong> Historical beta may not predict future. <strong>Fama-French model</strong> adds size and value factors to improve accuracy.
                </p>
              </div>
            </div>
          </div>

          {/* 7. Behavioral Finance Theory */}
          <div id="behavioral-finance" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-pink-500 pl-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">7. Behavioral Finance Theory</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-pink-700 mb-3">Core Concept</h3>
                <p className="text-slate-700 mb-4">
                  Pioneered by Daniel Kahneman and Amos Tversky (Kahneman won Nobel 2002). <strong>Investors are NOT rational</strong>. Psychological biases, emotions, and cognitive errors systematically affect financial decisions, creating market anomalies and opportunities. Challenges EMH and rational actor assumptions.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-pink-50 rounded-lg p-4 border-2 border-pink-200">
                    <h4 className="font-semibold text-pink-900 mb-3">Common Cognitive Biases</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Loss Aversion:</strong> Pain of losing {'>'} joy of equivalent gain (2.5x stronger). Leads to holding losers too long.</li>
                      <li><strong>Confirmation Bias:</strong> Seek info confirming existing beliefs, ignore contradictions. Echo chambers.</li>
                      <li><strong>Anchoring:</strong> Over-rely on first info received. Initial price becomes mental anchor.</li>
                      <li><strong>Overconfidence:</strong> Overestimate abilities, underestimate risks. Excessive trading.</li>
                      <li><strong>Recency Bias:</strong> Weight recent events too heavily. "This time is different."</li>
                    </ul>
                  </div>
                  
                  <div className="bg-pink-50 rounded-lg p-4 border-2 border-pink-200">
                    <h4 className="font-semibold text-pink-900 mb-3">Market Manifestations</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Herd Behavior:</strong> Following crowd, FOMO drives bubbles (Crypto 2021, Dot-com 2000).</li>
                      <li><strong>Disposition Effect:</strong> Selling winners too early, holding losers hoping for recovery.</li>
                      <li><strong>Mental Accounting:</strong> Treating money differently based on source (windfall vs salary).</li>
                      <li><strong>Availability Bias:</strong> Recent dramatic events feel more likely (plane crash vs car crash).</li>
                      <li><strong>Representativeness:</strong> Extrapolate small samples. "Hot hand" fallacy.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">🧠 Trading Applications</h4>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Contrarian Strategies:</strong> Exploit herd behavior by buying fear, selling greed. <strong>Systematic Rules:</strong> Pre-defined entry/exit removes emotional decisions. <strong>Self-Awareness:</strong> Recognize your biases to counteract them. <strong>Momentum Trading:</strong> Ride overconfidence and herding trends until exhaustion.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Market Anomalies Explained:</strong> January Effect (tax-loss selling), Monday Effect (weekend pessimism), Earnings Drift (underreaction to news) all stem from behavioral patterns.
                </p>
              </div>
            </div>
          </div>

          {/* 8. Elliott Wave Theory */}
          <div id="elliott-wave" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-cyan-500 pl-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">8. Elliott Wave Theory</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-cyan-700 mb-3">Core Concept</h3>
                <p className="text-slate-700 mb-4">
                  Developed by Ralph Nelson Elliott (1930s). Markets move in <strong>repetitive patterns or "waves"</strong> driven by investor psychology oscillating between optimism and pessimism. <strong>5-wave pattern in trend direction (impulse), 3-wave pattern against trend (correction)</strong>. Waves nest within larger waves (fractal structure).
                </p>
                
                <div className="bg-cyan-50 rounded-xl p-6 mb-6 border-2 border-cyan-200">
                  <h4 className="font-semibold text-cyan-900 mb-4">5-3 Wave Structure</h4>
                  <div className="space-y-3 text-sm text-slate-700">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-bold text-cyan-800 mb-2">Impulse Waves (5-wave):</p>
                        <ul className="space-y-1">
                          <li><strong>Wave 1:</strong> Initial move (often weak, accumulation)</li>
                          <li><strong>Wave 2:</strong> Correction (retraces 50-62% of Wave 1)</li>
                          <li><strong>Wave 3:</strong> Strongest wave (never shortest, volume highest)</li>
                          <li><strong>Wave 4:</strong> Consolidation (less deep than Wave 2)</li>
                          <li><strong>Wave 5:</strong> Final push (often with divergence)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold text-cyan-800 mb-2">Corrective Waves (3-wave):</p>
                        <ul className="space-y-1">
                          <li><strong>Wave A:</strong> Initial decline, often mistaken for pullback</li>
                          <li><strong>Wave B:</strong> Counter-trend rally (false hope)</li>
                          <li><strong>Wave C:</strong> Final decline (5 sub-waves, capitulation)</li>
                        </ul>
                        <p className="text-xs text-slate-600 mt-2">Then cycle repeats at higher degree</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded mb-6">
                  <h4 className="font-semibold text-slate-900 mb-2">📏 Fibonacci Relationships</h4>
                  <p className="text-sm text-slate-700">
                    Elliott waves often follow Fibonacci ratios: Wave 2 retraces 61.8% of Wave 1, Wave 3 extends 1.618x Wave 1, Wave 4 retraces 38.2% of Wave 3, Wave 5 = Wave 1 length. Wave C often 1.618x Wave A. These ratios provide target projections.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">⚠️ Practical Challenges</h4>
                <p className="text-sm text-slate-700">
                  <strong>Highly Subjective:</strong> Multiple valid wave counts possible. Wave identification requires practice. <strong>Real-time difficulty:</strong> Clear in hindsight, ambiguous live. <strong>Best Use:</strong> Combine with other tools (indicators, support/resistance) for confirmation. Useful for understanding market psychology cycles.
                </p>
              </div>
            </div>
          </div>

          {/* 9. Risk-Return Tradeoff */}
          <div id="risk-return" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-red-500 pl-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">9. Risk-Return Tradeoff Principle</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-700 mb-3">Core Concept</h3>
                <p className="text-slate-700 mb-4">
                  Fundamental investment principle: <strong>Higher potential returns require accepting higher risk</strong>. No free lunch in markets. Low-risk assets (government bonds) offer low returns. High-risk assets (penny stocks, crypto) offer potential for high returns but also high losses. Risk = uncertainty of outcomes.
                </p>
                
                <div className="bg-gradient-to-r from-green-50 to-red-50 rounded-xl p-6 mb-6 border-2 border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-4">Risk-Return Spectrum</h4>
                  <div className="space-y-2 text-sm text-slate-700">
                    <div className="flex justify-between items-center p-3 bg-green-100 rounded">
                      <span className="font-semibold">Savings Account / FDs</span>
                      <span className="text-green-700">Low Risk → 5-7% returns</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-100 rounded">
                      <span className="font-semibold">Government Bonds</span>
                      <span className="text-yellow-700">Low-Moderate Risk → 7-8%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-100 rounded">
                      <span className="font-semibold">Blue-chip Stocks</span>
                      <span className="text-orange-700">Moderate Risk → 10-15%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-100 rounded">
                      <span className="font-semibold">Small-cap / F&O</span>
                      <span className="text-red-700">High Risk → 15-30%+ or -50%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-100 rounded">
                      <span className="font-semibold">Crypto / Penny Stocks</span>
                      <span className="text-purple-700">Very High Risk → 100%+ or -90%</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-3">Types of Risk</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Market Risk:</strong> Overall market decline affects all stocks</li>
                      <li><strong>Company Risk:</strong> Specific to individual stock (earnings miss)</li>
                      <li><strong>Liquidity Risk:</strong> Cannot sell quickly without loss</li>
                      <li><strong>Interest Rate Risk:</strong> Bonds fall when rates rise</li>
                      <li><strong>Currency Risk:</strong> Foreign investment affected by exchange rates</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-3">Risk Measures</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Standard Deviation:</strong> Volatility of returns</li>
                      <li><strong>Beta:</strong> Volatility vs market</li>
                      <li><strong>Sharpe Ratio:</strong> Return per unit of risk</li>
                      <li><strong>Max Drawdown:</strong> Peak-to-trough decline</li>
                      <li><strong>VaR (Value at Risk):</strong> Potential loss at confidence level</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">⚖️ Finding Your Balance</h4>
                <p className="text-sm text-slate-700">
                  <strong>Risk Tolerance:</strong> Ability and willingness to endure losses. Young investors can take more risk (time to recover). Retirees need stability. <strong>Diversification reduces risk without sacrificing returns</strong>—holding multiple uncorrelated assets smooths volatility. Optimal portfolio balances your return goals with acceptable risk level.
                </p>
              </div>
            </div>
          </div>

          {/* 10. Market Cycles Theory */}
          <div id="market-cycles" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-emerald-500 pl-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">10. Market Cycles Theory</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-emerald-700 mb-3">Core Concept</h3>
                <p className="text-slate-700 mb-4">
                  Markets move in <strong>cyclical patterns</strong> between expansion and contraction, optimism and pessimism. Four distinct phases repeat: Accumulation, Markup (Bull), Distribution, Markdown (Bear). Understanding current phase helps position for next move. Cycles driven by economic data, monetary policy, and investor sentiment.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-emerald-50 rounded-lg p-5 border-2 border-emerald-200">
                    <h4 className="font-semibold text-emerald-900 mb-3">Phase 1: Accumulation</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Market Bottom:</strong> After decline, sentiment extremely bearish</li>
                      <li><strong>Smart Money:</strong> Institutions quietly buying at lows</li>
                      <li><strong>Characteristics:</strong> Low volatility, sideways movement, disbelief</li>
                      <li><strong>Public Sentiment:</strong> "Market is dead," fear dominates</li>
                      <li><strong>Indicators:</strong> High cash levels, low P/E ratios, capitulation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-5 border-2 border-green-200">
                    <h4 className="font-semibold text-green-900 mb-3">Phase 2: Markup (Bull Market)</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Rising Prices:</strong> Sustained uptrend with higher highs/lows</li>
                      <li><strong>Public Joins:</strong> Retail investors enter as confidence builds</li>
                      <li><strong>Characteristics:</strong> Strong momentum, positive news, FOMO</li>
                      <li><strong>Public Sentiment:</strong> Optimism → euphoria, greed peaks</li>
                      <li><strong>Indicators:</strong> Rising volume, improving fundamentals, new highs</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-5 border-2 border-orange-200">
                    <h4 className="font-semibold text-orange-900 mb-3">Phase 3: Distribution</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Market Top:</strong> Prices stall after long rally</li>
                      <li><strong>Smart Money:</strong> Institutions selling to retail buyers</li>
                      <li><strong>Characteristics:</strong> High volatility, sideways chop, divergences</li>
                      <li><strong>Public Sentiment:</strong> Extreme greed, complacency, "can't lose"</li>
                      <li><strong>Indicators:</strong> Declining volume on rallies, distribution days</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
                    <h4 className="font-semibold text-red-900 mb-3">Phase 4: Markdown (Bear Market)</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Falling Prices:</strong> Sustained downtrend with lower highs/lows</li>
                      <li><strong>Public Panic:</strong> Late sellers capitulate, forced liquidation</li>
                      <li><strong>Characteristics:</strong> Negative news, bearish sentiment, despair</li>
                      <li><strong>Public Sentiment:</strong> Fear → panic, "it's going to zero"</li>
                      <li><strong>Indicators:</strong> High volume selloffs, margin calls, crisis</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">🔄 Trading the Cycle</h4>
                <p className="text-sm text-slate-700">
                  <strong>Buy in Accumulation</strong> (when others are fearful), <strong>Hold through Markup</strong> (trend is your friend), <strong>Sell in Distribution</strong> (when greed peaks), <strong>Stay cash in Markdown</strong> or short. Contrarian at extremes, momentum follower in middle. "Be fearful when others are greedy, greedy when others are fearful" - Warren Buffett.
                </p>
              </div>
            </div>
          </div>

          {/* 11. Arbitrage Pricing Theory (APT) */}
          <div id="arbitrage" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-violet-500 pl-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">11. Arbitrage Pricing Theory (APT)</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-violet-700 mb-3">Core Concept</h3>
                <p className="text-slate-700 mb-4">
                  Developed by Stephen Ross (1976) as alternative to CAPM. APT states: <strong>Asset returns explained by multiple macroeconomic factors</strong>, not just market return. More flexible than CAPM—uses multiple betas for different risk sources. Returns = Risk-Free Rate + (Factor 1 Beta × Factor 1 Premium) + (Factor 2 Beta × Factor 2 Premium) + ...
                </p>
                
                <div className="bg-violet-50 rounded-xl p-6 mb-6 border-2 border-violet-200">
                  <h4 className="font-semibold text-violet-900 mb-4">Common APT Factors</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-violet-700">1.</span>
                        <div>
                          <strong>GDP Growth:</strong> Economic expansion increases corporate profits
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-violet-700">2.</span>
                        <div>
                          <strong>Inflation:</strong> Rising prices erode real returns, especially bonds
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-violet-700">3.</span>
                        <div>
                          <strong>Interest Rates:</strong> Higher rates reduce present value of future cash flows
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-violet-700">4.</span>
                        <div>
                          <strong>Exchange Rates:</strong> Currency movements affect exporters/importers
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-violet-700">5.</span>
                        <div>
                          <strong>Oil Prices:</strong> Energy costs impact transportation, manufacturing
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-violet-700">6.</span>
                        <div>
                          <strong>Credit Spreads:</strong> Risk appetite indicator (tight = bullish)
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-violet-700">7.</span>
                        <div>
                          <strong>Market Sentiment:</strong> VIX (fear gauge), put/call ratios
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-violet-700">8.</span>
                        <div>
                          <strong>Sector Rotation:</strong> Different sectors lead at cycle stages
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2">✅ APT Advantages</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• More realistic—multiple risk sources</li>
                      <li>• No market portfolio assumption needed</li>
                      <li>• Customizable factors per sector/region</li>
                      <li>• Better explains cross-sectional returns</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
                    <h4 className="font-semibold text-red-900 mb-2">⚠️ APT Limitations</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Doesn't specify which factors to use</li>
                      <li>• Factor identification subjective</li>
                      <li>• More complex than CAPM</li>
                      <li>• Factors change over time</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">📊 Practical Use</h4>
                <p className="text-sm text-slate-700">
                  APT guides macro traders: "Risk-on" environments favor high-beta stocks, cyclicals, small-caps. "Risk-off" shifts to defensive sectors, large-caps, bonds. Factor models (Fama-French) based on APT: Size, Value, Momentum, Quality, Low Volatility. ETFs now exist for each factor.
                </p>
              </div>
            </div>
          </div>

          {/* 12. Liquidity Preference Theory */}
          <div id="liquidity" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="border-l-4 border-sky-500 pl-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">12. Liquidity Preference Theory</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-sky-700 mb-3">Core Concept</h3>
                <p className="text-slate-700 mb-4">
                  Developed by John Maynard Keynes (1936). <strong>Investors prefer liquid assets</strong> (easily bought/sold without loss) over illiquid ones. Liquidity premium = extra return required to hold illiquid assets. Explains why longer-maturity bonds offer higher yields (liquidity + time risk), and why small-caps trade at discount to large-caps.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-sky-50 rounded-lg p-5 border-2 border-sky-200">
                    <h4 className="font-semibold text-sky-900 mb-3">High Liquidity Assets</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Cash:</strong> Ultimate liquidity, no loss on sale</li>
                      <li><strong>Large-cap Stocks:</strong> Tight spreads, deep markets (Reliance, TCS)</li>
                      <li><strong>Government Bonds:</strong> Active secondary markets</li>
                      <li><strong>Gold / Major Currency:</strong> Instant convertibility</li>
                      <li><strong>Benefits:</strong> Quick exit, low transaction costs, stable pricing</li>
                    </ul>
                  </div>
                  
                  <div className="bg-sky-50 rounded-lg p-5 border-2 border-sky-200">
                    <h4 className="font-semibold text-sky-900 mb-3">Low Liquidity Assets</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li><strong>Real Estate:</strong> Months to sell, high transaction costs</li>
                      <li><strong>Penny Stocks:</strong> Wide bid-ask spreads, few buyers</li>
                      <li><strong>Private Equity:</strong> Lock-up periods, no public market</li>
                      <li><strong>Collectibles:</strong> Art, rare coins, niche markets</li>
                      <li><strong>Risk:</strong> Forced sales at steep discounts, trapped capital</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-sky-50 rounded-xl p-6 mb-6 border-2 border-sky-200">
                  <h4 className="font-semibold text-sky-900 mb-4">Yield Curve Explanation</h4>
                  <p className="text-sm text-slate-700 mb-3">
                    <strong>Normal Yield Curve:</strong> Long-term bonds yield more than short-term (30-year {'>'} 10-year {'>'} 2-year). Why? Liquidity preference—investors demand premium for tying up money longer. Also expectations of future rate increases.
                  </p>
                  <p className="text-sm text-slate-700">
                    <strong>Inverted Yield Curve:</strong> Short-term yields {'>'} long-term. Signals recession expectations. Investors flee to long-term bonds (driving prices up, yields down) while Fed raises short-term rates fighting inflation.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2">💧 Trading Implications</h4>
                <p className="text-sm text-slate-700 mb-3">
                  <strong>Market Stress:</strong> Liquidity evaporates—spreads widen, prices gap. "Flight to quality" sees money rush to liquid safe assets (US Treasuries, gold). <strong>Stock Selection:</strong> During crises, illiquid small-caps decline more than liquid large-caps.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Strategy:</strong> Maintain cash buffer for opportunities. Avoid illiquid positions you can't exit. Liquidity premium = opportunity for patient investors willing to hold.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Apply These Principles?</h2>
          <p className="text-lg mb-6 text-blue-100">
            Explore practical trading strategies, technical analysis, and risk management based on these foundational theories.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/technical-analysis" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Learn Technical Analysis
            </Link>
            <Link 
              to="/learn" 
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
            >
              Browse All Courses
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
