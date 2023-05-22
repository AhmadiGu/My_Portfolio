const mobileMenu = document.querySelector('.icon');
const menuHeader = document.querySelector('.header');
const menu = document.querySelector('.menu');

const toggleMenu = () => {
  menuHeader.classList.toggle('active');
};
mobileMenu.addEventListener('click', () => toggleMenu());
const displayNone = () => {
  menuHeader.classList.remove('active');
};
menu.addEventListener('click', () => displayNone());