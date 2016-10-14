/* global fetch */
import rest from '../rest.js';
import alt from '../alt.js';

class CommentsActions {
    postComment(data) {
        return (dispatch) => {
            dispatch();
            this.fetching(true);
            rest.post('/comment', data).then(() => {
                this.fetching(false);
                this.getComments();
            }).catch((errorMessage) => {
                this.fetching(false);
                this.fetchFailed(errorMessage);
            });
        };
    }
    
    getComments() {
        return (dispatch) => {
            dispatch();
            this.fetching(true);
            rest.get('/comment').then((response) => {
                this.fetching(false);
                response.json().then(this.updateComments);
            }).catch((errorMessage) => {
                this.fetchFailed(errorMessage);
            });
        };
    }

    fetching(status) {
        return status;
    }

    updateComments(comments) {
        return comments;
    }
    
    fetchFailed(errorMessage) {
        return errorMessage;
    }

}

module.exports = alt.createActions(CommentsActions);