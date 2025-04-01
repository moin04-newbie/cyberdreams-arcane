
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center bg-cyberpunk-dark bg-radial-gradient pt-16">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-extrabold mb-4 animate-pulse-glow">
            <span className="text-white">D</span>
            <span className="text-cyberpunk-pink">R</span>
            <span className="text-cyberpunk-purple">E</span>
            <span className="text-cyberpunk-cyan">A</span>
            <span className="text-white">M</span>
            <span className="text-cyberpunk-pink">E</span>
            <span className="text-cyberpunk-purple">R</span>
          </h1>
        </div>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl font-orbitron mb-6 text-white">
          Dive into the Cyberpunk-Fantasy World of Arcane
        </h2>
        
        <p className="text-lg md:text-xl font-bold text-cyberpunk-cyan mb-3">
          Immerse Yourself in...
        </p>
        
        <p className="max-w-2xl mb-10 text-gray-300 text-base md:text-lg">
          A realm where reality and imagination blur, where neon lights meet ancient magic. 
          Arcanum is not just a game – it's a journey through a world where technology and fantasy 
          collide to create something entirely new.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="neon-button-primary">
            Explore Now
          </button>
          <button className="neon-button-secondary">
            Join the Adventure
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
