//adding dependencies
const path = require('path');
const fs = require ('fs');
const generateUniqueId = require('generate-unique-id');

//html routes
require('./html-routes');

//API routes export
module.exports = function (app){
    fs.readFile('db/db.json', 'utf8', function (err,data) {
        if (err) throw err;

        let notes = JSON.parse(data);

        app.get('/api/notes', function(req,res) {
            res.JSON(notes);
        })

        app.get('/api/notes/:id', function(req, res) {
            res.json(notes[req.params.id]);
        })

        app.delete('/api/notes/:id', function(req, res) {
            notes.splice(req.params.id, 1);
            updateNotes(notes);
            res.json(notes);
        })
    })

    function updateNotes(notes) {
        fs.writeFile('db/db.json', JSON.stringify(notes, '\t'), function(err) {
            if (err) throw err;
            return true;
        })
    };
};