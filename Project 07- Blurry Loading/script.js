const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

// Set the background image
bg.style.backgroundImage = `url('https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80')`

let load = 0
let lastTime = 0
const interval = 30 // Update every 30ms

function blurring(currentTime) {
  if (load > 99) {
    loadText.style.opacity = 0 // Fully fade out when done
    return // Stop the animation
  }

  if (!lastTime) {
    lastTime = currentTime
  }

  const deltaTime = currentTime - lastTime

  if (deltaTime >= interval) {
    load++
    lastTime = currentTime

    const percentage = Math.floor(load)
    loadText.innerText = `${percentage}%`
    loadText.dataset.text = `${percentage}%` // For the glitch effect
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
  }

  requestAnimationFrame(blurring)
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

requestAnimationFrame(blurring)