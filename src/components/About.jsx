import React from 'react';
import { motion } from 'framer-motion';
import { Code, Compass, Cpu, Layers, User } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const coreValues = [
  {
    icon: <Code size={24} color="#8b5cf6" />,
    title: "Web Development",
    description: "Building responsive and user-friendly interfaces with a focus on clean design and usability."
  },
  {
    icon: <Layers size={24} color="#3b82f6" />,
    title: "Backend & Database",
    description: "Building reliable backend services and working with databases to support practical web applications."
  },
  {
    icon: <Cpu size={24} color="#00f0ff" />,
    title: "Object-Oriented Programming",
description: "Familiar with Java and Object-Oriented Programming (OOP) concepts, with a focus on writing clean and organized code."  }
];

const About = () => {
  return (
    <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            A closer look at my journey, mindset, and approach to building meaningful digital experiences.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch'
        }}>
          {/* Bio Narrative Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card"
            style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  padding: '0.6rem',
                  borderRadius: '12px',
                  background: 'rgba(139, 92, 246, 0.15)',
                  border: '1px solid rgba(139, 92, 246, 0.3)'
                }}>
                  <User size={22} color="#00f0ff" />
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.4rem', fontWeight: 700 }}>
                  Career Objective
                </h3>
              </div>

              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1.025rem' }}>
                I am <strong style={{ color: '#ffffff' }}>Anjali Mishra</strong>, currently pursuing my B.Tech in Computer Science at BBS College of Engineering & Technology, with graduation expected in 2027.
              </p>

              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.025rem' }}>
                {personalInfo.bio}
              </p>
            </div>

            {/* Quick Location & Status Info */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.9rem',
              color: '#d1d5db',
              fontFamily: 'JetBrains Mono'
            }}>
              <div>
                <span style={{ color: '#6b7280' }}>LOCATION:</span> {personalInfo.location}
              </div>
              <div>
                <span style={{ color: '#6b7280' }}>STATUS:</span> Student (2027)
              </div>
            </div>
          </motion.div>

          {/* Stats & Core Values */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem'
              }}
            >
              {personalInfo.stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="glass-card" 
                  style={{ padding: '1.5rem', textAlign: 'center' }}
                >
                  <div style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    marginBottom: '0.25rem'
                  }} className="gradient-text">
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Core Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card"
              style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              {coreValues.map((val, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    padding: '0.6rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    flexShrink: 0
                  }}>
                    {val.icon}
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Space Grotesk', fontSize: '1.05rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.2rem' }}>
                      {val.title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
