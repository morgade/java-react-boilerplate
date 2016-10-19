import React from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/lib/Button';

import * as Actions from '../../flux/actions'
import CommentTable from './CommentTable.jsx';
import CommentForm from './CommentForm.jsx';

class CommentCrud extends React.Component {
    
    newComment() {
        this.props.dispatch(Actions.focusComment(null));
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

export default connect()(withRouter(CommentCrud));