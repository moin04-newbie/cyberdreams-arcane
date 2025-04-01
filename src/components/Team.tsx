
import React from 'react';
import ScrollReveal from './ScrollReveal';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
  delay: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, description, imageSrc, delay }) => {
  return (
    <ScrollReveal className="cyber-card flex flex-col items-center text-center" style={{ animationDelay: `${delay}ms` }}>
      <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-2 border-cyberpunk-purple">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-orbitron mb-1 text-white">{name}</h3>
      <h4 className="text-cyberpunk-cyan text-sm mb-3">{role}</h4>
      <p className="text-gray-300 text-sm">{description}</p>
    </ScrollReveal>
  );
};

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Viktor Echoes",
      role: "Lead Game Designer",
      description: "Viktor blends cyberpunk aesthetics with magical systems to create unique gameplay experiences.",
      imageSrc: "/placeholder.svg",
      delay: 100
    },
    {
      name: "Jinx Caliper",
      role: "Creative Director",
      description: "With an eye for vivid visuals and storytelling, Jinx brings the world of Arcanum to life.",
      imageSrc: "/placeholder.svg",
      delay: 200
    },
    {
      name: "Jayce Noir",
      role: "Technical Lead",
      description: "Jayce pushes the boundaries of what's possible, creating innovative systems and immersive environments.",
      imageSrc: "/placeholder.svg",
      delay: 300
    },
    {
      name: "Caitlyn Fuse",
      role: "Community Manager",
      description: "Caitlyn builds bridges between developers and players, ensuring voices are heard and celebrated.",
      imageSrc: "/placeholder.svg",
      delay: 400
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-cyberpunk-dark">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-orbitron text-center mb-16 animate-pulse-glow">
            <span className="neon-text">Meet the Team</span>
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              imageSrc={member.imageSrc}
              delay={member.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
