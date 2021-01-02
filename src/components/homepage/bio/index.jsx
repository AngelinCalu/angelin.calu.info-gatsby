import React from 'react';
import Img from 'gatsby-image';

const Bio = ({ profilePic }) => {
    return (
        <section className="space-y-2 flex flex-col-reverse md:flex-row">
            <div className="px-6 space-y-3">
                <h3 className="text-xl mt-10 md:mt-0 mb-2 indent">
                    Hi! I’m <em className="font-bold">Angelin Calu</em>.
                </h3>
                <p className="indent">
                    Born in Braila, Romania, currently living in Turku, Finland, father of two, engineer, entreprenour,
                    passionate about technology in general, started coding years before Stackoverflow launched (
                    <i>
                        I'm referring to a certain period when developers used <span>&lt;table&gt;</span> elements to
                        define the layout for a web page and combining PHP and HTML in same file was the standard.
                        Grose, I know!
                    </i>
                    ).
                </p>
                <p className="indent">
                    Experienced in building extensive SaaS applications from designing (lately preferring Figma as a
                    main tool) to writing both front and backend end logic (<em>Full-Stack</em>), testing, deployment,
                    including basic server management tasks.
                </p>
                <p className="indent">
                    Please feel free to browse around, and don't hesitate to reach out, for whatever reason.
                </p>
            </div>
            <div className="w-full max-w-sm">
                <Img fluid={profilePic.childImageSharp.fluid} alt="Angelin Calu" />
            </div>
        </section>
    );
};

export default Bio;
