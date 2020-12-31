import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import BlogPosts from '../components/homepage/blog-posts';
import Bio from '../components/homepage/bio';
import Projects from '../components/homepage/projects';
import References from '../components/homepage/references';
import SEO from '../components/seo';

export default function Home({ data }) {
    return (
        <Layout>
            <SEO title="Homepage" />
            <Bio profilePic={ data.profilePic }/>
            <BlogPosts posts={data.allMdx.nodes} />
            <Projects />
            <References />
        </Layout>
    );
}

export const query = graphql`
    query SITE_INDEX_QUERY {
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 5
            ) {
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
        profilePic: file(relativePath: {eq: "default.png"}) {
            childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                        ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
