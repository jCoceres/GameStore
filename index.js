let menuMobile = document.querySelector("#menuMobile");
let closeMenu = document.querySelector("#closeMenu");
let navigation = document.querySelector("#navigation")
menuMobile.addEventListener("click", function () {
    navigation.classList.add("menu-active");
})
closeMenu.addEventListener("click", function () {
    navigation.classList.remove("menu-active");
})
// productos
const enlaces = document.querySelectorAll('.card-fav');
enlaces.forEach((enlace) => {
    enlaces.addEventListener('click', (event) => {
        const svg = enlace.querySelector('.svgIcon');
        svg.classList.toggle("active");
    });
});

