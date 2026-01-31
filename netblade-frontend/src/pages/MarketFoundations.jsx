import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, TrendingUp, Users, Shield, BarChart3, Layers, Clock, FileText, Building2, Wallet, Zap, BookOpen } from 'lucide-react';

export default function MarketFoundations() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/market-foundations' } });
    }
  }, [navigate]);
  const topics = [
    { id: 'market-structure', title: 'Market Structure', icon: Building2 },
    { id: 'participants', title: 'Market Participants', icon: Users },
    { id: 'regulatory-bodies', title: 'Regulatory Bodies', icon: Shield },
    { id: 'supply-demand', title: 'Supply & Demand Dynamics', icon: TrendingUp },
    { id: 'asset-classes', title: 'Asset Classes', icon: Layers },
    { id: 'order-types', title: 'Order Types', icon: FileText },
    { id: 'trading-sessions', title: 'Trading Sessions', icon: Clock },
    { id: 'market-indices', title: 'Market Indices', icon: BarChart3 },
    { id: 'key-terms', title: 'Key Market Terms', icon: BookOpen },
    { id: 'clearing-settlement', title: 'Clearing & Settlement', icon: Zap },
    { id: 'accounts', title: 'Demat & Trading Accounts', icon: Wallet }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <Link to="/learn" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-6 sm:mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Back to Learn
        </Link>

        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Market Foundations
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl">
            Master the fundamental building blocks of financial markets. Understand how markets are structured, 
            who participates in them, how they're regulated, and the essential concepts that drive market activity.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Quick Navigation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <a
                  key={topic.id}
                  href={`#${topic.id}`}
                  className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg hover:from-teal-100 hover:to-blue-100 transition-all group"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-base font-medium text-slate-800">{topic.title}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 sm:space-y-12">

          {/* 1. Market Structure */}
          <div id="market-structure" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <div className="border-l-4 border-teal-500 pl-4 sm:pl-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">1. Market Structure</h2>
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-teal-700 mb-3">Core Concept</h3>
                <p className="text-sm sm:text-base text-slate-700 mb-4">
                  Financial markets are organized systems where buyers and sellers trade securities, commodities, and other financial instruments. 
                  Understanding market structure is essential for knowing <strong>where your trade gets executed</strong> and <strong>who's on the other side</strong>.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                  <div className="bg-teal-50 rounded-lg p-4 sm:p-5 border-2 border-teal-200">
                    <h4 className="font-semibold text-teal-900 mb-3 text-sm sm:text-base">📊 Primary Market</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <li><strong>Definition:</strong> Where new securities are created and sold for the first time</li>
                      <li><strong>Examples:</strong> IPOs (Initial Public Offerings), FPOs (Follow-on Public Offerings), new bond issues</li>
                      <li><strong>Function:</strong> Companies raise capital directly from investors</li>
                      <li><strong>Who Buys:</strong> Institutional investors, retail (via IPO applications)</li>
                      <li><strong>Pricing:</strong> Set by company + underwriters based on book building</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 sm:p-5 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-3 text-sm sm:text-base">🔄 Secondary Market</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <li><strong>Definition:</strong> Where existing securities are traded between investors</li>
                      <li><strong>Examples:</strong> NSE, BSE, NYSE, NASDAQ — stock exchanges</li>
                      <li><strong>Function:</strong> Provides liquidity — investors can buy/sell anytime</li>
                      <li><strong>Who Trades:</strong> Retail investors, institutions, traders, market makers</li>
                      <li><strong>Pricing:</strong> Determined by supply-demand (bid-ask orders)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 sm:p-5 border-2 border-slate-200 mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3 text-sm sm:text-base">🏛️ Types of Market Venues</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs sm:text-sm text-slate-700"><strong>Stock Exchanges (Organized Markets):</strong> Regulated platforms like NSE, BSE where trading follows strict rules. Transparent pricing, settlement guarantees, SEBI oversight.</p>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-slate-700"><strong>OTC Markets (Over-The-Counter):</strong> Decentralized trading between two parties without exchange. Examples: bonds, derivatives, forex. Higher flexibility, less transparency.</p>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-slate-700"><strong>Dark Pools:</strong> Private exchanges for institutional block trades. Hidden orders prevent market impact but reduce price transparency for retail.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 border-l-4 border-teal-400 p-4 sm:p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">🎯 Why This Matters</h4>
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Primary market = fundraising.</strong> Companies get money, investors get ownership. <strong>Secondary market = trading.</strong> 
                  You don't buy "from the company"—you buy from another investor. Liquidity in secondary markets lets you exit anytime. Without it, your shares would be stuck forever.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Market Participants */}
          <div id="participants" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <div className="border-l-4 border-blue-500 pl-4 sm:pl-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6">2. Market Participants</h2>
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-3">Who Moves Markets?</h3>
                <p className="text-sm sm:text-base text-slate-700 mb-4">
                  Markets are an ecosystem of players with different goals, strategies, and capital. Knowing <strong>who's trading and why</strong> helps you understand price movements and avoid being outsmarted.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4 sm:p-5 border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">👤 Retail Investors (You)</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>Who:</strong> Individual traders/investors buying stocks, mutual funds, ETFs with personal savings<br />
                      <strong>Capital:</strong> ₹10,000 to ₹10 lakh typically<br />
                      <strong>Goal:</strong> Wealth creation, retirement, income generation<br />
                      <strong>Advantage:</strong> Flexibility, small size (can exit fast)<br />
                      <strong>Disadvantage:</strong> Limited info, emotional decisions, high costs (brokerage)
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 sm:p-5 border-l-4 border-purple-400">
                    <h4 className="font-semibold text-purple-900 mb-2 text-sm sm:text-base">🏦 Institutional Investors</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>Who:</strong> Mutual funds, insurance companies, pension funds, hedge funds, sovereign wealth funds<br />
                      <strong>Capital:</strong> ₹100 crore to ₹10,000+ crore<br />
                      <strong>Goal:</strong> Beat benchmarks, manage client money, long-term returns<br />
                      <strong>Advantage:</strong> Research teams, economies of scale, direct company access<br />
                      <strong>Disadvantage:</strong> Size limits (can't exit large positions quickly)
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 sm:p-5 border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-900 mb-2 text-sm sm:text-base">🎯 Market Makers</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>Who:</strong> Brokers/dealers who provide liquidity by continuously quoting bid-ask prices<br />
                      <strong>Role:</strong> Ensure you can always buy/sell—they take the other side<br />
                      <strong>Profit:</strong> Bid-ask spread (buy at ₹100, sell at ₹100.10 = ₹0.10 profit)<br />
                      <strong>Example:</strong> NSE's algo-based market makers in F&O
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-4 sm:p-5 border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-yellow-900 mb-2 text-sm sm:text-base">🛡️ Hedgers</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>Who:</strong> Companies, exporters, importers protecting against price risk<br />
                      <strong>Goal:</strong> Lock in prices, eliminate uncertainty (not profit from trading)<br />
                      <strong>Example:</strong> Airline hedges fuel prices with oil futures; exporter hedges USD/INR with currency derivatives
                    </p>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4 sm:p-5 border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-900 mb-2 text-sm sm:text-base">🎰 Speculators</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>Who:</strong> Traders seeking profit from price movements (day traders, swing traders, HFTs)<br />
                      <strong>Goal:</strong> Buy low, sell high — pure profit motive<br />
                      <strong>Function:</strong> Provide liquidity, take opposite side of hedgers<br />
                      <strong>Risk:</strong> High—can lose everything if wrong
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 sm:p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">💡 Trading Insight</h4>
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Big moves = institutional activity.</strong> When FIIs buy billions, stocks rally. When DIIs sell, pressure builds. 
                  Track FII/DII data daily (NSE publishes it). Retail follows trends; institutions create them. Your edge? Speed and flexibility—you can enter/exit faster.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Regulatory Bodies */}
          <div id="regulatory-bodies" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <div className="border-l-4 border-red-500 pl-4 sm:pl-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6">3. Regulatory Bodies</h2>
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-red-700 mb-3">Who Governs Financial Markets?</h3>
                <p className="text-sm sm:text-base text-slate-700 mb-4">
                  Regulators protect investors, ensure fair trading, and maintain market integrity. Understanding their roles helps you <strong>trade within legal boundaries</strong> and <strong>avoid penalties</strong>.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-red-50 rounded-lg p-4 sm:p-5 border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-900 mb-2 text-sm sm:text-base">🏛️ SEBI (Securities and Exchange Board of India)</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-3">
                      <strong>Regulates:</strong> Stock exchanges (NSE, BSE), brokers, mutual funds, FPIs, credit rating agencies<br />
                      <strong>Powers:</strong> Issue regulations, conduct investigations, impose fines, ban entities<br />
                      <strong>Key Rules:</strong>
                    </p>
                    <ul className="space-y-1 text-xs sm:text-sm text-slate-700 ml-4">
                      <li>• Insider trading prohibition (SEBI Act Section 12A)</li>
                      <li>• Disclosure norms for companies (annual reports, quarterly results)</li>
                      <li>• Broker capital requirements (minimum ₹10 lakh networth)</li>
                      <li>• Mutual fund expense ratio caps (2.25% for equity funds)</li>
                      <li>• Circuit breakers (10%, 15%, 20% limits to prevent crashes)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 sm:p-5 border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">🏦 RBI (Reserve Bank of India)</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-3">
                      <strong>Regulates:</strong> Banking sector, money markets, forex markets, payment systems<br />
                      <strong>Tools:</strong> Repo rate, CRR, SLR, OMOs (control liquidity and inflation)<br />
                      <strong>Impact on Markets:</strong>
                    </p>
                    <ul className="space-y-1 text-xs sm:text-sm text-slate-700 ml-4">
                      <li>• Rate cuts → cheaper loans → stock market rally</li>
                      <li>• Rate hikes → expensive borrowing → market falls</li>
                      <li>• USD/INR intervention (buys/sells dollars to stabilize rupee)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 sm:p-5 border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-900 mb-2 text-sm sm:text-base">🛡️ IRDAI (Insurance Regulatory Authority)</h4>
                    <p className="text-xs sm:text-sm text-slate-700">
                      <strong>Regulates:</strong> Life and general insurance companies, insurance brokers<br />
                      <strong>Function:</strong> Protects policyholders, ensures solvency, approves new products<br />
                      <strong>Example:</strong> ULIPs (Unit Linked Insurance Plans) regulated by IRDAI
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 sm:p-5 border-l-4 border-purple-400">
                    <h4 className="font-semibold text-purple-900 mb-2 text-sm sm:text-base">📊 PFRDA (Pension Fund Regulatory Authority)</h4>
                    <p className="text-xs sm:text-sm text-slate-700">
                      <strong>Regulates:</strong> National Pension System (NPS), pension fund managers<br />
                      <strong>Function:</strong> Ensures retirement security, regulates fund allocation<br />
                      <strong>Example:</strong> NPS Tier-I and Tier-II accounts governed by PFRDA
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 sm:p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">⚠️ Why This Matters</h4>
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Trading violations = heavy penalties.</strong> Insider trading can land you 10-year ban + ₹25 crore fine. 
                  Market manipulation (pump-and-dump schemes) → SEBI will freeze your accounts. Stay compliant: report suspicious activity, follow position limits in F&O, pay taxes.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Supply & Demand Dynamics */}
          <div id="supply-demand" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <div className="border-l-4 border-green-500 pl-4 sm:pl-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6">4. Supply & Demand Dynamics</h2>
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-3">The Force Behind Every Price Move</h3>
                <p className="text-sm sm:text-base text-slate-700 mb-4">
                  <strong>Price discovery</strong> happens when buyers (demand) and sellers (supply) interact. Understanding order flow, bid-ask spreads, and liquidity reveals <strong>where smart money is positioning</strong>.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-4 sm:p-5 border-2 border-green-200">
                    <h4 className="font-semibold text-green-900 mb-3 text-sm sm:text-base">📈 The Order Book</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-3">
                      Real-time list of buy (bid) and sell (ask) orders at different price levels:
                    </p>
                    <div className="bg-white p-3 rounded border text-xs font-mono">
                      <div className="text-green-600">BID (Buyers): ₹150.00 x 500 shares</div>
                      <div className="text-green-600 ml-8">₹149.95 x 1,000</div>
                      <div className="text-red-600">ASK (Sellers): ₹150.05 x 300 shares</div>
                      <div className="text-red-600 ml-8">₹150.10 x 800</div>
                    </div>
                    <p className="text-xs text-slate-600 mt-2"><strong>Spread = ₹0.05</strong> (diff between best bid and ask)</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 sm:p-5 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-3 text-sm sm:text-base">💧 Liquidity</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <li><strong>High Liquidity:</strong> Tight spreads, large volumes, easy entry/exit. Example: Reliance, TCS, HDFC Bank</li>
                      <li><strong>Low Liquidity:</strong> Wide spreads, low volumes, slippage risk. Example: Small-cap stocks</li>
                      <li><strong>Impact Cost:</strong> Price moves against you when placing large orders in illiquid stocks</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 sm:p-5 border-2 border-slate-200 mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3 text-sm sm:text-base">⚖️ Price Discovery Process</h4>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <p><strong>1. More Buyers Than Sellers:</strong> Bid orders exceed ask orders → prices rise until sellers appear</p>
                    <p><strong>2. More Sellers Than Buyers:</strong> Ask orders exceed bid orders → prices fall until buyers step in</p>
                    <p><strong>3. Equilibrium:</strong> When supply = demand, price stabilizes temporarily</p>
                    <p><strong>4. News Catalyst:</strong> New information shifts balance → sudden surge in buy/sell orders → volatility</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 sm:p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">🎯 Trading Application</h4>
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Support = high demand zone</strong> where buyers historically step in (more bids). <strong>Resistance = high supply zone</strong> where sellers dominate (more asks). 
                  Volume confirms: breakout on high volume = genuine move; breakout on low volume = false signal. Watch order flow for large institutional orders.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Asset Classes */}
          <div id="asset-classes" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <div className="border-l-4 border-purple-500 pl-4 sm:pl-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6">5. Asset Classes</h2>
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-700 mb-3">Types of Investment Instruments</h3>
                <p className="text-sm sm:text-base text-slate-700 mb-4">
                  Different asset classes have unique risk-return profiles, liquidity, and tax implications. Understanding them helps you <strong>diversify effectively</strong> and <strong>match assets to your goals</strong>.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-purple-50 rounded-lg p-4 sm:p-5 border-l-4 border-purple-400">
                    <h4 className="font-semibold text-purple-900 mb-2 text-sm sm:text-base">📊 Equities (Stocks)</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>What:</strong> Ownership shares in companies<br />
                      <strong>Return:</strong> Capital gains (price rise) + dividends<br />
                      <strong>Risk:</strong> High (can lose 100% if company fails)<br />
                      <strong>Liquidity:</strong> High (NSE/BSE trades daily)<br />
                      <strong>Tax:</strong> LTCG 10% beyond ₹1 lakh/year; STCG 15%<br />
                      <strong>Example:</strong> Reliance, Infosys, HDFC Bank shares
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 sm:p-5 border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">🏦 Bonds (Fixed Income)</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>What:</strong> Debt securities — you lend money to govt/companies<br />
                      <strong>Return:</strong> Fixed interest (coupon) + capital gains (price changes)<br />
                      <strong>Risk:</strong> Low-Medium (default risk for corporate bonds)<br />
                      <strong>Liquidity:</strong> Medium (secondary market exists but less liquid)<br />
                      <strong>Example:</strong> Government bonds, corporate bonds, municipal bonds
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-4 sm:p-5 border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-yellow-900 mb-2 text-sm sm:text-base">🛢️ Commodities</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>What:</strong> Physical goods — metals, energy, agriculture<br />
                      <strong>Return:</strong> Price appreciation based on supply-demand<br />
                      <strong>Risk:</strong> High volatility (weather, geopolitics, currency)<br />
                      <strong>Trading:</strong> Futures/options on MCX, NCDEX<br />
                      <strong>Example:</strong> Gold, crude oil, silver, wheat, natural gas
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 sm:p-5 border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-900 mb-2 text-sm sm:text-base">🏠 Real Estate</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>What:</strong> Physical property — residential, commercial, land<br />
                      <strong>Return:</strong> Rental income + capital appreciation<br />
                      <strong>Risk:</strong> Illiquidity, high capital requirement, regulatory changes<br />
                      <strong>Alternative:</strong> REITs (Real Estate Investment Trusts) trade on exchanges
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-4 sm:p-5 border-l-4 border-orange-400">
                    <h4 className="font-semibold text-orange-900 mb-2 text-sm sm:text-base">₿ Cryptocurrencies</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>What:</strong> Digital assets on blockchain (Bitcoin, Ethereum)<br />
                      <strong>Return:</strong> Speculative — no cash flow, pure price appreciation<br />
                      <strong>Risk:</strong> Extreme volatility, regulatory uncertainty, hacking risk<br />
                      <strong>Status in India:</strong> Legal but 30% tax on gains + 1% TDS on transactions
                    </p>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4 sm:p-5 border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-900 mb-2 text-sm sm:text-base">📉 Derivatives</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>What:</strong> Contracts deriving value from underlying asset (futures, options)<br />
                      <strong>Use:</strong> Hedging, speculation, leverage<br />
                      <strong>Risk:</strong> Very high — can lose more than investment (margin calls)<br />
                      <strong>Example:</strong> Nifty futures, Bank Nifty options, stock futures
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 sm:p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">💼 Asset Allocation Strategy</h4>
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Don't put all eggs in one basket.</strong> Conservative: 60% bonds, 30% equity, 10% gold. Aggressive: 80% equity, 10% bonds, 10% commodities. 
                  Rebalance annually. Each asset class behaves differently in various economic conditions—diversification reduces portfolio risk.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Order Types */}
          <div id="order-types" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <div className="border-l-4 border-orange-500 pl-4 sm:pl-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6">6. Order Types</h2>
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-orange-700 mb-3">How to Execute Trades</h3>
                <p className="text-sm sm:text-base text-slate-700 mb-4">
                  Different order types give you control over <strong>execution price, timing, and risk</strong>. Choosing the right order type can save you money and prevent costly mistakes.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-orange-50 rounded-lg p-4 sm:p-5 border-l-4 border-orange-400">
                    <h4 className="font-semibold text-orange-900 mb-2 text-sm sm:text-base">⚡ Market Order</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>Definition:</strong> Buy/sell immediately at current market price<br />
                      <strong>Execution:</strong> Guaranteed (fills instantly)<br />
                      <strong>Price:</strong> Not guaranteed — may face slippage in fast markets<br />
                      <strong>Use When:</strong> Urgent trades, highly liquid stocks<br />
                      <strong>Risk:</strong> Slippage (get worse price than expected in volatile markets)
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 sm:p-5 border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">🎯 Limit Order</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>Definition:</strong> Buy/sell only at specified price or better<br />
                      <strong>Example:</strong> "Buy 100 shares at ₹150 or lower"<br />
                      <strong>Execution:</strong> Not guaranteed — fills only if price reaches your limit<br />
                      <strong>Use When:</strong> You want price control, not in a rush<br />
                      <strong>Advantage:</strong> Avoid overpaying (buying) or underselling
                    </p>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4 sm:p-5 border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-900 mb-2 text-sm sm:text-base">🛑 Stop-Loss Order (SL)</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>Definition:</strong> Triggers market order when price hits your stop level<br />
                      <strong>Example:</strong> "Sell if price drops to ₹140" (protect ₹10 profit)<br />
                      <strong>Use When:</strong> Risk management — limit losses on existing positions<br />
                      <strong>Types:</strong> SL-Market (immediate execution) vs. SL-Limit (price control)
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 sm:p-5 border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-900 mb-2 text-sm sm:text-base">📦 Bracket Order (BO)</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>Definition:</strong> Entry + Stop-Loss + Target in one order<br />
                      <strong>Example:</strong> Buy at ₹150, SL at ₹145, Target at ₹160<br />
                      <strong>Advantage:</strong> Automatic risk management, intraday leverage (3-5x)<br />
                      <strong>Use When:</strong> Intraday trading, want to set-and-forget
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 sm:p-5 border-l-4 border-purple-400">
                    <h4 className="font-semibold text-purple-900 mb-2 text-sm sm:text-base">⏰ Time-Based Orders</h4>
                    <ul className="space-y-1 text-xs sm:text-sm text-slate-700">
                      <li><strong>IOC (Immediate or Cancel):</strong> Execute immediately, cancel unfilled portion</li>
                      <li><strong>GTC (Good Till Cancelled):</strong> Stays active until you cancel (max 30-90 days)</li>
                      <li><strong>Day Order:</strong> Expires at market close if not filled (default in India)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 sm:p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">⚠️ Pro Tip</h4>
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Never use market orders in illiquid stocks</strong> — you'll face massive slippage. Always use limit orders for small-caps. 
                  For large-caps, market orders are fine during trading hours. Set stop-losses on EVERY trade — it's your safety net against catastrophic losses.
                </p>
              </div>
            </div>
          </div>

          {/* Continuing with remaining 5 topics... */}

          {/* 7. Trading Sessions */}
          <div id="trading-sessions" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <div className="border-l-4 border-cyan-500 pl-4 sm:pl-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6">7. Trading Sessions</h2>
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-700 mb-3">When Markets Are Open</h3>
                <p className="text-sm sm:text-base text-slate-700 mb-4">
                  Different markets have specific trading hours. Knowing <strong>session timings, pre-market activity, and settlement cycles</strong> helps you plan trades and avoid execution errors.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-cyan-50 rounded-lg p-4 sm:p-5 border-l-4 border-cyan-400">
                    <h4 className="font-semibold text-cyan-900 mb-2 text-sm sm:text-base">📊 Equity Market (NSE/BSE)</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>Pre-Open Session:</strong> 9:00 AM - 9:15 AM<br />
                      • 9:00-9:08 AM: Order entry and modification<br />
                      • 9:08-9:12 AM: Order matching, equilibrium price discovery<br />
                      • 9:12-9:15 AM: Buffer period (no orders)<br /><br />
                      <strong>Regular Trading:</strong> 9:15 AM - 3:30 PM<br />
                      <strong>Closing Session:</strong> 3:30 PM - 4:00 PM (for institutional trades)<br />
                      <strong>Best Time to Trade:</strong> 9:30 AM - 11:00 AM, 2:00 PM - 3:15 PM (high volatility + volume)
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 sm:p-5 border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">📉 F&O Market (Futures & Options)</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>Trading Hours:</strong> 9:15 AM - 3:30 PM (same as equity)<br />
                      <strong>Expiry Day:</strong> Last Thursday of the month<br />
                      • High volatility 2:00 PM - 3:30 PM on expiry<br />
                      • Weekly expiry: Bank Nifty (Wed), Nifty (Thu)<br />
                      <strong>Settlement:</strong> Cash-settled on T+1 (next day)
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 sm:p-5 border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-900 mb-2 text-sm sm:text-base">💱 Currency Market</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>Trading Hours:</strong> 9:00 AM - 5:00 PM<br />
                      <strong>Instruments:</strong> USD/INR, EUR/INR, GBP/INR, JPY/INR<br />
                      <strong>Settlement:</strong> T+1 for spot, cash-settled for F&O
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-4 sm:p-5 border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-yellow-900 mb-2 text-sm sm:text-base">🛢️ Commodity Market (MCX)</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>Trading Hours:</strong> Varies by commodity<br />
                      • Bullion (Gold, Silver): 10:00 AM - 11:30 PM<br />
                      • Crude Oil: 9:00 AM - 11:30 PM<br />
                      • Base Metals: 9:00 AM - 11:30 PM<br />
                      <strong>Why Extended Hours:</strong> Track global markets (COMEX, LME)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 border-l-4 border-cyan-400 p-4 sm:p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">⏰ Time-Based Strategy</h4>
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Avoid first 15 minutes (9:15-9:30 AM)</strong> — false breakouts, gap volatility. 
                  <strong>Best liquidity:</strong> 10:00 AM - 2:00 PM. <strong>Avoid last 10 minutes (3:20-3:30 PM)</strong> — institutional rebalancing creates noise. 
                  Intraday traders: close positions by 3:15 PM to avoid STT on delivery.
                </p>
              </div>
            </div>
          </div>

          {/* 8. Market Indices */}
          <div id="market-indices" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <div className="border-l-4 border-indigo-500 pl-4 sm:pl-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6">8. Market Indices</h2>
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-700 mb-3">Measuring Market Performance</h3>
                <p className="text-sm sm:text-base text-slate-700 mb-4">
                  Indices track the performance of specific stock groups. They're <strong>benchmarks for fund performance, indicators of economic health, and tradable instruments</strong> (via index funds, ETFs, futures).
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-indigo-50 rounded-lg p-4 sm:p-5 border-l-4 border-indigo-400">
                    <h4 className="font-semibold text-indigo-900 mb-2 text-sm sm:text-base">📈 Nifty 50</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>What:</strong> Top 50 companies on NSE by market cap and liquidity<br />
                      <strong>Calculation:</strong> Free-float market capitalization weighted<br />
                      <strong>Represents:</strong> ~66% of NSE's total market cap<br />
                      <strong>Sectors:</strong> Financial Services (36%), IT (16%), Oil & Gas (12%)<br />
                      <strong>Use:</strong> Benchmark for large-cap mutual funds, Nifty futures/options trading
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 sm:p-5 border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">🏦 Bank Nifty</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>What:</strong> 12 most liquid banking stocks (HDFC, ICICI, SBI, Kotak, Axis, etc.)<br />
                      <strong>Calculation:</strong> Free-float market cap weighted<br />
                      <strong>Volatility:</strong> Higher than Nifty (banking sector sensitive to rates, NPAs)<br />
                      <strong>Trading:</strong> Most actively traded index in F&O (weekly expiry on Wednesday)
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 sm:p-5 border-l-4 border-purple-400">
                    <h4 className="font-semibold text-purple-900 mb-2 text-sm sm:text-base">📊 Sensex (BSE Sensex)</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>What:</strong> 30 largest and most actively traded stocks on BSE<br />
                      <strong>History:</strong> Oldest index in India (launched 1986)<br />
                      <strong>Correlation:</strong> Moves similarly to Nifty (overlap of companies)<br />
                      <strong>Significance:</strong> Media headlines, investor sentiment barometer
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 sm:p-5 border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-900 mb-2 text-sm sm:text-base">🌟 Sectoral Indices</h4>
                    <ul className="space-y-1 text-xs sm:text-sm text-slate-700">
                      <li><strong>Nifty IT:</strong> Top 10 IT companies (TCS, Infosys, Wipro, HCL)</li>
                      <li><strong>Nifty Pharma:</strong> Pharmaceutical stocks (Sun Pharma, Dr. Reddy's)</li>
                      <li><strong>Nifty Auto:</strong> Auto sector (Maruti, Tata Motors, M&M)</li>
                      <li><strong>Nifty FMCG:</strong> Consumer goods (HUL, ITC, Nestle)</li>
                      <li><strong>Use:</strong> Sector rotation strategies, identify hot/cold sectors</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 sm:p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">📐 Index Calculation Method</h4>
                <p className="text-xs sm:text-sm text-slate-700 mb-2">
                  <strong>Free-Float Market Cap Formula:</strong><br />
                  Index Value = (Current Market Cap of Index / Base Market Cap) × Base Index Value
                </p>
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Example:</strong> If Nifty 50 total market cap is ₹100 lakh crore and base is ₹2.06 lakh crore (with base value 1,000), Nifty = (100/2.06) × 1,000 ≈ 48,544. 
                  Higher market cap stocks (Reliance, TCS) have more weight—when they move, index moves significantly.
                </p>
              </div>
            </div>
          </div>

          {/* 9. Key Market Terms */}
          <div id="key-terms" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <div className="border-l-4 border-pink-500 pl-4 sm:pl-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6">9. Key Market Terms</h2>
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-pink-700 mb-3">Essential Trading Vocabulary</h3>
                <p className="text-sm sm:text-base text-slate-700 mb-4">
                  Understanding market jargon is crucial for reading news, analyzing stocks, and making informed decisions. Here are <strong>must-know terms</strong> every trader should master.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-400">
                    <h4 className="font-semibold text-pink-900 mb-2 text-xs sm:text-sm">💼 IPO (Initial Public Offering)</h4>
                    <p className="text-xs text-slate-700">
                      Company's first sale of stock to public. Transition from private to public company. Example: Zomato IPO (2021) raised ₹9,375 crore.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-900 mb-2 text-xs sm:text-sm">📈 FPO (Follow-on Public Offering)</h4>
                    <p className="text-xs text-slate-700">
                      Additional shares issued by already-listed company to raise more capital. Dilutes existing shareholding.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-900 mb-2 text-xs sm:text-sm">💰 Dividend</h4>
                    <p className="text-xs text-slate-700">
                      Portion of profits distributed to shareholders. Example: ₹10 dividend per share = if you own 100 shares, you get ₹1,000.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-yellow-900 mb-2 text-xs sm:text-sm">✂️ Stock Split</h4>
                    <p className="text-xs text-slate-700">
                      Dividing each share into multiple shares. 1:2 split = 1 share of ₹1,000 becomes 2 shares of ₹500. Total value unchanged.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
                    <h4 className="font-semibold text-purple-900 mb-2 text-xs sm:text-sm">💸 Buyback</h4>
                    <p className="text-xs text-slate-700">
                      Company repurchases its own shares from market. Reduces outstanding shares, increases EPS, signals undervaluation.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-900 mb-2 text-xs sm:text-sm">📊 P/E Ratio (Price-to-Earnings)</h4>
                    <p className="text-xs text-slate-700">
                      Stock Price ÷ EPS. Measures valuation. P/E = 20 means investors pay ₹20 for every ₹1 of earnings. High P/E = expensive or high growth expectations.
                    </p>
                  </div>
                  
                  <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-400">
                    <h4 className="font-semibold text-indigo-900 mb-2 text-xs sm:text-sm">📉 P/B Ratio (Price-to-Book)</h4>
                    <p className="text-xs text-slate-700">
                      Stock Price ÷ Book Value per Share. P/B {'<'} 1 = trading below book value (undervalued or distressed). Common in banking stocks.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
                    <h4 className="font-semibold text-orange-900 mb-2 text-xs sm:text-sm">⛔ Circuit Breaker</h4>
                    <p className="text-xs text-slate-700">
                      Trading halts when index/stock moves too much (10%, 15%, 20% limits). Prevents panic selling/buying. Protects retail investors.
                    </p>
                  </div>
                  
                  <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <h4 className="font-semibold text-teal-900 mb-2 text-xs sm:text-sm">📋 EPS (Earnings Per Share)</h4>
                    <p className="text-xs text-slate-700">
                      Net Profit ÷ Total Shares. ₹100 crore profit ÷ 10 crore shares = ₹10 EPS. Higher EPS = more profitable per share.
                    </p>
                  </div>
                  
                  <div className="bg-cyan-50 rounded-lg p-4 border-l-4 border-cyan-400">
                    <h4 className="font-semibold text-cyan-900 mb-2 text-xs sm:text-sm">💎 Market Cap</h4>
                    <p className="text-xs text-slate-700">
                      Share Price × Total Shares. ₹1,000/share × 100 crore shares = ₹1 lakh crore market cap. Categories: Large (₹20,000+ cr), Mid, Small.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 border-l-4 border-pink-400 p-4 sm:p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">📚 Learn More</h4>
                <p className="text-xs sm:text-sm text-slate-700">
                  These terms appear in quarterly results, broker reports, and financial news daily. Bookmark NSE's glossary, read screener.in for live valuations, 
                  and practice calculating P/E, P/B, and market cap for your favorite stocks.
                </p>
              </div>
            </div>
          </div>

          {/* 10. Clearing & Settlement */}
          <div id="clearing-settlement" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <div className="border-l-4 border-yellow-500 pl-4 sm:pl-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6">10. Clearing & Settlement</h2>
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-yellow-700 mb-3">How Trades Get Finalized</h3>
                <p className="text-sm sm:text-base text-slate-700 mb-4">
                  When you click "Buy," the trade doesn't complete instantly. <strong>Clearing houses and depositories</strong> ensure shares and money are exchanged securely. Understanding this process prevents settlement failures.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-yellow-50 rounded-lg p-4 sm:p-5 border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-yellow-900 mb-2 text-sm sm:text-base">🔄 T+1 Settlement Cycle</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-3">
                      <strong>T = Trade Date, +1 = Next Working Day</strong><br />
                      Since Oct 2021, Indian equity markets follow T+1 (previously T+2).
                    </p>
                    <div className="space-y-2 text-xs text-slate-700">
                      <p><strong>Day 0 (T):</strong> You buy 100 shares of Reliance at ₹2,500<br />
                      → Order executed, money debited from your account</p>
                      <p><strong>Day 1 (T+1):</strong> Settlement day<br />
                      → Shares credited to your Demat account<br />
                      → You can now sell them (no more waiting period)</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 sm:p-5 border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">🏦 Clearing Corporations</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>NSCCL (NSE Clearing):</strong> Guarantees all NSE trades. Acts as counterparty to both buyer and seller. If seller defaults, NSCCL ensures buyer still gets shares.<br /><br />
                      <strong>ICCL (BSE Clearing):</strong> Same role for BSE trades.<br /><br />
                      <strong>How It Works:</strong> Novation — once trade confirmed, clearing corp becomes legal buyer to every seller and legal seller to every buyer. Eliminates counterparty risk.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 sm:p-5 border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-900 mb-2 text-sm sm:text-base">📁 Depositories (NSDL & CDSL)</h4>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2">
                      <strong>NSDL:</strong> National Securities Depository Ltd. (largest in India)<br />
                      <strong>CDSL:</strong> Central Depository Services Ltd.<br /><br />
                      <strong>Function:</strong> Hold shares in electronic form (Demat). Like a digital vault for your securities. When you buy, shares transfer from seller's demat to yours via depository.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 sm:p-5 border-l-4 border-purple-400">
                    <h4 className="font-semibold text-purple-900 mb-2 text-sm sm:text-base">⏰ Settlement Process Timeline</h4>
                    <div className="space-y-1 text-xs text-slate-700">
                      <p><strong>9:15 AM - 3:30 PM (T):</strong> Trading happens</p>
                      <p><strong>3:30 PM - 5:30 PM (T):</strong> Trade confirmation, netting (offsetting buy-sell positions)</p>
                      <p><strong>T+1 Morning:</strong> Clearing corp calculates obligations (who owes what)</p>
                      <p><strong>T+1 Afternoon:</strong> Final settlement — shares credited, funds transferred</p>
                      <p><strong>T+1 EOD:</strong> Your demat account updated</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 sm:p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">⚠️ Settlement Failures</h4>
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Seller doesn't deliver shares:</strong> Auction market (shares bought at any price, charged to defaulter + penalty).<br />
                  <strong>Buyer doesn't pay:</strong> Broker squares off position, charges client penalty + interest.<br />
                  <strong>Your Protection:</strong> T+1 means faster credit, less risk. Always maintain sufficient margin for F&O trades.
                </p>
              </div>
            </div>
          </div>

          {/* 11. Demat & Trading Accounts */}
          <div id="accounts" className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <div className="border-l-4 border-rose-500 pl-4 sm:pl-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6">11. Demat & Trading Accounts</h2>
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-rose-700 mb-3">Your Gateway to Markets</h3>
                <p className="text-sm sm:text-base text-slate-700 mb-4">
                  To trade stocks, you need TWO accounts: <strong>Demat</strong> (holds shares) and <strong>Trading</strong> (places orders). Understanding how they work together is essential for smooth trading.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                  <div className="bg-rose-50 rounded-lg p-4 sm:p-5 border-2 border-rose-200">
                    <h4 className="font-semibold text-rose-900 mb-3 text-sm sm:text-base">📁 Demat Account</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <li><strong>Purpose:</strong> Stores shares in electronic form (like a bank account for securities)</li>
                      <li><strong>Opened With:</strong> Depository Participant (DP) — banks or brokers</li>
                      <li><strong>Account Number:</strong> 16-digit BO ID (Beneficiary Owner ID)</li>
                      <li><strong>Example:</strong> IN300476 xxxxxxxx (NSDL) or 1201xxxx xxxxxxxx (CDSL)</li>
                      <li><strong>Holdings:</strong> Shares, bonds, ETFs, mutual funds, government securities</li>
                      <li><strong>Charges:</strong> Annual Maintenance Charge (₹300-₹750/year)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 sm:p-5 border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-3 text-sm sm:text-base">📊 Trading Account</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <li><strong>Purpose:</strong> Places buy/sell orders on stock exchange</li>
                      <li><strong>Opened With:</strong> SEBI-registered broker (Zerodha, Upstox, ICICI Direct, etc.)</li>
                      <li><strong>Access:</strong> Web platform or mobile app</li>
                      <li><strong>Functions:</strong> Order placement, chart analysis, market watch, fund transfer</li>
                      <li><strong>Linked To:</strong> Your demat account (shares auto-credited after purchase)</li>
                      <li><strong>Charges:</strong> Brokerage (₹0-₹20/trade), STT, GST, exchange fees</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 sm:p-5 border-2 border-slate-200 mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3 text-sm sm:text-base">🔗 How They Work Together</h4>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <p><strong>Step 1 — Buying:</strong> You place order via Trading Account → Broker executes on exchange → Money deducted</p>
                    <p><strong>Step 2 — Settlement (T+1):</strong> Shares credited to your Demat Account via depository</p>
                    <p><strong>Step 3 — Selling:</strong> Place sell order via Trading Account → Shares debited from Demat → Funds credited to bank (T+1)</p>
                    <p className="text-rose-600 font-semibold mt-3">⚠️ Without Demat, you can't receive shares. Without Trading, you can't place orders. Both are mandatory.</p>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4 sm:p-5 border-l-4 border-green-400 mb-6">
                  <h4 className="font-semibold text-green-900 mb-3 text-sm sm:text-base">🏦 Types of Brokers</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs sm:text-sm text-slate-700 mb-1"><strong>Discount Brokers (Zerodha, Upstox, Angel One):</strong></p>
                      <ul className="text-xs text-slate-600 ml-4">
                        <li>• Flat ₹10-₹20/trade or ₹0 for delivery</li>
                        <li>• No advisory, just execution platform</li>
                        <li>• Best for active traders</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-slate-700 mb-1"><strong>Full-Service Brokers (ICICI Direct, HDFC Securities, Kotak Securities):</strong></p>
                      <ul className="text-xs text-slate-600 ml-4">
                        <li>• Higher brokerage (0.1%-0.5% of trade value)</li>
                        <li>• Research reports, advisory, wealth management</li>
                        <li>• Best for beginners needing guidance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 sm:p-5 border-l-4 border-purple-400">
                  <h4 className="font-semibold text-purple-900 mb-3 text-sm sm:text-base">💰 Cost Structure Breakdown</h4>
                  <div className="text-xs sm:text-sm text-slate-700 space-y-1">
                    <p><strong>Brokerage:</strong> ₹0-₹20/order (varies by broker and plan)</p>
                    <p><strong>STT (Securities Transaction Tax):</strong> 0.1% on delivery sell, 0.025% on intraday (govt tax)</p>
                    <p><strong>Exchange Charges:</strong> NSE/BSE fees (~0.00325% of turnover)</p>
                    <p><strong>GST:</strong> 18% on brokerage + exchange charges</p>
                    <p><strong>SEBI Charges:</strong> ₹10 per crore turnover</p>
                    <p><strong>Stamp Duty:</strong> 0.015% on buy side (state tax)</p>
                    <p className="text-rose-600 font-semibold mt-2">Example: Buy ₹10,000 worth Reliance → Total charges ≈ ₹25-₹40 (including all taxes)</p>
                  </div>
                </div>
              </div>

              <div className="bg-rose-50 border-l-4 border-rose-400 p-4 sm:p-6 rounded">
                <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">🎯 Quick Start Guide</h4>
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>1. Choose broker</strong> (Zerodha for low cost, ICICI for advisory).<br />
                  <strong>2. Submit KYC:</strong> PAN, Aadhaar, bank proof, photo.<br />
                  <strong>3. Account opened</strong> in 24-48 hours (both demat + trading).<br />
                  <strong>4. Transfer funds</strong> to trading account via UPI/net banking.<br />
                  <strong>5. Start trading</strong> — stocks auto-credit to demat on T+1.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl shadow-2xl p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Apply Your Knowledge?
          </h2>
          <p className="text-base sm:text-lg text-teal-50 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Now that you understand market foundations, dive deeper into technical analysis, 
            trading strategies, and risk management to become a confident trader.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/technical-analysis"
              className="bg-white text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors text-sm sm:text-base"
            >
              Learn Technical Analysis
            </Link>
            <Link
              to="/learn"
              className="bg-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-teal-800 transition-colors text-sm sm:text-base"
            >
              Explore All Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
