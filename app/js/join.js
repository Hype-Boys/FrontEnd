const getUsers = () => {
  axios.get('https://b039-210-218-52-13.jp.ngrok.io')
}

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



const submit = document.getElementById('submit')

async function onclickSubmit() {
  alert("이메일이 발송 됐습니다!");

  await fetch("http://192.168.205.56:8080/WEBFLIX/send-email/send", {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      email: "s22027@gsm.hs.kr",
    }),
    headers:{
      "Content-type": "application/json"
    },
})

  // fetch("http://192.168.205.56:8080/WEBFLIX/send-email/send",
  // {
  //   method: 'Post',
  //   body: JSON.stringify({
  //     email: "s22027@gsm.hs.kr",
  //   }),
  //   headers:{
  //   "Content-type": "application/json"
  //   },
  //   credentials: true 
  // }).then((response) => console.log(response))


}