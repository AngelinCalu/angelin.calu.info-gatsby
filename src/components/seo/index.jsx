import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../../hooks/useSiteMetadata';
function SEO({ description, lang, image, title, pathname, isBlogPost }) {
    const { site } = useSiteMetadata();

    const metaDescription = description || site.siteMetadata.description;
    const metaImage = `${site.siteMetadata.siteUrl}${image || site.siteMetadata.image}`;
    const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : site.siteMetadata.siteUrl;

    return (
        <Helmet
            htmlAttributes={{
                lang: lang || site.siteMetadata.siteLanguage,
            }}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
        >
            <title>{title || site.siteMetadata.title}</title>
            <link rel="canonical" href={canonical} />

            {/* Basic Meta Tags */}
            <meta name="description" content={metaDescription} />
            <meta name="image" content={metaImage} />
            <meta name="keywords" content={site.siteMetadata.keywords.join(', ')} />

            {/* Open Graph Meta Tags */}
            <meta property="og:url" content={canonical} />
            {/* og:type set to 'website' may be redundant as it's the default choice anyways */}
            <meta property="og:type" content={isBlogPost ? 'article' : 'website'} />
            <meta property="og:title" content={title} />
            <meta property="og:locale" content={site.siteMetadata.siteLocale} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={site.siteMetadata.twitterUsername} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />
        </Helmet>
    );
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    pathname: PropTypes.string,
    isBlogPost: PropTypes.bool,
};

export default SEO;
