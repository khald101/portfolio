import React, { useEffect, useState } from 'react';
import { Sparkles, Terminal } from 'lucide-react';

interface IntroProps {
  onFinish: () => void;
  language: 'ar' | 'en';
}

export const CinematicIntro: React.FC<IntroProps> = ({ onFinish, language }) => {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setFading(true);
          setTimeout(onFinish, 600);
          return 100;
        }
        return prev + 4;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onFinish]);

  const isAr = language === 'ar';

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#02040a] transition-opacity duration-700 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient radial glow */}
      <div className="absolute w-[28rem] h-[28rem] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center space-y-6">
        
        {/* Glowing Logo */}
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-indigo-600 p-[2px] shadow-2xl shadow-cyan-500/30">
            <div className="w-full h-full bg-[#030712] rounded-[14px] flex items-center justify-center">
              <span className="font-mono font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">
                KA
              </span>
            </div>
          </div>
          <div className="absolute -inset-2 bg-cyan-400/20 rounded-3xl blur-xl -z-10 animate-pulse" />
        </div>

        {/* Name & Tagline */}
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide">
            {isAr ? 'خالد عبد الإله الشجاع' : "Khalid Al-Shoja'a"}
          </h2>
          <p className="text-xs text-cyan-400 font-mono tracking-widest uppercase">
            Full-Stack Software Developer
          </p>
        </div>

        {/* Loading Progress Bar */}
        <div className="w-64 space-y-2">
          <div className="flex justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1">
              <Terminal className="w-3 h-3 text-cyan-400" />
              <span>{isAr ? 'تهيئة النظام...' : 'Initializing Systems...'}</span>
            </span>
            <span className="text-cyan-400 font-bold">{progress}%</span>
          </div>

          <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden p-[1px] border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Skip button if user is in a hurry */}
        <button
          onClick={() => {
            setFading(true);
            setTimeout(onFinish, 300);
          }}
          className="text-[11px] text-slate-500 hover:text-cyan-400 transition-colors underline pt-2"
        >
          {isAr ? 'تخطي المقدمة' : 'Skip Intro'}
        </button>

      </div>
    </div>
  );
};
