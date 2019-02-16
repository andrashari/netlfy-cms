import React from 'react'

import sleeps from './icons/camper/sleeps.svg'
import travels from './icons/camper/travels.svg'

export const AcIcon = props =>
    props.type == 'sleeps'
        ? <img src={sleeps} alt={`${props.type} icon`} title={`${props.type} icon`} style={{ height: 40 }} />
        : <img src={travels} alt={`${props.type} icon`} title={`${props.type} icon`} style={{ height: 40 }} />
    /*import(`./icons/${type}.svg`)
.then(i => <img src={i} alt={type}/>);*/