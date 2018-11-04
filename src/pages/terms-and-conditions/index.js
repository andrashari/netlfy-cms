import React, { Component } from 'react';

import colors from '../../assets/theme/colors';
import layout from './../../assets/theme/layout';

import Heading from '../../components/Heading'
import HeroImage from "../../components/imageRepresentation/HeroImage";

export default class TermsAndConditions extends Component {
    render() {
        return (
            <div style={{ background: colors.lightGrey }}>
                <Heading content={"Terms & Conditions"} type={"h1"} />
            </div>
        )
    }
}