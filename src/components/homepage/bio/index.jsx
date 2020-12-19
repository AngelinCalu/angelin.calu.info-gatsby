import React from 'react';
import useSiteMetadata from '../../../hooks/useSiteMetadata';

const Bio = () => {
    const { title, description } = useSiteMetadata();

    return (
        <section>
            <h1>{title}</h1>
            <p>{description}</p>
        </section>
    );
};

export default Bio;
