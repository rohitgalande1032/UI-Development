import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80',
];

const PictureGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const previewRefs = useRef([]);

  const scrollToPreview = (i) => {
    setHoveredIndex(i);
    previewRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '1rem', color: '#fff' }} id="gallery">Gallery</h1>
      <div style={styles.wrapper} >
        <div style={styles.container}>
          {/* Preview Column */}
          <div style={styles.previewColumn}>
            {images.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`img-${i}`}
                ref={(el) => (previewRefs.current[i] = el)}
                style={{
                  ...styles.previewImage,
                  opacity: hoveredIndex === null || hoveredIndex === i ? 1 : 0.4,
                  filter: hoveredIndex === i ? 'brightness(1)' : 'brightness(0.6)',
                  transform: hoveredIndex === i ? 'scale(1.02)' : 'scale(1)',
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.04 }}
              />
            ))}
          </div>

          {/* Thumbnail Gallery */}
          <div style={styles.gallery}>
            {images.map((src, i) => (
              <motion.div
                key={i}
                style={styles.card}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  boxShadow: '0 10px 40px rgba(255,255,255,0.2)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                onMouseEnter={() => scrollToPreview(i)}
              >
                <img src={src} alt={`thumb-${i}`} style={styles.image} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  wrapper: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: '#0e0e0e',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    height: '90vh',
    width: '90vw',
    gap: '2rem',
    overflow: 'hidden',
  },
  previewColumn: {
    flex: 1,
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    alignItems: 'center',
    overflowY: 'auto',
    scrollBehavior: 'smooth',
  },
  previewImage: {
    width: '95%',
    height: '500px',
    borderRadius: '20px',
    objectFit: 'cover',
    cursor: 'pointer',
    transition: 'all 0.4s ease-in-out',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
  },
  gallery: {
    flex: 1,
    maxWidth: '300px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    scrollSnapType: 'y mandatory',
  },
  card: {
    scrollSnapAlign: 'start',
    width: '100%',
    height: '250px',
    borderRadius: '14px',
    overflow: 'hidden',
    cursor: 'pointer',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
};

// Hide scrollbars
const style = document.createElement('style');
style.innerHTML = `
  ::-webkit-scrollbar {
    display: none;
  }
  body {
    margin: 0;
    background-color: #0e0e0e;
  }
`;
document.head.appendChild(style);

export default PictureGallery;
