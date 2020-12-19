import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
    return (
        <div className="h-screen bg-white text-black">
            <header className="w-full top-0 h-56">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="text-blue-100 absolute overflow-hidden"
                >
                    <path
                        fill="currentColor"
                        d="M0 288l60-5.3C120 277 240 267 360 256s240-21 360-37.3c120-15.7 240-37.7 360-37.4 120-.3 240 21.7 300 32l60 10.7V0H0z"
                    />
                </svg>
                <Header />
            </header>
            <main className="max-w-6xl z-10 my-24 mx-auto px-10 md:px-4 lg:px-0">{children}</main>
            <footer className="bg-blue-100">
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
