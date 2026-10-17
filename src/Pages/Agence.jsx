import React from "react";
import { Link } from "react-router-dom";
import {
  personalInfo,
  techStackCategories,
  experienceData,
  highlightsData,
  nowLearningData,
  educationData,
  beyondCodeData,
} from "../data/portfolioData";
import BackToHomeButton from "../Components/BackToHomeButton";
import profilePic from "../assets/profilepic.jpeg";
import imggg from "../assets/imggg.jpg"
import {
  ArrowDown,
  ArrowUpRight,
  ExternalLink,
  MapPin,
  Sparkles,
  Layers,
  GraduationCap,
  Music,
  Mail,
} from "lucide-react";

const Agence = () => {
  return (
    <div className="bg-[#15004b] text-[#e7deff] min-h-screen relative overflow-x-hidden selection:bg-[#6ee7f7] selection:text-[#15004b] font-['Inter']">
      {/* Dynamic Ambient Background Mesh */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[25%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-[#0041c0]/35 blur-[140px]" />
        <div className="absolute top-[25%] -right-[15%] w-[50vw] h-[50vw] rounded-full bg-[#38237e]/60 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-[#220269]/70 blur-[130px]" />
      </div>

      {/* Modern Fixed Header (Replaces the navbar with clean Home + switch buttons) */}
      <BackToHomeButton />

      <main className="w-full pt-28 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 flex flex-col">
          {/* SECTION 1: HERO */}
          <section className="pt-6 sm:pt-12 pb-16 sm:pb-24 border-b border-white/15">
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6ee7f7] shadow-[0_0_12px_rgba(110,231,247,0.9)]" />
              <span className="font-['Space_Grotesk'] text-xs sm:text-sm text-white/70 uppercase tracking-widest font-semibold">
                ABOUT · PORTFOLIO 2026
              </span>
            </div>

            {/* Monumental Headline with Signature Inline Pill Media */}
            <h1 className="font-['Space_Grotesk'] text-[38px] sm:text-[68px] lg:text-[96px] leading-[0.95] tracking-tight sm:tracking-tighter text-white uppercase font-bold select-none mb-6">
              {personalInfo.heroHeadline.part1}
              <span className="inline-flex items-center align-middle mx-2 sm:mx-4 px-1 py-1 rounded-full border border-white/40 bg-white/10 backdrop-blur-md overflow-hidden h-[0.82em] w-20 sm:w-36 lg:w-44 transition-all duration-300 hover:border-[#6ee7f7]">
                <img
                  src={imggg}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-125"
                />
              </span>
              {personalInfo.heroHeadline.part2}
              <br className="hidden sm:inline" />
              {" "}{personalInfo.heroHeadline.part3}
            </h1>

            <p className="text-base sm:text-xl lg:text-2xl text-white/70 max-w-2xl mb-8 leading-relaxed">
              {personalInfo.name}, {personalInfo.role.toLowerCase()}, {personalInfo.location}.
            </p>

            {/* Action Pills */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={personalInfo.resumeUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#15004b] font-['Space_Grotesk'] text-xs sm:text-sm tracking-wider uppercase font-bold transition-all duration-300 hover:bg-[#6ee7f7] hover:scale-105 active:scale-95 shadow-xl"
              >
                <span>DOWNLOAD RESUME</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/40 text-white font-['Space_Grotesk'] text-xs sm:text-sm tracking-wider uppercase font-semibold transition-all duration-300 hover:bg-white hover:text-[#15004b] hover:scale-105 active:scale-95 backdrop-blur-sm"
              >
                <span>SEE PROJECTS</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* SECTION 2: SHORT BIO */}
          <section className="py-16 sm:py-24 border-b border-white/15">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Portrait */}
              <div className="lg:col-span-5 relative group">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#0041c0]/40 via-[#6ee7f7]/25 to-transparent blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/20 bg-[#1e0060]/50 backdrop-blur-xl shadow-2xl">
                  <img
                    src={profilePic}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10003d]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                    <span className="font-['Space_Grotesk'] text-xs sm:text-sm uppercase tracking-widest text-white font-semibold">
                      {personalInfo.name}
                    </span>
                    <span className="font-['Inter'] text-[11px] sm:text-xs text-[#6ee7f7] tracking-wider uppercase font-medium">
                      DR. B.C. ROY ENG. COLLEGE
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Bio & Badges */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#6ee7f7] font-semibold mb-3">
                  // 01 · BACKGROUND & DIRECTION
                </div>
                <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl lg:text-5xl text-white uppercase font-bold leading-tight mb-5 tracking-tight">
                  BUILDING SCALABLE SYSTEM UIs WITH ARCHITECTURAL CLARITY.
                </h2>
                <p className="text-base sm:text-xl text-white/70 leading-relaxed mb-8">
                  {personalInfo.bio}
                </p>

                {/* Quick Meta Badges */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 bg-white/5 text-white text-xs uppercase tracking-wider font-medium backdrop-blur-md">
                    <MapPin className="w-3.5 h-3.5 text-[#b6c4ff]" />
                    LOCATION: {personalInfo.location.toUpperCase()}
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6ee7f7]/50 bg-[#6ee7f7]/10 text-[#6ee7f7] text-xs uppercase tracking-wider font-semibold backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-[#6ee7f7] animate-ping" />
                    STATUS: {personalInfo.statusBadge}
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 bg-white/5 text-white text-xs uppercase tracking-wider font-medium backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-[#6ee7f7]" />
                    FOCUS: {personalInfo.focusBadge}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: TECH STACK (Easily customizable via mapping) */}
          <section className="py-16 sm:py-24 border-b border-white/15">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-10 sm:mb-12 gap-2">
              <h2 className="font-['Space_Grotesk'] text-4xl sm:text-7xl lg:text-8xl text-white uppercase font-bold tracking-tight">
                STACK
              </h2>
              <span className="font-['Space_Grotesk'] text-xs sm:text-sm text-white/60 uppercase tracking-widest font-semibold">
                // CORE TECHNICAL ARSENAL
              </span>
            </div>

            <div className="space-y-8 sm:space-y-10">
              {techStackCategories.map((group, idx) => (
                <div key={group.category}>
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
                    <span className="lg:w-56 font-['Space_Grotesk'] text-xs sm:text-sm text-[#6ee7f7] uppercase tracking-wider font-bold shrink-0 pt-2.5">
                      {group.category}
                    </span>
                    <div className="flex flex-wrap gap-2.5 flex-1">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full px-5 py-2 sm:py-2.5 border border-white/30 text-xs sm:text-sm tracking-wide uppercase font-medium text-white hover:bg-white hover:text-[#15004b] transition-all duration-200 cursor-default shadow-sm backdrop-blur-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  {idx !== techStackCategories.length - 1 && (
                    <div className="w-full h-[1px] bg-white/10 mt-8" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: EXPERIENCE (Easily customizable via mapping) */}
          <section className="py-16 sm:py-24 border-b border-white/15">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-10 sm:mb-12 gap-2">
              <h2 className="font-['Space_Grotesk'] text-4xl sm:text-7xl lg:text-8xl text-white uppercase font-bold tracking-tight">
                EXPERIENCE
              </h2>
              <span className="font-['Space_Grotesk'] text-xs sm:text-sm text-white/60 uppercase tracking-widest font-semibold">
                // PRODUCTION SHIPMENTS
              </span>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/20 bg-[#1e0060]/40 backdrop-blur-xl p-6 sm:p-10 transition-all duration-300 hover:border-white/40 shadow-xl"
                >
                  <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-3 mb-6">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#6ee7f7]" />
                        <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl text-white uppercase font-bold">
                          {exp.role}
                        </h3>
                      </div>
                      <p className="text-base sm:text-lg text-[#b6c4ff] font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-['Space_Grotesk'] text-xs uppercase px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/80 self-start lg:self-auto font-semibold">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8 max-w-4xl text-sm sm:text-base text-white/80">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3">
                        <span className="text-[#6ee7f7] font-bold text-lg leading-none">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.liveUrl && (
                    <div>
                      <a
                        href={exp.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/40 text-white font-['Space_Grotesk'] text-xs tracking-wider uppercase font-semibold transition-all duration-200 hover:bg-white hover:text-[#15004b]"
                      >
                        <span>VISIT LIVE SITE</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 5: HIGHLIGHTS (SIH & Hackathons) */}
          <section className="py-16 sm:py-24 border-b border-white/15">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-10 sm:mb-12 gap-2">
              <h2 className="font-['Space_Grotesk'] text-4xl sm:text-7xl lg:text-8xl text-white uppercase font-bold tracking-tight">
                HIGHLIGHTS
              </h2>
              <span className="font-['Space_Grotesk'] text-xs sm:text-sm text-white/60 uppercase tracking-widest font-semibold">
                // COMPETITIVE ENGINEERING
              </span>
            </div>

            <div className="space-y-6">
              {highlightsData.map((h, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl border border-white/20 bg-white/[0.04] backdrop-blur-xl p-6 sm:p-10 overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#6ee7f7]/50"
                >
                  <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#0041c0]/30 blur-[100px] pointer-events-none" />
                  <div className="relative z-10 flex flex-col items-start">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6ee7f7]/40 bg-[#6ee7f7]/10 text-[#6ee7f7] font-['Space_Grotesk'] text-xs uppercase tracking-wider font-semibold mb-4">
                      <span className="w-2 h-2 rounded-full bg-[#6ee7f7]" />
                      {h.badge}
                    </div>
                    <h3 className="font-['Space_Grotesk'] text-xl sm:text-3xl text-white uppercase font-bold leading-tight mb-3">
                      {h.title}
                    </h3>
                    <p className="text-sm sm:text-lg text-white/70 max-w-4xl leading-relaxed">
                      {h.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 6: CURRENTLY LEARNING (NOW) */}
          <section className="py-16 sm:py-24 border-b border-white/15">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="font-['Space_Grotesk'] text-4xl sm:text-7xl lg:text-8xl text-white uppercase font-bold tracking-tight">
                NOW
              </h2>
              <span className="relative flex h-5 w-5 ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6ee7f7] opacity-75" />
                <span className="relative inline-flex rounded-full h-5 w-5 bg-[#6ee7f7]" />
              </span>
            </div>

            <p className="font-['Space_Grotesk'] text-base sm:text-xl text-[#b6c4ff] uppercase font-semibold mb-8">
              Going from frontend specialist to full-stack MERN developer.
            </p>

            <div className="flex flex-wrap gap-3">
              {nowLearningData.map((item) => (
                <span
                  key={item}
                  className="rounded-full px-6 py-3 border border-white/35 text-white text-xs sm:text-sm tracking-wide uppercase font-medium bg-[#1e0060]/40 backdrop-blur-md hover:bg-white hover:text-[#15004b] transition-all duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* SECTION 7: EDUCATION */}
          <section className="py-16 sm:py-24 border-b border-white/15">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-10 sm:mb-12 gap-2">
              <h2 className="font-['Space_Grotesk'] text-4xl sm:text-7xl lg:text-8xl text-white uppercase font-bold tracking-tight">
                EDUCATION
              </h2>
              <span className="font-['Space_Grotesk'] text-xs sm:text-sm text-white/60 uppercase tracking-widest font-semibold">
                // ACADEMIC FOUNDATION
              </span>
            </div>

            <div className="rounded-2xl border border-white/20 bg-[#1e0060]/40 backdrop-blur-xl p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#6ee7f7]" />
                  <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl text-white uppercase font-bold">
                    {educationData.degree}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#b6c4ff]">
                  {educationData.institution}
                </p>
              </div>

              <div className="flex items-baseline gap-2 px-6 py-3.5 rounded-full border border-[#6ee7f7]/40 bg-[#6ee7f7]/10 self-start lg:self-auto shrink-0">
                <span className="font-['Space_Grotesk'] text-xs uppercase font-semibold text-[#6ee7f7]">
                  CGPA:
                </span>
                <span className="font-['Space_Grotesk'] text-2xl text-white font-bold tracking-tight">
                  {educationData.cgpa}
                </span>
              </div>
            </div>
          </section>

          {/* SECTION 8: BEYOND CODE */}
          <section className="py-16 sm:py-24 border-b border-white/15">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-10 sm:mb-12 gap-2">
              <h2 className="font-['Space_Grotesk'] text-4xl sm:text-7xl lg:text-8xl text-white uppercase font-bold tracking-tight">
                BEYOND CODE
              </h2>
              <span className="font-['Space_Grotesk'] text-xs sm:text-sm text-white/60 uppercase tracking-widest font-semibold">
                // CULTURE & PERFORMANCE
              </span>
            </div>

            <div className="rounded-2xl border border-white/20 bg-[#1e0060]/40 backdrop-blur-xl p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 text-[#6ee7f7]">
                  <Music className="w-5 h-5" />
                  <span className="font-['Space_Grotesk'] text-xs uppercase tracking-widest font-bold">
                    {beyondCodeData.club}
                  </span>
                </div>
                <p className="font-['Space_Grotesk'] text-lg sm:text-2xl text-white uppercase font-medium leading-relaxed max-w-3xl">
                  {beyondCodeData.title}
                </p>
              </div>
              <span className="px-5 py-2 rounded-full border border-white/25 bg-white/5 text-xs font-['Space_Grotesk'] uppercase tracking-wider text-white shrink-0">
                {beyondCodeData.role}
              </span>
            </div>
          </section>

          {/* SECTION 9: CONTACT & CALL TO ACTION */}
          <section className="py-20 sm:py-32 relative overflow-hidden" id="contact">
            <div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vw] rounded-full bg-[#0041c0]/20 blur-[140px] pointer-events-none" />
            <div className="flex flex-col items-start relative z-10">
              <div className="font-['Space_Grotesk'] text-xs sm:text-sm text-[#6ee7f7] uppercase tracking-widest font-semibold mb-4">
                // READY FOR NEXT-GEN ROLES
              </div>

              <h2 className="font-['Space_Grotesk'] text-5xl sm:text-8xl lg:text-9xl leading-[0.9] tracking-tight sm:tracking-tighter text-white uppercase font-bold mb-10">
                LET'S WORK
                <br />
                <span className="text-[#b6c4ff] hover:text-[#6ee7f7] transition-colors">
                  TOGETHER
                </span>
              </h2>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={personalInfo.resumeUrl}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#15004b] font-['Space_Grotesk'] text-xs sm:text-sm tracking-wider uppercase font-bold hover:bg-[#6ee7f7] transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl"
                >
                  <span>DOWNLOAD RESUME</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/40 text-white font-['Space_Grotesk'] text-xs sm:text-sm tracking-wider lowercase hover:bg-white hover:text-[#15004b] transition-all duration-200 hover:scale-105 active:scale-95 backdrop-blur-md"
                >
                  <Mail className="w-4 h-4" />
                  <span>{personalInfo.email}</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/40 text-white font-['Space_Grotesk'] text-xs sm:text-sm tracking-wider uppercase font-bold hover:bg-white hover:text-[#15004b] transition-all duration-200 hover:scale-105 active:scale-95 backdrop-blur-md"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/40 text-white font-['Space_Grotesk'] text-xs sm:text-sm tracking-wider uppercase font-bold hover:bg-white hover:text-[#15004b] transition-all duration-200 hover:scale-105 active:scale-95 backdrop-blur-md"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
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
            <Link to="/projects" className="text-white/70 hover:text-white transition-colors">
              Projects
            </Link>
            <Link to="/agence" className="text-white font-bold transition-colors">
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

export default Agence;