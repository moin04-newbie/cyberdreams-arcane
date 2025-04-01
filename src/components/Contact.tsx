
import React from 'react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-cyberpunk-dark">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-orbitron text-center mb-16 animate-pulse-glow">
            <span className="neon-text">Contact Us</span>
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal className="cyber-card">
            <h3 className="text-2xl font-orbitron mb-6 text-white">Get In Touch</h3>
            <p className="text-gray-300 mb-6">
              Have questions, suggestions, or just want to say hello? We'd love to hear from you!
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-cyberpunk-cyan mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-black bg-opacity-50 border border-cyberpunk-purple border-opacity-50 rounded-md px-4 py-2 focus:outline-none focus:border-cyberpunk-cyan"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-cyberpunk-cyan mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-black bg-opacity-50 border border-cyberpunk-purple border-opacity-50 rounded-md px-4 py-2 focus:outline-none focus:border-cyberpunk-cyan"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-cyberpunk-cyan mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-black bg-opacity-50 border border-cyberpunk-purple border-opacity-50 rounded-md px-4 py-2 focus:outline-none focus:border-cyberpunk-cyan"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-cyberpunk-cyan mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full bg-black bg-opacity-50 border border-cyberpunk-purple border-opacity-50 rounded-md px-4 py-2 focus:outline-none focus:border-cyberpunk-cyan"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button type="submit" className="neon-button-primary w-full sm:w-auto">
                Send Message
              </button>
            </form>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="cyber-card h-full flex flex-col">
              <h3 className="text-2xl font-orbitron mb-6 text-white">Connect With Us</h3>
              
              <div className="space-y-6 flex-1">
                <div>
                  <h4 className="text-cyberpunk-cyan font-orbitron mb-2">Our Digital Headquarters</h4>
                  <p className="text-gray-300">
                    Neo-Piltover District, Cyber Block #42<br />
                    Arcanum Nexus, Virtual Zone
                  </p>
                </div>
                
                <div>
                  <h4 className="text-cyberpunk-cyan font-orbitron mb-2">Digital Communications</h4>
                  <p className="text-gray-300">
                    contact@arcanum-game.com<br />
                    support@arcanum-game.com
                  </p>
                </div>
                
                <div>
                  <h4 className="text-cyberpunk-cyan font-orbitron mb-2">Join Our Community</h4>
                  <div className="flex space-x-4 mt-3">
                    {['Discord', 'Twitter', 'Instagram', 'YouTube'].map((platform) => (
                      <a key={platform} href="#" className="w-10 h-10 rounded-full bg-black bg-opacity-50 border border-cyberpunk-purple flex items-center justify-center hover:bg-cyberpunk-purple hover:border-cyberpunk-cyan transition-all duration-300">
                        <span className="sr-only">{platform}</span>
                        {/* Placeholder for icons */}
                        <div className="w-5 h-5 text-white"></div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-cyberpunk-purple border-opacity-30">
                <h4 className="text-cyberpunk-cyan font-orbitron mb-2">Customer Support Hours</h4>
                <p className="text-gray-300">
                  24/7 - Our synthwave assistants are always ready to help!
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
