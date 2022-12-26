const joinbutton = document.querySelector(".join_form");
const HomeLogo = document.querySelector(".Home_logo");
const loginbutton = document.querySelector(".login_form");

loginbutton.addEventListener("submit", (event) => {
  event.preventDefault();
  window.location = "../../public/html/mbti.html";
  
});


HomeLogo.addEventListener("click", (event) => {
  event.preventDefault();
  window.location = "../../public/html/main.html"
})


function join() {
window.location = "../../public/html/join.html";
}


joinbutton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location = "../../public/html/join.html";
});
