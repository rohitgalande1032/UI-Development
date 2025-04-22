import React from 'react';

const RadialButton2 = () => {
  const styles = {
    centerCircle: {
      fill: '#99c2ff',
      cursor: 'pointer',
      transition: 'fill 0.3s ease',
    },
    centerCircleHover: {
      fill: '#b3d1ff',
    },
    text: {
      fontFamily: 'sans-serif',
      fontSize: '16px',
      fill: 'white',
      pointerEvents: 'none',
    },
  };

  return (
    <div>
      <div style={{ width: '300px', height: '300px', position: 'relative' }}>
        <svg viewBox="-150 -150 300 300" width="100%" height="100%">
          {/* Outer Ring */}
          <circle r="70" fill="#3366cc" />

          {/* Center Circle */}
          <circle
            r="50"
            style={styles.centerCircle}
            onMouseOver={(e) => (e.target.style.fill = styles.centerCircleHover.fill)}
            onMouseOut={(e) => (e.target.style.fill = styles.centerCircle.fill)}
          />
          <text x="0" y="5" textAnchor="middle" style={styles.text}>Start</text>
        </svg>
      </div>
    </div>
  );
};

export default RadialButton2;
