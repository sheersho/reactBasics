import React from 'react';

const person = ( props ) => {
    return (
        <div>
            <p onClick={props.newFunClicker}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            {/* <input onChange={props.targetName}></input> */}
        </div>
    )
};

export default person;