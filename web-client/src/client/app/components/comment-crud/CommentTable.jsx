import React from 'react';
import {Table} from 'react-bootstrap';

import CommentLine from './CommentLine.jsx';

export default class CommentTable extends React.Component {
    constructor(props) {
        super(props);
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

