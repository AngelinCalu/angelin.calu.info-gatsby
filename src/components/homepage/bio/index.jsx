import React from 'react';
import Img from 'gatsby-image';

const Bio = ({ profilePic }) => {
    return (
        <section className="space-y-2 flex flex-col md:flex-row">
            <div className="w-full max-w-sm">
                <Img fluid={ profilePic.childImageSharp.fluid } alt="Angelin Calu" />
            </div>
            <div className="px-6">
                <h3 className="text-lg">
                    Hi! I’m <em className="font-bold">Angelin Calu</em>
                </h3>
                <p>
                    Born in Braila, Romania, currently living in Turku, Finland, father of two, entreprenour, passionate
                    about technology in general, started coding years before Stackoverflow launched.
                </p>
                <p>
                    Experienced in building extensive SaaS applications from designing (lately preferring Figma as a
                    main tool) to writing both front and backend end logic (<b>Full-Stack</b>), testing, deployment,
                    including basic server management tasks.
                </p>
            </div>
        </section>
    );
};

export default Bio;
