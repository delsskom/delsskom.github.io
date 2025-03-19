const slides = document.querySelector(".slides");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let currentIndex = 0;

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % 2; 
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + 2) % 2; 
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
});
