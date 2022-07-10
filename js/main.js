const downBtn = document.querySelector(".down-button");
const upBtn = document.querySelector(".up-button");
const sidebars = document.querySelector(".sidebars");
const mainSlide = document.querySelector(".main-slide");
const slides = mainSlide.querySelectorAll("div").length;
let container = document.querySelector(".container");

sidebars.style.top = `-${(slides - 1) * 100}vh`;

let activeSlideIndex = 0;

upBtn.addEventListener("click", () => {
    changeSlide("up");
});

downBtn.addEventListener("click", () => {
    changeSlide("down");
});

function changeSlide(direction) {
    if (direction === "down") {
        activeSlideIndex++;
        if (activeSlideIndex === slides) {
            activeSlideIndex = 0;
        }
    } else if (direction === "up") {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slides - 1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebars.style.transform = `translateY(${activeSlideIndex * height}px)`;
}