import { useState, useEffect } from "react";

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user is authenticated and hasn't seen the disclaimer in this session
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const hasSeenDisclaimerThisSession = sessionStorage.getItem("hasSeenDisclaimerThisSession");

    if (isAuthenticated === "true" && hasSeenDisclaimerThisSession !== "true") {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    // Store in sessionStorage so it shows again on next login/session
    sessionStorage.setItem("hasSeenDisclaimerThisSession", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in overflow-y-auto">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-yellow-500/30 animate-scale-in my-8">
        <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
          <span className="text-4xl md:text-5xl">⚠️</span>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Important Disclaimer</h2>
        </div>

        <div className="space-y-3 md:space-y-4 text-slate-300 mb-6 md:mb-8">
          <p className="text-base md:text-lg font-semibold text-center">
            Educational content only. Not investment advice. Market investments are subject to risk.
          </p>

          <div className="bg-slate-700/30 rounded-xl p-4 md:p-6 border border-slate-600/30 space-y-2 md:space-y-3 text-sm max-h-[50vh] overflow-y-auto">
            <p>
              <strong className="text-yellow-400">Please Read Carefully:</strong> All content provided on this platform is for 
              <strong> informational and educational purposes only</strong>.
            </p>
            
            <p>
              We do not provide financial, investment, or trading advice. The information presented here should not be 
              considered as a recommendation to buy, sell, or hold any financial instruments.
            </p>

            <p>
              <strong className="text-yellow-400">Market Risks:</strong> Trading and investing in financial markets involve 
              substantial risk of loss. Past performance is not indicative of future results. You may lose some or all of 
              your invested capital.
            </p>

            <p>
              <strong className="text-yellow-400">Professional Advice:</strong> Please consult with a qualified financial 
              advisor or investment professional before making any investment decisions based on your personal financial 
              situation, risk tolerance, and investment objectives.
            </p>

            <p>
              By using this platform, you acknowledge that you have read, understood, and agree to this disclaimer.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleAccept}
            className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 
                     text-white font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl 
                     hover:scale-105 transform text-base md:text-lg"
          >
            I Understand & Accept
          </button>
        </div>

        <p className="text-center text-xs text-slate-500 mt-6">
          You will see this disclaimer each time you log in to ensure you're aware of the risks.
        </p>
      </div>
    </div>
  );
}
