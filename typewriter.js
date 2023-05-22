const typewriterValues = [
  'Software Developer',
  'Student',
  'Full Stack Web Developer',
  'Front End Developer',
  'Back End Developer',
  'Student',
];
const typewriterElements = document.getElementsByClassName('typewriter');
function updateTypewriterElement(element, value) {
  element.textContent = '';
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += value.charAt(i);
    i++;
    if (i >= value.length) {
      clearInterval(interval);
    }
  }, 100);
}

function runTypewriterAnimation() {
  let index = 0;
  const interval = setInterval(() => {
    const value = typewriterValues[index % typewriterValues.length];
    for (let i = 0; i < typewriterElements.length; i++) {
      updateTypewriterElement(typewriterElements[i], value);
    }
    index++;
    if (index >= typewriterValues.length) {
      clearInterval(interval);
    }
  }, 4000);
}
window.addEventListener('load', runTypewriterAnimation);
