import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import Logo from './Logo';
import Logo from '../images/LogoChamp.png'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Champ Logo" className='h-14' />
          </Link>

          {/* Desktop Navigation */}
          {/* <div className="hidden md:flex items-center space-x-8">
            <NavLinks isScrolled={isScrolled} />
            <HashLink 
              to="/#join"
              className="bg-gradient-to-r from-yellow-500 to-amber-400 text-black px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20"
            >
              Get Started
            </HashLink>
          </div> */}
<div className="hidden md:flex items-center space-x-8">
  <NavLinks isScrolled={isScrolled} />
  <HashLink 
    to="/#join"
    className="bg-gradient-to-r from-yellow-500 to-amber-400 text-black px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[rgb(185, 255, 100)] border-2 border-[rgb(255,165,0)] hover:border-[rgb(0,255,255)]"
  >
    Get Started
  </HashLink>
</div>



          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 bg-black/95 backdrop-blur-sm shadow-lg' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-3 space-y-3">
          <MobileNavLinks setIsOpen={setIsOpen} />
          <HashLink 
            to="/#join"
            className="block w-full bg-gradient-to-r from-yellow-500 to-amber-400 text-black px-5 py-2 rounded-full transition-all duration-300 text-center"
          >
            Get Started
          </HashLink>
        </div>
      </div>
    </nav>
  );
};

const NavLinks: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
  const linkClass = `font-medium transition-colors duration-300 ${
    isScrolled ? 'text-white hover:text-yellow-500' : 'text-white hover:text-yellow-400'
  }`;

  const [productsOpen, setProductsOpen] = useState(false);
  
  return (
    <>
      <Link to="/" className={linkClass}>
        Home
      </Link>
      <div className="relative group">
        <button 
          className={`${linkClass} flex items-center`}
          onClick={() => setProductsOpen(!productsOpen)}
        >
          Products <ChevronDown className="ml-1 h-4 w-4" />
        </button>
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/95 backdrop-blur-sm ring-1 ring-yellow-500/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
          <div className="py-1">
            <HashLink to="/#product1" className="block px-4 py-2 text-sm text-neutral-300 hover:text-yellow-500 hover:bg-yellow-500/10">Private Sale</HashLink>
            <HashLink to="/#product2" className="block px-4 py-2 text-sm text-neutral-300 hover:text-yellow-500 hover:bg-yellow-500/10">Champ Trade</HashLink>
          </div>
        </div>
      </div>
      <Link to="/services" className={linkClass}>
        Services
      </Link>
      <Link to="/about" className={linkClass}>
        About
      </Link>
      <Link to="/contact" className={linkClass}>
        Contact
      </Link>
    </>
  );
};

const MobileNavLinks: React.FC<{ setIsOpen: (value: boolean) => void }> = ({ setIsOpen }) => {
  const [productsOpen, setProductsOpen] = useState(false);
  
  return (
    <>
      <Link
        to="/"
        className="block font-medium text-white hover:text-yellow-500"
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>
      <div>
        <button
          className="flex items-center justify-between w-full font-medium text-white hover:text-yellow-500"
          onClick={() => setProductsOpen(!productsOpen)}
        >
          Products <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${productsOpen ? 'transform rotate-180' : ''}`} />
        </button>
        <div className={`pl-4 mt-2 space-y-2 ${productsOpen ? 'block' : 'hidden'}`}>
          <HashLink to="/#product1" className="block text-neutral-400 hover:text-yellow-500" onClick={() => setIsOpen(false)}>Product One</HashLink>
          <HashLink to="/#product2" className="block text-neutral-400 hover:text-yellow-500" onClick={() => setIsOpen(false)}>Product Two</HashLink>
          <HashLink to="/#product3" className="block text-neutral-400 hover:text-yellow-500" onClick={() => setIsOpen(false)}>Product Three</HashLink>
        </div>
      </div>
      <Link
        to="/services"
        className="block font-medium text-white hover:text-yellow-500"
        onClick={() => setIsOpen(false)}
      >
        Services
      </Link>
      <Link
        to="/about"
        className="block font-medium text-white hover:text-yellow-500"
        onClick={() => setIsOpen(false)}
      >
        About
      </Link>
      <Link
        to="/contact"
        className="block font-medium text-white hover:text-yellow-500"
        onClick={() => setIsOpen(false)}
      >
        Contact
      </Link>
    </>
  );
};

export default Navbar;