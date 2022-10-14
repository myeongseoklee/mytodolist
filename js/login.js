const loginForm = document.querySelector("#loginForm");
const loginId = document.querySelector("#loginId");
const greeting = document.querySelector("#greeting");
const logoutDiv = document.querySelector("#logout");
const logoutButton = document.querySelector("#logoutButton");

const HIDDEN_CLASSNAME = "hidden";
const ID_KEY = "id";

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

const logout = function(event) {
  localStorage.clear();
  greeting.classList.add(HIDDEN_CLASSNAME);
  logoutDiv.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginId.value = ""; 
}
// 로그아웃 시 html의 todolist 삭제 기능 추가해야함.-> 이거 로그인화면이랑 메인 화면 분리해서 연결을 차단하는식? 으로 해야할거같은데.
  

loginForm.addEventListener("submit", submitId);
logoutButton.addEventListener("click",logout);

