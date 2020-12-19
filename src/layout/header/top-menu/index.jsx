import React from 'react';
import { Link } from 'gatsby';

const TopMenu = () => {
    return <div className="space-x-4 font-bold">
                <Link to="/" title="Home" className="inline-block py-2 px-4 rounded-md hover:bg-white hover:text-blue-700">Home</Link>
                <Link to="/about" title="About" className="inline-block py-2 px-4 rounded-md hover:bg-white hover:text-blue-700">About</Link>
                <Link to="/blog" title="Blog" className="inline-block py-2 px-4 rounded-md hover:bg-white hover:text-blue-700">Blog</Link>
                <Link to="/shipbuilding" title="Shipbuilding" className="inline-block py-2 px-4 rounded-md hover:bg-white hover:text-blue-700">Shipbuilding</Link>
                <Link to="/contact" title="Contact" className="inline-block py-2 px-4 rounded-md hover:bg-white hover:text-blue-700">Contact</Link>
            </div>;
}

export default TopMenu;