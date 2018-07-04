module.exports = {
    siteMetadata: {
        title: 'Alfresko Campers',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        'gatsby-plugin-styled-components',
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/assets/theme/typography.js`,
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

exports.modifyWebpackConfig = ({
    config,
    stage
}) => {
    if (stage === "build-html") {
        config.loader("null", {
            test: /bad-module/,
            loader: "null-loader",
        });
    }
};