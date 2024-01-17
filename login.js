document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn").addEventListener("click", function() {
            verifica2();
    });
    carrega();
});

function verifica2() {
    var email = document.getElementById("idEmail").value;
    var senha = document.getElementById("idPassword").value;

    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    var usuarioAutenticado = usuarios.find(function(usuario) {
        return usuario.email === email && usuario.senha === senha;
    });

    //console.log("usuario autenticado:", usuarioAutenticado);

    if (usuarioAutenticado) {
        alert("Login bem-sucedido!");
        //console.log("redirecionando");
        try {
            window.location.href = "feed.html";
        } catch(error) {
            //console.log("deu ruim")
        }
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}

function carrega() {
    fetch("usuarios.json")
        .then(response => response.json())
        .then(data => localStorage.setItem("usuarios", JSON.stringify(data.usuarios)))
        .catch(error => console.error("Erro ao carregar usuários:", error));
};