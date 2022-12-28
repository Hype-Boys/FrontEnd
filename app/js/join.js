const newlogin = document.querySelector(".login_form");

newlogin.addEventListener("submit", (event) => {
  event.preventDefault();
  window.location = "../../public/html/index.html";
});

const HomeLogo = document.querySelector(".Home_logo");

HomeLogo.addEventListener("click", (e) => {
  window.location = "../../public/html/index.html";
});

const PW_login = document.querySelector(".PW_login");
const PW_check = document.querySelector(".PW_check");
const font_error = document.querySelector(".PW_error");

let password_check;
let password_write;

const font_error2 = document.querySelector(".PW_error2");

// PW_login.addEventListener("change", (e) => {
//   const password = /^[A-Za-z0-9]{8,15}$/;

//   password_write = e.target.value;

//   console.log(password_write);

//   if (password_write.test(e.target.value)) {
//     font_error2.classList.add("hidden");
//   } else {
//     font_error2.classList.remove("hidden");
//   }
// });

const onChange = (e) => {
  const password = /^[A-Za-z0-9]{8,15}$/;

  password_write = e.target.value;
  console.log(password_write);

  if (!password.test(e.target.value)) {
    font_error2.classList.remove("hidden");
  }else {
    font_error2.classList.add("hidden");
  }
}
PW_login.addEventListener("change", onChange);



PW_check.addEventListener("change", (t) => {
  password_check = t.target.value;
  console.log(password_check);

  if (password_write != password_check) {
    font_error.classList.remove("hidden");
  } else {
    font_error.classList.add("hidden");
  }

  // font_error.classList.remove("hidden");
});
