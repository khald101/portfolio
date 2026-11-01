import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Globe, ArrowUpRight } from 'lucide-react';
import { ProjectItem, Language } from '../types';
import { ProjectMockup } from './ProjectMockup';

interface ProjectModalProps {
  project: ProjectItem | null;
  language: Language;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, language, onClose }) => {
  if (!project) return null;

  const isAr = language === 'ar';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#090e1a] border border-cyan-500/30 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto space-y-6">
        
        {/* Header & Close Button */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
              {isAr ? project.category : project.categoryEn}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
              {isAr ? project.title : project.titleEn}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Mockup Preview */}
        <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
          <ProjectMockup type={project.imageType} />
        </div>

        {/* Detailed Overview */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider font-mono">
            // {isAr ? 'نظرة عامة على النظام' : 'System Overview'}
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            {isAr ? project.overview : project.overviewEn}
          </p>
        </div>

        {/* Key Features List */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider font-mono">
            // {isAr ? 'أبرز المميزات والوظائف البرمجية' : 'Key Engineering Features'}
          </h4>
          <div className="grid grid-cols-1 gap-2.5">
            {project.features[language].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="space-y-3 pt-2">
          <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider font-mono">
            // {isAr ? 'التقنيات المستخدمة' : 'Technologies Deployed'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900 border border-slate-800 text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: Live URL */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 font-mono">
            {isAr ? 'رابط المشروع الحي:' : 'Live Environment:'}
            <span className="text-cyan-400 block sm:inline sm:ms-2">{project.url}</span>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] transition-all"
          >
            <span>{isAr ? 'فتح المشروع المباشر' : 'Launch Live System'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
