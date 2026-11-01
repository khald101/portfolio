import React from 'react';
import { ArrowUp, Heart, Sparkles, MapPin, Mail, Phone } from 'lucide-react';
import { Language } from '../types';
import { personalInfo, navigationLinks } from '../data/portfolioData';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const isAr = language === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-[#02050e] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/60">
          
          {/* Identity Info */}
          <div className="md:col-span-6 space-y-4 text-start">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 p-[1px]">
                <div className="w-full h-full bg-[#030712] rounded-[11px] flex items-center justify-center font-mono font-bold text-cyan-300 text-sm">
                  KA
                </div>
              </div>
              <div>
                <span className="font-bold text-white text-base block">
                  {personalInfo.name[language]}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {personalInfo.title[language]}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed font-light">
              {personalInfo.heroTagline[language]}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{personalInfo.location[language]}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3 text-start">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              // {isAr ? 'روابط التنقل' : 'Navigation'}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    {isAr ? link.labelAr : link.labelEn}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Connect */}
          <div className="md:col-span-3 space-y-3 text-start">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              // {isAr ? 'بيانات التواصل' : 'Direct Channels'}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-mono">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-2"
                  dir="ltr"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{personalInfo.phoneFormatted}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name[language]}. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-slate-400">
              Built with React, Node & Modern Web Standards
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
