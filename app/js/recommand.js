function naverwebtoon() {
  window.location = "https://comic.naver.com/webtoon/list?titleId=758037";
}

const changeMBTI = document.querySelector(".B");
const localmbti = localStorage.getItem("mbti");

changeMBTI.innerText = `ㅤ${localmbti}`;

const bgImage = document.createElement("img");

const logo2 = document.querySelector(".logo");

logo2.addEventListener("click", (event) => {
  window.location = "../../public/html/index.html";
});


const MBTI = [
  //INFP, ENFP, ESFP, ENFJ

  {
    img: "../../public/webtoon/61.jpg",
    name: "싸움독학",
  },

  {
    img: "../../public/webtoon/51.jpg",
    name: "99강화 나무 몽둥이",
  },

  {
    img: "../../public/webtoon/16.jpg",
    name: "대학원 탈출일지",
  },

  {
    img: "../../public/webtoon/18.jpg",
    name: "놓지마 정신줄",
  },

  {
    img: "../../public/webtoon/25.jpg",
    name: "내가 죽기로 결심한 것은",
  },

  {
    img: "../../public/webtoon/33.jpg",
    name: "연애혁명",
  },

  {
    img: "../../public/webtoon/35.jpg",
    name: "독립일기",
  },

  {
    img: "../../public/webtoon/39.jpg",
    name: "호랑신랑년",
  },

  {
    img: "../../public/webtoon/46.jpg",
    name: "개를 낳았다",
  },

  {
    img: "../../public/webtoon/50.jpg",
    name: "그렇고 그런 바람에",
  },

  {
    img: "../../public/webtoon/53.jpg",
    name: "세레나",
  },

  {
    img: "../../public/webtoon/54.jpg",
    name: "취사병 전설이 되다",
  },

  {
    img: "../../public/webtoon/56.jpg",
    name: "먹는 인생",
  },

  {
    img: "../../public/webtoon/74.jpg",
    name: "시한부인 줄 알았어요",
  },

  {
    img: "../../public/webtoon/78.jpg",
    name: "연놈",
  },

  {
    img: "../../public/webtoon/79.jpg",
    name: "쓰레기는 쓰레기통에",
  },

  {
    img: "../../public/webtoon/79.jpg",
    name: "버려진 나의 최애를 위하여",
  },

  {
    img: "../../public/webtoon/86.jpg",
    name: "청춘 블라썸",
  },

  {
    img: "../../public/webtoon/87.jpg",
    name: "대충 캠퍼스로맨스임",
  },

  {
    img: "../../public/webtoon/89.jpg",
    name: "고백 취소도 되나?",
  },

  {
    img: "../../public/webtoon/14.jpg",
    name: "마루는 강쥐",
  },
];

const MBTI2 = [
  //INTP, INTJ, ISFP, ENTP

  {
    img: "../../public/webtoon/31.jpg",
    name: "재벌집 막내아들",
  },

  {
    img: "../../public/webtoon/43.jpg",
    name: "나 혼자 만렙 뉴비",
  },

  {
    img: "../../public/webtoon/44.jpg",
    name: "언니 이번생엔 내가 왕비야",
  },

  {
    img: "../../public/webtoon/48.jpg",
    name: "1초",
  },

  {
    img: "../../public/webtoon/49.jpg",
    name: "역대급 영지 설계사",
  },

  {
    img: "../../public/webtoon/67.jpg",
    name: "자매전쟁",
  },

  {
    img: "../../public/webtoon/68.jpg",
    name: "소녀재판",
  },

  {
    img: "../../public/webtoon/69jpg",
    name: "칼끝에 입술",
  },

  {
    img: "../../public/webtoon/70.jpg",
    name: "천하제일인",
  },

  {
    img: "../../public/webtoon/72.jpg",
    name: "앵무살수",
  },

  {
    img: "../../public/webtoon/81.jpg",
    name: "현실퀘스트",
  },

  {
    img: "../../public/webtoon/82.jpg",
    name: "무사만리행",
  },

  {
    img: "../../public/webtoon/84.jpg",
    name: "낙향문사전",
  },

  {
    img: "../../public/webtoon/15.jpg",
    name: "하루에 네가 되고 싶어",
  },

  {
    img: "../../public/webtoon/17.jpg",
    name: "내가 키운 S급들",
  },

  {
    img: "../../public/webtoon/20.jpg",
    name: "멸망 이후의 세계",
  },

  {
    img: "../../public/webtoon/23.jpg",
    name: "전지적 독자시점",
  },

  {
    img: "../../public/webtoon/29.jpg",
    name: "튜토리얼 탑의 고인물",
  },

  {
    img: "../../public/webtoon/30.jpg",
    name: "66666년 만에 환생한 흑맙법사",
  },

  {
    img: "../../public/webtoon/34.jpg",
    name: "남편을 죽여줘요",
  },
];

const MBTI3 = [
  //INFJ, ISFJ, ISTJ, ESFJ

  {
    img: "../../public/webtoon/19.jpg",
    name: "중증외상센터 골드아워",
  },

  {
    img: "../../public/webtoon/21.jpg",
    name: "내 남편과 결혼해줘",
  },

  {
    img: "../../public/webtoon/37.jpg",
    name: "별을 삼킨 너에게",
  },

  {
    img: "../../public/webtoon/40.jpg",
    name: "뮤즈온 유명",
  },

  {
    img: "../../public/webtoon/42.jpg",
    name: "어쩌다보니 천생연분",
  },

  {
    img: "../../public/webtoon/47.jpg",
    name: "세기말 풋사과 보습학원",
  },

  {
    img: "../../public/webtoon/55.jpg",
    name: "아홉수 우리들",
  },

  {
    img: "../../public/webtoon/57.jpg",
    name: "반드시 해피엔딩",
  },

  {
    img: "../../public/webtoon/60.jpg",
    name: "작전명 순정",
  },

  {
    img: "../../public/webtoon/71.jpg",
    name: "이별 후 사내 결혼",
  },

  {
    img: "../../public/webtoon/73.jpg",
    name: "똑닮은 딸",
  },

  {
    img: "../../public/webtoon/76.jpg",
    name: "올가미",
  },

  {
    img: "../../public/webtoon/85.jpg",
    name: "Only Hope",
  },



  {
    img: "../../public/webtoon/90.jpg",
    name: "수희0",
  },

  {
    img: "../../public/webtoon/2.jpg",
    name: "버림받은 왕녀의 은밀한 침실",
  },

  {
    img: "../../public/webtoon/3.jpg",
    name: "소녀의 세계",
  },

 
  {
    img: "../../public/webtoon/5.jpg",
    name: "뷰티풀 군바리",
  },

  {
    img: "../../public/webtoon/10.jpg",
    name: "물어보는 사이",
  },

  {
    img: "../../public/webtoon/11.jpg",
    name: "1을 줄게",
  },

  {
    img: "../../public/webtoon/13.jpg",
    name: "여신강림",
  },
  
];

const MBTI4 = [
  //ISTP, ENTJ, ESTJ, ESTP

  {
    img: "../../public/webtoon/4.jpg",
    name: "팔이피플",
  },

  {
    img: "../../public/webtoon/88.jpg",
    name: "존잘주의",
  },

  {
    img: "../../public/webtoon/28.jpg",
    name: "일렉시드",
  },

  {
    img: "../../public/webtoon/36.jpg",
    name: "나노마신",
  },

  {
    img: "../../public/webtoon/38.jpg",
    name: "천마육성",
  },

  {
    img: "../../public/webtoon/41.jpg",
    name: "외모지상주의",
  },

  {
    img: "../../public/webtoon/52.jpg",
    name: "호랑이형님",
  },

  {
    img: "../../public/webtoon/58.jpg",
    name: "프리드로우",
  },

  {
    img: "../../public/webtoon/63.jpg",
    name: "약한영웅",
  },

  {
    img: "../../public/webtoon/64.jpg",
    name: "입학용병",
  },

  {
    img: "../../public/webtoon/66.jpg",
    name: "사형소년",
  },

  {
    img: "../../public/webtoon/75.jpg",
    name: "하북팽가 막내아들",
  },

  {
    img: "../../public/webtoon/77.jpg",
    name: "나쁜사람",
  },

  {
    img: "../../public/webtoon/83.jpg",
    name: "데드퀸",
  },

  {
    img: "../../public/webtoon/1.jpg",
    name: "참교육",
  },

  {
    img: "../../public/webtoon/6.jpg",
    name: "퀘스트 지상주의",
  },

  {
    img: "../../public/webtoon/8.jpg",
    name: "윈드브레이커",
  },

  {
    img: "../../public/webtoon/12.jpg",
    name: "김부장",
  },

  {
    img: "../../public/webtoon/24.jpg",
    name: "격기3반",
  },

  {
    img: "../../public/webtoon/27.jpg",
    name: "헬퍼2",
  },
];

const Random_MBTI1 = MBTI[Math.floor(Math.random() * MBTI.length)];
const Random_MBTI2 = MBTI2[Math.floor(Math.random() * MBTI2.length)];
const Random_MBTI3 = MBTI3[Math.floor(Math.random() * MBTI3.length)];
const Random_MBTI4 = MBTI4[Math.floor(Math.random() * MBTI4.length)];

const MBTI_Check1 = {
  INFP: "INFP",
  ENFP: "ENFP",
  ESFP: "ESFP",
  ENFJ: "ENFJ",
}
const MBTI_Check2 = {
   INTP: "INTP",
   INTJ: "INTJ",
   ISFP: "ISFP",
   ENTP: "ENTP",
}
const MBTI_Check3 = {
  INFJ: "INFJ",
  ISFJ: "ISFJ",
  ISTJ: "ISTJ",
  ESFJ: "ESFJ",

}
const MBTI_Check4 = {
  ISTP: "ISTP",
  ESTP: "ESTP",
  ESTJ: "ESTJ",
  ENTJ: "ENTJ",
}

const img11 = document.querySelector(".imgg");
const webtoon_title = document.querySelector(".webtoon_title"); 

const mbtivalue1 = localStorage.getItem("mbti");
console.log(mbtivalue1);
  
  
  
if (MBTI_Check1[mbtivalue1] != undefined) {
  img11.src = Random_MBTI1.img;
  webtoon_title.innerText = Random_MBTI1.name;
}
else if(MBTI_Check2[mbtivalue1] != undefined) {
  img11.src = Random_MBTI2.img;
  webtoon_title.innerText = Random_MBTI2.name;
}
else if(MBTI_Check3[mbtivalue1] != undefined) {
  img11.src = Random_MBTI3.img;
  webtoon_title.innerText = Random_MBTI3.name;
}
else if(MBTI_Check4[mbtivalue1] != undefined) {
  img11.src = Random_MBTI4.img;
  webtoon_title.innerText = Random_MBTI4.name;
}