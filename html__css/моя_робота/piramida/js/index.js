const btnNext = document.querySelector("#nextButton");
const sectionTwo = document.querySelector(".top2");


btnNext.addEventListener("click", () => {
    const positionY = sectionTwo.getBoundingClientRect().y;

    window.scrollTo(0, positionY);
})