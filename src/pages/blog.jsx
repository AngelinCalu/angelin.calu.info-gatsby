import React from 'react';
import Layout from '../layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import BlogPosts from '../components/homepage/blog-posts';

export default function Blog({ data }) {
    return (
        <Layout>
            <SEO title="Blog" />
            <h1 className="text-4xl py-4">Blog</h1>
            <p>I will post here about my journey back to software development, experience with various technologies, side projects or notable "How to's". </p>
            <BlogPosts posts={data.allMdx.nodes} />
        </Layout>
    );
}

export const query = graphql`
    query ALL_POSTS_QUERY {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                id
                frontmatter {
                    title
                    description
                    date(formatString: "YYYY-MM-DD")
                }
                fields {
                    slug
                }
            }
        }
    }
`;
