import React from 'react';
import { LineChart, BarChart } from 'lucide-react';

const EarningsBreakdown: React.FC = () => {
  return (
    <div className="bg-[rgb(20,20,20)] p-3 px-2 rounded-xl border-2 border-yellow-500/30 hover:shadow-[0_0_20px_rgb(250,204,21,0.1)] transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">
          <span className="bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
            Earnings Breakdown
          </span>
        </h3>
        <div className="flex gap-2">
          <button className="p-2 rounded-lg bg-gradient-to-br from-yellow-500/20 to-amber-400/20 hover:from-yellow-500/30 hover:to-amber-400/30 transition-all">
            <LineChart className="w-5 h-5 text-yellow-500" />
          </button>
          <button className="p-2 rounded-lg bg-gradient-to-br from-yellow-500/20 to-amber-400/20 hover:from-yellow-500/30 hover:to-amber-400/30 transition-all">
            <BarChart className="w-5 h-5 text-yellow-500" />
          </button>
        </div>
      </div>
      
      <div className="space-y-4 px-1 sm:px-0">
  {/* Chart Placeholder */}
  <div className="h- sm:h-34 bg-gradient-to-br from-[rgb(30,30,30)] to-[rgb(20,20,20)] rounded-lg border border-yellow-500/10 flex items-center justify-center">
    <p className="text-gray-400 text-sm sm:text-base">Chart will be implemented here</p>
  </div>
  
  {/* Stats Cards - Stack on mobile */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
    <div className="bg-gradient-to-br from-[rgb(30,30,30)] to-[rgb(20,20,20)] p-3 sm:p-4 rounded-lg border border-yellow-500/10 hover:border-yellow-500/30 transition-colors">
      <p className="text-neutral-300 text-xs sm:text-sm mb-1">Direct Income</p>
      <p className="text-xl sm:text-2xl font-bold text-yellow-500">$123.45</p>
      <p className="text-xs text-yellow-500/70 mt-1">+2.5% from yesterday</p>
    </div>
    <div className="bg-gradient-to-br from-[rgb(30,30,30)] to-[rgb(20,20,20)] p-3 sm:p-4 rounded-lg border border-yellow-500/10 hover:border-yellow-500/30 transition-colors">
      <p className="text-neutral-300 text-xs sm:text-sm mb-1">Referral Income</p>
      <p className="text-xl sm:text-2xl font-bold text-yellow-500">$678.90</p>
      <p className="text-xs text-yellow-500/70 mt-1">+5.8% from yesterday</p>
    </div>
  </div>
  
  {/* Time Period Buttons - Scrollable on mobile */}
  <div className="flex overflow-x-auto pb-2 gap-2 hide-scrollbar">
    <button className="flex-shrink-0 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 transition-colors text-xs sm:text-sm">
      Last 7 Days
    </button>
    <button className="flex-shrink-0 px-3 py-1 rounded-full text-neutral-300 hover:text-white hover:bg-[rgb(30,30,30)] transition-colors text-xs sm:text-sm">
      Last 30 Days
    </button>
    <button className="flex-shrink-0 px-3 py-1 rounded-full text-neutral-300 hover:text-white hover:bg-[rgb(30,30,30)] transition-colors text-xs sm:text-sm">
      Last 90 Days
    </button>
    <button className="flex-shrink-0 px-3 py-1 rounded-full text-neutral-300 hover:text-white hover:bg-[rgb(30,30,30)] transition-colors text-xs sm:text-sm">
      All Time
    </button>
  </div>
</div>

{/* Add this to your global CSS */}
<style jsx>{`
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
`}</style>
    </div>
  );
};

export default EarningsBreakdown;