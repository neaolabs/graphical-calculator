// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { MathJaxContext } from 'better-react-mathjax';

const container = document.getElementById('root');
const root = createRoot(container);

const config = {
  loader: { load: ['input/tex', 'output/chtml'] }, // Customize as needed
  // You can add more MathJax configurations here
};

root.render(
  <React.StrictMode>
    <MathJaxContext version={3} config={config}>
      <App />
    </MathJaxContext>
  </React.StrictMode>
);
