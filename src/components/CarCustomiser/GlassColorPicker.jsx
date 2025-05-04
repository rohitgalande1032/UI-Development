// src/components/ColorPicker.jsx
import React from 'react';

const colors = [
  { name: 'Giallo Orion', hex: '#FFD700' },
  { name: 'Arancio Borealis', hex: '#FF4500' },
  { name: 'Verde Mantis', hex: '#64FF00' },
  { name: 'Blu Cepheus', hex: '#3ABEFF' },
  { name: 'Grigio Titans', hex: '#666666' },
  { name: 'Nero Nemesis', hex: '#0B0B0B' },
  { name: 'Bianco Monocerus', hex: '#FFFFFF' },
  { name: 'Rosso Mars', hex: '#FF0000' },
];

const GlassColorPicker = ({ selectedColor, setColor }) => {
  return (
    <>
    <h3>Change Glass Color</h3>
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '1rem' }}>
      {colors.map((color) => (
        <button
          key={color.name}
          onClick={() => setColor(color.hex)}
          title={color.name}
          style={{
            backgroundColor: color.hex,
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            border: selectedColor === color.hex ? '3px solid #000' : '1px solid #ccc',
            cursor: 'pointer',
          }}
        />
      ))}
    </div>
    </>
  );
};

export default GlassColorPicker;
