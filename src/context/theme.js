import React, { createContext } from 'react';
import useTheme from '../hooks/useTheme';

const initialState = {
    theme: (((typeof window !== 'undefined' && window.localStorage.getItem('theme') === '"dark"') ||
        (typeof window !== 'undefined' && !('theme' in window.localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) ? 'dark' : 'light'),
    toggleTheme: () => undefined,
};

export const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }) => {
    return <ThemeContext.Provider value={useTheme()}>{children}</ThemeContext.Provider>;
};

const ThemeWrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;

export default ThemeWrapper;
