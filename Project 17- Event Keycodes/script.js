const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
  // Clear existing content
  insert.innerHTML = '';

  // Function to create a key element
  const createKeyElement = (label, value) => {
    const keyDiv = document.createElement('div');
    keyDiv.classList.add('key');
    keyDiv.innerHTML = `
      ${value}
      <small>${label}</small>
    `;
    return keyDiv;
  };

  // Create and append key elements
  const keyElement = createKeyElement('event.key', event.key === ' ' ? 'Space' : event.key);
  insert.appendChild(keyElement);

  const keyCodeElement = createKeyElement('event.keyCode', event.keyCode);
  insert.appendChild(keyCodeElement);

  const codeElement = createKeyElement('event.code', event.code);
  insert.appendChild(codeElement);
})