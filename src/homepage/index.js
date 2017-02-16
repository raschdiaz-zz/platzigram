var page = require('page');
var template = require('./template');

page('/', function() {
    console.log('Page: /');
    $('title').html('Platzigram - Home Page');
    var $main = $('#main-container');
    var pictures = [
        {
            user: {
                username: 'Hans Smuller Rasch Diaz',
                avatar: 'http://materializecss.com/images/sample-1.jpg'
            },
            url: 'http://materializecss.com/images/sample-1.jpg',
            likes: 1024,
            liked: true
        },
        {
            user: {
                username: 'Hans Malcolm Rasch Diaz',
                avatar: 'http://materializecss.com/images/office.jpg'
            },
            url: 'http://materializecss.com/images/office.jpg',
            likes: 512,
            liked: false
        }
    ];
    $main.html(template(pictures));
});
$(".dropdown-button").dropdown();