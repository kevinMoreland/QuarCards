//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route.js');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/quarantineCards');

//on connection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database');
});

//on connection error
mongoose.connection.on('error', ()=>{
    console.log('Error in db connection' +err);
});

//port no
const port = 3000;

//adding middleware
app.use(cors());

//body parser
app.use(bodyparser.json());

//routes
app.use('/api', route);

// creating the route for the home route
app.get('/', (req, res) => {
    res.send('foobar');
})

app.listen(port, ()=>{
    console.log('Server started at port ' + port);

})