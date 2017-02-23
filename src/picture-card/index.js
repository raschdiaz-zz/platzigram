module.exports = function layout(picture) {

    var test = '<div class="card">' +
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
        '<a id="icon_no_favorite" class="left" href="#" onclick="like(true);" style="visibility: ' + ((picture.liked) ? 'hidden' : 'visible')  + ';">' +
        '<i class="material-icons">favorite</i>' +
        '</a>' +
        '<a id="icon_favorite" class="left" href="#" onclick="like(false);" style="visibility: ' + ((picture.liked) ? 'visible' : 'hidden')  + ';>' +
        '<i class="material-icons color-red">favorite</i>' +
        '</a>' +
        '<span class="left likes">' + picture.likes + ' me gusta</span>' +
        '</p>' +
        '</div>' +
        '</div>' +
        '</div>';

    console.log(test);

    return test;

    function like(liked) {
        picture.liked = liked;
        if (liked) {
            picture.likes++;
            document.getElementById('icon_favorite').style.visibility = true;
            document.getElementById('icon_no_favorite').style.visibility = false;
        } else {
            picture.likes--;
            document.getElementById('icon_favorite').style.visibility = false;
            document.getElementById('icon_no_favorite').style.visibility = true;
        }

    }

};