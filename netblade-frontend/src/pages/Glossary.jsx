import { useState, useEffect, useRef } from "react";
import { X, Plus } from "lucide-react";

export default function Glossary() {
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [popupPosition, setPopupPosition] = useState("right"); // "left" or "right"
  const [userNotes, setUserNotes] = useState({});
  const [newNote, setNewNote] = useState("");
  const [showAddNote, setShowAddNote] = useState(false);
  const gridRef = useRef(null);
  const termRefs = useRef({});

  // Load notes from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("glossaryNotes");
    if (saved) {
      setUserNotes(JSON.parse(saved));
    }
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("glossaryNotes", JSON.stringify(userNotes));
  }, [userNotes]);

  const glossaryData = {
    "Technical Indicators": [
      {
        term: "Relative Strength Index (RSI)",
        definition: `The Relative Strength Index (RSI) is one of the most widely used momentum oscillators in technical analysis, developed by J. Welles Wilder Jr. in 1978. It measures the magnitude of recent price changes to evaluate overbought and oversold conditions on a scale of 0 to 100. Traders interpret RSI readings as: above 70 indicates overbought conditions suggesting potential reversal downward, below 30 indicates oversold conditions suggesting potential reversal upward. RSI is particularly useful for identifying divergences between price and momentum—bullish divergences occur when price makes lower lows while RSI makes higher lows (weakening downward momentum), and bearish divergences occur when price makes higher highs while RSI makes lower highs (weakening upward momentum). One critical advantage is RSI's adaptability to different market conditions. In trending markets, RSI can remain overbought/oversold for extended periods while the trend continues, so traders should combine it with trend confirmation indicators. Professional traders adjust the RSI period based on timeframe: 9-14 for short-term trading, 21 for intermediate-term, and 28+ for long-term analysis.`,
        examples: "RSI above 70 signals overbought (potential selling); below 30 signals oversold (potential buying).",
        practicalCase: "A trader uses RSI to identify reversals: when NIFTY 50 RSI hits 75, they initiate short positions anticipating correction."
      },
      {
        term: "MACD",
        definition: `MACD is a momentum indicator that combines exponential moving averages to identify trend changes, momentum shifts, and trading signals. Developed by Gerald Appel in 1979, MACD remains one of the most respected indicators among professional traders worldwide. The indicator consists of three components: the MACD line (12-period EMA minus 26-period EMA), the signal line (9-period EMA of MACD line), and the histogram (MACD line minus signal line). MACD generates signals when the MACD line crosses above or below the signal line. A bullish signal occurs when MACD crosses above the signal line, indicating increasing upward momentum and potentially signaling the start of an uptrend. Professional traders use MACD divergences extensively. When price reaches new highs but MACD fails to reach new highs, it signals weakening upward momentum despite higher prices—a bearish divergence. The zero line crossover (when MACD crosses above/below zero) confirms trend direction changes. Combining MACD with support/resistance levels and other indicators significantly improves signal reliability and reduces false signals in choppy markets.`,
        examples: "MACD crossing above signal line generates bullish signals; crossing below generates bearish signals.",
        practicalCase: "Swing traders use MACD crossovers to enter positions: when MACD crosses above signal line with expanding histogram and price above 200-day MA."
      },
      {
        term: "Bollinger Bands",
        definition: `Bollinger Bands are a technical indicator developed by John Bollinger in the 1980s, consisting of a 20-period simple moving average and two standard deviation bands plotted above and below the moving average. This dynamic indicator adapts to market conditions—expanding during volatile periods and contracting during quiet markets—making it superior to fixed percentage bands. When price moves to the upper band, it indicates overbought conditions and potential selling opportunity. When price touches the lower band, it indicates oversold conditions and potential buying opportunity. However, during strong trends, price can "walk" along the bands for extended periods while the trend continues, so Bollinger Bands work best in ranging markets. The width of the bands measures volatility—narrow bands indicate low volatility and potential breakout, while wide bands indicate high volatility. Advanced traders use Bollinger Band squeeze and expansion patterns. A squeeze occurs when bands narrow significantly, indicating low volatility and potential large move coming. Professional traders combine Bollinger Bands with momentum indicators (RSI, MACD) to confirm signals.`,
        examples: "Price touching upper band suggests overbought; touching lower band suggests oversold.",
        practicalCase: "A trader places short positions when stock price touches upper Bollinger Band with bearish MACD divergence and high volume."
      },
      {
        term: "Moving Average",
        definition: `Moving Averages are technical indicators calculating the average closing price over a specific number of periods, smoothing price data to identify trends and filter noise. The two primary types are simple moving averages (SMA), which weight all prices equally, and exponential moving averages (EMA), which weight recent prices more heavily. The choice of period dramatically affects the indicator's responsiveness: shorter periods (5-20 days) respond quickly but generate false signals; medium periods (50-100 days) balance responsiveness and reliability; longer periods (200-365 days) provide clear trend identification but lag current price. Moving average crossovers generate powerful trading signals. The "golden cross" occurs when a shorter-period moving average (50-day) crosses above a longer-period moving average (200-day), indicating transition from downtrend to uptrend. Professional traders use multiple moving averages simultaneously to confirm trend strength. An ideal bullish setup includes: price above 50-day MA (short-term uptrend), 50-day MA above 200-day MA (medium-term uptrend), and 200-day MA sloping upward (long-term uptrend). This alignment confirms uptrend across all timeframes.`,
        examples: "50-day MA crossing above 200-day MA signals golden cross (bullish); below signals death cross (bearish).",
        practicalCase: "Trend followers buy when price is above 200-day MA during uptrends, using it as dynamic support level."
      },
      {
        term: "RSI Divergence",
        definition: `RSI Divergence occurs when price and RSI momentum move in opposite directions, creating high-probability reversal signals. A bullish divergence forms when price makes a lower low while RSI makes a higher low in oversold territory (below 30), indicating weakening downward momentum and imminent reversal upward. A bearish divergence forms when price makes a higher high while RSI makes a lower high in overbought territory (above 70), indicating weakening upward momentum. These divergences are among the most reliable reversal signals in technical analysis, particularly when confirmed by other indicators like support/resistance levels or trend lines. Hidden divergences (where price and momentum move in the same direction but with different strength) indicate trend continuation. Professional traders wait for confirmation before entering on divergences: volume increase, candlestick pattern completion, or support/resistance break.`,
        examples: "Price hits lower low but RSI bounces higher = bullish divergence, expect upward reversal.",
        practicalCase: "Options traders use RSI divergence at resistance levels: when price makes higher high but RSI makes lower high, they buy put options for high-probability reversals."
      },
      {
        term: "Volume Analysis",
        definition: `Volume Analysis measures the quantity of shares or contracts traded during a price move, revealing the strength of buying or selling pressure. Volume is a critical confirmation tool for price moves: price increases on high volume suggest strong upward conviction; price increases on low volume suggest weak rally vulnerable to reversal. Volume precedes price—smart money accumulates shares on low volume before major moves. On-Balance Volume (OBV) measures cumulative volume; when OBV rises with prices, the uptrend is supported by volume; when OBV falls despite rising prices, weakness is hidden and reversal is imminent. Volume breakdowns identify false breakouts: a breakout without volume surge is likely false. Professional traders combine volume with price action: only taking breakout signals when volume surges to new highs, significantly improving win rates. Volume also identifies accumulation and distribution: rising volume on up days, declining volume on down days indicates accumulation (bullish); rising volume on down days, declining on up days indicates distribution (bearish).`,
        examples: "Price rallies on high volume = strong uptrend; price rallies on low volume = weak, vulnerable to reversal.",
        practicalCase: "Day traders confirm breakouts only with volume surge; breakouts without volume confirmation are stopped out quickly."
      },
      {
        term: "Support & Resistance",
        definition: `Support is a price level where buying pressure increases and prevents further decline; Resistance is a level where selling pressure increases and prevents further advance. These levels form from historical price bounces, psychological round numbers, and technical patterns. When price approaches resistance, it often reverses lower (resistance holds); when price approaches support, it often bounces higher (support holds). However, when price breaks through support/resistance on high volume, it often reverses direction sharply—the broken support becomes new resistance, and broken resistance becomes new support. Professional traders use multiple timeframes to identify confluent support/resistance: when daily support aligns with weekly support and monthly support, it's extremely strong. Price-action traders watch for rejection from support/resistance: if price approaches but doesn't break through, the level strengthens. Pivot points calculate mathematical support/resistance from previous day's high, low, close. Trading near support/resistance requires different strategies: near support, traders buy (expecting bounce); near resistance, traders sell or take profits.`,
        examples: "Price bounces at ₹100 support three times, then breaks on high volume and rallies to ₹150.",
        practicalCase: "Swing traders buy at strong support with favorable risk-reward: if support is at ₹100 and resistance is at ₹120, they risk ₹5-10 to make ₹20."
      }
    ],
    "Options Strategies": [
      {
        term: "Call Option",
        definition: `A call option is a derivative contract granting the right to purchase an underlying asset at a predetermined strike price on or before expiration. Call options offer leveraged exposure to upside with limited downside risk (limited to premium paid). When you buy a call option, you pay a premium upfront that represents the maximum loss—if the underlying never reaches your strike price, you lose only the premium. The value of a call option depends on multiple factors: intrinsic value (price difference between current and strike), time value (time remaining until expiration), volatility, and interest rates. In-the-money (ITM) calls have intrinsic value; at-the-money (ATM) calls have maximum time value; out-of-the-money (OTM) calls have zero intrinsic value. Time decay (theta) works against call buyers—as expiration approaches, time value decreases. Call buying provides 5-20x leverage depending on strike selection. Traders select strikes based on bullish conviction: aggressive traders buy OTM calls with higher leverage; conservative traders buy ATM or ITM calls with lower leverage but higher probability.`,
        examples: "Buy 100-strike call when stock trades at 95 to profit from upside while limiting risk to premium paid.",
        practicalCase: "An investor buys Reliance 2500 calls before earnings, risking only premium while gaining leveraged exposure to upside."
      },
      {
        term: "Put Option",
        definition: `A put option is a derivative contract granting the right to sell underlying assets at a predetermined strike price on or before expiration. Put options profit from price decreases without unlimited losses of short selling. The maximum loss is limited to the premium paid. Put options have interesting characteristics: the maximum profit approaches the strike price as the underlying approaches zero, while short selling has theoretically unlimited losses. Put buying is effective for downside protection and profit from declining prices. Portfolio managers use protective puts (owning stock while buying puts) to limit downside losses without liquidating core holdings. Speculative traders buy puts to profit from declining markets without short selling. Put value increases during market crashes when implied volatility spikes, creating significant profit opportunities. Time decay (theta) works against put buyers, so holding puts into expiration requires price moves to be profitable. Professional traders use puts for hedging specific risks: before earnings announcements, before FOMC meetings, or when technical indicators signal potential reversals.`,
        examples: "Buy protective puts on stock holdings to limit downside losses while maintaining upside.",
        practicalCase: "Portfolio manager buys Nifty 24000 puts before market weakness signal, providing insurance against portfolio decline."
      },
      {
        term: "Covered Call",
        definition: `A covered call is a strategy where an investor owns the underlying stock and sells call options against those shares, generating income through premium collection while capping maximum upside. The "covered" part means underlying shares back the short calls—if calls are exercised, shares are delivered from existing holdings, avoiding unlimited risk. You immediately receive call premium (income), reducing your effective cost basis. If stock stays below strike at expiration, calls expire worthless and you keep both shares and premium, then sell new calls for the next period (rolling). If stock rises above strike, shares are called away at the strike price. The strategy generates steady income on non-volatile stocks or during slow market periods. A quality company valued at ₹50 can sell monthly calls at ₹55 for ₹2 premium income, generating 24% annual return on the stock cost through premium collection plus dividends. The tradeoff is capped upside: if stock rallies to ₹70, you miss the ₹15 gain above strike. Works best for intermediate-term investors willing to sell if stock rallies significantly.`,
        examples: "Own 100 shares at ₹50; sell ₹55 calls for ₹2 premium income.",
        practicalCase: "An income investor owns TCS shares and sells monthly calls 5% above market, generating significant annual income through premium collection."
      },
      {
        term: "Bull Call Spread",
        definition: `A bull call spread combines buying a call at a lower strike and selling a call at a higher strike with the same expiration, limiting both risk and profit potential. This strategy reduces the cost of the long call (and overall risk) by offsetting it with premium from the short call. If buying 100-strike call for ₹5 and selling 110-strike call for ₹2, you pay net ₹3 premium. Maximum profit is the spread width (₹10) minus premium paid (₹3), equaling ₹7 profit if stock rises above 110. Maximum loss is the premium paid (₹3) if stock falls below 100. Breakeven is the lower strike plus net premium: 100 + 3 = 103. Bull call spreads are ideal for defined-risk trading with limited capital. Compared to buying naked calls, spreads reduce premium by 40-60%, significantly improving risk-reward ratios. For every dollar risked, spreads provide 2-4x profit potential. The tradeoff is capped upside—if stock rallies significantly above upper strike, you don't benefit. Risk management is straightforward: maximum loss is known and defined (premium paid), allowing precise position sizing.`,
        examples: "Buy 100-strike call, sell 110-strike call. Max profit at 110, max loss is spread difference minus premium.",
        practicalCase: "Trader expects modest upside in Bank Nifty, buys 43000 call, sells 43500 call—defined risk with lower cost than naked call."
      },
      {
        term: "Bear Put Spread",
        definition: `A bear put spread combines selling a put at a higher strike and buying a put at a lower strike with the same expiration, designed to profit from rising prices. The income generated (net premium received) is the maximum profit, while maximum loss is the spread width minus premium received. If selling 100-strike put for ₹5 and buying 95-strike put for ₹2, you receive net ₹3 premium. Maximum profit is the ₹3 premium if stock stays above 100 at expiration. Maximum loss is the spread width (₹5) minus premium received (₹3), equaling ₹2 if stock falls below 95. Breakeven is the higher strike minus net premium: 100 - 3 = 97. Bear put spreads are income-generating strategies profiting from sideways or rising markets. Unlike naked put selling (unlimited risk), spreads have defined risk equal to spread width, making them suitable for controlled risk traders. The strategy works best when the higher strike is placed at technical support levels—stocks naturally resist falling below significant support. Professional traders select spread widths based on account size: ₹5 spreads for small accounts, ₹10 spreads for medium accounts. Wider spreads provide more premium but increase losses if stock falls sharply.`,
        examples: "Sell 90-strike put, buy 85-strike put with same expiry. Profit from premium if stock stays above 90.",
        practicalCase: "Bullish trader sells Infosys 1900 puts, buys 1850 puts—earns premium if stock stays above 1900 with defined maximum loss."
      },
      {
        term: "Iron Condor",
        definition: `An iron condor combines a bull call spread and bear put spread, profiting from low volatility within a defined price range. The defined-profit zone exists between the two short strikes, with both maximum profit and risk predetermined. The strategy creates four legs: buy lower-strike call, sell higher-strike call (bull call spread), sell put at even higher strike, buy put at lower strike (bear put spread). If the underlying stays between the short strikes at expiration, the condor is at maximum profit. Maximum profit equals the premium received (net credit from selling two calls and two puts minus buying two calls and puts). Maximum loss equals the width of each spread minus the net premium collected. Iron condors are ideal for neutral-to-slightly-bullish markets where the underlying consolidates in a range. The strategy works by placing strikes to capture price ranges where the underlying stock is unlikely to reach. Professional traders select iron condor widths and strike selections based on recent trading range and implied volatility level. The strategy becomes most profitable during low-volatility environments when stocks trade in tight ranges.`,
        examples: "Sell OTM call and put, buy further OTM call and put. Max profit if stock stays between short strikes.",
        practicalCase: "Options seller expects Nifty to trade in range; sells 24200 call/put, buys 24500/23700 calls/puts for defined income."
      }
    ],
    "Derivatives & Futures": [
      {
        term: "Futures Contract",
        definition: `A futures contract is a legally binding agreement to buy or sell a standardized quantity of an asset at a specified price on a predetermined future date. Futures are standardized derivatives traded on exchanges with uniform specifications ensuring high liquidity. Unlike forward contracts (customized OTC agreements), futures are highly liquid with deep bid-ask spreads and continuous price discovery. Futures exist for equity indices (Nifty 50 futures), individual stocks, commodities (gold, crude oil, agricultural products), currencies, and bonds. Futures trading provides leverage that amplifies returns and risks. To trade ₹10 lakh worth of Nifty 50 futures, you typically need only ₹50,000-75,000 in margin (5-7.5% leverage). This enables significant profit potential: a 1% index move becomes 15-20% return on the margin invested. However, leverage works both ways—a 1% adverse move becomes 15-20% loss. Futures require daily mark-to-market settlement: profits and losses are realized daily. If you have unrealized loss exceeding account equity, you receive a margin call requiring additional funds. Professional traders use futures for speculation, hedging, arbitrage, and portfolio management. Portfolio managers use index futures to gain/reduce equity exposure quickly without transaction costs of buying/selling 50+ stocks.`,
        examples: "Buy Nifty 50 futures to gain index exposure with 5-10x leverage without buying 50 individual stocks.",
        practicalCase: "A portfolio manager buys index futures instead of 50 stocks for efficient overnight hedging against market correction."
      },
      {
        term: "Leverage",
        definition: `Leverage is the use of borrowed capital or margin to increase the size of an investment position, amplifying both potential gains and potential losses. In derivatives trading, leverage is typically expressed as a ratio: 5:1 leverage means you can control $5 of assets with $1 of capital. Leverage is the primary appeal of derivatives trading—it enables traders to participate in large market moves with relatively small capital amounts. However, leverage is also the primary risk—it ensures that small adverse moves can quickly wipe out entire account equity. With ₹1 lakh in trading capital and 10:1 leverage, you can control ₹10 lakh in positions. If positions gain 1%, you have ₹1.1 lakh profit (+100% on your ₹1 lakh capital). If positions lose 1%, you have ₹99,000 loss (-10% on capital). If positions lose 10%, you have ₹0 left and face margin calls. The leverage multiplier is a double-edged sword: it magnifies profits during winning trades but magnifies losses during losing trades. Most retail traders underestimate leverage impact and trade overleveraged positions, leading to account wipeouts after 2-3 consecutive losing trades. Professional traders use leverage strategically and carefully, maintaining low leverage (2-5:1) and compounding slowly over years.`,
        examples: "With 5% margin, you can control ₹100 position with only ₹5 capital; 20x amplification of price moves.",
        practicalCase: "A trader risks ₹1 lakh with 10:1 leverage to control ₹10 lakh in futures, turning 1% move into 10% P&L."
      },
      {
        term: "Margin Call",
        definition: `A margin call is a formal demand from a broker for an account holder to deposit additional funds when account equity falls below maintenance margin requirements. Margin accounts operate on the principle that traders maintain minimum equity at all times—if losses exceed this threshold, brokers force liquidation of positions. Understanding margin calls is essential because they're the mechanism that converts theoretical unlimited losses into actual forced liquidations. If you have ₹5 lakh in trading capital using 10:1 leverage to control ₹50 lakh in positions, maintenance margin might be ₹2.5 lakh. If losses reduce account to ₹2.5 lakh (breakeven on 50% loss), you're at the margin call level. If losses continue to ₹2.4 lakh, you receive a margin call demanding additional capital. If you don't deposit funds within the specified time (usually 2-24 hours), the broker automatically liquidates positions to restore account equity above maintenance margin. This forced liquidation often occurs at the worst possible time: during market crashes when losses are already severe. Professional traders manage margin accounts through careful position sizing and stops, maintaining account equity well above maintenance margin to provide a buffer against adverse moves.`,
        examples: "Trading with ₹5 lakh; if losses reduce account to ₹1 lakh, broker demands additional funds immediately.",
        practicalCase: "A careless trader receives 5 margin calls in 2 months due to overleveraged positions, losing both capital and time managing emergency funding."
      },
      {
        term: "Contango",
        definition: `Contango is a market condition where futures prices are progressively higher for farther-out contract months, with the term structure sloping upward. In contango, March futures trade higher than February, April trades higher than March, and so on. This structure reflects the cost of carrying the underlying asset to future delivery dates: storage costs, insurance, financing costs. In normal circumstances, contango is the expected market structure because these carrying costs must be compensated. A trader storing gold from today until three months hence incurs real costs that must be recovered through the price premium. Contango structures reveal valuable information about supply-demand dynamics. A steep contango (large price differences between contract months) indicates strong current demand, limited supply, and high carrying cost premiums. A gentle contango indicates ample supply, weak demand, and low carrying costs. When contango is extreme (far-month premiums over 10% above nearby), storage businesses profit: warehouse operators buy physical commodities at spot prices and simultaneously sell far-month futures at premium prices, locking in the spread as profit. Professional commodity traders carefully time their rolls to minimize contango costs.`,
        examples: "Spot gold ₹60,000; 3-month futures ₹60,500 (contango structure with carrying costs).",
        practicalCase: "Storage businesses profit from contango: buy physical commodity, sell futures at premium to cover storage, lock in spread as profit."
      }
    ],
    "Risk Management": [
      {
        term: "Stop-Loss Orders",
        definition: `Stop-loss orders are instructions to automatically sell a security if it declines to a specified price, designed to limit potential losses and prevent emotional decisions during market stress. When you buy a stock at ₹100 and place a stop-loss at ₹95, your broker automatically sells your shares if the stock price touches ₹95, limiting your loss to ₹5 per share regardless of further decline. Stop-losses are fundamental risk management tools separating professional traders from emotional investors—professionals execute losses when predetermined limits are hit; emotional investors hold losing positions, hoping they'll recover. Stop-loss execution can occur through mental stops (remember to sell if price hits target) or actual orders (broker automatically sells). Mental stops rely on emotional discipline and market monitoring; actual orders guarantee execution but might execute at unfavorable prices during gap-down openings. Advanced traders use different stop-loss types: hard stops (actual orders) for disciplined trading, mental stops for range-bound trading where hard stops would be too tight, and trailing stops for trending trades. The critical decision is stop-loss placement: too close (stopped out on noise), too far (losses exceed acceptable risk). The psychology of stop-losses reveals trader maturity—professional traders set stops based on technical analysis and never move them.`,
        examples: "Buy Reliance at ₹2500; set stop-loss at ₹2400 to limit loss to ₹100 per share.",
        practicalCase: "Disciplined trader always sets stops before entry; lost 2% on bad trade but avoided 15% disaster by exiting on stop."
      },
      {
        term: "Hedging",
        definition: `Hedging is an investment strategy using derivatives or other instruments to offset or reduce potential losses in existing positions, reducing overall portfolio risk in exchange for capping maximum gains. Unlike speculation (taking on risk for profit), hedging reduces risk. A farmer planting crops faces price risk—if crop prices decline, profits are minimal; if prices surge, profits are substantial. By selling futures contracts at harvest time, the farmer locks in a price (hedges the risk) but forgoes the opportunity to benefit from price surges. Hedging mechanisms vary across asset classes. Equity portfolio managers hedge downside risk by buying put options (insurance) or selling index futures. An investor owning ₹50 lakh in stocks might buy ₹5-10 lakh in protective puts (5-10% of portfolio), spending 1-2% per year in option premiums to protect against 20%+ portfolio declines. Companies with foreign earnings hedge currency risk through forward contracts, swaps, or options. The cost-benefit of hedging is the central decision: hedging has costs (option premiums, transaction costs, foregone upside) that must be justified by protection provided. Cheap hedging (when risks are elevated) is attractive; expensive hedging (when risks are calm) is questionable. Institutional investors systematically hedge tail risks through index put options.`,
        examples: "Own stock; buy put options to hedge downside; own foreign business; buy currency forwards to hedge FX risk.",
        practicalCase: "Exporter earning USD in 3 months buys forward contracts at ₹83/USD, protecting margin from currency volatility."
      },
      {
        term: "Position Sizing",
        definition: `Position sizing is the practice of determining appropriate trade size based on account size, risk tolerance, stop-loss distance, and conviction in the trade setup. Proper position sizing separates long-term successful traders from those who blow up accounts. The fundamental principle is: each trade should risk only a small percentage of account capital (1-2% maximum risk per trade). If a trader has ₹10 lakh account and is willing to risk 1% (₹10,000), and the stop-loss is 100 points away, they can buy only 100 shares. Position sizing calculation: Account Size × Maximum Risk % ÷ Stop-Loss Distance = Trade Size. A ₹5 lakh account, 1% risk (₹5,000), stop-loss 50 points away: ₹5,000 ÷ 50 = 100 shares. This mathematical approach ensures that account risk is consistent regardless of market conditions or individual trades. During volatile periods when stops need to be placed farther away, position size automatically reduces to maintain consistent account risk. During calm periods when stops are tight, position size increases. This automatic adjustment prevents overleveraging in volatile markets. Professional traders adjust position size based on conviction and risk-reward ratio. A high-conviction setup with 3:1 reward-to-risk deserves larger position size than a low-conviction setup with 1:1 reward-to-risk.`,
        examples: "Account ₹10 lakh, risk ₹10,000 per trade (1%), stop 100 points away = buy 100 shares.",
        practicalCase: "Trader with ₹5 lakh account limits each trade to ₹5,000 risk; this discipline prevents account wipeouts."
      },
      {
        term: "Diversification",
        definition: `Diversification is an investment strategy of spreading capital across multiple assets, sectors, industries, geographies, and asset classes to reduce overall portfolio risk. The mathematical principle of diversification is that combining imperfectly correlated assets creates a portfolio with lower volatility than individual assets. If Asset A goes up 10% when Asset B goes down 5%, combining them provides smoother returns than holding either alone. Perfect diversification would eliminate all risk except systematic (market) risk. The classic diversification approach spreads capital across asset classes: 20% stocks, 30% bonds, 20% gold, 30% real estate provides diversification across historically uncorrelated assets with different risk-return profiles. Within stocks, sector diversification reduces concentration risk: holding defensive sectors (pharma, utilities) with cyclicals (auto, metals) and growth (IT, telecom) ensures portfolio doesn't correlate entirely to economic cycle. Geographic diversification reduces currency and country-specific risks: international stocks and bonds reduce dependence on home country economic performance. The portfolio construction process applies modern portfolio theory: calculating correlations between potential holdings and constructing efficient portfolios that minimize risk for a given return level. Diversification has interesting dynamics: a poorly-performing holding in a diversified portfolio might actually improve overall risk metrics because it provides uncorrelated returns that offset volatility elsewhere. However, diversification has psychological costs—the portfolio's largest position is never your best idea, and returns lag concentrated portfolios during bull markets.`,
        examples: "Hold 20% stocks, 30% bonds, 20% gold, 30% real estate instead of 100% in one stock.",
        practicalCase: "Portfolio fell 12% when tech crashed, but recovered quickly due to bonds/gold gains offsetting stock losses."
      }
    ]
  };

  const handleTermClick = (e, term) => {
    const element = e.currentTarget;
    const gridWidth = gridRef.current?.offsetWidth || window.innerWidth;
    const elementLeft = element.offsetLeft;
    const elementCenterX = elementLeft + element.offsetWidth / 2;

    // If element is in left half of grid, show popup on right; else show on left
    const shouldShowRight = elementCenterX < gridWidth / 2;
    setPopupPosition(shouldShowRight ? "right" : "left");
    setSelectedTerm(term);
    setShowAddNote(false);
    setNewNote("");
  };

  const handleAddNote = () => {
    if (selectedTerm && newNote.trim()) {
      const termKey = selectedTerm.term;
      const currentNotes = userNotes[termKey] || [];
      setUserNotes({
        ...userNotes,
        [termKey]: [...currentNotes, { id: Date.now(), text: newNote, date: new Date().toLocaleDateString() }]
      });
      setNewNote("");
      setShowAddNote(false);
    }
  };

  const deleteNote = (termKey, id) => {
    setUserNotes({
      ...userNotes,
      [termKey]: userNotes[termKey].filter(note => note.id !== id)
    });
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen pt-24 pb-16 px-6 lg:px-12">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-3">
          Financial Glossary
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          Explore {Object.values(glossaryData).flat().length}+ financial terms across {Object.keys(glossaryData).length} categories. Click any term to view comprehensive definitions with practical examples.
        </p>
      </div>

      {/* GRID LAYOUT */}
      <div ref={gridRef} className="max-w-7xl mx-auto space-y-12">
        {Object.entries(glossaryData).map((categoryEntry, idx) => (
          <div key={idx}>
            {/* CATEGORY TITLE */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-1.5 bg-gradient-to-b from-teal-600 to-blue-600 rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                {categoryEntry[0]}
              </h2>
              <div className="ml-auto text-xs font-semibold text-teal-600 bg-teal-50 px-4 py-2 rounded-full">
                {categoryEntry[1].length} terms
              </div>
            </div>

            {/* TERMS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryEntry[1].map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  ref={(el) => (termRefs.current[item.term] = el)}
                  onClick={(e) => handleTermClick(e, item)}
                  className="group cursor-pointer h-full"
                >
                  <div className="h-full bg-white rounded-xl border-2 border-slate-200 p-6 hover:border-teal-400 hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col">
                    <h3 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-teal-600 transition-colors">
                      {item.term}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed flex-1 line-clamp-3">
                      {item.definition.substring(0, 120)}...
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-teal-600 text-xs font-semibold group-hover:translate-x-1 transition-transform">
                      View Definition
                      <span className="text-lg">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* DETAIL POPUP - DYNAMIC POSITIONING */}
      {selectedTerm && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40 flex items-center justify-center p-4 lg:p-0"
          onClick={() => setSelectedTerm(null)}
        >
          {/* Popup Container */}
          <div
            className={`bg-white rounded-3xl shadow-2xl overflow-hidden h-[85vh] w-[85vh] max-w-[600px] max-h-[600px] flex flex-col animate-in fade-in scale-in-95 duration-300 ${
              popupPosition === "left" ? "lg:mr-auto lg:ml-8" : "lg:ml-auto lg:mr-8"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-5 text-white relative flex-shrink-0">
              <h2 className="text-2xl font-bold mb-1 pr-10 line-clamp-2">
                {selectedTerm.term}
              </h2>
              <p className="text-teal-100 text-xs">Financial Education Hub</p>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedTerm(null)}
                className="absolute top-4 right-4 p-2 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full transition-all duration-200 hover:scale-110 hover:rotate-90"
                title="Close definition"
              >
                <X size={20} className="text-white" />
              </button>
            </div>

            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5 scrollbar-thin scrollbar-thumb-teal-300 scrollbar-track-slate-100">
              {/* DEFINITION */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-4 border border-slate-200">
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="text-lg">📖</span> Complete Definition
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm whitespace-pre-wrap">
                  {selectedTerm.definition}
                </p>
              </div>

              {/* EXAMPLES */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
                <h3 className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="text-lg">💡</span> Examples
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  {selectedTerm.examples}
                </p>
              </div>

              {/* PRACTICAL CASE */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                <h3 className="text-xs font-bold text-green-700 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="text-lg">🎯</span> Real-World Application
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  {selectedTerm.practicalCase}
                </p>
              </div>

              {/* USER NOTES */}
              <div className="border-t-2 border-slate-200 pt-3">
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="text-base">📝</span> Notes
                </h3>

                {userNotes[selectedTerm.term] && userNotes[selectedTerm.term].length > 0 ? (
                  <div className="space-y-2 mb-2 max-h-20 overflow-y-auto">
                    {userNotes[selectedTerm.term].map(note => (
                      <div
                        key={note.id}
                        className="bg-gradient-to-r from-amber-50 to-yellow-50 p-2 rounded-lg border border-yellow-300 relative group hover:shadow-md transition-shadow"
                      >
                        <p className="text-xs text-amber-700 font-semibold">
                          {note.date}
                        </p>
                        <p className="text-xs text-slate-700 line-clamp-2">
                          {note.text}
                        </p>
                        <button
                          onClick={() => deleteNote(selectedTerm.term, note.id)}
                          className="absolute top-1 right-1 p-0.5 opacity-0 group-hover:opacity-100 transition-opacity bg-red-100 hover:bg-red-200 rounded-full"
                          title="Delete note"
                        >
                          <X size={12} className="text-red-600" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-500 italic bg-slate-100 p-2 rounded mb-2">
                    No notes yet
                  </p>
                )}

                {/* ADD NOTE BUTTON */}
                {!showAddNote ? (
                  <button
                    onClick={() => setShowAddNote(true)}
                    className="w-full flex items-center justify-center gap-1 px-3 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-semibold text-xs hover:shadow-lg transition-all"
                  >
                    <Plus size={14} />
                    Add Note
                  </button>
                ) : (
                  <div className="space-y-2 bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <textarea
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      placeholder="Your insight..."
                      className="w-full p-2 border border-slate-300 rounded text-xs resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                      rows={2}
                      autoFocus
                    />
                    <div className="flex gap-1">
                      <button
                        onClick={handleAddNote}
                        className="flex-1 px-2 py-1 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded text-xs font-semibold"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => {
                          setShowAddNote(false);
                          setNewNote("");
                        }}
                        className="flex-1 px-2 py-1 border border-slate-300 text-slate-700 rounded text-xs font-semibold"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
