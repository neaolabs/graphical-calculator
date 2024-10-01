import React from 'react';
import './ThemeToggle.css';

function ThemeToggle({ theme, toggleTheme }) {
  const handleChange = (e) => {
    toggleTheme(e.target.value);
  };

  return (
    <div className="theme-toggle">
      <label htmlFor="themeSelect">Theme:</label>
      <select id="themeSelect" value={theme} onChange={handleChange}>
        <option value="default">Default</option>
        <option value="dark">Dark Mode</option>
      </select>
    </div>
  );
}

export default ThemeToggle;
