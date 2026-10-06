import React from 'react';

const BackgroundCanvas = () => {
  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {/* Dark Base Grid */}
      <div className="bg-grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.15 }} />
      
      {/* Top Left Purple Ambient Glow */}
      <div 
        className="ambient-glow animated-pulse"
        style={{
          width: '500px',
          height: '500px',
          top: '-10%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%)',
        }}
      />
      
      {/* Center-Right Electric Blue Glow */}
      <div 
        className="ambient-glow animated-pulse"
        style={{
          width: '600px',
          height: '600px',
          top: '30%',
          right: '-15%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.28) 0%, transparent 70%)',
          animationDelay: '3s'
        }}
      />

      {/* Bottom Left Cyan Accent Glow */}
      <div 
        className="ambient-glow animated-pulse"
        style={{
          width: '450px',
          height: '450px',
          bottom: '10%',
          left: '5%',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.2) 0%, transparent 70%)',
          animationDelay: '5s'
        }}
      />
    </div>
  );
};

export default BackgroundCanvas;
