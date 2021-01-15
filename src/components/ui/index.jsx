import React from 'react';

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
