const aboutText = document.querySelector('.about-text');
const lessButton = document.querySelector('.less');
const moreButton = document.querySelector('.more');
const maxHeight = aboutText.scrollHeight;

lessButton.addEventListener('click', () => {
  aboutText.style.maxHeight = '200px';
  lessButton.style.display = 'none';
  moreButton.style.display = 'inline-block';
});

moreButton.addEventListener('click', () => {
  aboutText.style.maxHeight = `${maxHeight}px`;
  moreButton.style.display = 'none';
  lessButton.style.display = 'inline-block';
});
