//Node imports
require("dotenv").config();
var keys = require('./keys.js');
var twitter = require('twitter');
var spotify = require('spotify');
var command = process.argv[2];
var fs = require('fs');