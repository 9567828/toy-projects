const TXTWRAP = document.querySelector(".txt_wrap");
const BYear = document.querySelector(".txt_wrap .birthyear");
const yearAge = document.querySelector(".txt_wrap .yearage");
const nowAge = document.querySelector(".txt_wrap .nowage");
const MONTHAGE = document.querySelector(".month_age");
const babyMonth = document.querySelector(".month_age .month");
const babyDays = document.querySelector(".month_age .days");
const CONGBIRTH = document.querySelector(".cong_birth");
const spantxt = document.querySelector(".empty");
const dateForm = document.querySelector(".input_wrap #date_form");
const birthInput = document.querySelector("#date_form input");

const OFF = "off";
const display = [TXTWRAP, MONTHAGE, CONGBIRTH, spantxt];
// console.log(display);

function checkOFF(element) {
  for (let i = 0; i < display.length; ++i) {
    if (element == display[i]) {
      element.classList.remove(OFF);
    } else {
      display[i].classList.add(OFF);
    }
  }
}

checkOFF();

function paintAge(birthDay, findYear) {
  const today = new Date();
  const thisYear = today.getFullYear();
  const ageCalc = today - birthDay;

  console.log(today, birthDay);
  console.log(ageCalc);

  const BYage = thisYear - findYear;
  const nowDate = parseInt(
    `${today.getMonth() + 1}${String(today.getDate()).padStart(2, "0")}`
  );

  const birthDD = parseInt(
    `${birthDay.getMonth() + 1}${String(birthDay.getDate()).padStart(2, "0")}`
  );

  const YD = Math.floor(ageCalc / (1000 * 60 * 60 * 24)); // 출생 후 일수
  const YM = Math.floor((ageCalc / (1000 * 60 * 60 * 24 * 365)) * 12); // 출생 후 개월수
  const YY = Math.floor(ageCalc / (1000 * 60 * 60 * 24 * 365)); // 출생후 년수 - 나이

  //아기 개월 수 (30일 기준 계산)
  const BM = Math.floor(YD / 30);
  const BD = YD - BM * 30;

  console.log(BM, BD);
  console.log(YY, YM, YD);

  if (birthDay > today) {
    console.log("안태어났다. 오늘 날짜보다 크다");
    checkOFF(spantxt);

    spantxt.innerText = `현재 날짜보다 미래 입니다.`;
  } else if (BM <= 24) {
    console.log("아기나이 24개월 미만");
    checkOFF(MONTHAGE);

    babyMonth.innerText = BM;
    babyDays.innerText = BD;
  } else {
    if (nowDate === birthDD) {
      checkOFF(CONGBIRTH);
      TXTWRAP.classList.remove(OFF);
      CONGBIRTH.innerText = `🎉 생일을 축하합니다 🎈`;

      BYear.innerText = findYear;
      yearAge.innerText = BYage;

      nowAge.innerText = BYage;
    } else if (nowDate >= birthDD) {
      console.log("생일 지났다");
      checkOFF(TXTWRAP);
      BYear.innerText = findYear;
      yearAge.innerText = BYage;

      nowAge.innerText = BYage;
    } else if (nowDate < birthDD) {
      console.log("생일 안지났다");
      checkOFF(TXTWRAP);
      BYear.innerText = findYear;
      yearAge.innerText = BYage;

      nowAge.innerText = BYage - 1;
    }
  }
}

function BdayOnsubmit(event) {
  event.preventDefault();
  const inputBirth = birthInput.value;
  const offset = 1000 * 60 * 60 * -9;
  const birthDay = new Date(new Date(inputBirth).getTime() + offset); //.setHours(0)

  const findYear = birthDay.getFullYear();

  paintAge(birthDay, findYear);
}

dateForm.addEventListener("submit", BdayOnsubmit);
