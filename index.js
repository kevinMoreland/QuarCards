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

//socket stuff
var io = require('socket.io')(http);
const port = process.env.PORT || 3000;

const buildDirectory = '/client/dist/client';

var sessions = {};


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
    socket.on('newLobby', function() {
        var roomCode = generateCode();

        //collect all information to create the new session
        var sessionData = new SessionData();
        sessionData.playerQueue = new Queue();
        sessionData.playerQueue.enqueue([socket.id]);

        //start up the new session
        sessions[roomCode] = sessionData;
        socket.roomCode = roomCode;
        socket.join(roomCode);

        console.log(socket.roomCode);
        console.log("position number: " + sessions[roomCode].playerQueue.getLength());
        console.log("using code " + roomCode);
        io.to(socket.id).emit('connected', roomCode);
    });

    socket.on('joinLobby', function(code) {
        code = code.toUpperCase();
        console.log(code);
        if (sessions[code]) {
            sessions[code].playerQueue.enqueue(socket.id);
            socket.roomCode = code;
            socket.join(code);

            console.log("position number: " + sessions[code].playerQueue.getLength());
            console.log("using code: " + code);
            io.to(socket.id).emit('connected', code);
        }
        else {
            console.log('Room not found...');
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

        //remove this player's socket id from the session
        sessions[socket.roomCode].playerQueue.remove(socket.id);

        //delete session if there are no more players
        if (sessions[socket.roomCode].playerQueue.getLength() == 0) {
            delete sessions[socket.roomCode];
        }

        console.log(sessions);
    });

    socket.on('clientGetIsTurn', function(code) {
        io.to(code).emit('serverSendIsTurn', sessions[code].playerQueue.peek() == socket.id);
    });
    socket.on('clientGivingUpTurn', function(code) {
        if(sessions[code].playerQueue.peek() == socket.id)
        {
            var prevQueueHead = sessions[code].playerQueue.dequeue();
            sessions[code].playerQueue.enqueue(prevQueueHead);
            console.log("Gave up turn, new queue looks like " + sessions[code].playerQueue.asArray());
        }
        else
        {
            console.log("It is not my turn, can't give up turn...");
        }
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
