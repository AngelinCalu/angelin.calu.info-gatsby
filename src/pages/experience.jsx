import React from 'react';
import Layout from '../layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';
import { ExternalLink } from '../components/ui';

import projects from '../../content/data/projects';

const Experience = () => {
    return (
        <Layout>
            <SEO
                pathname="/experience"
                title="Experience"
                description="Portfolio of web development projects done by Angelin Calu, full stack developer based in Turku, Finland"
            />
            <h1 className="text-4xl py-4 dark:text-gray-100">Experience</h1>
            <p className="py-2">
                <strong>Note!</strong> If you want to see a list of ships I've worked on, please check the list under{' '}
                <Link
                    className="hover:underline text-blue-400 hover:text-blue-500"
                    title="Shipbuilding Projects"
                    to="/shipbuilding#shipbuilding-projects"
                >
                    Shipbuilding Projects
                </Link>
                .
            </p>

            <p>
                I like to stay busy and up to date with the latest trends, always having a project in the works;
                however, although I have successfully completed several big projects (ERP / CRM systems, e-commerce
                shops, etc.), they have sensitive data which should probably not be made public.
            </p>

            <p>Below some projects I can show (more to be added soon): </p>
            <div className="py-4">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="p-2 my-2 rounded bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <h2 className="text-xl font-heading text-gray-900 dark:text-white p-2 text-center">
                            {project.title}
                        </h2>
                        <div className="text-gray-600 dark:text-gray-300">
                            <div className="my-2 grid grid-cols-1 md:grid-cols-2">
                                <span className="text-sm font-bold p-1 md:text-right mr-2">Link:</span>
                                <span>
                                    <ExternalLink to={project.link} className="text-sm" title={project.title} icon>
                                        {project.link}
                                    </ExternalLink>
                                </span>
                            </div>
                            <div className="my-2 grid grid-cols-1 md:grid-cols-2">
                                <span className="text-sm font-bold p-1 md:text-right mr-2">Description:</span>
                                <span>{project.description}</span>
                            </div>
                            <div className="my-2 grid grid-cols-1 md:grid-cols-2">
                                <span className="text-sm font-bold p-1 md:text-right mr-2">Technologies used:</span>
                                <span>
                                    <strong>{project.technologies.join(', ')}</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Experience;
