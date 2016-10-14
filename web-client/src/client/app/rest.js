/* global fetch */

class Rest {
    post(url, body) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }
    
    get(url) {
        return fetch(url);
    }
}

module.exports = new Rest();