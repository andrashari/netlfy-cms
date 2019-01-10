import React, { Component } from 'react';
import PropTypes from "prop-types";

import Section from '../../components/layout/Section'

import ContactForm from "../../components/forms/ContactForm";
//import InstagramSection from "../../components/Sections/InstagramSection";

export default class ContactPage extends Component {
    render() {
        return (
            <div>
                <h2>Contact Us!</h2>
                <Section>
                    <ContactForm />
                </Section>
            </div>
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