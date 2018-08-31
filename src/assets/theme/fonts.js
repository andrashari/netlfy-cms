import colors from './colors'

const fontFamilyAirbnb = '"LeagueSpartan", Lato, "Lucida Grande", Tahoma, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Sans-Serif !important';
const baseFontSize = 14;
const bigFontSize = 40;

const fontFamilyCustom = '"LeagueSpartan", Lato, "Lucida Grande", Tahoma, Sans-Serif'

const fonts = {
    menuFont: {
        fontFamily: fontFamilyCustom,
        fontSize: baseFontSize,
        color: colors.darkGrey,
        padding: '2%'
    },
    menuFontActive: {
        //fontFamily: fontFamilyAirbnb,
        //fontSize: baseFontSize,
        color: colors.primary
    },
    burgerMenuFont: {
        ...{
            fontFamily: fontFamilyCustom,
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
        fontFamily: fontFamilyCustom,
        lineHeight: '2.3',
    },
    headerFont: {
        fontWeight: '300',
    }
}

export default fonts