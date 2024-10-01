// src/components/PointList.js
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './PointList.css';

function PointList({ points, addPoint, removePoint, updatePoint, setLastFocusedInput }) {
  return (
    <div className="point-list-container">
      <h2>Points</h2>
      {points.map((point, index) => (
        <div key={index} className="point-item">
          <div className="point-controls">
            <input
              type="number"
              className="point-input point-x-input"
              value={point.x}
              onChange={(e) => updatePoint(index, { ...point, x: parseFloat(e.target.value) })}
              placeholder="X"
              onFocus={(e) => setLastFocusedInput(e.target)}
            />
            <input
              type="number"
              className="point-input point-y-input"
              value={point.y}
              onChange={(e) => updatePoint(index, { ...point, y: parseFloat(e.target.value) })}
              placeholder="Y"
              onFocus={(e) => setLastFocusedInput(e.target)}
            />
            <input
              type="color"
              className="color-picker point-color-picker"
              value={point.color}
              onChange={(e) => updatePoint(index, { ...point, color: e.target.value })}
            />
            <button className="remove-btn" onClick={() => removePoint(index)}>
              <FaTimes />
            </button>
          </div>
        </div>
      ))}
      <button className="add-btn" onClick={addPoint}>+ Add Point</button>
    </div>
  );
}

export default PointList;
