import React from 'react';
import './ViewportControls.css';

function ViewportControls({ viewport, updateViewport }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateViewport({ ...viewport, [name]: parseFloat(value) });
  };

  return (
    <div className="viewport-controls">
      <h3>Viewport Settings</h3>
      <label>X Range:</label>
      <input
        type="number"
        name="xMin"
        value={viewport.xMin}
        onChange={handleChange}
      />
      <input
        type="number"
        name="xMax"
        value={viewport.xMax}
        onChange={handleChange}
      />
      <br />
      <label>Y Range:</label>
      <input
        type="number"
        name="yMin"
        value={viewport.yMin}
        onChange={handleChange}
      />
      <input
        type="number"
        name="yMax"
        value={viewport.yMax}
        onChange={handleChange}
      />
    </div>
  );
}

export default ViewportControls;
