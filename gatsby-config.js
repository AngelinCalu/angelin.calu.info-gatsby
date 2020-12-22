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
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
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
        `gatsby-plugin-postcss`,
        `gatsby-plugin-react-helmet`,
    ],
};
