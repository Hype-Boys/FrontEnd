const HomeLogo = document.querySelector(".Home_logo");
const joinbutton = document.querySelector(".join_form");

function join() {
  window.location = "../../public/html/join.html";
}

HomeLogo.addEventListener("click", (event) => {
  event.preventDefault();
  window.location = "../../public/html/main.html"
})




joinbutton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location = "../../public/html/join.html";
});
