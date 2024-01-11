/*document.addEventListener("DOMContentLoaded", function() {    
document.getElementById("butao").addEventListener("click", function() {
    verifica();
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
    fetch("usuarios.json")
        .then(response => response.json())
        .then(data => localStorage.setItem("usuarios", JSON.stringify(data.usuarios)))
        .catch(error => console.error("Erro ao carregar usuários:", error));
});

function verifica2() {
    var email = document.getElementById("idEmail").value;
    var senha = document.getElementById("idPassword").value;

    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    var usuarioAutenticado = usuarios.find(function(usuario) {
        return usuario.email === email && usuario.senha === senha;
    });

    if (usuarioAutenticado) {
        alert("Login bem-sucedido!");
        window.location.href = "feed.html";
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}

function porra() {
    window.location.href = "feed.html";
}