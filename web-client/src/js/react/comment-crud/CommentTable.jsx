import React from 'react';
import {Table} from 'react-bootstrap';

import CommentLine from './CommentLine.jsx';
import { connect } from 'react-redux'
import * as Actions from '../../flux/actions'

class CommentTable extends React.Component {
    
    componentDidMount() {
        console.log("VAI FETCHAR !!");
        this.props.dispatch(Actions.fetchComments());
    }
    
    componentWillReceiveProps(nextProps) {
        console.log("###Comments ? " + nextProps.comments.length);
    }
    
    render() {
        const lines = this.props.comments.map( c => (
            <CommentLine key={c.id} id={c.id} name={c.name} email={c.email} text={c.text} />
        ));
        
        return (
            <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>e-Mail</th>
                    <th>Text</th>
                  </tr>
                </thead>
                <tbody>
                  {lines}
                </tbody>
              </Table>
        );
    }
};

CommentTable.defaultProps = {
    comments: []
};

export default 
    connect(
        store => ({ comments: store.comments.all })
    )(CommentTable);

