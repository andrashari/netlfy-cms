import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'regenerator-runtime/runtime'

import { BarLoader } from 'react-spinners'

import Van from '../../templates/van'

import { fetchVans } from '../../mock'

export default class VansSection extends Component {

    state = {
        vans: [],
        isLoading: false
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        const vans = await fetchVans()
        this.setState({ vans });
        this.setState({ isLoading: false });
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