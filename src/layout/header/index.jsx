import React from 'react';
import { Link } from 'gatsby';
import TopMenu from './top-menu';
import RightMenu from './right-menu';

const Header = () => {
    return (
        <div className="relative z-10 max-w-6xl mx-auto px-10 md:px-4 lg:px-0">
            <div className="w-full pt-8 flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="text-3xl mr-4 font-heading font-semibold text-gray-500 py-4 md:py-0">
                        <Link to="/" title="Angelin Calu">
                            Angelin Calu
                        </Link>
                    </div>
                    <TopMenu />
                </div>
                <RightMenu />
            </div>
        </div>
    );
};

export default Header;
