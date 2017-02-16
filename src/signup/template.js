var landing = require('../landing');

var signupForm = '<div class="col s12 m7">'+
    '<div class="row">'+
        '<div class="signup-box">'+
            '<h1 class="platzigram">Platzigram</h1>'+
            '<form class="signup-form">'+
                '<h2>Regístrate para ver fotos de tus amigos estudiado en Platzi</h2>'+
                '<div class="divider"></div>'+
                '<div class="section">'+
                    '<input type="email" name="email" placeholder="Correo electrónico" />'+
                    '<input type="text" name="name" placeholder="Nombre completo" />'+
                    '<input type="text" name="username" placeholder="Nombre de usuario" />'+
                    '<input type="password" name="password" placeholder="Contraseña" />'+
                    '<button type="submit" class="btn waves-effect waves-light btn-signup">Registrarse</button>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>'+
    '<div class="row">'+
        '<div class="login-box">'+
            '¿Tienes una cuenta?&nbsp;<a href="/signin">Entrar</a>'+
        '</div>'+
    '</div>'+
'</div>';

module.exports = landing(signupForm);