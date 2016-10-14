import React from 'react';
import StatusActions from '../../actions/StatusActions.js';

class ServerHeap extends React.Component {
    render() {
        return (
            <div className="alert alert-info">
                Free Heap: {this.props.heap.free} / {this.props.heap.max}
            </div>
        );
    }
};

ServerHeap.defaultProps = {
  heap: { free: '--', max: '--' }
};

export default ServerHeap;