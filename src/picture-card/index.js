module.exports = function layout(picture) {
    return '<div class="card">' +
        '<div class="card-image">' +
            '<img class="activator" src="'+picture.url+'">' +
        '</div>' +
        '<div class="card-content">' +
            '<div class="row">' +
                '<img src="' + picture.user.avatar + '" class="circle" style="height:50px;"/>' +
                '<span class="username">' + picture.user.username + '</span>' +
                '<small class="right time">Hace 1 día</small>' +
                '<a href="#">' +
                    '<i class="material-icons">favorite</i>'+
                '</a>' +
            '</div>' +
        '</div>' +
    '</div>';
};