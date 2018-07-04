// Gatsby menu

import React from "react";

import Link from "gatsby-link";

import fonts from '../../assets/theme/fonts'
import layout from '../../assets/theme/layout'

import {menu, menuHelper} from '../../pages/config'

const Menu = ({}) => ( <div style={layout.spacing.marginLeft} >
        {menu.map(item => <Link
            style={fonts.menuFont}
            activeStyle={fonts.menuFontActive}
            to={`/${menuHelper(item)}`}
        >
            {item}
        </Link>)}
    </div>
)   

export default Menu;
