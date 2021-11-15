("use strict");

const clockJM = document.querySelector("#successLogin #clock");

const getDate = () => {
  const date = new Date();

  let Hour = date.getHours();
  const Minute = String(date.getMinutes()).padStart(2, "0");
  const Second = String(date.getSeconds()).padStart(2, "0");

  Hour > 12
    ? (Hour = `[PM] ${String(Hour - 12).padStart(2, "0")}`)
    : (Hour = `[AM] ${String(Hour).padStart(2, "0")}`);

  clockJM.innerText = `${Hour}:${Minute}:${Second}`;
};

getDate();
setInterval(getDate, 1000);
