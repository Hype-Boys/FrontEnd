const inputmbti = document.querySelector(".input_mbti");
const showWebtoon = document.querySelector(".check11");
const HomeLogo = document.querySelector(".Home_logo");

HomeLogo.addEventListener("click", (event) => {
  event.preventDefault();
  window.location = "../../public/html/main.html";
});

showWebtoon.addEventListener("submit", (event) => {
  event.preventDefault();
  window.location = "../../public/html/recommand.html";
})

