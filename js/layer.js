const layer = document.querySelector(".layer");
const openBtn = document.querySelector(".popup_wrap .btn");
const closeBtn = document.querySelector(".layer .btn");

const thisYearL = document.querySelector(".this-year");
const thisYearAge = document.querySelector(".this-year-age");
const originAge = document.querySelector(".orgin-age");
const prevBefore = document.querySelector(".prev-before-birth");
const prevAfter = document.querySelector(".prev-after-birth");
const currBefore = document.querySelector(".curr-before-birth");
const currAfter = document.querySelector(".curr-after-birth");

const OPEN = "open";

function clickedPopup() {
  layer.classList.toggle(OPEN);
}
openBtn.addEventListener("click", clickedPopup);

function closePopup() {
  layer.classList.remove(OPEN);
}
closeBtn.addEventListener("click", closePopup);

function setThisYear() {
  const thisTime = new Date();
  return thisTime.getFullYear();
}

const getThisYear = setThisYear();
const getThisYearAge = getThisYear - 1989;

originAge.innerText = `개정전 한국식 세는나이: ${getThisYearAge + 1}살`;
thisYearL.innerText = `${getThisYear}년`;
thisYearAge.innerText = `${getThisYearAge}살`;
prevBefore.innerText = `${getThisYearAge - 1}살`;
prevAfter.innerText = `${getThisYearAge}살`;
currBefore.innerText = `${getThisYearAge - 1}살`;
currAfter.innerText = `${getThisYearAge + 0}살`;
