import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Learn from "./pages/Learn";
import Community from "./pages/Community";
import About from "./pages/About";
import Insights from "./pages/Insights";
import Market from "./pages/Market";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Disclaimer from "./pages/Disclaimer";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="learn" element={<Learn />} />
          <Route path="community" element={<Community />} />
          <Route path="about" element={<About />} />
          <Route path="insights" element={<Insights />} />
          <Route path="market" element={<Market />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="account-settings" element={<AccountSettings />} />
          <Route path="technical-analysis" element={<TechnicalAnalysis />} />
          <Route path="risk-management" element={<RiskManagement />} />
          <Route path="derivatives" element={<Derivatives />} />
          <Route path="cryptocurrency" element={<Cryptocurrency />} />
          <Route path="bonds" element={<Bonds />} />
          <Route path="mutual-funds" element={<MutualFunds />} />
          <Route path="commodities" element={<Commodities />} />
          <Route path="technical-indicators" element={<TechnicalIndicators />} />
          <Route path="market-psychology" element={<MarketPsychology />} />
          <Route path="articles" element={<Articles />} />
          <Route path="help-center" element={<HelpCenter />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="disclaimer" element={<Disclaimer />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}