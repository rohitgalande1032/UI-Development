import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LinkPreview = ({ to, preview }) => {
  const [show, setShow] = useState(false);

  return (
    <span
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <Link to={to} style={{ textDecoration: 'underline', color: '#3366cc' }}>
        {preview.linkText}
      </Link>

      {show && (
        <div
          style={{
            position: 'absolute',
            top: '120%',
            left: 0,
            width: '280px',
            background: '#fff',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            padding: '12px',
            zIndex: 10,
          }}
        >
          {preview.image && (
            <img
              src={preview.image}
              alt="preview"
              style={{ width: '100%', height: 'auto', borderRadius: '4px', marginBottom: '8px' }}
            />
          )}
          {preview.video && (
            <video width="100%" height="auto" muted controls style={{ marginBottom: '8px' }}>
              <source src={preview.video} type="video/mp4" />
            </video>
          )}
          {preview.gif && (
            <img
              src={preview.gif}
              alt="gif"
              style={{ width: '100%', height: 'auto', borderRadius: '4px', marginBottom: '8px' }}
            />
          )}
          <strong>{preview.title}</strong>
          <p style={{ fontSize: '14px', color: '#555' }}>{preview.description}</p>
        </div>
      )}
    </span>
  );
};

export default LinkPreview;
