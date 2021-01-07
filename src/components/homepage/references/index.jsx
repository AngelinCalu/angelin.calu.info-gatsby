import React from 'react';

const References = () => {
    return (
        <section className="py-6">
            <h3 className="uppercase text-2xl py-2">References</h3>
            <h4 className="text-md py-2">Here's some words from a few of the colleagues or collaborators:</h4>
            <div className="w-full p-4 inline-flex justify-between rounded-md group bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
                <blockquote className="w-full relative">
                    <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-blue-300 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                    </svg>
                    <h2 className="relative text-xl group-hover:text-blue-700 dark:group-hover:text-blue-300 text-center text-gray-500 dark:text-gray-300 italic">
                        "Angelin Calu was a valuable engineer and I was pleased to have him in my department."
                    </h2>
                    <p className="text-sm text-gray-700 dark:text-gray-200 w-full text-right flex flex-col mt-4">
                        <span className="font-bold">Popescu Daniel-Ciprian</span>
                        <span>Vice President Technical at Vard Braila</span>
                    </p>
                </blockquote>
            </div>
        </section>
    );
};

export default References;
