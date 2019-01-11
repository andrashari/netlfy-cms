const axios = require('axios');
const crypto = require('crypto');

const _ = require('lodash')
const path = require('path')
const {
    createFilePath
} = require('gatsby-source-filesystem')

exports.createPages = ({
    boundActionCreators,
    graphql
}) => {
    const {
        createPage
    } = boundActionCreators
    // Implement the Gatsby API “onCreatePage”. This is
    // called after every page is created.
    exports.onCreatePage = async ({ page }) => {

        // page.matchPath is a special key that's used for matching pages
        // only on the client.
        if (page.path.match(/^\/contact/)) {
            page.matchPath = "/contact/*"

            // Update the page.
            createPage(page)

        }
    }
    /*
        teamName
        teamRole
        teamImageSource
        teamIntroduction
        teamEmail
        teamPhone
        testimonialImageSource
        testimonialName
        testimonialQuote
        faqQuestion
        faqAnswer
        videoUrl
        videoPoster
        instagramUrl
    */
    return graphql(`
    query pageQuery {
      allMarkdownRemark {
        edges {
            node {
                frontmatter {
                    heroUrl
                    instagramUrl
                }
            }
        }
      }
    }
  `).then(result => {
        if (result.errors) {
            result.errors.forEach(e => console.error(e.toString()))
            return Promise.reject(result.errors)
        }

        /*const posts = result.data.allMarkdownRemark.edges
        posts.forEach(edge => {
          const id = edge.node.id
          createPage({
            path: edge.node.fields.slug,
            tags: edge.node.frontmatter.tags,
            component: path.resolve(
              `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
            ),
            // additional data can be passed via context
            context: {
              id,
            },
          })
        })
        // Tag pages:
        let tags = []
        // Iterate through each post, putting all found tags into `tags`
        posts.forEach(edge => {
          if (_.get(edge, `node.frontmatter.tags`)) {
            tags = tags.concat(edge.node.frontmatter.tags)
          }
        })
        // Eliminate duplicate tags
        tags = _.uniq(tags)
        // Make tag pages
        tags.forEach(tag => {
          const tagPath = `/tags/${_.kebabCase(tag)}/`
          createPage({
            path: tagPath,
            component: path.resolve(`src/templates/tags.js`),
            context: {
              tag,
            },
          })
        })*/
    })
}

exports.onCreateNode = ({
    node,
    boundActionCreators,
    getNode
}) => {
    const {
        createNodeField
    } = boundActionCreators

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({
            node,
            getNode
        })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}

exports.sourceNodes = async ({ boundActionCreators }) => {
    const { createNode } = boundActionCreators;

    // fetch raw data from the randomuser api
    const fetchCampers = () => axios.get(`https://webhooks.mongodb-stitch.com/api/client/v2.0/app/alfreskobookingadmin-vwutk/service/CampersAPI/incoming_webhook/fetchCampers?secret=secret`);

    // await for results
    const res = await fetchCampers();

    // map into these results and create nodes
    res.data.map((camper, i) => {
        // Create your node object
        const camperNode = {
            // Required fields
            id: `${i}`,
            parent: `__SOURCE__`,
            internal: {
                type: `Camper`, // name of the graphQL query --> allCamper {}
                // contentDigest will be added just after
                // but it is required
            },
            children: [],

            // Other fields that you want to query with graphQl
            name: camper.name,
            thumbnail: camper.thumbnail,
            images: camper.images,
            description: camper.description,
            drives: camper.drives,
            sleeps: camper.sleeps,
            basicSpecs: camper.basicSpecs,
            included: camper.included,
            extras: camper.extras,
            // etc...
        }

        // Get content digest of node. (Required field)
        const contentDigest = crypto
            .createHash(`md5`)
            .update(JSON.stringify(camperNode))
            .digest(`hex`);
        // add it to userNode
        camperNode.internal.contentDigest = contentDigest;

        // Create node with the gatsby createNode() API
        createNode(camperNode);
    });

    return;
}

/*exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /bad-module/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }*/