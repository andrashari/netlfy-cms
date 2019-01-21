import React, { Component } from "react";

import {Icon} from 'antd'
import layout from './../../assets/theme/layout';
import FooterMenu from "./FooterMenu";

export default class Footer extends Component {
    //<span>Copyright <Icon type="copyright" /> 2019  Made with ❤️ by Alfreskocampers.</span>
    render() {
        return (
            <nav className="navbar is-transparent">
                <div style={{ ...layout.container, ...{ width: '100%' } }} >
                    <FooterMenu />

                </div>{" "}
            </nav>
        );
    }
}
