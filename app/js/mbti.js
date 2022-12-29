const inputmbti = document.querySelector(".input_mbti");
const HomeLogo = document.querySelector(".Home_logo");

const showWebtoon = document.querySelector(".check11");

let a = document.getElementById("input_id");

const MBTI_KEY = "mbti";



const MBTI = {
  ISTJ: "ISTJ",
  ISFJ: "ISFJ",
  INFJ: "INFJ",
  INTJ: "INTJ",
  ISTP: "ISTP",
  ISFP: "ISFP",
  INFP: "INFP",
  ESTP: "ESTP",
  ESFP: "ESFP",
  ENFP: "ENFP",
  ENTP: "ENTP",
  ESTJ: "ESTJ",
  ESFJ: "ESFJ",
  ENFJ: "ENFJ",
  ENTJ: "ENTJ",
  INTP: "INTP",
  SEXY: "SEXY",
}

HomeLogo.addEventListener("click", () => {
  event.preventDefault();
  window.location = "../../public/html/index.html";
});


showWebtoon.addEventListener("submit", (event) => {
  event.preventDefault();
  const eng = /^[A-Z]{4}/g;

  const mbtivalue = inputmbti.value;
  console(MBTI_KEY);
  localStorage.setItem(MBTI_KEY, mbtivalue);
  

    if (!eng.test(mbtivalue)) {
      alert("4자/영어 또는 대문자로 입력해주세요");
      return;
  }
  
  console.log(MBTI[mbtivalue]);

  if (MBTI[mbtivalue] != undefined) {
    window.location = "../../public/html/recommand.html";
  } else {
    alert("다시 입력하세요");
  }
  


});
