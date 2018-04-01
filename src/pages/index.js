import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import 'antd/dist/antd.css';

import BookingForm from '../components/forms/BookingForm'

export default class IndexPage extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
            <h1 className="has-text-weight-bold is-size-2">Booking Test</h1>
            <BookingForm />
        </div>
      </section>
    )
  }
}