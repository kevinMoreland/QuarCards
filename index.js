//importing modules
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const buildDirectory = '/client/dist/client';

var io = require('socket.io')(http);

const port = process.env.PORT || 3000;

var sessions = {};

//const route = require('./routes/route.js');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/quarantineCards', {
    useNewUrlParser: true,
    useUnifiedTopology: true
 });

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
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname));
    });
}

app.use('/*',function(req, res) {
    res.sendFile(__dirname + `${buildDirectory}/index.html`);
});

//body parser
app.use(bodyparser.json());

//routes
//app.use('/api', route);

io.on('connection', function(socket) {
    console.log(`user ${socket.id} has connected`);
    //console.log(socket.roomCode);
    socket.on('newLobby', function() {
        var roomCode = generateCode();
        sessions[roomCode] = [socket.id];
        socket.roomCode = roomCode;
        socket.join(roomCode);

        console.log(sessions);
        console.log(socket.roomCode);
        io.emit('connected', roomCode);
    });

    socket.on('joinLobby', function(code) {
        code = code.toUpperCase();
        console.log(code);
        if (sessions[code]) {
            sessions[code].push(socket.id);
            socket.roomCode = code;
            socket.join(code);

            console.log(sessions);
            io.emit('connected', code);
        }
        else {
            console.log('Room not found...');
        }
    });

    socket.on('disconnect', function() {
        console.log(`user ${socket.id} has disconnected`);
        if (!sessions[socket.roomCode]) {
            console.log(`No rooms found for code ${socket.roomCode}`)
            return;
        }

        sessions[socket.roomCode].splice(sessions[socket.roomCode].indexOf(socket.id), 1);

        if (sessions[socket.roomCode].length == 0) {
            delete sessions[socket.roomCode];
        }

        console.log(sessions);
    });
});

http.listen(port, ()=>{
    console.log('Server started at port ' + port);

})