module.exports = {
    siteMetadata: {
        title: 'Alfresko Campers',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        'gatsby-plugin-styled-components',
        //TODO typography
        /*{
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/assets/theme/typography.js`,
            },
        },*/
        /*{
            resolve: `gatsby-plugin-create-client-paths`,
            options: { prefixes: [`/contact/*`] },
        },*/
        {
            resolve: `gatsby-remark-images`,
            options: {
                // It's important to specify the maxWidth (in pixels) of
                // the content container as this plugin uses this as the
                // base for generating different widths of each image.
                maxWidth: 700,
            },
        },
        //TODO nprogress
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                // Setting a color is optional.
                color: `tomato`,
                // Disable the loading spinner.
                showSpinner: false,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/assets/img`,
                name: 'images',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [],
            },
        },
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
            },
        },
    ],
}
