import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Sparkles } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section spy
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '0.8rem 1.5rem' : '1.5rem 1.5rem',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div
        className="glass-card container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1.75rem',
          borderRadius: '50px',
          background: scrolled ? 'rgba(10, 15, 30, 0.85)' : 'rgba(15, 23, 42, 0.5)',
          backdropFilter: 'blur(16px)',
WebkitBackdropFilter: 'blur(16px)',
          borderColor: scrolled ? 'rgba(139, 92, 246, 0.3)' : 'rgba(255, 255, 255, 0.08)',
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(139, 92, 246, 0.15)' : 'none'
        }}
      >
        {/* Brand Logo */}
        <a 
          href="#hero" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.6rem', 
            textDecoration: 'none', 
            fontFamily: 'Space Grotesk', 
            fontWeight: 800, 
            fontSize: '1.25rem',
            color: '#ffffff'
          }}
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 12px rgba(139, 92, 246, 0.5)'
          }}>
            <Code2 size={20} color="#fff" />
          </div>
          <span>
            ANJALI<span style={{ color: '#00f0ff' }}>.DEV</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.925rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#00f0ff' : '#9ca3af',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  padding: '0.25rem 0'
                }}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, #8b5cf6, #00f0ff)',
                      borderRadius: '2px',
                      boxShadow: '0 0 8px #00f0ff'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="#contact"
            className="btn-primary cta-nav-btn"
            style={{
              padding: '0.5rem 1.25rem',
              fontSize: '0.875rem',
              borderRadius: '25px',
              display: 'none'
            }}
          >
            <Sparkles size={15} />
            Hire Me
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle menu"
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={26} color="#00f0ff" /> : <Menu size={26} color="#ffffff" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="glass-card"
            style={{
              margin: '0.75rem 1.5rem 0 1.5rem',
              padding: '1.5rem',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              background: 'rgba(10, 15, 30, 0.95)',
              borderColor: 'rgba(139, 92, 246, 0.3)'
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  color: activeSection === item.href.substring(1) ? '#00f0ff' : '#d1d5db',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '8px',
                  background: activeSection === item.href.substring(1) ? 'rgba(139, 92, 246, 0.15)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                {item.label}
                {activeSection === item.href.substring(1) && <Sparkles size={16} color="#00f0ff" />}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                marginTop: '0.5rem',
                borderRadius: '12px'
              }}
            >
              Get In Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 868px) {
          .desktop-nav { display: flex !important; }
          .cta-nav-btn { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
