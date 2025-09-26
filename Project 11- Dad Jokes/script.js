const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

const fallbackJokes = [
  'My code is like a "K" serial... it has too many unnecessary dependencies and never seems to end.',
  "Why don't programmers like to go outside? The sunlight creates too many race conditions.",
  "What's a developer's favorite snack? A 'byte' of samosa.",
  'My code has more bugs than a Mumbai local during rush hour.',
  "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
  'Relationship status: My `localhost` is not responding.',
]

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
  // Disable button and show loading state
  jokeBtn.disabled = true
  jokeEl.classList.add('typing')
  jokeEl.innerHTML = 'Generating a techy joke...'

  try {
    const res = await fetch('https://hindi-jokes-api.onrender.com/random')

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    const data = await res.json()

    // Start typing animation
    typeWriter(data.jokeContent)
  } catch (error) {
    console.error('Failed to fetch joke:', error)
    console.log('API failed. Using fallback joke.')
    // Use a fallback joke if the API fails
    const fallbackJoke =
      fallbackJokes[Math.floor(Math.random() * fallbackJokes.length)]
    typeWriter(fallbackJoke)
  }
}

function typeWriter(text, i = 0) {
  jokeEl.classList.add('typing')
  if (i < text.length) {
    jokeEl.innerHTML = text.substring(0, i + 1)
    setTimeout(() => typeWriter(text, i + 1), 50)
  } else {
    // Animation finished
    jokeEl.classList.remove('typing')
    jokeBtn.disabled = false // Re-enable button
  }
}