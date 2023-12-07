const yearAge = document.querySelector(".txt_wrap span:first-child")
const spantxt = document.querySelector(".txt_wrap span:last-child")
const dateForm = document.querySelector(".input_wrap #date_form")
const birthInput = document.querySelector("#date_form input")

const ON_CLASS = "on"

function paintAge (birthDay, findYear) {
  const today = new Date()
  const thisYear = today.getFullYear()
  const ageCalc = today - birthDay

  const YD = Math.floor(ageCalc / (1000*60*60*24))
  const YM = Math.floor(ageCalc / (1000*60*60*24*365) * 12)
  const YY = Math.floor(ageCalc / (1000*60*60*24*365))

  const BYage = thisYear - findYear
  console.log(BYage)

  // console.log(YY, YM, YD)

  if (YD,YM >= 0) {
    console.log("생일이 지났다")
    spantxt.classList.remove(ON_CLASS)
    spantxt.innerText = `현재 나이는 ${YY}살 입니다.`

    yearAge.classList.remove(ON_CLASS)
    yearAge.innerText = `${findYear}년생의 연나이는 ${BYage}살 입니다.`

  } else if (YD,YM <= 0) {
    console.log("안태어났다.")
    spantxt.classList.remove(ON_CLASS)
    spantxt.innerText = `현재 날짜보다 미래입니다.`
  }
    else {
    console.log("생일이 안지났다.")
    spantxt.classList.remove(ON_CLASS)
    spantxt.innerText = `현재 나이는 ${YY-1}살 입니다.`

    yearAge.classList.remove(ON_CLASS)
    yearAge.innerText = `당신의 연나이는 ${YY}살 입니다.`
  }
}

function BdayOnsubmit (event) {
  event.preventDefault();
  const inputBirth = birthInput.value;
  const birthDay = new Date(inputBirth).setHours(0)

  const findYear = parseInt(inputBirth.substring(0, 4))

  spantxt.classList.add(ON_CLASS)
  yearAge.classList.add(ON_CLASS)

  paintAge (birthDay, findYear)
}

dateForm.addEventListener("submit", BdayOnsubmit)
