import React, { Component } from 'react'
import PropTypes from 'prop-types'

//import { BarLoader } from 'react-spinners'

import { StaticQuery, graphql } from 'gatsby'

import Camper from '../../templates/camper'

class CampersSection extends Component {
    render() {
        const { edges } = this.props.data.allCamper;
        /*return this.state.isLoading ? <BarLoader color={'#123abc'} loading={true} /> : campers.map((camper, index) => (
            <Camper camper={camper} key={index} />
        ))*/
        return edges.map((camper, index) => (
            <Camper data={camper} key={index} />
        ))
    }
}

/*CampersSection.propTypes = {
    campers: PropTypes.object
}*/

export default () => (
    <StaticQuery
        query={graphql`
            query CampersSectionQuery {
                allCamper {
                    edges {
                        node {
                            name
                            thumbnail
                            images
                            description
                                drives {
                                    _numberInt
                                }
                            sleeps {
                                _numberInt
                            }
                            basicSpecs
                            included
                            extras
                        }
                    }
                }
            }
        `}
        render={data => (
            <CampersSection data={data} />
        )}
    />
)
