import React from 'react';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router'

import CommentTable from './CommentTable.jsx';
import CommentForm from './CommentForm.jsx';

class CommentCrud extends React.Component {
    
    newComment() {
        this.props.router.push(`/comment-crud/new`);
    }

    render() {
        return (
            <div>
                {this.props.params.id ?
                
                    <CommentForm id={this.props.params.id} /> 
                    
                    :
                            
                    <div>
                        <Button onClick={this.newComment.bind(this)}>New Comment</Button>
                        <CommentTable />
                    </div>
                }
            </div>
        );
    }
};

export default withRouter(CommentCrud);