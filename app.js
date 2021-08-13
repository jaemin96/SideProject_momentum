// people object 생성
const people = [
  {
    name: "김재민",
    birthDay: "1996-01-28",
    sex: "male",
    telephone: "010-4731-9889",
  },
];

// 객체와 개체 정보
console.log(people[0]);
console.log(people[0].name);
console.log(people[0].birthDay);
console.log(people[0].sex);
console.log(people[0].telephone);

// 개체 정보 변경 (Add, Update)
// Update!
people[0].sex = "female";
// Add!
people[0].money = "700,000";
// update object log!
console.log(people[0]);

// Add subObject
people.push({
  name: "케인",
  birthDay: "1990-11-21",
  sex: "male",
  telephone: "010-4432-9952",
});

console.log(people);
console.log(people[0]);
console.log(people[1]);
