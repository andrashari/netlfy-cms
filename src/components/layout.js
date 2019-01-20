import React from 'react'
import Helmet from 'react-helmet'

import '../assets/all.sass'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import { TypographyStyle } from 'react-typography'
// Best practice is to have a typography module
// where you define your theme.
//import typography from '../assets/theme/typography'


//import { withRouter } from 'react-router'

const Layout = ({ children, location }) => (
  <div>
        <Helmet title="Home | Gatsby + Netlify CMS" />
        <Navbar/>
            {children}
        <Footer />
  </div>
)

//export default withRouter(Layout)
export default Layout