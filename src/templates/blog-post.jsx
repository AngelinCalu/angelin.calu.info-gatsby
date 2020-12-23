import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../layout';
import SEO from '../components/seo';

const BlogPostTemplate = ({ data, pageContext }) => {
    const { frontmatter, body, excerpt, timeToRead } = data.mdx;
    const { previous, next } = pageContext;
    return (
        <Layout>
            <SEO title={frontmatter.title} description={excerpt} />

            <article className="prose prose-sm sm:prose lg:prose-lg min-w-0 max-w-none">
                <div className="flex flex-col pb-2 text-sm">
                    <span className="text-gray-500">Published on <b>{frontmatter.date}</b></span>
                    <span className="text-gray-500">Estimated time to Read: <b>{timeToRead} minute(s)</b></span>
                </div>
                <h1 className="py-1">{frontmatter.title}</h1>
                <MDXRenderer>{body}</MDXRenderer>
            </article>
            <div className="flex justify-between">
                {previous === false ? (
                    <div>&nbsp;</div>
                ) : (
                    <>
                        {previous && (
                            <div className="mt-6">
                                <span className="text-lg">Before this I wrote:</span>
                                <Link
                                    to={previous.fields.slug}
                                    className="hover:underline hover:text-blue-700 p-4 text-gray-500"
                                >
                                    <p>{previous.frontmatter.title}</p>
                                </Link>
                            </div>
                        )}
                    </>
                )}
                {next === false ? (
                    <div>&nbsp;</div>
                ) : (
                    <>
                        {next && (
                            <div className="mt-6">
                                <span className="text-lg">Here's what I wrote after this article:</span>
                                <Link
                                    to={next.fields.slug}
                                    className="hover:underline hover:text-blue-700 p-4 text-gray-500"
                                >
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
                date(formatString: "YYYY-MM-DD")
            }
            excerpt(pruneLength: 150)
            timeToRead
        }
    }
`;

export default BlogPostTemplate;
