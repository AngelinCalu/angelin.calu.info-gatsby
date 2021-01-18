import React from 'react';

const TopBar = () => {
    return (
        <div className="h-10 px-2">
            <div className="flex space-x-1.5">
                <div className="w-3 h-3 border-2 rounded-full border-red-500 bg-red-500 dark:bg-inherit"></div>
                <div className="w-3 h-3 border-2 rounded-full border-amber-400 bg-amber-400 dark:bg-inherit"></div>
                <div className="w-3 h-3 border-2 rounded-full border-green-400 bg-green-400 dark:bg-inherit"></div>
            </div>
        </div>
    );
};

export default TopBar;
