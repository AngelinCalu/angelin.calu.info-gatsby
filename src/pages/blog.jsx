import React from 'react';
import Layout from '../layout';
import SEO from '../components/seo';

const Blog = () => {
    return (
        <Layout>
            <SEO title="Blog" />
            <h1 className="text-4xl py-4">Blog</h1>
        </Layout>
    );
};

export default Blog;
