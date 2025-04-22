import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer} id='footer'>
      <p style={styles.text}>
        Made with <span style={styles.heart}>❤️</span> by{' '}
        <a href="https://github.com/rohitgalande1032" target="_blank" style={styles.link}>
          Rohit Galande
        </a>
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    width: '100%',
    padding: '1.5rem 0',
    background: 'linear-gradient(to right, #1c1c1c, #2e2e2e)',
    textAlign: 'center',
    position: 'relative',
    bottom: 0,
    color: '#f1f1f1',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
  },
  text: {
    fontSize: '1rem',
    margin: 0,
  },
  heart: {
    color: '#e25555',
    animation: 'beat 1.2s infinite',
    display: 'inline-block',
  },
  link: {
    color: '#00bcd4',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
};

// Add heart beat animation
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  @keyframes beat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }
`;
document.head.appendChild(styleTag);

export default Footer;
