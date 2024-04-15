const btnNext2 = document.querySelector("#nextButton2");
const sectionThree = document.querySelector(".top3");
const position2 = sectionThree.getBoundingClientRect().y;


btnNext2.addEventListener("click", () => {
    window.scrollTo(0, position2);
  })