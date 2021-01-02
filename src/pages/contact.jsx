import React from 'react';
import Layout from '../layout';
import SEO from '../components/seo';

const Contact = () => {
    return (
        <Layout>
            <SEO
                pathname="/contact"
                title="Contact"
                description="Contact information for Angelin Calu, shipbuilding engineer and Full-Stack developer based in Turku, Finland."
            />
            <h1 className="text-4xl py-4">Contact</h1>
            <p>
                Feel free to reach out if you're looking for a developer, a shipbuilding engineer, have a question, or
                just want to connect.
            </p>
            <p>
                You can reach me on the phone at either{' '}
                <a className="font-bold hover:underline hover:text-blue-700" href="tel:+40747455422">
                    (+40) 747455422
                </a>{' '}
                or{' '}
                <a className="font-bold hover:underline hover:text-blue-700" href="tel:+358469065086">
                    (+358) 469065086
                </a>{' '}
                or through e-mail at{' '}
                <a className="font-bold hover:underline hover:text-blue-700" href="mailto:angelin.calu@gmail.com">
                    angelin.calu@gmail.com
                </a>
                .
            </p>
        </Layout>
    );
};

export default Contact;
