import React from "react";
import { graphql } from 'gatsby';
import useSiteMetadata from '../hooks/useSiteMetadata';
import Layout from '../layout';

export default function Home({ data }) {
  const { title, description } = useSiteMetadata();
  return <Layout>
            <h2>Welcome</h2>
            <h1>{title}</h1>
            <p>{description}</p>

            <h3 className="uppercase text-2xl">Latest Posts</h3>
            {data.allMdx.nodes.map(({ id, frontmatter }) => (
                  <div key={id}>
                    <h1>{frontmatter.title}</h1>
                    <h1>{frontmatter.description}</h1>
                    <p>{frontmatter.date}</p>
                  </div>
                ))}
        </Layout>;
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