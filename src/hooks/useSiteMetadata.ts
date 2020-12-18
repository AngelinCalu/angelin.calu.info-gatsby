import { graphql, useStaticQuery } from 'gatsby';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query SITE_METADATA_QUERY {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `,
    );
    return site.siteMetadata;
};

export default useSiteMetadata;
