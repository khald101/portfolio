import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  MonitorSmartphone, 
  LayoutDashboard, 
  ShoppingBag, 
  Server, 
  Component 
} from 'lucide-react';
import { Language } from '../types';
import { skillsData } from '../data/portfolioData';

interface SkillsProps {
  language: Language;
}

export const Skills: React.FC<SkillsProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'core' | 'architecture' | 'solutions'>('all');
  const isAr = language === 'ar';

  const categories = [
    { id: 'all', labelAr: 'كافة المهارات', labelEn: 'All Competencies' },
    { id: 'core', labelAr: 'التقنيات الجوهرية', labelEn: 'Core Technologies' },
    { id: 'architecture', labelAr: 'الهندسة والتطوير', labelEn: 'Architecture & Full Stack' },
    { id: 'solutions', labelAr: 'الأنظمة والحلول', labelEn: 'Enterprise & Solutions' }
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === selectedCategory);

  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'JavaScript':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'React.js':
        return <Component className="w-5 h-5 text-cyan-400" />;
      case 'Node.js':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Full-Stack Development':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Front-End Development':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Back-End Development':
        return <Layers className="w-5 h-5 text-purple-400" />;
      case 'Administrative Systems':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Dashboard Development':
        return <LayoutDashboard className="w-5 h-5 text-teal-400" />;
      case 'E-Commerce Development':
        return <ShoppingBag className="w-5 h-5 text-rose-400" />;
      case 'Responsive Web Design':
        return <MonitorSmartphone className="w-5 h-5 text-sky-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/40 border border-cyan-500/20 text-cyan-300">
            <Cpu className="w-3.5 h-3.5" />
            <span>{isAr ? 'المهارات والتقنيات المعتمدة' : 'Verified Technical Skills'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isAr ? 'الترسانة التقنية والخبرات البرمجية' : 'Core Tech Stack & Competencies'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {isAr
              ? 'مجموعة المهارات البرمجية المتخصصة في بناء وتطوير الأنظمة الرقمية الحديثة.'
              : 'Core programming technologies and technical proficiencies for scalable full-stack software.'}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 scale-105'
                  : 'bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {isAr ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="rounded-2xl bg-[#090e1a]/80 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 group flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300">
                    {getSkillIcon(skill.name)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-400 border border-slate-800">
                    {isAr ? skill.categoryAr : skill.categoryEn}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {isAr ? skill.name : skill.nameEn}
                </h3>

                {/* Highlight Detail */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light mb-5">
                  {isAr ? skill.highlight : skill.highlightEn}
                </p>
              </div>

              {/* Competency Level Bar */}
              <div className="pt-3 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                  <span className="text-slate-400">
                    {isAr ? 'مستوى الإتقان:' : 'Proficiency:'}
                  </span>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden p-[1px]">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
