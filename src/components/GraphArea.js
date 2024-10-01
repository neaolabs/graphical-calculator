// src/components/GraphArea.js
import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import './GraphArea.css';
import { parse, range } from 'mathjs'; // Removed 'evaluate'

function GraphArea({ theme, functions, points, dottedLines, viewport }) {
  const [plots, setPlots] = useState([]);

  useEffect(() => {
    const generatePlots = () => {
      const newPlots = [];

      // Process Functions
      functions.forEach((func, index) => {
        if (func.expression.trim() !== '') {
          try {
            let expression = func.expression;

            if (func.type === 'standard') {
              // Standard Function: y = f(x)
              const expr = parse(expression);
              const compiled = expr.compile();
              const xValues = range(viewport.xMin, viewport.xMax, (viewport.xMax - viewport.xMin) / 1000).toArray();
              const yValues = xValues.map((x) => {
                try {
                  return compiled.evaluate({ x });
                } catch {
                  return NaN;
                }
              });

              newPlots.push({
                type: 'scatter',
                mode: 'lines',
                x: xValues,
                y: yValues,
                line: { color: func.color },
                name: `f${index + 1}(x)`
              });
            }

            // Handle other types (parametric, polar, implicit) as needed
          } catch (error) {
            console.error(`Error in function ${index + 1}: ${error}`);
          }
        }
      });

      // Plot Points
      points.forEach((point, index) => {
        if (!isNaN(point.x) && !isNaN(point.y)) {
          newPlots.push({
            type: 'scatter',
            mode: 'markers',
            x: [point.x],
            y: [point.y],
            marker: { size: 10, color: point.color },
            name: `Point ${index + 1}`
          });
        }
      });

      // Add Dotted Lines
      dottedLines.forEach((line, index) => {
        if (line.axis === 'x') {
          // Vertical Line
          newPlots.push({
            type: 'scatter',
            mode: 'lines',
            x: [line.position, line.position],
            y: [viewport.yMin, viewport.yMax],
            line: {
              color: line.color,
              width: 2,
              dash: 'dashdot'
            },
            name: `Dotted Line ${index + 1}`,
            hoverinfo: 'none'
          });
        } else if (line.axis === 'y') {
          // Horizontal Line
          newPlots.push({
            type: 'scatter',
            mode: 'lines',
            x: [viewport.xMin, viewport.xMax],
            y: [line.position, line.position],
            line: {
              color: line.color,
              width: 2,
              dash: 'dashdot'
            },
            name: `Dotted Line ${index + 1}`,
            hoverinfo: 'none'
          });
        }
      });

      setPlots(newPlots);
    };

    generatePlots();
  }, [functions, points, dottedLines, viewport]);

  const layout = {
    margin: { t: 0, b: 40, l: 50, r: 0 }, 
    legend: { x: 0, y: 1.1, orientation: 'h' },
    dragmode: 'pan',
    plot_bgcolor: theme === 'dark' ? '#2e2e2e' : '#f9f9f9',
    paper_bgcolor: theme === 'dark' ? '#2e2e2e' : '#f9f9f9',
    font: {
      color: theme === 'dark' ? '#f4f4f9' : '#333'
    },
    xaxis: {
      range: [viewport.xMin, viewport.xMax],
      zeroline: true,
      showgrid: true,
      gridcolor: '#e0e0e0',
      gridwidth: 1,
      title: 'X-axis',
      tickfont: {
        size: 12,
        color: theme === 'dark' ? '#f4f4f9' : '#333'
      },
      showticklabels: true
    },
    yaxis: {
      range: [viewport.yMin, viewport.yMax],
      zeroline: true,
      showgrid: true,
      gridcolor: '#e0e0e0',
      gridwidth: 1,
      title: 'Y-axis',
      tickfont: {
        size: 12,
        color: theme === 'dark' ? '#f4f4f9' : '#333'
      },
      showticklabels: true
    },
  };

  const config = {
    responsive: true,
    scrollZoom: true,
    displayModeBar: true,
    doubleClick: false,
    dragMode: 'pan',
    editable: false,
    displaylogo: false,
    touchmode: 'auto',
    modeBarButtonsToAdd: ['lasso2d', 'select2d'],
  };

  return (
    <div className="graph-area">
      <Plot
        data={plots}
        layout={layout}
        config={config}
        style={{ width: '100%', height: '100%' }}
      />
      <div className="instructions">
        <p>Slyacademy.com</p>
      </div>
    </div>
  );
}

export default GraphArea;
