import React, { Component } from 'react';
import PropTypes from "prop-types";

import Layout from "../../components/layout"
import Heading from '../../components/Heading'
import Section from '../../components/layout/Section'

import ContactForm from "../../components/forms/ContactForm";
//import InstagramSection from "../../components/Sections/InstagramSection";

export default class ContactPage extends Component {
    render() {
        return (
            <Layout location={this.props.location} >
                <Heading content={"Contact Us"} type={"h1"} />
                <Section>
                    <ContactForm />
                </Section>
            </Layout>
        )
    }
}

//Later
//<InstagramSection

/*ContactPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export const pageQuery = graphql`
    query pageQuery {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        instagramUrl
                    }
                }
            }
        }
    }
  `;*/