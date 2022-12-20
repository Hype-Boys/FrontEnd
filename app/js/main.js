const HomeLogo = document.querySelector(".Home_logo");

function join() {
  window.location = "../../public/html/join.html";
}

const joinbutton = document.querySelector(".Login_form");

joinbutton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Gd");
  window.location = "../../public/html/join.html";
});
