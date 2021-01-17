import React from 'react';

const TopBar = () => {
    return (
        <div className="h-10 px-2">
            <div className="flex space-x-1.5">
                <div className="w-3 h-3 border-2 rounded-full border-red-500"></div>
                <div className="w-3 h-3 border-2 rounded-full border-amber-400"></div>
                <div className="w-3 h-3 border-2 rounded-full border-green-400"></div>
            </div>
        </div>
    );
};

export default TopBar;
