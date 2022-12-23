function naverwebtoon() {
  window.location = "https://comic.naver.com/webtoon/list?titleId=758037";
}

const changeMBTI = document.querySelector(".B");
const localmbti = localStorage.getItem("mbti");

changeMBTI.innerText = `ㅤ${localmbti}`;
