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

const USER_NAME = "USER_NAME";

const onLogin = (event) => {
  event.preventDefault();
  loginForm.classList.add("hide"); // 로그인 성공 시 폼 숨기기
  const name = loginInput.value; //중복 사용되는 입력 값 선언
  localStorage.setItem(USER_NAME, name); // 로컬스토리지에 아이디 정보 저장
  greetMessage.innerText = `Hello, ${name}`; // 로그인 성공 시 메세지
  logoutForm.classList.remove("hide"); // 로그인 성공 시 로그아웃 폼 화면에 표시
};

const onLogout = (event) => {
  event.preventDefault();
  localStorage.removeItem(USER_NAME); // 로그아웃 시 로그인 정보 삭제
  logoutForm.classList.add("hide"); // 로그아웃 성공 시 폼 숨기기
  loginForm.classList.remove("hide"); // 로그아웃 성공 시 로그인 폼 화면에 표시
};

// 유저 정보가 없는 경우에만 로그인 폼을 보이게 설정
if (localStorage.getItem(USER_NAME) === null) {
  logoutForm.classList.add("hide");
  loginForm.classList.remove("hide");
  loginForm.addEventListener("submit", onLogin);
} else {
  loginForm.classList.add("hide");
  logoutForm.classList.remove("hide");
}

logoutBtn.addEventListener("click", onLogout);
