import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RadialButton1.css';

const RadialButton1 = () => {
  const navigate = useNavigate();

  return (
    <div className="radial-button">
      <svg viewBox="-150 -150 300 300">

        {/* Arcs for A, B, C */}
        <path
          className="segment hoverable"
          d="M 0 0 L 0 -100 A 100 100 0 0 1 86.6 -50 Z"
          onClick={() => navigate('/a')}
        />
        <path
          className="segment hoverable"
          d="M 0 0 L 86.6 -50 A 100 100 0 0 1 86.6 50 Z"
          onClick={() => navigate('/b')}
        />
        <path
          className="segment hoverable"
          d="M 0 0 L 86.6 50 A 100 100 0 0 1 0 100 Z"
          onClick={() => navigate('/c')}
        />

        {/* Labels */}
        <text className="label" x="40" y="-70">A</text>
        <text className="label" x="70" y="0">B</text>
        <text className="label" x="40" y="70">C</text>

        {/* Decorative Outer Ring */}
        <circle r="70" fill="#3366cc" className="outer-ring" />

        {/* Center Circle - Start */}
        <circle
          className="center-circle hoverable"
          r="50"
          onClick={() => navigate('/start')}
        />
        <text x="0" y="5" textAnchor="middle" className="start-label">Start</text>
      </svg>
    </div>
  );
};

export default RadialButton1;
