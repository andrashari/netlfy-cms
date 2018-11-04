import React, { Component } from "react";
import Link from "gatsby-link";

import logo from "../../assets/img/logo.png";

import layout from "../../assets/theme/layout";

import LoginMenu from "./LoginMenu";
import HamburgerMenu from "./HamburgerMenu";
import Menu from "./Menu";

import Modal from "../login/Modal";

export default class Navbar extends Component {
    render() {
        return (
            <nav style={layout.center} className="is-flex-desktop">
                <div style={layout.container} className="is-flex-desktop width--100">
                    <div className="is-hidden-desktop">
                        <LoginMenu />
                    </div>{" "}
                    <div className="is-hidden-desktop">
                        <HamburgerMenu />
                    </div>{" "}
                    <div
                        className="navbar-brand"
                        style={{
                            width: "20%",
                            margin: "auto"
                        }}
                    >
                        <Link to="/" className="navbar-item">
                            <figure className="image">
                                <img
                                    src={logo}
                                    alt="Alfresko Campers Logo"
                                    style={{
                                        width: "145px",
                                        maxHeight: "none",
                                        margin: "auto"
                                    }}
                                />{" "}
                            </figure>{" "}
                        </Link>{" "}
                    </div>{" "}
                    <div
                        className="is-hidden-touch"
                        style={{
                            width: "63%"
                        }}
                    >
                        <Menu />
                    </div>
                    <div
                        className="navbar-end is-hidden-touch"
                        style={{
                            width: "17%"
                        }}
                    >
                        <Modal />
                    </div>
                </div>{" "}
            </nav>
        );
    }
}
