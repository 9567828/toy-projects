const h1 = document.querySelector("h1");
const btn = document.querySelector(".btn");
const span = document.querySelectorAll("span");
const numWrap = document.querySelector(".random_num");

const HIDDEN = "hidden";

function getRandomNum() {
  let randomNumArray = [];
  for (i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 45) + 1;
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

  return randomNumArray;
}

function clickBtn() {
  const ranNum = getRandomNum();
  numWrap.classList.remove(HIDDEN);

  span.forEach((s, index) => {
    s.innerText = `${ranNum[index]}`;
  });
}
btn.addEventListener("click", clickBtn);
