import React from 'react';
import { Link } from 'gatsby';
import { Menu, Transition } from '@headlessui/react';

const TopMenu = () => {
    return (
        <nav>
            <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-3">
                <li className="w-full">
                    <Link
                        to="/"
                        title="Home"
                        activeClassName="bg-blue-200"
                        className="block py-2 px-4 rounded-md hover:bg-white hover:text-blue-700"
                    >
                        Home
                    </Link>
                </li>
                <li className="relative">
                    <Menu>
                        {({ open }) => (
                            <>
                                <Menu.Button className="inline-flex items-center space-x-1 py-2 px-4 rounded-md hover:bg-white hover:text-blue-700">
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
                                </Menu.Button>

                                <Transition
                                    show={open}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items
                                        static
                                        className="md:absolute md:left-0 w-full md:w-48 mt-2 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none py-1"
                                    >
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    className={`text-gray-700 flex w-full px-4 py-2 text-sm leading-5 text-left hover:bg-blue-100 ${
                                                        active ? 'bg-blue-100' : 'bg-white'
                                                    }`}
                                                    activeClassName="bg-gray-100"
                                                    to="/skills"
                                                    title="Skills"
                                                >
                                                    Skills
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    className={`text-gray-700 flex w-full px-4 py-2 text-sm leading-5 text-left hover:bg-blue-100 ${
                                                        active ? 'bg-blue-100' : 'bg-white'
                                                    }`}
                                                    activeClassName="bg-gray-100"
                                                    to="/experience"
                                                    title="Experience"
                                                >
                                                    Experience
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    className={`text-gray-700 flex w-full px-4 py-2 text-sm leading-5 text-left hover:bg-blue-100 ${
                                                        active ? 'bg-blue-100' : 'bg-white'
                                                    }`}
                                                    activeClassName="bg-gray-100"
                                                    to="/education"
                                                    title="Education"
                                                >
                                                    Education
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </>
                        )}
                    </Menu>
                </li>
                <li className="w-full">
                    <Link
                        to="/blog"
                        title="Blog"
                        activeClassName="bg-blue-200"
                        className="block py-2 px-4 rounded-md hover:bg-white hover:text-blue-700"
                    >
                        Blog
                    </Link>
                </li>
                <li className="w-full">
                    <Link
                        to="/shipbuilding"
                        title="Shipbuilding"
                        activeClassName="bg-blue-200"
                        className="block py-2 px-4 rounded-md hover:bg-white hover:text-blue-700"
                    >
                        Shipbuilding
                    </Link>
                </li>
                <li className="w-full">
                    <Link
                        to="/contact"
                        title="Contact"
                        activeClassName="bg-blue-200"
                        className="block py-2 px-4 rounded-md hover:bg-white hover:text-blue-700"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default TopMenu;
