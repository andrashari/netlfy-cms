import React, { Component } from "react";

import FooterMenu from "./FooterMenu";

export default class Footer extends Component {
    render() {
        return (
            <nav className="navbar is-transparent">
                <div className="container">
                    <FooterMenu />
                </div>{" "}
            </nav>
        );
    }
}
