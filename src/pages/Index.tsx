
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Team from '@/components/Team';
import Crafted from '@/components/Crafted';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  // Initialize scroll reveal functionality
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Add smooth scrolling to hash links
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add click handler to all links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', handleHashClick as EventListener);
    });

    // Clean up event listeners
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.removeEventListener('click', handleHashClick as EventListener);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-cyberpunk-dark text-cyberpunk-text">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Team />
      <Crafted />
      <Contact />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
