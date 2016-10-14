import React from 'react';
import ServerHeap from '../components/server-heap/ServerHeap.jsx';
import StatusActions from '../actions/StatusActions.js';
import StatusStore from '../stores/StatusStore.js';
import AltContainer from 'alt-container';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    testFetch() {
        StatusActions.fetchHeap();
    }
    
    render() {
        return (
            <div className="jumbotron">
                    <h1>MIND THE HIPPO PROJECT</h1>
                    <p>This is our project scaffold !</p>
                    <p>
                        <button className="btn btn-primary btn-lg" onClick={this.testFetch}>
                            FETCH TEST
                        </button>
                    </p>
                    <AltContainer store={StatusStore}>
                        <ServerHeap />
                    </AltContainer>
            </div>
        );
    }
};

export default Home;