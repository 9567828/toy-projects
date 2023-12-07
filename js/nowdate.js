const h4now = document.querySelector(".now_wrap h4")

const now = new Date()
const nowYear = now.getFullYear()
const nowMonth = String(now.getMonth()+1).padStart(2, "0");
const nowDate = String(now.getDate()).padStart(2, "0")

h4now.innerText = `${nowYear}년 ${nowMonth}년 ${nowDate}일`