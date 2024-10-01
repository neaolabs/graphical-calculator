import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './DottedLines.css';

function DottedLines({ dottedLines, addDottedLine, removeDottedLine, updateDottedLine }) {
  return (
    <div className="dotted-line-controls">
      <h3>Dotted Lines</h3>
      {dottedLines.map((line, index) => (
        <div key={index} className="dotted-line-item">
          <div className="line-controls">
            <label>Axis:</label>
            <select
              value={line.axis}
              onChange={(e) => updateDottedLine(index, { ...line, axis: e.target.value })}
            >
              <option value="x">X-axis</option>
              <option value="y">Y-axis</option>
            </select>

            <label>Position:</label>
            <input
              type="number"
              value={line.position}
              onChange={(e) => updateDottedLine(index, { ...line, position: parseFloat(e.target.value) })}
              step="0.1"
            />

            <label>Color:</label>
            <input
              type="color"
              value={line.color}
              onChange={(e) => updateDottedLine(index, { ...line, color: e.target.value })}
            />

            <button className="remove-line-btn" onClick={() => removeDottedLine(index)}>
              <FaTimes />
            </button>
          </div>
        </div>
      ))}
      <button className="add-btn" onClick={addDottedLine}>+ Add Dotted Line</button>
    </div>
  );
}

export default DottedLines;
