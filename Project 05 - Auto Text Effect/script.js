// DOM Elements
const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

// Phrases to be typed
const phrases = [
    'We Love Programming!',
    'This is an Auto Typer!',
    'Powered by JavaScript!',
    'Enjoy the animation!'
]

// State variables
let phraseIndex = 0 // Current phrase from the array
let charIndex = 0 // Current character index in the phrase
let isDeleting = false // Flag to check if we are deleting
let typingSpeed = 150 / speedEl.value // Initial typing speed

// Main function to type and delete text
function type() {
    const currentPhrase = phrases[phraseIndex];
    let displayText = '';

    // If we are deleting, slice the string from the end
    if (isDeleting) {
        displayText = currentPhrase.slice(0, charIndex--);
    } else { // If we are typing, slice the string from the beginning
        displayText = currentPhrase.slice(0, charIndex++);
    }

    textEl.innerText = displayText;

    // Logic to switch between typing and deleting
    if (!isDeleting && charIndex > currentPhrase.length) {
        // Finished typing the phrase
        isDeleting = true;
        // Pause before starting to delete
        setTimeout(type, 1500);
        return;
    } else if (isDeleting && charIndex < 0) {
        // Finished deleting the phrase
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length; // Move to the next phrase
        // Pause before typing the next phrase
        setTimeout(type, 500);
        return;
    }

    setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
}

// Event listener to update speed from the input
speedEl.addEventListener('input', (e) => typingSpeed = 150 / e.target.value)

// Start the typing effect
type()