let currentSlideIndex = 0;

// Function to move to the next or previous slide
function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    currentSlideIndex += direction;

    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    } else if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }

    updateCarousel();
}

// Function to set the current slide based on indicator click
function currentSlide(index) {
    currentSlideIndex = index - 1; // Adjust for zero-based index
    updateCarousel();
}

// Function to update the carousel display
function updateCarousel() {
    const slides = document.querySelectorAll('.carousel-images img');
    const indicators = document.querySelectorAll('.indicator');

    // Update the transform property to show the current slide
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    // Update active indicator
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlideIndex);
    });
}

// Initialize the carousel
updateCarousel();
