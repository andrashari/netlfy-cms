import React from "react";

const Section = props => (
    <section style={{ ...{ paddingBottom: '5rem', overflow: 'hidden' }, ...props.style }} >
        <div className="container" style={props.style}>
            {props.children}
        </div>
    </section >
)

export default Section