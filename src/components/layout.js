import React from 'react'
import Helmet from 'react-helmet'

import '../assets/all.sass'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import CookieConsent from "react-cookie-consent";
import Section from '../components/layout/Section'

import PageTransition from 'gatsby-plugin-page-transitions'

import { TypographyStyle } from 'react-typography'
// Best practice is to have a typography module
// where you define your theme.
//import typography from '../assets/theme/typography'


//import { withRouter } from 'react-router'

const Layout = ({ children, location }) => (
    <div style={{ paddingBottom: '80px', position: 'relative' }}>
        <Helmet title="Home | Gatsby + Netlify CMS" />
        <Navbar />
        <PageTransition>
            {children}
        </PageTransition>

        <Footer />

        <CookieConsent
            location="bottom"
            buttonText="I accept"
            cookieName="cookie-consent"
            style={{ background: "#2B373B" }}
            buttonStyle={{
                position: 'absolute',
                right: '40px',
                top: '15px',
                backgroundColor: "#b5a750",
                color: "#fff",
                fontSize: "13px"
            }}
            expires={150}
        >
            <Section style={{ padding: '5px' }}>
                We use cookies to ensure that we give you the best experience on our website.
                If you continue without changing your settings, we'll assume that you are happy to receive all cookies on this website.
            However, if you would like to, you can change your cookie settings at any time <a href="/cookie-policy">Cookie Policy</a>, click here for more info.”
        </Section>
        </CookieConsent>
    </div>
)

//export default withRouter(Layout)
export default Layout