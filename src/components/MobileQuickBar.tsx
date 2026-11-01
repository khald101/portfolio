import React from 'react';
import { Phone, MessageSquare, Mail, FolderGit2 } from 'lucide-react';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';

interface MobileQuickBarProps {
  language: Language;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ language }) => {
  const isAr = language === 'ar';

  const whatsappMessage = encodeURIComponent(
    isAr 
      ? 'مرحبًا أ. خالد الشجاع، أرغب في مناقشة مشروع / نظام تقني معك.' 
      : "Hello Khalid, I'd like to discuss a software project with you."
  );

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside aria-label={isAr ? 'شريط التواصل السريع' : 'Quick contact options'} className="sm:hidden fixed bottom-4 left-4 right-4 z-40">
      <div className="flex items-center justify-between p-2 rounded-2xl bg-[#090e1a]/90 backdrop-blur-xl border border-cyan-500/25 shadow-2xl shadow-black/80">
        
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/966570068031?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-emerald-400 hover:bg-emerald-950/30 transition-colors"
          aria-label="WhatsApp"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-medium">{isAr ? 'واتساب' : 'WhatsApp'}</span>
        </a>

        {/* Call Button */}
        <a
          href={`tel:${personalInfo.phone}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-cyan-400 hover:bg-cyan-950/30 transition-colors"
          aria-label="Call"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-medium">{isAr ? 'اتصال' : 'Call'}</span>
        </a>

        {/* Email Button */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-blue-400 hover:bg-blue-950/30 transition-colors"
          aria-label="Email"
        >
          <Mail className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-medium">{isAr ? 'بريد' : 'Email'}</span>
        </a>

        {/* Projects Button */}
        <button
          onClick={() => scrollTo('projects')}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-indigo-400 hover:bg-indigo-950/30 transition-colors"
          aria-label="Projects"
        >
          <FolderGit2 className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-medium">{isAr ? 'المشاريع' : 'Projects'}</span>
        </button>

      </div>
    </aside>
  );
};
