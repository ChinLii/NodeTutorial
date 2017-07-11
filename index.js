var express = require('express');
var mongoose = require('mongoose');
var app = express();
var port = process.env.PORT || 3000;

var config = require('./config/database.js');

mongoose.connect(config.url)

app.get('/',function(req,res){
    res.send('Hello');
})

console.log('Our app is running on port '+port);
app.listen(port);
