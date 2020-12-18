import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

const HomePage: React.FC = (): JSX.Element => {
    const { title, description } = useSiteMetadata();

    return (
        <>
            <h2>Welcome</h2>
            <h1>{title}</h1>
            <p>{description}</p>
        </>
    );
};

export default HomePage;
