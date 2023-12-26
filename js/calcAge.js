const TXTWRAP = document.querySelector(".txt_wrap")
const MONTHAGE = document.querySelector(".month_age")
const yearAge = document.querySelector(".txt_wrap .yearage")
const nowAge = document.querySelector(".txt_wrap .nowage")
const BYear = document.querySelector(".txt_wrap .birthyear")
const CONGBIRTH = document.querySelector(".cong_birth")
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

  console.log(today, birthDay)

  const BYage = thisYear - findYear
  const nowDate = parseInt(`${today.getMonth()+1}${String(today.getDate()).padStart(2, "0")}`)
  const birthDD = parseInt(`${birthDay.getMonth()+1}${String(birthDay.getDate()).padStart(2, "0")}`)

  const YD = Math.floor(ageCalc / (1000*60*60*24)) // 출생 후 일수
  const YM = Math.floor(ageCalc / (1000*60*60*24*365) * 12) // 출생 후 개월수
  const YY = Math.floor(ageCalc / (1000*60*60*24*365)) // 출생후 년수 - 나이

  //아기 개월 수 (30일 기준 계산)
  const BM = Math.floor(YD / 30)
  const BD = YD - (BM * 30)

  console.log(nowDate, birthDD)
  console.log(typeof nowDate, typeof birthDD)
  console.log(BM, BD)
  console.log(YY, YM, YD)

  if (BM <= 24) {
    MONTHAGE.classList.remove(ON)
    TXTWRAP.classList.remove(ON)
    monthAge.innerText = BM
    dayAge.innerText = BD
    BYear.innerText = findYear
    yearAge.innerText = BYage
    nowAge.innerText = BYage

  } else if (nowDate > birthDD) {
    console.log("생일이 지났다")
    TXTWRAP.classList.remove(ON)
    BYear.innerText = findYear
    yearAge.innerText = BYage
    nowAge.innerText = BYage
    
  } else if (birthDay > today) {
    console.log("안태어났다.")
    spantxt.innerText = `현재 날짜보다 미래입니다.`

  } else if (nowDate < birthDD) {
    console.log("생일이 안지났다.")
    TXTWRAP.classList.remove(ON)
    BYear.innerText = findYear
    yearAge.innerText = BYage
    nowAge.innerText = BYage-1
  } else {
    console.log("생일이다")
    CONGBIRTH.classList.remove(ON)
    TXTWRAP.classList.remove(ON)
    BYear.innerText = findYear
    yearAge.innerText = BYage
    nowAge.innerText = BYage
    CONGBIRTH.innerText = `🎉 생일을 축하합니다 🎈`
  }

}

function BdayOnsubmit (event) {
  event.preventDefault();
  const inputBirth = birthInput.value;
  const offset = 1000 * 60 * 60 * -9
  const birthDay = new Date((new Date(inputBirth)).getTime() + offset) //.setHours(0)

  const findYear = birthDay.getFullYear();

  TXTWRAP.classList.add(ON)
  MONTHAGE.classList.add(ON)
  CONGBIRTH.classList.add(ON)

  paintAge (birthDay, findYear)
}

dateForm.addEventListener("submit", BdayOnsubmit)
