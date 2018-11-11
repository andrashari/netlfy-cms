import React from 'react'
import PropTypes from 'prop-types'
import Heading from '../components/Heading';

const style = {
    card: {
        border: '1px solid black',
        padding: 0
    },
    image: {
        width: '100%',
        maxHeight: '300px'
    },
    info: {
        justifyContent: 'space-between',

    },
    camperName: {
        fontSize: '20px'
    },
    description: {
        fontSize: '12px'
    }
}

const renderIcons = (type, number) => {
    let html = ''

    for (let i = 0; i < number; i++) {
        if (type == 'drives') {
            html += `<li>drives</li>`
        }
        else if (type == 'sleeps') {
            html += `<li>sleeps</li>`
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
        <section className="section">
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1" style={style.card}>
                        <img src={thumbnail} style={style.image} />
                        <div style={{ display: 'flex', padding: '20px' }}>
                            <div style={{ ...style.info, ...{ width: '40%' } }} >
                                <h4 style={style.camperName}>{name}</h4>
                                <p style={style.description}>{description}</p>
                            </div>

                            <div style={style.info}>
                                <ul>{renderIcons('drives', drives.$numberInt)}</ul>
                            </div>

                            <div style={style.info}>
                                <ul>{renderIcons('sleeps', sleeps.$numberInt)}</ul>
                            </div>

                            <div style={style.info}>
                                <span><a href="#">Read more</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

CamperTemplate.propTypes = {
    camper: PropTypes.object
}

const Camper = ({ camper }) => {
    return (
        <CamperTemplate
            name={camper.name}
            thumbnail={camper.thumbnail}
            description={camper.description}
            drives={camper.drives}
            sleeps={camper.sleeps}
            basicSpecs={camper.basicSpecs}
            included={camper.included}
            extras={camper.extras}
        />
    )
}

Camper.propTypes = {
    camper: PropTypes.object
}

export default Camper
