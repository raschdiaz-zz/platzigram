var page = require('page');
var template = require('./template');

page('/', function() {
    console.log('Page: /');
    $('title').html('Platzigram - Home Page');
    var $main = $('#main-container');
    var pictures = [
        {
            user: {
                username: 'raschdiaz',
                avatar: 'materialize-icon.png'
            },
            url: 'http://materializecss.com/images/sample-1.jpg',
            likes: 1024,
            liked: true
        },
        {
            user: {
                username: 'hansmalcolm',
                avatar: 'materialize-icon.png'
            },
            url: 'http://materializecss.com/images/office.jpg',
            likes: 512,
            liked: false
        }
    ];
    $main.html(template(pictures));
});
$(".dropdown-button").dropdown();