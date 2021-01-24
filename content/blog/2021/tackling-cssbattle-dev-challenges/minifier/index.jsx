import React, { useState, useEffect, useRef } from 'react';

import Toggle from './components/Toggle';

const Minifier = () => {
    const initialState = [
        {
            key: 'whiteSpaceRemoval',
            description: 'Remove white spaces where possible',
            active: true,
        },
        {
            key: 'omitLastSemicolon',
            description: 'Semi-colon for the last CSS declaration in a declaration block can be omitted.',
            active: true,
        },
        {
            key: 'omitClosingTags',
            description:
                'In some cases you can omit the closing tag of an element as the browser will close them automatically. However, some other times that would result in having nested elements.',
            active: false,
        },
        {
            key: 'removeDoubleQuotes',
            description:
                'You can remove the quotes from HTML attributes and replace the white-spaces before numbers with + or - sign.',
            active: false,
        },
        {
            key: 'shortenSelectorsWithMadeUpAttributes',
            description: 'You can assign made-up attribute to any element to target it specifically in your selectors',
            active: false,
        },
        {
            key: 'positionFixedInsteadOfAbsolute',
            description:
                'In most cases, you might want to absolutely position an element with respect to the window/viewport instead of another element.',
            active: false,
        },
        {
            key: 'updateUnits',
            description: 'Using different units can save characters.',
            active: false,
        },
        {
            key: 'useBodyAndHtmlTags',
            description: 'The html and body elements are always in the code and could be styled!',
            active: false,
        },
        {
            key: 'stripPx',
            description: 'For many properties, you can omit the px unit and just write the numeric value.',
            active: true,
        },
        {
            key: 'useHtmlAttributes',
            description: 'There are old attributes available on some html tags to give background and text color.',
            active: false,
        },
    ];

    const [options, setOptions] = useState(initialState);
    const [solution, setSolution] = useState('');
    const [minified, setMinified] = useState('');

    const listRef = useRef(null);

    useEffect(() => {
        // do the actual minification based on the chosen options here 
        setMinified(solution);
    }, [solution]);
    

    return (
        <div className="w-full flex-col space-y-10">
            <div className="flex flex-col lg:flex-row space-y-6">
                <div className="lg:flex-grow">
                    <label htmlFor="solution" className="block text-sm font-medium text-gray-700">
                        Solution
                    </label>
                    <div className="mt-1 lg:h-full">
                        <textarea
                            id="solution"
                            name="solution"
                            onChange={(e) => setSolution(e.target.value)}
                            value={solution}
                            rows="4"
                            className="py-3 px-4 block w-full lg:h-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                        ></textarea>
                    </div>
                </div>
                <div className="pl-4">
                    <span className="block text-sm font-medium text-gray-700">Options</span>
                    <div>
                        <ul
                            className="flex flex-col"
                            ref={(listRef) => {
                                if (listRef) {
                                    listRef.style.setProperty('list-style-type', 'none', 'important');
                                }
                            }}
                        >
                            {options.map((option) => (
                                <li
                                    key={option.key}
                                    className="inline-flex space-x-4"
                                    style={{ listStyleType: 'inherit' }}
                                >
                                    <Toggle
                                        disabled={
                                            !initialState.filter((initialOption) => initialOption.key === option.key)[0]
                                                .active
                                        }
                                        option={option}
                                        setOptions={setOptions}
                                    />{' '}
                                    <span>{option.key}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="minified" className="block text-sm font-medium text-gray-700">
                    Minified Version
                </label>
                <div className="mt-1">
                    <textarea
                        id="minified"
                        name="minified"
                        value={minified}
                        rows="4"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default Minifier;
