import React, { Component } from "react";

import layout from './../../assets/theme/layout';
import FooterMenu from "./FooterMenu";

export default class Footer extends Component {
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
