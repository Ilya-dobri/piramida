const btn = document.querySelector("#btn");
const section = document.querySelector(".section");

btn.onclick = () => {
  const positionY = section.getBoundingClientRect().y;
  window.scrollTo(0, positionY);
};

//btn - кнопка по которой будет происходить скролл
//section - секция до которой будет скролить