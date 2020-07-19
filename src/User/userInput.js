
import React from 'react';
import './User.css';


const userInput = (props) => {

    return (

        <input  onChange={props.userNameProp}value={props.userValue} placeholder="userInput component"></input>

    )
    
}

export default userInput;
