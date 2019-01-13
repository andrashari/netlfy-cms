const axios = require('axios');
const crypto = require('crypto');
const _ = require('lodash')
const path = require('path')
const {
    createFilePath
} = require('gatsby-source-filesystem')

exports.createPages = ({
    actions,
    graphql
}) => {
    const {
        createPage
    } = actions
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
        else {
            if (page.path.match(/^\/campers/)) {
                page.matchPath = "/campers/*"

                // Update the page.
                createPage(page)

            }
        }
    }
}

exports.onCreateNode = ({
    node,
    actions,
    getNode
}) => {
    const {
        createNodeField
    } = actions
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

exports.sourceNodes = async ({ actions }) => {
    const { createNode } = actions;

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