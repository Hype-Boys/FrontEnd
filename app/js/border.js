const goView = document.getElementById("goView");

goView.addEventListener("click", (event) => {
    window.location = "/public/html/view2.html";
});

var title, userName, content;

function titleOn() {
    title = document.getElementById('title').value;
}
function userNameOn() {
    userName = document.getElementById('userName').value;
}
function contentOn() {
    content = document.getElementById('content').value;
}

async function goAdd() {
    await fetch("http://192.168.205.56:8080/WEBFLIX/board/add", {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        title: title,
        username: userName,
        content: content,
      }),
      headers:{
        "Content-type": "application/json"
      },
    })
}


// function goAdd() {
//     await fetch("http://192.168.205.56:8080/WEBFLIX/board/add", {
//       method: 'POST',
//       mode: 'cors',
//       body: JSON.stringify({

//       }),
//       headers:{
//         "Content-type": "application/json"
//       },
//     })
// }