const joinbutton = document.querySelector(".join_form");
const HomeLogo = document.querySelector(".Home_logo");


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
