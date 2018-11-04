import React from 'react'
import PropTypes from 'prop-types'
import Heading from './../components/Heading';

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
    vanName: {
        fontSize: '20px'
    },
    description: {
        fontSize: '12px'
    }
}

const renderIcons = (type, number) => {
    let html = ''

    for (let i = 0; i < number; i++) {
        if (type == 'drive') {
            html += `<li>drive</li>`
        }
        else if (type == 'sleep') {
            html += `<li>sleep</li>`
        }
    }

    return html;
}

export const VanTemplate = ({
    name,
    thumbnail,
    description,
    drive,
    sleep,
}) => {

    return (
        <section className="section">
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1" style={style.card}>
                        <img src={thumbnail} style={style.image} />
                        <div style={{ display: 'flex', padding: '20px' }}>
                            <div style={{ ...style.info, ...{ width: '40%' } }} >
                                <h4 style={style.vanName}>{name}</h4>
                                <p style={style.description}>{description}</p>
                            </div>

                            <div style={style.info}>
                                <ul>{renderIcons('drive', drive.$numberInt)}</ul>
                            </div>

                            <div style={style.info}>
                                <ul>{renderIcons('sleep', sleep.$numberInt)}</ul>
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

VanTemplate.propTypes = {
    van: PropTypes.object
}

const Van = ({ van }) => {
    return (
        <VanTemplate
            name={van.name}
            thumbnail={van.thumbnail}
            description={van.description}
            drive={van.drive}
            sleep={van.sleep}
            basicSpecs={van.basicSpecs}
            included={van.included}
            extras={van.extras}
        />
    )
}

Van.propTypes = {
    van: PropTypes.object
}

export default Van
