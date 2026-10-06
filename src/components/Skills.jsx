import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Cpu } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categoryIcons = {
  Programming: <Code2 size={22} color="#c084fc" />,
  "Frontend Development": <Layout size={22} color="#60a5fa" />,
  "Backend & Database": <Database size={22} color="#34d399" />,
  "Concepts & Tools": <Cpu size={22} color="#00f0ff" />
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map(c => c.category)];

  const filteredData = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(c => c.category === activeCategory);

  return (
    <section id="skills" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Programming languages, frontend & backend frameworks, databases, and developer tools.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginBottom: '3rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="glass-card"
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: '30px',
                fontSize: '0.9rem',
                fontWeight: activeCategory === cat ? 600 : 400,
                color: activeCategory === cat ? '#ffffff' : 'var(--text-muted)',
                background: activeCategory === cat ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(59, 130, 246, 0.4))' : 'rgba(15, 23, 42, 0.4)',
                borderColor: activeCategory === cat ? '#8b5cf6' : 'rgba(255, 255, 255, 0.08)',
                cursor: 'pointer',
                boxShadow: activeCategory === cat ? '0 0 15px rgba(139, 92, 246, 0.3)' : 'none',
                transition: 'all 0.3s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
       {/* Categories Grid */}
<div style={{
  display: 'grid',
  gridTemplateColumns: activeCategory === 'All'
    ? 'repeat(auto-fit, minmax(280px, 1fr))'
    : 'minmax(0, 1fr)',
  gap: '2rem',
  width: '100%'
}}>
          {filteredData.map((catGroup, idx) => (
            <motion.div
            layout
              key={catGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card"
              style={{ padding: '2rem' }}
            >
              {/* Category Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{
                  padding: '0.6rem',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  {categoryIcons[catGroup.category] || <Code2 size={22} color="#8b5cf6" />}
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>
                  {catGroup.category}
                </h3>
              </div>

              {/* Skills List */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.85rem' }}>
                {catGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                      e.currentTarget.style.background = 'rgba(139, 92, 246, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 500, color: '#e5e7eb', fontSize: '0.95rem' }}>
                      {skill.name}
                    </span>

                    {skill.level && (
                      <span style={{
                        fontFamily: 'JetBrains Mono',
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '12px',
                        background: 'rgba(59, 130, 246, 0.15)',
                        color: '#60a5fa',
                        border: '1px solid rgba(59, 130, 246, 0.25)'
                      }}>
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
