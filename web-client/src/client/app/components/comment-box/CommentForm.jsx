import React from 'react';
import commentActions from '../../actions/CommentActions.js';

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
        commentActions.postComment(this.state);
        this.state = {name: '', email: '', text:''};
    }
    
    render() {
        return (
            <form className="comment-form form-inline" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" className="form-control" placeholder="Your name" value={this.state.name} onChange={this.handleNameChange.bind(this)} disabled={this.props.disabled}/>
                <input type="text" className="form-control" placeholder="Say something..."  value={this.state.text} onChange={this.handleTextChange.bind(this)} disabled={this.props.disabled}/>
                <button type="submit" className="btn btn-primary" disabled={this.props.disabled}>
                        Post
                </button>
            </form>
        );
    }
};

CommentForm.defaultProps = {
    disabled: false
};

export default CommentForm;