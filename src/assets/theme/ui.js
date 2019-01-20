import colors from './colors'
import fonts from './fonts'

const ui = {
    button: {
        ...{
            minWidth: '120px',
            border: '1px solid transparent',
            borderRadius: '0px',
            background: 'none',
            textShadow: 'none',
            boxShadow: 'none',
            width: '400px'
        }, ...fonts.buttonFont
    }
}

export default ui