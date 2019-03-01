module.exports = {
    siteMetadata: {
        title: 'Alfresko Campers',
        description: 'This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        /*{
            resolve: 'gatsby-plugin-page-transitions',
            options: {
                transitionTime: 500
            }
        },*/
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                precision: 8,
                includePaths: [
                    require('path').resolve(__dirname, 'node_modules')
                ],
            },
        },
        {
            // keep as first gatsby-source-filesystem plugin for gatsby image support
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static/img`,
                name: 'uploads',
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
                path: `${__dirname}/static/img/photos`,
                name: 'photos',
            },
        },
        {
            resolve: `gatsby-source-instagram`,
            options: {
                username: `alfreskocampers`,
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-relative-images',
                        options: {
                            name: 'uploads',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 2048,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: 'static',
                        }
                    }
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
            options: {
                develop: true,            // Activates purging in npm run develop
                purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
            },
        }, // must be after other CSS plugins
        {
            resolve: 'gatsby-plugin-netlify',
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
            },
        }, // make sure to keep it last in the array
    ],
}