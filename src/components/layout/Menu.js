// Gatsby menu

import React from "react";

import { Link } from "gatsby"

import fonts from '../../assets/theme/fonts'
import layout from '../../assets/theme/layout'

import { menu, menuHelper } from '../../config'

const Menu = ({ }) => (<div style={layout.spacing.marginLeft} >
    {menu.map((item, index) => <Link
        style={fonts.menuFont}
        activeStyle={fonts.menuFontActive}
        to={`/${menuHelper(item)}`}
        key={index}
    >
        {item}
    </Link>)}
</div>
)

export default Menu;
