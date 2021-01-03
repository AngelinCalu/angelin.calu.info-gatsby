import React from 'react';

const RightMenu = () => {
    return (
        <div className="block md:hidden lg:block">
            <button
                type="button"
                className="animate-pulse hover:animate-bounce bg-red-500 text-white py-2 px-4 rounded-md select-none whitespace-nowrap"
            >
                <a href="mailto:angelin.calu@gmail.com?subject=I have a job for you!&body=Hi! As the title says, I have a job proposal for you.">
                    Hire Me!
                </a>
            </button>
        </div>
    );
};

export default RightMenu;
