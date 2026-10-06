import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Zap } from 'lucide-react';

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Quantum Engine...');

  useEffect(() => {
    const statusMessages = [
      'Initializing Core Engine...',
      'Loading Glassmorphic Modules...',
      'Synthesizing Technical Arsenal...',
      'Compiling Portfolio Data...',
      'System Ready.'
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onFinish();
          }, 400);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 12) + 5;
        const bounded = Math.min(next, 100);
        
        const messageIndex = Math.floor((bounded / 100) * (statusMessages.length - 1));
        setStatusText(statusMessages[messageIndex]);

        return bounded;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#030712',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
    >
      {/* Background glow behind logo */}
      <div 
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
          borderRadius: '50%'
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '420px', width: '100%' }}>
        {/* Animated Brand Emblem */}
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            width: '80px',
            height: '80px',
            margin: '0 auto 1.5rem auto',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))',
            border: '1px solid rgba(139, 92, 246, 0.5)',
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Zap size={38} color="#00f0ff" />
        </motion.div>

        {/* Title */}
        <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>
          <span className="gradient-text">ANJALI MISHRA</span>
        </h2>
        <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.85rem', color: '#9ca3af', marginBottom: '2rem' }}>
          SYS.V2.6 // PORTFOLIO
        </p>

        {/* Progress Bar Container */}
        <div style={{
          width: '100%',
          height: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '10px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          marginBottom: '1rem',
          position: 'relative'
        }}>
          <motion.div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #8b5cf6, #3b82f6, #00f0ff)',
              borderRadius: '10px',
              boxShadow: '0 0 15px rgba(0, 240, 255, 0.7)'
            }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Status Line */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'JetBrains Mono', fontSize: '0.8rem', color: '#6b7280' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#c084fc' }}>
            <Terminal size={14} />
            {statusText}
          </span>
          <span style={{ color: '#00f0ff', fontWeight: 600 }}>{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
