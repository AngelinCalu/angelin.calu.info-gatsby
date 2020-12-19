import React from 'react';

const BlogPosts = ({ posts }) => {
    return (
        <section>
            <h3 className="uppercase text-2xl">Latest Posts</h3>
            {posts.map(({ id, frontmatter }) => (
                <article key={id} className="w-full py-6 inline-flex justify-between">
                    <div>
                        <h2 className="text-lg">{frontmatter.title}</h2>
                        <p className="text-sm text-gray-700">{frontmatter.description}</p>
                    </div>
                    <div className="flex items-end">
                        <p>{frontmatter.date}</p>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default BlogPosts;
