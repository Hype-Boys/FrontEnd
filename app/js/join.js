const newlogin = document.querySelector(".login_form");

newlogin.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location = "../../public/html/main.html";
});