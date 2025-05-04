import React from 'react'

const Video = () => {
      return (
        <div style={styles.container}>
          <div style={styles.card}>
            <h2 style={styles.title}>3-axis Robotics Arm 🎥</h2>
            <p style={styles.text}>Watch this short video clip and get information about 3-axis Robotic Arm!</p>
            <div style={styles.videoWrapper}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/yhdL4jz74WM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={styles.video}
              ></iframe>
            </div>
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
    maxWidth: '700px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    marginBottom: '1rem',
    fontSize: '2rem',
    color: '#8e24aa',
  },
  text: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
    color: '#555',
  },
  videoWrapper: {
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0,
    overflow: 'hidden',
    borderRadius: '12px',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '12px',
  },
};

export default Video