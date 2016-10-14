import React from 'react';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';

class CommentBox extends React.Component {
    render() {
        return (
            <div className="comment-box">
                <h1>Comments</h1>
                {this.props.fetching ? <span>Loading ...</span>: null} 
                <CommentList comments={this.props.comments} />
                <CommentForm disabled={this.props.fetching} />
            </div>
        );
    }
};

CommentBox.defaultProps = {
    comments: [],
    fetching: false
};

export default CommentBox;