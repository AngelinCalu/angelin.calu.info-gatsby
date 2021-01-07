require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `Angelin Calu | Shipbuilding Engineer and Full-Stack Developer`,
        description: `Angelin Calu is a Full-Stack Developer and Shipbuilding Design Engineer based in Turku, Finland. Sometimes he also writes about stuff.`,
        keywords: ['Angelin Calu', 'Full-Stack developer Turku', 'Shipbuilding Engineer Turku'],
        author: `Angelin Calu`,
        image: `/default.png`,
        siteUrl: `https://angelin.calu.info`,
        siteLanguage: `en-GB`,
        siteLocale: `en_gb`,
        twitterUsername: `@AngelinCalu`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GA_TRACKING_ID,
                head: true,
                anonymize: true,
            },
        },
        `gatsby-image`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-remark-images`,
        {
            resolve: `gatsby-plugin-env-variables`,
            options: {
                allowList: ['GA_TRACKING_ID', 'MAILCHIMP_ENDPOINT'],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-images`],
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 480,
                            linkImagesToOriginal: false,
                            backgroundColor: `transparent`,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-autolink-headers',
                        options: {
                            elements: [`h2`, `h3`],
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/static/images`,
                name: `images`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Angelin Calu`,
                short_name: `Angelin Calu`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#172A4D`,
                display: `standalone`,
                icon: `src/assets/logo.svg`,
                cache_busting_mode: 'none',
            },
        },
        {
            resolve: 'gatsby-plugin-offline',
            options: {
                workboxConfig: {
                    globPatterns: ['**/icons*'],
                },
            },
        },
        `gatsby-plugin-postcss`,
        `gatsby-plugin-react-helmet`,
        `gatsby-remark-autolink-headers`,
        `gatsby-plugin-sitemap`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://angelin.calu.info',
                sitemap: 'https://angelin.calu.info/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }],
            },
        },
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: process.env.MAILCHIMP_ENDPOINT,
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                    site {
                        siteMetadata {
                            title
                            description
                            siteUrl
                            author
                            site_url: siteUrl
                        }
                    }
                }
                `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMdx } }) => {
                            return allMdx.nodes.map((node) => {
                                return Object.assign({}, node.frontmatter, {
                                    description: node.excerpt,
                                    date: node.frontmatter.date,
                                    url: site.siteMetadata.siteUrl + node.fields.slug,
                                    guid: site.siteMetadata.siteUrl + node.fields.slug,
                                    // author: site.siteMetadata.author,
                                    custom_elements: [
                                        {
                                            'content:encoded': node.html,
                                            'dc:creator': site.siteMetadata.author,
                                        },
                                    ],
                                });
                            });
                        },
                        query: `
                        {
                            allMdx(
                                limit: 100,
                                sort: { order: DESC, fields: [frontmatter___date] },
                            ) {
                                nodes {
                                    excerpt
                                    html
                                    fields { 
                                        slug 
                                    }
                                    frontmatter {
                                        title
                                        date
                                    }
                                }
                            }
                        }
                        `,
                        output: `/rss.xml`,
                        title: `Angelin Calu's blog`,
                    },
                ],
            },
        },
    ],
};
