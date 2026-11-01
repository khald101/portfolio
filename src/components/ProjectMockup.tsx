import React from 'react';
import { 
  Building2, 
  Home, 
  ShoppingBag, 
  Users, 
  KeyRound, 
  BedDouble, 
  ShieldAlert, 
  Sparkles, 
  TrendingUp, 
  Check, 
  Calendar,
  DollarSign,
  ArrowUpRight
} from 'lucide-react';

interface MockupProps {
  type: 'hotel' | 'real-estate' | 'perfume';
}

export const ProjectMockup: React.FC<MockupProps> = ({ type }) => {
  if (type === 'hotel') {
    return (
      <div className="w-full h-56 sm:h-64 rounded-xl bg-gradient-to-br from-slate-950 via-[#0a1128] to-slate-900 border border-blue-500/20 p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden relative group/mockup">
        {/* Ambient Top Glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
        
        {/* Mockup Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5 z-10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-300">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white tracking-wide">Grand Luxe Hotel OS</div>
              <div className="text-[10px] text-blue-400 font-mono">Status: Connected</div>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            ONLINE
          </span>
        </div>

        {/* Dashboard Mock Grid */}
        <div className="grid grid-cols-3 gap-2 my-2 z-10">
          <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
            <div className="text-[10px] text-slate-400">Occupancy</div>
            <div className="text-sm sm:text-base font-bold text-cyan-400 font-mono">94.2%</div>
          </div>
          <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
            <div className="text-[10px] text-slate-400">Total Rooms</div>
            <div className="text-sm sm:text-base font-bold text-blue-400 font-mono">148</div>
          </div>
          <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
            <div className="text-[10px] text-slate-400">Check-ins</div>
            <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono">32 Today</div>
          </div>
        </div>

        {/* Room Status List */}
        <div className="space-y-1.5 z-10 text-[11px]">
          <div className="flex items-center justify-between p-1.5 rounded-md bg-slate-900/60 border border-slate-800/60">
            <div className="flex items-center gap-2">
              <BedDouble className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-slate-300">Royal Suite #401</span>
            </div>
            <span className="text-[10px] text-rose-400 font-mono font-medium">Occupied</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded-md bg-slate-900/60 border border-slate-800/60">
            <div className="flex items-center gap-2">
              <BedDouble className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-slate-300">Executive Deluxe #308</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono font-medium">Ready</span>
          </div>
        </div>

      </div>
    );
  }

  if (type === 'real-estate') {
    return (
      <div className="w-full h-56 sm:h-64 rounded-xl bg-gradient-to-br from-slate-950 via-[#061b17] to-slate-900 border border-teal-500/20 p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden relative group/mockup">
        {/* Ambient Top Glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl" />

        {/* Mockup Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5 z-10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-teal-600/30 border border-teal-400/40 flex items-center justify-center text-teal-300">
              <Home className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white tracking-wide">Aqar Enterprise Platform</div>
              <div className="text-[10px] text-teal-400 font-mono">Multi-Tenant Portals</div>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/15 text-teal-300 border border-teal-500/30">
            V3 LIVE
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 my-2 z-10">
          <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
            <div className="text-[10px] text-slate-400">Properties</div>
            <div className="text-sm sm:text-base font-bold text-teal-400 font-mono">1,240</div>
          </div>
          <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
            <div className="text-[10px] text-slate-400">Active Leases</div>
            <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono">98.5%</div>
          </div>
          <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
            <div className="text-[10px] text-slate-400">Portals</div>
            <div className="text-sm sm:text-base font-bold text-cyan-400 font-mono">3 Portals</div>
          </div>
        </div>

        {/* Portal Access Roles */}
        <div className="flex items-center justify-between gap-1.5 z-10 text-[10px] font-medium">
          <div className="flex-1 p-1.5 rounded bg-slate-900/80 border border-teal-500/20 text-center text-teal-300">
            بوابة المالك (Owner)
          </div>
          <div className="flex-1 p-1.5 rounded bg-slate-900/80 border border-teal-500/20 text-center text-teal-300">
            بوابة الشركة (Agency)
          </div>
          <div className="flex-1 p-1.5 rounded bg-slate-900/80 border border-teal-500/20 text-center text-teal-300">
            بوابة المستأجر (Tenant)
          </div>
        </div>

      </div>
    );
  }

  // Perfume Store Mockup
  return (
    <div className="w-full h-56 sm:h-64 rounded-xl bg-gradient-to-br from-slate-950 via-[#1c1026] to-slate-900 border border-amber-500/20 p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden relative group/mockup">
      {/* Ambient Top Glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl" />

      {/* Mockup Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5 z-10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-600/30 border border-amber-400/40 flex items-center justify-center text-amber-300">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white tracking-wide">Saudi Elite Fragrances</div>
            <div className="text-[10px] text-amber-400 font-mono">Royal Luxury Edition</div>
          </div>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
          E-COMMERCE
        </span>
      </div>

      {/* Luxury Bottle Showcase representation */}
      <div className="my-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-3 z-10">
        <div className="w-12 h-14 rounded-lg bg-gradient-to-b from-amber-400/20 via-rose-500/20 to-purple-600/30 border border-amber-400/30 flex items-center justify-center shrink-0">
          <ShoppingBag className="w-6 h-6 text-amber-300" />
        </div>
        <div className="flex-1">
          <div className="text-xs font-bold text-amber-200">عطر العود الملكي الفاخر</div>
          <div className="text-[10px] text-slate-400">Royal Oud & Rare Amber Notes</div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xs font-mono font-bold text-amber-400">SAR 480</span>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-500/30">
              In Stock
            </span>
          </div>
        </div>
      </div>

      {/* Store Features Bar */}
      <div className="flex items-center justify-between text-[10px] text-slate-400 z-10 px-1">
        <span>سلة مشتريات فورية</span>
        <span>•</span>
        <span>نوتات عطرية مفصلة</span>
        <span>•</span>
        <span>Mobile-First UI</span>
      </div>

    </div>
  );
};
