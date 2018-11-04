import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './all.sass'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import { TypographyStyle } from 'react-typography'
// Best practice is to have a typography module
// where you define your theme.
//import typography from '../assets/theme/typography'

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet title="Home | Gatsby + Netlify CMS" />
        <Navbar />
        <div>{children()}</div>
        <Footer />
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper
