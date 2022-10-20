const mobileMenu = document.querySelector('.icon');
const menuHeader = document.querySelector('.header');
const toggleMenu = () => {
  menuHeader.classList.toggle('active');
};
mobileMenu.addEventListener('click', () => toggleMenu());