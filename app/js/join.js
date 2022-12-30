const newSignUp = document.getElementById('signUpForm')
const HomeLogo = document.getElementById('homeLogo')

HomeLogo.addEventListener("click", (e) => {
  window.location = "/public/html/index.html";
});

var inputValue;
function inputValueChange(){
  inputValue = document.getElementById('inputValue').value;
}

const submit = document.getElementById('submit')
async function onclickSubmit() {
  alert("이메일이 발송 됐습니다!");

  await fetch("http://192.168.205.56:8080/WEBFLIX/send-email/send", {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      email: inputValue,
    }),
    headers:{
      "Content-type": "application/json"
    },
})
}


var inputCheckNum;
function inputNum() {
  inputCheckNum = document.getElementById('checkNum').value;
}
async function checkNum() {
  await fetch("http://192.168.205.56:8080/WEBFLIX/verify-email?" + new URLSearchParams({
    email: inputValue,
    authCode: inputCheckNum,
  }), {
    method: 'HEAD',
    mode: 'cors',
    headers:{
      "Content-type": "application/json"
    },
  })
}




/* Password accord check */

var passwordSet;

var nameSet;
function name() {
  nameSet = document.getElementById('name').value;
}

let target = document.getElementById("pw");
let target2 = document.getElementById("pw2");

function check_pw(){

    let pw = document.getElementById('pw').value;
    let SC = ["!","@","#","$","%", "*"];
    let check_SC = 0;

    if(pw.length < 8 || pw.length > 16){
        window.alert('비밀번호는 8글자 이상, 16글자 이하만 이용 가능합니다.');
        document.getElementById('pw').value='';
    }
    for(var i=0;i<SC.length;i++){
        if(pw.indexOf(SC[i]) != -1){
            check_SC = 1;
        }
    }
    if(check_SC == 0){
        window.alert('!,@,#,$,%,*의 특수문자가 들어가 있지 않습니다.')
        document.getElementById('pw').value='';
    }
    if(document.getElementById('pw').value !='' && document.getElementById('pw2').value!=''){
        if(document.getElementById('pw').value==document.getElementById('pw2').value){
            target.style.borderBottom = "3px solid blue";
            target2.style.borderBottom = "3px solid blue";
            document.getElementById('check').innerHTML='비밀번호가 일치합니다.'
            document.getElementById('check').style.color='blue';

            newSignUp.addEventListener("submit", async (event) => {
              event.preventDefault();
              name();
              check_pw();

              await fetch("http://192.168.205.56:8080/WEBFLIX/auth/signup", {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({
                  name: nameSet,
                  email: inputValue,
                  password: pw,
                }),
                headers:{
                  "Content-type": "application/json"
                },
                
              })
              window.location = "/public/html/index.html";
            });
            
        }
        else{
            target.style.borderBottom = "3px solid red";
            target2.style.borderBottom = "3px solid red";
            document.getElementById('check').innerHTML='비밀번호가 일치하지 않습니다.';
            document.getElementById('check').style.color='red';
        }
    }
}
