import React, { createContext } from 'react';
import useTheme from '../hooks/useTheme';

const initialState = {
    theme: 'light',
    toggleTheme: () => undefined,
};

export const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }) => {
    return <ThemeContext.Provider value={useTheme()}>{children}</ThemeContext.Provider>;
};

const ThemeWrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;

export default ThemeWrapper;
