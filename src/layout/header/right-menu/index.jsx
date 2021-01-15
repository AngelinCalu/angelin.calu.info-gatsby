import React from 'react';

const RightMenu = () => {
    return (
        <div className="block">
            <a href="mailto:angelin.calu@gmail.com?subject=I have a job for you!&body=Hi! As the title says, I have a job proposal for you.">
                <span className="animate-pulse hover:animate-none bg-red-500 text-white py-2 px-4 md:px-2 lg:px-4 md:ml-2 lg:ml-0 rounded-md select-none whitespace-nowrap">
                    Hire Me!
                </span>
            </a>
            <button type="button">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                    <path
                        d="M21.035 13.635a9 9 0 11-9.79-9.79 7 7 0 009.79 9.79v0z"
                        stroke="#2D3748"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
};

export default RightMenu;
