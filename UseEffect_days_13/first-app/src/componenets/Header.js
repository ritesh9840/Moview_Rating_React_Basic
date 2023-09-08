import React from 'react'


function Header(props){
    return <React.Fragment>
    
    <h1 onClick={props.click}>{props.info}</h1>
    <h2>My number {props.myNumber}</h2>
    </React.Fragment>
}

export default Header;