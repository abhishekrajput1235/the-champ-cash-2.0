import React from 'react';
import { Users, ChevronRight } from 'lucide-react';

interface ReferralLevel {
  level: string;
  walletAddress: string;
  isActive: boolean;
  dailyContribution: number;
  totalReferrals: number;
}

const ReferralStats: React.FC = () => {
  const referralLevels: ReferralLevel[] = [
    { level: 'L1', walletAddress: '0x1234...5678', isActive: true, dailyContribution: 0.20, totalReferrals: 5 },
    { level: 'L2', walletAddress: '0x8765...4321', isActive: true, dailyContribution: 1.00, totalReferrals: 25 },
    { level: 'L3', walletAddress: '0xabcd...efgh', isActive: true, dailyContribution: 5.00, totalReferrals: 125 },
    { level: 'L4', walletAddress: '0xijkl...mnop', isActive: false, dailyContribution: 0, totalReferrals: 0 },
    { level: 'L5', walletAddress: '0xqrst...uvwx', isActive: false, dailyContribution: 0, totalReferrals: 0 },
    { level: 'L6', walletAddress: '0xyzab...cdef', isActive: false, dailyContribution: 0, totalReferrals: 0 },
  ];

  return (
    <div className="bg-[rgb(20,20,20)] rounded-xl p-2 border-2 border-yellow-500/30 hover:shadow-[0_0_20px_rgb(250,204,21,0.1)] transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-yellow-500/20 to-amber-400/20 rounded-full flex items-center justify-center">
          <Users className="w-5 h-5 text-yellow-500" />
        </div>
        <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
          Referral Statistics
        </h2>
      </div>

      <div className="space-y-4">
        {referralLevels.map((level) => (
          <div
            key={level.level}
            className="bg-gradient-to-br from-[rgb(30,30,30)] to-[rgb(20,20,20)] rounded-xl p-4 border-2 border-yellow-500/20 hover:border-yellow-500/40 hover:shadow-[0_0_10px_rgb(250,204,21,0.1)] transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-yellow-500 font-bold text-lg">{level.level}</span>
              <ChevronRight className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-neutral-400 text-sm">Wallet</p>
                <p className="text-white font-medium">{level.walletAddress}</p>
              </div>
              <div>
                <p className="text-neutral-400 text-sm">Status</p>
                <p className={`font-medium ${level.isActive ? "text-green-400" : "text-red-400"}`}>
                  {level.isActive ? "Active" : "Inactive"}
                </p>
              </div>
              <div>
                <p className="text-neutral-400 text-sm">Daily Contribution</p>
                <p className="text-yellow-500 font-bold">${level.dailyContribution.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-neutral-400 text-sm">Total Referrals</p>
                <p className="text-white font-bold">{level.totalReferrals}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gradient-to-br from-[rgb(30,30,30)] to-[rgb(20,20,20)] rounded-xl border-2 border-yellow-500/20">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-neutral-400 text-sm">Total Active Referrals</p>
            <p className="text-2xl font-bold text-yellow-500">155</p>
          </div>
          <div>
            <p className="text-neutral-400 text-sm">Total Daily Earnings</p>
            <p className="text-2xl font-bold text-yellow-500">$6.20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralStats;