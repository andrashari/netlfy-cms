import React, { Component } from "react";
import { Link } from "gatsby";

import logo from "../../assets/img/logo.png";

import layout from "../../assets/theme/layout";

import HamburgerMenu from "./HamburgerMenu";
import Menu from "./Menu";

export default class Navbar extends Component {
    render() {
        return (
            <nav style={layout.center} className="is-flex-desktop" >
                <div style={{ ...layout.container, ...{ maxWidth: '95%' } }} className="is-flex-desktop width--100">
                    {
                        /*
                            <div className="is-hidden-desktop">
                                <LoginMenu />
                            </div>{" "}
                        */
                    }
                    <div className="is-hidden-desktop">
                        <HamburgerMenu />
                    </div>{" "}
                    <div
                        className="is-hidden-touch"
                        style={{
                            width: "40%"
                        }}
                    >

                        <a target="_blank" href="https://www.instagram.com/alfreskocampers/"><i style={{ fontSize: 35, float: 'left', lineHeight: 0 }} className="demo-icon icon-ig"></i></a>
                        <a target="_blank" href="https://www.facebook.com/alfreskocampers/"><i style={{ fontSize: 35, float: 'left', lineHeight: 0 }} className="demo-icon icon-fb"></i></a>

                        <Menu side='left' align="Right" style={{ paddingRight: '2vw' }} />
                    </div>
                    <div
                        className="navbar-brand"
                        style={{
                            width: "20%",
                            margin: "auto"
                        }}
                    >
                        <Link to="/" className="navbar-item" style={{ paddingTop: 0 }}>
                            <figure className="image">
                                <img
                                    src={logo}
                                    alt="Alfresko Campers Logo"
                                    style={{
                                        width: "145px",
                                        maxHeight: "none",
                                        margin: "auto",
                                        marginBottom: "-10px",
                                    }}
                                />{" "}
                            </figure>{" "}
                        </Link>{" "}
                    </div>{" "}
                    <div
                        className="is-hidden-touch"
                        style={{
                            width: "40%"
                        }}
                    >
                        <Menu side='right' align="Left" style={{ paddingLeft: '2vw' }} />
                    </div>
                </div>{" "}
            </nav>
        );
    }
}
