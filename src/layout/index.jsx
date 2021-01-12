import React, { useState } from 'react';
import { Link } from 'gatsby';
import Header from './header';
import Footer from './footer';

if (typeof window !== 'undefined') {
    require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children }) => {
    const windowGlobal = typeof window !== 'undefined' && window;

    const getStoredState = () => {
        if (!windowGlobal) return 'visible';
        const storedState = windowGlobal.localStorage.getItem('cookieBar');
        if (!storedState) return 'visible';
        return storedState;
    };
    const [cookieBar, setCookieBar] = useState(getStoredState());


    const hideCookieBar = () => {
        setCookieBar('hidden');
        if (windowGlobal) windowGlobal.localStorage.setItem('cookieBar', 'hidden');
    };

    return (
        <div className="bg-white dark:bg-gray-900 text-black dark:text-gray-300">
            <header className="w-full bg-blue-100 dark:bg-gray-900 md:bg-white md:dark:bg-gray-900 md:h-56">
                <Link to="#page-content" className="sr-only">Skip to content</Link>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    className="absolute overflow-hidden hidden md:block md:top-0 xl:-top-16 2xl:-top-32 text-blue-300 dark:text-gray-800"
                >
                    <path
                        fill="currentColor"
                        d="M0 288l60-5.3C120 277 240 267 360 256s240-21 360-37.3c120-15.7 240-37.7 360-37.4 120-.3 240 21.7 300 32l60 10.7V0H0z"
                    />
                </svg>
                <Header />
            </header>
            <main id="page-content" className="relative max-w-screen-xl z-10 xl:mt-24 2xl:mt-32 my-12 md:my-2 lg:my-6 mx-auto px-10 lg:px-8 2xl:px-0">
                {children}
            </main>
            <footer className="bg-blue-100 dark:bg-gray-800" aria-labelledby="footerHeading">
                <h2 id="footerHeading" className="sr-only">
                    Footer
                </h2>
                <Footer />
                {cookieBar === 'visible' ? (
                    <div className="bg-yellow-200 text-sm border-t dark:border-gray-700 border-gray-100 dark:text-black z-50 px-4 py-1 fixed bottom-0 w-full inline-flex items-center justify-between">
                        <p>
                            This website uses third-party cookies to analyze the traffic. More information on the{' '}
                            <Link className="text-gray-500 hover:underline" to="/cookie-policy" title="Cookie Policy">
                                Cookie Policy
                            </Link>{' '}
                            page.
                        </p>
                        <button onClick={() => hideCookieBar()} className=" focus:outline-none text-lg" type="button">
                            &times;
                        </button>
                    </div>
                ) : null}
            </footer>
        </div>
    );
};

export default Layout;
