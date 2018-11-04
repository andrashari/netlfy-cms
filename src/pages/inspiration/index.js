import React, { Component } from 'react';

import colors from '../../assets/theme/colors';
import layout from './../../assets/theme/layout';

import Heading from '../../components/Heading'
import HeroImage from "../../components/imageRepresentation/HeroImage";
import { ImageGridItem } from './../../components/imageRepresentation/ImageGridItem';

export default class Inspiration extends Component {

    render() {
        return (
            <div style={{ background: colors.lightGrey }}>
                <HeroImage heroUrl={"/img/inspiration.jpg"} />
                <Heading content={"Inspiration"} type={"h1"} />

                <div style={{ ...layout.flexbox, ...{ padding: '0 5%', justifyContent: 'space-between' } }} >

                    <ImageGridItem
                        imageUrl={"/img/sunsetherowide.jpg"}
                        text={'PABLO & LILLA (15 DAYS AROUN BALKANS)'}
                    ></ImageGridItem>

                    <ImageGridItem
                        imageUrl={"/img/sunsetherowide.jpg"}
                        text={'PABLO & LILLA (15 DAYS AROUN BALKANS)'}
                    ></ImageGridItem>

                    <ImageGridItem
                        imageUrl={"/img/sunsetherowide.jpg"}
                        text={'PABLO & LILLA (15 DAYS AROUN BALKANS)'}
                    ></ImageGridItem>

                    <ImageGridItem
                        imageUrl={"/img/sunsetherowide.jpg"}
                        text={'PABLO & LILLA (15 DAYS AROUN BALKANS)'}
                    ></ImageGridItem>

                    <ImageGridItem
                        imageUrl={"/img/sunsetherowide.jpg"}
                        text={'PABLO & LILLA (15 DAYS AROUN BALKANS)'}
                    ></ImageGridItem>

                    <ImageGridItem
                        imageUrl={"/img/sunsetherowide.jpg"}
                        text={'PABLO & LILLA (15 DAYS AROUN BALKANS)'}
                    ></ImageGridItem>
                </div>
            </div>
        )
    }
}