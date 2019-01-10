import React from "react";

const ListItem = props => (
    <section style={{ ...{ paddingTop: '2rem' }, ...props.style }} >
        <div className="container">
            {props.children}
        </div>
    </section >
)

export default ListItem