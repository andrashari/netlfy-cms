import React from 'react'
import PropTypes from 'prop-types'
import fonts from '../assets/theme/fonts';

const Heading = ({ content, type, location, style, hrStyle, hrWhite, maxWidth }) => {
    const Tag = `${type}`
    let fontStyle = null;

    switch (type) {
        case 'h1':
            fontStyle = fonts.headerFont
            break;

        case 'h2':
            fontStyle = { ...fonts.headerFont, ...{ fontSize: '60px' } }
            break;

        case 'h3':
            fontStyle = { ...fonts.headerFont, ...{ fontSize: '50px' } }
            break;

        case 'h4':
            fontStyle = {
                ...fonts.menuFont, ...{ fontSize: '22px', textAlign: 'center', padding: 0 }
            }
            break;

        case 'h5':
            fontStyle = {
                ...fonts.menuFont, ...{ color: '#000', fontWeight: '700', textTransform: 'none', fontSize: '16px', textAlign: 'left', padding: 0 }
            }
            break;

        default:
            break;
    }

    location == 'sectionTitle' ? fontStyle = fonts.headerFont : null;

    if (type == 'h1' || location == 'sectionTitle') {
        return (
            <div className="heading-wrapper" style={{ ...maxWidth, ...{ margin: 'auto', padding: '20px 0' } }} >
                <Tag style={{ ...fontStyle, ...style }}>
                    <hr style={hrWhite ? { ...hrStyle, ...{ backgroundColor: '#fff' } } : { ...hrStyle }} className={hrWhite ? 'hr-text hr-text-white' : 'hr-text'} data-content={content}></hr>
                </Tag >
            </div >
        );
    }
    else {
        return (
            <div style={location == "info" ? { textAlign: 'center' } : { textAlign: 'center', margin: 'auto', padding: '20px 0' }}>
                <Tag style={{ ...fontStyle, ...style }}>{content}</Tag >
            </div>
        );
    }
}

Heading.propTypes = {
    content: PropTypes.string,
    type: PropTypes.string
}

export default Heading
