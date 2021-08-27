"use strict";

const loginInput = document.querySelector("#login input");
const loginForm = document.querySelector("#login");
const logoutForm = document.querySelector("#logout");
const logoutBtn = document.querySelector("#logout button");
const greetMessage = document.querySelector("#logout h1");
const loginClock = document.querySelector("#logout h2");

console.log(loginForm, loginInput, logoutBtn, greetMessage, loginClock);

// 로그안버튼이 눌릴 경우 인풋의 값을 출력!!
// form - input 은 자동적으로 submit이 이루어지면서 새로고침을 기본으로 한다.
// 이런 기본 기능들을 막기위해 preventDefault() 를 사용한다.

const USER_NAME = "USER_NAME";
const hidden = "hide";

// exist id!!
const existId = (e) => {
  // 아이디 정보가 있을 시, 로그아웃 폼은 표시 로그인 폼은 표시하지 않음
  logoutForm.classList.remove(hidden);
  loginForm.classList.add(hidden);
};

// not exist id!!
const notExistId = (e) => {
  // 아이디 정보가 없을 시, 로그인 폼은 표시 로그아웃 폼은 표시하지 않음
  loginForm.classList.remove(hidden);
  logoutForm.classList.add(hidden);
};

// print user name!
const onPrintName = (name) => {
  greetMessage.innerText = `Hello, ${name}`;
};

// login!
const onLogin = (event) => {
  event.preventDefault();
  const name = loginInput.value; //중복 사용되는 입력 값 선언
  localStorage.setItem(USER_NAME, name); // 로컬스토리지에 아이디 정보 저장
  onPrintName(name); // 로그인 성공 시 메세지
  loginInput.value = "";
  existId();
};

// logout!
const onLogout = (event) => {
  event.preventDefault();
  notExistId();
  localStorage.removeItem(USER_NAME); // 로그아웃 시 로그인 정보 삭제
};

// saved user name
const SAVED_NAME = localStorage.getItem(USER_NAME);

// 유저 정보가 없는 경우에만 로그인 폼을 보이게 설정
if (localStorage.getItem(USER_NAME) === null) {
  notExistId();
  loginForm.addEventListener("submit", onLogin);
} else {
  existId();
  onPrintName(SAVED_NAME);
}

logoutBtn.addEventListener("click", onLogout);

// 시계
// 1) 시간을 띄우는 함수 만들기
const setClock = (e) => {
  // 시,분,초 만드는 내가 아는 방법
  // 날짜 객체를 생성해서 객체에서 시,분,초 정보 가져오기
  const recentTime = new Date();
  let time_hour = recentTime.getHours();
  let time_min = recentTime.getMinutes();
  let time_sec = recentTime.getSeconds();

  // 시간이 한 자릿수 일 때
  if (time_hour < 10) {
    time_hour = `0${time_hour}`;
  }

  // 분이 한 자릿수 일 때
  if (time_min < 10) {
    time_min = `0${time_min}`;
  }

  // 초가 한 자릿수 일 때
  if (time_sec < 10) {
    time_sec = `0${time_sec}`;
  }

  // AM과 PM으로 시간 구분하기
  if (time_hour > 12) {
    loginClock.innerText = `${time_hour - 12}:${time_min}:${time_sec}[PM]`;
  } else {
    loginClock.innerText = `${time_hour}:${time_min}:${time_sec}[AM]`;
  }

  // 이 코드가 정상 작동하는 이유는 0을 붙힌 시, 분, 초가 유지되는 것이 아닌 1초마다 함수가 재실행되어 get 메소드를 반복하기 떄문에
  // 10이 되는 순간 if문은 작동하지 않고 새로운 시, 분, 초가 할당되기 때문에 010이 아닌 10으로 정상적으로 작동하게 된다.
};

// 시계 만들기 - setInterval
// 1000ms = 1s , 1초마다 setClock 함수를 실행한다.
// 리엑트에서는 useEffect를 사용해서 렌더링을 제어할 수 있다.
// 지금은 새로고침하면 0.5~1초 뒤에 카운트가 시작되는 문제가 발생
setInterval(setClock, 1000);
