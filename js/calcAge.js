const TXTWRAP = document.querySelector(".txt_wrap")
const MONTHAGE = document.querySelector(".month_age")
const yearAge = document.querySelector(".txt_wrap .yearage")
const nowAge = document.querySelector(".txt_wrap .nowage")
const BYear = document.querySelector(".txt_wrap .birthyear")
const CONGBIRTH = document.querySelector(".txt_wrap .cong_birth")
const monthAge = document.querySelector(".month_age .month")
const dayAge = document.querySelector(".month_age .days")
const spantxt = document.querySelector(".empty")
const dateForm = document.querySelector(".input_wrap #date_form")
const birthInput = document.querySelector("#date_form input")

const ON = "on"

function paintAge (birthDay, findYear) {
  const today = new Date()
  const thisYear = today.getFullYear()
  const ageCalc = today - birthDay

  const BYage = thisYear - findYear

  const nowMonth = today.getMonth()+1
  const nowday = today.getDate()
  const BMonth = birthDay.getMonth()+1
  const BDate = birthDay.getDate()

  const nowDate = parseInt(`${nowMonth}${nowday}`)
  const birthDD = parseInt(`${BMonth}${BDate}`)

  console.log(nowDate)
  console.log(birthDD)

  console.log(today, birthDay)

  const YD = Math.floor(ageCalc / (1000*60*60*24))
  const YM = Math.floor(ageCalc / (1000*60*60*24*365) * 12)
  const YY = Math.floor(ageCalc / (1000*60*60*24*365))

  const BM = Math.floor(YD / 30)
  const BD = YD - (BM * 30)

  console.log(BM, BD)
  console.log(YY, YM, YD)

  if (YY == 0) {
    MONTHAGE.classList.remove(ON)
    monthAge.innerText = BM
    dayAge.innerText = BD

  } else if (nowDate > birthDD) {
    console.log("생일이 지났다")
    TXTWRAP.classList.remove(ON)
    BYear.innerText = findYear
    yearAge.innerText = BYage
    nowAge.innerText = YY
    
  } else if (birthDay > today) {
    console.log("안태어났다.")
    spantxt.innerText = `현재 날짜보다 미래입니다.`

  } else if (nowDate < birthDD) {
    console.log("생일이 안지났다.")
    TXTWRAP.classList.remove(ON)
    BYear.innerText = findYear
    yearAge.innerText = BYage
    nowAge.innerText = YY-1

  } else if (nowDate == birthDD) {
    console.log("생일이다")
    TXTWRAP.classList.remove(ON)
    BYear.innerText = findYear
    yearAge.innerText = BYage
    nowAge.innerText = YY
    CONGBIRTH.innerText = `🎉생일을 축하합니다🎈`
  }
}

function BdayOnsubmit (event) {
  event.preventDefault(); 
  const inputBirth = birthInput.value;
  const offset = 1000 * 60 * 60 * -9
  const birthDay = new Date((new Date(inputBirth)).getTime() + offset) //.setHours(0)

  const findYear = parseInt(inputBirth.substring(0, 4))
  console.log(findYear)

  TXTWRAP.classList.add(ON)
  MONTHAGE.classList.add(ON)

  paintAge (birthDay, findYear)
}

dateForm.addEventListener("submit", BdayOnsubmit)
