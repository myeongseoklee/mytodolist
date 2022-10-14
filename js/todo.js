const inputBox = document.querySelector("#inputBox");
const createdList = document.querySelector("#createdList");
const thingTodo = document.querySelector("#writeBox");


let todos = [];

function saveList() { // 메모리 정보를 로컬 스토리지에 복사
  localStorage.setItem("todos",JSON.stringify(todos));
}

function deleteList(event) { // 메모리와 html에 저장된 정보를 삭제
  const div = event.target.parentElement;
  todos = todos.filter(item => item.id !== parseInt(div.id)); // memory 정보 삭제
  div.remove(); // html 정보 삭제
  saveList(); // 메모리 정보와 연결하여 로컬스토리지 정보 최신화
}

function paintList(key) { // 메모리 정보를 활용해 html 그림
  const todoList = document.createElement("div");
  todoList.innerText = `${key.list}`
  const listDeleteButton = document.createElement("button");
  listDeleteButton.innerText = '❌';
  listDeleteButton.addEventListener("click", deleteList);
  createdList.appendChild(todoList);
  todoList.appendChild(listDeleteButton);
  todoList.id = key.id ;
}

const createList = function(event) {  // 제출한 정보를 메모리와 로컬스토리지에 저장
  event.preventDefault();
  const list = thingTodo.value;
  thingTodo.value = '';
  const key = {
    list : list,
    id : Date.now()
  }
  todos.push(key);
  paintList(key);
  saveList();
}

const savedList = localStorage.getItem("todos");

if(savedList !== null) { // 새로고침 시 리스트 유지
  todos = JSON.parse(savedList);
  todos.forEach(paintList);
}

inputBox.addEventListener("submit", createList);