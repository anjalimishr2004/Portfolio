import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import HeroAvatar from './HeroAvatar';

const Hero = () => {
  return (
    <section 
      id="hero" 
      style={{ 
        minHeight: '100vh', 
        paddingTop: '9rem', 
        paddingBottom: '5rem',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Left Hero Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Pill Badge */}
            <div className="code-tag" style={{ marginBottom: '1.5rem', padding: '0.4rem 1rem' }}>
              <Sparkles size={14} color="#00f0ff" />
              <span>Computer Science Undergraduate</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 style={{ 
              fontFamily: 'Space Grotesk', 
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)', 
              fontWeight: 800, 
              lineHeight: 1.1,
              marginBottom: '1.25rem',
              letterSpacing: '-0.03em'
            }}>
              Hi, I'm <br />
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Sub-headline */}
            <p style={{ 
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', 
              color: '#d1d5db', 
              marginBottom: '1.5rem',
              fontWeight: 500,
              maxWidth: '540px'
            }}>
              {personalInfo.role}
            </p>

            <p style={{ 
              fontSize: '1rem', 
              color: 'var(--text-muted)', 
              marginBottom: '2.5rem',
              maxWidth: '540px',
              lineHeight: 1.7
            }}>
              {personalInfo.tagline}
            </p>

            {/* CTA Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '3rem' }}>
              <a href="#projects" className="btn-primary">
                Explore Projects
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={18} color="#00f0ff" />
                Contact Me
              </a>
            </div>

            {/* Quick Social Channels */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <span style={{ fontSize: '0.875rem', fontFamily: 'JetBrains Mono', color: 'var(--text-dim)' }}>
                CONNECT //
              </span>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#8b5cf6'; e.currentTarget.style.boxShadow = '0 0 15px rgba(139, 92, 246, 0.4)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.boxShadow = '0 0 15px rgba(59, 130, 246, 0.4)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Hero Column: Prominent AI Avatar + Developer Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.75rem', 
              alignItems: 'center',
              width: '100%'
            }}
          >
            {/* Prominent AI Talking Avatar Component */}
            <HeroAvatar />

            {/* Developer Profile Console Card */}
            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '20px', width: '100%', maxWidth: '420px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '1rem'
              }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                </div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Terminal size={13} color="#8b5cf6" />
                  profile.config.js
                </div>
              </div>

              <pre style={{ 
                fontFamily: 'JetBrains Mono', 
                fontSize: '0.8rem', 
                color: '#e5e7eb',
                lineHeight: 1.6,
                whiteSpace: 'pre-wrap',
                margin: 0
              }}>
                <span style={{ color: '#c084fc' }}>const</span> <span style={{ color: '#60a5fa' }}>developer</span> = &#123;<br />
                &nbsp;&nbsp;name: <span style={{ color: '#34d399' }}>"{personalInfo.name}"</span>,<br />
                &nbsp;&nbsp;role: <span style={{ color: '#34d399' }}>"Web Developer"</span>,<br />
                &nbsp;&nbsp;education: <span style={{ color: '#34d399' }}>"B.Tech CSE (2027)"</span>,<br />
                &nbsp;&nbsp;stack: [<span style={{ color: '#f472b6' }}>"React.js"</span>, <span style={{ color: '#f472b6' }}>"Node.js"</span>, <span style={{ color: '#f472b6' }}>"PostgreSQL"</span>]<br />
                &#125;;
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
