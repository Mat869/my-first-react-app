import React from 'react';
import {CommentList} from './CommentList/CommentList';

export function Article (props) {
    return (<div>
        <div>
            <h1>{props.title}</h1>
            <div>{props.content}</div>
            <img src={props.img} />
        </div>
        <div>
            <CommentList />
        </div>
    </div>);
}