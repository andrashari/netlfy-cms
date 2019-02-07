import React, { Component } from 'react';

import colors from '../../assets/theme/colors';

import Layout from "../../components/layout"
import Heading from '../../components/Heading'
import HeroImage from "../../components/imageRepresentation/HeroImage";
import Section from "../../components/layout/Section";

export default class CookiePolicy extends Component {
    render() {
        console.log(this.props);
        return (
            <Layout>
                <div style={{ background: colors.lightGrey }}>
                    <Heading content={"Alfresko Campers Cookie Policy"} type={"h1"} maxWidth={{ maxWidth: '50%' }} />
                    <Section style={{ paddingBottom: 0 }}>
                        <p style={{ marginBottom: 0 }}>
                            Alfresko Campers respects the privacy of all visitors of our website. This Cookie Policy describes our use of cookies on <a target="_blank" href="https://alfreskocampers.com">alfreskocampers.com</a>.
                        </p>
                        <p>
                            We may revise and update our Cookie Policy to reflect any changes in technology or legislation which may affect how we apply cookies and how you as a user, can manage them.
                        </p>
                    </Section>
                    <Section style={{ paddingBottom: 0 }}>
                        <Heading style={{ paddingBottom: '20px' }} content={"What are cookies?"} type={"h2"} />
                        <p style={{ marginBottom: 0 }}>
                            Cookies are small file of letters and numbers, that web sites place to your browser or hard drive (if you agree) and that enable sites to recognize your browser and capture and remember certain information.
                        </p>
                        <p>
                            When you visit a site that uses cookies for the first time, a cookie is downloaded onto your computer, tablet or mobile device so that the next time you visit that site, your device will remember useful information such as visited pages, log-in options and items added in the shopping cart.
                        </p>
                        <p>
                            The use of cookies is a common practice on many web sites. However, if you do not wish to receive cookies, or want to be notified of when they are placed, refer to your browser settings where you can turn off the cookie acceptance option.
                        </p>
                    </Section>
                    <Section style={{ paddingBottom: 0 }}>
                        <Heading content={"Cookies used by Alfresko Campers"} type={"h2"} />
                        <Heading style={{ paddingBottom: '20px' }} content={"Strictly necessary cookies"} type={"h3"} />
                        <p style={{ marginBottom: 0 }}>
                            These cookies enable services you have specifically asked for, for example, maintaining you logged-in during your visit on our site, or remembering you’re the content of your shopping cart. These cookies don’t usually contain any personally identifiable information and can’t be disabled. These, so called, session cookies are stored in the computer's memory only during a user's browsing session and are automatically deleted from the user's computer when the browser is closed.
                        </p>
                    </Section>
                    <Section style={{ paddingBottom: 0 }}>
                        <Heading style={{ paddingBottom: '20px' }} content={"Performance cookies"} type={"h3"} />
                        <p style={{ marginBottom: 0 }}>
                            These cookies are used to collect statistical information about visitors of the website and the pages they view.
                        </p>
                        <p>
                            These cookies don’t collect information that identifies a visitor; the information these cookies collects is aggregated and used anonymously. We use these cookies measure web traffic and site interaction, to offer you a more enjoyable experience on our site.
                        </p>
                    </Section>
                    <Section>
                        <Heading style={{ paddingBottom: '20px' }} content={"Functional cookies"} type={"h3"} />
                        <p style={{ marginBottom: 0 }}>
                            These cookies allow the website to remember choices you make and provide enhanced and more personal features.
                        </p>
                        <p>
                            For example, these cookies remember your preferences and settings, and redirect you to the mobile version when searching on your smartphone.
                        </p>
                        <p>
                            If you have an account on a particular website, a cookie on your computer lets the website remember your user name and email address so you don’t have to enter it again when you are commenting or writing a review.
                        </p>
                        <span style={{ float: 'right', fontStyle: 'italic' }}>
                            Last updated: November 2018
                        </span>
                    </Section>
                </div>
            </Layout>
        )
    }
}