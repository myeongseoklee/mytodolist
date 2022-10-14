const today = document.querySelector("#today")
const time = document.querySelector("#time")

function getToday () {
  const date = new Date();
  const todayYear = date.getFullYear();
  const todayMonth = String(date.getMonth() + 1).padStart(2,"0");
  const todayDate = String(date.getDate()).padStart(2,"0");
  const dayArr = ["Sun","Mon","Tue","Wed","Thr","Fri","Sat"]
  const todayDay = dayArr[date.getDay()];
  const fullDate = `${todayYear}. ${todayMonth}. ${todayDate}. ${todayDay}`
  today.innerText = fullDate
}

function getTime () {
  // 시간
  const date = new Date();
  // const todayHours = today.getHours() < 10 ? `0${today.getHours()}`: `${today.getHours()}`;
  // const todayMinutes = today.getMinutes() < 10 ? `0${today.getMinutes()}`: `${today.getMinutes()}` ;
  // const todaySeconds = today.getSeconds() < 10 ? `0${today.getSeconds()}` : `${today.getSeconds()}`;
  // const fullTime = `${todayHours} : ${todayMinutes} : ${todaySeconds}`
  // time.innerText = fullTime;
  const todayHours = String(date.getHours()).padStart(2,"0");
  const todayMinutes = String(date.getMinutes()).padStart(2,"0");
  const todaySeconds = String(date.getSeconds()).padStart(2,"0");
  const fullTime = `${todayHours} : ${todayMinutes} : ${todaySeconds}`
  time.innerText = fullTime;
}

function initiate () {
  setInterval(getTime, 1000);
  setInterval(getToday, 1000);

}

getToday(); // 함수 호출 안해주면, initiate 함수 실행 후에 호출돼서 브라우저에 늦게떠요~
getTime();
initiate();