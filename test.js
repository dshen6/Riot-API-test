var https = require('https');
var options = {
  host: 'prod.api.pvp.net',
  path: '/index.html'
};

var string = "https://prod.api.pvp.net/api/lol/na/v1.1/summoner/by-name/cfalc?api_key=0cc640e9-8daa-45b5-bbd2-9e1f843246e9";
https.get(string, function(res) {
  //console.log("Got response: " + res.statusCode);
  //console.log("headers: ", res.headers);
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
// http.get(options, function(res) {
//   console.log('STATUS: ' + res.statusCode
//	);
//   console.log('HEADERS: ' + JSON.stringify(res.headers));
// }).on('error', function(e) {
//   console.log('ERROR: ' + e.message);
// });