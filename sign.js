/*document.addEventListener("DOMContentLoaded", function() {    
document.getElementById("btn").addEventListener("click", function() {
    verifica2();
    });
});

function verifica(){
    var email = document.getElementById("idEmail").value;
    var emailCerto = "rodriguez.joao@outlook.com";
    var senha = document.getElementById("idPassword").value;
    var senhaCerta = "a";

    if (email === emailCerto && senha === senhaCerta) {
        window.alert("Bem vindo de volta, João.");
    } else {
        window.alert("Email ou senha inválidos.")
    }
}*/

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn").addEventListener("click", function() {
            cadastra();
    });
    carrega();
});

function carrega() {
    fetch("usuarios.json")
        .then(response => response.json())
        .then(data => localStorage.setItem("usuarios", JSON.stringify(data.usuarios)))
        .catch(error => console.error("Erro ao carregar usuários:", error));
};

function cadastra() {
    var novoEmail = document.getElementById("idEmail").value
    var novaSenha = document.getElementById("idPassword").value

    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    var usuarioExistente = usuarios.find(function(usuario) {
        return usuario.email === novoEmail
    });

    if (usuarioExistente) {
        alert('Email já cadastrado. Use outro email.')
    } else {
        var novoUsuario = { email: novoEmail, senha: novaSenha };
        salvarUsuario(novoUsuario);
        alert('Cadastro realizado com sucesso!')
    };
};
