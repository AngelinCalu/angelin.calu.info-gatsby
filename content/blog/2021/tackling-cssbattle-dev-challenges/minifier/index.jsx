import React, { useState, useEffect } from 'react';

import { PopoutInfo } from '../../../../../src/components/ui';
import Toggle from './components/Toggle';

import './styles.css';

const Minifier = () => {
    const providers = [
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

    const [options, setOptions] = useState(providers);
    const [solution, setSolution] = useState('');
    const [minified, setMinified] = useState('');

    useEffect(() => {
        // do the actual minification based on the chosen options here
        setMinified(solution);
    }, [solution]);

    return (
        <div className="w-full flex-col space-y-10 border border-blue-300 p-3">
            <div className="flex flex-col lg:flex-row space-y-6">
                <div className="lg:flex-grow">
                    <label htmlFor="solution" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        {`Solution : ${solution.length} characters`}
                    </label>
                    <div className="mt-1 lg:h-full">
                        <textarea
                            id="solution"
                            name="solution"
                            onChange={(e) => setSolution(e.target.value)}
                            value={solution}
                            placeholder="Paste your solution here!"
                            rows="4"
                            className="py-3 px-4 block w-full lg:h-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md dark:bg-gray-700"
                        ></textarea>
                    </div>
                </div>
                <div className="pl-4">
                    <span className="block text-sm font-medium text-gray-700 dark:text-gray-200">Options</span>
                    <div>
                        <ul className="flex flex-col">
                            {options.map((option) => (
                                <li key={option.key} className="inline-flex space-x-4">
                                    <Toggle
                                        disabled={
                                            !providers.filter((provider) => provider.key === option.key)[0].active
                                        }
                                        option={option}
                                        setOptions={setOptions}
                                    />{' '}
                                    <span>{option.key}</span>{' '}
                                    <PopoutInfo info={option.description} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="minified" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    {`Minified Version : ${minified.length} characters`}
                </label>
                <div className="mt-1">
                    <textarea
                        id="minified"
                        name="minified"
                        defaultValue={minified}
                        readOnly={true}
                        rows="4"
                        className="py-3 px-4 block w-full shadow-sm rounded-md focus:outline-none bg-gray-200 dark:bg-gray-800"
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default Minifier;
