const menuIcon = document.querySelector(".burguer-icon");
const menu = document.querySelector(".menu-container");

menuIcon.addEventListener("click", toogleMenu);

function toogleMenu(){
    menu.classList.toggle("open");
    menuIcon.classList.toggle("open")
}
