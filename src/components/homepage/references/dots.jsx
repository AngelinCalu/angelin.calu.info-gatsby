import React from 'react';

const Dots = ({ references, active }) => {
    return (
        <div className="relative w-1/3 items-end my-2 ">
            <div className="absolute bottom-4 left-1/2 inline-flex space-x-4">
                {references.map((reference) => (
                    <span key={reference} className="flex items-center relative">
                        {reference === active ? (
                            <span className="absolute block opacity-75 w-full h-full bg-blue-500 animate-ping rounded-full" />
                        ) : null}
                        <span
                            className={`relative block w-3 h-3 rounded-full ${
                                reference === active ? 'bg-blue-300' : 'bg-gray-400'
                            }`}
                        />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Dots;
