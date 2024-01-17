// Button.js

import React from 'react';
import { useTheme } from './index';

const Button = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
        padding: '8px 16px',
        border: 'none',
        cursor: 'pointer',
      }}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
};

export default Button;
