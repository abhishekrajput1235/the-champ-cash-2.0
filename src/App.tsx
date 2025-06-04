import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ChampTrade from './pages/ChampTrade';
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
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/champ-trade" element={<ChampTrade/>}/>
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;