import React, { useState } from 'react';
import Layout from '../layout';
import SEO from '../components/seo';

import skillsData from '../../content/data/skills';

const Skills = () => {
    const [techList, setTechList] = useState(false);

    return (
        <Layout>
            <SEO
                pathname="/skills"
                title="Skills"
                description="A list of the soft and technical skills of Angelin Calu, full-stack developer based in Turku, Finland, can be read here."
            />
            <h1 className="text-4xl py-4 dark:text-gray-100">Skills</h1>
            <section className="py-4">
                <h3 id="soft-skills" className="uppercase text-2xl py-2 dark:text-gray-100">
                    Soft skills
                </h3>
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
                        <div>Achiever</div>
                        <span className="text-gray-500 text-sm">
                            I like to be productive and stay busy. Because of this I am always focused, consistent about
                            getting things done in a timely manner and look to take on additional responsibilities.
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
                <h3 id="tech-skills" className="uppercase text-2xl py-2 dark:text-gray-100">
                    Tech skills
                </h3>
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
                    {techList ? 'View as Group' : 'View as List'}
                </button>
                <div className="pt-4">
                    {skillsData.map((row, i) => (
                        <div
                            key={`row-${i + 1}`}
                            className={`w-full justify-center py-2 ${
                                techList ? null : 'inline-flex space-x-2 md:space-x-4'
                            } `}
                        >
                            {row.map((skill) => (
                                <div
                                    key={skill.name}
                                    className={`h-14 md:h-24 px-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg flex items-center focus:outline-none ${
                                        techList ? 'my-2 border-b dark:border-gray-700' : null
                                    }`}
                                >
                                    <img
                                        className={`md:p-3 bg-white md:rounded-lg ${skill.iconSize || 'h-10 md:h-20 w-auto'}`}
                                        src={`../images/tech-svg/${skill.icon}`}
                                        alt={skill.name}
                                        title={skill.name}
                                    />
                                    <span className={techList ? 'p-2' : 'hidden'}>{skill.description}</span>
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
