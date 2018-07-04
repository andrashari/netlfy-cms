// https://github.com/negomi/react-burger-menu

import React, { Component } from "react";

import Link from "gatsby-link";

import { push as Menu } from "react-burger-menu";

import fonts from "../../assets/theme/fonts";

import {menu, menuHelper} from '../../pages/config'

export default class HamburgerMenu extends Component {
    state = {
        styles: {
            /*div: {
              position: 'absolute',
              top: '0',
              left: '0'
            },*/
            bmBurgerButton: {
                position: "fixed",
                width: "36px",
                height: "30px",
                left: "20px",
                top: "20px"
            },
            bmBurgerBars: {
                background: "#000"
            },
            bmCrossButton: {
                height: "24px",
                width: "24px",
                left: "3em",
                top: "20px"
            },
            bmCross: {
                background: "#fff",
                height: "26px"
            },
            bmMenu: {
                background: "#000",
                height: "auto",
                fontSize: "1.15em"
            },
            bmMenuWrap: {
                width: "100%",
                background: "#000",
                display: "flex",
                alignItems: "center"
            },
            bmMorphShape: {
                fill: "#373a47"
            },
            bmItemList: {
                color: "#fff",
                padding: "3em"
            },
            bmItem: fonts.burgerMenuFont,
            bmOverlay: {
                background: "rgba(0, 0, 0, 0.3)"
            }
        },
        menuOpen: false
    }
    
    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen });
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu() {
        this.setState({ menuOpen: false });
    }
    render() {
        return (
            <Menu
                styles={this.state.styles}
                left
                isOpen={this.state.menuOpen}
                onStateChange={state => this.handleStateChange(state)}
            >
                {menu.map(item => <Link
                    className="menu-item"
                    to={`/${menuHelper(item)}`}
                    onClick={() => this.closeMenu()}
                >
                    {item}
                </Link>)}
            </Menu>
        );
    }
}
