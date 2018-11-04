import React, { Component } from 'react';

import colors from '../../assets/theme/colors';

import Heading from '../../components/Heading'
import HeroImage from "../../components/imageRepresentation/HeroImage";

export default class VideoTemplate extends Component {

    render() {
        return (
            <div style={{ background: colors.lightGrey }}>

                <HeroImage heroUrl={"https://alfreskocampers.com/img/about-us.jpg"} />
                <Heading content={"About Us"} type={"h1"} />
                <p>
                    Alfresko is much more than “outdoors” or “in the open air”. Alfresko is a choice to get nearer to the beauty of the surrounding nature, to our and other people’s souls, to slow down and appreciate who we are, to respect ourselves and others. Alfresko is a choice to freedom and enjoyment. Alfresko cheers simple values. Alfresko is a way of living!
                </p>
                <p>
                    We believe that we always have two choices in life; to do it or not. It is just up to us what we choose. We vote for dreaming big and to have faith in them. We believe simple things in life grant you the most outstanding and unforgettable moments.
                </p>
                <span>
                    Lilla & Pablo
                </span>
            </div >

        )
    }
}