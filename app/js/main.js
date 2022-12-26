const joinbutton = document.querySelector(".join_form");
const HomeLogo = document.querySelector(".Home_logo");
const loginbutton = document.querySelector(".login_form");
const id = document.querySelector(".ID");

const form_id = document.querySelector(".form_id");


const regexr = /^[a-z0-9]{4,10}$/;

HomeLogo.addEventListener("click", (event) => {
  event.preventDefault();
  window.location = "../../public/html/main.html";
});

function join() {
  window.location = "../../public/html/join.html";
}

loginbutton.addEventListener("submit", (event) => {
  event.preventDefault();
  window.location = "../../public/html/mbti.html";
});

joinbutton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location = "../../public/html/join.html";
});



form_id.addEventListener("submit", form_Id);


function form_Id(event) {
  event.preventDefault();
  let reg = "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$";
  const ID_value = id.value;

  if (!reg.test(ID_value)) {
    alert("다시 ID를 입력해주세요");
    return false;
  }
}











