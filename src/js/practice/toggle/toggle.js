// 태그 텍스트 변경하기
onUpdateText = (tag, text) => {
  tag.innerHTML = `[[ ${text} ]]`;
};

onChange = () => {
  if (confirm("텍스트의 색상을 변경하시겠습니까?")) {
    changeText.style.color = "blue";
  }
};

// 체인지 h1태그 불러오기 (가장 애용하는 방법)
const changeText = document.querySelector(".change");
// 쿼리셀렉터에 해당하는 모든 경우를 가져오는 방법 -- 잘안써봤음
const changeTextAll = document.querySelectorAll(".change");
// 클래스 네임 자체를 찾아오는 방법 -- 지양
// 클래스 자체 이름을 가져오는 것이기 떄문에 클래스명이라는 것을 가리키는 '.' 사용하지 않아도 됨
// document.getElementsById -- 아이디를 받아오는데 이 코드 사용하는거 자주 봄 -- 구식(?)
const dropperClassName = document.getElementsByClassName("change");

console.log(changeText);
// 위 경우를 제외한 반환 형태 - 리스트
console.log(changeTextAll);
console.log(dropperClassName);

onUpdateText(changeText, "Click me!!");

//  (1) -- 함수 불러오기 형태
// changeText.addEventListener("click", onChange);

//  (2) -- 함수 선언 일체 형태
changeText.addEventListener("click", () => {
  if (confirm("텍스트의 색상을 변경하시겠습니까?")) {
    //   토글링 -- 클릭 되어질 때만 blue로 색상 변경하기 위해 클래스 네임 토글링
    changeText.classList.toggle("Clicked");
  }
});
