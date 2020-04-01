const express = require('express');
const router = express.Router();

const Cards = require('../models/cards.js');

//retrieving data from database
router.get('/cards', async (req, res, next)=>{
    try{
        var cards = await Cards.find();
        res.send(cards);
    } catch(error)
    {
        res.send({error: error.message})
    }
    
});

module.exports = router;