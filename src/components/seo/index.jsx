import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../../hooks/useSiteMetadata';
function SEO({ description, lang, image, title, pathname, isBlogPost }) {
    const { site, ogImageDefault } = useSiteMetadata();

    const metaDescription = description || site.siteMetadata.description;
    const metaImage = `${site.siteMetadata.siteUrl}${image || ogImageDefault.childImageSharp.fixed.src}`;
    const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : site.siteMetadata.siteUrl;

    return (
        <Helmet
            htmlAttributes={{
                lang: lang || site.siteMetadata.siteLanguage,
            }}
            titleTemplate={`%s ${site.siteMetadata.title}`}
        >
            <title>{title === 'Homepage' ? ' ' : `${title} |`}</title>
            <link rel="canonical" href={canonical} />

            {/* Basic Meta Tags */}
            <meta name="description" content={metaDescription} />
            <meta name="image" content={metaImage} />
            <meta name="keywords" content={site.siteMetadata.keywords.join(', ')} />

            {isBlogPost ? <meta name="author" content={site.siteMetadata.author} /> : null}

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

            {/* Only for the landing page */}
            {!pathname ? <meta name="msvalidate.01" content="2903125B9F2CB5739B4FBD5F4802B7D4" /> : null}
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
