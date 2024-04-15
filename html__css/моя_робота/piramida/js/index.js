const btnNext = document.querySelector("#nextButton");
const sectionTwo = document.querySelector(".top2");
const positionY = sectionTwo.getBoundingClientRect().y;

btnNext.addEventListener("click", () => {

    window.scrollTo(0, positionY);
})

