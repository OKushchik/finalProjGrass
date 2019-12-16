const headerMenu = document.querySelector('.headerUp__hidenMenu');
const burgerMenu = document.querySelector('.headerUp__burgerMenu');
let menuOpen = false;

burgerMenu.onclick = function (){
    menuOpen = !menuOpen;
    if ( menuOpen ) {
        headerMenu.classList.add("headerUp__hidenMenu--open");
    } else {
        headerMenu.classList.remove("headerUp__hidenMenu--open");
    }
};