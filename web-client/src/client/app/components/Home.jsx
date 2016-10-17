import React from 'react';
import AltContainer from 'alt-container';
import CommentBox from './comment-box/CommentBox.jsx';
import ServerHeap from './server-heap/ServerHeap.jsx';
import {Button, Jumbotron} from 'react-bootstrap';

import StatusActions from '../actions/StatusActions.js';
import CommentActions from '../actions/CommentActions.js';
import StatusStore from '../stores/StatusStore.js';
import CommentStore from '../stores/CommentStore.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    testFetch() {
        StatusActions.fetchHeap();
    }
    
    componentDidMount() {
        CommentActions.getComments();
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>MIND THE HIPPO PROJECT</h1>
                    <p>This is our project scaffold !</p>
                    <p>
                        <Button bsStyle="primary" onClick={this.testFetch}>
                            FETCH TEST 
                        </Button>
                    </p>
                </Jumbotron>
                
                <AltContainer store={StatusStore}>
                    <ServerHeap />
                </AltContainer>
                
                <AltContainer store={CommentStore}>
                    <CommentBox />
                </AltContainer>

            </div>
        );
    }
}
;

export default Home;