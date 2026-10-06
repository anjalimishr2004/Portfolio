import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      padding: '4rem 0 2rem 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'relative',
      background: 'rgba(3, 7, 18, 0.8)',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Code2 size={18} color="#fff" />
            </div>
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.15rem', color: '#ffffff' }}>
              ANJALI<span style={{ color: '#00f0ff' }}>.DEV</span>
            </span>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.875rem' }}>
            <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>About</a>
            <a href="#skills" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Skills</a>
            <a href="#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Projects</a>
            <a href="#education" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Education</a>
            <a href="#certifications" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Certifications</a>
            <a href="#contact" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              color: '#00f0ff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.4)'; e.currentTarget.style.borderColor = '#00f0ff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)'; }}
          >
            <ArrowUp size={20} />
          </button>
        </div>

        {/* Copyright */}
        <div style={{
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.85rem',
          color: '#6b7280',
          fontFamily: 'JetBrains Mono'
        }}>
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Engineered with React & CSS Glassmorphism
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
