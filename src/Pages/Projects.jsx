import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { projectsData, personalInfo } from "../data/portfolioData";
import BackToHomeButton from "../Components/BackToHomeButton";
import {
  ArrowUpRight,
  ChevronDown,
  Terminal,
  Code,
  Layers,
  ArrowDown,
  Mail,
} from "lucide-react";

const Projects = () => {
  // First project expanded by default for immediate engagement
  const [openProject, setOpenProject] = useState(projectsData[0]?.id || null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleProject = (id) => {
    setOpenProject(openProject === id ? null : id);
  };

  return (
    <div className="bg-[#15004b] text-[#e7deff] min-h-screen relative overflow-x-hidden selection:bg-[#6ee7f7] selection:text-[#15004b] font-['Inter']">
      {/* Dynamic Ambient Background Mesh */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[25%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-[#0041c0]/35 blur-[140px]" />
        <div className="absolute top-[25%] -right-[15%] w-[50vw] h-[50vw] rounded-full bg-[#38237e]/60 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-[#220269]/70 blur-[130px]" />
      </div>

      {/* Floating Cursor Project Preview (desktop only) */}
      {hoveredProject && (
        <div
          className="fixed pointer-events-none z-40 transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 w-[340px] h-[210px] rounded-xl overflow-hidden bg-[#2d1473]/90 shadow-2xl backdrop-blur-md hidden lg:block border border-white/20"
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        >
          <img
            src={hoveredProject.previewImage}
            alt={hoveredProject.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10003d]/90 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <span className="font-['Space_Grotesk'] text-xs uppercase text-white tracking-wider font-bold">
              {hoveredProject.title}
            </span>
            <span className="font-['Space_Grotesk'] text-[11px] text-[#6ee7f7] flex items-center gap-1 font-semibold">
              EXPAND <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      )}

      {/* Header replacing navbar */}
      <BackToHomeButton />

      <main className="w-full pt-28 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 flex flex-col">
          {/* Header Banner / Title Section */}
          <section className="pt-6 sm:pt-12 pb-10 border-b border-white/15">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
              <div className="flex items-baseline gap-4 flex-wrap">
                <h1 className="font-['Space_Grotesk'] text-5xl sm:text-7xl lg:text-9xl uppercase text-white tracking-tight sm:tracking-tighter leading-none select-none font-bold">
                  SELECTED WORK
                </h1>
                <span className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white/10 text-[#b6c4ff] font-['Space_Grotesk'] text-xs sm:text-sm tracking-widest align-middle font-bold">
                  (0{projectsData.length})
                </span>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1.5 max-w-sm">
                <p className="text-xs sm:text-sm text-white/70 text-left md:text-right">
                  Architectural systems, agentic AI infrastructures & modern hyper-performant web interfaces.
                </p>
                <span className="font-['Space_Grotesk'] text-xs uppercase text-[#6ee7f7] tracking-wider flex items-center gap-1.5 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#6ee7f7] animate-ping" />
                  CLICK ANY ROW TO EXPAND ARCHIVES
                </span>
              </div>
            </div>
          </section>

          {/* Interactive Project List (Neo-Grotesque Brutalist Accordion) */}
          <section className="pb-16 border-b border-white/15">
            <div className="w-full flex flex-col divide-y divide-white/15">
              {projectsData.map((project) => {
                const isOpen = openProject === project.id;

                return (
                  <div
                    key={project.id}
                    className="w-full flex flex-col transition-all duration-300"
                    onMouseEnter={() => !isOpen && setHoveredProject(project)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {/* Project Header Row */}
                    <div
                      onClick={() => toggleProject(project.id)}
                      className="w-full py-8 sm:py-10 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-4 transition-all duration-300 group hover:translate-x-2"
                    >
                      <div className="flex items-baseline gap-4 sm:gap-8 min-w-0">
                        <span className="font-['Space_Grotesk'] text-lg sm:text-2xl text-white/50 font-mono transition-colors group-hover:text-[#6ee7f7]">
                          {project.index}
                        </span>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl lg:text-6xl uppercase text-white tracking-tight sm:tracking-tighter transition-colors group-hover:text-white whitespace-nowrap font-bold">
                            {project.title}
                          </h2>
                          {project.badge && (
                            <span className="px-3 py-1 rounded-full bg-[#6ee7f7]/20 text-[#6ee7f7] font-['Space_Grotesk'] text-[10px] sm:text-xs tracking-wider font-semibold">
                              {project.badge}
                            </span>
                          )}
                          <ArrowUpRight className="text-[#6ee7f7] w-6 h-6 sm:w-8 sm:h-8 opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                        </div>
                      </div>

                      <div className="flex items-center flex-wrap gap-2 lg:justify-end">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-1.5 rounded-full bg-white/5 font-['Space_Grotesk'] text-xs uppercase text-white/80 group-hover:text-white group-hover:bg-white/15 transition-colors border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                        <span className="px-4 py-1.5 rounded-full bg-[#10003d]/80 text-[#b6c4ff] font-['Space_Grotesk'] text-xs font-mono tracking-wider">
                          {project.period}
                        </span>
                        <div
                          className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 text-white/70 group-hover:text-white group-hover:border-white ${
                            isOpen ? "rotate-180 bg-white/10" : ""
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Accordion Content Panel */}
                    {isOpen && (
                      <div className="w-full pt-2 pb-12 flex flex-col gap-8 animate-fadeIn">
                        {/* Gallery Horizontal Snap Scroll */}
                        {project.gallery && project.gallery.length > 0 && (
                          <div className="w-full flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory">
                            {project.gallery.map((imgItem, i) => (
                              <div
                                key={i}
                                className="flex-shrink-0 w-[85vw] md:w-[540px] snap-start rounded-xl overflow-hidden bg-[#10003d]/90 relative border border-white/15 shadow-xl group/card"
                              >
                                <img
                                  src={imgItem.image}
                                  alt={imgItem.title}
                                  className="w-full aspect-[16/10] object-cover object-top hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#10003d] via-[#10003d]/70 to-transparent">
                                  <span className="font-['Space_Grotesk'] text-xs uppercase text-white tracking-wider font-semibold">
                                    {imgItem.title}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Description & Built With Meta */}
                        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2 items-start">
                          <div className="lg:col-span-7 flex flex-col gap-3">
                            <span className="font-['Space_Grotesk'] text-xs uppercase text-[#b6c4ff] tracking-widest font-bold">
                              ABOUT THE SYSTEM
                            </span>
                            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                              {project.description}
                            </p>
                          </div>

                          <div className="lg:col-span-5 flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                              <span className="font-['Space_Grotesk'] text-xs uppercase text-[#b6c4ff] tracking-widest font-bold">
                                ENGINEERING SPECS
                              </span>
                              <div className="flex flex-wrap gap-2 pt-1">
                                {project.specs.map((spec) => (
                                  <span
                                    key={spec}
                                    className="px-3.5 py-1 rounded-full bg-white/10 font-['Space_Grotesk'] text-xs uppercase text-white font-medium border border-white/10"
                                  >
                                    {spec}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="flex items-center gap-3 pt-1 flex-wrap">
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#15004b] font-['Space_Grotesk'] text-xs uppercase tracking-wider font-bold hover:bg-[#6ee7f7] transition-all hover:scale-105 shadow-md"
                                >
                                  <span>LIVE SITE</span>
                                  <ArrowUpRight className="w-4 h-4" />
                                </a>
                              )}
                              {project.codeUrl && (
                                <a
                                  href={project.codeUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-white/35 bg-white/5 text-white font-['Space_Grotesk'] text-xs uppercase tracking-wider font-semibold hover:bg-white hover:text-[#15004b] transition-all hover:scale-105"
                                >
                                  <Code className="w-4 h-4" />
                                  <span>VIEW CODE</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Monumental Call to Action (Editorial Style) */}
          <section className="py-20 sm:py-32 relative overflow-hidden" id="contact">
            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-['Space_Grotesk'] text-xs sm:text-sm uppercase text-[#6ee7f7] tracking-widest flex items-center gap-2 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6ee7f7] animate-pulse" />
                  AVAILABLE FOR 2026 ENGAGEMENTS
                </span>
                <h2 className="font-['Space_Grotesk'] text-5xl sm:text-8xl lg:text-9xl uppercase text-white tracking-tight sm:tracking-tighter leading-none mt-2 font-bold">
                  HAVE AN IDEA?
                  <br />
                  <span className="text-[#b6c4ff] hover:text-[#6ee7f7] transition-colors">
                    LET'S TALK.
                  </span>
                </h2>
              </div>

              {/* Action Pills Tray */}
              <div className="flex items-center flex-wrap gap-3 sm:gap-4 pt-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#15004b] font-['Space_Grotesk'] text-xs sm:text-sm uppercase tracking-wider font-bold hover:bg-[#6ee7f7] transition-all hover:scale-105 shadow-xl"
                >
                  <Mail className="w-4 h-4" />
                  <span>{personalInfo.email}</span>
                </a>

                <a
                  href={personalInfo.resumeUrl}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/40 bg-white/5 text-white font-['Space_Grotesk'] text-xs sm:text-sm uppercase tracking-wider font-semibold hover:bg-white hover:text-[#15004b] transition-all"
                >
                  <span>DOWNLOAD RESUME</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/40 bg-white/5 text-white font-['Space_Grotesk'] text-xs sm:text-sm uppercase tracking-wider font-semibold hover:bg-white hover:text-[#15004b] transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/40 bg-white/5 text-white font-['Space_Grotesk'] text-xs sm:text-sm uppercase tracking-wider font-semibold hover:bg-white hover:text-[#15004b] transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Modern Minimal Footer */}
      <footer className="w-full bg-[#10003d]/80 backdrop-blur-xl border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-['Space_Grotesk'] text-base text-white uppercase font-bold tracking-wider">
              {personalInfo.name}
            </span>
            <p className="text-xs text-white/60 mt-1">
              Creative Technical Direction & Full-Stack Systems
            </p>
          </div>

          <div className="flex items-center gap-6 font-['Space_Grotesk'] text-xs uppercase tracking-wider font-semibold">
            <Link to="/" className="text-white/70 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-white font-bold transition-colors">
              Projects
            </Link>
            <Link to="/agence" className="text-white/70 hover:text-white transition-colors">
              About
            </Link>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>

          <div className="text-xs text-white/50">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;