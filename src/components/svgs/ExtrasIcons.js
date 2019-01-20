import React from 'react'

export const ExtrasIcons = props =>
    props.data.map(
        (extra, index) => extra.name ?
            <img
                key={index}
                src={`../img/icons/${extra.name}.svg`}
                alt={`${extra.name} icon`}
                title={`${extra.name} icon`}
                style={{ width: 200 }}
            />
            : '')