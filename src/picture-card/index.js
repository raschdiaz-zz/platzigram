module.exports = function layout(picture) {
    return '<div class="card">' +
        '<div class="card-image">' +
            '<img class="activator" src="'+picture.url+'">' +
        '</div>' +
        '<div class="card-content">' +
            '<a href="/user/' + picture.user.username + '" class="card-title">' +
               '<img src="' + picture.user.avatar + '" class="avatar"/>' +
                '<span class="username">' + picture.user.username + '</span>' +
            '</a>' +
            '<small class="right time">Hace 1 día</small>' +
            '<p>' +
                '<a href="#" class="left">' +
                    '<i class="material-icons">favorite</i>'
                '</a>' +
            '</p>' +
        '</div>' +
    '</div>';
};