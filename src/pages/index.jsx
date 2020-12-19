import React from "react";
import { graphql } from 'gatsby';
import Layout from '../layout';
import BlogPosts from '../components/homepage/blog-posts';
import Bio from '../components/homepage/bio';

export default function Home({ data }) {
  return (<Layout>
            <Bio />
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