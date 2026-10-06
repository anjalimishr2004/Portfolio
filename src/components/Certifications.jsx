import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle, Code2, Terminal, Leaf } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Training & <span className="gradient-text">Certifications</span>
          </h2>

          <p className="section-subtitle">
            Professional training programs and virtual internships completed.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card"
              style={{
                padding: '1.75rem',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>

                {/* Header Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}
                >
                  <div
                    style={{
                      padding: '0.65rem',
                      borderRadius: '14px',
                      background:
                        'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(0, 240, 255, 0.2))',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      boxShadow: '0 0 15px rgba(139, 92, 246, 0.2)'
                    }}
                  >
                    {cert.title === 'MERN Training' ? (
                      <Code2 size={24} color="#00f0ff" />
                    ) : cert.title === 'Java Full Stack Training' ? (
                      <Terminal size={24} color="#00f0ff" />
                    ) : (
                      <Leaf size={24} color="#00f0ff" />
                    )}
                  </div>

                  <span
                    style={{
                      fontFamily: 'JetBrains Mono',
                      fontSize: '0.75rem',
                      color: '#9ca3af',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '6px'
                    }}
                  >
                    {cert.date}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3
                  style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.4rem'
                  }}
                >
                  {cert.title}
                </h3>

                <div
                  style={{
                    color: '#818cf8',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <ShieldCheck size={15} color="#34d399" />
                  {cert.issuer}
                </div>

                {/* Skills Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '6px',
                        background: 'rgba(139, 92, 246, 0.1)',
                        color: '#c084fc',
                        border: '1px solid rgba(139, 92, 246, 0.2)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Credential Footer */}
              <div
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  fontFamily: 'JetBrains Mono',
                  fontSize: '0.75rem',
                  color: '#00f0ff'
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.2rem'
                  }}
                >
                  Completed <CheckCircle size={12} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;