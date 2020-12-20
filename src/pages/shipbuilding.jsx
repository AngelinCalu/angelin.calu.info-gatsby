import React from 'react';
import Layout from '../layout';
import SEO from '../components/seo';

const Shipbuilding = () => {
    return (
        <Layout>
            <SEO title="Shipbuilding" />
            <p>
                Working as a Hull Design Engineer in the past years for different customers, doing design work and
                technical assistance, got me familiar with the design technologies, hull production strategies and best
                practices. During this period I also developed good planning and estimation skills and a great eye for
                detail.
            </p>
            <p className="py-4">My abilities, as an overview would look something like:</p>
            <ul className="list-disc pl-6">
                <li>Excelent skills in Planar Hull Detail Design</li>
                <li>Excelent skills in Curved Hull Detail Design</li>
                <li>Excelent skills in Project settings and administration in Aveva</li>
                <li>Excelent skills in Scripts development in Aveva / Tribon M3</li>
                <li>Excelent skills in Tasks automation for designing and checking</li>
                <li>Advanced AutoCAD skills</li>
            </ul>
        </Layout>
    );
};

export default Shipbuilding;
