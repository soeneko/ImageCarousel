let currentIndex = 0;
const images = document.querySelectorAll(".carousel-images img");
const dots = document.querySelectorAll(".dot");

function updateCarousel() {
  images.forEach((img, index) => {
    img.classList.toggle("active", index === currentIndex);
    dots[index].classList.toggle("active", index === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

setInterval(nextSlide, 8000); // Auto-slide every 8 seconds

updateCarousel(); // Initialize carousel
