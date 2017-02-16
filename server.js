var express = require('express');	// Web framework for node.js
var app = express();
var consolidate = require('consolidate');	// Template engine

app.engine('html', consolidate.mustache);	// mustache = Template for consolidate (html)
app.set('view engine', 'html');
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.render('index');	// , { title : 'Platzigram' }  Send var to view on render
});

app.get('/signup', function (req, res) {
	res.render('index');
});

app.get('/signin', function (req, res) {
	res.render('index');
});


// REST API
/*

var router = express.Router();

router.route('/items')
	.get(function(req, res, next) {
		res.send('Get');
	})
	.post(function(req, res, next) {
		res.send('Post');
	});
*/

app.listen(3100, function(err) {
	if (err) return console.log('Had some error'), process.exit(1);
	console.log('Server listen in port 3100.');
});