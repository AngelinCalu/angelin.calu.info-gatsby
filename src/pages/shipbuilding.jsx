import React from 'react';
import Layout from '../layout';
import SEO from '../components/seo';

import experienceData from '../../content/data/experience';
import shipsData from '../../content/data/ships';
import experience from '../../content/data/experience';

const Shipbuilding = () => {
    const accumulatedExpMonths = experienceData.reduce(
        (acc, pos) =>
            acc + (
                (pos.to.getFullYear() * 12 + pos.to.getMonth()) - (pos.from.getFullYear() * 12 + pos.from.getMonth())
            ),
        0,
    );

    const accumulatedExpYears = Math.floor(accumulatedExpMonths / 12);

    return (
        <Layout>
            <SEO title="Shipbuilding" />
            <section className="py-2">
                <h3 className="uppercase text-2xl py-2">Brief</h3>
                <p>
                    Working as a Hull Design Engineer in the past years for different customers, doing design work and
                    technical assistance, got me familiar with the design technologies, hull production strategies and
                    best practices. During this period I also developed good planning and estimation skills and a great
                    eye for detail.
                </p>
                <p className="py-4">My abilities, as an overview would look something like:</p>
                <ul className="list-disc pl-6">
                    <li>Excelent skills in Planar Hull Detail Design;</li>
                    <li>Excelent skills in Curved Hull Detail Design;</li>
                    <li>Excelent skills in Project settings and administration in Aveva;</li>
                    <li>Excelent skills in Scripts development in Aveva / Tribon M3;</li>
                    <li>Excelent skills in Tasks automation for designing and checking;</li>
                    <li>Advanced AutoCAD skills.</li>
                </ul>
            </section>
            <section className="py-2">
                <h3 className="uppercase text-2xl py-2">Experience in Shipbuilding</h3>
                <p>
                    Everyone would probably agree that great skills are built in time. Here's where I've polished my
                    shipbuilding skills for{' '}
                    <b className="font-bold text-red-600">an accumulated period of more than {accumulatedExpYears} years</b>:
                </p>
                <ul className="mt-6">
                    {experienceData.map(experience => (
                        <li key={experience.id}>
                            <div className="w-full max-w-sm mt-4 py-1 px-4 bg-gray-200 rounded">{experience.from.toLocaleString('en-us', { month: 'long', year: 'numeric' })} - { experience.to.toLocaleString('en-us',{month:'long', year:'numeric'}) }</div>
                            <h3 className="text-xl">{experience.title}</h3>
                            <span className="text-sm whitespace-pre text-gray-500">{ experience.address }</span>
                        </li>
                    )) }
                </ul>
            </section>
        </Layout>
    );
};

export default Shipbuilding;
