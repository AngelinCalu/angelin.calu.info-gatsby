import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
    return useStaticQuery(
        graphql`
            query SITE_METADATA_QUERY {
                site {
                    siteMetadata {
                        title
                        description
                        keywords
                        author
                        image
                        siteUrl
                        siteLanguage
                        siteLocale
                        twitterUsername
                    }
                }
            }
        `,
    );
};

export default useSiteMetadata;
