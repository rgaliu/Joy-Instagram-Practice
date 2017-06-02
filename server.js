// server.js
 
// modules =================================================
var express = require('express');
var app = express();

// configuration ===========================================
var port = process.env.port || 8082;

app.get('/', function(req, res){
    res.send('Hello World');
})


// start app ===============================================
app.listen(port);
console.log("Application is started and listening...");
