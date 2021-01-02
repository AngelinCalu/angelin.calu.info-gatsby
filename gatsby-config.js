module.exports = {
    siteMetadata: {
        title: `Angelin Calu | Full-Stack Developer`,
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
        `gatsby-image`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-remark-images`,
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
                policy: [{ userAgent: '*', allow: '/' }]
            }
        }
    ],
};
