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
                        siteUrl
                        siteLanguage
                        siteLocale
                        twitterUsername
                    }
                }
                ogImageDefault: file(relativePath: {eq: "default.png"}) {
                    childImageSharp {
                        fixed(height: 630, width: 1200) {
                            src
                        }
                    }
                }
            }
        `,
    );
};

export default useSiteMetadata;
