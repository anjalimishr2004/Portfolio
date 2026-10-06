import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Academic <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            My computer science undergraduate degree and secondary schooling credentials.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Glowing Line */}
          <div style={{
            position: 'absolute',
            left: '28px',
            top: '20px',
            bottom: '20px',
            width: '2px',
            background: 'linear-gradient(to bottom, #8b5cf6, #3b82f6, transparent)'
          }} />

          {/* Education Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                style={{ position: 'relative', paddingLeft: '4rem' }}
              >
                {/* Glowing Node Dot */}
                <div style={{
                  position: 'absolute',
                  left: '16px',
                  top: '24px',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: '#030712',
                  border: '2px solid #00f0ff',
                  boxShadow: '0 0 15px #00f0ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2
                }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00f0ff' }} />
                </div>

                {/* Glassmorphic Card */}
                <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    marginBottom: '1rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                    <div>
<span
  className="code-tag"
  style={{
    marginBottom: '0.5rem',
    opacity: edu.grade.includes('%') ? 0.75 : 1
  }}
>                        <GraduationCap size={14} />
                        {edu.grade}
                      </span>
                      <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginTop: '0.4rem' }}>
                        {edu.degree}
                      </h3>
                      <div style={{ color: '#60a5fa', fontSize: '1rem', fontWeight: 500 }}>
                        {edu.institution}
                      </div>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontFamily: 'JetBrains Mono',
                      fontSize: '0.85rem',
                      color: '#9ca3af',
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}>
                      <Calendar size={14} color="#8b5cf6" />
                      {edu.period}
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {edu.highlights.map((item, hIdx) => (
                      <div key={hIdx} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                        <CheckCircle2 size={16} color="#00f0ff" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
