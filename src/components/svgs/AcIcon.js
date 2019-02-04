import React from 'react'

import sleeps from './icons/sleeps.svg'
import travels from './icons/travels.svg'

export const AcIcon = props =>
    props.type == 'sleeps'
        ? <img src={sleeps} alt={`${props.type} icon`} title={`${props.type} icon`} style={{ height: 50 }} />
        : <img src={travels} alt={`${props.type} icon`} title={`${props.type} icon`} style={{ height: 50 }} />
    /*import(`./icons/${type}.svg`)
.then(i => <img src={i} alt={type}/>);*/