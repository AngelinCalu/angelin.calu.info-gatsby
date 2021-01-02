import React from 'react';
import Layout from '../layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const Experience = () => {
    return (
        <Layout>
            <SEO title="Experience" description="Portfolio of web development projects done by Angelin Calu, full stack developer based in Turku, Finland"/>
            <h1 className="text-4xl py-4">Experience</h1>
            <p>
                A list of projects I've done (software / web development) will be soon posted here.
                <br />
                Although I have successfully completed several big projects (ERP / CRM systems), they have sensitive
                data which should probably not be made public.
            </p>

            <p className="py-2">
                If you want to see a list of ships I've worked on, please check the list under{' '}
                <Link
                    className="hover:underline hover:text-blue-700"
                    title="Shipbuilding Projects"
                    to="/shipbuilding#shipbuilding-projects"
                >
                    Shipbuilding Projects
                </Link>
                .
            </p>
        </Layout>
    );
};

export default Experience;
