const slider = document.querySelector(".slider-container");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
    if (currentIndex < 1) {
        currentIndex++;
        updateSlide();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlide();
    }
});

function updateSlide() {
    slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
}
