const btnNext2 = document.querySelector("#nextButton2");
const sectionThree = document.querySelector(".top3");


btnNext2.addEventListener("click", () => {
    const position2 = sectionThree.getBoundingClientRect();
    window.scrollTo(0, position2.y);
  })