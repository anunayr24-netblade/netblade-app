import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Community from "./pages/Community";
import About from "./pages/About";
import Insights from "./pages/Insights";
import Market from "./pages/Market";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

import ResearchAnalystDashboard from "./pages/ResearchAnalystDashboard";
import AccountSettings from "./pages/AccountSettings";

import TechnicalAnalysis from "./pages/TechnicalAnalysis";
import RiskManagement from "./pages/RiskManagement";
import Derivatives from "./pages/Derivatives";
import Cryptocurrency from "./pages/Cryptocurrency";
import Bonds from "./pages/Bonds";
import MutualFunds from "./pages/MutualFunds";
import Commodities from "./pages/Commodities";
import TechnicalIndicators from "./pages/TechnicalIndicators";
import MarketPsychology from "./pages/MarketPsychology";

import Articles from "./pages/Articles";
import HelpCenter from "./pages/HelpCenter";
import Glossary from "./pages/Glossary";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Disclaimer from "./pages/Disclaimer";

import MarketEducation from "./pages/MarketEducation";
import MarketInsightsPage from "./pages/MarketInsightsPage";
import CommunityDriven from "./pages/CommunityDriven";

import TheProblem from "./pages/TheProblem";
import OurApproach from "./pages/OurApproach";
import OurBelief from "./pages/OurBelief";

import MarketFoundations from "./pages/MarketFoundations";
import CandlestickPatterns from "./pages/CandlestickPatterns";
import RealMarketApplication from "./pages/RealMarketApplication";
import MarketBasicsPrinciples from "./pages/MarketBasicsPrinciples";

// Overview pages
import MarketFoundationsOverview from "./pages/MarketFoundationsOverview";
import TechnicalAnalysisOverview from "./pages/TechnicalAnalysisOverview";
import CandlestickPatternsOverview from "./pages/CandlestickPatternsOverview";
import RiskManagementOverview from "./pages/RiskManagementOverview";
import TradingPsychologyOverview from "./pages/TradingPsychologyOverview";
import RealMarketApplicationOverview from "./pages/RealMarketApplicationOverview";

// Risk Management subpages
import WhatIsRiskManagement from "./pages/WhatIsRiskManagement";
import PositionSizing from "./pages/PositionSizing";
import StopLoss from "./pages/StopLoss";
import RiskRewardRatio from "./pages/RiskRewardRatio";
import PositionSizingFormula from "./pages/PositionSizingFormula";
import CapitalAllocation from "./pages/CapitalAllocation";
import DailyWeeklyRiskRules from "./pages/DailyWeeklyRiskRules";
import PsychologicalRisk from "./pages/PsychologicalRisk";
import CommonRiskMistakes from "./pages/CommonRiskMistakes";

// Technical Analysis subpages
import TechnicalAnalysisBasics from "./pages/TechnicalAnalysisBasics";
import CandlestickPatternsTA from "./pages/CandlestickPatternsTA";
import ChartPatterns from "./pages/ChartPatterns";
import IndicatorsOscillators from "./pages/IndicatorsOscillators";
import VolumeAnalysis from "./pages/VolumeAnalysis";
import TrendAnalysis from "./pages/TrendAnalysis";
import SupportResistance from "./pages/SupportResistance";
import Timeframes from "./pages/Timeframes";
import RiskMoneyManagementTA from "./pages/RiskMoneyManagementTA";
import TradingStrategies from "./pages/TradingStrategies";
import BullishReversalPatterns from "./pages/BullishReversalPatterns";
import BearishReversalPatterns from "./pages/BearishReversalPatterns";
import ContinuationPatterns from "./pages/ContinuationPatterns";
import SpecialAdvancedPatterns from "./pages/SpecialAdvancedPatterns";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* LANDING PAGE (Navbar YES, Footer NO) */}
        <Route element={<MainLayout showFooter={false} />}>
          <Route path="/" element={<Landing />} />
        </Route>

        {/* AUTH PAGES (NO NAVBAR) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* APP PAGES (FULL LAYOUT) */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/market" element={<Market />} />
          <Route path="/market-basics-principles" element={<MarketBasicsPrinciples />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />

          <Route
            path="/research-analyst-dashboard"
            element={<ResearchAnalystDashboard />}
          />

          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/technical-analysis" element={<TechnicalAnalysis />} />
          <Route path="/risk-management" element={<RiskManagement />} />
          <Route path="/derivatives" element={<Derivatives />} />
          <Route path="/cryptocurrency" element={<Cryptocurrency />} />
          <Route path="/bonds" element={<Bonds />} />
          <Route path="/mutual-funds" element={<MutualFunds />} />
          <Route path="/commodities" element={<Commodities />} />
          <Route path="/technical-indicators" element={<TechnicalIndicators />} />
          <Route path="/market-psychology" element={<MarketPsychology />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer />} />

          {/* NEW OBJECTIVE SUBPAGES */}
          <Route path="/market-education" element={<MarketEducation />} />
          <Route path="/market-insights-page" element={<MarketInsightsPage />} />
          <Route path="/community-driven" element={<CommunityDriven />} />

          {/* WHY WE ARE HERE SUBPAGES */}
          <Route path="/the-problem" element={<TheProblem />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/our-belief" element={<OurBelief />} />

          {/* WHAT YOU LEARN SUBPAGES */}
          <Route path="/market-foundations" element={<MarketFoundations />} />
          <Route path="/candlestick-patterns" element={<CandlestickPatterns />} />
          <Route path="/real-market-application" element={<RealMarketApplication />} />

          {/* OVERVIEW PAGES (Public Access) */}
          <Route path="/market-foundations-overview" element={<MarketFoundationsOverview />} />
          <Route path="/technical-analysis-overview" element={<TechnicalAnalysisOverview />} />
          <Route path="/candlestick-patterns-overview" element={<CandlestickPatternsOverview />} />
          <Route path="/risk-management-overview" element={<RiskManagementOverview />} />
          <Route path="/trading-psychology-overview" element={<TradingPsychologyOverview />} />
          <Route path="/real-market-application-overview" element={<RealMarketApplicationOverview />} />

          {/* RISK MANAGEMENT MODULE SUBPAGES */}
          <Route path="/risk-management/what-is-risk-management" element={<WhatIsRiskManagement />} />
          <Route path="/risk-management/position-sizing" element={<PositionSizing />} />
          <Route path="/risk-management/stop-loss" element={<StopLoss />} />
          <Route path="/risk-management/risk-reward-ratio" element={<RiskRewardRatio />} />
          <Route path="/risk-management/position-sizing-formula" element={<PositionSizingFormula />} />
          <Route path="/risk-management/capital-allocation" element={<CapitalAllocation />} />
          <Route path="/risk-management/daily-weekly-risk-rules" element={<DailyWeeklyRiskRules />} />
          <Route path="/risk-management/psychological-risk" element={<PsychologicalRisk />} />
          <Route path="/risk-management/common-mistakes" element={<CommonRiskMistakes />} />

          {/* TECHNICAL ANALYSIS MODULE SUBPAGES */}
          <Route path="/technical-analysis/basics" element={<TechnicalAnalysisBasics />} />
          <Route path="/technical-analysis/candlestick-patterns-ta" element={<CandlestickPatternsTA />} />
          <Route path="/technical-analysis/chart-patterns" element={<ChartPatterns />} />
          
          {/* CANDLESTICK PATTERNS MODULES */}
          <Route path="/bullish-reversal-patterns" element={<BullishReversalPatterns />} />
          <Route path="/bearish-reversal-patterns" element={<BearishReversalPatterns />} />
          <Route path="/continuation-patterns" element={<ContinuationPatterns />} />
          <Route path="/special-advanced-patterns" element={<SpecialAdvancedPatterns />} />
          <Route path="/technical-analysis/indicators-oscillators" element={<IndicatorsOscillators />} />
          <Route path="/technical-analysis/volume-analysis" element={<VolumeAnalysis />} />
          <Route path="/technical-analysis/trend-analysis" element={<TrendAnalysis />} />
          <Route path="/technical-analysis/support-resistance" element={<SupportResistance />} />
          <Route path="/technical-analysis/timeframes" element={<Timeframes />} />
          <Route path="/technical-analysis/risk-money-management" element={<RiskMoneyManagementTA />} />
          <Route path="/technical-analysis/trading-strategies" element={<TradingStrategies />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}