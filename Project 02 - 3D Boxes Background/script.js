// Get the main container for the boxes from the DOM using its ID.
const boxesContainer = document.getElementById('boxes');
// Get the button element from the DOM using its ID.
const btn = document.getElementById('btn');

// An array of meme GIF URLs to be displayed in the background.
const memeGifs = [
    'https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif', // Confused Travolta
    'https://media.giphy.com/media/3o7aD2v3Q0bT3sW2yI/giphy.gif', // Salt Bae
    'https://media.giphy.com/media/l3q2zbskZp2j8wniE/giphy.gif', // Blinking Guy
    'https://media.giphy.com/media/5ntdy5Ban1dIY/giphy.gif', // This is Fine Dog
    'https://media.giphy.com/media/o0vwzuFklA5s4/giphy.gif', // Keyboard Cat
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3o0c2NqZ3V5a3J0b3ZqZzRjZzR4c25jM2h0c2N4a2NqZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d3mlE7uhX8KFgEmY/giphy.gif', // Homer Backing Into Bushes
    'https://media.giphy.com/media/l0HlTy9xga13nK9mU/giphy.gif' // Success Kid
];

// Add a click event listener to the button.
// When the button is clicked, it will toggle the 'big' class on the boxesContainer.
// This class change triggers the CSS animations for expanding/shrinking the grid.
btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));

// Function to create the grid of boxes.
function createBoxes() {
    // Randomly select a meme from the array.
    const randomMeme = memeGifs[Math.floor(Math.random() * memeGifs.length)];
    // Set the selected meme as a CSS custom property on the container.
    boxesContainer.style.setProperty('--meme-bg', `url('${randomMeme}')`);

    // Outer loop to create 4 rows.
    for (let i = 0; i < 4; i++) {
        // Inner loop to create 4 columns in each row.
        for (let j = 0; j < 4; j++) {
            // Create a new 'div' element for each box.
            const box = document.createElement('div');
            // Add the 'box' class to the new div for styling.
            box.classList.add('box');
            // Set the background-position for each box.
            // This creates a piece of the larger background image, forming a grid.
            // -j * 125 moves the image horizontally, -i * 125 moves it vertically.
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
            // Add a transition delay to create a staggered animation effect.
            box.style.transitionDelay = `${i * 50 + j * 50}ms`;
            // Append the newly created box to the main container.
            boxesContainer.appendChild(box);
        }
    }
}

// Call the function to generate the boxes when the script loads.
createBoxes();