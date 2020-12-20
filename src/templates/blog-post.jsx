import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../layout';

const BlogPostTemplate = ({ data, pageContext }) => {
    const { frontmatter, body } = data.mdx;
    const { previous, next } = pageContext;
    return (
        <Layout>
            <h1 className="text-2xl py-2">{frontmatter.title}</h1>
            <p className="text-gray-500 text-sm mb-8">{frontmatter.date}</p>
            <MDXRenderer>{body}</MDXRenderer>
            <div className="flex justify-between">
                {previous === false ? <div>&nbsp;</div> : (
                    <>
                        {previous && (
                            <div className="mt-6">
                                <span className="text-lg">Before this I wrote:</span>
                                <Link to={previous.fields.slug} className="hover:underline hover:text-blue-700 p-4 text-gray-500">
                                    <p>{previous.frontmatter.title}</p>
                                </Link>
                            </div>
                        )}
                    </>
                )}
                {next === false ? <div>&nbsp;</div> : (
                    <>
                        {next && (
                            <div className="mt-6">
                                <span className="text-lg">Here's what I wrote after this article:</span>
                                <Link to={next.fields.slug} className="hover:underline hover:text-blue-700 p-4 text-gray-500">
                                    <p>{next.frontmatter.title}</p>
                                </Link>
                            </div>
                        )}
                    </>
                )}
            </div>
        </Layout>
    );
};

export const query = graphql`
    query PostBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                date(formatString: "YYYY MM DD")
            }
        }
    }
`;

export default BlogPostTemplate;
