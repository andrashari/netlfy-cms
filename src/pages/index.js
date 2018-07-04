import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import "../assets/fonts/font.css";
import { Button } from "antd";

import { isAuthenticated, logOut, currentUser } from "../components/utils/Auth";

import BookingForm from "../components/forms/BookingForm";

import { insertVans } from "../components/utils/Db";

import VansSection from "../components/sections/VansSection";
import FaqList from "../components/sections/FaqList";
import TestimonialList from "../components/sections/TestimonialList";
import AboutUsList from "../components/sections/AboutUsList";
import VideoSection from "../components/sections/VideoSection";
import InstagramSection from "../components/sections/InstagramSection";

export default class IndexPage extends Component {
    render() {
        const { data } = this.props;
        const { edges: result } = data.allMarkdownRemark;
        return (
            <div>
                <section className="section">
                    <div className="container">
                        <h1 className="has-text-weight-bold is-size-2">
                            {" "}
                            Booking Test{" "}
                        </h1>{" "}
                        <BookingForm />
                        <Button type="primary" onClick={isAuthenticated}>
                            {" "}
                            Check Auth{" "}
                        </Button>{" "}
                        <Button type="primary" onClick={logOut}>
                            {" "}
                            logOut{" "}
                        </Button>{" "}
                        <Button type="primary" onClick={currentUser}>
                            {" "}
                            currentUser{" "}
                        </Button>{" "}
                        <Button type="primary" onClick={insertVans}>
                            {" "}
                            insertVans{" "}
                        </Button>{" "}
                    </div>{" "}
                </section>

                <section className="section">
                    <div className="container">
                        <h1>
                            {" "}
                            VansSection{" "}
                        </h1>{" "}
                        <VansSection />
                    </div>{" "}
                </section>

                <section className="section">
                    <div className="container">
                        <h1>
                            {" "}
                            FaqList{" "}
                        </h1>{" "}
                        <FaqList data={result} />{" "}
                    </div>{" "}
                </section>

                <section className="section">
                    <div className="container">
                        <h1>
                            {" "}
                            TestimonialList{" "}
                        </h1>{" "}
                        <TestimonialList data={result} />{" "}
                    </div>{" "}
                </section>

                <section className="section">
                    <div className="container">
                        <h1>
                            {" "}
                            AboutUsList{" "}
                        </h1>{" "}
                        <AboutUsList data={result} />{" "}
                    </div>{" "}
                </section>

                <section className="section">
                    <div className="container">
                        <h1>
                            {" "}
                            Video{" "}
                        </h1>{" "}
                        <VideoSection data={result} />{" "}
                    </div>{" "}
                </section>

                <section className="section">
                    <div className="container">
                        <h1>
                            {" "}
                            Instagram{" "}
                        </h1>{" "}
                        <InstagramSection data={result} />{" "}
                    </div>{" "}
                </section>
            </div>
        );
    }
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array
        })
    })
};

export const pageQuery = graphql`
    query pageQuery {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        faqQuestion
                        faqAnswer
                        testimonialImageSource
                        testimonialName
                        testimonialQuote
                        aboutUsName
                        aboutUsRole
                        aboutUsImageSource
                        aboutUsIntroduction
                        aboutUsEmail
                        aboutUsPhone
                        videoUrl
                        videoPoster
                        instagramUrl
                    }
                }
            }
        }
    }
`;
