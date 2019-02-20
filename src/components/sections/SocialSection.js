import React from 'react'

const icons = [
    'Instagram',
    'Facebook',
]

const SocialSection = props =>
    <div style={{ float: 'right' }}>
        <a target="_blank" href="https://www.instagram.com/alfreskocampers/"><i style={{ fontSize: 35, float: 'left', lineHeight: 0 }} className="demo-icon icon-ig"></i></a>
        <a target="_blank" href="https://www.facebook.com/alfreskocampers/"><i style={{ fontSize: 35, float: 'left', lineHeight: 0 }} className="demo-icon icon-fb"></i></a>
    </div>

export default SocialSection
