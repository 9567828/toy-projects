const h1 = document.querySelector("h1");
const btn = document.querySelector(".btn");
const spanN1 = document.querySelector(".n1");
const spanN2 = document.querySelector(".n2");
const spanN3 = document.querySelector(".n3");
const spanN4 = document.querySelector(".n4");
const spanN5 = document.querySelector(".n5");
const spanN6 = document.querySelector(".n6");
const span = document.querySelectorAll("span");
const numWrap = document.querySelector(".random_num");

const HIDDEN = "hidden";

function clickBtn() {
  let randomNumArray = [];
  for (i = 0; i < 6; i++) {
    randomNum = Math.floor(Math.random() * 45) + 1;
    if (randomNumArray.indexOf(randomNum) === -1) {
      randomNumArray.push(randomNum);
    } else {
      i--;
    }
  }

  randomNumArray.forEach((num, i) => {
    if (num <= 10) {
      span[i].style.backgroundColor = "#fbc400"; // 1~10 노란색
    } else if (num <= 20) {
      span[i].style.backgroundColor = "#69c8f2"; // 11~20 파란색
    } else if (num <= 30) {
      span[i].style.backgroundColor = "#ff7272"; // 21~30 빨간색
    } else if (num <= 40) {
      span[i].style.backgroundColor = "#aaa"; // 31~40 회색
    } else {
      span[i].style.backgroundColor = "#b0d840"; // 41~45 초록색
    }
  });

  numWrap.classList.remove(HIDDEN);

  console.log(randomNumArray);
  spanN1.innerText = `${randomNumArray[0]}`;
  spanN2.innerText = `${randomNumArray[1]}`;
  spanN3.innerText = `${randomNumArray[2]}`;
  spanN4.innerText = `${randomNumArray[3]}`;
  spanN5.innerText = `${randomNumArray[4]}`;
  spanN6.innerText = `${randomNumArray[5]}`;
}

btn.addEventListener("click", clickBtn);

function init() {
  btn.oninput = clickBtn;
}
init();
