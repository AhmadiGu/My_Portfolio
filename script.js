const mobileMenu = document.querySelector('.icon');
const menuHeader = document.querySelector('.header');
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.link');
const toggleMenu = () => {
  menuHeader.classList.toggle('active');
};
mobileMenu.addEventListener('click', () => toggleMenu());  
const displayNone = () => {
  menuHeader.classList.remove('active');
};
menu.addEventListener('click', () => displayNone());  