import React from 'react';
import { Link } from 'gatsby';

const TopMenu = () => {
    return (
        <nav className="font-bold">
            <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-3">
                <li>
                    <Link
                        to="/"
                        title="Home"
                        activeClassName="bg-blue-200"
                        className="py-2 px-4 rounded-md hover:bg-white hover:text-blue-700"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        title="About"
                        activeClassName="bg-blue-200"
                        className="inline-flex items-center space-x-1 py-2 px-4 rounded-md hover:bg-white hover:text-blue-700"
                    >
                        <span>About</span>
                        <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/blog"
                        title="Blog"
                        activeClassName="bg-blue-200"
                        className="py-2 px-4 rounded-md hover:bg-white hover:text-blue-700"
                    >
                        Blog
                    </Link>
                </li>
                <li>
                    <Link
                        to="/shipbuilding"
                        title="Shipbuilding"
                        activeClassName="bg-blue-200"
                        className="py-2 px-4 rounded-md hover:bg-white hover:text-blue-700"
                    >
                        Shipbuilding
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        title="Contact"
                        activeClassName="bg-blue-200"
                        className="py-2 px-4 rounded-md hover:bg-white hover:text-blue-700"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default TopMenu;
