const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
const eraserEl = document.getElementById('eraser');
const glowEl = document.getElementById('glow');
const saveEl = document.getElementById('save');

const ctx = canvas.getContext('2d');

let size = 10;
let isPressed = false;
let isEraser = false;
let isGlow = false;
colorEl.value = 'black';
let color = colorEl.value;
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;

    // Start drawing with a dot
    drawCircle(x, y);
});

document.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    
    // Handle eraser and glow effects
    if (isEraser) {
        ctx.globalCompositeOperation = 'destination-out';
    } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = color;
        if (isGlow) {
            ctx.shadowColor = color;
            ctx.shadowBlur = 20;
        } else {
            ctx.shadowBlur = 0;
        }
        ctx.fill();
    }
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = size * 2;

    // Handle eraser and glow effects
    if (isEraser) {
        ctx.globalCompositeOperation = 'destination-out';
    } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = color;
        if (isGlow) {
            ctx.shadowColor = color;
            ctx.shadowBlur = 20;
        } else {
            ctx.shadowBlur = 0;
        }
    }
    ctx.stroke();
}

function updateSizeOnScreen() {
    sizeEL.innerText = size
}

increaseBtn.addEventListener('click', () => {
    size += 5;

    if(size > 50) {
        size = 50;
    }

    updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', () => {
    size -= 5;

    if(size < 5) {
        size = 5;
    }

    updateSizeOnScreen();
});

colorEl.addEventListener('change', (e) => {
    color = e.target.value;
    // When a color is picked, switch off the eraser
    isEraser = false;
    updateActiveTool();
});

clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height));

// --- New Feature Event Listeners ---

eraserEl.addEventListener('click', () => {
    isEraser = !isEraser; // Toggle eraser state
    updateActiveTool();
});

glowEl.addEventListener('click', () => {
    isGlow = !isGlow; // Toggle glow state
    glowEl.classList.toggle('active', isGlow);
});

saveEl.addEventListener('click', () => {
    // Create a temporary link element
    const link = document.createElement('a');
    // Set the download attribute with a filename
    link.download = 'drawing.png';
    // Convert canvas to data URL and set as href
    link.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    // Trigger the download
    link.click();
});

function updateActiveTool() {
    // Remove active class from all tools that can be active
    eraserEl.classList.remove('active');
    colorEl.classList.remove('active');

    if (isEraser) {
        eraserEl.classList.add('active');
    } else {
        // Visually, the color input can represent the "pen" tool
        colorEl.classList.add('active');
    }
}

// Set initial active tool on load
updateActiveTool();