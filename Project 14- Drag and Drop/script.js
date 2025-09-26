const fills = document.querySelectorAll('.fill')
const empties = document.querySelectorAll('.empty')

let draggedItem = null
let sourceContainer = null

// --- Draggable Item Event Listeners ---
fills.forEach(fill => {
    fill.addEventListener('dragstart', dragStart)
    fill.addEventListener('dragend', dragEnd)
})

// --- Drop Target Event Listeners ---
empties.forEach(empty => {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
})

// --- Drag Functions ---
function dragStart(e) {
    draggedItem = this
    sourceContainer = this.parentElement
    this.classList.add('hold')
    // Use a timeout to allow the browser to render the drag image before hiding the element
    setTimeout(() => this.classList.add('invisible'), 0)
}

function dragEnd() {
    // Clean up classes on the item that was dragged
    this.classList.remove('hold', 'invisible')
}

// --- Drop Functions ---
function dragOver(e) {
    // This is necessary to allow a drop
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.classList.add('hovered')
}

function dragLeave() {
    this.classList.remove('hovered')
}

function dragDrop(e) {
    this.classList.remove('hovered')
    // Swap the items
    const targetItem = this.querySelector('.fill')
    if (targetItem) {
        sourceContainer.append(targetItem)
    }
    this.append(draggedItem)
}