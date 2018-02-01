//Node imports
require("dotenv").config();
var keys = require('./key.js');
var twitter = require('twitter');
var client = new twitter(keys.twitter);
var spotify = require('node-spotify-api');
var Spotify = new spotify(keys.spotify);
var commands = process.argv[2];
var fs = require('fs');

//Switch case to execute commands

switch(commands) {
	case 'my-tweets': showTweets();
	break;
	case 'spotify-this-song': spotifySong();
	break;
	case 'movie-this': movies();
	break;
	case 'do-what-it-says': doWhatItSays();
	break;
	default: console.log("Please enter one of the following commands; my-tweets, spotify-this-song, movie-this, or do-what-it-says");

};