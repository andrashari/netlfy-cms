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

import { ExtrasIcons } from '../components/svgs/ExtrasIcons'

import { convertToKebabCase, chunkArray } from './../components/utils/utils';

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
    features,
    extras
}) => {
    /*const images1 = [
        { src: 'https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?dpr=1&auto=format&crop=faces&fit=crop&w=310&h=310', orientation: 'square' },
        { src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?dpr=1&auto=format&crop=faces&fit=crop&w=240&h=150', orientation: 'landscape' },
        { src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?dpr=1&auto=format&crop=faces&fit=crop&w=240&h=150', orientation: 'landscape' },
        { src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?dpr=1&auto=format&crop=faces&fit=crop&w=240&h=150', orientation: 'landscape' },
        { src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?dpr=1&auto=format&crop=faces&fit=crop&w=240&h=150', orientation: 'landscape' },
    ]*/
    const features1 = chunkArray(features, 3)[0];
    const features2 = chunkArray(features, 3)[1];
    const features3 = chunkArray(features, 3)[2];
    return (
        <Layout className="section">
            <div className="container content">
                <div className="columns">
                    <div className="column is-8">
                        <img src={`../img/photos/campers/${convertToKebabCase(thumbnail.folder)}/${thumbnail.type}/${thumbnail.url}`} style={style.image} />
                    </div>
                    <div className="column is-4" >
                        <BookingForm camper={name} />
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
                    <Gallery images={images}></Gallery>
                </Section>
            </div>
            <div className="content" style={{ background: colors.lightGrey }}>
                <Heading content={"FEATURES"} type={"h3"} style={{ margin: '40px' }} />
                <Section className="features-wrapper" style={{ justifyContent: 'center' }}>
                    <ul style={{ float: 'left', width: '30%' }}>
                        {features1.map((included, index) => included.name ? <li key={index}>{included.name}</li> : '')}
                    </ul>
                    <ul style={{ float: 'left', width: '30%' }}>
                        {features2.map((included, index) => included.name ? <li key={index}>{included.name}</li> : '')}
                    </ul>
                    <ul style={{ float: 'left', width: '30%' }}>
                        {features3.map((included, index) => included.name ? <li key={index}>{included.name}</li> : '')}
                    </ul>
                </Section>
            </div>

            <div className="content">
                <Heading content={"EXTRAS"} type={"h2"} style={{ margin: '40px' }} />
                <Section className="extras-wrapper" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    <ExtrasIcons data={extras} />
                </Section>
            </div>
            <div className="content" style={{ background: colors.lightGrey }}>
                <Heading content={"VEHICLE SPECIFICATIONS"} type={"h3"} style={{ margin: '40px' }} />
                <Section>
                    <table style={{
                        width: '800px',
                        margin: 'auto',
                        opacity: 0.7,
                    }} >
                        <tbody>
                            {specifications.map((spec, index) => spec.name ? <tr
                                key={index}>
                                <td style={{ ...{ padding: '7px', width: '70%', borderBottom: '1px solid #000' }, ...fonts.bodyText }}>
                                    {spec.type}
                                </td>
                                <td style={{ ...{ padding: '7px', borderBottom: '1px solid #000' }, ...fonts.bodyText }}>
                                    {spec.name}
                                </td>
                            </tr> : '')}
                        </tbody>
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
    const camper = edges[0].node
    const thumbnail = camper.images.filter(img => img.type == 'thumbnail')[0]
    console.log(thumbnail);
    let images = camper.images
        .filter(img => img.type == 'mosaic')
        .map(img => ({
            src: `../img/campers/${convertToKebabCase(img.folder)}/${img.type}/${img.url}`,
            orientation: img.orientation
        }))
        .sort(function (a, b) {
            return a.orientation == "landscape"
                ? 1    // Move it down the list
                : 0;   // Keep it the same
        })
        .sort(function (a, b) {
            return b.orientation == "landscape"
                ? 0    // Move it up the list
                : 1;   // Keep it the same
        });

    const features = [...[{ name: `Travels ${camper.travels}` }, { name: `Sleeps ${camper.sleeps}` }], ...camper.includeds]
    return (
        <div>
            <CamperPageTemplate
                name={camper.name}
                thumbnail={thumbnail}
                images={images}
                description={camper.description}
                travels={camper.travels}
                sleeps={camper.sleeps}
                specifications={camper.specifications}
                features={features}
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
            query CamperQuery1 {
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
