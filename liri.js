//Node imports
require("dotenv").config();
var keys = require('./key.js');
var twitter = require('twitter');
var request = require('request');
var client = new twitter(keys.twitter);
var spotify = require('node-spotify-api');
var Spotify = new spotify(keys.spotify);
var commands = process.argv[2];
var inputString = process.argv
var song = process.argv[3];
var movie = process.argv[3]
var username = process.argv[3];





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


//Twitter function

function showTweets(username){
	var username = inputString[3];

	if(!username){
			username = "RagnarGoldburg";
		}
		var searchQuery = {screen_name: username};
		client.get("statuses/user_timeline/", searchQuery, function(error, data, response){
			if (!error) {
				for(var i = 0; i < 20; i++) {
				
					var twitterResults = 
					"@" + data[i].user.screen_name + ": " + data[i].text;
					console.log(twitterResults);
					//console.log(twitterResults); 
				}
			}  else {
				console.log("Error :"+ error);
				return;
			}
		});

}

// Spotify function

function spotifySong(song) {
	var song = inputString[3];
	if(song === undefined){
		song = 'The Sign';
	}
	
	Spotify.search({type:'track', query:song}, function (err,data){
		if(!err){
			songData = data.tracks.items;
			for (var i = 0; i < songData.length; i++){
				if (songData[i] != undefined) {
						var songResults =
						"Artist: " + songData[i].artists[0].name + "\r\n" +
						"Song: " + songData[i].name + "\r\n" +
						"Album the song is from: " + songData[i].album.name + "\r\n" +
						"Preview Url: " + songData[i].preview_url + "\r\n" + 
						console.log(songResults);
				}
			}
		}

		else {
			return console.log('Error occurred: ' + err);
		}
		
	})
}

// Movie Function

function movies(movie){
	var movie = inputString[3];
	console.log(movie);

	if(movie === undefined){
		movie = "Mr. Nobody"
	}

	var urlOmdb ='http://www.omdbapi.com/?apikey=952a4b60&t=' + movie + '&y=&plot=full&tomatoes-true&r=json';

	request( urlOmdb, function (error,response,body){
		
	        var movieData = JSON.parse(body);
			//console.log(movieData)
			var showMovie =
                "Title: " + movieData.Title+"\r\n"+
				"Year: " + movieData.Year+"\r\n"+
				"Imdb Rating: " + movieData.imdbRating+"\r\n"+
				"Country: " + movieData.Country+"\r\n"+
				"Language: " + movieData.Language+"\r\n"+
				"Plot: " + movieData.Plot+"\r\n"+
				"Actors: " + movieData.Actors+"\r\n"+
				"Rotten Tomatoes Rating: " + movieData.tomatoRating+"\r\n"+
				"Rotten Tomatoes URL: " + movieData.tomatoURL + "\r\n" ;
                 console.log(showMovie);
		
		if (error) {
			console.log('Error: ' + error);
			return;
		}
	});


}

//Do what it says function
//Couldnt get this to take the song that was wrttiend in random.txt as an input to the function spotify song

function doWhatItSays() {
		fs.readFile("random.txt", "utf8", function(error, data){
			if (!error) {
				doWhatItSaysResults = data.split(",");
				var song = doWhatItSaysResults[1];
				spotifySong(song);
				console.log(doWhatItSaysResults[0]);
				console.log(doWhatItSaysResults[1]);
			} else {
				console.log("Error occurred" + error);
			}
		});
	};