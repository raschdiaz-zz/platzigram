var page = require('page');
var template = require('./template');

page('/signin', function() {
    console.log('Page: /signin');
    $('title').html('Platzigram - Signin');
    var $main = $('#main-container');
    $main.html(template);
});