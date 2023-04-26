'use strict'

// 初始變數
const listArea = document.querySelector("#list-area");
const list = document.querySelector("#my-todo");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#new-todo");
const done = document.querySelector("#my-done");

// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];

// 加入資料
for (let todo of todos) {
  addItem(todo);
}

// 函式：加入todo
function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label class="todo" for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
}

// 函式：加入done
function addDone(text) {
  let newDone = document.createElement("li");
  newDone.innerHTML = `
    <label class="done checked" for="done">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  done.appendChild(newDone);
}

// 點Add加入新項目
addBtn.addEventListener("click", function () {
  const inputValue = input.value.trim();

  if (inputValue.length > 0) {
    addItem(inputValue);
  }
});

// 按Enter加入新項目
input.addEventListener("keyup", (event) => {
  const inputValue = input.value;
  if (event.key === "Enter") {
    if (inputValue.trim().length > 0 && inputValue.length > 0) {
      // 要有內容才能加入，並刪除多於空白
      addItem(inputValue);
    }
  }
});

// delete and check
listArea.addEventListener("click", (event) => {
  // 要監聽整個listArea才能抓到全部的範圍
  const target = event.target;
  let parentElement = target.parentElement;

  if (target.classList.contains("delete")) {
    parentElement.remove();
  } else if (target.classList.contains("todo")) {
    addDone(target.textContent);
    parentElement.remove();
  }
});