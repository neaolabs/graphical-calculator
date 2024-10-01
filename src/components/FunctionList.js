// src/components/FunctionList.js
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { MathJax } from 'better-react-mathjax';
import './FunctionList.css';

function FunctionList({ functions, addFunction, removeFunction, updateFunction, setLastFocusedInput }) {
  return (
    <div className="function-list">
      <h2>Functions</h2>
      {functions.map((func, index) => (
        <div key={index} className="function-item">
          <div className="function-controls">
            <select
              className="function-type-select"
              value={func.type}
              onChange={(e) => updateFunction(index, { ...func, type: e.target.value })}
            >
              <option value="standard">Standard</option>
              <option value="parametric">Parametric</option>
              <option value="polar">Polar</option>
              <option value="implicit">Implicit</option>
            </select>
            <input
              type="text"
              className="function-input"
              value={func.expression}
              onChange={(e) => updateFunction(index, { ...func, expression: e.target.value })}
              placeholder="Enter Function"
              onFocus={(e) => setLastFocusedInput(e.target)}
            />
            <input
              type="color"
              className="color-picker"
              value={func.color}
              onChange={(e) => updateFunction(index, { ...func, color: e.target.value })}
            />
            <button className="remove-btn" onClick={() => removeFunction(index)}>
              <FaTimes />
            </button>
          </div>
          <div className="math-output">
            <MathJax inline dynamic>
              {`\\(${func.expression}\\)`}
            </MathJax>
          </div>
        </div>
      ))}
      <button className="add-btn" onClick={addFunction}>+ Add Function</button>
    </div>
  );
}

export default FunctionList;
