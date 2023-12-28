document.addEventListener("DOMContentLoaded", function() {    
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
        window.alert("Bem vindo de volta, João.")
        setTimeout(function() {
            window.location.href = "feed.html";
        }, 100);
    } else {
        window.alert("Email ou senha inválidos.")
    }
}

