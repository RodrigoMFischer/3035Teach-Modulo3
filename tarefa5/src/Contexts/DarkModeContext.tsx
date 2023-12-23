
import { createContext, useState, useEffect } from 'react';

interface DarkMode {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<DarkMode>({
  darkMode: false,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleTheme = (): void => {
    setDarkMode((prevMode): boolean => !prevMode);
  };

  useEffect( () => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  const contextValue: DarkMode = {
    darkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export {
  ThemeProvider,
  ThemeContext,
} 
