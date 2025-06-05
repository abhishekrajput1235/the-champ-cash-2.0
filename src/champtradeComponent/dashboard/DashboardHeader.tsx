// import { Trophy, Wallet, Clock, Menu } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import trade from '../../images/trade.png'

// function DashboardHeader() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-dark-green-light border-b border-golden/20 sticky top-0 z-40">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <Link to="/" className="flex items-center gap-2">
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4  text-center sm:text-left">
//               {/* Logo */}
//               <img src={trade} alt="trade-logo" className="h-8 w-8 sm:h-12 sm:w-12" />

//               {/* Title */}
//               <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
//                 <span className="text-yellow-500">CHAMP</span> TRADE
//               </h1>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-6">
//             <div className="flex items-center gap-2">
//               <Clock className="h-5 w-5 text-golden" />
//               <span className="text-sm text-golden-white">Cycle: 1 (163 days left)</span>
//             </div>

//             <div className="flex items-center gap-2">
//               <Wallet className="h-5 w-5 text-golden" />
//               <span className="text-sm text-golden-white">0x1234...5678</span>
//             </div>

//             <button className="bg-golden text-dark-green px-4 py-2 rounded-lg hover:bg-golden-dark transition-colors">
//               Connect Wallet
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-golden p-1 rounded-md focus:outline-none"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             <Menu className="h-6 w-6" />
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden bg-dark-green-light pb-4 space-y-3">
//             <div className="flex items-center gap-2 px-2 py-2">
//               <Clock className="h-5 w-5 text-golden" />
//               <span className="text-sm text-golden-white">Cycle: 1 (163 days left)</span>
//             </div>

//             <div className="flex items-center gap-2 px-2 py-2">
//               <Wallet className="h-5 w-5 text-golden" />
//               <span className="text-sm text-golden-white">0x1234...5678</span>
//             </div>

//             <button className="w-full bg-golden text-dark-green px-4 py-2 rounded-lg hover:bg-golden-dark transition-colors">
//               Connect Wallet
//             </button>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default DashboardHeader;

// import { Wallet, Clock, Menu } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import trade from '../../images/trade.png';

// function DashboardHeader() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-dark-green-light border-b border-golden/20 sticky top-0 z-40">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="h-16 flex flex-col md:flex-row items-center justify-between py-2 md:py-0">
//           {/* Logo & Title */}
//           <Link to="/" className="flex items-center justify-center gap-2 md:justify-start">
//             <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
//               <img src={trade} alt="trade-logo" className="h-10 w-10 sm:h-12 sm:w-12" />
//               <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
//                 <span className="text-yellow-500">CHAMP</span> TRADE
//               </h1>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-6">
//             <div className="flex items-center gap-2">
//               <Clock className="h-5 w-5 text-golden" />
//               <span className="text-sm text-golden-white">Cycle: 1 (163 days left)</span>
//             </div>

//             <div className="flex items-center gap-2">
//               <Wallet className="h-5 w-5 text-golden" />
//               <span className="text-sm text-golden-white">0x1234...5678</span>
//             </div>

//             <button className="bg-golden text-dark-green px-4 py-2 rounded-lg hover:bg-golden-dark transition-colors">
//               Connect Wallet
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-golden p-2 rounded-md mt-2"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             <Menu className="h-6 w-6" />
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden bg-dark-green-light pb-4 space-y-3">
//             <div className="flex items-center gap-2 px-2 py-2">
//               <Clock className="h-5 w-5 text-golden" />
//               <span className="text-sm text-golden-white">Cycle: 1 (163 days left)</span>
//             </div>

//             <div className="flex items-center gap-2 px-2 py-2">
//               <Wallet className="h-5 w-5 text-golden" />
//               <span className="text-sm text-golden-white">0x1234...5678</span>
//             </div>

//             <button className="w-full bg-golden text-dark-green px-4 py-2 rounded-lg hover:bg-golden-dark transition-colors">
//               Connect Wallet
//             </button>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default DashboardHeader;



import { Wallet, Clock, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import trade from '../../images/trade.png';

function DashboardHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-dark-green-light border-b border-golden/20 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row - logo and menu */}
        <div className="flex items-center justify-between h-16">
          {/* Logo + Title */}
          <Link
            to="/"
            className="flex items-center gap-2 justify-center lg:justify-start lg:ml-0 w-full lg:w-auto"
          >
            <img src={trade} alt="trade-logo" className="h-10 w-10 sm:h-12 sm:w-12" />
            <h1 className="text-xl font-bold text-white whitespace-nowrap">
              <span className="text-yellow-500">CHAMP</span> TRADE
            </h1>
          </Link>


          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-golden" />
              <span className="text-sm text-golden-white">Cycle: 1 (163 days left)</span>
            </div>

            <div className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-golden" />
              <span className="text-sm text-golden-white">0x1234...5678</span>
            </div>

            <button className="bg-golden text-dark-green px-4 py-2 rounded-lg hover:bg-golden-dark transition-colors">
              Connect Wallet
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <button
            className="md:hidden text-golden p-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-dark-green-light pb-4 space-y-3">
            <div className="flex items-center gap-2 px-2 py-2">
              <Clock className="h-5 w-5 text-golden" />
              <span className="text-sm text-golden-white">Cycle: 1 (163 days left)</span>
            </div>

            <div className="flex items-center gap-2 px-2 py-2">
              <Wallet className="h-5 w-5 text-golden" />
              <span className="text-sm text-golden-white">0x1234...5678</span>
            </div>

            <button className="w-full bg-golden text-dark-green px-4 py-2 rounded-lg hover:bg-golden-dark transition-colors">
              Connect Wallet
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default DashboardHeader;

