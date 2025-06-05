import React from 'react';
import { Clock, RefreshCw } from 'lucide-react';

const PlanProgress = () => {
  const progress = 66.66; // Example progress value
  const daysRemaining = 163;

  return (
    <div className="bg-[rgb(20,20,20)]  rounded-xl p-4 sm:p-6 shadow-lg border border-yellow-500/20 mx-2 sm:mx-0">
    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
      <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
      Plan & Reinvestment Progress
    </h3>
    
    <div className="space-y-4 sm:space-y-6">
      {/* Progress Bar */}
      <div>
        <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
          <span>Progress to Reinvestment</span>
          <span>${progress.toFixed(2)} / $100.00</span>
        </div>
        <div className="h-3 sm:h-4 bg-[rgb(20,20,20)] border border-yellow-500 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
  
      {/* Time Remaining */}
      <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-300">
        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
        <span>{daysRemaining} days remaining in current cycle</span>
      </div>
  
      {/* Milestones - Stack on mobile */}
      <div className="space-y-2 sm:space-y-3">
        <h4 className="text-white font-semibold text-sm sm:text-base">Reinvestment Milestones</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
          <div className="text-center p-2 bg-[rgb(20,20,20)] border border-yellow-500  rounded-lg">
            <div className="text-yellow-500 font-bold text-sm sm:text-base">Year 1</div>
            <div className="text-xs sm:text-sm text-gray-400">$33.33</div>
          </div>
          <div className="text-center p-2 bg-[rgb(20,20,20)] border border-yellow-500  rounded-lg">
            <div className="text-yellow-500 font-bold text-sm sm:text-base">Year 2</div>
            <div className="text-xs sm:text-sm text-gray-400">$66.66</div>
          </div>
          <div className="text-center p-2 bg-[rgb(20,20,20)]  border border-yellow-500 rounded-lg">
            <div className="text-yellow-500 font-bold text-sm sm:text-base">Year 3</div>
            <div className="text-xs sm:text-sm text-gray-400">$100.00</div>
          </div>
        </div>
      </div>
  
      {/* Auto-Reinvestment Note */}
      <div className="text-xs sm:text-sm text-gray-400 bg-[rgb(20,20,20)]  border border-yellow-500 p-3 sm:p-4 rounded-lg">
        <p>Your plan will automatically reinvest when you reach $100 in reserve.</p>
      </div>
    </div>
  </div>
  );
};

export default PlanProgress;