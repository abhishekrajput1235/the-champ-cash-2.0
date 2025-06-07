import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ChampTrade from './pages/ChampTrade';
import WebLayout from './layout/WebLayout';
import AppWrapper from './AppWrapper.tsx';
// champtrade dashboard

import LandingPage from './ChampTradepages/LandingPage';
import DashboardOverviewPage from './ChampTradepages/DashboardOverviewPage';
import MyEarningsPage from './ChampTradepages/MyEarningsPage';
import MyTeamPage from './ChampTradepages/MyTeamPage';
import MyReferralsPage from './ChampTradepages/MyReferralsPage';
import ReinvestmentCyclesPage from './ChampTradepages/ReinvestmentCyclesPage';
import ClaimWithdrawPage from './ChampTradepages/ClaimWithdrawPage';
import BuyTccPage from './ChampTradepages/BuyTccPage';
import SupportTicketsPage from './ChampTradepages/SupportTicketsPage';
import HelpCenterPage from './ChampTradepages/HelpCenterPage';
import SettingsPage from './ChampTradepages/SettingsPage';
import Faq from './champtradeComponent/dashboard/Faq.tsx';
import Reward from './champtradeComponent/dashboard/Reward.tsx';

//wallet connect import libraries
import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ActionButtonList } from './providers/ActionButtonList'
import { SmartContractActionButtonList } from './providers/SmartContractActionButtonList'
import { projectId, metadata, networks, wagmiAdapter } from './config'

import "./index.css"
import DashboardPage from './ChampTradepages/DashboardPage';
import PrivateLandingPage from './privateSalepages/PrivateLandingPage';
import { DashboardLayout } from './privateSaleComponents/DashboardLayout';
import PrivateSaleLayout from './layout/PrivateSaleLayout';

const queryClient = new QueryClient()

const generalConfig = {
  projectId,
  networks,
  metadata,
  themeMode: 'light' as const,
  themeVariables: {
    '--w3m-accent': '#000000',
  }
}

// Create modal
createAppKit({
  adapters: [wagmiAdapter],
  ...generalConfig,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})
// Add keyframes for float animation
const floatKeyframes = `
@keyframes float {
  0% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-10px) translateX(10px);
  }
  50% {
    transform: translateY(0) translateX(20px);
  }
  75% {
    transform: translateY(10px) translateX(10px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}
`;

function App() {
  const [transactionHash, setTransactionHash] = useState<`0x${string}` | undefined>(undefined);
  const [signedMsg, setSignedMsg] = useState('');
  const [balance, setBalance] = useState('');
  const receiveHash = (hash: `0x${string}`) => {
    setTransactionHash(hash); // Update the state with the transaction hash
  };

  const receiveSignedMsg = (signedMsg: string) => {
    setSignedMsg(signedMsg); // Update the state with the transaction hash
  };

  const receivebalance = (balance: string) => {
    setBalance(balance)
  }




  useEffect(() => {
    // Add keyframes to the document
    const style = document.createElement('style');
    style.textContent = floatKeyframes;
    document.head.appendChild(style);

    // Update document title
    document.title = 'TCC 2.0 | The Evolution of Digital Earning';

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative overflow-hidden">
        <WagmiProvider config={wagmiAdapter.wagmiConfig}>
          <QueryClientProvider client={queryClient}>
            {/* <appkit-button /> */}
            <ActionButtonList sendHash={receiveHash} sendSignMsg={receiveSignedMsg} sendBalance={receivebalance} />
            <SmartContractActionButtonList />
            <ScrollToTop />

            <AppWrapper>
            <Routes>
              {/* Website Layout Routes */}
              <Route path="/" element={<WebLayout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="services" element={<ServicesPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="champ-trade" element={<ChampTrade />} />
                {/* <Route path='private-sale-dashboard' element={<PrivateLandingPage />} /> */}

              </Route>
              <Route path='go-dashboard' element={<LandingPage />} />
              {/* Champ Trade Dashboard Layout Routes */}
              <Route path="/champ-trade-dashboard" element={<DashboardPage />}>
                <Route index element={<DashboardOverviewPage />} />
                <Route path="my-earnings" element={<MyEarningsPage />} />
                <Route path="my-team" element={<MyTeamPage />} />
                <Route path="my-referrals" element={<MyReferralsPage />} />
                <Route path="reinvestment" element={<ReinvestmentCyclesPage />} />
                <Route path="withdraw" element={<ClaimWithdrawPage />} />
                <Route path="buy-tokens" element={<BuyTccPage />} />
                <Route path="support" element={<SupportTicketsPage />} />
                <Route path="Faq" element={<Faq />} />
                <Route path="help" element={<HelpCenterPage />} />
                <Route path="reward" element={<Reward />} />
                <Route path="settings" element={<SettingsPage />} />
              </Route>
              {/* private sale routes start from here */}
              {/* <Route path="/Private-sale-dashboard" element={<PrivateLandingPage />} />
              <Route path='Private-sale-dashboard/private-dashboard' element={<DashboardLayout/>}/> */}

              <Route path="/Private-sale-dashboard" element={<PrivateSaleLayout />}>
                <Route index element={<PrivateLandingPage />} />
                <Route path="private-dashboard" element={<DashboardLayout />}>
                </Route>
              </Route>


            </Routes>
            </AppWrapper>
          </QueryClientProvider>
        </WagmiProvider>
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;



