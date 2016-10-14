/* global fetch */

import alt from '../alt.js';

class StatusActions {
    fetchHeap(dispatch) {
        return (dispatch) => {
            // we dispatch an event here so we can have "loading" state.
            dispatch();
            fetch('/heap').then((response) => {
                response.json().then(this.updateHeap);
            }).catch((errorMessage) => {
                this.fetchFailed(errorMessage);
            });
        };
    }

    updateHeap(heap) {
        return heap;
    }

    fetchFailed(errorMessage) {
        return errorMessage;
    }

}

module.exports = alt.createActions(StatusActions);