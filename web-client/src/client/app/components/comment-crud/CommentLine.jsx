import React from 'react';
import { withRouter } from 'react-router'

class CommentLine extends React.Component {
    constructor(props) {
        super(props);
    }

    showCommentForm() {
        this.props.router.push(`/comment-crud/${this.props.id}`);
    }

    render() {
        return (
            <tr className="clickable" onClick={this.showCommentForm.bind(this)}>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.text}</td>
            </tr>
        );
    }
};

CommentLine.defaultProps = {
    commentId: '--',
    name: '--',
    email: '--',
    text: '--'
};

export default withRouter(CommentLine);