const textElement = document.getElementById('dynamic-word');
const textArray = ["Flavours", "Love"];
let arrayIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 2000; // Pause time at the end of each word

function type() {
  const currentWord = textArray[arrayIndex];

  // Update the text content of the span element
  textElement.textContent = isDeleting
    ? currentWord.substring(0, charIndex--)
    : currentWord.substring(0, charIndex++);
  
  // If it's typing and reaches the end of the word
  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, delay); // Delay before erasing starts
  } 
  // If it's deleting and reaches the beginning of the word
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    arrayIndex = (arrayIndex + 1) % textArray.length; // Switch to the next word
    setTimeout(type, 500); // Small pause before typing the new word
  } else {
    setTimeout(type, isDeleting ? 100 : 150); // Adjust typing and erasing speed
  }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);
});
