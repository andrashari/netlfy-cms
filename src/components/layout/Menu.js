// Gatsby menu

import React from "react";

import Link from "gatsby-link";

import fonts from '../../assets/theme/fonts'
import kaki from '../../assets/theme/layout'

import {menu, menuHelper} from '../../config'

const Menu = ({}) => ( <div style={kaki.spacing.marginLeft} >
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
