import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import 'antd/dist/antd.css';

import BookingForm from '../components/forms/BookingForm'

import { Button } from 'antd'
import { isAuthenticated, logOut, currentUser } from '../utils/Auth'

export default class IndexPage extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
            <h1 className="has-text-weight-bold is-size-2">Booking Test</h1>
            <BookingForm />
            <Button type="primary" onClick={isAuthenticated}>Check Auth</Button>
            <Button type="primary" onClick={logOut}>logOut</Button>
            <Button type="primary" onClick={currentUser}>currentUser</Button>
        </div>
      </section>
    )
  }
}