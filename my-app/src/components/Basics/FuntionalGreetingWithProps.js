import React from 'react';

const FunctionalGreetingWithProps = (props) => 
    <h1>Hello {props.name}! I see you are {props.age} years old, {props.greeting} </h1>

export default FunctionalGreetingWithProps;