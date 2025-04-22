import React from 'react'

const PDF = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Learn with PDF 📄</h2>
        <p style={styles.text}>
          Here's a sample PDF document for you to explore and learn something new.
        </p>
        <iframe
          src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          title="Sample PDF"
          style={styles.iframe}
        ></iframe>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    background: 'linear-gradient(135deg, #e3f2fd, #fce4ec)',
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
    maxWidth: '700px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#1565c0',
  },
  text: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
    color: '#444',
  },
  iframe: {
    width: '100%',
    height: '500px',
    border: 'none',
    borderRadius: '12px',
  },
};

export default PDF