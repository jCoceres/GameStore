let menu = document.querySelector("#menuMobile");
let closeMenu = document.querySelector("#closeMenu");
let navigation = document.querySelector("#navigation");

menu.addEventListener("click", function () {
    navigation.classList.add("menu-active");
})
closeMenu.addEventListener("click", function () {
    navigation.classList.remove("menu-active");
})


