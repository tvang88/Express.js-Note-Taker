//required dependencies
const path = require('path');
const fs = require('fs');

//HTML routes to export for server.js
module.exports = function(app){

    app.get('/',  function (req, res) {
        res.sendFile(path.join(__dirname, '/../public.index.html'));
    });
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '/../public/notes.html'));
    });
};