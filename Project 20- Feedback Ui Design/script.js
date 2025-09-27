const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = ''

ratingsContainer.addEventListener('click', (e) => {
    // Use .closest() to find the parent .rating element
    const clickedRating = e.target.closest('.rating');

    if (clickedRating) {
        removeActive()
        clickedRating.classList.add('active')
        // Find the 'small' tag within the clicked rating and get its text
        selectedRating = clickedRating.querySelector('small').innerHTML
    }
})

sendBtn.addEventListener('click', (e) => {
    // Add animation class
    panel.classList.add('sending');

    // Wait for animation to finish before changing content
    setTimeout(() => {
        panel.innerHTML = `
            <i class="fas fa-heart"></i>
            <strong>Thank You!</strong>
            <br>
            <strong>Feedback: ${selectedRating || 'No feedback given'}</strong>
            <p>We'll use your feedback to improve our customer support.</p>
        `
        panel.classList.remove('sending'); // Make it visible again
    }, 400); // A bit longer than the CSS transition
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}