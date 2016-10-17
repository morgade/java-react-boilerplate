import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class Comment extends React.Component {
    render() {
        return (
            <FormGroup>
                <ControlLabel>{this.props.name}</ControlLabel>
                <FormControl.Static>{this.props.value}</FormControl.Static>
            </FormGroup>
        );
    }
};