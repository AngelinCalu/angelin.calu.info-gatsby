import React from 'react';
import { Link } from 'gatsby';

const TopMenu = () => {
    return <div className="space-x-3 font-bold">
                <Link to="/" title="Home" activeClassName="bg-blue-200" className="py-2 px-4 rounded-md hover:bg-white hover:text-blue-700">Home</Link>
        <Link to="/about" title="About" activeClassName="bg-blue-200" className="inline-flex items-center space-x-1 py-2 px-4 rounded-md hover:bg-white hover:text-blue-700">
             <span>About</span>
             <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            </Link>
                <Link to="/blog" title="Blog" activeClassName="bg-blue-200" className="py-2 px-4 rounded-md hover:bg-white hover:text-blue-700">Blog</Link>
                <Link to="/shipbuilding" title="Shipbuilding" activeClassName="bg-blue-200" className="py-2 px-4 rounded-md hover:bg-white hover:text-blue-700">Shipbuilding</Link>
                <Link to="/contact" title="Contact" activeClassName="bg-blue-200" className="py-2 px-4 rounded-md hover:bg-white hover:text-blue-700">Contact</Link>
            </div>;
}

export default TopMenu;