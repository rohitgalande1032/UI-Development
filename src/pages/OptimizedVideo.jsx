import React from 'react';

const OptimizedVideo = () => {
  return (
    <div style={styles.container} id='video'>
      <div style={styles.card}>
        <h2 style={styles.title}>Explore with 4K Video 🎥</h2>
        <p style={styles.text}>
          Enjoy this ultra-high-definition video experience. The video starts playing automatically when you land here.
        </p>

        <div style={styles.iframeWrapper}>
          <iframe
            style={styles.iframe}
            src="https://www.youtube.com/embed/PKZ_iNw_aFw?autoplay=1&mute=1&loop=1&playlist=PKZ_iNw_aFw"
            title="YouTube 4K Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    background: 'linear-gradient(135deg, #fce4ec, #e1f5fe)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    maxWidth: '800px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#c62828',
  },
  text: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
    color: '#444',
  },
  iframeWrapper: {
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0,
    overflow: 'hidden',
    borderRadius: '12px',
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0,
  },
};

export default OptimizedVideo;
