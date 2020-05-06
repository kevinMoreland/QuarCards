class Card {
    constructor(json) {
        if (json) {
            this._id = json._id;
            this.card_text = json.card_text;
            this.card_num = json.card_num;
            
        }
        else {
            this._id = '';
            this.card_text = '';
            this.card_num = -1;
        }
    }
}

module.exports = Card;