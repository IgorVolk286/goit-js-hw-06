const refs = {
  btnDeclement: document.querySelector("[data-action = decrement]"),

  btnIncrement: document.querySelector("[data-action=increment]"),
  spanEl: document.querySelector("#value"),
};
console.log(refs);

let counterValue = 0;

refs.btnDeclement.addEventListener("click", onBtnDeclementClick);
function onBtnDeclementClick() {
  counterValue -= 1;
  refs.spanEl.textContent = counterValue;
}

refs.btnIncrement.addEventListener("click", onbtnIncrementClick);
function onbtnIncrementClick() {
  counterValue += 1;
  refs.spanEl.textContent = counterValue;
}
