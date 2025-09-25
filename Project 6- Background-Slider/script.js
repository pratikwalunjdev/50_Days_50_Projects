// Get DOM elements
const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

// Initialize the active slide index
let activeSlide = 0

// Event listener for the right arrow button
rightBtn.addEventListener('click', () => {
  // Increment the active slide index
  activeSlide++

  // If we've gone past the last slide, loop back to the first one
  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  // Update the background and active slide
  setBgToBody()
  setActiveSlide()
})

// Event listener for the left arrow button
leftBtn.addEventListener('click', () => {
  // Decrement the active slide index
  activeSlide--

  // If we've gone before the first slide, loop to the last one
  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  // Update the background and active slide
  setBgToBody()
  setActiveSlide()
})

// Set the initial background image when the page loads
setBgToBody()

/**
 * Sets the body's background image to match the currently active slide.
 * This creates the blurred/darkened background effect for the whole page.
 */
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

/**
 * Updates which slide has the 'active' class.
 * It removes the 'active' class from all slides and then adds it only to the current one.
 */
function setActiveSlide() {
  // Remove 'active' class from all slides
  slides.forEach((slide) => slide.classList.remove('active'))

  // Add 'active' class to the new active slide
  slides[activeSlide].classList.add('active')
}