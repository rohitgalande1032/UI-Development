import React from 'react';

const VIDEO_SRC = "/video.mp4"; 

const OptimizedVideo = () => {
  return (
    <>
    <h1 style={{color:"white", borderBottom:"2px solid #986deb", width:"fit-content", margin:"10px auto"}} id="gallery">Video</h1>
    <div className="container" style={styles.container} id='video'>
      <video
        style={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      >
        <source
          src={VIDEO_SRC}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    </>
  );
};

const styles = {
  container: {
    width: '100%',
    height: '80vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default OptimizedVideo;
