import { useState } from 'react';

const getDefaultTheme = () => {
    if (typeof window === 'undefined') return 'light';

    const storedTheme = window.localStorage.getItem('theme');

    if (
        window.localStorage.getItem('theme') === '"dark"' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
        return 'dark';

    return JSON.parse(storedTheme);
};

const useTheme = () => {
    const [theme, setTheme] = useState(getDefaultTheme() || 'light');

    const toggleTheme = () => {
        const updatedTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(updatedTheme);
        if (updatedTheme === 'light') {
            document.querySelector('html').classList.remove('dark');
        } else {
            document.querySelector('html').classList.add('dark');
        }
        if (typeof window !== 'undefined') localStorage.setItem('theme', JSON.stringify(updatedTheme));
    };
    return {
        theme,
        toggleTheme,
    };
};

export default useTheme;
