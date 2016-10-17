import React from 'react';
import Comment from './Comment.jsx';

export default class CommentList extends React.Component {
    render() {
        var commentNodes = this.props.comments.map(function (comment) {
            return (
                <Comment key={comment.id} name={comment.name} email={comment.email} text={comment.text} />
            );
        });
        
        return (
            <div className="comment-list">
            {commentNodes}
            </div>
        );
    }
};

CommentList.defaultProps = {
    comments: []
};