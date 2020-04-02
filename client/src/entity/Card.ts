export default class Card {
    _id?: string;
    card_text: string;
    card_num: number;

    constructor(json: any) {
        if (json) {
            this._id = json._id;
            this.card_text = json.card_text;
            this.card_num = json.card_num;
            
        }
        else {
            this._id = null;
            this.card_text = '';
            this.card_num = null;
        }
    }
}