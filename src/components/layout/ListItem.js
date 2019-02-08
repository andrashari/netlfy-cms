import React from "react";

const ListItem = props => (
    <div className="container" style={{
        paddingBottom: '2rem'
    }}>
        {props.children}
    </div>
)

export default ListItem