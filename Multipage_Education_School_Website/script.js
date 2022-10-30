let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.list');
menu.onclick = () => {
  navbar.classList.toggle('open-menu')
    menu.classList.toggle("move");
}