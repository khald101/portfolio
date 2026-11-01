import React from 'react';
import { 
  User, 
  MapPin, 
  Briefcase, 
  Calendar, 
  Layers, 
  ShieldCheck, 
  Zap, 
  CheckCircle,
  Mail,
  Phone,
  Code
} from 'lucide-react';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';

interface AboutProps {
  language: Language;
}

export const About: React.FC<AboutProps> = ({ language }) => {
  const isAr = language === 'ar';

  const highlights = [
    {
      icon: <Briefcase className="w-5 h-5 text-cyan-400" />,
      titleAr: 'تطوير الأنظمة الإدارية المعقدة',
      titleEn: 'Complex Administrative Systems',
      descAr: 'هندسة منصات تشغيلية ولوحات تحكم متقدمة لإدارة الفنادق والعقارات والشركات مع دعم الصلاحيات الدقيقة.',
      descEn: 'Engineering high-availability operational portals and ERP dashboards with precise role-based controls.'
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-400" />,
      titleAr: 'بناء واجهات تفاعلية فائقة السرعة',
      titleEn: 'Ultra-Fast Responsive Frontends',
      descAr: 'تصميم واجهات مستخدم مذهلة وتطبيقات أحادية الصفحة (SPA) باستخدام React.js مع تجربة مستخدم انسيابية.',
      descEn: 'Crafting stunning reactive Single Page Applications with React.js delivering fluid 60fps micro-interactions.'
    },
    {
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      titleAr: 'خدمات خلفية و APIs آمنة',
      titleEn: 'Robust Backend APIs & Logic',
      descAr: 'بناء منطق أعمال متين باستخدام Node.js والتعامل المحترف مع البيانات والمسارات الآمنة.',
      descEn: 'Developing enterprise business logic, REST APIs, and structured data pipelines using Node.js.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      titleAr: 'جودة الكود والأداء العالي',
      titleEn: 'Clean Code & High Performance',
      descAr: 'الالتزام بأعلى معايير الكود النظيف، القابلية للصيانة، والتوافق المثالي على مختلف الشاشات والأجهزة.',
      descEn: 'Strict dedication to maintainable code, rigorous testing, mobile optimization, and security standards.'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/40 border border-cyan-500/20 text-cyan-300">
            <User className="w-3.5 h-3.5" />
            <span>{isAr ? 'نبذة مهنية متخصصة' : 'Professional Biography'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isAr ? 'عن المطور ورؤية العمل' : 'About Khalid & Engineering Vision'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {isAr
              ? 'نبذة شاملة عن الخبرة العملية والتخصص البرمجي في بناء الحلول والأنظمة الرقمية الكبيرة.'
              : 'A dedicated overview of practical experience and specialized full-stack engineering expertise.'}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Identity & Contact Summary Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#090e1a]/85 border border-cyan-500/20 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[2px] shadow-lg shadow-cyan-500/20">
                  <div className="w-full h-full bg-[#030712] rounded-[14px] flex items-center justify-center font-mono font-bold text-xl text-cyan-300">
                    KA
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {personalInfo.name[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-400 font-mono">
                    {personalInfo.title[language]}
                  </p>
                </div>
              </div>

              {/* Bio description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                {personalInfo.bio[language]}
              </p>

              {/* Key metadata points */}
              <div className="space-y-3 pt-4 border-t border-slate-800 text-xs sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    {isAr ? 'الخبرة العملية:' : 'Experience:'}
                  </span>
                  <span className="font-semibold text-slate-200">
                    {personalInfo.experience[language]}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    {isAr ? 'الموقع الجغرافي:' : 'Location:'}
                  </span>
                  <span className="font-semibold text-slate-200">
                    {personalInfo.location[language]}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Code className="w-4 h-4 text-indigo-400" />
                    {isAr ? 'التقنيات الأساسية:' : 'Core Stack:'}
                  </span>
                  <span className="font-mono font-semibold text-cyan-300">
                    JavaScript, React, Node.js
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-400" />
                    {isAr ? 'البريد الإلكتروني:' : 'Email:'}
                  </span>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="font-mono text-cyan-400 hover:underline"
                  >
                    {personalInfo.email}
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    {isAr ? 'رقم الهاتف:' : 'Phone:'}
                  </span>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="font-mono text-slate-200 hover:text-cyan-300 transition-colors"
                    dir="ltr"
                  >
                    {personalInfo.phoneFormatted}
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#090e1a]/70 border border-slate-800 hover:border-cyan-500/35 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 group"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-cyan-500/50 transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {isAr ? item.titleAr : item.titleEn}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                  {isAr ? item.descAr : item.descEn}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
