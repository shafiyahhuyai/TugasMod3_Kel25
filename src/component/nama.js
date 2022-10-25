import React from "react";

function Nama(props) {
    const [state,setState] = React.useState(props.data)

    return(
       <div style={{display: "flex",
       "flex-wrap": "wrap",
       "flex-direction": "column",
       "align-content": "center",}}>
        <span style={{color: '#fff', font: "bold", "font-family":"Arial, Helvetica, sans-serif"}}>{state.first_name + ' ' + state.last_name}</span>
        <br />
        <span style={{color: '#fff'}}>{state.email}</span>
       </div>
    )
}

export default Nama;