
import React from 'react';
import SwitchColorPage from './Components/SwitchColorPage';
import { ThemeProvider } from './Contexts/DarkModeContext';

function App() {
  return (
    <ThemeProvider>
      <SwitchColorPage />
    </ThemeProvider>
  );
}

export default App;

