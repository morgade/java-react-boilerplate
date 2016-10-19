import React from 'react';
import Table from 'react-bootstrap/lib/Table';

import CommentLine from './CommentLine.jsx';
import { connect } from 'react-redux'
import * as Actions from '../../flux/actions'

class CommentTable extends React.Component {
    
    componentDidMount() {
        this.props.dispatch(Actions.fetchComments());
    }
    
    render() {
        const lines = this.props.comments.list.map( c => (
            <CommentLine key={c.id} id={c.id} name={c.name} email={c.email} text={c.text} />
        ));
        
        return (
            <Table responsive striped hover>
                <caption>
                    Table of comments {' '}
                    <span className={this.props.comments.pendingFetch ? "loading-16" : ""} />
                </caption>
                <thead>
                  <tr>
                    <th>
                        Name
                    </th>
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


export default 
    connect(
        store => ({ comments: store.comments })
    )(CommentTable);

