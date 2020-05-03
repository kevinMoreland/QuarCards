const express = require('express');
const router = express.Router();

const Cards = require('../models/cards.js');

//retrieving data from database
router.get('/cards', async (req, res, next)=>{
    try{
        var cards = await Cards.find();
        res.send(cards);
    }
    catch(error) {
        res.send({error: error.message})
    }
    
});

router.get('/cardByNum/:num', async (req, res, next)=>{
    try{
        let cardNum = console.log(req.params.num);
        var card = await Cards.findOne({'card_num': cardNum});
        res.send(card);
    }
    catch(error) {
        res.send({error: error.message})
    }
});

router.get('/randomCard/:roomCode', async (req, res, next) => {
    try {
        let roomCode = req.params.roomCode.toUpperCase();
        var sData = sessions[roomCode];
        var nextCardIndex = Math.round(Math.random() * sData.activeCards.length);
        var nextCardNum = sData.activeCards[nextCardIndex];
        sData.activeCards.splice(nextCardIndex, 1);
        sData.turnCards.push(nextCardNum);
        console.log(sData.turnCards);
        var card = await Cards.findOne({'card_num': nextCardNum});
        res.send(card);
    }
    catch (error) {
        res.send({'error': error.message})
    }
})

module.exports = router;