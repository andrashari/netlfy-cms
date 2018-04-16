import React from 'react'
import PropTypes from 'prop-types'

export const VanTemplate = ({
    name,
    thumbnail,
    description,
    travels,
    basicSpecs,
    included,
    extras,
}) => {

    return (
        <section className="section">
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <p>{name}</p>
                        <img src={thumbnail} />
                        <p>{description}</p>
                        <p>{travels}</p>
                        <ul>
                            {basicSpecs.map((spec, index) => spec ? <li key={index} >{spec}</li> : null)}
                        </ul>
                        <ul>
                            {included.map((included, index) => included ? <li key={index} >{included}</li> : null)}
                        </ul>
                        <ul>
                            {extras.map((extra, index) => extra ? <li key={index} >{extra}</li> : null)}
                        </ul>
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
            travels={van.travels}
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
