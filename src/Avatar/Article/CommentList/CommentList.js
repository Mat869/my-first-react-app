import React from 'react';
import { Comment } from './Comment/Comment';

export function CommentList(props) {
    return (<div>
        <div >
        <Comment author="A" date="" content="comm1" />
        <Comment author="B" date="" content="comm2" />
        <Comment author="C" date="" content="comm3" />
        </div>
    </div>)
}