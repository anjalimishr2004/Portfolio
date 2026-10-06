import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, X } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = ['All', 'React.js', 'JavaScript', 'Node.js'];

  const filteredProjects = projectsData.filter((proj) => {
    if (filter === 'All') return true;
    return proj.tags.some((t) =>
      t.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <p className="section-subtitle">
            Web applications and interactive platforms developed during my
            studies and practical projects.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}
        >
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className="glass-card"
              style={{
                padding: '0.55rem 1.25rem',
                borderRadius: '25px',
                fontSize: '0.875rem',
                fontWeight: filter === opt ? 600 : 400,
                color: filter === opt ? '#00f0ff' : 'var(--text-muted)',
                background:
                  filter === opt
                    ? 'rgba(139, 92, 246, 0.2)'
                    : 'rgba(15, 23, 42, 0.4)',
                borderColor:
                  filter === opt
                    ? '#00f0ff'
                    : 'rgba(255, 255, 255, 0.08)',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '20px',
                overflow: 'hidden'
              }}
            >
              {/* Image Preview Window */}
              <div
                style={{
                  position: 'relative',
                  height: '210px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />

                {/* Gradient Shadow Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(15, 23, 42, 1) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%)'
                  }}
                />

                {/* Featured Badge */}
                {project.featured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '20px',
                      background: 'rgba(139, 92, 246, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      boxShadow: '0 0 12px rgba(139, 92, 246, 0.5)'
                    }}
                  >
                    <Sparkles size={12} />
                    Project
                  </div>
                )}
              </div>

              {/* Content Body */}
              <div
                style={{
                  padding: '1.75rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'JetBrains Mono',
                      fontSize: '0.8rem',
                      color: '#60a5fa',
                      marginBottom: '0.4rem'
                    }}
                  >
                    {project.subtitle}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'Space Grotesk',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '0.75rem'
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.925rem',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem'
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: 'JetBrains Mono',
                          fontSize: '0.75rem',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: '#d1d5db',
                          border:
                            '1px solid rgba(255, 255, 255, 0.08)'
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1rem',
                      borderTop:
                        '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color =
                          'var(--text-muted)';
                      }}
                    >
                      <Github size={16} />
                      Source Code
                    </a>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.875rem',
                        color: '#00f0ff',
                        fontWeight: 600,
                        textDecoration: 'none',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        fontFamily: 'inherit'
                      }}
                    >
                      View Details
                      <ExternalLink size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              background: 'rgba(3, 7, 18, 0.8)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '620px',
                maxHeight: '85vh',
                overflowY: 'auto',
                padding: '2rem',
                borderRadius: '24px',
                position: 'relative'
              }}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  border:
                    '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#ffffff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={18} />
              </button>

              {/* Modal Content */}
              <div style={{ paddingRight: '2.5rem' }}>
                <div
                  style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: '0.8rem',
                    color: '#60a5fa',
                    marginBottom: '0.5rem'
                  }}
                >
                  {selectedProject.subtitle}
                </div>

                <h3
                  style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '1.7rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '1rem'
                  }}
                >
                  {selectedProject.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-muted)',
                    lineHeight: 1.8,
                    fontSize: '0.95rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <div
                    style={{
                      fontFamily: 'JetBrains Mono',
                      fontSize: '0.75rem',
                      color: '#9ca3af',
                      marginBottom: '0.75rem'
                    }}
                  >
                    TECHNOLOGIES //
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}
                  >
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: 'JetBrains Mono',
                          fontSize: '0.75rem',
                          padding: '0.3rem 0.7rem',
                          borderRadius: '6px',
                          background:
                            'rgba(139, 92, 246, 0.12)',
                          color: '#c084fc',
                          border:
                            '1px solid rgba(139, 92, 246, 0.25)'
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Button */}
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    textDecoration: 'none'
                  }}
                >
                  <Github size={17} />
                  View Source Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;