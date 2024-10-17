console.log("Chegou aqui 2");
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-currentIndex * 100}%)`;
    });
}

function changeSlide(direction) {
    currentIndex += direction;
    showSlide(currentIndex);
}

// Iniciar o carrossel
showSlide(currentIndex);