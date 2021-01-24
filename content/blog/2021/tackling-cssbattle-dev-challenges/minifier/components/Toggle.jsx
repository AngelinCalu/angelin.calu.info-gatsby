import React from 'react';

const Toggle = ({ option, setOptions, disabled }) => {
    return (
        <div className="flex-shrink-0">
            <button
                type="button"
                disabled={disabled}
                onClick={() =>
                    setOptions((prevState) => [
                        ...prevState.map((item) =>
                            item.key === option.key ? { ...item, active: !option.active } : item,
                        ),
                    ])
                }
                className={`${option.active ? 'bg-blue-500' : 'bg-gray-200'} ${
                    disabled ? 'cursor-not-allowed' : ''
                } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            >
                <span
                    className={`${
                        option.active ? 'translate-x-5' : 'translate-x-0'
                    } inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                ></span>
            </button>
        </div>
    );
};

export default Toggle;
