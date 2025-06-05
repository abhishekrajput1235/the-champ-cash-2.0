import React from "react";
import { Clock, ArrowUpRight, ArrowDownLeft, RefreshCw } from "lucide-react";

interface Transaction {
  id: string;
  type: "claim" | "withdraw" | "buy" | "reinvest";
  amount: number;
  token: string;
  status: "completed" | "pending" | "failed";
  timestamp: string;
  walletAddress: string;
}

const LatestTransactionsPanel: React.FC = () => {
  // Sample transaction data
  const transactions: Transaction[] = [
    {
      id: "TX-001",
      type: "claim",
      amount: 25.5,
      token: "TCC",
      status: "completed",
      timestamp: "2024-03-20 14:30:00",
      walletAddress: "0x1234...5678",
    },
    {
      id: "TX-002",
      type: "withdraw",
      amount: 100,
      token: "TCC",
      status: "pending",
      timestamp: "2024-03-20 13:45:00",
      walletAddress: "0x8765...4321",
    },
    {
      id: "TX-003",
      type: "buy",
      amount: 1000,
      token: "TCC",
      status: "completed",
      timestamp: "2024-03-20 12:15:00",
      walletAddress: "0xabcd...efgh",
    },
    {
      id: "TX-004",
      type: "reinvest",
      amount: 50,
      token: "TCC",
      status: "completed",
      timestamp: "2024-03-20 11:30:00",
      walletAddress: "0x9876...5432",
    },
  ];

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "claim":
        return <ArrowDownLeft className="h-5 w-5 text-green-400" />;
      case "withdraw":
        return <ArrowUpRight className="h-5 w-5 text-red-400" />;
      case "buy":
        return <ArrowDownLeft className="h-5 w-5 text-blue-400" />;
      case "reinvest":
        return <RefreshCw className="h-5 w-5 text-yellow-500" />;
      default:
        return <Clock className="h-5 w-5 text-neutral-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-900/50 text-green-400";
      case "pending":
        return "bg-yellow-900/50 text-yellow-500";
      case "failed":
        return "bg-red-900/50 text-red-400";
      default:
        return "bg-neutral-900/50 text-neutral-400";
    }
  };

  return (
    <div className="bg-[rgb(20,20,20)] rounded-xl p-2 border-2 border-yellow-500 shadow-[0_0_20px_rgba(250,204,21,0.1)]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-500/20 to-amber-400/20 rounded-full flex items-center justify-center">
            <RefreshCw className="w-5 h-5 text-yellow-500" />
          </div>
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-400">
            Latest Transactions
          </h2>
        </div>
        <button className="text-yellow-500 hover:text-yellow-400 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="sm:block hidden">
          {/* Desktop Table View */}
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-yellow-500/30 p-2">
                <th className="pb-3 text-left text-yellow-500 font-medium uppercase tracking-wider whitespace-nowrap">
                  Type
                </th>
                <th className="pb-3 text-left text-yellow-500 font-medium uppercase tracking-wider whitespace-nowrap">
                  Amount
                </th>
                <th className="pb-3 text-left text-yellow-500 font-medium uppercase tracking-wider whitespace-nowrap">
                  Wallet
                </th>
                <th className="pb-3 text-left text-yellow-500 font-medium uppercase tracking-wider whitespace-nowrap">
                  Status
                </th>
                <th className="pb-3 text-left text-yellow-500 font-medium uppercase tracking-wider whitespace-nowrap">
                  Time
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-yellow-500/10">
              {transactions.map((tx) => (
                <tr
                  key={tx.id}
                  className="hover:bg-yellow-500/5 transition-colors duration-200"
                >
                  <td className="py-3 sm:py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {getTransactionIcon(tx.type)}
                      <span className="capitalize text-neutral-300">
                        {tx.type}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 whitespace-nowrap text-neutral-300">
                    <span className="font-medium">{tx.amount}</span> {tx.token}
                  </td>
                  <td className="py-3 sm:py-4 whitespace-nowrap text-neutral-400 text-xs sm:text-sm">
                    {tx.walletAddress}
                  </td>
                  <td className="py-3 sm:py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusColor(
                        tx.status
                      )}`}
                    >
                      {tx.status}
                    </span>
                  </td>
                  <td className="py-3 sm:py-4 whitespace-nowrap text-neutral-400 text-xs sm:text-sm">
                    {new Date(tx.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="sm:hidden space-y-3">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="p-2 rounded-lg bg-neutral-800/50 border border-yellow-500/10 hover:bg-yellow-500/5 transition-colors duration-200"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  {getTransactionIcon(tx.type)}
                  <span className="capitalize text-neutral-300">{tx.type}</span>
                </div>
                <span
                  className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusColor(
                    tx.status
                  )}`}
                >
                  {tx.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-neutral-400 mb-1">Amount</div>
                  <div className="text-neutral-300">
                    <span className="font-medium">{tx.amount}</span> {tx.token}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-neutral-400 mb-1">Wallet</div>
                  <div className="text-neutral-400 text-xs truncate">
                    {tx.walletAddress}
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="text-xs text-neutral-400 mb-1">Time</div>
                <div className="text-neutral-400 text-xs">
                  {new Date(tx.timestamp).toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestTransactionsPanel;
