const inputmbti = document.querySelector(".input_mbti");
const HomeLogo = document.querySelector(".Home_logo");

const showWebtoon = document.querySelector(".check11");

let a = document.getElementById("input_id");

const MBTI_KEY = "mbti";

const MBTI = [
  "ISTJ",
  "ISFJ",
  "INFJ",
  "INTJ",
  "ISTP",
  "ISFP",
  "INFP",
  "INTP",
  "ESTP",
  "ESFP",
  "ENFP",
  "ENTP",
  "ESTJ",
  "ESFJ",
  "ENFJ",
  "ENTJ",
];

HomeLogo.addEventListener("click", (event) => {
  event.preventDefault();
  window.location = "../../public/html/main.html";
});

showWebtoon.addEventListener("submit", (event) => {
  event.preventDefault();
  const eng = /^[A-Z]{4}/g;

  const mbtivalue = inputmbti.value;
  localStorage.setItem(MBTI_KEY, mbtivalue);

  if (!eng.test(mbtivalue)) {
    alert("error1");
    return;
  }

  for (let i = 0; i < 16; i++) {
    if (String(mbtivalue) === MBTI[i]) {
      window.location = "../../public/html/recommand.html";
    } else {
      alert("error2");
      break;
    }
  }
});
