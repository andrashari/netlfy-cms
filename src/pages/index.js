import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import "../assets/fonts/font.css";
import "../assets/theme/style.css";
import { Button } from "antd";
import colors from './../assets/theme/colors';

import { isAuthenticated, logOut, currentUser } from "../components/utils/Auth";

import BookingForm from "../components/forms/BookingForm";

import { resetCampers } from "../components/utils/Db";

import Heading from '../components/Heading'
import Section from '../components/layout/Section'

//import HeroSection from "../components/Sections/HeroSection";
import { TitleImageIcon } from '../components/svgs/images';

//import CampersSection from "../components/Sections/CampersSection";
/*
import FaqList from "../components/Sections/FaqList";
import TestimonialList from "../components/Sections/TestimonialList";
import TeamList from "../components/Sections/TeamList";
import VideoSection from "../components/Sections/VideoSection";
*/

export default class IndexPage extends Component {
    render() {
        //const { data } = this.props
        //const { edges: result } = data.allMarkdownRemark
        return (
            <div>


                <Section style={{ marginTop: '4rem', paddingBottom: '3rem' }} >
                    <TitleImageIcon />
                </Section>

                <Section style={{ background: colors.lightGrey }}>

                </Section>

                {/*
                <CampersSection />
                <HeroSection data={{url: '/img/home-page-hero.jpg'}} />
                <Section>
                    <h1 className="has-text-weight-bold is-size-2">Booking Test</h1>
                    <BookingForm />
                    <Button type="primary" onClick={isAuthenticated}>Check Auth</Button>
                    <Button type="primary" onClick={logOut}>logOut</Button>
                    <Button type="primary" onClick={currentUser}>currentUser</Button>
                    <Button type="primary" onClick={resetCampers}>resetCampers</Button>
                </Section>

                <Section>
                    <h2 className="has-text-weight-bold is-size-1">Q & A</h2>
                    <FaqList data={result} />
                </Section>

                <Section>
                    <h2 className="has-text-weight-bold is-size-1">TestimonialList</h2>
                    <TestimonialList data={result} />
                </Section>

                <Section>
                    <h2 className="has-text-weight-bold is-size-1">Meet our crew</h2>
                    <TeamList data={result} />
                </Section>
                <Section>
                    <h2 className="has-text-weight-bold is-size-1">Video</h2>
                    <VideoSection data={result} />
                </Section>
                */
                }
            </div >
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