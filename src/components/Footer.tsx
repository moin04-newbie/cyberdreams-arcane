
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 border-t border-cyberpunk-purple border-opacity-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Column */}
          <div>
            <h3 className="text-xl font-orbitron text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {['About', 'Mission', 'Team', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-cyberpunk-cyan transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Explorer Column */}
          <div>
            <h3 className="text-xl font-orbitron text-white mb-4">Explorer</h3>
            <ul className="space-y-2">
              {['Shop', 'Community', 'Events', 'Lore', 'Updates'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-cyberpunk-cyan transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect Column */}
          <div>
            <h3 className="text-xl font-orbitron text-white mb-4">Connect</h3>
            <ul className="space-y-2">
              {['Facebook', 'Twitter', 'Instagram', 'Discord', 'YouTube'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-cyberpunk-cyan transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div>
            <h3 className="text-xl font-orbitron text-white mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with the latest news and offers.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-transparent border border-cyberpunk-purple rounded-md focus:outline-none focus:border-cyberpunk-cyan"
              />
              <button type="submit" className="px-4 py-2 bg-cyberpunk-purple text-white rounded-md hover:bg-cyberpunk-pink transition-colors duration-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Arcanum, Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
