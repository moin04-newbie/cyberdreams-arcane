
import React from 'react';
import ScrollReveal from './ScrollReveal';

const Crafted: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cyberpunk-dark to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-lines opacity-20"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyberpunk-purple rounded-full filter blur-[100px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyberpunk-pink rounded-full filter blur-[100px] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-orbitron mb-3 animate-pulse-glow">
              <span className="neon-text">Crafted with Care</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal className="mb-6">
            <p className="text-xl text-cyberpunk-cyan font-semibold">
              Meet the Minds Behind the Magic
            </p>
          </ScrollReveal>
          
          <ScrollReveal className="mb-10">
            <p className="text-gray-300">
              Every pixel, story arc, and game mechanic in Arcanum is meticulously crafted by our team of 
              passionate artisans. We blend technology and creativity to build immersive worlds where 
              the boundaries of reality and imagination blur. Our dedication to quality and innovation 
              drives us to create experiences that resonate with players long after they've logged off.
            </p>
          </ScrollReveal>
          
          <ScrollReveal>
            <button className="neon-button-primary">
              Learn More
            </button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Crafted;
