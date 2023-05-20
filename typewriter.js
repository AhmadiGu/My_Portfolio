var typewriterValues = [
    "Software Developer",
    "Student", 
    "Full Stack Web Developer",
    "Front End Developer",
    "Back End Developer",
    "Student"
];
var typewriterElements = document.getElementsByClassName("typewriter");
function updateTypewriterElement(element, value) {
    element.textContent = "";
  
    var i = 0;
    var interval = setInterval(function() {
      element.textContent += value.charAt(i); 
      i++; 
      if (i >= value.length) {
        clearInterval(interval);
      }
    }, 100);  
}
   
function runTypewriterAnimation() {
    var index = 0;
    var interval = setInterval(function() { 
      var value = typewriterValues[index % typewriterValues.length]; 
      for (var i = 0; i < typewriterElements.length; i++) {
        updateTypewriterElement(typewriterElements[i], value);
      } 
      index++; 
      if (index >= typewriterValues.length) {
        clearInterval(interval);
      }
    }, 4000); 
}
window.addEventListener("load", runTypewriterAnimation);
  