const joinbutton = document.querySelector(".join_form");
const HomeLogo = document.querySelector(".Home_logo");
const loginbutton = document.querySelector(".login_form");
const idInput = document.querySelector(".ID");
const pwInput = document.querySelector(".PASSWORD");

const id_error = document.querySelector(".id_error");
const pw_error = document.querySelector(".pw_error");

const form_id = document.querySelector(".form_id");
let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]+.[a-z]{2,3}");



const pattern = /[^a-zA-Z](?=.*\d)(?=.*[@$!%*#?&]){16}/;
const pattern2 = /^[A-Za-z0-9]{8,15}$/;




HomeLogo.addEventListener("click", (event) => {
  event.preventDefault();
  window.location = "../../public/html/main.html";
})

loginbutton.addEventListener("submit", (event) => {
  event.preventDefault();
  window.location = "../../public/html/mbti.html";
});

joinbutton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location = "../../public/html/join.html";
});


//아이디 확인
const onChange = (e) => {
 
  if (regex.test(e.target.value)) {
    id_error.classList.add("hidden");
  } else {
    id_error.classList.remove("hidden");
  }
};


//비밀번호 확인
const onChange2 = (t) => {
 
  if (pattern2.test(t.target.value)) {
    pw_error.classList.add("hidden");
  } else {  
    pw_error.classList.remove("hidden");
  }
};



idInput.addEventListener("change", onChange);
pwInput.addEventListener("change", onChange2)














