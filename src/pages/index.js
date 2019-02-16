import React, { Component } from "react";
import PropTypes from "prop-types";

import colors from './../assets/theme/colors';

import Layout from "../components/layout"
import Section from '../components/layout/Section'

import HeroSection from "../components/sections/HeroSection"
import { TitleImageIcon } from '../components/svgs/images'

import CampersSection from "../components/sections/CampersSection"
import Heading from './../components/Heading'
import WhySection from "../components/sections/WhySection"
import SocialSection from "../components/sections/SocialSection"
import InstagramPhotos from "../components/imageRepresentation/InstagramPhotos"

export default class IndexPage extends Component {
    render() {
        const { location } = this.props;
        //const { data } = this.props
        //const { edges: result } = data.allMarkdownRemark
        return (
            <Layout>

                <HeroSection data={{ url: 'img/home-page-hero.jpg' }} />

                <Section style={{ paddingBottom: 0 }}>
                    <img src="img/images/guarantee.jpg" alt="" />
                </Section>

                <Section style={{
                    paddingTop: '2rem',
                    paddingBottom: '1rem'
                }}>
                    <TitleImageIcon style={{ maxHeight: '50px' }} />
                </Section>

                <Section style={{ ...{ /*background: colors.lightGrey*/ }, ...{ display: 'flex', paddingTop: 0, paddingBottom: '3rem' } }}>
                    <CampersSection />
                </Section>

                <Section style={{ ...{ /*background: colors.lightGrey*/ }, ...{ justifyContent: 'center', display: 'flex', paddingTop: 0, paddingBottom: '1rem' } }}>
                    <Heading style={{ fontWeight: 'bold', color: '#000'}} content={"WHY ALFRESKO CAMPERS"} type={"h2"} location={"info"} ></Heading>
                </Section>

                <Section style={{ ...{ /*background: colors.lightGrey*/ }, ...{ justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', paddingTop: 0, paddingBottom: '3rem' } }}>
                    <WhySection />
                </Section>

                <Section style={{ ...{ /*background: colors.lightGrey*/ }, ...{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap', paddingTop: 0, paddingBottom: '1rem' } }}>
                    <SocialSection />
                </Section>

                <Section style={{ ...{ /*background: colors.lightGrey*/ }, ...{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap', paddingTop: 0, paddingBottom: '1rem' } }}>
                    <InstagramPhotos />
                </Section>


                {/*
                    <Section>
                        <h1 className="has-text-weight-bold is-size-2">Booking Test</h1>
                        <BookingForm />
                        <Button type="primary" onClick={isAuthenticated}>Check Auth</Button>
                        <Button type="primary" onClick={logOut}>logOut</Button>
                        <Button type="primary" onClick={currentUser}>currentUser</Button>
                        <Button type="primary" onClick={resetCampers}>resetCampers</Button>
                    </Section>
                */
                }
            </Layout>
        )
    }
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

/*export const pageQuery = graphql`
    query pageQuery {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        heroUrl
                    }
                }
            }
        }
    }
  `;*/