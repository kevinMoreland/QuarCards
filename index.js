//importing modules
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

//data structures needed
const Queue = require('./data-structures/Queue');
const SessionData = require('./data-structures/SessionData');
const Player = require('./data-structures/Player');

const Card = require('./models/cards.js');


//socket stuff
var io = require('socket.io')(http);
const port = process.env.PORT || 3000;

const buildDirectory = '/client/dist/client';

// take out var to make it global
sessions = {};
numCards = 91;

var numVotingPlayers = 0;
var voteResults = [];
var playersWhoVoted = [];

const route = require('./routes/route.js');

//get rid of deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


//connect to mongodb
mongoose.connect(`mongodb+srv://kevinMoreland:${process.env.MONGO_PASSWORD}@cluster0-ya3i2.mongodb.net/cardDB?retryWrites=true&w=majority`);

//on connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database');
});

//on connection error
mongoose.connection.on('error', (err) =>{
    console.log('Error in db connection' + err);
});

// If we are close to max number of permutations, this will basically guess
// codes until one is not taken. For scalability, this needs to
// be fixed in the future.
function generateCode() {
    var code = Math.random().toString(36).substring(2, 6).toUpperCase();
    while (sessions[code]) {
        code = Math.random().toString(36).substring(2, 6).toUpperCase();
    }
    return code;
}
function clearVotingInfo() {
    voteResults = [];
    playersWhoVoted = [];
}
function determineVoteWinner(voteResults) {
    var reachedArrElements = [];
    var tieCheckerArray = [];
    var playerWithMaxVotes = voteResults[0];
    var maxVotes = -1;
    var isATie = false;

    voteResults.forEach(function (player) {
        if(!reachedArrElements.includes(player.name)){
            var numVotes = voteResults.filter((value) => value.name == player.name).length;

            if(numVotes > maxVotes) {
                maxVotes = numVotes;
                playerWithMaxVotes = player;
            }
            //if there is a tie at the end, tieChecker array will contain a value equal to maxVotes after this loop completes
            else if(numVotes == maxVotes) {
                tieCheckerArray.push(numVotes);
            }
            
            reachedArrElements.push(player.name);
        }
    });

    if(tieCheckerArray.includes(maxVotes)) {
        isATie = true;
    }
    return [playerWithMaxVotes, isATie];
}

if (process.argv.includes('--dev')) {
    app.use(cors());
    console.log('\n**RUNNING SERVER IN DEV MODE**\n');
}
else {
    app.use(express.static(__dirname + buildDirectory));
    app.get('/', async (req, res) => {
        res.sendFile(path.join(__dirname));
    });
}

//body parser
app.use(bodyparser.json());

//routes
app.use('/api', route);

io.on('connection', function(socket) {
    console.log(`user ${socket.id} has connected`);
    //console.log(socket.roomCode);
    socket.on('newLobby', function(username) {
        var roomCode = generateCode();
        var newPlayer = new Player(socket.id, username, []);

        //collect all information to create the new session
        var sessionData = new SessionData();
        sessionData.playerQueue = new Queue();
        sessionData.playerQueue.enqueue(newPlayer);

        //start up the new session
        sessions[roomCode] = sessionData;
        socket.roomCode = roomCode;
        socket.join(roomCode);

        console.log(socket.roomCode);
        console.log("position number: " + sessions[roomCode].playerQueue.getLength());
        console.log("using code " + roomCode);
        console.log('queue');
        console.log(sessionData.playerQueue.asArray());

        var isTurn = sessions[roomCode].playerQueue.peek().Id == socket.id;
        var playerList = sessions[roomCode].playerQueue.asArray();

        io.to(socket.id).emit('connected', roomCode, isTurn, playerList);

    });

    socket.on('joinLobby', function(code, username) {
        code = code.toUpperCase();
        console.log(code);
        var newPlayer = new Player(socket.id, username, []);
        if (sessions[code] && !sessions[code].playerQueue.containsPlayer(newPlayer)) {
            sessions[code].playerQueue.enqueue(newPlayer);
            socket.roomCode = code;
            socket.join(code);

            console.log("position number: " + sessions[code].playerQueue.getLength());
            console.log("using code: " + code);


            var isTurn = sessions[code].playerQueue.peek().Id == socket.id;
            var playerList = sessions[code].playerQueue.asArray();

            console.log('queue');
            console.log(sessions[code].playerQueue.asArray());
            
            io.to(code).emit('serverUpdatePlayerList', playerList);
            io.to(socket.id).emit('connected', code, isTurn, playerList);
        }
    });

    socket.on('clientSendChat', function(code, msg) {
        console.log(`socket ${socket.id} wants to send a chat to room ${code}`);
        console.log(io.sockets.adapter.rooms);
        io.to(code).emit('serverSendChat', msg);
    });

    socket.on('disconnect', function() {
        console.log(`user ${socket.id} has disconnected`);
        if (!sessions[socket.roomCode]) {
            console.log(`No rooms found for code ${socket.roomCode}`)
            return;
        }

        var isTurn = sessions[socket.roomCode].playerQueue.peek().Id == socket.id;

        //remove this player from the session
        sessions[socket.roomCode].playerQueue.removePlayer(socket.id);
        
        var roomIsEmpty = (sessions[socket.roomCode].playerQueue.getLength() == 0);
        if(!roomIsEmpty){
            //update list of players
            io.to(socket.roomCode).emit('serverUpdatePlayerList', sessions[socket.roomCode].playerQueue.asArray());

            if(isTurn)
            {
                clearVotingInfo();
                io.to(sessions[socket.roomCode].playerQueue.peek().Id).emit('serverSendIsTurn', true);
                io.to(socket.roomCode).emit('roundCancelled', sessions[socket.roomCode].playerQueue.peek().Id);
            }
            else {
                //one voting player has left. don't do this if turn b/c that player doesn't vote
                var playerHasSubmittedAVote = playersWhoVoted.includes(socket.id);
                if(!playerHasSubmittedAVote) {
                    numVotingPlayers -= 1;
                }
                
                //if all voters leave, cancel the vote results
                if(numVotingPlayers == 0) {
                    clearVotingInfo();
                }
            }
        }
        else{
            //delete room
            delete sessions[socket.roomCode];
        }
    });

    socket.on('clientGivingUpTurn', function(code) {
        if(sessions[code].playerQueue.peek().Id == socket.id)
        {
            var prevQueueHead = sessions[code].playerQueue.dequeue();
            sessions[code].playerQueue.enqueue(prevQueueHead);

            console.log("Gave up turn, new queue looks like:");
            console.log(sessions[code].playerQueue.asArray());
            io.to(socket.id).emit('serverSendIsTurn', false);
            io.to(sessions[code].playerQueue.peek().Id).emit('serverSendIsTurn', true);
        }
        else
        {
            console.log("It is not my turn, can't give up turn...");
        }
    });

    // send the picked card to everyone in the room
    // must handle null case for choices with empty lobbies
    socket.on('clientPickedCard', function(code, card) {
        console.log(card);
        if (card) {
            givenCards = sessions[code.toUpperCase()].turnCards;
            for (var cNum of givenCards) {
                if (cNum != card.card_num) {
                    sessions[code.toUpperCase()].activeCards.push(cNum);
                }
            }
            sessions[code.toUpperCase()].turnCards = [];
            console.log(sessions);
            //clear old voting results
            clearVotingInfo();
            //set number of voting players to all players minus player picking card
            numVotingPlayers = sessions[code].playerQueue.getLength() - 1;
            console.log("num Players voting: " + numVotingPlayers);
            io.to(code).emit('serverSendCardPicked', card);
        }
        else {
            io.to(code).emit('serverSendCardPicked', null);
        }
    });

    //recieve votes, send them to the current game host when fully collected
    socket.on('clientSendVote', function(code, playerVotedFor, cardVotingOn, votingPlayer) {
        voteResults.push(playerVotedFor);
        playersWhoVoted.push(votingPlayer);

        console.log("pushing player vote of : " + playerVotedFor.name);
        console.log("numvotes: " + voteResults.length);
        if(voteResults.length >= numVotingPlayers){
            console.log("sending vote results...");

            //give card to whoever was voted for

            //determineVoteWinner returns [(voteWinner: player), (isATie: true/false)]
            var voteResultsArray = determineVoteWinner(voteResults);
            var voteWinner = voteResultsArray[0];
            var isATie = voteResultsArray[1];

            sessions[code].playerQueue.givePlayerCard(cardVotingOn, voteWinner.Id);

            io.to(code).emit('serverSendVoteResults', voteResults, voteWinner, isATie);
            
            //update player list so votes update
            var playerList = sessions[code].playerQueue.asArray();
            io.to(code).emit('serverUpdatePlayerList', playerList);

            //alert winner that they have a new card
            io.to(voteWinner.Id).emit('serverSendUpdatedCards', sessions[code].playerQueue.getPlayerCards(voteWinner.Id));
        }
    });

    socket.on('clientRequestCard', async function() {
        var card = await Card.findOne({'card_num' : 1});
        console.log('sending');
        io.to(socket.id).emit('serverSendRequestedCard', card);
    });

});

if (!process.argv.includes('--dev')) {
    app.use('/*', async function(req, res) {
        res.sendFile(__dirname + `${buildDirectory}/index.html`);
    });
}

http.listen(port, ()=>{
    console.log('Server started at port ' + port);

})

exports.sessions = sessions;