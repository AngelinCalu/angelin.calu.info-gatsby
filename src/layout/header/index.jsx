import React from 'react';
import TopMenu from './top-menu';
import RightMenu from './right-menu';

const Header = () => {
    return (
        <div className="relative z-10 max-w-6xl mx-auto">
            <div className="w-full pt-8 inline-flex items-center justify-between">
                <div className="inline-flex items-center">
                    <div className="text-3xl mr-4 font-bold text-gray-500">Angelin Calu</div>
                    <TopMenu />
                </div>
                <RightMenu />
            </div>
        </div>
    );
};

export default Header;
