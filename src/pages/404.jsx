import React from 'react';
import Layout from '../layout';
import { Link } from 'gatsby';

const E404 = () => {
    return (
        <Layout>
            <h1 className="text-4xl font-heading py-4">404 Not Found!</h1>
            <p className="text-lg">
                If you think this is a mistake, please
                <Link className="inline-block pl-2 hover:underline hover:text-blue-500" to="/contact" title="Contact">
                    drop me a line
                </Link>{' '}
                and tell me about it!
            </p>
        </Layout>
    );
};

export default E404;
