const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.carousel-dots');

let counter = 0;
const size = images[0].clientWidth;

// Создание точек
images.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => moveToSlide(index));
    dotsContainer.appendChild(dot);
});

// Переключение слайдов
nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    counter++;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    updateCarousel();
});

function updateCarousel() {
    carouselSlide.style.transform = `translateX(-${size * counter}px)`;
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === counter);
    });
}

function moveToSlide(index) {
    counter = index;
    updateCarousel();
}
