import React from 'react';
import { Link } from 'gatsby';

const BlogPosts = ({ posts }) => {
    return (
        <section className="py-6">
            <h3 className="uppercase text-2xl py-2">Latest Posts</h3>
            {posts.map(({ id, frontmatter, fields, timeToRead }) => (
                <Link key={id} to={fields.slug}>
                    <article className="w-full p-4 flex flex-col md:flex-row justify-between rounded-md group hover:bg-gray-100">
                        <div>
                            <h4 className="text-lg group-hover:text-blue-700">{frontmatter.title}</h4>
                            <p className="text-sm text-gray-700">{frontmatter.description}</p>
                        </div>
                        <div className="flex justify-between md:flex-col md:items-end group-hover:text-gray-500">
                            <p className="py-2 md:py-0">{frontmatter.date}</p>
                            <p className="text-sm whitespace-nowrap inline-flex items-center text-gray-500 p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4 mr-2"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                                {`${timeToRead} minute(s) read.`}
                            </p>
                        </div>
                    </article>
                </Link>
            ))}
        </section>
    );
};

export default BlogPosts;
