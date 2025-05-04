import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  '/robot-1.png',
  '/robot-2.jpg',
  '/robot-3.jpg',
  '/robot-4.jpg',
  '/robot-5.jpg',
  '/robot-6.jpg',
  '/robot-7.jpg',
  '/robot-8.jpg',
  '/robot-9.jpg',
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
      <h1 style={{color:"white", borderBottom:"2px solid #986deb", width:"fit-content", margin:"10px auto"}} >Gallery</h1>
      <div style={styles.wrapper} id='gallery'>
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
