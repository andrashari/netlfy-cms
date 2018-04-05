import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import 'antd/dist/antd.css';
import { Button } from 'antd'

import BookingForm from '../components/forms/BookingForm'
import { isAuthenticated, logOut, currentUser } from '../utils/Auth'

import FaqList from '../components/sections/FaqList'
import TestimonialList from '../components/sections/TestimonialList'
import AboutUsList from '../components/sections/AboutUsList'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    console.log(this.props);
    const { edges: result } = data.allMarkdownRemark
    return (
      <div>
        <section className="section">
          <div className="container">
              <h1 className="has-text-weight-bold is-size-2">Booking Test</h1>
              <BookingForm />
              <Button type="primary" onClick={isAuthenticated}>Check Auth</Button>
              <Button type="primary" onClick={logOut}>logOut</Button>
              <Button type="primary" onClick={currentUser}>currentUser</Button>
          </div>
        </section>
        
        <section className="section">
          <div className="container">
            <h2 className="has-text-weight-bold is-size-1">FaqList</h2>
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
          <h2 className="has-text-weight-bold is-size-1">AboutUsList</h2>
            <AboutUsList data={result} /> 
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
    ...faqFragment
    ...testimonialFragment
    ...aboutUsFragment
  }
`;
