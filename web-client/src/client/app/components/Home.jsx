import React from 'react';
import AltContainer from 'alt-container';
import CommentBox from './comment-box/CommentBox.jsx';
import ServerHeap from './server-heap/ServerHeap.jsx';

import statusActions from '../actions/StatusActions.js';
import commentActions from '../actions/CommentActions.js';
import statusStore from '../stores/StatusStore.js';
import commentStore from '../stores/CommentStore.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    testFetch() {
        statusActions.fetchHeap();
    }
    
    componentDidMount() {
        commentActions.getComments();
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1>MIND THE HIPPO PROJECT</h1>
                    <p>This is our project scaffold !</p>
                    <p>
                        <button className="btn btn-primary btn-lg" onClick={this.testFetch}>
                            FETCH TEST
                        </button>
                    </p>
                </div>
                
                <AltContainer store={statusStore}>
                    <ServerHeap />
                </AltContainer>
                
                <AltContainer store={commentStore}>
                    <CommentBox />
                </AltContainer>

            </div>
        );
    }
}
;

export default Home;