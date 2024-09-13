const textElement = document.getElementById('dynamic-word');
const textArray = ["Flavours", "Love"];
let arrayIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 2000; // Pause time at the end of each word

function type() {
  const currentWord = textArray[arrayIndex];
  
  textElement.textContent = isDeleting
    ? currentWord.substring(0, charIndex--)
    : currentWord.substring(0, charIndex++);

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, delay); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    arrayIndex = (arrayIndex + 1) % textArray.length; // Switch to the next word
    setTimeout(type, 500); // Small pause before typing the new word
  } else {
    setTimeout(type, isDeleting ? 100 : 150); // Speed control
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);
});
