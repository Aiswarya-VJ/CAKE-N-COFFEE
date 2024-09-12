const textElement = document.getElementById('dynamic-text');
const textArray = ["Take A Sip To The Heaven Of Flavours", "Take A Sip To The Heaven Of Love"];
let arrayIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 2000; // Pause time at the end of each sentence

function type() {
  // Get the current sentence from the text array
  const currentText = textArray[arrayIndex];
  
  // Update the text content of the h1 element
  textElement.textContent = isDeleting
    ? currentText.substring(0, charIndex--)
    : currentText.substring(0, charIndex++);
  
  // If it's typing, and we reach the end of the sentence
  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, delay); // Delay before erasing starts
  } 
  // If it's deleting and we reach the beginning of the sentence
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    arrayIndex = (arrayIndex + 1) % textArray.length; // Move to the next sentence
    setTimeout(type, 500); // Small pause before typing the new sentence
  } else {
    setTimeout(type, isDeleting ? 100 : 150); // Typing speed and erasing speed
  }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);
});
