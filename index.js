//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route.js');

//get rid of deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


//connect to mongodb
mongoose.connect('mongodb+srv://kevinMoreland:<Kk06230623>@cluster0-ya3i2.mongodb.net/test?retryWrites=true&w=majority');

//on connection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database');
});

//on connection error
mongoose.connection.on('error', ()=>{
    console.log('Error in db connection');
});

//port number
const port = 3000;

//adding middleware
app.use(cors());

//body parser
app.use(bodyparser.json());

//routes
app.use('/api', route);

app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(port, ()=>{
    console.log('Server started at port ' + port);

})