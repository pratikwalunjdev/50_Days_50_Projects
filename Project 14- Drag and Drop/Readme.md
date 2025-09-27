# Drag and Drop - Meme Swap Edition

A visually enhanced and interactive drag-and-drop interface built with vanilla HTML, CSS, and JavaScript. This project takes the classic drag-and-drop concept and gives it a modern, tech-inspired twist with fun, swappable meme content.

## Preview



*(A GIF showing the drag-and-drop swap functionality)*

## Features

- **Dark & Techy Theme**: A sleek dark mode interface with a black and blue color scheme.
- **Meme-Powered Content**: Instead of blank boxes, each draggable item features a popular meme, making the interaction more engaging and fun.
- **Swapping Logic**: Drop an item into an occupied container to instantly swap the contents with the source container.
- **Smooth Animations**: CSS transitions provide fluid animations for dragging, hovering, and dropping elements.
- **Visual Feedback**:
  - The dragged item scales down slightly and gets a subtle border.
  - The target container highlights with a glowing blue, dashed border to indicate a valid drop zone.
- **Responsive Design**: The layout adjusts to a column on smaller screens for better mobile usability.

## Tech Stack

- **HTML5**: For the basic structure and content.
- **CSS3**: For styling, animations, layout (Flexbox), and the dark theme.
- **Vanilla JavaScript**: For all the drag-and-drop event handling and swapping logic.

## How to Run

1.  Clone the repository or download the files.
2.  Open the `index.html` file in your favorite web browser.
3.  That's it! Start dragging and swapping the memes.

## Code Overview

- **`index.html`**: Contains the main structure with five container (`.empty`) elements, each holding a draggable meme image (`.fill`).
- **`style.css`**: Defines the dark theme, animations, and visual states (`.hold`, `.hovered`). It uses Flexbox for layout and includes a media query for responsiveness.
- **`script.js`**: Manages the core drag-and-drop functionality. It attaches event listeners to all draggable items and containers, and implements the logic to swap items between containers on drop.