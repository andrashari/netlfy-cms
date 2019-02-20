// Gatsby menu

import React from "react";

import { Link } from "gatsby";

import fonts from '../../assets/theme/fonts'
import layout from '../../assets/theme/layout'

import { footerMenu as menu, menuHelper } from '../../config'

const Menu = ({ location }) => (<div style={{
    width: 'calc(85%)',
    float: 'left',
    textAlign: 'right'
}} >
    {
        menu.map((item, index) => <Link
            style={{ ...fonts.menuFont, ...{ color: '#fff' } }}
            activeStyle={fonts.menuFontActive}
            to={`/${menuHelper(item)}`}
            key={index}
            className="footer-menu-item"
        >
            {item}
        </Link>)
    }
</div >
)

export default Menu;
