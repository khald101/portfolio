import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Briefcase, 
  Code2, 
  MapPin, 
  Sparkles, 
  Terminal, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Download,
  FolderGit2
} from 'lucide-react';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const isAr = language === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Primary Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-start space-y-6">
            
            {/* Top Status & Location Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                {personalInfo.experience[language]}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/60 border border-slate-800 text-slate-300 backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                {personalInfo.location[language]}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 backdrop-blur-md">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                {personalInfo.title[language]}
              </span>
            </div>

            {/* Main Headline (User's Exact Required Headline) */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.25] sm:leading-[1.2]">
                <span className="block text-slate-200">
                  {personalInfo.name[language]}
                </span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 glow-text-cyan">
                  {personalInfo.heroTagline[language]}
                </span>
              </h1>
            </div>

            {/* Sub-description highlighting full-stack engineering & administrative systems */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-light">
              {personalInfo.bio[language]}
            </p>

            {/* Interactive Tech Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {['JavaScript', 'React.js', 'Node.js', 'Full-Stack', 'Administrative Systems'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors cursor-default"
                >
                  #{tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('projects')}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>{isAr ? 'استعرض المشاريع الحية' : 'Explore Live Projects'}</span>
                <Arrow className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800/90 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/60 shadow-lg hover:shadow-cyan-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>{isAr ? 'ابدأ محادثة تواصل' : 'Get In Touch'}</span>
              </button>
            </div>

            {/* Quick Metrics Trust Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 w-full max-w-xl">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">+3</div>
                <div className="text-xs text-slate-400 font-medium">{isAr ? 'سنوات خبرة عملية' : 'Years Experience'}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-blue-400">100%</div>
                <div className="text-xs text-slate-400 font-medium">{isAr ? 'أنظمة حية وموثقة' : 'Verified Live Systems'}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-indigo-400">Full-Stack</div>
                <div className="text-xs text-slate-400 font-medium">{isAr ? 'تطوير متكامل شامل' : 'Architecture & APIs'}</div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Luxury Interactive Terminal & Architecture Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Back Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition duration-1000"></div>

              {/* Glassmorphic Terminal Card */}
              <div className="relative rounded-2xl bg-[#090e1a]/90 border border-cyan-500/20 backdrop-blur-xl shadow-2xl p-5 sm:p-6 overflow-hidden">
                
                {/* Window header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-0.5 rounded-md border border-slate-800">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    <span>khalid@developer:~</span>
                  </div>
                </div>

                {/* Simulated Real Code / Architecture */}
                <div className="pt-4 font-mono text-xs sm:text-sm space-y-3">
                  <div className="text-slate-400">
                    <span className="text-cyan-400">$</span> node --version && npm run architecture:status
                  </div>
                  <div className="text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>Full-Stack Environment Active (v24.x)</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#030712]/80 border border-slate-800/80 space-y-2">
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      // Core Architecture Stack
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">Front-End:</span>
                      <span className="text-cyan-300 font-semibold">React.js + Modern UI</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">Back-End:</span>
                      <span className="text-blue-300 font-semibold">Node.js + REST APIs</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">Language:</span>
                      <span className="text-amber-300 font-semibold">JavaScript (ES6+)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">Specialty:</span>
                      <span className="text-indigo-300 font-semibold">Admin Systems & Dashboards</span>
                    </div>
                  </div>

                  {/* Live Status Widget */}
                  <div className="pt-2 flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border border-cyan-500/20">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span className="text-xs text-slate-200 font-sans font-medium">
                        {isAr ? 'متاح للمشاريع الجديدة والأنظمة' : 'Available for New Projects'}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-900/40 px-2 py-0.5 rounded border border-cyan-500/30">
                      LIVE
                    </span>
                  </div>

                </div>

                {/* Floating 3D Accent Card */}
                <div className="mt-4 p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <span>{isAr ? 'الأنظمة الإدارية المتكاملة' : 'Enterprise Administrative ERPs'}</span>
                  </div>
                  <span className="text-cyan-400 font-mono font-bold">100% Responsive</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
