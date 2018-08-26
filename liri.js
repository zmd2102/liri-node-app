var infoKeys = require('./keys.js');
require("dotenv").config();
var spotify = require('spotify');
var request = require('request');
var spotify1 = new Spotify(keys.spotify);

var search = process.argv[2];


switch (search) {
	case 'spotify-this-song':
		spotifySearch();
		break;
	case 'movie-this':
		moviesearch();
		break;
}

function moviesearch(){

    var nodeArgs = process.argv;
    var movieName = "";
    for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
    movieName = movieName + "+" + nodeArgs[i];
    }
    else {
    movieName += nodeArgs[i];
    }
}
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, function(error, response, body) {
    if(!error && response.statusCode == 200){
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Year: " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
        console.log("Country: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
  }
});
  }

function spotifySearch(){
    var nodeArgss = process.argv;
    var songName = "";
    for (var i = 3; i < nodeArgss.length; i++) {
    if (i > 3 && i < nodeArgss.length) {
    songName = songName + "+" + nodeArgss[i];
    }
    else {
    songName += nodeArgss[i];
    }
	spotify.search({ type: 'track', query: songName }, function(err, data) {
    if (err) {
    return console.log('Error occurred: ' + err);
    }
    console.log(data); 
        });
}
}