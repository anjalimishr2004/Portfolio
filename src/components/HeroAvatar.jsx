import React, { useEffect, useRef, useState } from 'react';

const HeroAvatar = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [gaze, setGaze] = useState('center');

  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const hasStartedRef = useRef(false);

  const showStaticImage = videoEnded || videoError;

  // Eye tracking
  const handleMouseMove = (e) => {
    if (!showStaticImage || !frameRef.current) return;

    const rect = frameRef.current.getBoundingClientRect();

    // Check whether cursor is inside the avatar frame
    const isInside =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    // Outside frame → eyes return to center
    if (!isInside) {
      setGaze('center');
      return;
    }

    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    const normalizedX = x / (rect.width / 2);
    const normalizedY = y / (rect.height / 2);

    const threshold = 0.18;

    // Near center
    if (
      Math.abs(normalizedX) < threshold &&
      Math.abs(normalizedY) < threshold
    ) {
      setGaze('center');
      return;
    }

    // Horizontal vs vertical direction
    if (Math.abs(normalizedX) > Math.abs(normalizedY)) {
      setGaze(normalizedX < 0 ? 'left' : 'right');
    } else {
      setGaze(normalizedY < 0 ? 'up' : 'down');
    }
  };

  // Track mouse across the page
  useEffect(() => {
    if (!showStaticImage) return;

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [showStaticImage]);

  // Play video only once
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startVideo = () => {
      if (hasStartedRef.current || video.ended) return;

      hasStartedRef.current = true;

      video.currentTime = 0;
      video.muted = false;

      video.play().catch(() => {
        hasStartedRef.current = false;
      });
    };

    startVideo();

    const handleFirstInteraction = () => {
      startVideo();
    };

    window.addEventListener('pointerdown', handleFirstInteraction, {
      once: true
    });

    window.addEventListener('keydown', handleFirstInteraction, {
      once: true
    });

    return () => {
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '420px',
        margin: '0 auto'
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          inset: '-10px',
          borderRadius: '32px',
          background: showStaticImage
            ? 'radial-gradient(circle, rgba(139, 92, 246, 0.45), rgba(0, 240, 255, 0.25), transparent 80%)'
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.35), transparent 70%)',
          filter: 'blur(25px)',
          opacity: 0.7,
          pointerEvents: 'none'
        }}
      />

      {/* Frame */}
      <div
        ref={frameRef}
        style={{
          position: 'relative',
          zIndex: 1,
          borderRadius: '28px',
          overflow: 'hidden',
          aspectRatio: '3 / 4',
          maxHeight: '520px',
          width: '100%',
          background: '#070c1e',
          border: '1px solid rgba(139, 92, 246, 0.3)'
        }}
      >
        {/* VIDEO */}
        {!showStaticImage && (
          <video
            ref={videoRef}
            src="/avatar-intro.mp4"
            playsInline
            controls={false}
            loop={false}
            onEnded={() => setVideoEnded(true)}
            onError={() => setVideoError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        )}

        {/* STATIC AVATAR + SMOOTH EYE TRANSITION */}
        {showStaticImage && (
          <>
            {/* Center image */}
            <img
              src="/avatar-center.png"
              alt="Anjali Mishra Avatar"
              draggable="false"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                opacity: gaze === 'center' ? 1 : 0,
                transition: 'opacity 180ms ease-in-out'
              }}
            />

            {/* Direction image */}
            <img
              src={
                gaze === 'left'
                  ? '/avatar-left.png'
                  : gaze === 'right'
                  ? '/avatar-right.png'
                  : gaze === 'up'
                  ? '/avatar-up.png'
                  : gaze === 'down'
                  ? '/avatar-down.png'
                  : '/avatar-center.png'
              }
              alt=""
              draggable="false"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                opacity: gaze === 'center' ? 0 : 1,
                transition: 'opacity 180ms ease-in-out'
              }}
            />
          </>
        )}

        {/* Vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(3, 7, 18, 0.4), transparent 25%)',
            pointerEvents: 'none'
          }}
        />
      </div>
    </div>
  );
};

export default HeroAvatar;