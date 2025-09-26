const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
const goalLiters = document.getElementById('goal-liters')
const customGoalInput = document.getElementById('custom-goal')
const setGoalBtn = document.getElementById('set-goal-btn')
const resetBtn = document.getElementById('reset-btn')

let goal = parseFloat(localStorage.getItem('waterGoal')) || 2; // Default goal 2 Liters

function initialize() {
    updateGoalDisplay();
    loadProgress();
    updateBigCup();
}

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

setGoalBtn.addEventListener('click', () => {
    const newGoal = parseFloat(customGoalInput.value);
    if (newGoal && newGoal > 0) {
        goal = newGoal;
        localStorage.setItem('waterGoal', goal);
        updateGoalDisplay();
        updateBigCup();
        customGoalInput.value = '';
    } else {
        alert('Please enter a valid positive number for the goal.');
    }
});

resetBtn.addEventListener('click', () => {
    if(confirm('Are you sure you want to reset your progress for the day?')) {
        smallCups.forEach(cup => cup.classList.remove('full'));
        updateBigCup();
    }
});

function highlightCups(idx) {
    // If the clicked cup is full and is the last filled cup, un-fill it.
    if (smallCups[idx].classList.contains('full') && (idx === smallCups.length - 1 || !smallCups[idx].nextElementSibling.classList.contains('full'))) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length
    const cupVolume = 250; // in ml

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.setAttribute('data-text', `${Math.round(fullCups / totalCups * 100)}%`);
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        const litersRemained = goal - (cupVolume * fullCups / 1000);
        liters.innerText = `${litersRemained.toFixed(2)}L`
    }

    saveProgress();
}

function updateGoalDisplay() {
    goalLiters.innerText = goal;
    const cupVolumeLiters = goal / smallCups.length;
    const cupVolumeMl = Math.round(cupVolumeLiters * 1000);
    smallCups.forEach(cup => {
        cup.innerText = `${cupVolumeMl} ml`;
    });
}

function saveProgress() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    localStorage.setItem('fullCups', fullCups);
}

function loadProgress() {
    const fullCupsCount = parseInt(localStorage.getItem('fullCups')) || 0;
    for(let i = 0; i < fullCupsCount; i++) {
        smallCups[i].classList.add('full');
    }
}

initialize();