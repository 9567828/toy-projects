const h1 = document.querySelector("h1");
const btn = document.querySelector(".btn");
const spanNum = document.querySelector("span")
const numWrap = document.querySelector(".random_num")

const HIDDEN = "hidden"

function clickLotto () {
  let set = new Set()
  for (i = 0; i < 6; i++) {
    set.add(Math.floor(Math.random() * 45) +1)
  }
  let randomNum = Array.from(set)
  randomNum.forEach((num, i) => {

    if(num < 10) {
      spanNum[i].style.backgroundColor = "#fbc400"
    }else if (num <= 20) {
      spanNum[i].style.backgroundColor = "#69c8f2"
    }else if (num <= 30) {
      spanNum[i].style.backgroundColor = "#ff7272"
    }else if (num <= 40) {
      spanNum[i].style.backgroundColor = "#aaa"
    } else {
      spanNum[i].style.backgroundColor = "#b0d840"
    }
    spanNum.innerText = num
  })

}

btn.addEventListener("click", clickLotto)