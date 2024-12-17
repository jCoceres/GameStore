
let formularioSignUp = document.querySelector("#formularioSignUp");
let createbutton = document.getElementById("createButton");

formularioSignUp.addEventListener("submit", function (event) {
    event.preventDefault();
    localStorage.clear
    let nombreUsuario = document.querySelector("#nombre");
    localStorage.setItem("nombreLS", nombreUsuario.value);
    let emailUsuario = document.querySelector("#email");
    localStorage.setItem("emailLS", emailUsuario.value);
    let passwordUsuario = document.querySelector("#contraseña");
    localStorage.setItem("contraseñaLS", passwordUsuario.value);
    let passError = document.querySelector(".passError");

    if (passwordUsuario.value.length >= 8) {
        window.location.href = "account.html"
    } else {
        passError.style.display = "initial";
        passwordUsuario.addEventListener("change", function () {
            passError.style.display = "none";
        })
    }
})
