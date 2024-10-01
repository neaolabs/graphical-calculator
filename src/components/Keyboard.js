// src/components/Keyboard.js
import React from 'react';
import './Keyboard.css';

function Keyboard({ insertText }) {
  const buttons = [
    'sin(x)', 'cos(x)', 'tan(x)', 'asin(x)', 'acos(x)', 'atan(x)',
    'log(x)', 'ln(x)', 'sqrt(x)', 'exp(x)', 'abs(x)', 'ceil(x)',
    'floor(x)', 'round(x)', 'π', 'e', '^', '!',
    'sinh(x)', 'cosh(x)', 'tanh(x)', 'asinh(x)', 'acosh(x)', 'atanh(x)',
    'sec(x)', 'csc(x)', 'cot(x)', 'asec(x)', 'acsc(x)', 'acot(x)',
    'nPr', 'nCr', 'gamma(x)', 'pow(x)', 'nth root(x)', 'mod',
    'Σ', 'Δ', '∞', '√', '∫', '∑',
    '&&', '||', '!', '==', '!=', '<<',
    'floor(x)', 'ceil(x)', 'round(x)', 'abs(x)', 'exp(x)', 'ln(x)',
    'log(x)', 'sqrt(x)', 'pow(x)', 'mod', '( )', '{ }',
    '+', '-', '*', '/', '(', ')',
    'x', 'y', 't', 'θ', ',',
    '≤', '≥', '<', '>', 'mod', '∫'
  ];

  const handleClick = (btn) => {
    insertText(btn);
  };

  return (
    <div className="keyboard">
      <h4>Function Keyboard</h4>
      {Array.from({ length: Math.ceil(buttons.length / 6) }).map((_, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {buttons.slice(rowIndex * 6, rowIndex * 6 + 6).map((btn, btnIndex) => (
            <button
              key={btnIndex}
              className="keyboard-btn"
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
