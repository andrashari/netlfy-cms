import React from 'react'


const icons = [
    '24 Road asisstance',
    'Low price',
    '3 party',
    'Camping equipment',
    'Kitchen and bedding',
    'Optional extras'
]

const WhySection = props =>
    icons.map(
        (icon, index) => icon ?
            <img
                key={index}
                src={`../img/icons/why/${icon}.svg`}
                alt={`${icon} icon`}
                title={`${icon} icon`}
                style={{ height: '50%', width: '32.9%', marginBottom: '0.3%', background: '#ededed' }}
            />
            : '')

export default WhySection
