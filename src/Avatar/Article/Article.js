import React from 'react';
import {CommentList} from './CommentList/CommentList';

export function Article (props) {
    return (<div>
        <div>
            <h1 title={props.title}></h1>
            <div content={props.content}></div>
            <img src={props.img} />
            hello
        </div>
        <div>
            <CommentList />
        </div>
    </div>);
}