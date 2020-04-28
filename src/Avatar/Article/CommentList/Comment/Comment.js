import React from 'react';

export function Comment(props) {
    return (<div>
        <div>{props.author}</div>
        <div>{props.date}</div>
        <div>{props.content}</div>
    </div>);
}