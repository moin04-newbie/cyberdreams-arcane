
import React from 'react';
import ScrollReveal from './ScrollReveal';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay }) => {
  return (
    <ScrollReveal className="cyber-card flex flex-col items-center text-center" style={{ animationDelay: `${delay}ms` }}>
      <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-cyberpunk-purple to-cyberpunk-pink text-white text-2xl">
        {icon}
      </div>
      <h3 className="text-xl font-orbitron mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </ScrollReveal>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      title: "Uncover the Secrets of Arcanum",
      description: "Explore hidden lore, ancient artifacts, and the mysteries that lie beneath the neon glow of Arcanum's cities.",
      icon: "🔮",
      delay: 100
    },
    {
      title: "Dive into the Cyber Realm",
      description: "Enter a world where digital consciousness and magical energies intertwine, creating a uniquely immersive experience.",
      icon: "🌐",
      delay: 200
    },
    {
      title: "Customize Your Gaming Character",
      description: "Create a unique avatar with endless combinations of cyber enhancements and mystical abilities.",
      icon: "🧙",
      delay: 300
    },
    {
      title: "Connect with the Arcone Community",
      description: "Join thousands of players in epic quests, alliances, and battles that shape the world of Arcanum.",
      icon: "👥",
      delay: 400
    },
    {
      title: "Discover Limited Edition Content",
      description: "Gain access to exclusive gear, abilities, and storylines available only to the most dedicated explorers.",
      icon: "💎",
      delay: 500
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-cyberpunk-dark to-black">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-orbitron text-center mb-16 animate-pulse-glow">
            <span className="neon-text">Features & Experiences</span>
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
