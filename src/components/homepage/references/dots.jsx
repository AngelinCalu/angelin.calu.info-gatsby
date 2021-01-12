import React from 'react';

const Dots = ({ references, active }) => {
    return (
        <div className="absolute bottom-2 left-1/2 my-2 inline-flex items-center space-x-4">
            {references.map((reference) => (
                <span key={reference} className="flex items-center relative">
                    {reference === active ? <span className="absolute block opacity-75 w-full h-full bg-blue-500 animate-ping rounded-full" />: null} 
                    <span
                        className={`relative block w-3 h-3 rounded-full ${reference === active ? 'bg-blue-300' : 'bg-gray-400'}`}
                    />
                </span>
            ))}
        </div>
    );
};

export default Dots;
