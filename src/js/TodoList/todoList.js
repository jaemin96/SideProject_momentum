("use strict");

const todoInput = document.querySelector("#todoListForm input");
const todoAddBtn = document.querySelector(".todoAddBtn");
const todoList = document.querySelector("#todoList");

const listItem = document.createElement("li");
const deleteBtn = document.createElement("button");

const handler = {
  addList: () => {},

  deleteList: () => {},
};

todoAddBtn.innerHTML = "+";

// 추가버튼 클릭

// 삭제버튼 클릭

// 로컬스토리지에 저장
