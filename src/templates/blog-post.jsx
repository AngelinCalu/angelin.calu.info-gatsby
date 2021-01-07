import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../layout';
import SEO from '../components/seo';
import TableOfContents from '../components/blog/table-of-contents';

const BlogPostTemplate = ({ data, pageContext }) => {
    const { frontmatter, body, excerpt, tableOfContents, timeToRead } = data.mdx;
    const { slug, previous, next } = pageContext;
    const ogImagePath = frontmatter.ogimage && frontmatter.ogimage.childImageSharp.fixed.src;

    return (
        <Layout>
            <SEO pathname={slug} title={frontmatter.title} description={excerpt} image={ogImagePath} />

            <article>
                <div className="flex flex-col pb-2 text-sm">
                    <span className="text-gray-500 dark:text-gray-200">
                        Published on <b>{frontmatter.date}</b>
                    </span>
                    <span className="text-gray-500 dark:text-gray-200">
                        Estimated time to Read: <b>{timeToRead} minute(s)</b>
                    </span>
                </div>
                <div className="relative flex">
                    <div className="prose dark:prose-dark prose-sm sm:prose lg:prose-lg min-w-0 max-w-none px-4 flex-1">
                        <h1 className="py-1 pt-6 text-gray-800 dark:text-gray-200">{frontmatter.title}</h1>
                        <MDXRenderer>{body}</MDXRenderer>
                    </div>
                    {!! tableOfContents.items && <TableOfContents items={tableOfContents.items} />}
                </div>
            </article>
            <div className="border-t dark:border-gray-700 mt-5">
                <h3 className="text-xl font-bold py-4 inline-flex items-end w-full text-gray-900 dark:text-white ">
                    <span>Continue reading</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-4 w-5 h-5" viewBox="0 0 24 24"><path d="M10 15l5 5 5-5"/><path d="M4 4h7a4 4 0 014 4v12"/></svg>
                </h3>
                {previous === false ? (
                    <div>&nbsp;</div>
                ) : (
                    <>
                        {previous && (
                            <div className="mb-2 inline-flex">
                                <span className="w-15 text-right">Previous:</span>
                                <Link
                                    to={previous.fields.slug}
                                    className="hover:underline hover:text-blue-500 ml-4 text-gray-500 dark:text-gray-400"
                                >
                                    {previous.frontmatter.title}
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
                            <div className="inline-flex">
                                <span className="w-15 text-right">Next:</span>
                                <Link
                                    to={next.fields.slug}
                                    className="hover:underline hover:text-blue-500 ml-4 text-gray-500 dark:text-gray-400"
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
                date(formatString: "MMMM Do YYYY")
                ogimage {
                    childImageSharp {
                        fixed {
                            src
                        }
                    }
                }
            }
            excerpt(pruneLength: 150)
            tableOfContents(maxDepth: 3)
            timeToRead
        }
    }
`;

export default BlogPostTemplate;
