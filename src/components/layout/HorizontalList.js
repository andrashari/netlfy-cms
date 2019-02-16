import React from "react";

const HorizontalList = props => (
    <ul style={{ margin: '0', listStyle: "none", textAlign: 'center', padding: 0 }} >
        {props.children}
    </ul>
)

export default HorizontalList