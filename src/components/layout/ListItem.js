import React from "react";

const ListItem = props => (
    <div key={props.key} className="container" style={{
        paddingBottom: '2rem',
        width: '50%'
    }}>
        {props.children}
    </div>
)

export default ListItem