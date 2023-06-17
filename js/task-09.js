function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  btnChangeColor: document.querySelector(".change-color"),
  spanNameColor: document.querySelector(".color"),
  body: document.body,
};
// console.log(refs);

refs.btnChangeColor.addEventListener("click", onBtnChangeColorClick);

function onBtnChangeColorClick(event) {
  refs.spanNameColor.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = getRandomHexColor();
}
