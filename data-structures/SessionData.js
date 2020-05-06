const Queue = require('./Queue');

class SessionData {

    constructor() {
        this.playerQueue = new Queue;
        this.activeCards = new Array(numCards);
        for (var i = 0; i < numCards; i++) {
            this.activeCards[i] = i + 1;
        }
        this.turnCards = [];
    }
};

module.exports = SessionData;