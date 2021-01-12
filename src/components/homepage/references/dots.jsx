import React from 'react';

const Dots = ({references, active}) => {
    return <div className="absolute bottom-2 left-1/2 my-2 inline-flex items-center space-x-4">
            {
            references.map(reference => <span key={reference} className={`w-2 h-2 block rounded-full ${reference === active ? 'bg-blue-300' :'bg-gray-400'}`}></span>)
            }
    </div>;
}

export default Dots;