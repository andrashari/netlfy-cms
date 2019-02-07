import React from 'react'
import PropTypes from 'prop-types'

import { StaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"

import Heading from '../components/Heading';
import HorizontalList from './../components/layout/HorizontalList';
import ListItem from '../components/layout/ListItem'

import { AcIcon } from './../components/svgs/AcIcon';

import fonts from './../assets/theme/fonts';
import { convertToKebabCase } from './../components/utils/utils';

const style = {
    card: {
        padding: 0,
        background: '#fff'
    },
    image: {
        width: '100%',
    },
    info: {
        marginRight: '20px'
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
        if (type == 'travels') {
            html.push(<li style={{ display: 'inline', padding: '3px' }} ><AcIcon type={type} style={{ height: 40 }} /></li>)
        }
        else if (type == 'sleeps') {
            html.push(<li style={{ display: 'inline', padding: '3px' }} ><AcIcon type={type} size={40} /></li>)
        }
    }

    return html;
}

export const CamperTemplate = ({
    name,
    thumbnail,
    shortDescription,
    travels,
    sleeps,
    key
}) => {
    return (
        <ListItem key={key}>
            <Heading content={name} type={"h2"} location={"sectionTitle"} />
            <div className="columns">
                <div className="column is-10 is-offset-1" style={style.card}>
                    <Link
                        to={`/${convertToKebabCase(name)}`}
                    >
                        <img
                            src={`img/photos/campers/${convertToKebabCase(thumbnail.folder)}/${thumbnail.type}/${thumbnail.url}`}
                            style={style.image}
                        />
                    </Link>
                    <div style={{ flexWrap: 'wrap', display: 'flex', padding: '20px 50px', justifyContent: 'space-between' }}>
                        <div className="camper-heading-wrapper" style={{ ...style.info, ...{ width: '40%', maxWidth: '218px' } }} >
                            <Link
                                to={`/${convertToKebabCase(name)}`}
                            >
                                <Heading content={name} type={"h4"} location={"info"} ></Heading>
                            </Link>
                            <p style={style.description}>{shortDescription}</p>
                        </div>

                        <div className="camper-list-wrapper" style={style.iconContainer}>
                            <div style={style.info} >
                                <Heading content={"TRAVELS"} type={"h4"} location={"info"} ></Heading>
                                <HorizontalList>{renderIcons('travels', travels)}</HorizontalList>
                            </div>

                            <div style={style.info}>
                                <Heading content={"SLEEPS"} type={"h4"} location={"info"} ></Heading>
                                <HorizontalList>{renderIcons('sleeps', sleeps)}</HorizontalList>
                            </div>
                        </div>

                        <div style={style.info}>
                            <span>
                                <Link
                                    to={`/${convertToKebabCase(name)}`}
                                    style={style.readMore}>
                                    >
                                    Read more
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </ListItem>
    )
}

CamperTemplate.propTypes = {
    camper: PropTypes.object,
    key: PropTypes.number
}

const Camper = ({ data, key }) => {
    const { node: camper } = data;
    const thumbnail = camper.images.filter(img => img.type == 'homepage')[0]
    /*console.log(data);
    console.log(thumbnail);*/
    /*const thumbnail = camper.images.filter(
        img => img.type == 'homepage'
    )
    console.log(thumbnail[0]);*/
    return (
        <CamperTemplate
            name={camper.name}
            thumbnail={thumbnail}
            shortDescription={camper.shortDescription}
            travels={camper.travels}
            sleeps={camper.sleeps}
            key={key}
        />
    )
}

Camper.propTypes = {
    camper: PropTypes.object
}

export default Camper

/*export default props => (
    <StaticQuery
        query={graphql`
            {
                allFile(filter: {extension: {in: ["jpeg", "jpg", "gif", "png"]}, relativePath: {regex: "/homepage/"}}) {
                    edges {
                        node {
                            relativePath
                        }
                    }
                }
            }
        `}
        render={data => (
            <Camper data={props.data} key={props.key} thumbnail={data} />
        )}
    />
)*/