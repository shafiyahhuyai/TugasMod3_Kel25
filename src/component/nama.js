import React from "react";

function Nama(props) {
    const [state,setState] = React.useState(props.data)

    return(
       <div>
        <span style={{color: '#fff'}}>{state.first_name + ' ' + state.last_name}</span>
        <br />
        <span style={{color: '#fff'}}>{state.email}</span>
       </div>
    )
}

export default Nama;