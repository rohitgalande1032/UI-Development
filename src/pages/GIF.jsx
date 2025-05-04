import React from 'react'

const GIF = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Funny GIF 😄</h2>
        <p style={styles.text}>Enjoy this hilarious GIF and lighten your mood!</p>
        <img
          src="https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif"
          alt="Sample GIF"
          style={styles.image}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '80vh',
    background: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  card: {
    backgroundColor: '#ffffff',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
    borderRadius: '16px',
    padding: '2rem',
    maxWidth: '500px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  title: {
    marginBottom: '1rem',
    fontSize: '2rem',
    color: '#3366cc',
  },
  text: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
    color: '#333',
  },
  image: {
    width: '100%',
    borderRadius: '12px',
  },
};

export default GIF