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
people[0].sex = "male!";
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

// n제곱 === "**"
console.log(5 ** 3);

console.log("------------------");

// 기존 김재민 정보만 들어있는 people 객체에서 케인의 정보도 포함된 최종 people 객체 정보를
// 복사해서 ("..." <--) 새로운 객체(newPeople)를 생성한다.
const newPeople = [...people];

console.log(newPeople);
console.log(newPeople[0]);
console.log(newPeople[1]);

// 자바스크립트 함수 선언 === function(){}
// object의 entity 들을 보여주는 함수
const showPeople = (entity) => {
  console.log(entity);
};

// 김재민의 정보를 넘겨준다.
showPeople(newPeople[0].name);
showPeople(newPeople[0].birthDay);
showPeople(newPeople[0].sex);
showPeople(newPeople[0].telephone);

// 케인의 정보를 넘겨준다.
showPeople(newPeople[1].name);
showPeople(newPeople[1].birthDay);
showPeople(newPeople[1].sex);
showPeople(newPeople[1].telephone);

console.log("--------*****--------");

// map 함수 사용하는 거 다시 찾아보기!!
// const mapItems = newPeople.map((item) => {
//   item.name;
// });

// console.log(mapItems);
