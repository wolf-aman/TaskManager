// src/contexts/ThemeContext.jsx

import { createContext, useState, useEffect } from 'react';
import StorageService from '../services/storage.service';

/**
 * ThemeContext - Observer Pattern
 * Manages global theme state (light/dark mode)
 */

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const savedTheme = StorageService.getTheme();
      console.log('Initial theme from storage:', savedTheme);
      return savedTheme === 'dark';
    } catch (error) {
      console.error('Error initializing theme:', error);
      return false;
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;
    console.log('Theme changed to:', isDarkMode ? 'dark' : 'light');
    
    if (isDarkMode) {
      root.classList.add('dark');
      StorageService.setTheme('dark');
    } else {
      root.classList.remove('dark');
      StorageService.setTheme('light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    console.log('Toggling theme from:', isDarkMode ? 'dark' : 'light');
    setIsDarkMode((prev) => !prev);
  };

  const value = {
    isDarkMode,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};