// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import GraphArea from './components/GraphArea';
import './App.css';

function App() {
  // Theme State
  const [theme, setTheme] = useState('default');

  // Graph Elements State
  const [functions, setFunctions] = useState([{ expression: 'sin(x)', color: '#ff0000', type: 'standard' }]);
  const [points, setPoints] = useState([]);
  const [dottedLines, setDottedLines] = useState([]);
  const [viewport, setViewport] = useState({ xMin: -10, xMax: 10, yMin: -10, yMax: 10 });

  // Ref to Track the Last Focused Input
  const lastFocusedInput = useRef(null);

  // Function to Set the Last Focused Input
  const setLastFocusedInputFunc = (input) => {
    lastFocusedInput.current = input;
  };

  // Function to Insert Text into the Focused Input
  const insertText = (text) => {
    if (lastFocusedInput.current) {
      const input = lastFocusedInput.current;
      const start = input.selectionStart;
      const end = input.selectionEnd;
      const value = input.value;
      input.value = value.substring(0, start) + text + value.substring(end);
      // Move the cursor
      input.selectionStart = input.selectionEnd = start + text.length;
      // Trigger React's change event
      const event = new Event('input', { bubbles: true });
      input.dispatchEvent(event);
    }
  };

  // Function to Toggle Theme
  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  // Apply Theme to Body
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  return (
    <div className="calculator-container11">
      <Sidebar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        functions={functions} 
        setFunctions={setFunctions}
        points={points}
        setPoints={setPoints}
        dottedLines={dottedLines}
        setDottedLines={setDottedLines}
        viewport={viewport}
        setViewport={setViewport}
        setLastFocusedInput={setLastFocusedInputFunc}
        insertText={insertText}
      />
      <GraphArea 
        theme={theme} 
        functions={functions} 
        points={points} 
        dottedLines={dottedLines} 
        viewport={viewport} 
      />
    </div>
  );
}

export default App;
