module.exports = {
    siteMetadata: {
        title: `Angelin Calu`,
        description: `Angelin Calu is a Full-Stack developer and Shipbuilding Design Engineer based in Turku, Finland. Sometimes he also writes about stuff.`,
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
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
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
