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

//const route = require('./routes/route.js');

//get rid of deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


//connect to mongodb
mongoose.connect('mongodb+srv://kevinMoreland:Kk06230623@cluster0-ya3i2.mongodb.net/cardDB?retryWrites=true&w=majority');

//on connection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database');
});

//on connection error
mongoose.connection.on('error', ()=>{
    console.log('Error in db connection');
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
app.use('/api', route);

app.get('/', (req, res) => {
    res.send('hello world');
})

http.listen(port, ()=>{
    console.log('Server started at port ' + port);

})