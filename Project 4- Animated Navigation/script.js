// Get the toggle button and the navigation element from the DOM
const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

// Add a click event listener to the toggle button
toggle.addEventListener('click', () => {
  // When the button is clicked, toggle the 'active' class on the navigation element
  nav.classList.toggle('active');
});