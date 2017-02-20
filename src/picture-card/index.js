module.exports = function layout(picture) {
    return '<div class="card">' +
        '<div class="card-image">' +
            '<img class="activator" src="'+picture.url+'">' +
        '</div>' +
        '<div class="card-content">' +
            '<div class="row">' +
                '<a href="/user/' + picture.user.username + '" class="card-title">' +
                    '<img src="' + picture.user.avatar + '" class="circle" style="height:50px;"/>' +
                    '<span class="username">' + picture.user.username + '</span>' +
                '</a>' +
                '<small class="right time">Hace 1 día</small>' +
                '<br><br>' +
                '<p>' +
                    '<a class="left" href="#">' +
                        '<i class="material-icons color-red">favorite</i>'+
                    '</a>' +
                '</p>' +
                '<span class="left likes">' + picture.likes + " me gusta</span>" +
            '</div>' +
        '</div>' +
    '</div>';
};