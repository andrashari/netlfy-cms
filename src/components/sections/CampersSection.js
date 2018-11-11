import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { BarLoader } from 'react-spinners'

import Camper from '../../templates/camper'

export default class CampersSection extends Component {

    state = {
        campers: [],
        isLoading: true
    }

    componentDidMount() {
        // fetchCampers
        fetch("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/alfreskobookingadmin-vwutk/service/CampersAPI/incoming_webhook/fetchCampers?secret=secret", {
            method: 'GET'
        })
            .then(res => res.json())
            .then(campers =>
                this.setState({ isLoading: false, campers: campers }))
            .catch(e => console.log('error: ', e))
    }

    render() {
        const { campers } = this.state
        return this.state.isLoading ? <BarLoader color={'#123abc'} loading={true} /> : campers.map((camper, index) => (
            <Camper camper={camper} key={index} />
        ))
    }
}

CampersSection.propTypes = {
    campers: PropTypes.object
}
