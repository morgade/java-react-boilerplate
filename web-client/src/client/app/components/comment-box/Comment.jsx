import React from 'react';

class Comment extends React.Component {
    render() {
        return (
            <div className="comment form-group">
                <div className="control-label">
                    {this.props.name}
                </div>
                <div className="form-control-static">
                    {this.props.text}
                </div>
            </div>
        );
    }
};

export default Comment;