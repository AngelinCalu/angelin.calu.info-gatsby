import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
    return <div className="max-w-6xl mx-auto h-screen bg-white text-black">
        <Header />
        <main className="">{children}</main>
        <Footer />
    </div>;
}

export default Layout;