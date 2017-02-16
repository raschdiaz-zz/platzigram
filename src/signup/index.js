var page = require('page');
var template = require('./template');

page('/signup', function() {
    console.log('Page: /signup');
    $('title').html('Platzigram - Signup');
    var $main = $('#main-container');
    $main.html(template);
});