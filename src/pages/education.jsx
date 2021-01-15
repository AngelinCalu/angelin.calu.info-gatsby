import React from 'react';
import Layout from '../layout';
import SEO from '../components/seo';
import { ExternalLink } from '../components/ui';

import educationData from '../../content/data/education';

const Education = () => {
    return (
        <Layout>
            <SEO
                pathname="/education"
                title="Education"
                description="Education information for Angelin Calu, Marine Engineer, Naval Architect, Hull Design specialist, and full stack developer, based in Turku, Finland."
            />
            <h1 className="text-4xl py-4 dark:text-gray-100">Education</h1>
            <h2 className="text-lg font-bold pt-4 pb-2">2001 - 2005</h2>
            <p>
                My Passion for the IT world started in the late 90's, and that's why I've chosen to continue my High
                School studies in this field.
            </p>
            <p>
                In High School (Mathematics and Informatics, Anghel Saligny, Braila, Romania) the curriculum covered
                mostly programming in <b>C++</b>, and very basic front end stuff (like HTML), but because of my early
                passion for web and software development, I've been involved in an ERASMUS exchange program called{' '}
                <b className="text-gray-500 font-bold italic">"New Technologies - Multimedia and internet"</b>.
            </p>
            <p>I've also been awarded several times, in various local programming competitions.</p>
            <h2 className="text-lg font-bold pt-4 pb-2">2006 - 2010</h2>
            <p>
                After High School, I decided to pursue a career in shipbuilding as that was probably the main activity
                in the region.
            </p>
            <p>
                I got my Bachelor's Degree in Naval Architecture (from Lower Danube University in Galati, Romania) in
                the summer of 2010.
            </p>
            <p>
                Besides the specific technical classes, the University curriculum also included programming in C++ and
                VBA (in Microsoft Excel).
            </p>
            <h2 className="text-lg font-bold pt-4 pb-2">2010 - 2012</h2>
            <p>In October 2010 I've been accepted into the Master's programme of the same University.</p>
            <p>
                In February 2011 I already started working full-time in the shipbuilding industry (while continuing the
                studies).
            </p>
            <p>
                In the summer of 2012 I've passed all the exams but unfortunately didn't managed to finish my Master's
                thesis in time.
            </p>

            <h2 className="text-lg font-bold py-4">&nbsp;</h2>
            <p>
                The study period has definitely continued even after the institutionalized education. I've always been
                able to find good resources to learn on my own, expecially in the field of software and web development.
                And, to be perfectly honest, keeping up with the latest technologies and practices became a part of who
                I am.
            </p>
            <p className="py-2">
                Because people are saying that having these on your profile is important, some of those trainings (the
                ones that would provide some certificate of completion 😊 and Laracasts, the one I consider the most
                relevant, below):
            </p>

            <ul className="py-3 list-disc space-y-2">
                {educationData.map((education) => (
                    <li key={education.title} className="flex flex-col">
                        <b>
                            <ExternalLink to={education.url} title={education.title} icon>
                                {education.title}
                            </ExternalLink>
                        </b>
                        <div className="inline-flex items-center space-x-4">
                            <span className="text-gray-500">Period: </span>
                            <span className="text-sm">{education.period}</span>
                        </div>
                        <div className="inline-flex items-center space-x-4">
                            <span className="text-gray-500">Topics: </span>
                            <span className="text-sm">{education.topics.join(', ')}</span>
                        </div>
                        <div className="inline-flex items-center space-x-4">
                            <span className="text-gray-500">Organizer: </span>
                            <span className="text-sm">{education.organizer}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

export default Education;
