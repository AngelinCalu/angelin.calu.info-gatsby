import React from 'react';
import { graphql, Link } from 'gatsby';
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
            <Bio profilePic={data.profilePic} />
            <BlogPosts posts={data.allMdx.nodes} />
            <Link className="hover:text-blue-700 dark:hover:text-blue-200 hover:underline" to="/blog" title="All blog posts">View all articles</Link>
            <Projects />
            <References />
        </Layout>
    );
}

export const query = graphql`
    query SITE_INDEX_QUERY {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 5) {
            nodes {
                id
                frontmatter {
                    title
                    description
                    date(formatString: "MMMM Do YYYY")
                }
                fields {
                    slug
                }
                timeToRead
            }
        }
        profilePic: file(relativePath: { eq: "default.png" }) {
            childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
