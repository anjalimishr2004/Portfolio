import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <p className="section-subtitle">
            Feel free to reach out for project inquiries, technical discussions, or opportunities.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
        >

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card"
            style={{ padding: '2rem' }}
          >
            <h3
              style={{
                fontFamily: 'Space Grotesk',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1rem'
              }}
            >
              Contact Details
            </h3>

            <p
              style={{
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '2rem',
                fontSize: '0.95rem'
              }}
            >
              Computer Science undergraduate eager to collaborate and contribute to web development projects.
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    padding: '0.75rem',
                    borderRadius: '12px',
                    background: 'rgba(139, 92, 246, 0.15)',
                    border: '1px solid rgba(139, 92, 246, 0.3)'
                  }}
                >
                  <Mail size={20} color="#00f0ff" />
                </div>

                <div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: '#6b7280',
                      fontFamily: 'JetBrains Mono'
                    }}
                  >
                    EMAIL ME
                  </div>

                  <div
                    style={{
                      color: '#ffffff',
                      fontWeight: 500,
                      fontSize: '0.95rem'
                    }}
                  >
                    {personalInfo.email}
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    padding: '0.75rem',
                    borderRadius: '12px',
                    background: 'rgba(59, 130, 246, 0.15)',
                    border: '1px solid rgba(59, 130, 246, 0.3)'
                  }}
                >
                  <Phone size={20} color="#38bdf8" />
                </div>

                <div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: '#6b7280',
                      fontFamily: 'JetBrains Mono'
                    }}
                  >
                    PHONE
                  </div>

                  <div
                    style={{
                      color: '#ffffff',
                      fontWeight: 500,
                      fontSize: '0.95rem'
                    }}
                  >
                    {personalInfo.phone}
                  </div>
                </div>
              </a>

              {/* Location */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    padding: '0.75rem',
                    borderRadius: '12px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}
                >
                  <MapPin size={20} color="#34d399" />
                </div>

                <div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: '#6b7280',
                      fontFamily: 'JetBrains Mono'
                    }}
                  >
                    LOCATION
                  </div>

                  <div
                    style={{
                      color: '#ffffff',
                      fontWeight: 500,
                      fontSize: '0.95rem'
                    }}
                  >
                    {personalInfo.location}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Connect Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card"
            style={{
              padding: '2.5rem',
              minHeight: '100%'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem'
              }}
            >
              <MessageSquare size={20} color="#00f0ff" />

              <h3
                style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  margin: 0
                }}
              >
                Let’s Connect
              </h3>
            </div>

            <p
              style={{
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                fontSize: '0.95rem',
                marginBottom: '2rem'
              }}
            >
              I’m open to internships, web development opportunities,
              collaborations, and interesting technical projects.
              Feel free to connect with me through any of the channels below.
            </p>

            {/* Email CTA */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                textDecoration: 'none',
                marginBottom: '1rem'
              }}
            >
              <Mail size={17} />
              Email Me
            </a>

            {/* Social Profiles */}
            <div
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                marginBottom: '0.75rem',
                fontFamily: 'JetBrains Mono'
              }}
            >
              PROFILES //
            </div>

            <div
              style={{
                display: 'flex',
                gap: '1rem'
              }}
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  fontSize: '0.875rem',
                  padding: '0.65rem 1rem',
                  textDecoration: 'none'
                }}
              >
                <Github size={18} />
                GitHub
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  fontSize: '0.875rem',
                  padding: '0.65rem 1rem',
                  textDecoration: 'none'
                }}
              >
                <Linkedin size={18} color="#00f0ff" />
                LinkedIn
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;