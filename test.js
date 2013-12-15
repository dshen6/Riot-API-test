var https = require('https');

var options = {
  host: 'prod.api.pvp.net',
  path: '/index.html'
};

var RIOT_HOST = 'https://prod.api.pvp.net/api/';
var region = 'na';
var summonerName = 'cfalc';
var API_KEY = '0cc640e9-8daa-45b5-bbd2-9e1f843246e9';
var summonerByName = '/lol/{region}/v1.1/summoner/by-name/{name}';
var leagueBySummonerID = '/{region}/v2.1/league/by-summoner/{summonerId}';


var sumByNameRequest = RIOT_HOST + 'lol/' + region + '/v1.1/summoner/by-name/' + summonerName + '?api_key=' + API_KEY;
//"https://prod.api.pvp.net/api/lol/na/v1.1/summoner/by-name/cfalc?api_key=0cc640e9-8daa-45b5-bbd2-9e1f843246e9";
var leagueBySumIDRequest = RIOT_HOST + region + '/v2.1/league/by-summoner/' + 'blah' + '?api_key=' + API_KEY;
https.get(sumByNameRequest, function(res) {
  //console.log("Got response: " + res.statusCode);
  //console.log("headers: ", res.headers);
  res.on('data', function(chunk) {
  	var sumID = getIDFromResult(chunk);
    console.log('summoner id: ' + sumID);
    getSummonerLeagueStatsFromID(sumID);
  });
}).on('error', function(e) {
  console.log("Getting summoner by name error: " + e.message);
});

function getIDFromResult(result) {
	var sumObject = JSON.parse(result);
	return sumObject.id;
}

function getSummonerLeagueStatsFromID(id) {
	var requestString = leagueBySumIDRequest.replace('blah', id);
	console.log(requestString);
	https.get(requestString, function(res) {
		res.on('data', function(chunk) {
			console.log(chunk);
			getSumObjectFromLeague(chunk);
		});
	}).on('error', function(e) {
		console.log("Getting summoner league stats from id error: " + e.message);
	});
}

function getSumObjectFromLeague(result) {
	var leagueObject = JSON.parse(result);
	//console.log(leagueObject);
}