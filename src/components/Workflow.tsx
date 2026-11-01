import React, { useState } from 'react';
import { 
  Workflow as WorkflowIcon, 
  Search, 
  Layers, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { workflowSteps } from '../data/portfolioData';

interface WorkflowProps {
  language: Language;
}

export const Workflow: React.FC<WorkflowProps> = ({ language }) => {
  const [activeStep, setActiveStep] = useState(1);
  const isAr = language === 'ar';

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-teal-400" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="workflow" className="py-20 sm:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/40 border border-cyan-500/20 text-cyan-300">
            <WorkflowIcon className="w-3.5 h-3.5" />
            <span>{isAr ? 'منهجية وهندسة العمل' : 'Engineering Methodology'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isAr ? 'مراحل تحويل الفكرة إلى نظام رقمي متكامل' : 'From Concept to Fully Operating System'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {isAr
              ? 'نهج هندسي منظم وموثق يضمن تسليم مشاريع برمجية متماسكة بأعلى درجات الجودة والكفاءة.'
              : 'A disciplined, transparent software development lifecycle engineered for predictable, high-value outcomes.'}
          </p>
        </div>

        {/* Desktop Step Nav / Selector */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-10">
          {workflowSteps.map((step) => {
            const isSelected = activeStep === step.step;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`p-4 rounded-2xl border text-start transition-all duration-300 relative overflow-hidden group ${
                  isSelected
                    ? 'bg-[#090e1a] border-cyan-500/50 shadow-xl shadow-cyan-500/10 -translate-y-1'
                    : 'bg-[#090e1a]/50 border-slate-800 hover:border-slate-700 hover:bg-[#090e1a]/80'
                }`}
              >
                {/* Active glow indicator */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getStepIcon(step.icon)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500">
                    0{step.step}
                  </span>
                </div>

                <div className={`text-xs font-bold transition-colors ${
                  isSelected ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                }`}>
                  {isAr ? step.title : step.titleEn}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Card */}
        {(() => {
          const current = workflowSteps.find(s => s.step === activeStep) || workflowSteps[0];
          return (
            <div className="rounded-3xl bg-[#090e1a]/90 border border-cyan-500/25 backdrop-blur-xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Stage Info */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950/70 text-cyan-300 border border-cyan-500/30">
                      // {isAr ? `المرحلة 0${current.step}` : `STAGE 0${current.step}`}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {isAr ? 'منهجية التطوير المستدام' : 'Agile & Robust Delivery'}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                    {isAr ? current.title : current.titleEn}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                    {isAr ? current.description : current.descriptionEn}
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                      {isAr ? 'الركائز الأساسية لهذه المرحلة:' : 'Core Execution Pillars:'}
                    </div>
                    {current.points[language].map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stage navigation for mobile / desktop */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                    <button
                      disabled={activeStep === 1}
                      onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                      {isAr ? 'المرحلة السابقة' : 'Previous Step'}
                    </button>
                    <button
                      disabled={activeStep === workflowSteps.length}
                      onClick={() => setActiveStep(prev => Math.min(workflowSteps.length, prev + 1))}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    >
                      {isAr ? 'المرحلة التالية' : 'Next Step'}
                    </button>
                  </div>

                </div>

                {/* Stage 3D Visual Metric Representation */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-[#030712]/90 border border-slate-800 p-6 space-y-4 font-mono text-xs shadow-inner">
                    <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-3">
                      <span>PHASE_{current.step}_PIPELINE</span>
                      <span className="text-emerald-400">ACTIVE</span>
                    </div>

                    <div className="space-y-2 text-slate-300">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Stage Milestone:</span>
                        <span className="text-cyan-300 font-bold">{isAr ? current.title : current.titleEn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Target Output:</span>
                        <span className="text-blue-300">High Reliability</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Quality Check:</span>
                        <span className="text-teal-300">100% Passed</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Client Transparency:</span>
                        <span className="text-emerald-300">Continuous Sync</span>
                      </div>
                    </div>

                    <div className="pt-3">
                      <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                        <span>Workflow Progress:</span>
                        <span className="text-cyan-400">{current.step * 20}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-500 rounded-full"
                          style={{ width: `${current.step * 20}%` }}
                        />
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          );
        })()}

      </div>
    </section>
  );
};
