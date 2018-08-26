var request = require("request");
var fs = require("fs");

console.log('this is loaded');


exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};


