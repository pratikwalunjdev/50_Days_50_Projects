const range = document.getElementById('range')

function handleInputChange(e) {
  const input = e.target
  const value = +input.value
  const label = input.nextElementSibling

  const range_width = getComputedStyle(input).getPropertyValue('width')
  const thumb_width = 24; // From CSS
  const num_width = +range_width.substring(0, range_width.length - 2)

  const max = +input.max
  const min = +input.min

  // This function maps a value from one range to another
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }

  // Calculate the left position for the label.
  // We map the input's value range (0-100) to the track's width range.
  // We also subtract half the thumb's width at the start and add it at the end
  // to keep the label centered over the thumb throughout the slider's travel.
  const left =
    value * (num_width / max) -
    thumb_width / 2 +
    scale(value, min, max, 10, -10)

  label.style.left = `${left}px`
  label.innerHTML = value

  // Update the track fill
  const fillPercent = ((value - min) * 100) / (max - min)
  input.style.background = `linear-gradient(to right, #00bfff ${fillPercent}%, #333 ${fillPercent}%)`
}

range.addEventListener('input', handleInputChange)

// Initialize the slider position and fill on page load
document.addEventListener('DOMContentLoaded', () => {
    handleInputChange({ target: range });
});