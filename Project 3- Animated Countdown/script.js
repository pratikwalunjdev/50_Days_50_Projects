const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

function resetDOM() {
  counter.classList.remove('hide')
  finalMessage.classList.remove('show')

  nums.forEach((num) => {
    // Clear all classes
    num.classList.value = ''
  })

  // Add data-text attribute for glitch effect
  nums.forEach((num) => {
    num.setAttribute('data-text', num.innerText);
  });

  // Start the animation by adding 'in' to the first number
  nums[0].classList.add('in')
}

function setupEventListeners() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1

    num.addEventListener('animationend', (e) => {
      // When a number finishes animating in...
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        // ...make it animate out.
        num.classList.remove('in')
        num.classList.add('out')
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        // When a number finishes animating out, animate the next one in.
        num.nextElementSibling.classList.add('in')
      } else {
        // After the last number, hide the counter and show the final message.
        counter.classList.add('hide')
        finalMessage.classList.add('show')
      }
    })
  })
}

replay.addEventListener('click', resetDOM)

// Initial setup
setupEventListeners()
resetDOM()