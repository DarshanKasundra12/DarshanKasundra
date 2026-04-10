
import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeVariant = 'cyber' | 'matrix' | 'cobalt';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  themeVariant: ThemeVariant;
  setThemeVariant: (variant: ThemeVariant) => void;
  cycleThemeVariant: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const variants: ThemeVariant[] = ['cyber', 'matrix', 'cobalt'];

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const isDark = true;
  const [themeVariant, setThemeVariant] = useState<ThemeVariant>('cyber');

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.style.backgroundColor = 'black';
    document.documentElement.style.color = 'white';
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme-variant', themeVariant);
  }, [themeVariant]);

  const toggleTheme = () => {
    // Intentionally left blank as the theme is forced to black
  };

  const cycleThemeVariant = () => {
    setThemeVariant((prev) => {
      const currentIndex = variants.indexOf(prev);
      return variants[(currentIndex + 1) % variants.length];
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, themeVariant, setThemeVariant, cycleThemeVariant }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
