import React from 'react';
import './Avatar.css';
import { Article } from './Article/Article'

export function Avatar (props) {
    return (<div>
            <img src={props.url} className ={props.shape} width={props.width} shape={props.shape} />
            <Article title="Article" content="Content" img="" />
        </div>);
}