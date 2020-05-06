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

router.get('/threeCards/:roomCode', async (req, res, next) => {
    try {
        console.log('request random card');
        cards = [];
        let roomCode = req.params.roomCode.toUpperCase();
        while (cards.length < 3) {
            var sData = sessions[roomCode];
            var nextCardIndex = Math.round(Math.random() * sData.activeCards.length);
            var nextCardNum = sData.activeCards[nextCardIndex];
            sData.activeCards.splice(nextCardIndex, 1);
            sData.turnCards.push(nextCardNum);
            console.log(sData.turnCards);
            var card = await Cards.findOne({'card_num': nextCardNum});
            cards.push(card);
        }
        res.send(cards);
    }
    catch (error) {
        res.send({'error': error.message})
    }
});

router.get('/checkRoom/:roomCode', async (req, res) => {
    console.log('**checking room**');
    var code = req.params.roomCode;
    if (!code) {
        res.sendStatus(401);
        return;
    }
    else {
        code = code.toUpperCase();
    }
    if (sessions[code]) {
        console.log("found!");
        res.sendStatus(200);
    }
    else {
        res.sendStatus(401);
    }
});

router.get('/checkUser/:roomCode/:name', async (req, res) => {
    var room = req.params.roomCode.toUpperCase();
    var name = req.params.name;
    // first player to enter room
    if (!room || !sessions[room]) {
        res.sendStatus(200);
        return;
    }
    // room has already been made, NOT first player
    else {
        var players = sessions[room].playerQueue.asArray();
        for (var p of players) {
            if (p.name === name) {
                res.sendStatus(401);
                return;
            }
        }
        res.sendStatus(200);
    }

})



module.exports = router;