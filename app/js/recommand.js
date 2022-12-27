function naverwebtoon() {
  window.location = "https://comic.naver.com/webtoon/list?titleId=758037";
}

const changeMBTI = document.querySelector(".B");
const localmbti = localStorage.getItem("mbti");

changeMBTI.innerText = `ㅤ${localmbti}`;

const ISTJ = [
  {
    img: "../../public/webtoon/1.jpg",
    name: "참교육",
    write: "",
    site: "https://comic.naver.com/webtoon/list?titleId=758037"
    
  },
];

const MBTI1 = {
  //INFP, ENFP, ESFP, ENFJ

};

const MBTI2 = {
  //INTP, INTJ, ISFP, ENTP

};

const MBTI3 = {
  //INFJ, ISFJ, ISTJ, ESFJ

};

const MBTI4 = {
  //ISTP, ENTJ, ESTJ, ESTP

};