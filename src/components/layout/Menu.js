// Gatsby menu

import React from "react";

import { Link } from "gatsby"

import layout from '../../assets/theme/layout'
import fonts from '../../assets/theme/fonts'
import colors from '../../assets/theme/colors'

import { menu, menuHelper } from '../../config'

const Menu = ({ side, align, style }) => (<div style={{ ...style, ...{ textAlign: align, borderBottom: `2px solid ${colors.secondary}` } }} >
    {menu.map((item, index) => <Link
        style={item.side !== side ? { ...fonts.menuFont, ...{ display: 'none' } } : fonts.menuFont}
        activeStyle={fonts.menuFontActive}
        to={item.side === side ? `/${menuHelper(item.content)}` : ''}
        key={index}
    >
        {item.side === side ? item.content : null}
    </Link>)}
</div >
)

export default Menu;
