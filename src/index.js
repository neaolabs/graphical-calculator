// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import MathJax from 'react-mathjax';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <MathJax.Provider>
      <App />
    </MathJax.Provider>
  </React.StrictMode>
);
