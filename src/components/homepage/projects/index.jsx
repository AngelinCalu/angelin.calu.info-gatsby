import React from 'react';
import { Link } from 'gatsby';

const Projects = () => {
    return (
        <section className="py-6">
            <h3 className="uppercase text-2xl py-2">Projects</h3>
                    <article className="w-full p-4">
                        <h2 className="text-lg">I will soon add here a list of side projects I’ve been working on during the years. For a list of Shipbuilding projects I’ve been working on click on <Link className="hover:underline hover:text-blue-700" to="/shipbuilding" title="Shipbuilding">Shipbuilding</Link>.</h2>
                    </article>
        </section>
    );
}

export default Projects;