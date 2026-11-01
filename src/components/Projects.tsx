import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowUpRight, 
  Info, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { Language, ProjectItem } from '../types';
import { projectsData } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockup';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  language: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const isAr = language === 'ar';

  return (
    <section id="projects" className="py-20 sm:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/40 border border-cyan-500/20 text-cyan-300">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{isAr ? 'معرض الأعمال والمشاريع الحية' : 'Featured Production Projects'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isAr ? 'أنظمة حقيقية مبنية بأعلى المعايير' : 'Real-World Production Systems'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {isAr
              ? 'مجموعة من أبرز الأنظمة الإدارية والمتاجر الرقمية التي تم تطويرها وتشغيلها بنجاح.'
              : 'A curated showcase of comprehensive administrative systems and digital platforms engineered for production.'}
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#090e1a]/85 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/10 flex flex-col justify-between group"
            >
              
              {/* Card Header & Visual Mockup */}
              <div>
                <div className="p-3.5 sm:p-4 pb-0">
                  <div className="rounded-2xl overflow-hidden border border-slate-800/80 group-hover:border-cyan-500/30 transition-colors shadow-lg">
                    <ProjectMockup type={project.imageType} />
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 text-cyan-300 border border-cyan-500/20">
                      {isAr ? project.category : project.categoryEn}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live Verified
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {isAr ? project.title : project.titleEn}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light line-clamp-3">
                    {isAr ? project.description : project.descriptionEn}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-400 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[10px] font-mono px-2 py-1 rounded-md bg-slate-900 text-slate-500 border border-slate-800">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 sm:p-7 pt-0 border-t border-slate-800/60 mt-4">
                <div className="flex items-center gap-3 pt-4">
                  
                  {/* Visit Live Project Button (User requirement: opens in new tab) */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all group/btn"
                  >
                    <span>{isAr ? 'زيارة المشروع الحي' : 'Visit Live Project'}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* View Details Modal Trigger */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-500/30 transition-colors"
                    title={isAr ? 'تفاصيل النظام' : 'System Details'}
                    aria-label="View Details"
                  >
                    <Info className="w-4 h-4 text-cyan-400" />
                  </button>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal inspection */}
      <ProjectModal
        project={selectedProject}
        language={language}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
