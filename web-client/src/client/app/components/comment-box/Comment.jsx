import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

export default class Comment extends React.Component {
    render() {
        return (
            <ListGroupItem>
                <b>{this.props.name}: </b>
                <span>{this.props.text}</span>
            </ListGroupItem>
        );
    }
};