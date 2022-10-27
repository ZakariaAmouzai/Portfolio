let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');
let nav = document.querySelector('header');
let body = document.querySelector('body');

menu.onclick = () => {
  navbar.classList.toggle('open-menu');
  menu.classList.toggle("move");
}

let scrollTop = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('scroll-active', window.scrollY >= 400);
}); 

//Header Background Change on scroll
let header = document.querySelector('header');
window.addEventListener('scroll', function(){
  header.classList.toggle('shadow', this.window.scrollY > 0);
})


ScrollReveal({ 
  reset: true,
  distance: '60px',
  duration: 2000,
  delay: 400
});
ScrollReveal().reveal('.reveal', { delay: 100 });




//Content Scrolling effect
/*window.addEventListener('scroll', reveal);
window.onload = reveal();


function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  for(var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if(revealTop < windowheight - revealPoint){
      reveals[i].classList.add('active');
    }else{
      reveal[i].classList.remove('active');
    }
  }
}*/



