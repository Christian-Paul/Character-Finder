var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
require('express-helpers')(app);
app.enable('trust proxy');

var port = process.env.PORT || 3000;
var isDev = port === 3000;

// if in dev, get credentials from local config file and start react hot loader
// else, get credentials from environment
if(isDev) {
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

// database initialization
mongoose.connect('mongodb://' + config.mongooseUsername + ':' + config.mongoosePassword + '@ds111718.mlab.com:11718/character-finder');

var tropeSchema = new mongoose.Schema({
	name: String,
	description: String
});

var Trope = mongoose.model('Trope', tropeSchema)

var characterSchema = new mongoose.Schema({
	name: String,
	tropes: Array,
	tropeExplanations: Array,
	source: String,
	image: String,
	description: String
});

var Character = mongoose.model('Character', characterSchema)

// begin app
app.listen(port, function(req, res) {
	console.log('listening on 3000');
})

app.get('/tropes', function(req, res) {
	Trope.find(function(err, tropes) {
		if(err) {
			console.log(err);
		} else {
			res.send(tropes);
		}
	});
});

app.get('/characters', function(req, res) {

	var selectedTraits = req.query.selectedTraits.split(',');

	Character.aggregate([
		{$match: { 'tropes': { $in: selectedTraits } }},
		{$project: { 'tropesCopy': '$tropes', 'tropes': 1, 'name': 1, 'tropeExplanations': 1, 'source': 1, 'image': 1, 'description': 1 }},
		{$unwind: '$tropes'},
		{$match: { tropes: { $in: selectedTraits } }},
		{$group: { 
			'_id': '$_id', 
			'score': {$sum: 1},
			'allTropes': {$first: '$tropesCopy'},
			'name': {$first: '$name'},
			'tropeExplanations': {$first: '$tropeExplanations'},
			'source': {$first: '$source'},
			'image': {$first: '$image'},
			'description': {$first: '$description'},
			'matchedTropes': {$push: '$tropes'} }},
		{$sort: {score: -1}},
		{$limit: 10}
	], function(err, results) {
		if(err) {
			console.log(err);
		} else {
			res.send(results);
		}
	})

});

// React Router browser history requires every get route to serve the index.html file in case a user
// refreshes on a page or starts using the app from any non-index route
app.get('*', function(req, res) {
	if(isDev) {
		res.sendFile(path.resolve(__dirname, 'src', 'index.html'))
	} else {
		res.sendFile(path.resolve(__dirname, 'bin', 'index.html'))
	}
});