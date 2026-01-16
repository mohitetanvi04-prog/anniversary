const text = "HAPPY ANNIVERSARY";
let index = 0;
const speed = 120;
const typingDiv = document.getElementById("typing");

function typeEffect() {
  if (index < text.length) {
    typingDiv.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

setTimeout(typeEffect, 800);
