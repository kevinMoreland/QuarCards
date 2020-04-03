const mongoose = require('mongoose');

const CardSchema = mongoose.Schema(
    {
       card_text:{
            type: String,
            required: true
       },
       card_num:{
           type: Number,
           required: true
       }
    }
)

const Card = module.exports = mongoose.model('Card', CardSchema);