import React, { useState, useRef } from 'react';

import referencesData from '../../../../content/data/references';
import Dots from './dots';

const References = () => {

    const refIds = referencesData.map(ref => ref.id);
    
    const wrapperRef = useRef(null);
    const getWidth = () => wrapperRef.current.clientWidth;
    
    const [activeRef, setActiveRef] = useState(refIds[0]);
    const [translate, setTranslate] = useState(0);
    
    const moveBackwards = () => {
        console.log(getWidth());
        setActiveRef(refIds.indexOf(activeRef) === 0 ? refIds[refIds.length - 1] : refIds[refIds.indexOf(activeRef) - 1]);
        setTranslate(getWidth() * refIds.indexOf(activeRef) + 1);
    }
    
    const moveForward = () => {
        setActiveRef(refIds.indexOf(activeRef) === refIds.length - 1 ? refIds[0] : refIds[refIds.indexOf(activeRef) + 1]);
        setTranslate(getWidth() * refIds.indexOf(activeRef) -1);
    }

    return (
        <section className="py-6">
            <h3 className="uppercase text-2xl py-2">References</h3>
            <h4 className="text-md py-2">Here's some words from a few of the colleagues or collaborators:</h4>
            <div ref={wrapperRef} className="w-full p-4 justify-between flex rounded-md group bg-gray-100 dark:bg-gray-800 overflow-hidden relative hover:shadow-md">
                <div className="absolute z-10 w-full h-full -m-4">
                    <button
                        type="button"
                        className="w-1/2 min-h-full bg-gradient-to-r from-gray-100 bg-opacity-50 opacity-0 hover:opacity-75 focus:outline-none text-left"
                        onClick={ moveBackwards }
                    >
                        <span className="sr-only">Previous Reference</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-16 h-auto text-blue-300"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="w-1/2 min-h-full bg-gradient-to-l from-gray-100 opacity-0 hover:opacity-75 focus:outline-none text-right"
                        onClick={moveForward}
                    >
                        <span className="sr-only">Next Reference</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-16 h-auto text-blue-300 ml-auto"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
                {referencesData.map((reference) => (
                    <blockquote
                        key={reference.id}
                        className="min-w-full relative z-0 m-2 flex flex-col items-end transform transition ease-out duration-700"
                        style={{ transform: `translateX(-${translate - 16}px)` }}
                    >
                        <svg
                            className="absolute top-0 left-2 transform -translate-x-3 -translate-y-2 h-8 w-8 text-blue-300 opacity-50"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                        >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                        </svg>
                        <h2 className="relative text-lg p-2 grouregp-hover:text-blue-700 dark:group-hover:text-blue-300 text-center text-gray-500 dark:text-gray-300 italic">
                            &quot;{reference.quote}&quot;
                        </h2>
                        <p className="text-sm text-gray-700 dark:text-gray-200 w-full text-right mr-4 flex flex-col mt-4 py-2">
                            <span className="font-bold">{reference.name}</span>
                            <span>{reference.position}</span>
                        </p>
                    </blockquote>
                ))}
                <Dots references={refIds} active={activeRef}/>
            </div>
        </section>
    );
};

export default References;
