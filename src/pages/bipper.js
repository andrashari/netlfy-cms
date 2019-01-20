import React from 'react'
import PropTypes from 'prop-types'

import { StaticQuery, graphql } from 'gatsby'

import colors from '../assets/theme/colors';
import fonts from './../assets/theme/fonts';

import BookingForm from '../components/forms/BookingForm';
import Layout from "../components/layout"
import Section from "../components/layout/Section"
import Heading from '../components/Heading';
import Gallery from '../components/imageRepresentation/Gallery';

import { convertToKebabCase } from './../components/utils/utils';

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
    images,
    description,
    travels,
    sleeps,
    specifications,
    includeds,
    extras
}) => {
    const images1 = [
        { src: 'https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?dpr=1&auto=format&crop=faces&fit=crop&w=310&h=310', orientation: 'square' },
        { src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?dpr=1&auto=format&crop=faces&fit=crop&w=240&h=150', orientation: 'landscape' },
        { src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?dpr=1&auto=format&crop=faces&fit=crop&w=240&h=150', orientation: 'landscape' },
        { src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?dpr=1&auto=format&crop=faces&fit=crop&w=240&h=150', orientation: 'landscape' },
        { src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?dpr=1&auto=format&crop=faces&fit=crop&w=240&h=150', orientation: 'landscape' },
    ]

    console.log(images)
    return (
        <Layout className="section">
            <div className="container content">
                <div className="columns">
                    <div className="column is-8">
                        <img src={`../img/campers/${convertToKebabCase(thumbnail.folder)}/${thumbnail.type}/${thumbnail.url}`} style={style.image} />
                    </div>
                    <div className="column is-4" >
                        <BookingForm />
                    </div>
                </div>
            </div>
            <div className="content" style={{ background: colors.lightGrey }}>
                <Section>
                    <Heading content={name} type={"h1"} />
                    <p>{description}</p>
                </Section>
            </div>
            <div className="content" style={{ overflow: 'hidden' }}>
                <Section>
                    <Gallery images={images1}></Gallery>
                </Section>
            </div>
            <div className="content" style={{ background: colors.lightGrey }}>
                <Heading content={"FEATURES"} type={"h3"} style={{margin: '40px'}} />
                <Section>
                    <p>Travels{travels}</p>
                    <p>Sleeps{sleeps}</p>
                    <ul>
                        {includeds.map((included, index) => included.name ? <li key={index}>{included.name}</li> : '')}
                    </ul>
                </Section>
            </div>

            <div className="content">
                <Heading content={"EXTRAS"} type={"h2"} style={{margin: '40px'}} />
                <Section>
                    <ul>
                        {extras.map((extra, index) => extra.name ? <li key={index}>{extra.name}</li> : '')}
                    </ul>
                </Section>
            </div>
            <div className="content" style={{ background: colors.lightGrey }}>
                <Heading content={"VEHICLE SPECIFICATIONS"} type={"h3"} style={{margin: '40px'}} />
                <Section>
                    <table style={{
                        width: '800px',
                        margin: 'auto',
                        opacity: 0.7,
                    }} >
                        {specifications.map((spec, index) => spec.name ? <tr
                            key={index}>
                            <td style={{ ...{ padding: '7px', width: '70%', borderBottom: '1px solid #000' }, ...fonts.bodyText }}>
                                {spec.type}
                            </td>
                            <td style={{ ...{ padding: '7px', borderBottom: '1px solid #000' }, ...fonts.bodyText }}>
                                {spec.name}
                            </td>
                        </tr> : '')}
                    </table>
                </Section>
            </div>
        </Layout >
    )
}

/*CamperPageTemplate.propTypes = {
    camper: PropTypes.object
}*/

const CamperPage = ({ data }) => {
    const { edges } = data.allCamper;
    const camper = edges[1].node
    console.log(camper);
    const thumbnail = camper.images.filter(img => img.type == 'camperpage')[0]
    return (
        <div>
            <CamperPageTemplate
                name={camper.name}
                thumbnail={thumbnail}
                images={camper.images}
                description={camper.description}
                travels={camper.travels}
                sleeps={camper.sleeps}
                specifications={camper.specifications}
                includeds={camper.includeds}
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
                            images {
                                folder
                                type
                                url
                            }
                            description
                            travels
                            sleeps
                            specifications {
                                name
                                type
                            }
                            includeds {
                                name
                            }
                            extras {
                                name
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <CamperPage data={data} />
        )}
    />
)
