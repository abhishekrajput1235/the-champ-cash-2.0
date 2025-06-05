import  { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ChampTrade from './pages/ChampTrade';
import WebLayout from './layout/WebLayout';
//wallet connect import libraries
import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ActionButtonList } from './providers/ActionButtonList'
import { SmartContractActionButtonList } from './providers/SmartContractActionButtonList'
import { InfoList } from './providers/InfoList'
import { projectId, metadata, networks, wagmiAdapter } from './config'

import "./index.css"

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
            <ActionButtonList sendHash={receiveHash} sendSignMsg={receiveSignedMsg} sendBalance={receivebalance}/>
            <SmartContractActionButtonList />

            {/* Website routes start  */}
        <Routes>
          {/* ---------Website Layout------- */}
          <Route element={<WebLayout/>} >
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/champ-trade" element={<ChampTrade/>}/>
          </Route>
        </Routes>
            {/* Website routes end  */}


        <InfoList hash={transactionHash} signedMsg={signedMsg} balance={balance}/>
        </QueryClientProvider>
      </WagmiProvider>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;