import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthModal from "./AuthModal";

const colorMap = {
  blue: { bg: "bg-blue-500/20", text: "text-blue-300", button: "bg-blue-600 hover:bg-blue-500", border: "text-blue-400", gradientBorder: "border-blue-500/30" },
  green: { bg: "bg-green-500/20", text: "text-green-300", button: "bg-green-600 hover:bg-green-500", border: "text-green-400", gradientBorder: "border-green-500/30" },
  red: { bg: "bg-red-500/20", text: "text-red-300", button: "bg-red-600 hover:bg-red-500", border: "text-red-400", gradientBorder: "border-red-500/30" },
  purple: { bg: "bg-purple-500/20", text: "text-purple-300", button: "bg-purple-600 hover:bg-purple-500", border: "text-purple-400", gradientBorder: "border-purple-500/30" },
  orange: { bg: "bg-orange-500/20", text: "text-orange-300", button: "bg-orange-600 hover:bg-orange-500", border: "text-orange-400", gradientBorder: "border-orange-500/30" },
  pink: { bg: "bg-pink-500/20", text: "text-pink-300", button: "bg-pink-600 hover:bg-pink-500", border: "text-pink-400", gradientBorder: "border-pink-500/30" },
  indigo: { bg: "bg-indigo-500/20", text: "text-indigo-300", button: "bg-indigo-600 hover:bg-indigo-500", border: "text-indigo-400", gradientBorder: "border-indigo-500/30" },
  emerald: { bg: "bg-emerald-500/20", text: "text-emerald-300", button: "bg-emerald-600 hover:bg-emerald-500", border: "text-emerald-400", gradientBorder: "border-emerald-500/30" },
  amber: { bg: "bg-amber-500/20", text: "text-amber-300", button: "bg-amber-600 hover:bg-amber-500", border: "text-amber-400", gradientBorder: "border-amber-500/30" },
  cyan: { bg: "bg-cyan-500/20", text: "text-cyan-300", button: "bg-cyan-600 hover:bg-cyan-500", border: "text-cyan-400", gradientBorder: "border-cyan-500/30" },
  slate: { bg: "bg-slate-700", text: "text-slate-300", button: "bg-slate-600 hover:bg-slate-500", border: "text-slate-400", gradientBorder: "border-slate-600/50" },
};

export default function CourseCard({
  title,
  level,
  lessons,
  benefit,
  description,
  topics = [],
  duration,
  coursePath,
  icon = null,
  color = "emerald",
  animationDelay = "0",
}) {
  const [flipped, setFlipped] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const navigate = useNavigate();

  // TEMP auth check (later replaced by real auth)
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  
  // Use description if benefit is not provided
  const cardDescription = benefit || description;
  
  // Get color classes
  const colors = colorMap[color] || colorMap.emerald;

  const handleStart = () => {
    if (isAuthenticated) {
      navigate(coursePath);
    } else {
      setShowAuthModal(true);
    }
  };

  return (
    <>
      <div
        className="relative h-[22rem] sm:h-80 w-full"
        style={{ perspective: '1000px' }}
      >
      <div
        className="relative h-full transition-transform duration-700 ease-in-out"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" 
        }}
      >
        {/* FRONT */}
        <div 
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 p-4 sm:p-6 shadow-xl hover:shadow-2xl border ${colors.gradientBorder} transition-all duration-300 hover:border-opacity-100 flex flex-col`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Icon Container */}
          <div className={`w-12 h-12 sm:w-14 sm:h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-md border ${colors.gradientBorder}`}>
            {icon ? icon : (
              <svg className={`w-6 h-6 sm:w-7 sm:h-7 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            )}
          </div>
          
          {/* Header Section */}
          <div className="flex items-start justify-between mb-2 sm:mb-3">
            <div className="flex-1">
              <span className={`inline-block text-xs font-bold rounded-md ${colors.bg} ${colors.border} px-2 sm:px-2.5 py-1 uppercase tracking-wider`}>
                {level}
              </span>
            </div>
            <span className="text-xs font-semibold text-slate-400 bg-slate-700/50 rounded-md px-2 py-1 border border-slate-600/30">{lessons} lessons</span>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 line-clamp-2 leading-tight">
            {title}
          </h3>

          <p className="text-xs sm:text-sm leading-relaxed text-slate-300 line-clamp-2 mb-auto">
            {cardDescription}
          </p>

          {/* Footer Section */}
          <div className="mt-auto pt-3 sm:pt-4 border-t border-slate-600/30 flex items-center justify-between gap-2 sm:gap-3">
            {/* Start Learning Button */}
            <button
              onClick={handleStart}
              className={`flex-1 ${colors.button} text-white font-bold text-xs sm:text-sm py-2 px-3 sm:px-4 rounded-lg transition-all hover:shadow-md`}
            >
              <span className="flex items-center justify-center gap-1.5">
                Start <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>

            {/* More Details Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setFlipped(true)
              }}
              className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-all border border-slate-600/30 hover:border-slate-500/50 flex items-center justify-center"
              title="View course details"
            >
              <span className="text-sm sm:text-base">ℹ️</span>
            </button>
          </div>
        </div>

        {/* BACK */}
        <div 
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 p-4 sm:p-6 text-white shadow-xl border border-slate-600/50 flex flex-col"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)' 
          }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4 sm:mb-5">
            <h3 className="text-base sm:text-lg font-bold flex-1 leading-tight line-clamp-2">{title}</h3>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setFlipped(false)
              }}
              className="text-slate-400 hover:text-white text-xl sm:text-2xl font-light flex-shrink-0 ml-2 sm:ml-3 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Topics Section */}
          <div className="mb-3 sm:mb-4 flex-1 overflow-y-auto">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2 sm:mb-3">What You'll Learn</p>
            <ul className="space-y-1.5 sm:space-y-2">
              {topics.length > 0 ? (
                topics.slice(0, 4).map((t, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2">
                    <span className={`${colors.text} font-bold text-base sm:text-lg leading-none flex-shrink-0`}>✓</span>
                    <span>{t}</span>
                  </li>
                ))
              ) : (
                <li className="text-xs sm:text-sm text-slate-300">Comprehensive course content</li>
              )}
            </ul>
          </div>

          {/* Duration */}
          {duration && (
            <div className="py-2 px-3 bg-slate-700/50 rounded-lg mb-3 sm:mb-4 border border-slate-600/30">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Duration</p>
              <p className="text-xs sm:text-sm font-bold text-white mt-1">{duration}</p>
            </div>
          )}

          {/* CTA Button */}
          <button
            onClick={handleStart}
            className={`w-full rounded-lg ${colors.button} py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg`}
          >
            {isAuthenticated ? "🚀 Start Learning" : "🔐 Login to Start"}
          </button>
        </div>
      </div>
      </div>

      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLoginSuccess={() => {
          setShowAuthModal(false);
          navigate(coursePath);
        }}
      />
    </>
  );
}
