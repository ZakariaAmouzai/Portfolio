let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
  navbar.classList.toggle('open-menu')
    menu.classList.toggle("move");
}

const r = rolly({
    view: document.querySelector('.app'),
    native: true,
    // other options
});
r.init();
AOS.init({
    duration: 1500
});