//Node imports
require("dotenv").config();
var keys = require('./key.js');
var twitter = require('twitter');
var client = new twitter(keys.twitter);
var spotify = require('node-spotify-api');
var Spotify = new spotify(keys.spotify);
var commands = process.argv[2];
var inputString = process.argv
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

//functions

function showTweets(commands){
	var username = inputString[3];

	if(!username){
			username ="RagnarGoldburg";
		}
		params = {screen_name: username};
		client.get("statuses/user_timeline/", params, function(error, data, response){
			if (!error) {
				for(var i = 0; i < data.length; i++) {
				
					var twitterResults = 
					"@" + data[i].user.screen_name + ": " + data[i].text;
					console.log(twitterResults);
					console.log(twitterResults); 
				}
			}  else {
				console.log("Error :"+ error);
				return;
			}
		});




}