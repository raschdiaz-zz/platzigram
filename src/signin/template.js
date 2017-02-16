var landing = require('../landing');

var signinForm = '<div class="col s12 m7">' +
    '<div class="row">' +
        '<div class="signup-box">' +
            '<h1 class="platzigram">Platzigram</h1>' +
            '<form class="signup-form">' +
                '<h2>Conectate para ver fotos de tus amigos estudiado en Platzi</h2>' +
                '<div class="divider"></div>' +
                '<div class="section">' +
                    '<input type="text" name="username" placeholder="Nombre de usuario" />' +
                    '<input type="password" name="password" placeholder="Contraseña" />' +
                    '<button type="submit" class="btn waves-effect waves-light btn-signup">Conectarse</button>' +
                '</div>' +
                '<div class="section">' +
                    '<a class="btn btn-fb hide-on-small-only">Iniciar sesíon con Facebook</a>' +
                    '<a class="btn btn-fb hide-on-med-and-up">Iniciar sesíon</a>' +
                '</div>' +
            '</form>' +
        '</div>' +
    '</div>' +
    '<div class="row">' +
        '<div class="login-box">¿No tienes una cuenta?&nbsp;<a href="/signup">Crear</a></div>' +
    '</div>' +
'</div>';

module.exports = landing(signinForm);