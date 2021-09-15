"use strict";

const bgForm = document.querySelector("#successLogin");

const changeBgColor = () => {
  // math.floor로 부동소수점 버리고 정수 반환하기
  let value_R = Math.floor(Math.random() * 254);
  let value_G = Math.floor(Math.random() * 254);
  let Value_B = Math.floor(Math.random() * 254);
  let Value_A = Math.floor(Math.random() * 1 * 10) / 10;

  console.log(Value_A);

  bgForm.style.background = `rgba(${value_R},${value_G},${Value_B},${Value_A})`;
};

setInterval(changeBgColor, 6000);
