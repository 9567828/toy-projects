const h1 = document.querySelector("h1");
const btn = document.querySelector(".btn");
const spanTxt = document.querySelector("span")

function clickBtn() {
  let randomNumArray = [ ]
  for (i = 0; i < 6; i++) {
    randomNum = Math.floor(Math.random() * 45) + 1
    if(randomNumArray.indexOf(randomNum) === -1 ) {
      randomNumArray.push(randomNum)
    } else {
      i--
    }
  }
  spanTxt.innerText = `[ ${randomNumArray.join(", ")} ]`
}

btn.addEventListener("click", clickBtn);

function init() {
  btn.oninput = clickBtn;
}
init();