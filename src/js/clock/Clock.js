("use strict");

const loginClock = document.querySelector("#successLogin #clock");

const confirmTime = (time) => {
  if (time < 10) {
    time = `0${time}`;
  }

  return time;
};

// 시계
const showClock = (e) => {
  // 날짜 객체를 생성해서 객체에서 시,분,초 정보 가져오기
  const recentTime = new Date();

  // 동적 값 할당을 위해 const가 아닌 let을 사용
  let time_hour = recentTime.getHours();
  let time_PM_hour = recentTime.getHours() - 12;
  let time_min = recentTime.getMinutes();
  let time_sec = recentTime.getSeconds();

  // 시간이 한 자릿수 일 때
  time_hour = confirmTime(time_hour);
  time_PM_hour = confirmTime(time_PM_hour);
  time_min = confirmTime(time_min);
  time_sec = confirmTime(time_sec);

  // AM과 PM으로 시간 구분하기
  if (time_hour > 12) {
    loginClock.innerText = `${time_PM_hour}:${time_min}:${time_sec}[PM]`;
  } else {
    loginClock.innerText = `${time_hour}:${time_min}:${time_sec}[AM]`;
  }

  // 이 코드가 정상 작동하는 이유는 0을 붙힌 시, 분, 초가 유지되는 것이 아닌 1초마다 함수가 재실행되어 get 메소드를 반복하기 떄문에
  // 10이 되는 순간 if문은 작동하지 않고 새로운 시, 분, 초가 할당되기 때문에 010이 아닌 10으로 정상적으로 작동하게 된다.
};

setInterval(showClock, 1000);
