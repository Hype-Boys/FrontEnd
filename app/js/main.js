const joinbutton = document.querySelector(".join_form");
const HomeLogo = document.querySelector(".Home_logo");
const loginbutton = document.querySelector(".login_form");
const idInput = document.querySelector(".ID");

const form_id = document.querySelector(".form_id");

const regexr = /^[a-z0-9]{4,10}$/;
const pattern = /[^a-zA-Z]/;

HomeLogo.addEventListener(
  "click",
  () => (window.location = "../../public/html/main.html")
);

loginbutton.addEventListener(
  "submit",
  () => (window.location = "../../public/html/mbti.html")
);

joinbutton.addEventListener(
  "click",
  () => (window.location = "../../public/html/join.html")
);

const onChange = (e) => {
  if (pattern.test(e.target.value)) {
    alert("fdsa");
  } else {
    alert("이태랑");
  }
};

idInput.addEventListener("change", onChange);
