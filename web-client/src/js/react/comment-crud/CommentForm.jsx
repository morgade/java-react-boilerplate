import React from 'react';
import { connect, dispatch } from 'react-redux'
import { withRouter } from 'react-router'
import * as Actions from '../../flux/actions'
import {Button, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            text: ''
        };
    }

    nameChanged(evt) {
        this.setState({name: evt.target.value});
    }
    
    emailChanged(evt) {
        this.setState({email: evt.target.value});
    }
    
    textChanged(evt) {
        this.setState({text: evt.target.value});
    }
    
    postComment() {
        this.props.dispatch(Actions.postComment({
               id: this.props.id==='new' ? null : this.props.id,
             name: this.state.name,
            email: this.state.email,
             text: this.state.text
        }));
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.commentPostedTime) {
            this.props.router.push('/comment-crud');
        }
    }

    render() {
         return (
            <Form>
                <FormGroup controlId="name">
                    <ControlLabel>Name:</ControlLabel>
                    <FormControl type="text" 
                        value={this.state.name} 
                        placeholder="Type your name" 
                        disabled={this.props.fetching}
                        onChange={this.nameChanged.bind(this)} />
                </FormGroup>
                
                <FormGroup controlId="email">
                    <ControlLabel>e-Mail:</ControlLabel>
                    <FormControl type="text" 
                        placeholder="Type your email" 
                        disabled={this.props.fetching}
                        onChange={this.emailChanged.bind(this)} />
                </FormGroup>
                
                <FormGroup controlId="email">
                    <ControlLabel>Comment:</ControlLabel>
                    <FormControl type="text" 
                        componentClass="textarea" 
                        placeholder="Type your comment text"
                        disabled={this.props.fetching}
                        onChange={this.textChanged.bind(this)} />
                </FormGroup>
                
                <Button bsStyle="primary" onClick={this.postComment.bind(this)} disabled={this.props.fetching}>
                    Post Comment
                </Button>
            </Form>
        );
    }
};

export default connect(
                store => ({ commentPostedTime: store.comments.commentPostedTime })
            )(withRouter(CommentForm));