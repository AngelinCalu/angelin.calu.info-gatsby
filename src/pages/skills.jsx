import React, { useState } from 'react';
import Layout from '../layout';
import SEO from '../components/seo';

import skillsData from '../../content/data/skills';

const Skills = () => {
    const [techList, setTechList] = useState(false);

    return (
        <Layout>
            <SEO title="Skills" />
            <h1 className="text-4xl py-4">Skills</h1>
            <section className="py-4">
                <h3 className="uppercase text-2xl py-2">Soft skills</h3>
                <ul className="space-y-4 list-disc">
                    <li>
                        <div>Creativity</div>
                        <span className="text-gray-500 text-sm">
                            I'm deliberately putting this at the top of the list as I think this might be one of my most
                            important assets. And, just to be perfectly clear I'm not referring to the artistic side but
                            the ability to think, design and implement (sometimes innovative) solutions to a wide
                            variety of problems and tasks.
                        </span>
                    </li>
                    <li>
                        <div>Adaptability</div>
                        <span className="text-gray-500 text-sm">
                            I'm very confortable working in the most diverse environments, and I'm adapting very easy
                            when a change occurs.
                        </span>
                    </li>
                    <li>
                        <div>Communication</div>
                        <span className="text-gray-500 text-sm">
                            Good communication skills and very confortable communicating in general. I've been using
                            English language as the main way of communicating on the workplace and outside of working
                            hours for more than 6 years.
                        </span>
                    </li>
                    <li>
                        <div>Organization</div>
                        <span className="text-gray-500 text-sm">
                            Good skills in planning and effectively implementing projects and general work tasks for
                            myself and others.
                        </span>
                    </li>
                    <li>
                        <div>Critical Thinking</div>
                        <span className="text-gray-500 text-sm">
                            Maybe this is a trait commonly found in programmers in general, or perhaps it's just how
                            coding for over 20 years changed the way I think about things.
                        </span>
                    </li>
                </ul>
            </section>
            <section className="py-4">
                <h3 className="uppercase text-2xl py-2">Tech skills</h3>
                <p>
                    My passion for writing beautiful code, or sometimes the constraints of the tasks, made me aquire
                    skills in a wide range of programming languages as well as various development tools.
                </p>
                <p className="py-2">Below some of those:</p>
                <button
                    type="button"
                    className="p-2 hover:underline hover:text-blue-500"
                    onClick={() => setTechList(!techList)}
                >
                    {techList ? 'View as Table' : 'View as List'}
                </button>
                <div className="pt-4">
                    {skillsData.map((row, i) => (
                        <div
                            key={`row-${i + 1}`}
                            className="w-full justify-center inline-flex py-2 space-x-2 md:space-x-4"
                        >
                            {row.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="h-14 md:h-24 px-2 hover:bg-gray-100 rounded-lg flex items-center"
                                >
                                    <img
                                        className={skill.iconSize || 'h-10 md:h-20 w-auto'}
                                        src={`../images/tech-svg/${skill.icon}`}
                                        alt={skill.name}
                                        title={skill.name}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default Skills;
