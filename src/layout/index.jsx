import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
    return <div className="h-screen bg-white text-black">
        <header className="max-w-6xl mx-auto"><Header /></header>
        <main className="max-w-6xl mx-auto">{children}</main>
        <footer className="bg-gray-100"><Footer /></footer>
        
    </div>;
}

export default Layout;