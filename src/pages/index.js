import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import "../assets/fonts/font.css";
import "../assets/theme/style.css";
import { Button } from "antd";

import { isAuthenticated, logOut, currentUser } from "../components/utils/Auth";

import BookingForm from "../components/forms/BookingForm";

import { insertVans } from "../components/utils/Db";

import Heading from '../components/Heading'

import HeroSection from "../components/sections/HeroSection";
import VansSection from "../components/sections/VansSection";
import FaqList from "../components/sections/FaqList";
import TestimonialList from "../components/sections/TestimonialList";
import TeamList from "../components/sections/TeamList";
import VideoSection from "../components/sections/VideoSection";
import InstagramSection from "../components/sections/InstagramSection";

import Tiles from "../components/imageRepresentation/Tiles"

export default class IndexPage extends Component {
    render() {
        const { data } = this.props
        const { edges: result } = data.allMarkdownRemark
        return (
            <div>
                <HeroSection data={result} />

                <section className="section">
                    <div className="container">
                        <Heading content={"Cielito Lindo"} type={"h2"} />
                        <VansSection />
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <h1 className="has-text-weight-bold is-size-2">Booking Test</h1>
                        <BookingForm />
                        <Button type="primary" onClick={isAuthenticated}>Check Auth</Button>
                        <Button type="primary" onClick={logOut}>logOut</Button>
                        <Button type="primary" onClick={currentUser}>currentUser</Button>
                        <Button type="primary" onClick={insertVans}>insertVans</Button>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <h2 className="has-text-weight-bold is-size-1">Q & A</h2>
                        <FaqList data={result} />
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <h2 className="has-text-weight-bold is-size-1">TestimonialList</h2>
                        <TestimonialList data={result} />
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <h2 className="has-text-weight-bold is-size-1">Meet our crew</h2>
                        <TeamList data={result} />
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <h2 className="has-text-weight-bold is-size-1">Video</h2>
                        <VideoSection data={result} />
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <h2 className="has-text-weight-bold is-size-1">Instagram</h2>
                        <InstagramSection data={result} />
                    </div>
                </section>
            </div>
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

export const pageQuery = graphql`
    query pageQuery {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        heroUrl
                        faqQuestion
                        faqAnswer
                        testimonialImageSource
                        testimonialName
                        testimonialQuote
                        teamName
                        teamRole
                        teamImageSource
                        teamIntroduction
                        teamEmail
                        teamPhone
                        videoUrl
                        videoPoster
                        instagramUrl
                    }
                }
            }
        }
    }
  `;