import React from 'react';
import Layout from '../layout';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import experienceData from '../../content/data/experience';
import shipsData from '../../content/data/ships';

const Shipbuilding = () => {
    const data = useStaticQuery(graphql`
        query SHIP_IMAGES {
            ships: allFile(filter: { relativeDirectory: { eq: "ships" } }) {
                edges {
                    node {
                        id
                        childImageSharp {
                            fluid(maxWidth: 590) {
                                ...GatsbyImageSharpFluid_withWebp
                                originalName
                            }
                        }
                    }
                }
            }
            logos: allFile(filter: { relativeDirectory: { eq: "logos" } }) {
                edges {
                    node {
                        id
                        childImageSharp {
                            fixed(width: 128) {
                                ...GatsbyImageSharpFixed_withWebp
                                originalName
                            }
                        }
                    }
                }
            }
        }
    `);

    const accumulatedExpMonths = experienceData.reduce(
        (acc, pos) =>
            acc +
            (pos.to.getFullYear() * 12 +
                pos.to.getMonth() +
                1 -
                (pos.from.getFullYear() * 12 + pos.from.getMonth() + 1)),
        0,
    );

    const accumulatedExpYears = Math.floor(accumulatedExpMonths / 12);

    return (
        <Layout>
            <SEO title="Shipbuilding" description="Experience of Angelin Calu in shipbuilding, skills and projects done during the years." />
            <h1 className="text-4xl py-4">Shipbuilding</h1>
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
                <h3 id="experience-in-shipbuilding" className="uppercase text-2xl py-2">
                    Experience in Shipbuilding
                </h3>
                <p>Everyone would probably agree that great skills are built in time.</p>
                <p>
                    Here's where I've polished my shipbuilding skills for{' '}
                    <b className="font-bold text-green-800">
                        an accumulated period of more than {accumulatedExpYears} years
                    </b>
                    :
                </p>
                <ul className="mt-6">
                    {experienceData.map((experience) => (
                        <li key={experience.id} className="py-4">
                            <div className="w-full inline-flex items-center max-w-sm p-4 py-1 px-4 bg-gray-200 rounded">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5 mr-4"
                                    viewBox="0 0 24 24"
                                >
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <path d="M16 2v4M8 2v4M3 10h18" />
                                </svg>
                                <span>
                                    {experience.from.toLocaleString('en-us', {
                                        month: 'long',
                                        year: 'numeric',
                                        timeZone: 'UTC',
                                    })}
                                    {` - `}
                                    {experience.to.toLocaleString('en-us', {
                                        month: 'long',
                                        year: 'numeric',
                                        timeZone: 'UTC',
                                    })}
                                </span>
                            </div>
                            <h4 className="text-xl pt-2">{experience.position}</h4>
                            <div className="p-4 inline-flex items-center">
                                <div className="pr-4">
                                    <Img
                                        className="h-auto w-32"
                                        fixed={
                                            data.logos.edges.filter(
                                                (edge) =>
                                                    edge.node.childImageSharp.fixed.originalName === experience.image,
                                            )[0].node.childImageSharp.fixed
                                        }
                                        src={experience.title}
                                    />
                                </div>
                                <div>
                                    <h4 className="text-lg pt-2">{experience.title}</h4>
                                    <span className="text-sm whitespace-pre text-gray-500">{experience.address}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h3 id="shipbuilding-projects" className="uppercase text-2xl py-2">
                    Shipbuilding projects
                </h3>
                <p>Below a list of ships I've worked on:</p>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {shipsData.map((ship) => (
                        <div key={ship.yardNo} className="group relative shadow-md hover:shadow-xl">
                            <Img
                                className="w-full h-full"
                                fluid={
                                    data.ships.edges.filter(
                                        (edge) => edge.node.childImageSharp.fluid.originalName === ship.image,
                                    )[0].node.childImageSharp.fluid
                                }
                                src={ship.name}
                            />
                            <span className="absolute top-0 left-0 bg-red-500 bg-opacity-75 text-white p-1 px-4 text-sm group-hover:bg-opacity-100">
                                {ship.yardNo}
                            </span>
                            <span className="bg-gradient-to-r group-hover:from-blue-800 group-hover:via-blue-600 group-hover:to-green-800 group-hover:text-white bg-white bg-opacity-75 w-full absolute bottom-0 left-0 py-1 text-center">
                                {ship.name}
                            </span>
                        </div>
                    ))}
                </div>
                <p className="py-6 text-gray-700 italic text-sm">
                    Credits for the ship images shown here are to be given to the respective owners. No copyright
                    infringement is intended.
                </p>
            </section>
        </Layout>
    );
};

export default Shipbuilding;
