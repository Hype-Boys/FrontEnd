const inputmbti = document.querySelector(".input_mbti");
const HomeLogo = document.querySelector(".Home_logo");

const showWebtoon = document.querySelector(".check11");

const MBTI_KEY = "mbti";

HomeLogo.addEventListener("click", (event) => {
  event.preventDefault();
  window.location = "../../public/html/main.html";
});

showWebtoon.addEventListener("submit", (event) => {

  event.preventDefault();
  const mbtivalue = inputmbti.value;
  console(MBTI_KEY);
  localStorage.setItem(MBTI_KEY, mbtivalue);
  window.location = "../../public/html/recommand.html";
});




