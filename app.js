var express = require('express');
var app = express();
var path = require('path');

app.configure(function(){


	// // NOTE: Make sure to update this whenever a major change occurs, or
	// // when the API changes. This will force all clients to invalidate their
	// // cached JS files.
	// app.set('version', Config.version);
	// app.set('port', port);

	// //app.use(express.logger('dev'));
	// app.use(express.favicon());
	 app.use(express.bodyParser());
	 app.use(express.methodOverride());

	
	app.use(require('less-middleware')({
		src: __dirname + '/public/less',
		// dest: __dirname + '/public/assets',
		// prefix: '/assets',
		// paths: [__dirname + '/client/less'],
		force: true
	}));

	app.set('views', __dirname + '/public');
	app.set('view engine', 'jade');
	app.use(express.static(path.join(__dirname, 'public')));

});

app.configure('development', function() {

	console.log('Express running in development mode on port %s', 3000);

	app.use(express.errorHandler());
});



app.get('/', function(req, res) {
	// var body = 'Hello World';
	// res.setHeader('Content-Type', 'text/plain');
	// res.setHeader('Content-Length', body.length);
	// res.end(body);
	res.render('index');
});

app.listen(3000);
