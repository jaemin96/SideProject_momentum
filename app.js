"use strict";

const loginInput = document.querySelector(".login-input");
const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", () => {
  console.log(loginInput.innerHTML);
});
