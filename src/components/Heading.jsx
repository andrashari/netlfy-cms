import React from 'react'
import PropTypes from 'prop-types'
import fonts from '../assets/theme/fonts';

const Heading = ({ content, type, location }) => {
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
                ...fonts.menuFont, ...{ fontSize: '20px', textAlign: 'left', padding: 0 }
            }
            break;

        default:
            break;
    }

    location == 'sectionTitle' ? fontStyle = fonts.headerFont : null;

    if (type == 'h1' || location == 'sectionTitle') {
        return (
            <div style={{ maxWidth: '30%', margin: 'auto', padding: '20px 0' }}>
                <Tag style={fontStyle}>
                    <hr className="hr-text" data-content={content}></hr>
                </Tag >
            </div>
        );
    }
    else {
        return (
            <div style={location == "info" ? { textAlign: 'center' } : { textAlign: 'center', margin: 'auto', padding: '20px 0' }}>
                <Tag style={fontStyle}>{content}</Tag >
            </div>
        );
    }
}

Heading.propTypes = {
    content: PropTypes.string,
    type: PropTypes.string
}

export default Heading
