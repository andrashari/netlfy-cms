import React, { Component } from "react";
import Link from "gatsby-link";

import logo from "../../assets/img/logo.png";

import { Button } from "antd";

export default class Footer extends Component {
    render() {
        return (
            <nav className="navbar is-transparent">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item">
                            <figure className="image">
                                <img
                                    src={logo}
                                    alt="Alfresko Campers Logo"
                                    style={{
                                        width: "150px",
                                        maxHeight: "none"
                                    }}
                                />{" "}
                            </figure>{" "}
                        </Link>{" "}
                    </div>{" "}
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/camper-vans">
                            Camper Vans{" "}
                        </Link>{" "}
                        <Link className="navbar-item" to="/trip-ideas">
                            Trip Ideas{" "}
                        </Link>{" "}
                        <Link className="navbar-item" to="/terms-and-conditions">
                            Terms & Conditions{" "}
                        </Link>{" "}
                        <Link className="navbar-item" to="/blog">
                            Blog{" "}
                        </Link>{" "}
                        <Link className="navbar-item" to="/contact">
                            Contact{" "}
                        </Link>{" "}
                    </div>{" "}
                </div>{" "}
            </nav>
        );
    }
}
