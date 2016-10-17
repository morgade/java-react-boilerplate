import React from 'react';
import {Form, FormGroup, FormControl, Button, Col, Row} from 'react-bootstrap';
import CommentActions from '../../actions/CommentActions.js';

class CommentForm extends React.Component {
    constructor() {
        super();
        this.state =  {name: '', email: '', text:''};
    }
    
    handleNameChange(e) {
        this.setState({name: e.target.value});
    }
    
    handleTextChange(e) {
        this.setState({text: e.target.value});
    }
    
    handleSubmit() {
        CommentActions.postComment(this.state);
        this.state = {name: '', email: '', text:''};
    }
    
    render() {
        return (
            <Form inline onSubmit={this.handleSubmit.bind(this)} className="text-right">
                <FormGroup>
                    <FormControl type="text" placeholder="Your name" value={this.state.name} onChange={this.handleNameChange.bind(this)} disabled={this.props.disabled} />
                    {' '}
                    <FormControl type="text" placeholder="Say something ..." value={this.state.text} onChange={this.handleTextChange.bind(this)} disabled={this.props.disabled} />
                    {' '}
                </FormGroup>
                {' '}
                <Button type="submit" disabled={this.props.disabled}>
                    Post
                </Button>
            </Form>
        );
    }
};

CommentForm.defaultProps = {
    disabled: false
};

export default CommentForm;