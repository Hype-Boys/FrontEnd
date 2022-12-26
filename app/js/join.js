const newlogin = document.querySelector(".login_form");

newlogin.addEventListener("submit", (event) => {
  event.preventDefault();
  window.location = "../../public/html/main.html";
});

const HomeLogo = document.querySelector(".Home_logo");

HomeLogo.addEventListener("click", (event) => {
  event.preventDefault();
  window.location = "../../public/html/main.html";
});

const password = /[a-zA-Z0-9]{8,15}$/;
