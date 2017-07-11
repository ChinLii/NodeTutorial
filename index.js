var express = require('express');
var app = express();
var port = 3000;

app.get('/',function(req,res){
    res.send('Hello');
})

console.log('Our app is running on port '+port);
app.listen(port);
