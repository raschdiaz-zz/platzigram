module.exports = function layout(content) {
    return '<ul id="dropdown1" class="dropdown-content">' +
        '<li><a href="/">Salir</a></li>' +
    '</ul>' +
    '<nav class="header">' +
        '<div class="container">' +
            '<div class="row">' +
                '<div class="col s9 m10 l11">' +
                    '<a href="/" class="brand-logo platzigram">Platzigram</a>' +
                '</div>' +
                '<div class="col s3 m2 l1">' +
                    '<a href="#" data-activates="dropdown1" class="dropdown-button">' +
                        '<i class="material-icons color-black">account_circle</i>' +
                    '</a>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</nav>' +
    '<div class="content">' +
        content +
    '</div>';
};