



import { Link } from 'react-router-dom';
import { Wallet } from 'lucide-react';
import trade from '../images/trade.png'
import { useAppKit } from '@reown/appkit/react';
import { RxDashboard } from "react-icons/rx";


function LandingPage() {
  const {open} = useAppKit()
  return (
    <div className="min-h-screen bg-black text-white font-sans pb-12 flex flex-col items-center justify-center px-4">
      {/* Header & Branding */}
      <header className="text-center max-w-2xl w-full">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 text-center sm:text-left">
          {/* Logo */}
          <img src={trade} alt="trade-logo" className="h-16 w-16 sm:h-20 sm:w-20" />

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            <span className="text-yellow-500">CHAMP</span> TRADE
          </h1>
        </div>
        <p className="text-lg sm:text-xl text-gray-300 font-medium mb-1">Powered by TCC2.O</p>
        <p className="text-yellow-500 italic text-md sm:text-lg">Earn Like a Champion</p>
      </header>

      {/* Actions */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
        {/* Connect Wallet (non-functional placeholder for now) */}
        <button onClick={() => open()}
          className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          <Wallet className="w-5 h-5" />
          Connect Your Wallet
        </button>

        {/* Go to Dashboard */}
        <Link
          to="/champ-trade-dashboard"
          className="flex items-center justify-center gap-2 inline-block bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors "
        >
          <RxDashboard />
          Go to Dashboard
        </Link>
      </div>

      {/* Back to Home Link */}
      <div className="mt-8">
        <Link to="/" className="text-gray-400 hover:text-white text-sm underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
