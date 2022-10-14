const loginForm = document.querySelector("#loginForm");
const loginId = document.querySelector("#loginId");
const greeting = document.querySelector("#greeting");
const logoutDiv = document.querySelector("#logout");
const logoutButton = document.querySelector("#logoutButton");

const HIDDEN_CLASSNAME = "hidden";
const ID_KEY = "id";

// 로그인
const submitId = function (event) {
  const id = loginId.value;
  localStorage.setItem(ID_KEY, id);
  event.preventDefault();
  paintGreeting();
}

const paintGreeting = function () {
  const userName = localStorage.getItem(ID_KEY);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${userName}!`;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  logoutDiv.classList.remove(HIDDEN_CLASSNAME);
}

const userName = localStorage.getItem(ID_KEY);

if(userName !== null) { // 새로고침 시 로그인 상태 유지
  paintGreeting();
}
else {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}

// 로그아웃

// function deleteList(event) { // 메모리와 html에 저장된 정보를 삭제
//   const div = event.target.parentElement;
//   todos = todos.filter(item => item.id !== parseInt(div.id)); // memory 정보 삭제
//   div.remove(); // html 정보 삭제
//   saveList(); // 메모리 정보와 연결하여 로컬스토리지 정보 최신화
// }

const logout = function(event) {
  localStorage.clear();
  window.location.reload(); 
}

loginForm.addEventListener("submit", submitId);
logoutButton.addEventListener("click",logout);

