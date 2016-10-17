import React from 'react';
import {Panel, ListGroup} from 'react-bootstrap';

import Comment from './Comment.jsx';
import CommentForm from './CommentForm.jsx';

class CommentBox extends React.Component {
    
    render() {
        var header = "Comment Box " + ( this.props.fetching ? "[Loading ...]": "" );
        
        const commentNodes = this.props.comments.map(function (comment) {
            return (
                <Comment key={comment.id} name={comment.name} email={comment.email} text={comment.text} />
            );
        });
        
        return (
            <Panel header={header}>
                <CommentForm disabled={this.props.fetching} />
                
                <ListGroup fill>
                    {commentNodes}
                </ListGroup>
            </Panel>
        );
    }
};

CommentBox.defaultProps = {
    comments: [],
    fetching: false
};

export default CommentBox;