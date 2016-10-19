import React from 'react';
import ServerHeap from './server-heap/ServerHeap.jsx';
import {Button, Jumbotron} from 'react-bootstrap';
import * as Actions from '../flux/actions'
import { connect, dispatch } from 'react-redux'

class Home extends React.Component {
    testFetch() {
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
                
                <ServerHeap />
            </div>
        );
    }
};

export default Home;