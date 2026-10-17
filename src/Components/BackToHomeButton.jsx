import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const BackToHomeButton = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
      <div className="w-full px-5 sm:px-10 lg:px-16 py-6 flex items-center justify-between pointer-events-auto">
        {/* Left: Vishrut Pathak identity + Return button */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="group inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#1e0060]/80 hover:bg-white text-white hover:text-[#15004b] border border-white/20 hover:border-white transition-all duration-300 backdrop-blur-xl shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="font-['Space_Grotesk'] text-xs sm:text-sm uppercase tracking-wider font-semibold">
              Home
            </span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 pl-2">
            <span className="w-2 h-2 rounded-full bg-[#6ee7f7] animate-pulse"></span>
            <span className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-white/70 font-medium">
              Vishrut Pathak
            </span>
          </div>
        </div>

        {/* Right: Quick switcher to the other page + Resume */}
        <div className="flex items-center gap-3">
          {location.pathname === "/projects" ? (
            <Link
              to="/agence"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/25 hover:border-white text-white/90 hover:text-white bg-[#1e0060]/60 hover:bg-[#2d1473] transition-all duration-200 text-xs sm:text-sm font-['Space_Grotesk'] uppercase tracking-wider font-semibold backdrop-blur-md"
            >
              <span>About Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/25 hover:border-white text-white/90 hover:text-white bg-[#1e0060]/60 hover:bg-[#2d1473] transition-all duration-200 text-xs sm:text-sm font-['Space_Grotesk'] uppercase tracking-wider font-semibold backdrop-blur-md"
            >
              <span>Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}

          <a
            href="#resume"
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white text-[#15004b] hover:bg-[#6ee7f7] text-xs sm:text-sm font-['Space_Grotesk'] uppercase tracking-wider font-bold transition-all duration-200 shadow-md"
          >
            Resume ↓
          </a>
        </div>
      </div>
    </header>
  );
};

export default BackToHomeButton;
