import colors from './colors'

const baseFontSize = 14;
const bigFontSize = 40;

const amaticSC = "'Amatic SC', cursive";
const montserrat = "'Montserrat', cursive";

const fonts = {
    menuFont: {
        fontFamily: montserrat,
        fontSize: baseFontSize * 1.15,
        color: colors.secondary,
        padding: '0 2%',
        lineHeight: '48px',
        textTransform: 'uppercase'
    },
    menuFontActive: {
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
        fontSize: '16px',
        letterSpacing: '0.7px',
        fontWeight: '500',
        fontFamily: montserrat,
        lineHeight: '2.3',
    },
    headerFont: {
        fontFamily: amaticSC,
        fontWeight: '500',
        fontSize: '70px',
        color: colors.secondary,
        textAlign: 'center',
        margin: 0,
    },
    bodyText: {
        fontFamily: montserrat,
        fontSize: '12px',
        color: colors.darkGrey,
    }
}

export default fonts