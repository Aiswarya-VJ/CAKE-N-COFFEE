const textElement = document.getElementById('dynamic-word');
const textArray = ["Flavours", "Love"]; // Words to display dynamically
let arrayIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 2000; // Pause time at the end of each word

function type() {
  const currentWord = textArray[arrayIndex];

  // Adjust charIndex logic to ensure full word appears
  if (!isDeleting) {
    textElement.textContent = currentWord.substring(0, charIndex + 1); // Increment correctly to include the last character
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, delay); // Pause before deleting
      return; // Exit function to prevent immediate deletion
    }
  } else {
    textElement.textContent = currentWord.substring(0, charIndex - 1); // Erase correctly
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      arrayIndex = (arrayIndex + 1) % textArray.length; // Move to the next word
      setTimeout(type, 500); // Small pause before typing the new word
      return; // Exit function to prevent immediate typing
    }
  }

  // Adjust the speed for typing and deleting
  setTimeout(type, isDeleting ? 100 : 150);
}

// Start the typing effect when the page loads
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);
});
