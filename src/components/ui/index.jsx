import React from 'react';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';

const infoIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width={20}
        height={20}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-400"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" />
    </svg>
);

const warningIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width={20}
        height={20}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-amber-500"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" />
    </svg>
);

const succesIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width={20}
        height={20}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-green-500"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
    </svg>
);

const dangerIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width={20}
        height={20}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-red-500"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2zM12 8v4M12 16h.01" />
    </svg>
);

export const ExternalLink = ({ to, title, children, icon = false }) => (
    <a
        className="inline-flex items-center  hover:text-blue-500"
        target="_blank"
        href={to}
        title={title}
        rel="noopener nofollow noreferrer"
    >
        {icon ? (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1 w-4 h-4"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
        ) : null}
        {children}
    </a>
);

export const SectionHeader = ({ children }) => (
    <h3 className="uppercase text-xl py-2 tracking-wide font-bold">{children}</h3>
);

export const Callout = ({ type, children }) => {
    let colors;
    let icon;

    switch (type) {
        case 'info':
            colors = 'bg-blue-100 border-blue-400 text-blue-700 dark:bg-black dark:text-white';
            icon = infoIcon;
            break;
        case 'success':
            colors = 'bg-green-100 border-green-400 text-green-600 dark:bg-green-900 dark:text-white';
            icon = succesIcon;
            break;
        case 'warning':
            colors = 'bg-amber-100 border-amber-500 text-amber-700 dark:bg-amber-900 dark:text-white';
            icon = warningIcon;
            break;
        case 'danger':
            colors = 'bg-red-100 border-red-500 text-red-600 dark:bg-red-900 dark:text-white';
            icon = dangerIcon;
            break;
        default:
            colors = 'bg-blue-100 border-blue-400 text-blue-700 dark:bg-black dark:text-white';
            icon = infoIcon;
    }

    return (
        <div className={`relative border-l-2 pl-10 pr-3 py-2 my-2 rounded-r ${colors}`}>
            <div className="absolute left-2 top-2">{icon}</div>
            {children}
        </div>
    );
};

export const PopoutInfo = ({ info }) => {
    return (
        <Tippy content={info}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width={20}
                height={20}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-400 transform rotate-180"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
            </svg>
        </Tippy>
    );
};
