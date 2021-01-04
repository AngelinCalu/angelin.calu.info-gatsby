import React, { useState } from 'react';
import { Link } from 'gatsby';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {

    const getStoredState = () => {
    const storedState = localStorage.getItem('cookieBar');
    if (!storedState) return 'visible';
    return storedState;
};
    const [cookieBar, setCookieBar] = useState(getStoredState());

    const hideCookieBar = () => {
        setCookieBar('hidden');
        localStorage.setItem('cookieBar', 'hidden');
    }

    return (
        <div className="h-screen bg-white text-black">
            <header className="w-full bg-blue-100 md:bg-white md:h-56" aria-labelledby="headerHeading">
                <h2 id="headerHeading" className="sr-only">
                    Header
                </h2>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="absolute overflow-hidden hidden md:block md:top-0 2xl:-top-48"
                >
                    <defs>
                        <linearGradient id="myGradient" gradientTransform="rotate(90)">
                            <stop offset="10%" stopColor="#dbeafe" /> {/** blue-100 */}
                            <stop offset="90%" stopColor="#93c5fd" /> {/** blue-300 */}
                        </linearGradient>
                    </defs>

                    <path
                        fill="url('#myGradient')"
                        d="M0 288l60-5.3C120 277 240 267 360 256s240-21 360-37.3c120-15.7 240-37.7 360-37.4 120-.3 240 21.7 300 32l60 10.7V0H0z"
                    />
                </svg>
                <Header />
            </header>
            <main className="relative max-w-6xl z-10 2xl:mt-32 3xl:mt-48 my-12 lg:my-24 mx-auto px-10 lg:px-8 2xl:px-0">
                {children}
            </main>
            <footer className="bg-blue-100" aria-labelledby="footerHeading">
                <h2 id="footerHeading" className="sr-only">
                    Footer
                </h2>
                <Footer />
                {cookieBar === 'visible' ? (
                    <div className="bg-yellow-200 text-sm border-t border-gray-100 z-50 px-4 py-1 fixed bottom-0 w-full inline-flex items-center justify-between">
                        <p>
                            This website uses third-party cookies to analyze the traffic. More information on our{' '}
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
