import React from "react";

const Section = props => (
    <section style={{ ...{ paddingBottom: '5rem', overflow: 'hidden' }, ...props.style }} >
        <div style={props.style} className="container">
            {props.children}
        </div>
    </section >
)

export default Section