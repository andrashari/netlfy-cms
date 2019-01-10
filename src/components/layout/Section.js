import React from "react";

const Section = props => (
    <section style={{ ...{ paddingBottom: '5rem'}, ...props.style }} >
        <div className="container">
            {props.children}
        </div>
    </section >
)

export default Section