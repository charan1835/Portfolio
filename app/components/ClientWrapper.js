'use client';

import { ThemeProvider } from '../contexts/ThemeContext';

export default function ClientWrapper({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
