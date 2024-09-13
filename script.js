const textElement = document.getElementById('dynamic-word');
const textArray = ["Flavours", "Love"];
let arrayIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 2000; // Pause time at the end of each word

function type() {
  const currentWord = textArray[arrayIndex];
  
  // Typing effect
  if (!isDeleting && charIndex <= currentWord.length) {
    textElement.textContent = currentWord.substring(0, charIndex++);
  }
  
  // Deleting effect
  if (isDeleting && charIndex >= 0) {
    textElement.textContent = currentWord.substring(0, charIndex--);
  }
  
  // Word is fully typed, start deleting
  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, delay); // Pause before starting to delete
    return;
  }
  
  // Word is fully deleted, move to next word
  if (isDeleting && charIndex === -1) {
    isDeleting = false;
    arrayIndex = (arrayIndex + 1) % textArray.length; // Move to the next word
    setTimeout(type, 500); // Pause before starting the next word
    return;
  }

  setTimeout(type, isDeleting ? 100 : 150); // Adjust speed of typing and deleting
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);
});
