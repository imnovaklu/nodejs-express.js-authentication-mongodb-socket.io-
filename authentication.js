var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb').MongoClient;
var jwt = required('jsonwebtoken');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
