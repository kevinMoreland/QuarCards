//importing modules
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const buildDirectory = 'client/dist/client';

var io = require('socket.io')(http);

const port = process.env.PORT || 3000;

//const route = require('./routes/route.js');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/quarantineCards', {
    useNewUrlParser: true,
    useUnifiedTopology: true
 });

//on connection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database');
});

//on connection error
mongoose.connection.on('error', ()=>{
    console.log('Error in db connection' +err);
});


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

http.listen(port, ()=>{
    console.log('Server started at port ' + port);

})