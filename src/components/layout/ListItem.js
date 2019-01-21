import React from "react";

const ListItem = props => (
    <section style={props.style } >
        <div className="container">
            {props.children}
        </div>
    </section >
)

export default ListItem