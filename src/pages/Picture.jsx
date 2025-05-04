import React from 'react'

const Picture = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Beautiful Landscape 🏞️</h2>
        <p style={styles.text}>Here's a stunning image to soothe your eyes.</p>
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Beautiful Landscape"
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
    padding: '1rem',
  },
  card: {
    backgroundColor: '#ffffff',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
    borderRadius: '16px',
    padding: '1rem',
    maxWidth: '500px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  title: {
    marginBottom: '1rem',
    fontSize: '2rem',
    color: '#00796b',
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

export default Picture