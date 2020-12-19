import React from "react";
import { graphql } from 'gatsby';
import useSiteMetadata from '../hooks/useSiteMetadata';
import Layout from '../layout';
import BlogPosts from '../components/homepage/blog-posts';

export default function Home({ data }) {
  const { title, description } = useSiteMetadata();
  return (<Layout>
            <h2>Welcome</h2>
            <h1>{title}</h1>
            <p>{description}</p>

            <BlogPosts posts={data.allMdx.nodes} />
    
        </Layout>);
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          title
          description
          date(formatString: "YYYY-MM-DD")
        }
      }
    }
  }
`;