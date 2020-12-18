import React from 'react';
import TopMenu from './top-menu';
import RightMenu from './right-menu'

const Header = () => {
    return (<header className="w-full mt-8 inline-flex items-center justify-between">
        <div className="inline-flex items-center">
            <div className="text-2xl mr-4">Angelin Calu</div>
            <TopMenu/>
        </div>
        <RightMenu/>
        </header>);
}

export default Header;