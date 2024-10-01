// src/components/Sidebar.js
import React from 'react';
import ThemeToggle from './ThemeToggle';
import FunctionList from './FunctionList';
import PointList from './PointList';
import DottedLines from './DottedLines';
import ViewportControls from './ViewportControls';
import Keyboard from './Keyboard';
import './Sidebar.css';

function Sidebar({ 
  theme, 
  toggleTheme, 
  functions, 
  setFunctions, 
  points, 
  setPoints, 
  dottedLines, 
  setDottedLines, 
  viewport, 
  setViewport, 
  setLastFocusedInput, 
  insertText 
}) {
  return (
    <div className="sidebar">
      <h1>Advanced Graphing Calculator</h1>
      
      {/* Theme Selector */}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      {/* Function List */}
      <FunctionList 
        functions={functions} 
        addFunction={() => setFunctions([...functions, { expression: '', color: '#0000ff', type: 'standard' }])} 
        removeFunction={(index) => setFunctions(functions.filter((_, i) => i !== index))}
        updateFunction={(index, updatedFunc) => {
          const newFunctions = [...functions];
          newFunctions[index] = updatedFunc;
          setFunctions(newFunctions);
        }}
        setLastFocusedInput={setLastFocusedInput}
      />

      {/* Points Section */}
      <PointList 
        points={points} 
        addPoint={() => setPoints([...points, { x: 0, y: 0, color: '#ff0000' }])} 
        removePoint={(index) => setPoints(points.filter((_, i) => i !== index))}
        updatePoint={(index, updatedPoint) => {
          const newPoints = [...points];
          newPoints[index] = updatedPoint;
          setPoints(newPoints);
        }}
        setLastFocusedInput={setLastFocusedInput}
      />

      {/* Dotted Lines Controls */}
      <DottedLines 
        dottedLines={dottedLines} 
        addDottedLine={() => setDottedLines([...dottedLines, { axis: 'x', position: 0, color: '#000000' }])} 
        removeDottedLine={(index) => setDottedLines(dottedLines.filter((_, i) => i !== index))}
        updateDottedLine={(index, updatedLine) => {
          const newDottedLines = [...dottedLines];
          newDottedLines[index] = updatedLine;
          setDottedLines(newDottedLines);
        }}
      />

      {/* Viewport Controls */}
      <ViewportControls 
        viewport={viewport} 
        updateViewport={(newViewport) => setViewport(newViewport)}
      />

      {/* Function Keyboard */}
      <Keyboard insertText={insertText} />
    </div>
  );
}

export default Sidebar;
