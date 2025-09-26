// Get the canvas element and its 2D rendering context
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define the character set for the falling text (Katakana)
const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';

// Combine all characters
const characters = katakana + alphabet + numbers;

const fontSize = 16;
// Calculate the number of columns based on canvas width and font size
const columns = Math.floor(canvas.width / fontSize);

// Create an array to track the y-position of each column's falling character
// Initialize each column's position to 1
const rainDrops = Array.from({ length: columns }).fill(1);

// Function to draw the animation frame by frame
function draw() {
    // Create a semi-transparent black rectangle to cover the canvas.
    // This creates the fading "trail" effect for the characters.
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the color and font for the falling characters
    ctx.fillStyle = '#0F0'; // Green color
    ctx.font = `${fontSize}px monospace`;

    // Loop through each column
    for (let i = 0; i < rainDrops.length; i++) {
        // Select a random character from the character set
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        // Draw the character at its current x and y position
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        // Reset the drop to the top if it goes off-screen, with a random chance.
        // This makes the rain effect look more irregular and natural.
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        // Move the drop down by one position for the next frame
        rainDrops[i]++;
    }
}

// Start the animation loop, redrawing the canvas every 30 milliseconds
setInterval(draw, 30);