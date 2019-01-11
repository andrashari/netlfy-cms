const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
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
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    //fmImagesToRelative(node) // convert image paths for gatsby images

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
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