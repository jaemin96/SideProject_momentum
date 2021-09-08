// 시계 만들어보기
const Clock = () => {
  const currentTime = new Date();

  const divideTime = [String(currentTime).split(" ")];
  let my_clock_hour = divideTime[0][4].slice(0, 2);
  let my_clock_min_sec = divideTime[0][4].slice(3, 9);

  my_clock_hour > 12
    ? my_clock_hour % 12 < 10
      ? (my_clock_hour = `[PM]0${my_clock_hour % 12}`)
      : (my_clock_hour = `[PM]${my_clock_hour % 12}`)
    : (my_clock_hour = `[AM]${my_clock_hour}`);

  my_clock_hour < 10 && my_clock_hour == `0${my_clock_hour}`;

  console.log(`${my_clock_hour}:${my_clock_min_sec}`);
};

setInterval(Clock, 1000);
