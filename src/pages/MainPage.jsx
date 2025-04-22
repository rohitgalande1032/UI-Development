import React from 'react';
import LinkPreview from '../components/LinkPreview';

const MainPage = () => {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>✨ Explore Our Resources</h2>
      <p style={styles.subtitle}>Your one-stop hub for visuals, videos, documents, and more!</p>

      <div style={styles.grid}>
        <LinkPreview
          to="/picture"
          preview={{
            linkText: 'Picture Page',
            title: 'Beautiful Image',
            description: 'This page shows a high-resolution image with context.',
            image: 'https://via.placeholder.com/300x150',
          }}
        />
        <LinkPreview
          to="/video"
          preview={{
            linkText: 'Video Page',
            title: 'Educational Video',
            description: 'Watch a video explanation on the topic.',
            video: 'your-video-url.mp4',
          }}
        />
        <LinkPreview
          to="/gif"
          preview={{
            linkText: 'GIF Page',
            title: 'Interactive GIF',
            description: 'Fun GIF to help visualize the concept.',
            gif: 'https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif',
          }}
        />
        <LinkPreview
          to="/pdf"
          preview={{
            linkText: 'PDF Page',
            title: 'Downloadable PDF',
            description: 'Access a downloadable document for detailed info.',
            image: 'https://cdn-icons-png.flaticon.com/512/337/337946.png',
          }}
        />
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: '2rem',
    maxWidth: '1000px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '16px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
    marginTop: '3rem',
    marginBottom: '3rem',
  },
  heading: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '0.5rem',
    color: '#222',
  },
  subtitle: {
    fontSize: '1rem',
    textAlign: 'center',
    color: '#555',
    marginBottom: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '2rem',
  },
};

export default MainPage;
