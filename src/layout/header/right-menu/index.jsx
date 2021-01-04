import React from 'react';

const RightMenu = () => {
    return (
        <div className="block">
            <a href="mailto:angelin.calu@gmail.com?subject=I have a job for you!&body=Hi! As the title says, I have a job proposal for you.">
                <span className="animate-pulse hover:animate-none bg-red-500 text-white py-2 px-4 md:px-2 lg:px-4 md:ml-2 lg:ml-0 rounded-md select-none whitespace-nowrap">
                    Hire Me!
                </span>
            </a>
        </div>
    );
};

export default RightMenu;
