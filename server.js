var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
require('express-helpers')(app);
app.enable('trust proxy');

var port = process.env.PORT || 3000;
var isProduction = port === 3000;

// if in dev, get credentials from local config file and start react hot loader
// else, get credentials from environment
if(isProduction) {
	var config = require('./config.js');

	// react hot loader
	var webpack = require('webpack');
	var webpackConfig = require('./webpack.config');

	var compiler = webpack(webpackConfig);

	app.use(require('webpack-dev-middleware')(compiler, {
		publicPath: webpackConfig.output.publicPath
	}));

	app.use(require('webpack-hot-middleware')(compiler));

} else {
	var config = {
		mongooseUsername: process.env.mongooseUsername,
		mongoosePassword: process.env.mongoosePassword
	};
}

// middleware
app.use('/bin', express.static(path.join(__dirname, 'bin')));
app.use('/public', express.static(path.join(__dirname, 'public')));

// begin app
app.listen(port, function(req, res) {
	console.log('listening on 3000');
})

// React Router browser history requires every get route to serve the index.html file in case a user
// refreshes on a page or starts using the app from any non-index route
app.get('*', function(req, res) {
	if(isProduction) {
		res.sendFile(path.resolve(__dirname, 'src', 'index.html'))
	} else {
		res.sendFile(path.resolve(__dirname, 'bin', 'index.html'))
	}
});