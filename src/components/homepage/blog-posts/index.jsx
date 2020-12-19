import React from 'react';
import { Link } from 'gatsby';

const BlogPosts = ({ posts }) => {
    return (
        <section className="py-6">
            <h3 className="uppercase text-2xl py-2">Latest Posts</h3>
            {posts.map(({ id, frontmatter, fields }) => (
                <Link key={id} to={fields.slug}>
                    <article className="w-full p-4 inline-flex justify-between rounded-md group hover:bg-gray-100">
                        <div>
                            <h2 className="text-lg group-hover:text-blue-700">{frontmatter.title}</h2>
                            <p className="text-sm text-gray-700">{frontmatter.description}</p>
                        </div>
                        <div className="flex items-end group-hover:text-gray-500">
                            <p>{frontmatter.date}</p>
                        </div>
                    </article>
                </Link>
            ))}
        </section>
    );
};

export default BlogPosts;
