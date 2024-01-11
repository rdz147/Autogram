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
        verifica2();
        });
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

    //console.log("Usuário autenticado:", usuarioAutenticado);

    if (usuarioAutenticado) {
        alert("Login bem-sucedido!");
        //console.log("Redirecionando");
        try {
            window.location.href = "feed.html";
        } catch(error) {
            //console.log("deu ruim")
        }
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}

function porra() {
    window.location.href = "feed.html";
}

//não sei se o seguinte será util, manter

/*function salvarDados() {
    var email = document.getElementById('idEmail').value;
    var senha = document.getElementById('idPassword').value;

    var usuario = {
        email: email,
        senha: senha
    };

    var jsonString = JSON.stringify(usuario);

    var blob = new Blob([jsonString], { type: "application/json" });

    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'usuario.json';
    
    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
} */