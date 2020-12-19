import React from 'react';

const References = () => {
    return (
        <section className="py-6">
            <h3 className="uppercase text-2xl py-2">References</h3>
            <h4 className="text-md py-2">Here's some words from a few of the colleagues or collaborators:</h4>
            <article className="w-full p-4 inline-flex justify-between rounded-md group bg-gray-100 hover:bg-gray-200">
                <div className="w-full">
                    <h2 className="text-lg group-hover:text-blue-700 text-center text-gray-500 italic">
                        "Angelin Calu was a valuable engineer and I was pleased to have him in my department."
                    </h2>
                    <p className="text-sm text-gray-700 w-full text-right flex flex-col mt-4">
                        <span className="font-bold">Popescu Daniel-Ciprian</span>
                        <span>Vice President Technical at Vard Braila</span>
                    </p>
                </div>
            </article>
        </section>
    );
};

export default References;
