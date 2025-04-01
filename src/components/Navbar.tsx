
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cyberpunk-dark bg-opacity-80 backdrop-blur-md py-3 shadow-lg' : 'py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-orbitron font-bold text-white relative">
          <span className="neon-text">Arcanum</span>
          <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-cyberpunk-pink to-cyberpunk-cyan"></span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {['Home', 'About', 'Products', 'Contact', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="font-rajdhani tracking-wider hover:text-cyberpunk-cyan transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-cyberpunk-dark bg-opacity-95 backdrop-blur-md transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-[300px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
      }`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {['Home', 'About', 'Products', 'Contact', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="font-rajdhani tracking-wider hover:text-cyberpunk-cyan transition-colors duration-300 py-2"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
