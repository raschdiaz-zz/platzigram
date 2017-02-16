var layout = require('../layout');
var picture = require('../picture-card');

module.exports = function (pictures) {
    return '<div class="container timeline">' +
        '<div class="row">' +
            '<div class="col s12 m10 offset-m1 l6 offset-l3">' +
                pictures.map(function(pic) {
                    console.log(picture(pic));
                    return picture(pic);
                }) +
            '</div>' +
        '</div>' +
    '</div>';
};

/*var template = '<div class="container timeline">' +
    '<div class="row">' +
        '<div class="col s12 m10 offset-m1 l6 offset-l3">' +
            'text' +
        '</div>' +
    '</div>' +
'</div>';*/

//module.exports = layout(template);