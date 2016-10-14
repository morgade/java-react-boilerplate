import alt from '../alt.js';
import StatusActions from '../actions/StatusActions.js';

class LocationStore {
    constructor() {
        this.heap = {};
        this.bindListeners({
            handleFetchHeap: StatusActions.FETCH_HEAP,
            handleUpdateHeap: StatusActions.UPDATE_HEAP
        });
    }

    handleFetchHeap() {
        this.heap = { };
    }

    handleUpdateHeap(heap) {
        this.heap = heap;
    }
}

module.exports = alt.createStore(LocationStore, 'LocationStore');