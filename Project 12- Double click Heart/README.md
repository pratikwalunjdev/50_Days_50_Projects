# Double Click Heart ❤️

A simple and interactive web project that allows users to "like" an image by double-clicking on it. This project is part of the "50 Projects in 50 Days" challenge and demonstrates the use of DOM manipulation and CSS animations to create a fun user experience.

## Demo

![Double Click Heart Demo](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2N0eW55eW1kZ3Z1c2V0a3J2b2Z1a2N0a250a2Z0a250a2Z0a2Z0/https/media.giphy.com/media/3o7abB06u9bNzA8lu8/giphy.gif) 
*(Note: The GIF is a placeholder to demonstrate the concept. The actual project has different images and animations.)*

## Features

-   **Double-Click to Like**: Double-click anywhere on the image to trigger a "like" action.
-   **Cursor-Point Animation**: A heart icon elegantly animates outwards from the exact position of the cursor on the double-click.
-   **Like Counter**: A counter at the top of the page keeps track of the total number of likes.
-   **"Techy" Image Collection**: The page loads a random, high-quality, tech-themed image from a predefined collection on every refresh.
-   **Dynamic Feedback**: The main image provides a subtle "thump" (scale) animation on each like, giving the user satisfying tactile feedback.

## Technologies Used

-   **HTML5**: For the basic structure of the page.
-   **CSS3**: For styling and creating the `grow` and `thump` animations.
-   **JavaScript**: For handling the `dblclick` event, dynamically creating elements, and manipulating the DOM.
-   **Font Awesome**: For the heart icons.

## How to Use

1.  Clone this repository or download the project files.
2.  Open the `index.html` file in any modern web browser.
3.  Double-click on the image to see the heart animation and watch the like counter go up.
4.  Refresh the page to get a new random image!

## Code Highlights

The project uses an efficient `dblclick` event listener instead of a manual timer-based check for double-clicks. The heart animation is created dynamically in JavaScript by creating an `<i>` element, adding CSS classes, and appending it to the image container. A `setTimeout` function is used to remove the heart element from the DOM after the animation completes, preventing memory clutter.