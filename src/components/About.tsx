
import React from 'react';
import ScrollReveal from './ScrollReveal';

interface AboutColumnProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const AboutColumn: React.FC<AboutColumnProps> = ({ title, description, icon, delay }) => {
  return (
    <ScrollReveal className="flex flex-col items-center text-center" style={{ animationDelay: `${delay}ms` }}>
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-orbitron mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </ScrollReveal>
  );
};

const About: React.FC = () => {
  const columns = [
    {
      title: "Our Mission",
      description: "To create immersive worlds that blur the line between reality and fantasy, technology and magic, present and future.",
      icon: "🚀",
      delay: 100
    },
    {
      title: "Community",
      description: "We foster a diverse and inclusive community of dreamers, builders, and explorers who shape our world together.",
      icon: "🌐",
      delay: 200
    },
    {
      title: "Events",
      description: "Regular in-game events, competitions, and celebrations bring our community together in shared experiences.",
      icon: "🎭",
      delay: 300
    }
  ];

  return (
    <section id="about" className="py-20 bg-cyberpunk-dark bg-grid-lines bg-[size:50px_50px]">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-orbitron text-center mb-4">
            <span className="neon-text">About Us</span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal>
          <p className="text-center max-w-3xl mx-auto mb-16 text-gray-300">
            At Arcanum, we blend cutting-edge technology with fantastical storytelling to create 
            gaming experiences that transcend traditional boundaries.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {columns.map((column, index) => (
            <AboutColumn 
              key={index}
              title={column.title}
              description={column.description}
              icon={column.icon}
              delay={column.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
