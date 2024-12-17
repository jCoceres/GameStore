let nombreLS = localStorage.getItem("nombreLS");
let emailLS = localStorage.getItem("emailLS");
let contraseñaLS = localStorage.getItem("contraseñaLS");
let usuario = document.querySelector("#usuario");
usuario.textContent = nombreLS ? nombreLS : "Nombre no disponible";
let correo = document.querySelector("#correo");
correo.textContent = emailLS ? emailLS : "nombre no disponible";
let contraseña = document.querySelector("#contraseña");
contraseña.value = contraseñaLS ? contraseñaLS : "contraseña no disponible";

let formularioAccount = document.getElementById("formularioAccount");
formularioAccount.addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "signup.html"
})

