/* global fetch */
import rest from '../rest.js';
import alt from '../alt.js';

class CommentsActions {
    postComment(data) {
        return (dispatch) => {
            dispatch();
            rest.post('/comment', data).then(() => {
                this.getComments();
            }).catch((errorMessage) => {
                this.fetchFailed(errorMessage);
            });
        };
    }
    
    getComments() {
        return (dispatch) => {
            dispatch();
            rest.get('/comment').then((response) => {
                response.json().then(this.updateComments);
            }).catch((errorMessage) => {
                this.fetchFailed(errorMessage);
            });
        };
    }

    updateComments(comments) {
        return comments;
    }
    
    fetchFailed(errorMessage) {
        return errorMessage;
    }

}

module.exports = alt.createActions(CommentsActions);