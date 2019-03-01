import React, { Component } from "react";

import layout from './../../assets/theme/layout';
import colors from './../../assets/theme/colors';

import FooterMenu from "./FooterMenu";
import SocialSection from './../sections/SocialSection';

export default class Footer extends Component {
    //<span>Copyright <Icon type="copyright" /> 2019  Made with ❤️ by Alfreskocampers.</span>
    render() {
        return (
            <nav style={{
                backgroundColor: colors.secondary,
                padding: '1rem 0',
                position: 'absolute',
                bottom: 0,
                width: '100%'
            }
            } className="navbar is-transparent" >
                <div style={{ ...layout.container, ...{ width: '100%' } }} >
                    <FooterMenu />
                    <SocialSection />
                </div>{" "}
            </nav >
        );
    }
}
