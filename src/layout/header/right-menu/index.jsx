import React, { useContext } from 'react';

import { ThemeContext } from '../../../context/theme';

const RightMenu = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="flex items-center space-x-6">
            <a href="mailto:angelin.calu@gmail.com?subject=I have a job for you!&body=Hi! As the title says, I have a job proposal for you.">
                <span className="animate-pulse hover:animate-none bg-red-500 text-white py-2 px-4 md:px-2 lg:px-4 md:ml-2 lg:ml-0 rounded-md select-none whitespace-nowrap">
                    Hire Me!
                </span>
            </a>
            <button
                onClick={toggleTheme}
                type="button"
                title="Switch theme"
                aria-label="Toggle"
                className={`w-9 h-9 rounded-full p-2 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-500 ${
                    theme === 'light'
                        ? 'bg-blue-200 hover:bg-blue-100 text-gray-700'
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}
            >
                {theme === 'light' ? (
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                        <path
                            d="M21.035 13.635a9 9 0 11-9.79-9.79 7 7 0 009.79 9.79v0z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default RightMenu;
