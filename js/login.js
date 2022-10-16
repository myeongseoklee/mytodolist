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
  loginId.classList.add(HIDDEN_CLASSNAME);
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

const logout = function(event) {
  localStorage.clear();
  window.location.reload(); 
}

loginForm.addEventListener("submit", submitId);
logoutButton.addEventListener("click",logout);

