import React from 'react'
import PropTypes from 'prop-types'

import Heading from '../components/Heading';
import HorizontalList from './../components/layout/HorizontalList';
import ListItem from '../components/layout/ListItem'

import { DriveIcon, SleepIcon } from './../components/svgs/icons';

import fonts from './../assets/theme/fonts';
import { convertToKebabCase } from './../components/utils/utils';

const style = {
    card: {
        padding: 0,
        background: '#fff'
    },
    image: {
        width: '100%',
        maxHeight: '300px'
    },
    info: {
        justifyContent: 'space-between',

    },
    iconContainer: {
        width: '25%',
        display: 'inherit',
        justifyContent: 'space-between'
    },
    camperName: {
        fontSize: '20px'
    },
    description: {
        fontSize: '12px'
    },
    readMore: {
        ...fonts.headerFont,
        ...{
            fontSize: '40px',
            letterSpacing: -1,
            height: '122px',
            lineHeight: '122px',
            color: 'rgba(0, 0, 0, .85)',
            fontWeight: 700,
        }
    }
}

const renderIcons = (type, number) => {
    let html = []

    for (let i = 0; i < number; i++) {
        if (type == 'drives') {
            html.push(<li style={{ display: 'inline', padding: '3px' }} ><DriveIcon size={40} /></li>)
        }
        else if (type == 'sleeps') {
            html.push(<li style={{ display: 'inline', padding: '3px' }} ><SleepIcon size={40} /></li>)
        }
    }

    return html;
}

export const CamperTemplate = ({
    name,
    thumbnail,
    description,
    drives,
    sleeps,
}) => {

    return (
        <ListItem>
            <Heading content={name} type={"h2"} location={"sectionTitle"} />
            <div className="columns">
                <div className="column is-10 is-offset-1" style={style.card}>
                    <img src={thumbnail} style={style.image} />
                    <div style={{ display: 'flex', padding: '20px 50px', justifyContent: 'space-between' }}>
                        <div style={{ ...style.info, ...{ width: '40%', maxWidth: '218px' } }} >
                            <h4 style={style.camperName}>{name}</h4>
                            <p style={style.description}>{description}</p>
                        </div>

                        <div style={style.iconContainer}>
                            <div style={style.info}>
                                <Heading content={"DRIVES"} type={"h4"} location={"info"} ></Heading>
                                <HorizontalList>{renderIcons('drives', drives._numberInt)}</HorizontalList>
                            </div>

                            <div style={style.info}>
                                <Heading content={"SLEEPS"} type={"h4"} location={"info"} ></Heading>
                                <HorizontalList>{renderIcons('sleeps', sleeps._numberInt)}</HorizontalList>
                            </div>
                        </div>

                        <div style={style.info}>
                            <span><a href={`/campers/${convertToKebabCase(name)}`} style={style.readMore}>Read more</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </ListItem>
    )
}

CamperTemplate.propTypes = {
    camper: PropTypes.object
}

const Camper = ({ data }) => {
    const { node: camper } = data;
    return (
        <CamperTemplate
            name={camper.name}
            thumbnail={camper.thumbnail}
            description={camper.description}
            drives={camper.drives}
            sleeps={camper.sleeps}
        />
    )
}

Camper.propTypes = {
    camper: PropTypes.object
}

export default Camper
