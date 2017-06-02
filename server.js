// server.js
 
// modules =================================================
var express = require('express');
var app = express();

// configuration ===========================================
var port = process.env.port || 8082;
app.use(express.static(__dirname + '/public'))

// routes ==================================================
require('./app/routes.js')(app);

// start app ===============================================
app.listen(port);
console.log("Application is started and listening...");
