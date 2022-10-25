import React from "react";
import Nama from "./nama";

function Card (props) {
    const [state,setState] = React.useState(props.data)
    return(
        <div style={{backgroundColor: '#225',borderRadius: 10, paddingTop: 10, paddingBottom: 10, width: 300, marginBottom: 10, alignSelf: 'center'}}>
            <img src={ state.avatar} style={{width: 100, height: 100, borderRadius: 100/2, marginBottom: 10}} />
            <Nama data={state} />
        </div>
    )
}

export default Card;