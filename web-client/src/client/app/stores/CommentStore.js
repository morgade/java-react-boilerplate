import alt from '../alt.js';
import CommentActions from '../actions/CommentActions.js';

class CommentStore {
    constructor() {
        this.fetching = false;
        this.comments = [];
        
        this.bindListeners({
            handleUpdateComments: CommentActions.UPDATE_COMMENTS,
            handleFetching: CommentActions.FETCHING
        });
    }

    handleUpdateComments(comments) {
        this.comments = comments;
    }

    handleFetching(fetching) {
        this.fetching = fetching;
    }

}

module.exports = alt.createStore(CommentStore, 'CommentStore');