import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
    return (
        <div className="h-screen bg-white text-black">
            <header className="w-full top-0 h-56">
                <svg className="text-blue-100 absolute overflow-hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="currentColor"
                        fillOpacity="1"
                        d="M0,288L60,282.7C120,277,240,267,360,256C480,245,600,235,720,218.7C840,203,960,181,1080,181.3C1200,181,1320,203,1380,213.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                    ></path>
                </svg>
                <Header />
            </header>
            <main className="max-w-6xl z-10 my-24 mx-auto px-10 md:px-4 lg:px-0">{children}</main>
            <footer className="bg-gray-100">
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
