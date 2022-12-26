const inputmbti = document.querySelector(".input_mbti");
const HomeLogo = document.querySelector(".Home_logo");

const showWebtoon = document.querySelector(".check11");


const eng = /^[A-z]{4}/g;
let a = document.getElementById("input_id");



 
const MBTI_KEY = "mbti";

HomeLogo.addEventListener("click", (event) => {
  event.preventDefault();
  window.location = "../../public/html/main.html";
});

showWebtoon.addEventListener("submit", (event) => {

  event.preventDefault();
  
  const mbtivalue = inputmbti.value;
  localStorage.setItem(MBTI_KEY, mbtivalue);

  if (!eng.test(mbtivalue)) {
    alert("MBTI를 입력하세요!");
    return;
  }


  window.location = "../../public/html/recommand.html";
});





