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

const checkOFF = (element) => {
  for (let i = 0; i < display.length; ++i) {
    element == display[i]
      ? element.classList.remove(OFF)
      : display[i].classList.add(OFF);
  }
};

// 생일 지났는지 여부는 날짜끼리만 비교 가능하니까
// 일자가 1자리 일 때 날짜 오류를 막기 위해서 앞자리에 0 붙이기 (padStart)
const getNowDate = (today) =>
  parseInt(
    `${today.getMonth() + 1}${String(today.getDate()).padStart(2, "0")}`
  );

const getBirthDate = (birthDay) =>
  parseInt(
    `${birthDay.getMonth() + 1}${String(birthDay.getDate()).padStart(2, "0")}`
  );

const getBabyDaysOfBirth = (today, birthDay) => {
  const days = today - birthDay;

  // 출생 후 일수
  const afterBornDays = Math.floor(days / (1000 * 60 * 60 * 24));

  // 아기 개월수 30일 기준 계산
  const BM = Math.floor(afterBornDays / 30);
  const BD = afterBornDays - BM * 30;

  return {
    babyMonth: BM,
    babyDays: BD,
  };

  // 어떻게 되나
};

function paintAge(birthDay, birthYear) {
  const today = new Date();
  const thisYear = today.getFullYear();
  console.log(today, birthDay);

  // 연나이
  const birthYearAge = thisYear - birthYear;

  const nowDate = getNowDate(today);
  const birthDate = getBirthDate(birthDay);

  const babyNumOfMonth = getBabyDaysOfBirth(today, birthDay).babyMonth;
  const babyNumOfDays = getBabyDaysOfBirth(today, birthDay).babyDays;

  if (birthDay > today) {
    console.log("안태어났다. 오늘 날짜보다 크다");
    checkOFF(spantxt);

    spantxt.innerText = `현재 날짜보다 미래 입니다.`;
  } else if (babyNumOfMonth <= 24) {
    console.log("아기나이 24개월 미만");
    checkOFF(MONTHAGE);

    babyMonth.innerText = babyNumOfMonth;
    babyDays.innerText = babyNumOfDays;
  } else {
    BYear.innerText = birthYear;
    yearAge.innerText = birthYearAge;

    if (nowDate === birthDate) {
      checkOFF(CONGBIRTH);
      TXTWRAP.classList.remove(OFF);
      CONGBIRTH.innerText = `🎉 생일을 축하합니다 🎈`;
      nowAge.innerText = birthYearAge;
    } else {
      console.log(nowDate > birthDate ? "생일지났다" : "생일 안지났다");
      checkOFF(TXTWRAP);
      nowAge.innerText = nowDate > birthDate ? birthYearAge : birthYearAge - 1;
    }
  }
}

function BdayOnsubmit(event) {
  event.preventDefault();
  const inputBirth = birthInput.value;
  const offset = 1000 * 60 * 60 * -9;
  const birthDay = new Date(new Date(inputBirth).getTime() + offset); //.setHours(0)

  const birthYear = birthDay.getFullYear();

  paintAge(birthDay, birthYear);
}

dateForm.addEventListener("submit", BdayOnsubmit);
