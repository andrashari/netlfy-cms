import React from 'react'
import PropTypes from 'prop-types'

import { StaticQuery, graphql } from 'gatsby'

import BookingForm from '../../../components/forms/BookingForm';
import Layout from "../../../components/layout"
import Heading from '../../../components/Heading';
import Gallery from '../../../components/imageRepresentation/Gallery';
import {
    DriveIcon,
    HeadLampIcon,
    TentIcon,
    SleepIcon,
    TowelIcon,
    BarbecueIcon,
    GasCartridgeIcon,
    ChildSeatIcon,
    HighwayPassIcon,
    BicycleIcon
} from '../../../components/svgs/icons';

import { Location } from '@reach/router';

const style = {
    card: {
        border: '1px solid black',
        padding: 0
    },
    image: {
        width: '100%',
        maxHeight: '300px'
    }
}

export const CamperPageTemplate = ({
    name,
    thumbnail,
    //images,
    description,
    drives,
    sleeps,
    basicSpecs,
    included,
    extras
}) => {

    const images = [
        { src: 'https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?dpr=1&auto=format&crop=faces&fit=crop&w=310&h=310', orientation: 'square' },
        { src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?dpr=1&auto=format&crop=faces&fit=crop&w=240&h=150', orientation: 'landscape' },
        { src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?dpr=1&auto=format&crop=faces&fit=crop&w=240&h=150', orientation: 'landscape' },
        { src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?dpr=1&auto=format&crop=faces&fit=crop&w=240&h=150', orientation: 'landscape' },
        { src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?dpr=1&auto=format&crop=faces&fit=crop&w=240&h=150', orientation: 'landscape' },
    ]

    return (
        <Layout className="section">
            <div className="container content">
                <div className="columns">
                    <div className="column is-8">
                        <img src={thumbnail} style={style.image} />
                    </div>
                    <div className="column is-4" >
                        <BookingForm />
                    </div>
                </div>
                <div className="columns">
                    <div className="columns is-full" >
                        <Heading content={name} type={"h1"} />
                        <p>{description}</p>
                        <Gallery images={images}></Gallery>
                        <p>{drives}</p>
                        <p>{sleeps}</p>
                        <ul>
                            {basicSpecs.map((spec, index) => spec ? <li key={index}>{spec}</li> : null)}
                        </ul>
                        <ul>
                            {included.map((included, index) => included ? <li key={index}>{included}</li> : null)}
                        </ul>
                        <ul>
                            {extras.map((extra, index) => extra ? <li key={index}>{extra}</li> : null)}
                        </ul>
                    </div>
                    <div>
                        <Heading content={'Extras'} type={"h2"} />
                        <DriveIcon />
                        <HeadLampIcon />
                        <TentIcon />
                        <SleepIcon />
                        <TowelIcon />
                        <BarbecueIcon />
                        <GasCartridgeIcon />
                        <ChildSeatIcon />
                        <HighwayPassIcon />
                        <BicycleIcon />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

/*CamperPageTemplate.propTypes = {
    camper: PropTypes.object
}*/

export const CamperPageWithoutLocation = ({ data }) => {
    const { edges } = data.allCamper;
    const camper = edges[1].node
    console.log(camper);
    return (
        <div>
            <CamperPageTemplate
                name={camper.name}
                thumbnail={camper.thumbnail}
                images={camper.images}
                description={camper.description}
                drives={camper.drives._numberInt}
                sleeps={camper.sleeps._numberInt}
                basicSpecs={camper.basicSpecs}
                included={camper.included}
                extras={camper.extras}
            />
        </div>
    )
}

/*const CamperPage = ({ data }) => {
    const { edges } = data.allCamper;
    return (
        <div>
            <Location>
                {({ navigate, location }) => {
                    const id = parseInt(location.pathname.split('/').pop().trim());
                    const camper = edges[1].node;
                    console.log(camper);
                    return <CamperPageWithoutLocation camper={camper} />
                }}
            </Location >
        </div>
    )
}*/

/*CamperPage.propTypes = {
                data: PropTypes.shape({
                allCamper: PropTypes.shape({
                edges: PropTypes.arrayOf(
                PropTypes.object
            )
        }),
    }),
}*/


//(id: {eq: $id })
export default () => (
    <StaticQuery
        query={graphql`
            query CamperQuery {
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
            <CamperPageWithoutLocation data={data} />
        )}
    />
)
