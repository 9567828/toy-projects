const layer = document.querySelector(".layer")
const openBtn = document.querySelector(".popup_wrap .btn")
const closeBtn = document.querySelector(".layer .btn")

const OPEN = "open"
const CLOSE = "close"

function clickedPopup () {
  layer.classList.toggle(OPEN)
}

openBtn.addEventListener("click", clickedPopup)

function closePopup() {
  layer.classList.toggle(CLOSE)
  layer.classList.remove(OPEN)
layer.classList.remove(CLOSE)
}

closeBtn.addEventListener("click", closePopup)