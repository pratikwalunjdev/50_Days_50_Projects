const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;
let sliderHeight = sliderContainer.clientHeight;

const updateSliderHeight = () => {
    sliderHeight = sliderContainer.clientHeight;
    // Recalculate transforms on resize to keep slider in sync
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};

window.addEventListener('resize', updateSliderHeight);

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    if (direction === 'up') {
        activeSlideIndex = (activeSlideIndex + 1) % slidesLength;
    } else if (direction === 'down') {
        activeSlideIndex = (activeSlideIndex - 1 + slidesLength) % slidesLength;
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};