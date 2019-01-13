import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import "../assets/fonts/font.css";
import "../assets/theme/style.css";
import { Button } from "antd";
import colors from './../assets/theme/colors';

import { isAuthenticated, logOut, currentUser } from "../components/utils/Auth";

import BookingForm from "../components/forms/BookingForm";

import { resetCampers } from "../components/utils/Db";

import Layout from "../components/layout"
import Heading from '../components/Heading'
import Section from '../components/layout/Section'

import HeroSection from "../components/sections/HeroSection";
import { TitleImageIcon } from '../components/svgs/images';

import CampersSection from "../components/sections/CampersSection";

export default class IndexPage extends Component {
    render() {
        const { location } = this.props;
        //const { data } = this.props
        //const { edges: result } = data.allMarkdownRemark
        return (
            <Layout>

                <HeroSection data={{ url: 'img/home-page-hero.jpg' }} />

                <Section style={{ marginTop: '4rem', paddingBottom: '3rem' }} >
                    <TitleImageIcon />
                </Section>

                <Section style={{ background: colors.lightGrey }}>
                    <CampersSection />
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