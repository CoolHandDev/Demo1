/**
 * Created by mgarcia on 11/2/2015.
 */
'use strict';

var express = require('express');
var path = require('path');
var rootPath = path.normalize(__dirname);
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var app = express();
//var mongoClient = require('mongodb');
//var assert = require('assert');
//var mongoClient = require('mongodb').MongoClient, assert = require('assert;');
//var mongoClient = require('mongodb'), assert;
var mongoClient = require('mongodb')
var url = 'mongodb://localhost:27017/mydatabase';

app.use(express.static(rootPath + '/app'));

var portNumber = '8000';

/*
app.get('/', function(req, res){
    res.sendfile(rootpath + 'app/index.html');
})
*/

app.get('/route1', function(req, res){
    res.sendFile(rootPath + '/app/index.html');
});
//handle posting of data from the client
app.post('/orderPizza', jsonParser, function(req, res){
    //Try out mongo db
    mongoClient.connect(url, function(err, db){
        //assert.equal(null, err);
        if (err){
            console.log('failed to connect to mongo');
        }
        else{
            console.log('connected to mongo');
            db.collection('pizza').insertOne(req.body);
        }

        db.close();
    });

    console.log(req.body);
});

app.listen(portNumber);
console.log('Listening on port ' + portNumber);









