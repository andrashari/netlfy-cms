import colors from './colors'

const fontFamilyAirbnb = '"LeagueSpartan", Lato, "Lucida Grande", Tahoma, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Sans-Serif !important';
const baseFontSize = 14;
const bigFontSize = 40;

const fontFamilyCustom = '"LeagueSpartan", Lato, "Lucida Grande", Tahoma, Sans-Serif';

const amaticSC = "'Amatic SC', cursive";
const montserrat = "'Montserrat', cursive";

const fonts = {
    menuFont: {
        fontFamily: montserrat,
        fontSize: baseFontSize,
        color: colors.secondary,
        padding: '2%'
    },
    menuFontActive: {
        fontFamily: montserrat,
        fontSize: baseFontSize,
        color: colors.primary
    },
    burgerMenuFont: {
        ...{
            fontFamily: montserrat,
            fontSize: '6vw',
            lineHeight: '2',
            color: colors.white
        }, ... {
            padding: '0'
        }
    },
    buttonFont: {
        fontSize: '15px',
        letterSpacing: '0.7px',
        fontWeight: '500',
        fontFamily: montserrat,
        lineHeight: '2.3',
    },
    headerFont: {
        fontFamily: amaticSC,
        fontWeight: '500',
        fontSize: '60px',
        color: colors.secondary,
        textAlign: 'center',
    },
    bodyText: {
        fontFamily: montserrat,
        fontSize: '12px',
        color: colors.darkGrey,
    }
}

export default fonts