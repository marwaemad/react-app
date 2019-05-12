import React from 'react';
const person = (props) => {
    
    return <div>
        <p>i'm {props.name } my age is {props.age}</p>
        <p>{props.children}</p>
        </div>
}
export default person;