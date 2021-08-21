"use strict";

const loginInput = document.querySelector("#login input");
const loginForm = document.querySelector("#login");
const logoutForm = document.querySelector("#logout");
const logoutBtn = document.querySelector("#logout button");
const greetMessage = document.querySelector("#logout h1");

console.log(loginForm, loginInput, logoutBtn, greetMessage);

// 로그안버튼이 눌릴 경우 인풋의 값을 출력!!
// form - input 은 자동적으로 submit이 이루어지면서 새로고침을 기본으로 한다.
// 이런 기본 기능들을 막기위해 preventDefault() 를 사용한다.

// const newBtn = document.createElement("button");
// const btnText = document.createTextNode("logout");

const onLogin = (event) => {
  event.preventDefault();
  loginForm.classList.add("hide"); // 로그인 성공 시 폼 숨기기
  greetMessage.innerText = `Hello, ${loginInput.value}`; // 로그인 성공 시 메세지
  loginInput.value = ""; // 입력 초기화
  logoutForm.classList.remove("hide"); // 로그인 성공 시 로그아웃 폼 화면에 표시
};

const onLogout = (event) => {
  event.preventDefault();
  logoutForm.classList.add("hide"); // 로그아웃 성공 시 폼 숨기기
  loginForm.classList.remove("hide"); // 로그아웃 성공 시 로그인 폼 화면에 표시
};

// 버튼의 기본 설정은 브라우저에서 설정하고 인풋과 버튼을 감싸는 form 자체에서 이벤트 수행 - submit
loginForm.addEventListener("submit", onLogin);
logoutBtn.addEventListener("click", onLogout);

// 로그인 폼의 로그인 버튼이 눌렸을 때 로그인 폼을 안보이게 설정하도록
console.log(loginForm.style);
