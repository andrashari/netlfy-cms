import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { BarLoader } from 'react-spinners'

import Van from '../../templates/van'

export default class VansSection extends Component {

    state = {
        vans: [],
        isLoading: true
    }

    componentDidMount() {
        // fetchVans
        fetch("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/alfreskobookingadmin-vwutk/service/VansAPI/incoming_webhook/fetchVans?secret=secret", {
            method: 'GET'
        })
        .then(res => res.json())
        .then(vans => 
            this.setState({ isLoading: false, vans: vans }))
        .catch(e => console.log('error: ', e))
    }

    render() {
        const { vans } = this.state
        return this.state.isLoading ? <BarLoader color={'#123abc'} loading={true} /> : vans.map((van, index) => (
            <Van van={van} key={index} />
        ))
    }
}

VansSection.propTypes = {
    vans: PropTypes.object
}