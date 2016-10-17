import alt from '../alt.js';
import CommentActions from '../actions/CommentActions.js';

class CommentStore {
    constructor() {
        this.state = {
            fetching: false,
            comments: []
        };
        
        this.bindListeners({
            handleLoading: [CommentActions.POST_COMMENT, CommentActions.GET_COMMENTS],
            handleUpdateComments: CommentActions.UPDATE_COMMENTS
        });
    }

    handleLoading () {
        this.setState({ fetching: true});
    }

    handleUpdateComments(comments) {
        this.setState({ 
            fetching: false,
            comments: comments
        });
    }
}

module.exports = alt.createStore(CommentStore, 'CommentStore');