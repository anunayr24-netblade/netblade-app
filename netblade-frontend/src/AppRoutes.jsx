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
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}