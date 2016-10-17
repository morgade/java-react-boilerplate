import React from 'react';
import AltContainer from 'alt-container';

import CommentTable from './CommentTable.jsx';
import CommentForm from './CommentForm.jsx';

import CommentActions from '../../actions/CommentActions';
import CommentStore from '../../stores/CommentStore';

export default class CommentCrud extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        CommentActions.getComments();
    }

    render() {
        return (
            <AltContainer store={CommentStore}>
                {this.props.params.id ? 
                <CommentForm id={this.props.params.id} /> : 
                <CommentTable />}
            </AltContainer>
        );
    }
};