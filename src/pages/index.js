import React from "react";
import useSiteMetadata from '../hooks/useSiteMetadata';
import Layout from '../layout';

export default function Home() {
  const { title, description } = useSiteMetadata();
  return <Layout>
            <h2>Welcome</h2>
            <h1>{title}</h1>
            <p>{description}</p>
        </Layout>;
};
