
import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-cyberpunk-purple border-opacity-30 last:border-0">
      <button 
        className="flex justify-between items-center w-full py-5 text-left text-white font-orbitron hover:text-cyberpunk-cyan transition-colors duration-200"
        onClick={toggle}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="text-cyberpunk-cyan" /> : <ChevronDown />}
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems = [
    {
      question: "What is Arcanum?",
      answer: "Arcanum is a cutting-edge cyberpunk-fantasy gaming experience that blends futuristic technology with mystical elements. It offers immersive gameplay, deep storytelling, and a vibrant community of players from around the world."
    },
    {
      question: "What platforms is Arcanum available on?",
      answer: "Arcanum is available on PC (Windows/Mac/Linux), PlayStation 5, Xbox Series X/S, and high-end mobile devices. Cross-platform play is supported, allowing you to play with friends regardless of their device."
    },
    {
      question: "Is Arcanum free to play?",
      answer: "Arcanum offers a free-to-play base experience with optional premium content. Our philosophy is that all core gameplay should be accessible to everyone, while premium purchases are focused on cosmetics and convenience features."
    },
    {
      question: "How often does Arcanum receive updates?",
      answer: "We release major content updates quarterly, with smaller updates and balance patches on a monthly basis. Our team is constantly working to improve the game experience and add new content based on player feedback."
    },
    {
      question: "How can I join the Arcanum community?",
      answer: "You can join our thriving community through our official Discord server, forums, and social media channels. We regularly host events, contests, and developer Q&A sessions to keep players engaged and informed."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-orbitron text-center mb-16 animate-pulse-glow">
            <span className="neon-text">Frequently Asked Questions</span>
          </h2>
        </ScrollReveal>
        
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="cyber-card">
            <div className="divide-y divide-cyberpunk-purple divide-opacity-30">
              {faqItems.map((item, index) => (
                <FAQItem 
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  toggle={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </ScrollReveal>
          
          <ScrollReveal className="mt-10 text-center">
            <p className="mb-6 text-gray-300">
              Don't see your question answered above? We're here to help!
            </p>
            <a href="#contact" className="neon-button-secondary inline-block">
              Contact Support
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
