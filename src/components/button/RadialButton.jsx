import React from "react";
import { useNavigate } from "react-router-dom";
import "./RadialButton.css";

const RadialButton = () => {
  const navigate = useNavigate();

  return (
    <div className="radial-button">
      <svg viewBox="-150 -150 400 300">
        {/* Subset Arc (outermost layer above A) */}
        <path
          className="segment hoverable subset"
          d="M 0 -160 A 160 160 0 0 1 89.4 -129.2 L 67.3 -97.6 A 120 120 0 0 0 0 -120 Z"
          onClick={() => navigate("/subset-a")}
        />
        <text className="label subset" x="0" y="-155" textAnchor="middle">
          Subset(A)
        </text>

        {/* Outer Ring arcs (dimmed, hoverable) */}
        <path
          className="segment dimmed hoverable"
          d="M 89.4 -129.2 A 160 160 0 0 1 89.4 129.2 L 67.3 97.6 A 120 120 0 0 0 67.3 -97.6 Z"
          onClick={() => navigate("/outer-1")}
        />
        <path
          className="segment dimmed hoverable"
          d="M 89.4 129.2 A 160 160 0 0 1 0 160 L 0 120 A 120 120 0 0 0 67.3 97.6 Z"
          onClick={() => navigate("/outer-2")}
        />

        {/* Inner Ring: A, B, C with interaction */}
        <path
          className="segment hoverable"
          d="M 0 0 L 0 -100 A 100 100 0 0 1 86.6 -50 Z"
          onClick={() => navigate("/a")}
        />
        <path
          className="segment hoverable"
          d="M 0 0 L 86.6 -50 A 100 100 0 0 1 86.6 50 Z"
          onClick={() => navigate("/b")}
        />
        <path
          className="segment hoverable"
          d="M 0 0 L 86.6 50 A 100 100 0 0 1 0 100 Z"
          onClick={() => navigate("/c")}
        />

        {/* Labels: A, B, C */}
        <text className="label" x="30" y="-70">A</text>
        <text className="label" x="75" y="10">B</text>
        <text className="label" x="30" y="85">C</text>

        {/* Center Circle */}
        <circle r="70" fill="#3366cc" className="hoverable center-bg" onClick={() => navigate("/start")} />
        <circle className="center" r="60" />
        <text x="0" y="5" textAnchor="middle" className="start-label">Start</text>
      </svg>
    </div>
  );
};

export default RadialButton;
