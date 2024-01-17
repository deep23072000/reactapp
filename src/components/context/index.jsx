// ThemeContext.js

import React, { createContext, useState, useContext } from 'react';

// Creating a context object
const ThemeContext = createContext();
// const LoveTheme = createContext();

// Creating a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};
